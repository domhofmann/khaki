/* Jison generated parser */
var khaki = (function(){

  
  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }
  
  print = function (object) {
    if (object.expr)
      console.log(object.expr + ';');
    else
      console.log(object + ';');
  }
  

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"expressions":4,"e":5,"NEWLINE":6,"EOF":7,"+":8,"WORD":9,"=":10,"construct":11,"message":12,"shortcut":13,"STRING_LITERAL":14,"NUMBER":15,"(":16,")":17,"selector_args":18,"SELECTOR_NOARG":19,"selector_arg":20,"SELECTOR_ARG":21,"@":22,",":23,"!":24,"$accept":0,"$end":1},
terminals_: {2:"error",6:"NEWLINE",7:"EOF",8:"+",9:"WORD",10:"=",14:"STRING_LITERAL",15:"NUMBER",16:"(",17:")",19:"SELECTOR_NOARG",21:"SELECTOR_ARG",22:"@",23:",",24:"!"},
productions_: [0,[3,1],[4,0],[4,3],[4,3],[5,3],[5,3],[5,1],[5,1],[5,1],[5,1],[5,1],[5,1],[12,3],[12,2],[12,2],[18,2],[18,1],[20,2],[20,1],[13,10],[13,6],[11,3],[11,4],[11,3],[11,3],[11,2]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: console.log("\n\nFinished compiling"); 
break;
case 3: print($$[$0-1]); 
break;
case 4: print($$[$0-1]); 
break;
case 5:this.$ = $$[$0-2] + ' + ' + $$[$0];
break;
case 6:
      if ($$[$0].expr)
        if (!$$[$0].scalar) this.$ = $$[$0].type + ' *' + $$[$0-2] + ' = ' + $$[$0].expr;
        else this.$ = $$[$0].type + ' ' + $$[$0-2] + ' = ' + $$[$0].expr;
      else
        if (!$$[$0].scalar) this.$ = 'id ' + $$[$0-2] + ' = ' + $$[$0];
    
break;
case 10:
      this.$ = {
        type: 'NSString',
        expr: '@"' + yytext.substr(1).slice(0, -1) +'"'
      }
    
break;
case 11:this.$ = yytext;
break;
case 12:this.$ = yytext;
break;
case 13:this.$ = '[' + $$[$0-1] + ']';
break;
case 14:this.$ = '[' + $$[$0-1] + $$[$0] + ']';
break;
case 16:this.$ = $$[$0-1] + $$[$0];
break;
case 18:
      if ($$[$0].expr) {
        this.$ = $$[$0-1] + $$[$0].expr;
      } else {
        this.$ = $$[$0-1] + $$[$0];
      }
    
break;
case 20:
      this.$ = {
        type: 'CGRect',
        scalar: true,
        expr: 'CGRectMake(' + [$$[$0-7], $$[$0-5], $$[$0-3], $$[$0-1]].join(', ') + ')'
      };
    
break;
case 21: 
      this.$ = { 
        type: 'CGPoint',
        scalar: true,
        expr: 'CGPointMake(' + $$[$0-3] + ', ' + $$[$0-1] + ')'
      };
    
break;
case 22: this.$ = $$[$0-1]; 
break;
case 23:
      this.$ = {
        type: $$[$0-3], 
        expr: '[[' + $$[$0-3] + ' alloc] init' + $$[$0-1].substr(1).capitalize() + ']'
      };
    
break;
case 24:
      this.$ = {
        type: $$[$0-2],
        expr: '[[' + $$[$0-2] + ' alloc] init]'
      };
    
break;
case 25:
      this.$ = {
        type: $$[$0-2], 
        expr: '[[[' + $$[$0-2] + ' alloc] init' + $$[$0].substr(1).capitalize() + '] autorelease]'
      };
    
break;
case 26:
      this.$ = {
        type: $$[$0-1],
        expr: '[[[' + $$[$0-1] + ' alloc] init] autorelease]'
      };
    
break;
}
},
table: [{1:[2,2],3:1,4:2,9:[2,2],14:[2,2],15:[2,2],16:[2,2],22:[2,2]},{1:[3]},{1:[2,1],5:3,9:[1,4],11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,10],22:[1,11]},{6:[1,12],7:[1,13],8:[1,14]},{6:[2,11],7:[2,11],8:[2,11],10:[1,15],17:[2,11],18:17,19:[1,18],20:19,21:[1,20],24:[1,16]},{6:[2,7],7:[2,7],8:[2,7],17:[2,7],21:[2,7]},{6:[2,8],7:[2,8],8:[2,8],17:[2,8],21:[2,8]},{6:[2,9],7:[2,9],8:[2,9],17:[2,9],21:[2,9]},{6:[2,10],7:[2,10],8:[2,10],17:[2,10],21:[2,10]},{6:[2,12],7:[2,12],8:[2,12],17:[2,12],21:[2,12]},{9:[1,23],11:21,12:22,16:[1,10]},{16:[1,24]},{1:[2,3],9:[2,3],14:[2,3],15:[2,3],16:[2,3],22:[2,3]},{1:[2,4],9:[2,4],14:[2,4],15:[2,4],16:[2,4],22:[2,4]},{5:25,9:[1,4],11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,10],22:[1,11]},{5:26,9:[1,4],11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,10],22:[1,11]},{6:[2,26],7:[2,26],8:[2,26],17:[2,26],18:28,20:19,21:[1,20],24:[1,27]},{6:[2,14],7:[2,14],8:[2,14],17:[2,14],20:29,21:[1,20]},{6:[2,15],7:[2,15],8:[2,15],17:[2,15],21:[2,15]},{6:[2,17],7:[2,17],8:[2,17],17:[2,17],21:[2,17]},{5:30,6:[2,19],7:[2,19],8:[2,19],9:[1,4],11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,10],17:[2,19],21:[2,19],22:[1,11]},{17:[1,31]},{17:[1,32]},{18:17,19:[1,18],20:19,21:[1,20],24:[1,16]},{15:[1,33]},{6:[2,5],7:[2,5],8:[2,5],17:[2,5],21:[2,5]},{6:[2,6],7:[2,6],8:[2,6],17:[2,6],21:[2,6]},{6:[2,24],7:[2,24],8:[2,24],17:[2,24],18:34,20:19,21:[1,20]},{6:[2,25],7:[2,25],8:[2,25],17:[2,25],20:29,21:[1,20]},{6:[2,16],7:[2,16],8:[2,16],17:[2,16],21:[2,16]},{6:[2,18],7:[2,18],8:[1,14],17:[2,18],21:[2,18]},{6:[2,22],7:[2,22],8:[2,22],17:[2,22],21:[2,22]},{6:[2,13],7:[2,13],8:[2,13],17:[2,13],21:[2,13]},{23:[1,35]},{6:[2,23],7:[2,23],8:[2,23],17:[2,23],20:29,21:[1,20]},{15:[1,36]},{17:[1,38],23:[1,37]},{15:[1,39]},{6:[2,21],7:[2,21],8:[2,21],17:[2,21],21:[2,21]},{23:[1,40]},{15:[1,41]},{17:[1,42]},{6:[2,20],7:[2,20],8:[2,20],17:[2,20],21:[2,20]}],
defaultActions: {},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    };

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+'\nExpecting '+expected.join(', ');
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};/* Jison generated lexer */
var lexer = (function(){

var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            match = this._input.match(this.rules[rules[i]]);
            if (match) {
                lines = match[0].match(/\n.*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {first_line: this.yylloc.last_line,
                               last_line: this.yylineno+1,
                               first_column: this.yylloc.last_column,
                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);
                if (token) return token;
                else return;
            }
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    }});
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:return 6
break;
case 1:/* skip semicolons */
break;
case 2:return 14//"
break;
case 3:return 14//'
break;
case 4:return 10
break;
case 5:return 'SELECTOR'
break;
case 6:return 21
break;
case 7:return 19
break;
case 8:/* skip whitespace */
break;
case 9:return 15
break;
case 10:return 9
break;
case 11:return 8
break;
case 12:return 24
break;
case 13:return 22
break;
case 14:return 16
break;
case 15:return 17
break;
case 16:return '['
break;
case 17:return ']'
break;
case 18:return 23
break;
case 19:return 7
break;
case 20:return 'INVALID'
break;
}
};
lexer.rules = [/^\n\s*/,/^;+/,/^"(\\.|[^\\"])*"/,/^'(\\.|[^\\'])*'/,/^\s*=\s*/,/^(?=(?=\s))([a-zA-Z]+:+.*)/,/^\s+([a-zA-Z]+:{1})/,/^\s+([a-zA-Z]+)/,/^\s+/,/^[0-9]+(\.[0-9]+)?\b/,/^[a-zA-Z][a-zA-Z0-9]*/,/^\+/,/^!/,/^@/,/^\(/,/^\)/,/^\[/,/^\]/,/^,/,/^$/,/^./];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"inclusive":true}};return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = khaki;
exports.parse = function () { return khaki.parse.apply(khaki, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}