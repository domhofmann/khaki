
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

\n                                  return 'PIPE'
\;+                                 /* skip semicolons */
\s([a-zA-Z]+\:+.*)                  return 'SELECTOR'
[\s]+                               /* skip whitespace */
[0-9]+("."[0-9]+)?\b                return 'NUMBER'
[a-zA-Z][a-zA-Z0-9]*                return 'WORD'
"*"                                 return '*'
"/"                                 return '/'
"-"                                 return '-'
"+"                                 return '+'
"^"                                 return '^'
"%"                                 return '%'
"("                                 return '('
")"                                 return ')'
"PI"                                return 'PI'
"E"                                 return 'E'
"!"                                 return '!'
"="                                 return '='
"@"                                 return '@'
","                                 return ','
<<EOF>>                             return 'EOF'
.                                   return 'INVALID'

/lex

/* operator associations and precedence */

%left '='
%left '+' '-'
%left '*' '/'
%left '^'
%right '%'
%left UMINUS

/*%start program*/

%% /* language grammar */

program
    : expressions
      { console.log("\n\nALL DONE!"); }
    ;
    
expressions:
    | expressions e PIPE
      { print($e); }
    | expressions e EOF
      { print($e); }
    ;
    
e
    : e '+' e
        {$$ = $1+'+'+$3;}
    | e '-' e
        {$$ = $1-$3;}
    | e '*' e
        {$$ = $1*$3;}
    | e '/' e
        {$$ = $1/$3;}
    | e '^' e
        {$$ = Math.pow($1, $3);}
    | e '%'
        {$$ = $1/100;}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    | '(' e ')'
        {$$ = $2;}   
    | shortcut
    | WORD '=' e
        {{
          if ($e.expr)
            $$ = $3.type + ' *' + $1 + ' = ' + $3.expr;
          else
            $$ = $1 + ' = ' + $3;
        }}
    | construct
    | WORD
        {$$ = yytext;}
    | NUMBER
        {$$ = yytext;}
    ;
    
shortcut
    : WORD '@'
    { $$ = 'hi!';}
    ;
    
construct
    : WORD '!' SELECTOR
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