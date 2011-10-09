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
symbols_: {"error":2,"program":3,"body":4,"line":5,"terminator":6,"expression":7,"statement":8,"NEWLINE":9,"EOF":10,"assignment":11,"invocation":12,"message":13,"construction":14,"operation":15,"If":16,"value":17,"indent":18,"INDENT":19,"dedent":20,"DEDENT":21,"block":22,"if_block":23,"if":24,"else":25,"OPERATOR":26,"WORD":27,"~":28,"ASSIGNMENT_OPERATOR":29,"!":30,"selector_args":31,"(":32,"list":33,")":34,",":35,"simple_message":36,"literal":37,"parenthetical":38,"selector_arg":39,"SELECTOR_ARG":40,"STRING_LITERAL":41,"NUMBER":42,"$accept":0,"$end":1},
terminals_: {2:"error",8:"statement",9:"NEWLINE",10:"EOF",19:"INDENT",21:"DEDENT",24:"if",25:"else",26:"OPERATOR",27:"WORD",28:"~",29:"ASSIGNMENT_OPERATOR",30:"!",32:"(",34:")",35:",",40:"SELECTOR_ARG",41:"STRING_LITERAL",42:"NUMBER"},
productions_: [0,[3,1],[4,1],[4,3],[4,2],[5,1],[5,1],[6,1],[6,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[18,1],[20,1],[22,2],[22,3],[23,3],[23,5],[16,1],[16,3],[15,3],[11,5],[11,4],[11,3],[14,2],[14,3],[14,3],[12,4],[33,3],[33,1],[13,2],[13,1],[36,2],[36,2],[36,2],[36,2],[31,2],[31,1],[39,2],[17,1],[17,1],[17,1],[38,3],[37,1],[37,1]],
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
case 16: scope.push([]) 
break;
case 17: scope.pop() 
break;
case 18:this.$ = ''
break;
case 19:this.$ = code($$[$0-1])
break;
case 20:this.$ = 'if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 21:this.$ = code($$[$0-4]) + ' else if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n}'
break;
case 23:this.$ = code($$[$0-2]) + ' else {\n' + code($$[$0]) + '\n}'
break;
case 24: this.$ = yy._Operation({left: $$[$0-2], operator: $$[$0-1], right: $$[$0]}) 
break;
case 25: this.$ = yy._Assignment({scope: scope, type: $$[$0-4], scalar: true, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 26: this.$ = yy._Assignment({scope: scope, type: $$[$0-3], identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 27: this.$ = yy._Assignment({scope: scope, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 28: this.$ = yy._Construction({type: $$[$0-1]}) 
break;
case 29: this.$ = yy._Construction({type: $$[$0-2], message: $$[$0]}) 
break;
case 30: this.$ = yy._Construction({type: $$[$0-2], message: $$[$0]}) 
break;
case 31: this.$ = yy._Invocation({func: $$[$0-3], args: $$[$0-1]}) 
break;
case 32: $$[$0-2].push($$[$0]); this.$ = $$[$0-2] 
break;
case 33: this.$ = [$$[$0]] 
break;
case 34: this.$ = yy._Message({target: $$[$0-1], args: $$[$0]}) 
break;
case 36: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 37: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 38: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 39: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 40: $$[$0-1].push($$[$0][0]); this.$ = $$[$0-1] 
break;
case 42: this.$ = [{arg: $$[$0-1], value: $$[$0]}] 
break;
case 46: this.$ = $$[$0-1].replace(/\t/g, '') 
break;
case 47: this.$ = yy._String($$[$0]) 
break;
case 48: this.$ = yy._Number($$[$0]) 
break;
}
},
table: [{3:1,4:2,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,15:10,16:11,17:12,23:15,24:[1,18],27:[1,13],32:[1,21],36:14,37:16,38:17,41:[1,19],42:[1,20]},{1:[3]},{1:[2,1],6:22,9:[1,23],10:[1,24]},{1:[2,2],9:[2,2],10:[2,2],21:[2,2],34:[2,2]},{1:[2,5],9:[2,5],10:[2,5],21:[2,5],34:[2,5]},{1:[2,6],9:[2,6],10:[2,6],21:[2,6],34:[2,6]},{1:[2,9],9:[2,9],10:[2,9],19:[2,9],21:[2,9],34:[2,9],35:[2,9]},{1:[2,10],9:[2,10],10:[2,10],19:[2,10],21:[2,10],34:[2,10],35:[2,10]},{1:[2,11],9:[2,11],10:[2,11],19:[2,11],21:[2,11],27:[1,25],34:[2,11],35:[2,11]},{1:[2,12],9:[2,12],10:[2,12],19:[2,12],21:[2,12],34:[2,12],35:[2,12]},{1:[2,13],9:[2,13],10:[2,13],19:[2,13],21:[2,13],34:[2,13],35:[2,13]},{1:[2,14],9:[2,14],10:[2,14],19:[2,14],21:[2,14],34:[2,14],35:[2,14]},{1:[2,15],9:[2,15],10:[2,15],19:[2,15],21:[2,15],26:[1,27],31:26,34:[2,15],35:[2,15],39:28,40:[1,29]},{1:[2,43],9:[2,43],10:[2,43],19:[2,43],21:[2,43],26:[2,43],27:[1,31],28:[1,30],29:[1,32],30:[1,34],32:[1,33],34:[2,43],35:[2,43],40:[2,43]},{1:[2,35],9:[2,35],10:[2,35],19:[2,35],21:[2,35],27:[2,35],34:[2,35],35:[2,35]},{1:[2,22],9:[2,22],10:[2,22],19:[2,22],21:[2,22],25:[1,35],34:[2,22],35:[2,22]},{1:[2,44],9:[2,44],10:[2,44],19:[2,44],21:[2,44],26:[2,44],27:[1,36],34:[2,44],35:[2,44],40:[2,44]},{1:[2,45],9:[2,45],10:[2,45],19:[2,45],21:[2,45],26:[2,45],27:[1,37],34:[2,45],35:[2,45],40:[2,45]},{7:38,11:6,12:7,13:8,14:9,15:10,16:11,17:12,23:15,24:[1,18],27:[1,13],32:[1,21],36:14,37:16,38:17,41:[1,19],42:[1,20]},{1:[2,47],9:[2,47],10:[2,47],19:[2,47],21:[2,47],26:[2,47],27:[2,47],34:[2,47],35:[2,47],40:[2,47]},{1:[2,48],9:[2,48],10:[2,48],19:[2,48],21:[2,48],26:[2,48],27:[2,48],34:[2,48],35:[2,48],40:[2,48]},{4:39,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,15:10,16:11,17:12,23:15,24:[1,18],27:[1,13],32:[1,21],36:14,37:16,38:17,41:[1,19],42:[1,20]},{1:[2,4],5:40,7:4,8:[1,5],9:[2,4],10:[2,4],11:6,12:7,13:8,14:9,15:10,16:11,17:12,21:[2,4],23:15,24:[1,18],27:[1,13],32:[1,21],34:[2,4],36:14,37:16,38:17,41:[1,19],42:[1,20]},{1:[2,7],8:[2,7],9:[2,7],10:[2,7],21:[2,7],24:[2,7],27:[2,7],32:[2,7],34:[2,7],41:[2,7],42:[2,7]},{1:[2,8],8:[2,8],9:[2,8],10:[2,8],21:[2,8],24:[2,8],27:[2,8],32:[2,8],34:[2,8],41:[2,8],42:[2,8]},{1:[2,39],9:[2,39],10:[2,39],19:[2,39],21:[2,39],27:[2,39],34:[2,39],35:[2,39]},{1:[2,34],9:[2,34],10:[2,34],19:[2,34],21:[2,34],27:[2,34],34:[2,34],35:[2,34],39:41,40:[1,29]},{17:42,27:[1,43],32:[1,21],37:44,38:45,41:[1,19],42:[1,20]},{1:[2,41],9:[2,41],10:[2,41],19:[2,41],21:[2,41],27:[2,41],34:[2,41],35:[2,41],40:[2,41]},{17:46,27:[1,43],32:[1,21],37:44,38:45,41:[1,19],42:[1,20]},{27:[1,47]},{1:[2,36],9:[2,36],10:[2,36],19:[2,36],21:[2,36],27:[2,36],29:[1,48],34:[2,36],35:[2,36]},{7:49,11:6,12:7,13:8,14:9,15:10,16:11,17:12,23:15,24:[1,18],27:[1,13],32:[1,21],36:14,37:16,38:17,41:[1,19],42:[1,20]},{7:51,11:6,12:7,13:8,14:9,15:10,16:11,17:12,23:15,24:[1,18],27:[1,13],32:[1,21],33:50,36:14,37:16,38:17,41:[1,19],42:[1,20]},{1:[2,28],9:[2,28],10:[2,28],19:[2,28],21:[2,28],27:[1,53],31:52,34:[2,28],35:[2,28],39:28,40:[1,29]},{18:56,19:[1,57],22:54,24:[1,55]},{1:[2,37],9:[2,37],10:[2,37],19:[2,37],21:[2,37],27:[2,37],34:[2,37],35:[2,37]},{1:[2,38],9:[2,38],10:[2,38],19:[2,38],21:[2,38],27:[2,38],34:[2,38],35:[2,38]},{18:56,19:[1,57],22:58},{6:22,9:[1,23],10:[1,24],34:[1,59]},{1:[2,3],9:[2,3],10:[2,3],21:[2,3],34:[2,3]},{1:[2,40],9:[2,40],10:[2,40],19:[2,40],21:[2,40],27:[2,40],34:[2,40],35:[2,40],40:[2,40]},{1:[2,24],9:[2,24],10:[2,24],19:[2,24],21:[2,24],34:[2,24],35:[2,24]},{1:[2,43],9:[2,43],10:[2,43],19:[2,43],21:[2,43],27:[2,43],34:[2,43],35:[2,43],40:[2,43]},{1:[2,44],9:[2,44],10:[2,44],19:[2,44],21:[2,44],27:[2,44],34:[2,44],35:[2,44],40:[2,44]},{1:[2,45],9:[2,45],10:[2,45],19:[2,45],21:[2,45],27:[2,45],34:[2,45],35:[2,45],40:[2,45]},{1:[2,42],9:[2,42],10:[2,42],19:[2,42],21:[2,42],27:[2,42],34:[2,42],35:[2,42],40:[2,42]},{29:[1,60]},{7:61,11:6,12:7,13:8,14:9,15:10,16:11,17:12,23:15,24:[1,18],27:[1,13],32:[1,21],36:14,37:16,38:17,41:[1,19],42:[1,20]},{1:[2,27],9:[2,27],10:[2,27],19:[2,27],21:[2,27],34:[2,27],35:[2,27]},{34:[1,62],35:[1,63]},{34:[2,33],35:[2,33]},{1:[2,29],9:[2,29],10:[2,29],19:[2,29],21:[2,29],34:[2,29],35:[2,29],39:41,40:[1,29]},{1:[2,30],9:[2,30],10:[2,30],19:[2,30],21:[2,30],34:[2,30],35:[2,30]},{1:[2,23],9:[2,23],10:[2,23],19:[2,23],21:[2,23],34:[2,23],35:[2,23]},{7:64,11:6,12:7,13:8,14:9,15:10,16:11,17:12,23:15,24:[1,18],27:[1,13],32:[1,21],36:14,37:16,38:17,41:[1,19],42:[1,20]},{4:66,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,15:10,16:11,17:12,20:65,21:[1,67],23:15,24:[1,18],27:[1,13],32:[1,21],36:14,37:16,38:17,41:[1,19],42:[1,20]},{8:[2,16],21:[2,16],24:[2,16],27:[2,16],32:[2,16],41:[2,16],42:[2,16]},{1:[2,20],9:[2,20],10:[2,20],19:[2,20],21:[2,20],25:[2,20],34:[2,20],35:[2,20]},{1:[2,46],9:[2,46],10:[2,46],19:[2,46],21:[2,46],26:[2,46],27:[2,46],34:[2,46],35:[2,46],40:[2,46]},{7:68,11:6,12:7,13:8,14:9,15:10,16:11,17:12,23:15,24:[1,18],27:[1,13],32:[1,21],36:14,37:16,38:17,41:[1,19],42:[1,20]},{1:[2,26],9:[2,26],10:[2,26],19:[2,26],21:[2,26],34:[2,26],35:[2,26]},{1:[2,31],9:[2,31],10:[2,31],19:[2,31],21:[2,31],34:[2,31],35:[2,31]},{7:69,11:6,12:7,13:8,14:9,15:10,16:11,17:12,23:15,24:[1,18],27:[1,13],32:[1,21],36:14,37:16,38:17,41:[1,19],42:[1,20]},{18:56,19:[1,57],22:70},{1:[2,18],9:[2,18],10:[2,18],19:[2,18],21:[2,18],25:[2,18],34:[2,18],35:[2,18]},{6:22,9:[1,23],10:[1,24],20:71,21:[1,67]},{1:[2,17],9:[2,17],10:[2,17],19:[2,17],21:[2,17],25:[2,17],34:[2,17],35:[2,17]},{1:[2,25],9:[2,25],10:[2,25],19:[2,25],21:[2,25],34:[2,25],35:[2,25]},{34:[2,32],35:[2,32]},{1:[2,21],9:[2,21],10:[2,21],19:[2,21],21:[2,21],25:[2,21],34:[2,21],35:[2,21]},{1:[2,19],9:[2,19],10:[2,19],19:[2,19],21:[2,19],25:[2,19],34:[2,19],35:[2,19]}],
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