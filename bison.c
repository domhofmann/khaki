
/* description: Parses end executes mathematical expressions. */


%{
  
  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }
  
  print = function (object) {
    if (object.expr)
      console.log(object.expr + ';');
    else
      console.log(object + ';');
  }
  
%}

/* lexical grammar */
%lex
%%

\n\s*                               return 'NEWLINE'
\;+                                 /* skip semicolons */

\s*\=\s*                            return '='

//\s([a-zA-Z]+\:+.*)                return 'SELECTOR'
\s([a-zA-Z]+\:{1})                  return 'SELECTOR_ARG'
\s([a-zA-Z]+)                       return 'SELECTOR_NOARG'

\s+                                 /* skip whitespace */

[0-9]+("."[0-9]+)?\b                return 'NUMBER'
[a-zA-Z][a-zA-Z0-9]*                return 'WORD'
"+"                                 return '+'
"!"                                 return '!'
'@'                                 return '@'
'('                                 return '('
')'                                 return ')'
'['                                 return '['
']'                                 return ']'
","                                 return ','
<<EOF>>                             return 'EOF'
.                                   return 'INVALID'

/lex

/* operator associations and precedence */

%left '+'
%left '='
%left ')'

/*%start program*/

%% /* language grammar */

program
    : expressions
      { console.log("\n\nALL DONE!"); }
    ;
    
expressions:
    | expressions e NEWLINE
      { print($e); }
    | expressions e EOF
      { print($e); }
    ;
    
e
    : e '+' e
      {$$ = $1 + ' + ' + $3;}
    | WORD '=' e
    {{
      if ($e.expr)
        if (!$e.scalar) $$ = $3.type + ' *' + $1 + ' = ' + $3.expr;
        else $$ = $3.type + ' ' + $1 + ' = ' + $3.expr;
      else
        if (!$e.scalar) $$ = 'id ' + $1 + ' = ' + $3;
    }}
    | construct
    | message
    | shortcut
    | WORD
      {$$ = yytext;}
    | NUMBER
      {$$ = yytext;}
    ;

message
    : '(' message ')'
      {$$ = '[' + $2 + ']';}
    | WORD selector_args
      {$$ = '[' + $1 + $2 + ']';}
    | WORD SELECTOR_NOARG
    ;

selector_args
    : selector_args selector_arg
      {$$ = $1 + $2;}
    | selector_arg
    ;

selector_arg
    : SELECTOR_ARG e
    {{
      if ($e.expr) {
        $$ = $1 + $e.expr;
      } else {
        $$ = $1 + $2;
      }
    }}
/*
    : SELECTOR_ARG WORD
      {$$ = $1 + $2;}
    | SELECTOR_ARG NUMBER
      {$$ = $1 + $2;}
*/
    | SELECTOR_ARG
    ;
    
shortcut
    : '@' '(' NUMBER ',' NUMBER ',' NUMBER ',' NUMBER ')'
    {{
      $$ = {
        type: 'CGRect',
        scalar: true,
        expr: 'CGRectMake(' + [$3, $5, $7, $9].join(', ') + ')'
      };
    }}
    | '@' '(' NUMBER ',' NUMBER ')'
    {{ 
      $$ = { 
        type: 'CGPoint',
        scalar: true,
        expr: 'CGPointMake(' + $3 + ', ' + $5 + ')'
      };
    }} 
    ;
    
construct
    : '(' construct ')'
    { $$ = $2; }
    | WORD '!' selector_args
    {{
      $$ = {
        type: $1, 
        expr: '[[[' + $1 + ' alloc] init' + $3.substr(1).capitalize() + '] autorelease]'
      };
    }}
    | WORD '!'
    {{
      $$ = {
        type: $1,
        expr: '[[[' + $1 + ' alloc] init] autorelease]'
      };
    }}
    ;