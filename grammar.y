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

%left OPERATOR
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
  | body terminator line
    {$$ = code($body) + $terminator + code($line)}
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
  | operation
  | If
  | simple_type
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
    {$$ = 'if (' + code($expression) + ') {\n' + code($block) + '\n}'}
  ;
  
If
  : if_block
  ;
  
operation
  : simple_type OPERATOR simple_type
    { $$ = yy._Operation({left: $simple_type1, operator: $OPERATOR, right: $simple_type2}) }
    //{$$ = $simple_type1 + ' ' + $OPERATOR + ' ' + $simple_type2}
  ;
  
assignment
  : WORD '~' WORD ASSIGNMENT_OPERATOR expression
    { $$ = yy._Assignment({scope: scope, type: $WORD1, scalar: true, identifier: $WORD2, operator: $ASSIGNMENT_OPERATOR, expression: $expression}) }
  | WORD WORD ASSIGNMENT_OPERATOR expression
    { $$ = yy._Assignment({scope: scope, type: $WORD1, identifier: $WORD2, operator: $ASSIGNMENT_OPERATOR, expression: $expression}) }
  | WORD ASSIGNMENT_OPERATOR expression
    { $$ = yy._Assignment({scope: scope, identifier: $WORD1, operator: $ASSIGNMENT_OPERATOR, expression: $expression}) }
  ;
  
simple_type
  : WORD
  | NUMBER
    { $$ = yy._Number($NUMBER) }
  ;