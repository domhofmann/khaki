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

"`".*"`"                            return 'ESCAPE'
\n\s*                               return 'NEWLINE'
\;+                                 /* skip semicolons */

\"(\\.|[^\\"])*\"                   return 'STRING_LITERAL'//"
\'(\\.|[^\\'])*\'                   return 'STRING_LITERAL'//'

\s*\=\s*                            return '='

"if"\s*                             return 'IF'
"else"                              return 'ELSE'
"end"                               return 'END'

\s+([a-zA-Z]+\:{1})                 return 'SELECTOR_ARG'
//\s+([a-zA-Z]+)                    return 'SELECTOR_NOARG'

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
"~"                                 return '~'
","\s*                              return ','
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
    : lines
    { console.log("\n" + $lines); console.log("\nFinished compiling"); }
    ;
    
lines
    : 
    | lines COMMENT NEWLINE
      { $$ = expr($1) + ''; }
    | lines IF e NEWLINE lines ELSE NEWLINE lines END NEWLINE
      { $$ = expr($1) + 'if (' + $3 + ") {\n" + $5 + "} else {\n" + $8 + "}\n"; }
    | lines IF e NEWLINE lines END NEWLINE
      { $$ = expr($1) + 'if (' + $3 + ") {\n" + $5 + "}\n"; }
    | lines e NEWLINE
      { $$ = expr($1) + expr($2) + ($2.suffix != undefined ? $2.suffix : ';') + "\n"; }
    | lines e EOF
      { $$ = expr($1) + expr($2) + ($2.suffix != undefined ? $2.suffix : ';') + "\n"; }
    ;
    
e
    : e '+' e
      {$$ = $1 + ' + ' + $3;}
    | WORD '~' WORD '=' e
      {$$ = $1 + ' ' + $3 + ' = ' + expr($5);}
    | WORD WORD '=' e
      {$$ = $1 + ' *' + $2 + ' = ' + expr($4);}
    | WORD '=' e
    {{
      if ($e.expr)
        if (!$e.scalar) $$ = $3.type + ' *' + $1 + ' = ' + $3.expr;
        else $$ = $3.type + ' ' + $1 + ' = ' + $3.expr;
      else
        if (!$e.scalar) $$ = 'id ' + $1 + ' = ' + $3;
    }}
    | ESCAPE
    {{ 
      $$ = {
        type: 'id',
        scalar: true,
        expr: expr($1).substr(1).slice(0, -1),
        suffix: '' 
      }
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
    | function
    | shortcut
    | WORD
      {$$ = yytext;}
    | NUMBER
      {$$ = yytext;}
    ;
    
e_list
    : e_list e ','
      {$$ = $1 + ', ' + expr($2);}
    | e_list e
      {$$ = $1 + ', ' + expr($2);}
    | e ','
      {$$ = expr($1)}
    | e 
      {$$ = expr($1);}
    ;

message
    : '(' message ')'
      {$$ = $2;}
    | message WORD
      {$$ = '[' + $1 + ' ' + $2 + ']';}
    | e selector_args
      {$$ = '[' + expr($1) + $2 + ']';}
    | STRING_LITERAL selector_args
      {$$ = '[@"' + $STRING_LITERAL.substr(1).slice(0, -1) + '"' + $2 + ']';}
    | WORD selector_args
      {$$ = '[' + $1 + $2 + ']';}
    | STRING_LITERAL WORD
      {$$ = '[@"' + $STRING_LITERAL.substr(1).slice(0, -1) + '" ' + $2 + ']';}
    | WORD WORD
      {$$ = '[' + $1 + ' ' + $2 + ']';}
    ;

function
    : WORD '(' e_list ')'
      {$$ = $1 + $2 + $3 + $4;}
    | WORD '(' ')'
      {$$ = $1 + $2 + $3;}
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