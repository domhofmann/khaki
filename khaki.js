/* Jison generated parser */
var khaki = (function(){

  
  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }
  
  print = function (object) {
    console.log(expr(object));
  }
  
  expr = function (object) {
    if (object == undefined) return '';
    if (object.expr)
      return (object.expr);
    else
      return (object);
  }
  

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"lines":4,"COMMENT":5,"NEWLINE":6,"IF":7,"e":8,"ELSE":9,"END":10,"EOF":11,"+":12,"WORD":13,"~":14,"=":15,"ESCAPE":16,"STRING_LITERAL":17,"construct":18,"message":19,"function":20,"shortcut":21,"NUMBER":22,"e_list":23,",":24,"(":25,")":26,"selector_args":27,"selector_arg":28,"SELECTOR_ARG":29,"@":30,"!":31,"$accept":0,"$end":1},
terminals_: {2:"error",5:"COMMENT",6:"NEWLINE",7:"IF",9:"ELSE",10:"END",11:"EOF",12:"+",13:"WORD",14:"~",15:"=",16:"ESCAPE",17:"STRING_LITERAL",22:"NUMBER",24:",",25:"(",26:")",29:"SELECTOR_ARG",30:"@",31:"!"},
productions_: [0,[3,1],[4,0],[4,3],[4,10],[4,7],[4,3],[4,3],[8,3],[8,5],[8,4],[8,3],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[23,3],[23,2],[23,2],[23,1],[19,3],[19,2],[19,2],[19,2],[19,2],[19,2],[19,2],[20,4],[20,3],[27,2],[27,1],[28,2],[28,1],[21,10],[21,6],[18,3],[18,4],[18,3],[18,3],[18,2]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: console.log("\n" + $$[$0]); console.log("\nFinished compiling"); 
break;
case 3: this.$ = expr($$[$0-2]) + ''; 
break;
case 4: this.$ = expr($$[$0-9]) + 'if (' + $$[$0-7] + ") {\n" + $$[$0-5] + "} else {\n" + $$[$0-2] + "}\n"; 
break;
case 5: this.$ = expr($$[$0-6]) + 'if (' + $$[$0-4] + ") {\n" + $$[$0-2] + "}\n"; 
break;
case 6: this.$ = expr($$[$0-2]) + expr($$[$0-1]) + ($$[$0-1].suffix != undefined ? $$[$0-1].suffix : ';') + "\n"; 
break;
case 7: this.$ = expr($$[$0-2]) + expr($$[$0-1]) + ($$[$0-1].suffix != undefined ? $$[$0-1].suffix : ';') + "\n"; 
break;
case 8:this.$ = $$[$0-2] + ' + ' + $$[$0];
break;
case 9:this.$ = $$[$0-4] + ' ' + $$[$0-2] + ' = ' + expr($$[$0]);
break;
case 10:this.$ = $$[$0-3] + ' *' + $$[$0-2] + ' = ' + expr($$[$0]);
break;
case 11:
      if ($$[$0].expr)
        if (!$$[$0].scalar) this.$ = $$[$0].type + ' *' + $$[$0-2] + ' = ' + $$[$0].expr;
        else this.$ = $$[$0].type + ' ' + $$[$0-2] + ' = ' + $$[$0].expr;
      else
        if (!$$[$0].scalar) this.$ = 'id ' + $$[$0-2] + ' = ' + $$[$0];
    
break;
case 12: 
      this.$ = {
        type: 'id',
        scalar: true,
        expr: expr($$[$0]).substr(1).slice(0, -1),
        suffix: '' 
      }
    
break;
case 13:
      this.$ = {
        type: 'NSString',
        expr: '@"' + yytext.substr(1).slice(0, -1) + '"'
      }
    
break;
case 18:this.$ = yytext;
break;
case 19:this.$ = yytext;
break;
case 20:this.$ = $$[$0-2] + ', ' + expr($$[$0-1]);
break;
case 21:this.$ = $$[$0-1] + ', ' + expr($$[$0]);
break;
case 22:this.$ = expr($$[$0-1])
break;
case 23:this.$ = expr($$[$0]);
break;
case 24:this.$ = $$[$0-1];
break;
case 25:this.$ = '[' + $$[$0-1] + ' ' + $$[$0] + ']';
break;
case 26:this.$ = '[' + expr($$[$0-1]) + $$[$0] + ']';
break;
case 27:this.$ = '[@"' + $$[$0-1].substr(1).slice(0, -1) + '"' + $$[$0] + ']';
break;
case 28:this.$ = '[' + $$[$0-1] + $$[$0] + ']';
break;
case 29:this.$ = '[@"' + $$[$0-1].substr(1).slice(0, -1) + '" ' + $$[$0] + ']';
break;
case 30:this.$ = '[' + $$[$0-1] + ' ' + $$[$0] + ']';
break;
case 31:this.$ = $$[$0-3] + $$[$0-2] + $$[$0-1] + $$[$0];
break;
case 32:this.$ = $$[$0-2] + $$[$0-1] + $$[$0];
break;
case 33:this.$ = $$[$0-1] + $$[$0];
break;
case 35:
      if ($$[$0].expr) {
        this.$ = $$[$0-1] + $$[$0].expr;
      } else {
        this.$ = $$[$0-1] + $$[$0];
      }
    
break;
case 37:
      this.$ = {
        type: 'CGRect',
        scalar: true,
        expr: 'CGRectMake(' + [$$[$0-7], $$[$0-5], $$[$0-3], $$[$0-1]].join(', ') + ')'
      };
    
break;
case 38: 
      this.$ = { 
        type: 'CGPoint',
        scalar: true,
        expr: 'CGPointMake(' + $$[$0-3] + ', ' + $$[$0-1] + ')'
      };
    
break;
case 39: this.$ = $$[$0-1]; 
break;
case 40:
      this.$ = {
        type: $$[$0-3], 
        expr: '[[' + $$[$0-3] + ' alloc] init' + $$[$0-1].substr(1).capitalize() + ']'
      };
    
break;
case 41:
      this.$ = {
        type: $$[$0-2],
        expr: '[[' + $$[$0-2] + ' alloc] init]'
      };
    
break;
case 42:
      this.$ = {
        type: $$[$0-2], 
        expr: '[[[' + $$[$0-2] + ' alloc] init' + $$[$0].substr(1).capitalize() + '] autorelease]'
      };
    
break;
case 43:
      this.$ = {
        type: $$[$0-1],
        expr: '[[[' + $$[$0-1] + ' alloc] init] autorelease]'
      };
    
break;
}
},
table: [{1:[2,2],3:1,4:2,5:[2,2],7:[2,2],13:[2,2],16:[2,2],17:[2,2],22:[2,2],25:[2,2],30:[2,2]},{1:[3]},{1:[2,1],5:[1,3],7:[1,4],8:5,13:[1,6],16:[1,7],17:[1,8],18:9,19:10,20:11,21:12,22:[1,13],25:[1,14],30:[1,15]},{6:[1,16]},{8:17,13:[1,6],16:[1,7],17:[1,8],18:9,19:10,20:11,21:12,22:[1,13],25:[1,14],30:[1,15]},{6:[1,18],11:[1,19],12:[1,20],27:21,28:22,29:[1,23]},{6:[2,18],11:[2,18],12:[2,18],13:[1,25],14:[1,24],15:[1,26],16:[2,18],17:[2,18],22:[2,18],24:[2,18],25:[1,29],26:[2,18],27:28,28:22,29:[1,23],30:[2,18],31:[1,27]},{6:[2,12],11:[2,12],12:[2,12],13:[2,12],16:[2,12],17:[2,12],22:[2,12],24:[2,12],25:[2,12],26:[2,12],29:[2,12],30:[2,12]},{6:[2,13],11:[2,13],12:[2,13],13:[1,31],16:[2,13],17:[2,13],22:[2,13],24:[2,13],25:[2,13],26:[2,13],27:30,28:22,29:[1,23],30:[2,13]},{6:[2,14],11:[2,14],12:[2,14],13:[2,14],16:[2,14],17:[2,14],22:[2,14],24:[2,14],25:[2,14],26:[2,14],29:[2,14],30:[2,14]},{6:[2,15],11:[2,15],12:[2,15],13:[1,32],16:[2,15],17:[2,15],22:[2,15],24:[2,15],25:[2,15],26:[2,15],29:[2,15],30:[2,15]},{6:[2,16],11:[2,16],12:[2,16],13:[2,16],16:[2,16],17:[2,16],22:[2,16],24:[2,16],25:[2,16],26:[2,16],29:[2,16],30:[2,16]},{6:[2,17],11:[2,17],12:[2,17],13:[2,17],16:[2,17],17:[2,17],22:[2,17],24:[2,17],25:[2,17],26:[2,17],29:[2,17],30:[2,17]},{6:[2,19],11:[2,19],12:[2,19],13:[2,19],16:[2,19],17:[2,19],22:[2,19],24:[2,19],25:[2,19],26:[2,19],29:[2,19],30:[2,19]},{8:35,13:[1,6],16:[1,7],17:[1,8],18:33,19:34,20:11,21:12,22:[1,13],25:[1,14],30:[1,15]},{25:[1,36]},{1:[2,3],5:[2,3],7:[2,3],9:[2,3],10:[2,3],13:[2,3],16:[2,3],17:[2,3],22:[2,3],25:[2,3],30:[2,3]},{6:[1,37],12:[1,20],27:21,28:22,29:[1,23]},{1:[2,6],5:[2,6],7:[2,6],9:[2,6],10:[2,6],13:[2,6],16:[2,6],17:[2,6],22:[2,6],25:[2,6],30:[2,6]},{1:[2,7],5:[2,7],7:[2,7],9:[2,7],10:[2,7],13:[2,7],16:[2,7],17:[2,7],22:[2,7],25:[2,7],30:[2,7]},{8:38,13:[1,6],16:[1,7],17:[1,8],18:9,19:10,20:11,21:12,22:[1,13],25:[1,14],30:[1,15]},{6:[2,26],11:[2,26],12:[2,26],13:[2,26],16:[2,26],17:[2,26],22:[2,26],24:[2,26],25:[2,26],26:[2,26],28:39,29:[1,23],30:[2,26]},{6:[2,34],11:[2,34],12:[2,34],13:[2,34],16:[2,34],17:[2,34],22:[2,34],24:[2,34],25:[2,34],26:[2,34],29:[2,34],30:[2,34]},{6:[2,36],8:40,11:[2,36],12:[2,36],13:[1,6],16:[1,7],17:[1,8],18:9,19:10,20:11,21:12,22:[1,13],24:[2,36],25:[1,14],26:[2,36],29:[2,36],30:[1,15]},{13:[1,41]},{6:[2,30],11:[2,30],12:[2,30],13:[2,30],15:[1,42],16:[2,30],17:[2,30],22:[2,30],24:[2,30],25:[2,30],26:[2,30],29:[2,30],30:[2,30]},{8:43,13:[1,6],16:[1,7],17:[1,8],18:9,19:10,20:11,21:12,22:[1,13],25:[1,14],30:[1,15]},{6:[2,43],11:[2,43],12:[2,43],13:[2,43],16:[2,43],17:[2,43],22:[2,43],24:[2,43],25:[2,43],26:[2,43],27:45,28:22,29:[1,23],30:[2,43],31:[1,44]},{6:[2,28],11:[2,28],12:[2,28],13:[2,28],16:[2,28],17:[2,28],22:[2,28],24:[2,28],25:[2,28],26:[2,28],28:39,29:[1,23],30:[2,28]},{8:48,13:[1,6],16:[1,7],17:[1,8],18:9,19:10,20:11,21:12,22:[1,13],23:46,25:[1,14],26:[1,47],30:[1,15]},{6:[2,27],11:[2,27],12:[2,27],13:[2,27],16:[2,27],17:[2,27],22:[2,27],24:[2,27],25:[2,27],26:[2,27],28:39,29:[1,23],30:[2,27]},{6:[2,29],11:[2,29],12:[2,29],13:[2,29],16:[2,29],17:[2,29],22:[2,29],24:[2,29],25:[2,29],26:[2,29],29:[2,29],30:[2,29]},{6:[2,25],11:[2,25],12:[2,25],13:[2,25],16:[2,25],17:[2,25],22:[2,25],24:[2,25],25:[2,25],26:[2,25],29:[2,25],30:[2,25]},{12:[2,14],26:[1,49],29:[2,14]},{12:[2,15],13:[1,32],26:[1,50],29:[2,15]},{12:[1,20],27:21,28:22,29:[1,23]},{22:[1,51]},{4:52,5:[2,2],7:[2,2],9:[2,2],10:[2,2],13:[2,2],16:[2,2],17:[2,2],22:[2,2],25:[2,2],30:[2,2]},{6:[2,8],11:[2,8],12:[2,8],13:[2,8],16:[2,8],17:[2,8],22:[2,8],24:[2,8],25:[2,8],26:[2,8],27:21,28:22,29:[1,23],30:[2,8]},{6:[2,33],11:[2,33],12:[2,33],13:[2,33],16:[2,33],17:[2,33],22:[2,33],24:[2,33],25:[2,33],26:[2,33],29:[2,33],30:[2,33]},{6:[2,35],11:[2,35],12:[1,20],13:[2,35],16:[2,35],17:[2,35],22:[2,35],24:[2,35],25:[2,35],26:[2,35],27:21,28:22,29:[1,23],30:[2,35]},{15:[1,53]},{8:54,13:[1,6],16:[1,7],17:[1,8],18:9,19:10,20:11,21:12,22:[1,13],25:[1,14],30:[1,15]},{6:[2,11],11:[2,11],12:[2,11],13:[2,11],16:[2,11],17:[2,11],22:[2,11],24:[2,11],25:[2,11],26:[2,11],27:21,28:22,29:[1,23],30:[2,11]},{6:[2,41],11:[2,41],12:[2,41],13:[2,41],16:[2,41],17:[2,41],22:[2,41],24:[2,41],25:[2,41],26:[2,41],27:55,28:22,29:[1,23],30:[2,41]},{6:[2,42],11:[2,42],12:[2,42],13:[2,42],16:[2,42],17:[2,42],22:[2,42],24:[2,42],25:[2,42],26:[2,42],28:39,29:[1,23],30:[2,42]},{8:57,13:[1,6],16:[1,7],17:[1,8],18:9,19:10,20:11,21:12,22:[1,13],25:[1,14],26:[1,56],30:[1,15]},{6:[2,32],11:[2,32],12:[2,32],13:[2,32],16:[2,32],17:[2,32],22:[2,32],24:[2,32],25:[2,32],26:[2,32],29:[2,32],30:[2,32]},{12:[1,20],13:[2,23],16:[2,23],17:[2,23],22:[2,23],24:[1,58],25:[2,23],26:[2,23],27:21,28:22,29:[1,23],30:[2,23]},{6:[2,39],11:[2,39],12:[2,39],13:[2,39],16:[2,39],17:[2,39],22:[2,39],24:[2,39],25:[2,39],26:[2,39],29:[2,39],30:[2,39]},{6:[2,24],11:[2,24],12:[2,24],13:[2,24],16:[2,24],17:[2,24],22:[2,24],24:[2,24],25:[2,24],26:[2,24],29:[2,24],30:[2,24]},{24:[1,59]},{5:[1,3],7:[1,4],8:5,9:[1,60],10:[1,61],13:[1,6],16:[1,7],17:[1,8],18:9,19:10,20:11,21:12,22:[1,13],25:[1,14],30:[1,15]},{8:62,13:[1,6],16:[1,7],17:[1,8],18:9,19:10,20:11,21:12,22:[1,13],25:[1,14],30:[1,15]},{6:[2,10],11:[2,10],12:[2,10],13:[2,10],16:[2,10],17:[2,10],22:[2,10],24:[2,10],25:[2,10],26:[2,10],27:21,28:22,29:[1,23],30:[2,10]},{6:[2,40],11:[2,40],12:[2,40],13:[2,40],16:[2,40],17:[2,40],22:[2,40],24:[2,40],25:[2,40],26:[2,40],28:39,29:[1,23],30:[2,40]},{6:[2,31],11:[2,31],12:[2,31],13:[2,31],16:[2,31],17:[2,31],22:[2,31],24:[2,31],25:[2,31],26:[2,31],29:[2,31],30:[2,31]},{12:[1,20],13:[2,21],16:[2,21],17:[2,21],22:[2,21],24:[1,63],25:[2,21],26:[2,21],27:21,28:22,29:[1,23],30:[2,21]},{13:[2,22],16:[2,22],17:[2,22],22:[2,22],25:[2,22],26:[2,22],30:[2,22]},{22:[1,64]},{6:[1,65]},{6:[1,66]},{6:[2,9],11:[2,9],12:[2,9],13:[2,9],16:[2,9],17:[2,9],22:[2,9],24:[2,9],25:[2,9],26:[2,9],27:21,28:22,29:[1,23],30:[2,9]},{13:[2,20],16:[2,20],17:[2,20],22:[2,20],25:[2,20],26:[2,20],30:[2,20]},{24:[1,67],26:[1,68]},{4:69,5:[2,2],7:[2,2],10:[2,2],13:[2,2],16:[2,2],17:[2,2],22:[2,2],25:[2,2],30:[2,2]},{1:[2,5],5:[2,5],7:[2,5],9:[2,5],10:[2,5],13:[2,5],16:[2,5],17:[2,5],22:[2,5],25:[2,5],30:[2,5]},{22:[1,70]},{6:[2,38],11:[2,38],12:[2,38],13:[2,38],16:[2,38],17:[2,38],22:[2,38],24:[2,38],25:[2,38],26:[2,38],29:[2,38],30:[2,38]},{5:[1,3],7:[1,4],8:5,10:[1,71],13:[1,6],16:[1,7],17:[1,8],18:9,19:10,20:11,21:12,22:[1,13],25:[1,14],30:[1,15]},{24:[1,72]},{6:[1,73]},{22:[1,74]},{1:[2,4],5:[2,4],7:[2,4],9:[2,4],10:[2,4],13:[2,4],16:[2,4],17:[2,4],22:[2,4],25:[2,4],30:[2,4]},{26:[1,75]},{6:[2,37],11:[2,37],12:[2,37],13:[2,37],16:[2,37],17:[2,37],22:[2,37],24:[2,37],25:[2,37],26:[2,37],29:[2,37],30:[2,37]}],
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
case 0:return 16
break;
case 1:return 6
break;
case 2:/* skip semicolons */
break;
case 3:return 17//"
break;
case 4:return 17//'
break;
case 5:return 15
break;
case 6:return 7
break;
case 7:return 9
break;
case 8:return 10
break;
case 9:return 29
break;
case 10:return 'SELECTOR_NOARG'
break;
case 11:/* skip whitespace */
break;
case 12:return 22
break;
case 13:return 13
break;
case 14:return 12
break;
case 15:return 31
break;
case 16:return 30
break;
case 17:return 25
break;
case 18:return 26
break;
case 19:return '['
break;
case 20:return ']'
break;
case 21:return 14
break;
case 22:return 24
break;
case 23:return 11
break;
case 24:return 5
break;
case 25:return 'INVALID'
break;
}
};
lexer.rules = [/^`.*`/,/^\n\s*/,/^;+/,/^"(\\.|[^\\"])*"/,/^'(\\.|[^\\'])*'/,/^\s*=\s*/,/^if\s*/,/^else\b/,/^end\b/,/^\s+([a-zA-Z]+:{1})/,/^(?=(?=\s+))([a-zA-Z]+)/,/^\s+/,/^[0-9]+(\.[0-9]+)?\b/,/^[a-zA-Z][a-zA-Z0-9]*/,/^\+/,/^!/,/^@/,/^\(/,/^\)/,/^\[/,/^\]/,/^~/,/^,\s*/,/^$/,/^[\#]+.+/,/^./];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"inclusive":true}};return lexer;})()
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