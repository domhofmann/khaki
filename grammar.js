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
  
  needsSemicolon = function (string) {
    return string.charAt(string.length - 1) != "}";
  }
  

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"body":4,"line":5,"terminator":6,"expression":7,"statement":8,"NEWLINE":9,"EOF":10,"importation":11,"import":12,"WORD":13,"assignment":14,"invocation":15,"message":16,"construction":17,"operation":18,"If":19,"value":20,"fallback":21,"indent":22,"INDENT":23,"dedent":24,"DEDENT":25,"block":26,"if_block":27,"if":28,"else":29,"OPERATOR":30,"~":31,"ASSIGNMENT_OPERATOR":32,"cg_shortcut":33,"@":34,"(":35,"list":36,")":37,"!":38,"selector_args":39,",":40,"simple_message":41,"literal":42,"parenthetical":43,"selector_arg":44,"SELECTOR_ARG":45,"FALLBACK":46,"STRING_LITERAL":47,"NUMBER":48,"$accept":0,"$end":1},
terminals_: {2:"error",9:"NEWLINE",10:"EOF",12:"import",13:"WORD",23:"INDENT",25:"DEDENT",28:"if",29:"else",30:"OPERATOR",31:"~",32:"ASSIGNMENT_OPERATOR",34:"@",35:"(",37:")",38:"!",40:",",45:"SELECTOR_ARG",46:"FALLBACK",47:"STRING_LITERAL",48:"NUMBER"},
productions_: [0,[3,1],[4,1],[4,3],[4,2],[5,1],[5,1],[6,1],[6,1],[8,1],[11,2],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[22,1],[24,1],[26,2],[26,3],[27,3],[27,5],[19,1],[19,3],[18,3],[18,3],[14,5],[14,4],[14,3],[33,4],[17,2],[17,3],[17,3],[15,4],[36,3],[36,1],[16,2],[16,1],[41,2],[41,2],[41,2],[41,2],[39,2],[39,1],[44,2],[20,1],[20,1],[20,1],[20,1],[21,1],[43,3],[42,1],[42,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:
    return code($$[$0]);
  
break;
case 2:this.$ = Array(scope.length).join('\t') + code($$[$0])
break;
case 3:var c = code($$[$0-2]); this.$ = code($$[$0-2]) + (needsSemicolon(c) ? ';' : '') + $$[$0-1] + Array(scope.length).join('\t') + code($$[$0])
break;
case 4:var c = code($$[$0-1]); this.$ = code($$[$0-1]) + (needsSemicolon(c) ? ';' : '') + $$[$0]
break;
case 7:this.$ = '\n'
break;
case 8:this.$ = ''
break;
case 10: this.$ = yy._Importation({framework: $$[$0]}) 
break;
case 19: scope.push([]) 
break;
case 20: scope.pop() 
break;
case 21:this.$ = ''
break;
case 22:var c = code($$[$0-1]); this.$ = code($$[$0-1]) + (needsSemicolon(c) ? ';' : '')
break;
case 23:this.$ = 'if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 24:this.$ = code($$[$0-4]) + ' else if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 26:this.$ = code($$[$0-2]) + ' else {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 27: this.$ = yy._Operation({left: $$[$0-2], operator: $$[$0-1], right: $$[$0]}) 
break;
case 28: this.$ = yy._Operation({left: $$[$0-2], operator: $$[$0-1], right: $$[$0]}) 
break;
case 29: this.$ = yy._Assignment({scope: scope, type: $$[$0-4], scalar: true, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 30: this.$ = yy._Assignment({scope: scope, type: $$[$0-3], identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 31: this.$ = yy._Assignment({scope: scope, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 32: this.$ = yy._CGShortcut($$[$0-1]) 
break;
case 33: this.$ = yy._Construction({type: $$[$0-1]}) 
break;
case 34: this.$ = yy._Construction({type: $$[$0-2], message: $$[$0]}) 
break;
case 35: this.$ = yy._Construction({type: $$[$0-2], message: $$[$0]}) 
break;
case 36: this.$ = yy._Invocation({func: $$[$0-3], args: $$[$0-1]}) 
break;
case 37: $$[$0-2].push($$[$0]); this.$ = $$[$0-2] 
break;
case 38: this.$ = [$$[$0]] 
break;
case 39: this.$ = yy._Message({target: $$[$0-1], args: $$[$0]}) 
break;
case 41: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 42: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 43: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 44: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 45: $$[$0-1].push($$[$0][0]); this.$ = $$[$0-1] 
break;
case 47: this.$ = [{arg: $$[$0-1], value: $$[$0]}] 
break;
case 52: this.$ = $$[$0] 
break;
case 53: this.$ = yy._Parenthetical($$[$0-1]) 
break;
case 54: this.$ = yy._String($$[$0]) 
break;
case 55: this.$ = yy._Number($$[$0]) 
break;
}
},
table: [{3:1,4:2,5:3,7:4,8:5,11:14,12:[1,22],13:[1,15],14:6,15:7,16:8,17:9,18:10,19:11,20:12,21:13,27:17,28:[1,23],33:20,34:[1,27],35:[1,26],41:16,42:18,43:19,46:[1,21],47:[1,24],48:[1,25]},{1:[3]},{1:[2,1],6:28,9:[1,29],10:[1,30]},{1:[2,2],9:[2,2],10:[2,2],25:[2,2],37:[2,2]},{1:[2,5],9:[2,5],10:[2,5],25:[2,5],37:[2,5]},{1:[2,6],9:[2,6],10:[2,6],25:[2,6],37:[2,6]},{1:[2,11],9:[2,11],10:[2,11],23:[2,11],25:[2,11],37:[2,11],40:[2,11]},{1:[2,12],9:[2,12],10:[2,12],23:[2,12],25:[2,12],37:[2,12],40:[2,12]},{1:[2,13],9:[2,13],10:[2,13],13:[1,31],23:[2,13],25:[2,13],37:[2,13],40:[2,13]},{1:[2,14],9:[2,14],10:[2,14],23:[2,14],25:[2,14],37:[2,14],40:[2,14]},{1:[2,15],9:[2,15],10:[2,15],23:[2,15],25:[2,15],30:[1,32],37:[2,15],40:[2,15]},{1:[2,16],9:[2,16],10:[2,16],23:[2,16],25:[2,16],37:[2,16],40:[2,16]},{1:[2,17],9:[2,17],10:[2,17],23:[2,17],25:[2,17],30:[1,34],37:[2,17],39:33,40:[2,17],44:35,45:[1,36]},{1:[2,18],9:[2,18],10:[2,18],23:[2,18],25:[2,18],37:[2,18],40:[2,18]},{1:[2,9],9:[2,9],10:[2,9],25:[2,9],37:[2,9]},{1:[2,48],9:[2,48],10:[2,48],13:[1,38],23:[2,48],25:[2,48],30:[2,48],31:[1,37],32:[1,39],35:[1,40],37:[2,48],38:[1,41],40:[2,48],45:[2,48]},{1:[2,40],9:[2,40],10:[2,40],13:[2,40],23:[2,40],25:[2,40],37:[2,40],40:[2,40]},{1:[2,25],9:[2,25],10:[2,25],23:[2,25],25:[2,25],29:[1,42],37:[2,25],40:[2,25]},{1:[2,49],9:[2,49],10:[2,49],13:[1,43],23:[2,49],25:[2,49],30:[2,49],37:[2,49],40:[2,49],45:[2,49]},{1:[2,50],9:[2,50],10:[2,50],13:[1,44],23:[2,50],25:[2,50],30:[2,50],37:[2,50],40:[2,50],45:[2,50]},{1:[2,51],9:[2,51],10:[2,51],13:[2,51],23:[2,51],25:[2,51],30:[2,51],37:[2,51],40:[2,51],45:[2,51]},{1:[2,52],9:[2,52],10:[2,52],23:[2,52],25:[2,52],37:[2,52],40:[2,52]},{13:[1,45]},{7:46,13:[1,15],14:6,15:7,16:8,17:9,18:10,19:11,20:12,21:13,27:17,28:[1,23],33:20,34:[1,27],35:[1,26],41:16,42:18,43:19,46:[1,21],47:[1,24],48:[1,25]},{1:[2,54],9:[2,54],10:[2,54],13:[2,54],23:[2,54],25:[2,54],30:[2,54],37:[2,54],40:[2,54],45:[2,54]},{1:[2,55],9:[2,55],10:[2,55],13:[2,55],23:[2,55],25:[2,55],30:[2,55],37:[2,55],40:[2,55],45:[2,55]},{4:47,5:3,7:4,8:5,11:14,12:[1,22],13:[1,15],14:6,15:7,16:8,17:9,18:10,19:11,20:12,21:13,27:17,28:[1,23],33:20,34:[1,27],35:[1,26],41:16,42:18,43:19,46:[1,21],47:[1,24],48:[1,25]},{35:[1,48]},{1:[2,4],5:49,7:4,8:5,9:[2,4],10:[2,4],11:14,12:[1,22],13:[1,15],14:6,15:7,16:8,17:9,18:10,19:11,20:12,21:13,25:[2,4],27:17,28:[1,23],33:20,34:[1,27],35:[1,26],37:[2,4],41:16,42:18,43:19,46:[1,21],47:[1,24],48:[1,25]},{1:[2,7],9:[2,7],10:[2,7],12:[2,7],13:[2,7],25:[2,7],28:[2,7],34:[2,7],35:[2,7],37:[2,7],46:[2,7],47:[2,7],48:[2,7]},{1:[2,8],9:[2,8],10:[2,8],12:[2,8],13:[2,8],25:[2,8],28:[2,8],34:[2,8],35:[2,8],37:[2,8],46:[2,8],47:[2,8],48:[2,8]},{1:[2,44],9:[2,44],10:[2,44],13:[2,44],23:[2,44],25:[2,44],37:[2,44],40:[2,44]},{13:[1,51],20:50,33:20,34:[1,27],35:[1,26],42:52,43:53,47:[1,24],48:[1,25]},{1:[2,39],9:[2,39],10:[2,39],13:[2,39],23:[2,39],25:[2,39],37:[2,39],40:[2,39],44:54,45:[1,36]},{13:[1,51],20:55,33:20,34:[1,27],35:[1,26],42:52,43:53,47:[1,24],48:[1,25]},{1:[2,46],9:[2,46],10:[2,46],13:[2,46],23:[2,46],25:[2,46],37:[2,46],40:[2,46],45:[2,46]},{13:[1,51],20:56,33:20,34:[1,27],35:[1,26],42:52,43:53,47:[1,24],48:[1,25]},{13:[1,57]},{1:[2,41],9:[2,41],10:[2,41],13:[2,41],23:[2,41],25:[2,41],32:[1,58],37:[2,41],40:[2,41]},{7:59,13:[1,15],14:6,15:7,16:8,17:9,18:10,19:11,20:12,21:13,27:17,28:[1,23],33:20,34:[1,27],35:[1,26],41:16,42:18,43:19,46:[1,21],47:[1,24],48:[1,25]},{7:61,13:[1,15],14:6,15:7,16:8,17:9,18:10,19:11,20:12,21:13,27:17,28:[1,23],33:20,34:[1,27],35:[1,26],36:60,41:16,42:18,43:19,46:[1,21],47:[1,24],48:[1,25]},{1:[2,33],9:[2,33],10:[2,33],13:[1,63],23:[2,33],25:[2,33],37:[2,33],39:62,40:[2,33],44:35,45:[1,36]},{22:66,23:[1,67],26:64,28:[1,65]},{1:[2,42],9:[2,42],10:[2,42],13:[2,42],23:[2,42],25:[2,42],37:[2,42],40:[2,42]},{1:[2,43],9:[2,43],10:[2,43],13:[2,43],23:[2,43],25:[2,43],37:[2,43],40:[2,43]},{1:[2,10],9:[2,10],10:[2,10],25:[2,10],37:[2,10]},{22:66,23:[1,67],26:68},{6:28,9:[1,29],10:[1,30],37:[1,69]},{7:61,13:[1,15],14:6,15:7,16:8,17:9,18:10,19:11,20:12,21:13,27:17,28:[1,23],33:20,34:[1,27],35:[1,26],36:70,41:16,42:18,43:19,46:[1,21],47:[1,24],48:[1,25]},{1:[2,3],9:[2,3],10:[2,3],25:[2,3],37:[2,3]},{1:[2,27],9:[2,27],10:[2,27],23:[2,27],25:[2,27],30:[2,27],37:[2,27],40:[2,27]},{1:[2,48],9:[2,48],10:[2,48],13:[2,48],23:[2,48],25:[2,48],30:[2,48],37:[2,48],40:[2,48],45:[2,48]},{1:[2,49],9:[2,49],10:[2,49],13:[2,49],23:[2,49],25:[2,49],30:[2,49],37:[2,49],40:[2,49],45:[2,49]},{1:[2,50],9:[2,50],10:[2,50],13:[2,50],23:[2,50],25:[2,50],30:[2,50],37:[2,50],40:[2,50],45:[2,50]},{1:[2,45],9:[2,45],10:[2,45],13:[2,45],23:[2,45],25:[2,45],37:[2,45],40:[2,45],45:[2,45]},{1:[2,28],9:[2,28],10:[2,28],23:[2,28],25:[2,28],30:[2,28],37:[2,28],40:[2,28]},{1:[2,47],9:[2,47],10:[2,47],13:[2,47],23:[2,47],25:[2,47],37:[2,47],40:[2,47],45:[2,47]},{32:[1,71]},{7:72,13:[1,15],14:6,15:7,16:8,17:9,18:10,19:11,20:12,21:13,27:17,28:[1,23],33:20,34:[1,27],35:[1,26],41:16,42:18,43:19,46:[1,21],47:[1,24],48:[1,25]},{1:[2,31],9:[2,31],10:[2,31],23:[2,31],25:[2,31],37:[2,31],40:[2,31]},{37:[1,73],40:[1,74]},{37:[2,38],40:[2,38]},{1:[2,34],9:[2,34],10:[2,34],23:[2,34],25:[2,34],37:[2,34],40:[2,34],44:54,45:[1,36]},{1:[2,35],9:[2,35],10:[2,35],23:[2,35],25:[2,35],37:[2,35],40:[2,35]},{1:[2,26],9:[2,26],10:[2,26],23:[2,26],25:[2,26],37:[2,26],40:[2,26]},{7:75,13:[1,15],14:6,15:7,16:8,17:9,18:10,19:11,20:12,21:13,27:17,28:[1,23],33:20,34:[1,27],35:[1,26],41:16,42:18,43:19,46:[1,21],47:[1,24],48:[1,25]},{4:77,5:3,7:4,8:5,11:14,12:[1,22],13:[1,15],14:6,15:7,16:8,17:9,18:10,19:11,20:12,21:13,24:76,25:[1,78],27:17,28:[1,23],33:20,34:[1,27],35:[1,26],41:16,42:18,43:19,46:[1,21],47:[1,24],48:[1,25]},{12:[2,19],13:[2,19],25:[2,19],28:[2,19],34:[2,19],35:[2,19],46:[2,19],47:[2,19],48:[2,19]},{1:[2,23],9:[2,23],10:[2,23],23:[2,23],25:[2,23],29:[2,23],37:[2,23],40:[2,23]},{1:[2,53],9:[2,53],10:[2,53],13:[2,53],23:[2,53],25:[2,53],30:[2,53],37:[2,53],40:[2,53],45:[2,53]},{37:[1,79],40:[1,74]},{7:80,13:[1,15],14:6,15:7,16:8,17:9,18:10,19:11,20:12,21:13,27:17,28:[1,23],33:20,34:[1,27],35:[1,26],41:16,42:18,43:19,46:[1,21],47:[1,24],48:[1,25]},{1:[2,30],9:[2,30],10:[2,30],23:[2,30],25:[2,30],37:[2,30],40:[2,30]},{1:[2,36],9:[2,36],10:[2,36],23:[2,36],25:[2,36],37:[2,36],40:[2,36]},{7:81,13:[1,15],14:6,15:7,16:8,17:9,18:10,19:11,20:12,21:13,27:17,28:[1,23],33:20,34:[1,27],35:[1,26],41:16,42:18,43:19,46:[1,21],47:[1,24],48:[1,25]},{22:66,23:[1,67],26:82},{1:[2,21],9:[2,21],10:[2,21],23:[2,21],25:[2,21],29:[2,21],37:[2,21],40:[2,21]},{6:28,9:[1,29],10:[1,30],24:83,25:[1,78]},{1:[2,20],9:[2,20],10:[2,20],23:[2,20],25:[2,20],29:[2,20],37:[2,20],40:[2,20]},{1:[2,32],9:[2,32],10:[2,32],13:[2,32],23:[2,32],25:[2,32],30:[2,32],37:[2,32],40:[2,32],45:[2,32]},{1:[2,29],9:[2,29],10:[2,29],23:[2,29],25:[2,29],37:[2,29],40:[2,29]},{37:[2,37],40:[2,37]},{1:[2,24],9:[2,24],10:[2,24],23:[2,24],25:[2,24],29:[2,24],37:[2,24],40:[2,24]},{1:[2,22],9:[2,22],10:[2,22],23:[2,22],25:[2,22],29:[2,22],37:[2,22],40:[2,22]}],
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