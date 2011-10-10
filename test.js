var sys = require('sys');

var parser = require('./parser').parser;
var Lexer = require('./lexer').Lexer;

var source = require('fs').readFileSync(require('path').join(process.cwd(), 'test.khaki'), "utf8");

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
console.log(source);
// console.log('\n\n=== tokenize ===>\n\n' + sys.inspect(new Lexer().tokenize(source)) + '\n\n');
var compiled = parser.parse(new Lexer().tokenize(source));
console.log('\n\n=== compiled ===>\n\n' + compiled + '\n');