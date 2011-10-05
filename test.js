var parser = require('./grammar').parser;
var Lexer = require('./lexer').Lexer;

var source = require('fs').readFileSync(require('path').join(process.cwd(), 'test3.khaki'), "utf8");

parser.lexer = {
  lex: function() {
    var tag, _ref;
    _ref = this.tokens[this.pos++] || [''], tag = _ref[0], this.yytext = _ref[1], this.yylineno = _ref[2];
    return tag;
  },
  setInput: function(tokens) {
    this.tokens = tokens;
    return this.pos = 0;
  },
  upcomingInput: function() {
    return "";
  }
};

parser.yy = require('./types');
// new Lexer().tokenize(source)
var compiled = parser.parse(new Lexer().tokenize(source));
console.log('=== compiled ===>\n\n' + compiled + '\n');

//console.log(source);
//var lexer = new Lexer();
//lexer.tokenize(source)