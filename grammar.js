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
symbols_: {"error":2,"program":3,"body":4,"line":5,"terminator":6,"expression":7,"statement":8,"NEWLINE":9,"EOF":10,"(":11,")":12,"assignment":13,"message":14,"operation":15,"If":16,"value":17,"indent":18,"INDENT":19,"dedent":20,"DEDENT":21,"block":22,"if_block":23,"if":24,"else":25,"OPERATOR":26,"WORD":27,"~":28,"ASSIGNMENT_OPERATOR":29,"selector_args":30,"selector_arg":31,"SELECTOR_ARG":32,"literal":33,"STRING_LITERAL":34,"NUMBER":35,"$accept":0,"$end":1},
terminals_: {2:"error",8:"statement",9:"NEWLINE",10:"EOF",11:"(",12:")",19:"INDENT",21:"DEDENT",24:"if",25:"else",26:"OPERATOR",27:"WORD",28:"~",29:"ASSIGNMENT_OPERATOR",32:"SELECTOR_ARG",34:"STRING_LITERAL",35:"NUMBER"},
productions_: [0,[3,1],[4,1],[4,3],[4,2],[5,1],[5,1],[6,1],[6,1],[7,3],[7,1],[7,1],[7,1],[7,1],[7,1],[18,1],[20,1],[22,2],[22,3],[23,3],[23,5],[16,1],[16,3],[15,3],[13,5],[13,4],[13,3],[14,2],[30,2],[30,1],[31,2],[17,1],[17,1],[33,1],[33,1]],
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
case 9: this.$ = $$[$0-1] 
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
case 27: this.$ = yy._Message({target: $$[$0-1], args: $$[$0]}) 
break;
case 28: $$[$0-1].push($$[$0][0]); this.$ = $$[$0-1] 
break;
case 30: this.$ = [{arg: $$[$0-1], value: $$[$0]}] 
break;
case 33: this.$ = yy._String($$[$0]) 
break;
case 34: this.$ = yy._Number($$[$0]) 
break;
}
},
table: [{3:1,4:2,5:3,7:4,8:[1,5],11:[1,6],13:7,14:8,15:9,16:10,17:11,23:13,24:[1,15],27:[1,12],33:14,34:[1,16],35:[1,17]},{1:[3]},{1:[2,1],6:18,9:[1,19],10:[1,20]},{1:[2,2],9:[2,2],10:[2,2],21:[2,2]},{1:[2,5],9:[2,5],10:[2,5],21:[2,5]},{1:[2,6],9:[2,6],10:[2,6],21:[2,6]},{7:21,11:[1,6],13:7,14:8,15:9,16:10,17:11,23:13,24:[1,15],27:[1,12],33:14,34:[1,16],35:[1,17]},{1:[2,10],9:[2,10],10:[2,10],12:[2,10],19:[2,10],21:[2,10]},{1:[2,11],9:[2,11],10:[2,11],12:[2,11],19:[2,11],21:[2,11]},{1:[2,12],9:[2,12],10:[2,12],12:[2,12],19:[2,12],21:[2,12]},{1:[2,13],9:[2,13],10:[2,13],12:[2,13],19:[2,13],21:[2,13]},{1:[2,14],9:[2,14],10:[2,14],12:[2,14],19:[2,14],21:[2,14],26:[1,23],30:22,31:24,32:[1,25]},{1:[2,31],9:[2,31],10:[2,31],12:[2,31],19:[2,31],21:[2,31],26:[2,31],27:[1,27],28:[1,26],29:[1,28],32:[2,31]},{1:[2,21],9:[2,21],10:[2,21],12:[2,21],19:[2,21],21:[2,21],25:[1,29]},{1:[2,32],9:[2,32],10:[2,32],12:[2,32],19:[2,32],21:[2,32],26:[2,32],32:[2,32]},{7:30,11:[1,6],13:7,14:8,15:9,16:10,17:11,23:13,24:[1,15],27:[1,12],33:14,34:[1,16],35:[1,17]},{1:[2,33],9:[2,33],10:[2,33],12:[2,33],19:[2,33],21:[2,33],26:[2,33],32:[2,33]},{1:[2,34],9:[2,34],10:[2,34],12:[2,34],19:[2,34],21:[2,34],26:[2,34],32:[2,34]},{1:[2,4],5:31,7:4,8:[1,5],9:[2,4],10:[2,4],11:[1,6],13:7,14:8,15:9,16:10,17:11,21:[2,4],23:13,24:[1,15],27:[1,12],33:14,34:[1,16],35:[1,17]},{1:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],21:[2,7],24:[2,7],27:[2,7],34:[2,7],35:[2,7]},{1:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],21:[2,8],24:[2,8],27:[2,8],34:[2,8],35:[2,8]},{12:[1,32]},{1:[2,27],9:[2,27],10:[2,27],12:[2,27],19:[2,27],21:[2,27],31:33,32:[1,25]},{17:34,27:[1,35],33:14,34:[1,16],35:[1,17]},{1:[2,29],9:[2,29],10:[2,29],12:[2,29],19:[2,29],21:[2,29],32:[2,29]},{17:36,27:[1,35],33:14,34:[1,16],35:[1,17]},{27:[1,37]},{29:[1,38]},{7:39,11:[1,6],13:7,14:8,15:9,16:10,17:11,23:13,24:[1,15],27:[1,12],33:14,34:[1,16],35:[1,17]},{18:42,19:[1,43],22:40,24:[1,41]},{18:42,19:[1,43],22:44},{1:[2,3],9:[2,3],10:[2,3],21:[2,3]},{1:[2,9],9:[2,9],10:[2,9],12:[2,9],19:[2,9],21:[2,9]},{1:[2,28],9:[2,28],10:[2,28],12:[2,28],19:[2,28],21:[2,28],32:[2,28]},{1:[2,23],9:[2,23],10:[2,23],12:[2,23],19:[2,23],21:[2,23]},{1:[2,31],9:[2,31],10:[2,31],12:[2,31],19:[2,31],21:[2,31],32:[2,31]},{1:[2,30],9:[2,30],10:[2,30],12:[2,30],19:[2,30],21:[2,30],32:[2,30]},{29:[1,45]},{7:46,11:[1,6],13:7,14:8,15:9,16:10,17:11,23:13,24:[1,15],27:[1,12],33:14,34:[1,16],35:[1,17]},{1:[2,26],9:[2,26],10:[2,26],12:[2,26],19:[2,26],21:[2,26]},{1:[2,22],9:[2,22],10:[2,22],12:[2,22],19:[2,22],21:[2,22]},{7:47,11:[1,6],13:7,14:8,15:9,16:10,17:11,23:13,24:[1,15],27:[1,12],33:14,34:[1,16],35:[1,17]},{4:49,5:3,7:4,8:[1,5],11:[1,6],13:7,14:8,15:9,16:10,17:11,20:48,21:[1,50],23:13,24:[1,15],27:[1,12],33:14,34:[1,16],35:[1,17]},{8:[2,15],11:[2,15],21:[2,15],24:[2,15],27:[2,15],34:[2,15],35:[2,15]},{1:[2,19],9:[2,19],10:[2,19],12:[2,19],19:[2,19],21:[2,19],25:[2,19]},{7:51,11:[1,6],13:7,14:8,15:9,16:10,17:11,23:13,24:[1,15],27:[1,12],33:14,34:[1,16],35:[1,17]},{1:[2,25],9:[2,25],10:[2,25],12:[2,25],19:[2,25],21:[2,25]},{18:42,19:[1,43],22:52},{1:[2,17],9:[2,17],10:[2,17],12:[2,17],19:[2,17],21:[2,17],25:[2,17]},{6:18,9:[1,19],10:[1,20],20:53,21:[1,50]},{1:[2,16],9:[2,16],10:[2,16],12:[2,16],19:[2,16],21:[2,16],25:[2,16]},{1:[2,24],9:[2,24],10:[2,24],12:[2,24],19:[2,24],21:[2,24]},{1:[2,20],9:[2,20],10:[2,20],12:[2,20],19:[2,20],21:[2,20],25:[2,20]},{1:[2,18],9:[2,18],10:[2,18],12:[2,18],19:[2,18],21:[2,18],25:[2,18]}],
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