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
symbols_: {"error":2,"program":3,"body":4,"line":5,"terminator":6,"expression":7,"statement":8,"NEWLINE":9,"EOF":10,"assignment":11,"message":12,"construction":13,"operation":14,"If":15,"value":16,"indent":17,"INDENT":18,"dedent":19,"DEDENT":20,"block":21,"if_block":22,"if":23,"else":24,"OPERATOR":25,"WORD":26,"~":27,"ASSIGNMENT_OPERATOR":28,"!":29,"selector_args":30,"simple_message":31,"literal":32,"parenthetical":33,"selector_arg":34,"SELECTOR_ARG":35,"(":36,")":37,"STRING_LITERAL":38,"NUMBER":39,"$accept":0,"$end":1},
terminals_: {2:"error",8:"statement",9:"NEWLINE",10:"EOF",18:"INDENT",20:"DEDENT",23:"if",24:"else",25:"OPERATOR",26:"WORD",27:"~",28:"ASSIGNMENT_OPERATOR",29:"!",35:"SELECTOR_ARG",36:"(",37:")",38:"STRING_LITERAL",39:"NUMBER"},
productions_: [0,[3,1],[4,1],[4,3],[4,2],[5,1],[5,1],[6,1],[6,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[17,1],[19,1],[21,2],[21,3],[22,3],[22,5],[15,1],[15,3],[14,3],[11,5],[11,4],[11,3],[13,2],[13,3],[13,3],[12,2],[12,1],[31,2],[31,2],[31,2],[31,2],[30,2],[30,1],[34,2],[16,1],[16,1],[16,1],[33,3],[32,1],[32,1]],
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
case 15: scope.push([]) 
break;
case 16: scope.pop() 
break;
case 17:this.$ = ''
break;
case 18:this.$ = code($$[$0-1])
break;
case 19:this.$ = 'if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 20:this.$ = code($$[$0-4]) + ' else if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n}'
break;
case 22:this.$ = code($$[$0-2]) + ' else {\n' + code($$[$0]) + '\n}'
break;
case 23: this.$ = yy._Operation({left: $$[$0-2], operator: $$[$0-1], right: $$[$0]}) 
break;
case 24: this.$ = yy._Assignment({scope: scope, type: $$[$0-4], scalar: true, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 25: this.$ = yy._Assignment({scope: scope, type: $$[$0-3], identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 26: this.$ = yy._Assignment({scope: scope, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 27: this.$ = yy._Construction({type: $$[$0-1]}) 
break;
case 28: this.$ = yy._Construction({type: $$[$0-2], message: $$[$0]}) 
break;
case 29: this.$ = yy._Construction({type: $$[$0-2], message: $$[$0]}) 
break;
case 30: this.$ = yy._Message({target: $$[$0-1], args: $$[$0]}) 
break;
case 32: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 33: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 34: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 35: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 36: $$[$0-1].push($$[$0][0]); this.$ = $$[$0-1] 
break;
case 38: this.$ = [{arg: $$[$0-1], value: $$[$0]}] 
break;
case 42: this.$ = $$[$0-1].replace(/\t/g, '') 
break;
case 43: this.$ = yy._String($$[$0]) 
break;
case 44: this.$ = yy._Number($$[$0]) 
break;
}
},
table: [{3:1,4:2,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,15:10,16:11,22:14,23:[1,17],26:[1,12],31:13,32:15,33:16,36:[1,20],38:[1,18],39:[1,19]},{1:[3]},{1:[2,1],6:21,9:[1,22],10:[1,23]},{1:[2,2],9:[2,2],10:[2,2],20:[2,2],37:[2,2]},{1:[2,5],9:[2,5],10:[2,5],20:[2,5],37:[2,5]},{1:[2,6],9:[2,6],10:[2,6],20:[2,6],37:[2,6]},{1:[2,9],9:[2,9],10:[2,9],18:[2,9],20:[2,9],37:[2,9]},{1:[2,10],9:[2,10],10:[2,10],18:[2,10],20:[2,10],26:[1,24],37:[2,10]},{1:[2,11],9:[2,11],10:[2,11],18:[2,11],20:[2,11],37:[2,11]},{1:[2,12],9:[2,12],10:[2,12],18:[2,12],20:[2,12],37:[2,12]},{1:[2,13],9:[2,13],10:[2,13],18:[2,13],20:[2,13],37:[2,13]},{1:[2,14],9:[2,14],10:[2,14],18:[2,14],20:[2,14],25:[1,26],30:25,34:27,35:[1,28],37:[2,14]},{1:[2,39],9:[2,39],10:[2,39],18:[2,39],20:[2,39],25:[2,39],26:[1,30],27:[1,29],28:[1,31],29:[1,32],35:[2,39],37:[2,39]},{1:[2,31],9:[2,31],10:[2,31],18:[2,31],20:[2,31],26:[2,31],37:[2,31]},{1:[2,21],9:[2,21],10:[2,21],18:[2,21],20:[2,21],24:[1,33],37:[2,21]},{1:[2,40],9:[2,40],10:[2,40],18:[2,40],20:[2,40],25:[2,40],26:[1,34],35:[2,40],37:[2,40]},{1:[2,41],9:[2,41],10:[2,41],18:[2,41],20:[2,41],25:[2,41],26:[1,35],35:[2,41],37:[2,41]},{7:36,11:6,12:7,13:8,14:9,15:10,16:11,22:14,23:[1,17],26:[1,12],31:13,32:15,33:16,36:[1,20],38:[1,18],39:[1,19]},{1:[2,43],9:[2,43],10:[2,43],18:[2,43],20:[2,43],25:[2,43],26:[2,43],35:[2,43],37:[2,43]},{1:[2,44],9:[2,44],10:[2,44],18:[2,44],20:[2,44],25:[2,44],26:[2,44],35:[2,44],37:[2,44]},{4:37,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,15:10,16:11,22:14,23:[1,17],26:[1,12],31:13,32:15,33:16,36:[1,20],38:[1,18],39:[1,19]},{1:[2,4],5:38,7:4,8:[1,5],9:[2,4],10:[2,4],11:6,12:7,13:8,14:9,15:10,16:11,20:[2,4],22:14,23:[1,17],26:[1,12],31:13,32:15,33:16,36:[1,20],37:[2,4],38:[1,18],39:[1,19]},{1:[2,7],8:[2,7],9:[2,7],10:[2,7],20:[2,7],23:[2,7],26:[2,7],36:[2,7],37:[2,7],38:[2,7],39:[2,7]},{1:[2,8],8:[2,8],9:[2,8],10:[2,8],20:[2,8],23:[2,8],26:[2,8],36:[2,8],37:[2,8],38:[2,8],39:[2,8]},{1:[2,35],9:[2,35],10:[2,35],18:[2,35],20:[2,35],26:[2,35],37:[2,35]},{1:[2,30],9:[2,30],10:[2,30],18:[2,30],20:[2,30],26:[2,30],34:39,35:[1,28],37:[2,30]},{16:40,26:[1,41],32:42,33:43,36:[1,20],38:[1,18],39:[1,19]},{1:[2,37],9:[2,37],10:[2,37],18:[2,37],20:[2,37],26:[2,37],35:[2,37],37:[2,37]},{16:44,26:[1,41],32:42,33:43,36:[1,20],38:[1,18],39:[1,19]},{26:[1,45]},{1:[2,32],9:[2,32],10:[2,32],18:[2,32],20:[2,32],26:[2,32],28:[1,46],37:[2,32]},{7:47,11:6,12:7,13:8,14:9,15:10,16:11,22:14,23:[1,17],26:[1,12],31:13,32:15,33:16,36:[1,20],38:[1,18],39:[1,19]},{1:[2,27],9:[2,27],10:[2,27],18:[2,27],20:[2,27],26:[1,49],30:48,34:27,35:[1,28],37:[2,27]},{17:52,18:[1,53],21:50,23:[1,51]},{1:[2,33],9:[2,33],10:[2,33],18:[2,33],20:[2,33],26:[2,33],37:[2,33]},{1:[2,34],9:[2,34],10:[2,34],18:[2,34],20:[2,34],26:[2,34],37:[2,34]},{17:52,18:[1,53],21:54},{6:21,9:[1,22],10:[1,23],37:[1,55]},{1:[2,3],9:[2,3],10:[2,3],20:[2,3],37:[2,3]},{1:[2,36],9:[2,36],10:[2,36],18:[2,36],20:[2,36],26:[2,36],35:[2,36],37:[2,36]},{1:[2,23],9:[2,23],10:[2,23],18:[2,23],20:[2,23],37:[2,23]},{1:[2,39],9:[2,39],10:[2,39],18:[2,39],20:[2,39],26:[2,39],35:[2,39],37:[2,39]},{1:[2,40],9:[2,40],10:[2,40],18:[2,40],20:[2,40],26:[2,40],35:[2,40],37:[2,40]},{1:[2,41],9:[2,41],10:[2,41],18:[2,41],20:[2,41],26:[2,41],35:[2,41],37:[2,41]},{1:[2,38],9:[2,38],10:[2,38],18:[2,38],20:[2,38],26:[2,38],35:[2,38],37:[2,38]},{28:[1,56]},{7:57,11:6,12:7,13:8,14:9,15:10,16:11,22:14,23:[1,17],26:[1,12],31:13,32:15,33:16,36:[1,20],38:[1,18],39:[1,19]},{1:[2,26],9:[2,26],10:[2,26],18:[2,26],20:[2,26],37:[2,26]},{1:[2,28],9:[2,28],10:[2,28],18:[2,28],20:[2,28],34:39,35:[1,28],37:[2,28]},{1:[2,29],9:[2,29],10:[2,29],18:[2,29],20:[2,29],37:[2,29]},{1:[2,22],9:[2,22],10:[2,22],18:[2,22],20:[2,22],37:[2,22]},{7:58,11:6,12:7,13:8,14:9,15:10,16:11,22:14,23:[1,17],26:[1,12],31:13,32:15,33:16,36:[1,20],38:[1,18],39:[1,19]},{4:60,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,15:10,16:11,19:59,20:[1,61],22:14,23:[1,17],26:[1,12],31:13,32:15,33:16,36:[1,20],38:[1,18],39:[1,19]},{8:[2,15],20:[2,15],23:[2,15],26:[2,15],36:[2,15],38:[2,15],39:[2,15]},{1:[2,19],9:[2,19],10:[2,19],18:[2,19],20:[2,19],24:[2,19],37:[2,19]},{1:[2,42],9:[2,42],10:[2,42],18:[2,42],20:[2,42],25:[2,42],26:[2,42],35:[2,42],37:[2,42]},{7:62,11:6,12:7,13:8,14:9,15:10,16:11,22:14,23:[1,17],26:[1,12],31:13,32:15,33:16,36:[1,20],38:[1,18],39:[1,19]},{1:[2,25],9:[2,25],10:[2,25],18:[2,25],20:[2,25],37:[2,25]},{17:52,18:[1,53],21:63},{1:[2,17],9:[2,17],10:[2,17],18:[2,17],20:[2,17],24:[2,17],37:[2,17]},{6:21,9:[1,22],10:[1,23],19:64,20:[1,61]},{1:[2,16],9:[2,16],10:[2,16],18:[2,16],20:[2,16],24:[2,16],37:[2,16]},{1:[2,24],9:[2,24],10:[2,24],18:[2,24],20:[2,24],37:[2,24]},{1:[2,20],9:[2,20],10:[2,20],18:[2,20],20:[2,20],24:[2,20],37:[2,20]},{1:[2,18],9:[2,18],10:[2,18],18:[2,18],20:[2,18],24:[2,18],37:[2,18]}],
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