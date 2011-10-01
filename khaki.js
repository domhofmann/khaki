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
symbols_: {"error":2,"program":3,"expressions":4,"COMMENT":5,"NEWLINE":6,"IF":7,"e":8,"ELSE":9,"END":10,"EOF":11,"+":12,"WORD":13,"=":14,"STRING_LITERAL":15,"construct":16,"message":17,"function":18,"shortcut":19,"NUMBER":20,"e_list":21,",":22,"(":23,")":24,"selector_args":25,"SELECTOR_NOARG":26,"selector_arg":27,"SELECTOR_ARG":28,"@":29,"!":30,"$accept":0,"$end":1},
terminals_: {2:"error",5:"COMMENT",6:"NEWLINE",7:"IF",9:"ELSE",10:"END",11:"EOF",12:"+",13:"WORD",14:"=",15:"STRING_LITERAL",20:"NUMBER",22:",",23:"(",24:")",26:"SELECTOR_NOARG",28:"SELECTOR_ARG",29:"@",30:"!"},
productions_: [0,[3,1],[4,0],[4,3],[4,10],[4,7],[4,3],[4,3],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[21,3],[21,2],[21,2],[21,1],[17,3],[17,2],[17,2],[17,2],[17,2],[17,2],[18,4],[18,3],[25,2],[25,1],[27,2],[27,1],[19,10],[19,6],[16,3],[16,4],[16,3],[16,3],[16,2]],
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
case 6: this.$ = expr($$[$0-2]) + expr($$[$0-1]) + ";\n"; 
break;
case 7: this.$ = expr($$[$0-2]) + expr($$[$0-1]) + ";\n"; 
break;
case 8:this.$ = $$[$0-2] + ' + ' + $$[$0];
break;
case 9:
      if ($$[$0].expr)
        if (!$$[$0].scalar) this.$ = $$[$0].type + ' *' + $$[$0-2] + ' = ' + $$[$0].expr;
        else this.$ = $$[$0].type + ' ' + $$[$0-2] + ' = ' + $$[$0].expr;
      else
        if (!$$[$0].scalar) this.$ = 'id ' + $$[$0-2] + ' = ' + $$[$0];
    
break;
case 10:
      this.$ = {
        type: 'NSString',
        expr: '@"' + yytext.substr(1).slice(0, -1) + '"'
      }
    
break;
case 15:this.$ = yytext;
break;
case 16:this.$ = yytext;
break;
case 17:this.$ = $$[$0-2] + ', ' + expr($$[$0-1]);
break;
case 18:this.$ = $$[$0-1] + ', ' + expr($$[$0]);
break;
case 19:this.$ = expr($$[$0-1])
break;
case 20:this.$ = expr($$[$0]);
break;
case 21:this.$ = $$[$0-1];
break;
case 22:this.$ = '[' + expr($$[$0-1]) + $$[$0] + ']';
break;
case 23:this.$ = '[@"' + $$[$0-1].substr(1).slice(0, -1) + '"' + $$[$0] + ']';
break;
case 24:this.$ = '[' + $$[$0-1] + $$[$0] + ']';
break;
case 25:this.$ = '[@"' + $$[$0-1].substr(1).slice(0, -1) + '"' + $$[$0] + ']';
break;
case 26:this.$ = '[' + $$[$0-1] + $$[$0] + ']';
break;
case 27:this.$ = $$[$0-3] + $$[$0-2] + $$[$0-1] + $$[$0];
break;
case 28:this.$ = $$[$0-2] + $$[$0-1] + $$[$0];
break;
case 29:this.$ = $$[$0-1] + $$[$0];
break;
case 31:
      if ($$[$0].expr) {
        this.$ = $$[$0-1] + $$[$0].expr;
      } else {
        this.$ = $$[$0-1] + $$[$0];
      }
    
break;
case 33:
      this.$ = {
        type: 'CGRect',
        scalar: true,
        expr: 'CGRectMake(' + [$$[$0-7], $$[$0-5], $$[$0-3], $$[$0-1]].join(', ') + ')'
      };
    
break;
case 34: 
      this.$ = { 
        type: 'CGPoint',
        scalar: true,
        expr: 'CGPointMake(' + $$[$0-3] + ', ' + $$[$0-1] + ')'
      };
    
break;
case 35: this.$ = $$[$0-1]; 
break;
case 36:
      this.$ = {
        type: $$[$0-3], 
        expr: '[[' + $$[$0-3] + ' alloc] init' + $$[$0-1].substr(1).capitalize() + ']'
      };
    
break;
case 37:
      this.$ = {
        type: $$[$0-2],
        expr: '[[' + $$[$0-2] + ' alloc] init]'
      };
    
break;
case 38:
      this.$ = {
        type: $$[$0-2], 
        expr: '[[[' + $$[$0-2] + ' alloc] init' + $$[$0].substr(1).capitalize() + '] autorelease]'
      };
    
break;
case 39:
      this.$ = {
        type: $$[$0-1],
        expr: '[[[' + $$[$0-1] + ' alloc] init] autorelease]'
      };
    
break;
}
},
table: [{1:[2,2],3:1,4:2,5:[2,2],7:[2,2],13:[2,2],15:[2,2],20:[2,2],23:[2,2],29:[2,2]},{1:[3]},{1:[2,1],5:[1,3],7:[1,4],8:5,13:[1,6],15:[1,7],16:8,17:9,18:10,19:11,20:[1,12],23:[1,13],29:[1,14]},{6:[1,15]},{8:16,13:[1,6],15:[1,7],16:8,17:9,18:10,19:11,20:[1,12],23:[1,13],29:[1,14]},{6:[1,17],11:[1,18],12:[1,19],25:20,27:21,28:[1,22]},{6:[2,15],11:[2,15],12:[2,15],13:[2,15],14:[1,23],15:[2,15],20:[2,15],22:[2,15],23:[1,27],24:[2,15],25:25,26:[1,26],27:21,28:[1,22],29:[2,15],30:[1,24]},{6:[2,10],11:[2,10],12:[2,10],13:[2,10],15:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10],25:28,26:[1,29],27:21,28:[1,22],29:[2,10]},{6:[2,11],11:[2,11],12:[2,11],13:[2,11],15:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11],28:[2,11],29:[2,11]},{6:[2,12],11:[2,12],12:[2,12],13:[2,12],15:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12],28:[2,12],29:[2,12]},{6:[2,13],11:[2,13],12:[2,13],13:[2,13],15:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13],28:[2,13],29:[2,13]},{6:[2,14],11:[2,14],12:[2,14],13:[2,14],15:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14],28:[2,14],29:[2,14]},{6:[2,16],11:[2,16],12:[2,16],13:[2,16],15:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16],28:[2,16],29:[2,16]},{8:32,13:[1,6],15:[1,7],16:30,17:31,18:10,19:11,20:[1,12],23:[1,13],29:[1,14]},{23:[1,33]},{1:[2,3],5:[2,3],7:[2,3],9:[2,3],10:[2,3],13:[2,3],15:[2,3],20:[2,3],23:[2,3],29:[2,3]},{6:[1,34],12:[1,19],25:20,27:21,28:[1,22]},{1:[2,6],5:[2,6],7:[2,6],9:[2,6],10:[2,6],13:[2,6],15:[2,6],20:[2,6],23:[2,6],29:[2,6]},{1:[2,7],5:[2,7],7:[2,7],9:[2,7],10:[2,7],13:[2,7],15:[2,7],20:[2,7],23:[2,7],29:[2,7]},{8:35,13:[1,6],15:[1,7],16:8,17:9,18:10,19:11,20:[1,12],23:[1,13],29:[1,14]},{6:[2,22],11:[2,22],12:[2,22],13:[2,22],15:[2,22],20:[2,22],22:[2,22],23:[2,22],24:[2,22],27:36,28:[1,22],29:[2,22]},{6:[2,30],11:[2,30],12:[2,30],13:[2,30],15:[2,30],20:[2,30],22:[2,30],23:[2,30],24:[2,30],28:[2,30],29:[2,30]},{6:[2,32],8:37,11:[2,32],12:[2,32],13:[1,6],15:[1,7],16:8,17:9,18:10,19:11,20:[1,12],22:[2,32],23:[1,13],24:[2,32],28:[2,32],29:[1,14]},{8:38,13:[1,6],15:[1,7],16:8,17:9,18:10,19:11,20:[1,12],23:[1,13],29:[1,14]},{6:[2,39],11:[2,39],12:[2,39],13:[2,39],15:[2,39],20:[2,39],22:[2,39],23:[2,39],24:[2,39],25:40,27:21,28:[1,22],29:[2,39],30:[1,39]},{6:[2,24],11:[2,24],12:[2,24],13:[2,24],15:[2,24],20:[2,24],22:[2,24],23:[2,24],24:[2,24],27:36,28:[1,22],29:[2,24]},{6:[2,26],11:[2,26],12:[2,26],13:[2,26],15:[2,26],20:[2,26],22:[2,26],23:[2,26],24:[2,26],28:[2,26],29:[2,26]},{8:43,13:[1,6],15:[1,7],16:8,17:9,18:10,19:11,20:[1,12],21:41,23:[1,13],24:[1,42],29:[1,14]},{6:[2,23],11:[2,23],12:[2,23],13:[2,23],15:[2,23],20:[2,23],22:[2,23],23:[2,23],24:[2,23],27:36,28:[1,22],29:[2,23]},{6:[2,25],11:[2,25],12:[2,25],13:[2,25],15:[2,25],20:[2,25],22:[2,25],23:[2,25],24:[2,25],28:[2,25],29:[2,25]},{12:[2,11],24:[1,44],28:[2,11]},{12:[2,12],24:[1,45],28:[2,12]},{12:[1,19],25:20,27:21,28:[1,22]},{20:[1,46]},{4:47,5:[2,2],7:[2,2],9:[2,2],10:[2,2],13:[2,2],15:[2,2],20:[2,2],23:[2,2],29:[2,2]},{6:[2,8],11:[2,8],12:[2,8],13:[2,8],15:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8],25:20,27:21,28:[1,22],29:[2,8]},{6:[2,29],11:[2,29],12:[2,29],13:[2,29],15:[2,29],20:[2,29],22:[2,29],23:[2,29],24:[2,29],28:[2,29],29:[2,29]},{6:[2,31],11:[2,31],12:[1,19],13:[2,31],15:[2,31],20:[2,31],22:[2,31],23:[2,31],24:[2,31],25:20,27:21,28:[1,22],29:[2,31]},{6:[2,9],11:[2,9],12:[2,9],13:[2,9],15:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9],25:20,27:21,28:[1,22],29:[2,9]},{6:[2,37],11:[2,37],12:[2,37],13:[2,37],15:[2,37],20:[2,37],22:[2,37],23:[2,37],24:[2,37],25:48,27:21,28:[1,22],29:[2,37]},{6:[2,38],11:[2,38],12:[2,38],13:[2,38],15:[2,38],20:[2,38],22:[2,38],23:[2,38],24:[2,38],27:36,28:[1,22],29:[2,38]},{8:50,13:[1,6],15:[1,7],16:8,17:9,18:10,19:11,20:[1,12],23:[1,13],24:[1,49],29:[1,14]},{6:[2,28],11:[2,28],12:[2,28],13:[2,28],15:[2,28],20:[2,28],22:[2,28],23:[2,28],24:[2,28],28:[2,28],29:[2,28]},{12:[1,19],13:[2,20],15:[2,20],20:[2,20],22:[1,51],23:[2,20],24:[2,20],25:20,27:21,28:[1,22],29:[2,20]},{6:[2,35],11:[2,35],12:[2,35],13:[2,35],15:[2,35],20:[2,35],22:[2,35],23:[2,35],24:[2,35],28:[2,35],29:[2,35]},{6:[2,21],11:[2,21],12:[2,21],13:[2,21],15:[2,21],20:[2,21],22:[2,21],23:[2,21],24:[2,21],28:[2,21],29:[2,21]},{22:[1,52]},{5:[1,3],7:[1,4],8:5,9:[1,53],10:[1,54],13:[1,6],15:[1,7],16:8,17:9,18:10,19:11,20:[1,12],23:[1,13],29:[1,14]},{6:[2,36],11:[2,36],12:[2,36],13:[2,36],15:[2,36],20:[2,36],22:[2,36],23:[2,36],24:[2,36],27:36,28:[1,22],29:[2,36]},{6:[2,27],11:[2,27],12:[2,27],13:[2,27],15:[2,27],20:[2,27],22:[2,27],23:[2,27],24:[2,27],28:[2,27],29:[2,27]},{12:[1,19],13:[2,18],15:[2,18],20:[2,18],22:[1,55],23:[2,18],24:[2,18],25:20,27:21,28:[1,22],29:[2,18]},{13:[2,19],15:[2,19],20:[2,19],23:[2,19],24:[2,19],29:[2,19]},{20:[1,56]},{6:[1,57]},{6:[1,58]},{13:[2,17],15:[2,17],20:[2,17],23:[2,17],24:[2,17],29:[2,17]},{22:[1,59],24:[1,60]},{4:61,5:[2,2],7:[2,2],10:[2,2],13:[2,2],15:[2,2],20:[2,2],23:[2,2],29:[2,2]},{1:[2,5],5:[2,5],7:[2,5],9:[2,5],10:[2,5],13:[2,5],15:[2,5],20:[2,5],23:[2,5],29:[2,5]},{20:[1,62]},{6:[2,34],11:[2,34],12:[2,34],13:[2,34],15:[2,34],20:[2,34],22:[2,34],23:[2,34],24:[2,34],28:[2,34],29:[2,34]},{5:[1,3],7:[1,4],8:5,10:[1,63],13:[1,6],15:[1,7],16:8,17:9,18:10,19:11,20:[1,12],23:[1,13],29:[1,14]},{22:[1,64]},{6:[1,65]},{20:[1,66]},{1:[2,4],5:[2,4],7:[2,4],9:[2,4],10:[2,4],13:[2,4],15:[2,4],20:[2,4],23:[2,4],29:[2,4]},{24:[1,67]},{6:[2,33],11:[2,33],12:[2,33],13:[2,33],15:[2,33],20:[2,33],22:[2,33],23:[2,33],24:[2,33],28:[2,33],29:[2,33]}],
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
case 2:return 15//"
break;
case 3:return 15//'
break;
case 4:return 14
break;
case 5:return 7
break;
case 6:return 9
break;
case 7:return 10
break;
case 8:return 28
break;
case 9:return 26
break;
case 10:/* skip whitespace */
break;
case 11:return 20
break;
case 12:return 13
break;
case 13:return 12
break;
case 14:return 30
break;
case 15:return 29
break;
case 16:return 23
break;
case 17:return 24
break;
case 18:return '['
break;
case 19:return ']'
break;
case 20:return 22
break;
case 21:return 11
break;
case 22:return 5
break;
case 23:return 'INVALID'
break;
}
};
lexer.rules = [/^\n\s*/,/^;+/,/^"(\\.|[^\\"])*"/,/^'(\\.|[^\\'])*'/,/^\s*=\s*/,/^if\s*/,/^else\b/,/^end\b/,/^\s+([a-zA-Z]+:{1})/,/^\s+([a-zA-Z]+)/,/^\s+/,/^[0-9]+(\.[0-9]+)?\b/,/^[a-zA-Z][a-zA-Z0-9]*/,/^\+/,/^!/,/^@/,/^\(/,/^\)/,/^\[/,/^\]/,/^,\s*/,/^$/,/^[\#]+.+/,/^./];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"inclusive":true}};return lexer;})()
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