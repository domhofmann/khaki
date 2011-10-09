var sys = require('sys');
var count = require('./helpers.js').count;

exports.Lexer = function () {
  
};
var Lexer = exports.Lexer;

Lexer.prototype.addToken = function (tag, value) {
  this.tokens.push([tag, value, this.line]);
}

Lexer.prototype.lastToken = function () {
  return this.tokens[this.tokens.length - 1][0];
}

Lexer.prototype.tokenize = function (code) {
  // strip trailing spaces
  code = code.replace(/\r/g, '').replace(/\s+$/g, '');
  
  this.code = code;
  this.line = 0;
  this.indent = 0;
  this.indebt = 0;
  this.outdebt = 0;
  this.indents = [];
  this.ends = [];
  this.tokens = [];
  
  var i = 0;
  while (this.chunk = code.slice(i)) {
    //i += identifierToken;
    i += 
      this.commentToken() ||
      this.fallbackToken() ||
      this.keywordToken() ||
      this.wordToken() ||
      this.numberToken() ||
      this.stringLiteralToken() ||
      this.assignmentToken() ||
      this.operatorToken() ||
      this.selectorToken() ||
      this.newlineToken() ||
      this.whitespaceToken() ||
      this.literalToken();
  }
  
  this.addToken('EOF', 'EOF');
  
  return this.tokens;
};

Lexer.prototype.commentToken = function () {
  var result = /^#.*\n*/.exec(this.chunk);
  if (!result) return 0;
  
  return result[0].length;
}

Lexer.prototype.fallbackToken = function () {
  var result = /^`.*`/.exec(this.chunk);
  if (!result) return 0;
  
  this.addToken('FALLBACK', result[0].slice(1, -1));
  return result[0].length;
}

Lexer.prototype.keywordToken = function () {
  var keywords = [
    'if',
    'else'
  ];

  var match = new RegExp('^\ *(' + keywords.join('|') + ')\ *');
  var result = match.exec(this.chunk);
  if (!result) return 0;
  
  var keyword = result[1].replace(/\ */g, '');
  
  if (keyword == 'else' && this.lastToken() == 'NEWLINE') {
    this.tokens.pop();
  }
  
  this.addToken(result[1], keyword);
  return result[0].length;
};

Lexer.prototype.wordToken = function () {
  var result = /^[a-zA-Z][a-zA-Z0-9]*/.exec(this.chunk);
  if (!result) return 0;
  
  this.addToken('WORD', result[0]);
  
  return result[0].length;
}

Lexer.prototype.numberToken = function () {
  var result = /^[0-9]+(\.[0-9]+)?\b/.exec(this.chunk);
  if (!result) return 0;
  
  this.addToken('NUMBER', result[0]);
  
  return result[0].length;
};

Lexer.prototype.stringLiteralToken = function () {
  // double quote string literals
  var result = /^\"(\\.|[^\\"])*\"/.exec(this.chunk);
  if (!result) 
  // single quote string literals
    result = /^\'(\\.|[^\\'])*\'/.exec(this.chunk);
  if (!result) 
    return 0;
  
  this.addToken('STRING_LITERAL', result[0]);
  
  return result[0].length;
};

Lexer.prototype.assignmentToken = function () {
  var operators = [
    '=',
    '+=',
    '/=',
    '*=',
    '-='
  ];
  
  operators = operators.map(function (operator) {
    return '\\' + operator;
  });
  
  var match = new RegExp('^\ *(' + operators.join('|') + ')\ *');
  var result = match.exec(this.chunk);
  if (!result) return 0;
  
  var operator = result[0].replace(/\ */g, '');
  
  this.addToken('ASSIGNMENT_OPERATOR', operator);
  return result[0].length;
};

Lexer.prototype.operatorToken = function () {
  var operators = [
    '+'
  ];
  
  operators = operators.map(function (operator) {
    return '\\' + operator;
  });
  
  var match = new RegExp('^\ *[' + operators.join('') + ']\ *');
  var result = match.exec(this.chunk);
  if (!result) return 0;
  
  var operator = result[0].replace(/\ */g, '');
  
  this.addToken('OPERATOR', operator);
  return result[0].length;
};

Lexer.prototype.selectorToken = function () {
  var result = /^ +([a-zA-Z]+\:{1})/.exec(this.chunk);
  if (!result) return 0;
  
  this.addToken('SELECTOR_ARG', result[0]);
  
  return result[0].length;
};

Lexer.prototype.newlineToken = function () {
   
  // if leading whitespace was found on line
  var result = /^(\n+)(\ +)/.exec(this.chunk);
  if (result) {
    
    this.line += count(result[1], "\n");
    
    if (result[2].length > this.indent) {
      this.addToken('INDENT', 'Indent');
      this.indent = result[2].length;
      this.indents.push(this.indent);
    } else if (result[2].length < this.indent) {
      this.addToken('DEDENT', 'Dedent');
      this.indent = result[1].length;
      this.indents.pop();
      
      // @TODO: Is this a hack?
      this.addToken('NEWLINE', 'Newline');
    } else { 
      this.addToken('NEWLINE', 'Newline');
    }
    
    return result[0].length;
  }
  
  // if it was just a standard newline
  var result = /^\n+/.exec(this.chunk);
  if (result) {
    
    this.line += count(result[0], "\n");
    
    if (this.indent > 0) {
      this.indent = 0;
      while (this.indents.length > 0) {
        this.addToken('DEDENT', 'Dedent');
        this.indents.pop();
      }
      
      // @TODO: Is this a hack?
      this.addToken('NEWLINE', 'Newline');
    } else {
      this.addToken('NEWLINE', 'Newline');
    }
    
    return result[0].length;
  }
  
  return 0;
};

Lexer.prototype.whitespaceToken = function () {
  var result = /^\ +/.exec(this.chunk);
  if (result) {
    return result[0].length;
  }
  return 0;
}

Lexer.prototype.literalToken = function () {
  this.addToken(this.chunk.charAt(0), this.chunk.charAt(0));
  return 1;
};

/*
var source = require('fs').readFileSync(require('path').join(process.cwd(), 'test2.khaki'), "utf8");
var lexer = new Lexer();
lexer.tokenize(source)
*/