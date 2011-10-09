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
symbols_: {"error":2,"program":3,"body":4,"line":5,"terminator":6,"expression":7,"statement":8,"NEWLINE":9,"EOF":10,"assignment":11,"invocation":12,"message":13,"construction":14,"operation":15,"If":16,"value":17,"fallback":18,"indent":19,"INDENT":20,"dedent":21,"DEDENT":22,"block":23,"if_block":24,"if":25,"else":26,"OPERATOR":27,"WORD":28,"~":29,"ASSIGNMENT_OPERATOR":30,"cg_shortcut":31,"@":32,"(":33,"list":34,")":35,"!":36,"selector_args":37,",":38,"simple_message":39,"literal":40,"parenthetical":41,"selector_arg":42,"SELECTOR_ARG":43,"FALLBACK":44,"STRING_LITERAL":45,"NUMBER":46,"$accept":0,"$end":1},
terminals_: {2:"error",8:"statement",9:"NEWLINE",10:"EOF",20:"INDENT",22:"DEDENT",25:"if",26:"else",27:"OPERATOR",28:"WORD",29:"~",30:"ASSIGNMENT_OPERATOR",32:"@",33:"(",35:")",36:"!",38:",",43:"SELECTOR_ARG",44:"FALLBACK",45:"STRING_LITERAL",46:"NUMBER"},
productions_: [0,[3,1],[4,1],[4,3],[4,2],[5,1],[5,1],[6,1],[6,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[19,1],[21,1],[23,2],[23,3],[24,3],[24,5],[16,1],[16,3],[15,3],[15,3],[11,5],[11,4],[11,3],[31,4],[14,2],[14,3],[14,3],[12,4],[34,3],[34,1],[13,2],[13,1],[39,2],[39,2],[39,2],[39,2],[37,2],[37,1],[42,2],[17,1],[17,1],[17,1],[17,1],[18,1],[41,3],[40,1],[40,1]],
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
case 17: scope.push([]) 
break;
case 18: scope.pop() 
break;
case 19:this.$ = ''
break;
case 20:var c = code($$[$0-1]); this.$ = code($$[$0-1]) + (needsSemicolon(c) ? ';' : '')
break;
case 21:this.$ = 'if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 22:this.$ = code($$[$0-4]) + ' else if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 24:this.$ = code($$[$0-2]) + ' else {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 25: this.$ = yy._Operation({left: $$[$0-2], operator: $$[$0-1], right: $$[$0]}) 
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
case 50: this.$ = $$[$0] 
break;
case 51: this.$ = yy._Parenthetical($$[$0-1]) 
break;
case 52: this.$ = yy._String($$[$0]) 
break;
case 53: this.$ = yy._Number($$[$0]) 
break;
}
},
table: [{3:1,4:2,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,24:16,25:[1,21],28:[1,14],31:19,32:[1,25],33:[1,24],39:15,40:17,41:18,44:[1,20],45:[1,22],46:[1,23]},{1:[3]},{1:[2,1],6:26,9:[1,27],10:[1,28]},{1:[2,2],9:[2,2],10:[2,2],22:[2,2],35:[2,2]},{1:[2,5],9:[2,5],10:[2,5],22:[2,5],35:[2,5]},{1:[2,6],9:[2,6],10:[2,6],22:[2,6],35:[2,6]},{1:[2,9],9:[2,9],10:[2,9],20:[2,9],22:[2,9],35:[2,9],38:[2,9]},{1:[2,10],9:[2,10],10:[2,10],20:[2,10],22:[2,10],35:[2,10],38:[2,10]},{1:[2,11],9:[2,11],10:[2,11],20:[2,11],22:[2,11],28:[1,29],35:[2,11],38:[2,11]},{1:[2,12],9:[2,12],10:[2,12],20:[2,12],22:[2,12],35:[2,12],38:[2,12]},{1:[2,13],9:[2,13],10:[2,13],20:[2,13],22:[2,13],27:[1,30],35:[2,13],38:[2,13]},{1:[2,14],9:[2,14],10:[2,14],20:[2,14],22:[2,14],35:[2,14],38:[2,14]},{1:[2,15],9:[2,15],10:[2,15],20:[2,15],22:[2,15],27:[1,32],35:[2,15],37:31,38:[2,15],42:33,43:[1,34]},{1:[2,16],9:[2,16],10:[2,16],20:[2,16],22:[2,16],35:[2,16],38:[2,16]},{1:[2,46],9:[2,46],10:[2,46],20:[2,46],22:[2,46],27:[2,46],28:[1,36],29:[1,35],30:[1,37],33:[1,38],35:[2,46],36:[1,39],38:[2,46],43:[2,46]},{1:[2,38],9:[2,38],10:[2,38],20:[2,38],22:[2,38],28:[2,38],35:[2,38],38:[2,38]},{1:[2,23],9:[2,23],10:[2,23],20:[2,23],22:[2,23],26:[1,40],35:[2,23],38:[2,23]},{1:[2,47],9:[2,47],10:[2,47],20:[2,47],22:[2,47],27:[2,47],28:[1,41],35:[2,47],38:[2,47],43:[2,47]},{1:[2,48],9:[2,48],10:[2,48],20:[2,48],22:[2,48],27:[2,48],28:[1,42],35:[2,48],38:[2,48],43:[2,48]},{1:[2,49],9:[2,49],10:[2,49],20:[2,49],22:[2,49],27:[2,49],28:[2,49],35:[2,49],38:[2,49],43:[2,49]},{1:[2,50],9:[2,50],10:[2,50],20:[2,50],22:[2,50],35:[2,50],38:[2,50]},{7:43,11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,24:16,25:[1,21],28:[1,14],31:19,32:[1,25],33:[1,24],39:15,40:17,41:18,44:[1,20],45:[1,22],46:[1,23]},{1:[2,52],9:[2,52],10:[2,52],20:[2,52],22:[2,52],27:[2,52],28:[2,52],35:[2,52],38:[2,52],43:[2,52]},{1:[2,53],9:[2,53],10:[2,53],20:[2,53],22:[2,53],27:[2,53],28:[2,53],35:[2,53],38:[2,53],43:[2,53]},{4:44,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,24:16,25:[1,21],28:[1,14],31:19,32:[1,25],33:[1,24],39:15,40:17,41:18,44:[1,20],45:[1,22],46:[1,23]},{33:[1,45]},{1:[2,4],5:46,7:4,8:[1,5],9:[2,4],10:[2,4],11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,22:[2,4],24:16,25:[1,21],28:[1,14],31:19,32:[1,25],33:[1,24],35:[2,4],39:15,40:17,41:18,44:[1,20],45:[1,22],46:[1,23]},{1:[2,7],8:[2,7],9:[2,7],10:[2,7],22:[2,7],25:[2,7],28:[2,7],32:[2,7],33:[2,7],35:[2,7],44:[2,7],45:[2,7],46:[2,7]},{1:[2,8],8:[2,8],9:[2,8],10:[2,8],22:[2,8],25:[2,8],28:[2,8],32:[2,8],33:[2,8],35:[2,8],44:[2,8],45:[2,8],46:[2,8]},{1:[2,42],9:[2,42],10:[2,42],20:[2,42],22:[2,42],28:[2,42],35:[2,42],38:[2,42]},{17:47,28:[1,48],31:19,32:[1,25],33:[1,24],40:49,41:50,45:[1,22],46:[1,23]},{1:[2,37],9:[2,37],10:[2,37],20:[2,37],22:[2,37],28:[2,37],35:[2,37],38:[2,37],42:51,43:[1,34]},{17:52,28:[1,48],31:19,32:[1,25],33:[1,24],40:49,41:50,45:[1,22],46:[1,23]},{1:[2,44],9:[2,44],10:[2,44],20:[2,44],22:[2,44],28:[2,44],35:[2,44],38:[2,44],43:[2,44]},{17:53,28:[1,48],31:19,32:[1,25],33:[1,24],40:49,41:50,45:[1,22],46:[1,23]},{28:[1,54]},{1:[2,39],9:[2,39],10:[2,39],20:[2,39],22:[2,39],28:[2,39],30:[1,55],35:[2,39],38:[2,39]},{7:56,11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,24:16,25:[1,21],28:[1,14],31:19,32:[1,25],33:[1,24],39:15,40:17,41:18,44:[1,20],45:[1,22],46:[1,23]},{7:58,11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,24:16,25:[1,21],28:[1,14],31:19,32:[1,25],33:[1,24],34:57,39:15,40:17,41:18,44:[1,20],45:[1,22],46:[1,23]},{1:[2,31],9:[2,31],10:[2,31],20:[2,31],22:[2,31],28:[1,60],35:[2,31],37:59,38:[2,31],42:33,43:[1,34]},{19:63,20:[1,64],23:61,25:[1,62]},{1:[2,40],9:[2,40],10:[2,40],20:[2,40],22:[2,40],28:[2,40],35:[2,40],38:[2,40]},{1:[2,41],9:[2,41],10:[2,41],20:[2,41],22:[2,41],28:[2,41],35:[2,41],38:[2,41]},{19:63,20:[1,64],23:65},{6:26,9:[1,27],10:[1,28],35:[1,66]},{7:58,11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,24:16,25:[1,21],28:[1,14],31:19,32:[1,25],33:[1,24],34:67,39:15,40:17,41:18,44:[1,20],45:[1,22],46:[1,23]},{1:[2,3],9:[2,3],10:[2,3],22:[2,3],35:[2,3]},{1:[2,25],9:[2,25],10:[2,25],20:[2,25],22:[2,25],27:[2,25],35:[2,25],38:[2,25]},{1:[2,46],9:[2,46],10:[2,46],20:[2,46],22:[2,46],27:[2,46],28:[2,46],35:[2,46],38:[2,46],43:[2,46]},{1:[2,47],9:[2,47],10:[2,47],20:[2,47],22:[2,47],27:[2,47],28:[2,47],35:[2,47],38:[2,47],43:[2,47]},{1:[2,48],9:[2,48],10:[2,48],20:[2,48],22:[2,48],27:[2,48],28:[2,48],35:[2,48],38:[2,48],43:[2,48]},{1:[2,43],9:[2,43],10:[2,43],20:[2,43],22:[2,43],28:[2,43],35:[2,43],38:[2,43],43:[2,43]},{1:[2,26],9:[2,26],10:[2,26],20:[2,26],22:[2,26],27:[2,26],35:[2,26],38:[2,26]},{1:[2,45],9:[2,45],10:[2,45],20:[2,45],22:[2,45],28:[2,45],35:[2,45],38:[2,45],43:[2,45]},{30:[1,68]},{7:69,11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,24:16,25:[1,21],28:[1,14],31:19,32:[1,25],33:[1,24],39:15,40:17,41:18,44:[1,20],45:[1,22],46:[1,23]},{1:[2,29],9:[2,29],10:[2,29],20:[2,29],22:[2,29],35:[2,29],38:[2,29]},{35:[1,70],38:[1,71]},{35:[2,36],38:[2,36]},{1:[2,32],9:[2,32],10:[2,32],20:[2,32],22:[2,32],35:[2,32],38:[2,32],42:51,43:[1,34]},{1:[2,33],9:[2,33],10:[2,33],20:[2,33],22:[2,33],35:[2,33],38:[2,33]},{1:[2,24],9:[2,24],10:[2,24],20:[2,24],22:[2,24],35:[2,24],38:[2,24]},{7:72,11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,24:16,25:[1,21],28:[1,14],31:19,32:[1,25],33:[1,24],39:15,40:17,41:18,44:[1,20],45:[1,22],46:[1,23]},{4:74,5:3,7:4,8:[1,5],11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,21:73,22:[1,75],24:16,25:[1,21],28:[1,14],31:19,32:[1,25],33:[1,24],39:15,40:17,41:18,44:[1,20],45:[1,22],46:[1,23]},{8:[2,17],22:[2,17],25:[2,17],28:[2,17],32:[2,17],33:[2,17],44:[2,17],45:[2,17],46:[2,17]},{1:[2,21],9:[2,21],10:[2,21],20:[2,21],22:[2,21],26:[2,21],35:[2,21],38:[2,21]},{1:[2,51],9:[2,51],10:[2,51],20:[2,51],22:[2,51],27:[2,51],28:[2,51],35:[2,51],38:[2,51],43:[2,51]},{35:[1,76],38:[1,71]},{7:77,11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,24:16,25:[1,21],28:[1,14],31:19,32:[1,25],33:[1,24],39:15,40:17,41:18,44:[1,20],45:[1,22],46:[1,23]},{1:[2,28],9:[2,28],10:[2,28],20:[2,28],22:[2,28],35:[2,28],38:[2,28]},{1:[2,34],9:[2,34],10:[2,34],20:[2,34],22:[2,34],35:[2,34],38:[2,34]},{7:78,11:6,12:7,13:8,14:9,15:10,16:11,17:12,18:13,24:16,25:[1,21],28:[1,14],31:19,32:[1,25],33:[1,24],39:15,40:17,41:18,44:[1,20],45:[1,22],46:[1,23]},{19:63,20:[1,64],23:79},{1:[2,19],9:[2,19],10:[2,19],20:[2,19],22:[2,19],26:[2,19],35:[2,19],38:[2,19]},{6:26,9:[1,27],10:[1,28],21:80,22:[1,75]},{1:[2,18],9:[2,18],10:[2,18],20:[2,18],22:[2,18],26:[2,18],35:[2,18],38:[2,18]},{1:[2,30],9:[2,30],10:[2,30],20:[2,30],22:[2,30],27:[2,30],28:[2,30],35:[2,30],38:[2,30],43:[2,30]},{1:[2,27],9:[2,27],10:[2,27],20:[2,27],22:[2,27],35:[2,27],38:[2,27]},{35:[2,35],38:[2,35]},{1:[2,22],9:[2,22],10:[2,22],20:[2,22],22:[2,22],26:[2,22],35:[2,22],38:[2,22]},{1:[2,20],9:[2,20],10:[2,20],20:[2,20],22:[2,20],26:[2,20],35:[2,20],38:[2,20]}],
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