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
symbols_: {"error":2,"program":3,"body":4,"line":5,"terminator":6,"expression":7,"statement":8,"NEWLINE":9,"EOF":10,"assignment":11,"message":12,"operation":13,"If":14,"value":15,"indent":16,"INDENT":17,"dedent":18,"DEDENT":19,"block":20,"if_block":21,"if":22,"else":23,"OPERATOR":24,"WORD":25,"~":26,"ASSIGNMENT_OPERATOR":27,"selector_args":28,"simple_message":29,"literal":30,"parenthetical":31,"selector_arg":32,"SELECTOR_ARG":33,"(":34,")":35,"STRING_LITERAL":36,"NUMBER":37,"$accept":0,"$end":1},
terminals_: {2:"error",8:"statement",9:"NEWLINE",10:"EOF",17:"INDENT",19:"DEDENT",22:"if",23:"else",24:"OPERATOR",25:"WORD",26:"~",27:"ASSIGNMENT_OPERATOR",33:"SELECTOR_ARG",34:"(",35:")",36:"STRING_LITERAL",37:"NUMBER"},
productions_: [0,[3,1],[4,1],[4,3],[4,2],[5,1],[5,1],[6,1],[6,1],[7,1],[7,1],[7,1],[7,1],[7,1],[16,1],[18,1],[20,2],[20,3],[21,3],[21,5],[14,1],[14,3],[13,3],[11,5],[11,4],[11,3],[12,2],[12,1],[29,2],[29,2],[29,2],[29,2],[28,2],[28,1],[32,2],[15,1],[15,1],[15,1],[31,3],[30,1],[30,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:
    return code($$[$0]);
  
break;
case 2:this.$ = Array(scope.length).join('\t') + code($$[$0])
break;
case 3:this.$ = code($$[$0-2]) + $$[$0-1] + Array(scope.length).join('\t') + code($$[$0])
break;
case 4:this.$ = code($$[$0-1]) + $$[$0]
break;
case 7:this.$ = '\n'
break;
case 8:this.$ = ''
break;
case 14: scope.push([]) 
break;
case 15: scope.pop() 
break;
case 16:this.$ = ''
break;
case 17:this.$ = code($$[$0-1])
break;
case 18:this.$ = 'if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 19:this.$ = code($$[$0-4]) + ' else if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n}'
break;
case 21:this.$ = code($$[$0-2]) + ' else {\n' + code($$[$0]) + '\n}'
break;
case 22: this.$ = yy._Operation({left: $$[$0-2], operator: $$[$0-1], right: $$[$0]}) 
break;
case 23: this.$ = yy._Assignment({scope: scope, type: $$[$0-4], scalar: true, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 24: this.$ = yy._Assignment({scope: scope, type: $$[$0-3], identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 25: this.$ = yy._Assignment({scope: scope, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 26: this.$ = yy._Message({target: $$[$0-1], args: $$[$0]}) 
break;
case 28: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 29: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 30: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 31: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 32: $$[$0-1].push($$[$0][0]); this.$ = $$[$0-1] 
break;
case 34: this.$ = [{arg: $$[$0-1], value: $$[$0]}] 
break;
case 38: this.$ = $$[$0-1].replace(/\t/g, '') 
break;
case 39: this.$ = yy._String($$[$0]) 
break;
case 40: this.$ = yy._Number($$[$0]) 
break;
}
},
table: [{3:1,4:2,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,15:10,21:13,22:[1,16],25:[1,11],29:12,30:14,31:15,34:[1,19],36:[1,17],37:[1,18]},{1:[3]},{1:[2,1],6:20,9:[1,21],10:[1,22]},{1:[2,2],9:[2,2],10:[2,2],19:[2,2],35:[2,2]},{1:[2,5],9:[2,5],10:[2,5],19:[2,5],35:[2,5]},{1:[2,6],9:[2,6],10:[2,6],19:[2,6],35:[2,6]},{1:[2,9],9:[2,9],10:[2,9],17:[2,9],19:[2,9],35:[2,9]},{1:[2,10],9:[2,10],10:[2,10],17:[2,10],19:[2,10],25:[1,23],35:[2,10]},{1:[2,11],9:[2,11],10:[2,11],17:[2,11],19:[2,11],35:[2,11]},{1:[2,12],9:[2,12],10:[2,12],17:[2,12],19:[2,12],35:[2,12]},{1:[2,13],9:[2,13],10:[2,13],17:[2,13],19:[2,13],24:[1,25],28:24,32:26,33:[1,27],35:[2,13]},{1:[2,35],9:[2,35],10:[2,35],17:[2,35],19:[2,35],24:[2,35],25:[1,29],26:[1,28],27:[1,30],33:[2,35],35:[2,35]},{1:[2,27],9:[2,27],10:[2,27],17:[2,27],19:[2,27],25:[2,27],35:[2,27]},{1:[2,20],9:[2,20],10:[2,20],17:[2,20],19:[2,20],23:[1,31],35:[2,20]},{1:[2,36],9:[2,36],10:[2,36],17:[2,36],19:[2,36],24:[2,36],25:[1,32],33:[2,36],35:[2,36]},{1:[2,37],9:[2,37],10:[2,37],17:[2,37],19:[2,37],24:[2,37],25:[1,33],33:[2,37],35:[2,37]},{7:34,11:6,12:7,13:8,14:9,15:10,21:13,22:[1,16],25:[1,11],29:12,30:14,31:15,34:[1,19],36:[1,17],37:[1,18]},{1:[2,39],9:[2,39],10:[2,39],17:[2,39],19:[2,39],24:[2,39],25:[2,39],33:[2,39],35:[2,39]},{1:[2,40],9:[2,40],10:[2,40],17:[2,40],19:[2,40],24:[2,40],25:[2,40],33:[2,40],35:[2,40]},{4:35,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,15:10,21:13,22:[1,16],25:[1,11],29:12,30:14,31:15,34:[1,19],36:[1,17],37:[1,18]},{1:[2,4],5:36,7:4,8:[1,5],9:[2,4],10:[2,4],11:6,12:7,13:8,14:9,15:10,19:[2,4],21:13,22:[1,16],25:[1,11],29:12,30:14,31:15,34:[1,19],35:[2,4],36:[1,17],37:[1,18]},{1:[2,7],8:[2,7],9:[2,7],10:[2,7],19:[2,7],22:[2,7],25:[2,7],34:[2,7],35:[2,7],36:[2,7],37:[2,7]},{1:[2,8],8:[2,8],9:[2,8],10:[2,8],19:[2,8],22:[2,8],25:[2,8],34:[2,8],35:[2,8],36:[2,8],37:[2,8]},{1:[2,31],9:[2,31],10:[2,31],17:[2,31],19:[2,31],25:[2,31],35:[2,31]},{1:[2,26],9:[2,26],10:[2,26],17:[2,26],19:[2,26],25:[2,26],32:37,33:[1,27],35:[2,26]},{15:38,25:[1,39],30:40,31:41,34:[1,19],36:[1,17],37:[1,18]},{1:[2,33],9:[2,33],10:[2,33],17:[2,33],19:[2,33],25:[2,33],33:[2,33],35:[2,33]},{15:42,25:[1,39],30:40,31:41,34:[1,19],36:[1,17],37:[1,18]},{25:[1,43]},{1:[2,28],9:[2,28],10:[2,28],17:[2,28],19:[2,28],25:[2,28],27:[1,44],35:[2,28]},{7:45,11:6,12:7,13:8,14:9,15:10,21:13,22:[1,16],25:[1,11],29:12,30:14,31:15,34:[1,19],36:[1,17],37:[1,18]},{16:48,17:[1,49],20:46,22:[1,47]},{1:[2,29],9:[2,29],10:[2,29],17:[2,29],19:[2,29],25:[2,29],35:[2,29]},{1:[2,30],9:[2,30],10:[2,30],17:[2,30],19:[2,30],25:[2,30],35:[2,30]},{16:48,17:[1,49],20:50},{6:20,9:[1,21],10:[1,22],35:[1,51]},{1:[2,3],9:[2,3],10:[2,3],19:[2,3],35:[2,3]},{1:[2,32],9:[2,32],10:[2,32],17:[2,32],19:[2,32],25:[2,32],33:[2,32],35:[2,32]},{1:[2,22],9:[2,22],10:[2,22],17:[2,22],19:[2,22],35:[2,22]},{1:[2,35],9:[2,35],10:[2,35],17:[2,35],19:[2,35],25:[2,35],33:[2,35],35:[2,35]},{1:[2,36],9:[2,36],10:[2,36],17:[2,36],19:[2,36],25:[2,36],33:[2,36],35:[2,36]},{1:[2,37],9:[2,37],10:[2,37],17:[2,37],19:[2,37],25:[2,37],33:[2,37],35:[2,37]},{1:[2,34],9:[2,34],10:[2,34],17:[2,34],19:[2,34],25:[2,34],33:[2,34],35:[2,34]},{27:[1,52]},{7:53,11:6,12:7,13:8,14:9,15:10,21:13,22:[1,16],25:[1,11],29:12,30:14,31:15,34:[1,19],36:[1,17],37:[1,18]},{1:[2,25],9:[2,25],10:[2,25],17:[2,25],19:[2,25],35:[2,25]},{1:[2,21],9:[2,21],10:[2,21],17:[2,21],19:[2,21],35:[2,21]},{7:54,11:6,12:7,13:8,14:9,15:10,21:13,22:[1,16],25:[1,11],29:12,30:14,31:15,34:[1,19],36:[1,17],37:[1,18]},{4:56,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,15:10,18:55,19:[1,57],21:13,22:[1,16],25:[1,11],29:12,30:14,31:15,34:[1,19],36:[1,17],37:[1,18]},{8:[2,14],19:[2,14],22:[2,14],25:[2,14],34:[2,14],36:[2,14],37:[2,14]},{1:[2,18],9:[2,18],10:[2,18],17:[2,18],19:[2,18],23:[2,18],35:[2,18]},{1:[2,38],9:[2,38],10:[2,38],17:[2,38],19:[2,38],24:[2,38],25:[2,38],33:[2,38],35:[2,38]},{7:58,11:6,12:7,13:8,14:9,15:10,21:13,22:[1,16],25:[1,11],29:12,30:14,31:15,34:[1,19],36:[1,17],37:[1,18]},{1:[2,24],9:[2,24],10:[2,24],17:[2,24],19:[2,24],35:[2,24]},{16:48,17:[1,49],20:59},{1:[2,16],9:[2,16],10:[2,16],17:[2,16],19:[2,16],23:[2,16],35:[2,16]},{6:20,9:[1,21],10:[1,22],18:60,19:[1,57]},{1:[2,15],9:[2,15],10:[2,15],17:[2,15],19:[2,15],23:[2,15],35:[2,15]},{1:[2,23],9:[2,23],10:[2,23],17:[2,23],19:[2,23],35:[2,23]},{1:[2,19],9:[2,19],10:[2,19],17:[2,19],19:[2,19],23:[2,19],35:[2,19]},{1:[2,17],9:[2,17],10:[2,17],17:[2,17],19:[2,17],23:[2,17],35:[2,17]}],
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