// helpers
%{

  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }
  
  Array.prototype.last = function () {
    return this[this.length - 1];
  }
  
  var imports = ['#import <UIKit/UIKit.h>'];
  var classes = [require('./types.js')._Class()];
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
  
  merge = function (obj1, obj2) {
      var obj3 = {};
      for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
      for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
      return obj3;
  }
  
  needsSemicolon = function (string) {
    if (!string || !(string instanceof String)) return null;
    return string.charAt(string.length - 1) != "}";
  }
  
  var DELETE = '%%%DELETE%%%';
  
%}

%start program
%%

program
  : body
  {{
    var deleteToken = new RegExp(DELETE + '.*\n', 'g');
    imports = imports.map(function (import) { return code(import) }).join('\n');
    console.log(classes[0]);
    return imports + '\n\n' + code($body).replace(deleteToken, '');
  }}
  ;

body
  : line
    {$$ = Array(scope.length).join('\t') + code($line)}
  | meta
  | body terminator meta
  | body terminator line
    {var c = code($body); $$ = code($body) + (needsSemicolon(c) ? ';' : '') + $terminator + Array(scope.length).join('\t') + code($line)}
  | body terminator
    {var c = code($body); $$ = code($body) + (needsSemicolon(c) ? ';' : '') + $terminator}
  ;
  
importation
  : 'import' WORD
  { imports.push(yy._Importation({framework: $WORD})) }
  ;
  
meta
  : importation
  | class_def
  | method_def
  ;
  
line
  : expression
  | statement
  ;

terminator
  : NEWLINE
    {$$ = '\n'}
  | ';'
    {$$ = '\n'}
  | EOF
    {$$ = ''}
  ;
  
expression
  : assignment
  | invocation
  | message
  | construction
  | operation
  | If
  | value
  | fallback
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
    {var c = code($body); $$ = code($body) + (needsSemicolon(c) ? ';' : '')}
  ;
  
if_block
  : 'if' expression block
    {$$ = 'if (' + code($expression) + ') {\n' + code($block) + '\n' + Array(scope.length).join('\t') + '}'}
  | if_block 'else' 'if' expression block
    {$$ = code($if_block) + ' else if (' + code($expression) + ') {\n' + code($block) + '\n' + Array(scope.length).join('\t') + '}'}
  ;
  
If
  : if_block
  | if_block 'else' block
    {$$ = code($if_block) + ' else {\n' + code($block) + '\n' + Array(scope.length).join('\t') + '}'}
  ;
  
operation
  : operation OPERATOR value
    { $$ = yy._Operation({left: $operation, operator: $OPERATOR, right: $value}) }
  | value OPERATOR value
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
  
cg_shortcut
  : '@' '(' list ')'
    { $$ = yy._CGShortcut($list) }
  ;
  
construction
  : WORD '!'
    { $$ = yy._Construction({type: $WORD}) }
  | WORD '!' selector_args
    { $$ = yy._Construction({type: $WORD, message: $selector_args}) }
  | WORD '!' WORD
    { $$ = yy._Construction({type: $WORD1, message: $WORD2}) }
  ;
  
invocation
  : WORD '(' list ')'
    { $$ = yy._Invocation({func: $WORD, args: $list}) }
  ;
  
list
  : list ',' expression
    { $list.push($expression); $$ = $list }
  | expression
    { $$ = [$expression] }
  ;
  
class_def
  : 'class' WORD ':' WORD block
    { classes.push(yy._Class()); $$ = $block }
  ;

method_def
  : 'def' casts method_arg block
    { $$ = yy._Method(merge({memberOf: classes.last(), operator: '-', signature: $method_arg, block: $block, indents: scope.length}, $casts)) }
  | 'static' 'def' casts method_arg block
    { $$ = yy._Method(merge({memberOf: classes.last(), operator: '+', signature: $method_arg, block: $block, indents: scope.length}, $casts)) }
  | 'def' method_arg block
    { $$ = yy._Method({memberOf: classes.last(), operator: '-', signature: $method_arg, block: $block, indents: scope.length}) }
  | 'static' 'def' method_arg block
    { $$ = yy._Method({memberOf: classes.last(), operator: '+', signature: $method_arg, block: $block, indents: scope.length}) }
  ;

method_arg
  /*
  : method_arg SELECTOR_ARG value '~'
  { $method_arg.args.push([yy._MethodArg({arg: $SELECTOR_ARG, type: $value, scalar: true})]); $$ = $method_arg }
  | method_arg SELECTOR_ARG value
  { $method_arg.args.push([yy._MethodArg({arg: $SELECTOR_ARG, type: $value})]); $$ = $method_arg }
  | SELECTOR_ARG value '~'
  { $$ = {args: [yy._MethodArg({arg: $SELECTOR_ARG, type: $value, scalar: true})]} }
  */
  : method_arg SELECTOR_ARG casts
    { $method_arg.args.push([yy._MethodArg({arg: $SELECTOR_ARG, cast: $casts})]); $$ = $method_arg }
  | SELECTOR_ARG casts
    { $$ = {args: [yy._MethodArg({arg: $SELECTOR_ARG, cast: $casts})]} }
  ;

casts
  : '(' cast ')'
    { $$ = $cast }
  | '(' simple_cast ')'
    { $$ = $simple_cast }
  | simple_cast
  ;

simple_cast
  : WORD '~'
  { $$ = yy._Cast({type: $WORD, scalar: true}) }
  | WORD
  { $$ = yy._Cast({type: $WORD}) }
  ;

cast
  : cast '~'
  { $cast.scalar = true; $$ = $cast}
  | cast WORD
  { $$ = yy._Cast({type: $cast.type + ' ' + $WORD}) }
  /*
  | WORD
  { $$ = yy._Cast({type: $WORD}) }
  */
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
  | cg_shortcut
  ;
  
fallback
  : FALLBACK
    { $$ = $FALLBACK }
  ;
  
parenthetical
  : '(' body ')'
  { $$ = yy._Parenthetical($body) }
  ;

literal
  : STRING_LITERAL
    { $$ = yy._String($STRING_LITERAL) }
  | NUMBER
    { $$ = yy._Number($NUMBER) }
  ;