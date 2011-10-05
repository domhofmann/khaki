// helpers
%{
  
  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }
  
  var scope = [[]];

  print = function (object) {
    console.log(code(object));
  }
  
  code = function (object) {
    if (object == undefined) return '';

    if (object.code)
      return (object.code);
    else
      return (object);
  }
  
%}

%start program
%%

program
  : body
  {{
    return code($body);
  }}
  ;

body
  : line
    {$$ = Array(scope.length).join('\t') + code($line)}
  | body terminator line
    {$$ = code($body) + $terminator + Array(scope.length).join('\t') + code($line)}
  | body terminator
    {$$ = code($body) + $terminator}
  ;
  
line
  : expression
  | statement
  ;

terminator
  : NEWLINE
    {$$ = '\n'}
  | EOF
    {$$ = ''}
  ;
  
expression
  : assignment
  | message
  | operation
  | If
  | value
  ;
  
indent
  : INDENT
    { scope.push([]) }
  ;
  
dedent
  : DEDENT
    { scope.pop() }
  ;
  
block
  : indent dedent
    {$$ = ''}
  | indent body dedent
    {$$ = code($body)}
  ;
  
if_block
  : 'if' expression block
    {$$ = 'if (' + code($expression) + ') {\n' + code($block) + '\n' + Array(scope.length).join('\t') + '}'}
  | if_block 'else' 'if' expression block
    {$$ = code($if_block) + ' else if (' + code($expression) + ') {\n' + code($block) + '\n}'}
  ;
  
If
  : if_block
  | if_block 'else' block
    {$$ = code($if_block) + ' else {\n' + code($block) + '\n}'}
  ;
  
operation
  : value OPERATOR value
    { $$ = yy._Operation({left: $value1, operator: $OPERATOR, right: $value2}) }
    //{$$ = $value1 + ' ' + $OPERATOR + ' ' + $value2}
  ;
  
assignment
  : WORD '~' WORD ASSIGNMENT_OPERATOR expression
    { $$ = yy._Assignment({scope: scope, type: $WORD1, scalar: true, identifier: $WORD2, operator: $ASSIGNMENT_OPERATOR, expression: $expression}) }
  | WORD WORD ASSIGNMENT_OPERATOR expression
    { $$ = yy._Assignment({scope: scope, type: $WORD1, identifier: $WORD2, operator: $ASSIGNMENT_OPERATOR, expression: $expression}) }
  | WORD ASSIGNMENT_OPERATOR expression
    { $$ = yy._Assignment({scope: scope, identifier: $WORD1, operator: $ASSIGNMENT_OPERATOR, expression: $expression}) }
  ;
  
message
  : value selector_args
    { $$ = yy._Message({target: $value, args: $selector_args}) }
  | simple_message
  ;
  
simple_message
  : WORD WORD
    { $$ = yy._Message({target: $WORD1, message: $WORD2}) }
  | literal WORD
    { $$ = yy._Message({target: $literal, message: $WORD}) }
  | parenthetical WORD
    { $$ = yy._Message({target: $parenthetical, message: $WORD}) }
  | message WORD
    { $$ = yy._Message({target: $message, message: $WORD}) }
  ;
  
selector_args
  : selector_args selector_arg
    { $selector_args.push($selector_arg[0]); $$ = $selector_args }
  | selector_arg
  ;
  
selector_arg
  : SELECTOR_ARG value
    { $$ = [{arg: $SELECTOR_ARG, value: $value}] }
  ;
  
value
  : WORD
  | literal
  | parenthetical
  ;
  
parenthetical
  : '(' body ')'
  { $$ = $body.replace(/\t/g, '') }
  ;

literal
  : STRING_LITERAL
    { $$ = yy._String($STRING_LITERAL) }
  | NUMBER
    { $$ = yy._Number($NUMBER) }
  ;