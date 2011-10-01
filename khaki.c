// helpers
%{
  
  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }
  
  print = function (object) {
    console.log(expr(object));
  }
  
  expr = function (object) {
    if (object == undefined) return '';
    if (object.expr)
      return (object.expr);
    else
      return (object);
  }
  
%}

// lex
%lex
%%

\n\s*                               return 'NEWLINE'
\;+                                 /* skip semicolons */

\"(\\.|[^\\"])*\"                   return 'STRING_LITERAL'//"
\'(\\.|[^\\'])*\'                   return 'STRING_LITERAL'//'

\s*\=\s*                            return '='

"if"\s*                             return 'IF'
"else"                              return 'ELSE'
"end"                               return 'END'

\s+([a-zA-Z]+\:{1})                 return 'SELECTOR_ARG'
\s+([a-zA-Z]+)                      return 'SELECTOR_NOARG'

\s+                                 /* skip whitespace */

[0-9]+("."[0-9]+)?\b                return 'NUMBER'
[a-zA-Z][a-zA-Z0-9]*                return 'WORD'
"+"                                 return '+'
"!"                                 return '!'
"@"                                 return '@'
"("                                 return '('
")"                                 return ')'
"["                                 return '['
"]"                                 return ']'
","                                 return ','
<<EOF>>                             return 'EOF'
[\#]+.+                             return 'COMMENT'
.                                   return 'INVALID'

/lex
// operator associations

%left '+'
%left '='
%left ')'

%start program

%%
// grammar

program
    : expressions
    { console.log("\n" + $expressions); console.log("\nFinished compiling"); }
    ;
    
expressions
    : 
    | expressions COMMENT NEWLINE
      { $$ = expr($1) + ''; }
    | expressions IF e NEWLINE expressions ELSE NEWLINE expressions END NEWLINE
      { $$ = expr($1) + 'if (' + $3 + ") {\n" + $5 + "} else {\n" + $8 + "}\n"; }
    | expressions IF e NEWLINE expressions END NEWLINE
      { $$ = expr($1) + 'if (' + $3 + ") {\n" + $5 + "}\n"; }
    | expressions e NEWLINE
      { $$ = expr($1) + expr($2) + ";\n"; }
    | expressions e EOF
      { $$ = expr($1) + expr($2) + ";\n"; }
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
    | STRING_LITERAL
    {{
      $$ = {
        type: 'NSString',
        expr: '@"' + yytext.substr(1).slice(0, -1) + '"'
      }
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
      {$$ = $2;}
    | e selector_args
      {$$ = '[' + expr($1) + $2 + ']';}
    | STRING_LITERAL selector_args
      {$$ = '[@"' + $STRING_LITERAL.substr(1).slice(0, -1) + '"' + $2 + ']';}
    | WORD selector_args
      {$$ = '[' + $1 + $2 + ']';}
    | STRING_LITERAL SELECTOR_NOARG
      {$$ = '[@"' + $STRING_LITERAL.substr(1).slice(0, -1) + '"' + $2 + ']';}
    | WORD SELECTOR_NOARG
      {$$ = '[' + $1 + $2 + ']';}
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
    | WORD '!' '!' selector_args
    {{
      $$ = {
        type: $1, 
        expr: '[[' + $1 + ' alloc] init' + $3.substr(1).capitalize() + ']'
      };
    }}
    | WORD '!' '!'
    {{
      $$ = {
        type: $1,
        expr: '[[' + $1 + ' alloc] init]'
      };
    }}
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