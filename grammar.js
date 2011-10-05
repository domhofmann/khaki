/* Jison generated parser */
var grammar = (function(){

  
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
  

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"body":4,"line":5,"terminator":6,"expression":7,"statement":8,"NEWLINE":9,"EOF":10,"assignment":11,"operation":12,"If":13,"simple_type":14,"indent":15,"INDENT":16,"dedent":17,"DEDENT":18,"block":19,"if_block":20,"if":21,"OPERATOR":22,"WORD":23,"~":24,"ASSIGNMENT_OPERATOR":25,"NUMBER":26,"$accept":0,"$end":1},
terminals_: {2:"error",8:"statement",9:"NEWLINE",10:"EOF",16:"INDENT",18:"DEDENT",21:"if",22:"OPERATOR",23:"WORD",24:"~",25:"ASSIGNMENT_OPERATOR",26:"NUMBER"},
productions_: [0,[3,1],[4,1],[4,3],[4,2],[5,1],[5,1],[6,1],[6,1],[7,1],[7,1],[7,1],[7,1],[15,1],[17,1],[19,2],[19,3],[20,3],[13,1],[12,3],[11,5],[11,4],[11,3],[14,1],[14,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:
    return code($$[$0]);
  
break;
case 3:this.$ = code($$[$0-2]) + $$[$0-1] + code($$[$0])
break;
case 4:this.$ = code($$[$0-1]) + $$[$0]
break;
case 7:this.$ = '\n'
break;
case 8:this.$ = ''
break;
case 13: scope.push([]) 
break;
case 14: scope.pop() 
break;
case 15:this.$ = ''
break;
case 16:this.$ = code($$[$0-1])
break;
case 17:this.$ = 'if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n}'
break;
case 19: this.$ = yy._Operation({left: $$[$0-2], operator: $$[$0-1], right: $$[$0]}) 
break;
case 20: this.$ = yy._Assignment({scope: scope, type: $$[$0-4], scalar: true, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 21: this.$ = yy._Assignment({scope: scope, type: $$[$0-3], identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 22: this.$ = yy._Assignment({scope: scope, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 24: this.$ = yy._Number($$[$0]) 
break;
}
},
table: [{3:1,4:2,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,20:11,21:[1,13],23:[1,10],26:[1,12]},{1:[3]},{1:[2,1],6:14,9:[1,15],10:[1,16]},{1:[2,2],9:[2,2],10:[2,2],18:[2,2]},{1:[2,5],9:[2,5],10:[2,5],18:[2,5]},{1:[2,6],9:[2,6],10:[2,6],18:[2,6]},{1:[2,9],9:[2,9],10:[2,9],16:[2,9],18:[2,9]},{1:[2,10],9:[2,10],10:[2,10],16:[2,10],18:[2,10]},{1:[2,11],9:[2,11],10:[2,11],16:[2,11],18:[2,11]},{1:[2,12],9:[2,12],10:[2,12],16:[2,12],18:[2,12],22:[1,17]},{1:[2,23],9:[2,23],10:[2,23],16:[2,23],18:[2,23],22:[2,23],23:[1,19],24:[1,18],25:[1,20]},{1:[2,18],9:[2,18],10:[2,18],16:[2,18],18:[2,18]},{1:[2,24],9:[2,24],10:[2,24],16:[2,24],18:[2,24],22:[2,24]},{7:21,11:6,12:7,13:8,14:9,20:11,21:[1,13],23:[1,10],26:[1,12]},{1:[2,4],5:22,7:4,8:[1,5],9:[2,4],10:[2,4],11:6,12:7,13:8,14:9,18:[2,4],20:11,21:[1,13],23:[1,10],26:[1,12]},{1:[2,7],8:[2,7],9:[2,7],10:[2,7],18:[2,7],21:[2,7],23:[2,7],26:[2,7]},{1:[2,8],8:[2,8],9:[2,8],10:[2,8],18:[2,8],21:[2,8],23:[2,8],26:[2,8]},{14:23,23:[1,24],26:[1,12]},{23:[1,25]},{25:[1,26]},{7:27,11:6,12:7,13:8,14:9,20:11,21:[1,13],23:[1,10],26:[1,12]},{15:29,16:[1,30],19:28},{1:[2,3],9:[2,3],10:[2,3],18:[2,3]},{1:[2,19],9:[2,19],10:[2,19],16:[2,19],18:[2,19]},{1:[2,23],9:[2,23],10:[2,23],16:[2,23],18:[2,23]},{25:[1,31]},{7:32,11:6,12:7,13:8,14:9,20:11,21:[1,13],23:[1,10],26:[1,12]},{1:[2,22],9:[2,22],10:[2,22],16:[2,22],18:[2,22]},{1:[2,17],9:[2,17],10:[2,17],16:[2,17],18:[2,17]},{4:34,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,17:33,18:[1,35],20:11,21:[1,13],23:[1,10],26:[1,12]},{8:[2,13],18:[2,13],21:[2,13],23:[2,13],26:[2,13]},{7:36,11:6,12:7,13:8,14:9,20:11,21:[1,13],23:[1,10],26:[1,12]},{1:[2,21],9:[2,21],10:[2,21],16:[2,21],18:[2,21]},{1:[2,15],9:[2,15],10:[2,15],16:[2,15],18:[2,15]},{6:14,9:[1,15],10:[1,16],17:37,18:[1,35]},{1:[2,14],9:[2,14],10:[2,14],16:[2,14],18:[2,14]},{1:[2,20],9:[2,20],10:[2,20],16:[2,20],18:[2,20]},{1:[2,16],9:[2,16],10:[2,16],16:[2,16],18:[2,16]}],
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
}};
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); }
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