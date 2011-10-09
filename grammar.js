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
symbols_: {"error":2,"program":3,"body":4,"line":5,"terminator":6,"expression":7,"statement":8,"NEWLINE":9,"EOF":10,"assignment":11,"cg_shortcut":12,"invocation":13,"message":14,"construction":15,"operation":16,"If":17,"value":18,"fallback":19,"indent":20,"INDENT":21,"dedent":22,"DEDENT":23,"block":24,"if_block":25,"if":26,"else":27,"OPERATOR":28,"WORD":29,"~":30,"ASSIGNMENT_OPERATOR":31,"@":32,"(":33,"list":34,")":35,"!":36,"selector_args":37,",":38,"simple_message":39,"literal":40,"parenthetical":41,"selector_arg":42,"SELECTOR_ARG":43,"FALLBACK":44,"STRING_LITERAL":45,"NUMBER":46,"$accept":0,"$end":1},
terminals_: {2:"error",8:"statement",9:"NEWLINE",10:"EOF",21:"INDENT",23:"DEDENT",26:"if",27:"else",28:"OPERATOR",29:"WORD",30:"~",31:"ASSIGNMENT_OPERATOR",32:"@",33:"(",35:")",36:"!",38:",",43:"SELECTOR_ARG",44:"FALLBACK",45:"STRING_LITERAL",46:"NUMBER"},
productions_: [0,[3,1],[4,1],[4,3],[4,2],[5,1],[5,1],[6,1],[6,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[20,1],[22,1],[24,2],[24,3],[25,3],[25,5],[17,1],[17,3],[16,3],[11,5],[11,4],[11,3],[12,4],[15,2],[15,3],[15,3],[13,4],[34,3],[34,1],[14,2],[14,1],[39,2],[39,2],[39,2],[39,2],[37,2],[37,1],[42,2],[18,1],[18,1],[18,1],[19,1],[41,3],[40,1],[40,1]],
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
case 18: scope.push([]) 
break;
case 19: scope.pop() 
break;
case 20:this.$ = ''
break;
case 21:this.$ = code($$[$0-1])
break;
case 22:this.$ = 'if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 23:this.$ = code($$[$0-4]) + ' else if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n}'
break;
case 25:this.$ = code($$[$0-2]) + ' else {\n' + code($$[$0]) + '\n}'
break;
case 26: this.$ = yy._Operation({left: $$[$0-2], operator: $$[$0-1], right: $$[$0]}) 
break;
case 27: this.$ = yy._Assignment({scope: scope, type: $$[$0-4], scalar: true, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 28: this.$ = yy._Assignment({scope: scope, type: $$[$0-3], identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 29: this.$ = yy._Assignment({scope: scope, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 30: this.$ = yy._CGShortcut($$[$0-1]) 
break;
case 31: this.$ = yy._Construction({type: $$[$0-1]}) 
break;
case 32: this.$ = yy._Construction({type: $$[$0-2], message: $$[$0]}) 
break;
case 33: this.$ = yy._Construction({type: $$[$0-2], message: $$[$0]}) 
break;
case 34: this.$ = yy._Invocation({func: $$[$0-3], args: $$[$0-1]}) 
break;
case 35: $$[$0-2].push($$[$0]); this.$ = $$[$0-2] 
break;
case 36: this.$ = [$$[$0]] 
break;
case 37: this.$ = yy._Message({target: $$[$0-1], args: $$[$0]}) 
break;
case 39: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 40: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 41: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 42: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 43: $$[$0-1].push($$[$0][0]); this.$ = $$[$0-1] 
break;
case 45: this.$ = [{arg: $$[$0-1], value: $$[$0]}] 
break;
case 49: this.$ = $$[$0] 
break;
case 50: this.$ = $$[$0-1].replace(/\t/g, '') 
break;
case 51: this.$ = yy._String($$[$0]) 
break;
case 52: this.$ = yy._Number($$[$0]) 
break;
}
},
table: [{3:1,4:2,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,19:14,25:18,26:[1,22],29:[1,15],32:[1,16],33:[1,25],39:17,40:19,41:20,44:[1,21],45:[1,23],46:[1,24]},{1:[3]},{1:[2,1],6:26,9:[1,27],10:[1,28]},{1:[2,2],9:[2,2],10:[2,2],23:[2,2],35:[2,2]},{1:[2,5],9:[2,5],10:[2,5],23:[2,5],35:[2,5]},{1:[2,6],9:[2,6],10:[2,6],23:[2,6],35:[2,6]},{1:[2,9],9:[2,9],10:[2,9],21:[2,9],23:[2,9],35:[2,9],38:[2,9]},{1:[2,10],9:[2,10],10:[2,10],21:[2,10],23:[2,10],35:[2,10],38:[2,10]},{1:[2,11],9:[2,11],10:[2,11],21:[2,11],23:[2,11],35:[2,11],38:[2,11]},{1:[2,12],9:[2,12],10:[2,12],21:[2,12],23:[2,12],29:[1,29],35:[2,12],38:[2,12]},{1:[2,13],9:[2,13],10:[2,13],21:[2,13],23:[2,13],35:[2,13],38:[2,13]},{1:[2,14],9:[2,14],10:[2,14],21:[2,14],23:[2,14],35:[2,14],38:[2,14]},{1:[2,15],9:[2,15],10:[2,15],21:[2,15],23:[2,15],35:[2,15],38:[2,15]},{1:[2,16],9:[2,16],10:[2,16],21:[2,16],23:[2,16],28:[1,31],35:[2,16],37:30,38:[2,16],42:32,43:[1,33]},{1:[2,17],9:[2,17],10:[2,17],21:[2,17],23:[2,17],35:[2,17],38:[2,17]},{1:[2,46],9:[2,46],10:[2,46],21:[2,46],23:[2,46],28:[2,46],29:[1,35],30:[1,34],31:[1,36],33:[1,37],35:[2,46],36:[1,38],38:[2,46],43:[2,46]},{33:[1,39]},{1:[2,38],9:[2,38],10:[2,38],21:[2,38],23:[2,38],29:[2,38],35:[2,38],38:[2,38]},{1:[2,24],9:[2,24],10:[2,24],21:[2,24],23:[2,24],27:[1,40],35:[2,24],38:[2,24]},{1:[2,47],9:[2,47],10:[2,47],21:[2,47],23:[2,47],28:[2,47],29:[1,41],35:[2,47],38:[2,47],43:[2,47]},{1:[2,48],9:[2,48],10:[2,48],21:[2,48],23:[2,48],28:[2,48],29:[1,42],35:[2,48],38:[2,48],43:[2,48]},{1:[2,49],9:[2,49],10:[2,49],21:[2,49],23:[2,49],35:[2,49],38:[2,49]},{7:43,11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,19:14,25:18,26:[1,22],29:[1,15],32:[1,16],33:[1,25],39:17,40:19,41:20,44:[1,21],45:[1,23],46:[1,24]},{1:[2,51],9:[2,51],10:[2,51],21:[2,51],23:[2,51],28:[2,51],29:[2,51],35:[2,51],38:[2,51],43:[2,51]},{1:[2,52],9:[2,52],10:[2,52],21:[2,52],23:[2,52],28:[2,52],29:[2,52],35:[2,52],38:[2,52],43:[2,52]},{4:44,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,19:14,25:18,26:[1,22],29:[1,15],32:[1,16],33:[1,25],39:17,40:19,41:20,44:[1,21],45:[1,23],46:[1,24]},{1:[2,4],5:45,7:4,8:[1,5],9:[2,4],10:[2,4],11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,19:14,23:[2,4],25:18,26:[1,22],29:[1,15],32:[1,16],33:[1,25],35:[2,4],39:17,40:19,41:20,44:[1,21],45:[1,23],46:[1,24]},{1:[2,7],8:[2,7],9:[2,7],10:[2,7],23:[2,7],26:[2,7],29:[2,7],32:[2,7],33:[2,7],35:[2,7],44:[2,7],45:[2,7],46:[2,7]},{1:[2,8],8:[2,8],9:[2,8],10:[2,8],23:[2,8],26:[2,8],29:[2,8],32:[2,8],33:[2,8],35:[2,8],44:[2,8],45:[2,8],46:[2,8]},{1:[2,42],9:[2,42],10:[2,42],21:[2,42],23:[2,42],29:[2,42],35:[2,42],38:[2,42]},{1:[2,37],9:[2,37],10:[2,37],21:[2,37],23:[2,37],29:[2,37],35:[2,37],38:[2,37],42:46,43:[1,33]},{18:47,29:[1,48],33:[1,25],40:49,41:50,45:[1,23],46:[1,24]},{1:[2,44],9:[2,44],10:[2,44],21:[2,44],23:[2,44],29:[2,44],35:[2,44],38:[2,44],43:[2,44]},{18:51,29:[1,48],33:[1,25],40:49,41:50,45:[1,23],46:[1,24]},{29:[1,52]},{1:[2,39],9:[2,39],10:[2,39],21:[2,39],23:[2,39],29:[2,39],31:[1,53],35:[2,39],38:[2,39]},{7:54,11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,19:14,25:18,26:[1,22],29:[1,15],32:[1,16],33:[1,25],39:17,40:19,41:20,44:[1,21],45:[1,23],46:[1,24]},{7:56,11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,19:14,25:18,26:[1,22],29:[1,15],32:[1,16],33:[1,25],34:55,39:17,40:19,41:20,44:[1,21],45:[1,23],46:[1,24]},{1:[2,31],9:[2,31],10:[2,31],21:[2,31],23:[2,31],29:[1,58],35:[2,31],37:57,38:[2,31],42:32,43:[1,33]},{7:56,11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,19:14,25:18,26:[1,22],29:[1,15],32:[1,16],33:[1,25],34:59,39:17,40:19,41:20,44:[1,21],45:[1,23],46:[1,24]},{20:62,21:[1,63],24:60,26:[1,61]},{1:[2,40],9:[2,40],10:[2,40],21:[2,40],23:[2,40],29:[2,40],35:[2,40],38:[2,40]},{1:[2,41],9:[2,41],10:[2,41],21:[2,41],23:[2,41],29:[2,41],35:[2,41],38:[2,41]},{20:62,21:[1,63],24:64},{6:26,9:[1,27],10:[1,28],35:[1,65]},{1:[2,3],9:[2,3],10:[2,3],23:[2,3],35:[2,3]},{1:[2,43],9:[2,43],10:[2,43],21:[2,43],23:[2,43],29:[2,43],35:[2,43],38:[2,43],43:[2,43]},{1:[2,26],9:[2,26],10:[2,26],21:[2,26],23:[2,26],35:[2,26],38:[2,26]},{1:[2,46],9:[2,46],10:[2,46],21:[2,46],23:[2,46],29:[2,46],35:[2,46],38:[2,46],43:[2,46]},{1:[2,47],9:[2,47],10:[2,47],21:[2,47],23:[2,47],29:[2,47],35:[2,47],38:[2,47],43:[2,47]},{1:[2,48],9:[2,48],10:[2,48],21:[2,48],23:[2,48],29:[2,48],35:[2,48],38:[2,48],43:[2,48]},{1:[2,45],9:[2,45],10:[2,45],21:[2,45],23:[2,45],29:[2,45],35:[2,45],38:[2,45],43:[2,45]},{31:[1,66]},{7:67,11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,19:14,25:18,26:[1,22],29:[1,15],32:[1,16],33:[1,25],39:17,40:19,41:20,44:[1,21],45:[1,23],46:[1,24]},{1:[2,29],9:[2,29],10:[2,29],21:[2,29],23:[2,29],35:[2,29],38:[2,29]},{35:[1,68],38:[1,69]},{35:[2,36],38:[2,36]},{1:[2,32],9:[2,32],10:[2,32],21:[2,32],23:[2,32],35:[2,32],38:[2,32],42:46,43:[1,33]},{1:[2,33],9:[2,33],10:[2,33],21:[2,33],23:[2,33],35:[2,33],38:[2,33]},{35:[1,70],38:[1,69]},{1:[2,25],9:[2,25],10:[2,25],21:[2,25],23:[2,25],35:[2,25],38:[2,25]},{7:71,11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,19:14,25:18,26:[1,22],29:[1,15],32:[1,16],33:[1,25],39:17,40:19,41:20,44:[1,21],45:[1,23],46:[1,24]},{4:73,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,19:14,22:72,23:[1,74],25:18,26:[1,22],29:[1,15],32:[1,16],33:[1,25],39:17,40:19,41:20,44:[1,21],45:[1,23],46:[1,24]},{8:[2,18],23:[2,18],26:[2,18],29:[2,18],32:[2,18],33:[2,18],44:[2,18],45:[2,18],46:[2,18]},{1:[2,22],9:[2,22],10:[2,22],21:[2,22],23:[2,22],27:[2,22],35:[2,22],38:[2,22]},{1:[2,50],9:[2,50],10:[2,50],21:[2,50],23:[2,50],28:[2,50],29:[2,50],35:[2,50],38:[2,50],43:[2,50]},{7:75,11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,19:14,25:18,26:[1,22],29:[1,15],32:[1,16],33:[1,25],39:17,40:19,41:20,44:[1,21],45:[1,23],46:[1,24]},{1:[2,28],9:[2,28],10:[2,28],21:[2,28],23:[2,28],35:[2,28],38:[2,28]},{1:[2,34],9:[2,34],10:[2,34],21:[2,34],23:[2,34],35:[2,34],38:[2,34]},{7:76,11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,19:14,25:18,26:[1,22],29:[1,15],32:[1,16],33:[1,25],39:17,40:19,41:20,44:[1,21],45:[1,23],46:[1,24]},{1:[2,30],9:[2,30],10:[2,30],21:[2,30],23:[2,30],35:[2,30],38:[2,30]},{20:62,21:[1,63],24:77},{1:[2,20],9:[2,20],10:[2,20],21:[2,20],23:[2,20],27:[2,20],35:[2,20],38:[2,20]},{6:26,9:[1,27],10:[1,28],22:78,23:[1,74]},{1:[2,19],9:[2,19],10:[2,19],21:[2,19],23:[2,19],27:[2,19],35:[2,19],38:[2,19]},{1:[2,27],9:[2,27],10:[2,27],21:[2,27],23:[2,27],35:[2,27],38:[2,27]},{35:[2,35],38:[2,35]},{1:[2,23],9:[2,23],10:[2,23],21:[2,23],23:[2,23],27:[2,23],35:[2,23],38:[2,23]},{1:[2,21],9:[2,21],10:[2,21],21:[2,21],23:[2,21],27:[2,21],35:[2,21],38:[2,21]}],
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