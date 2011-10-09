/* Jison generated parser */
var parser = (function(){

  
  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }
  
  var imports = ['#import <UIKit/UIKit.h>'];
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
    if (!string) return null;
    return string.charAt(string.length - 1) != "}";
  }
  
  var DELETE = '%%%DELETE%%%';
  

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"body":4,"line":5,"terminator":6,"importation":7,"import":8,"WORD":9,"expression":10,"statement":11,"NEWLINE":12,";":13,"EOF":14,"assignment":15,"invocation":16,"message":17,"construction":18,"operation":19,"If":20,"value":21,"fallback":22,"indent":23,"INDENT":24,"dedent":25,"DEDENT":26,"block":27,"if_block":28,"if":29,"else":30,"OPERATOR":31,"~":32,"ASSIGNMENT_OPERATOR":33,"cg_shortcut":34,"@":35,"(":36,"list":37,")":38,"!":39,"selector_args":40,",":41,"simple_message":42,"literal":43,"parenthetical":44,"selector_arg":45,"SELECTOR_ARG":46,"FALLBACK":47,"STRING_LITERAL":48,"NUMBER":49,"$accept":0,"$end":1},
terminals_: {2:"error",8:"import",9:"WORD",11:"statement",12:"NEWLINE",13:";",14:"EOF",24:"INDENT",26:"DEDENT",29:"if",30:"else",31:"OPERATOR",32:"~",33:"ASSIGNMENT_OPERATOR",35:"@",36:"(",38:")",39:"!",41:",",46:"SELECTOR_ARG",47:"FALLBACK",48:"STRING_LITERAL",49:"NUMBER"},
productions_: [0,[3,1],[4,1],[4,3],[4,2],[7,2],[5,1],[5,1],[5,1],[6,1],[6,1],[6,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[23,1],[25,1],[27,2],[27,3],[28,3],[28,5],[20,1],[20,3],[19,3],[19,3],[15,5],[15,4],[15,3],[34,4],[18,2],[18,3],[18,3],[16,4],[37,3],[37,1],[17,2],[17,1],[42,2],[42,2],[42,2],[42,2],[40,2],[40,1],[45,2],[21,1],[21,1],[21,1],[21,1],[22,1],[44,3],[43,1],[43,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:
    var deleteToken = new RegExp(DELETE + '.*\n', 'g');
    imports = imports.map(function (import) { return code(import) }).join('\n');
    return imports + '\n\n' + code($$[$0]).replace(deleteToken, '');
  
break;
case 2:this.$ = Array(scope.length).join('\t') + code($$[$0])
break;
case 3:var c = code($$[$0-2]); this.$ = code($$[$0-2]) + (needsSemicolon(c) ? ';' : '') + $$[$0-1] + Array(scope.length).join('\t') + code($$[$0])
break;
case 4:var c = code($$[$0-1]); this.$ = code($$[$0-1]) + (needsSemicolon(c) ? ';' : '') + $$[$0]
break;
case 5: imports.push(yy._Importation({framework: $$[$0]})); this.$ = DELETE 
break;
case 9:this.$ = '\n'
break;
case 10:this.$ = '\n'
break;
case 11:this.$ = ''
break;
case 20: scope.push([]) 
break;
case 21: scope.pop() 
break;
case 22:this.$ = ''
break;
case 23:var c = code($$[$0-1]); this.$ = code($$[$0-1]) + (needsSemicolon(c) ? ';' : '')
break;
case 24:this.$ = 'if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 25:this.$ = code($$[$0-4]) + ' else if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 27:this.$ = code($$[$0-2]) + ' else {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 28: this.$ = yy._Operation({left: $$[$0-2], operator: $$[$0-1], right: $$[$0]}) 
break;
case 29: this.$ = yy._Operation({left: $$[$0-2], operator: $$[$0-1], right: $$[$0]}) 
break;
case 30: this.$ = yy._Assignment({scope: scope, type: $$[$0-4], scalar: true, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 31: this.$ = yy._Assignment({scope: scope, type: $$[$0-3], identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 32: this.$ = yy._Assignment({scope: scope, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 33: this.$ = yy._CGShortcut($$[$0-1]) 
break;
case 34: this.$ = yy._Construction({type: $$[$0-1]}) 
break;
case 35: this.$ = yy._Construction({type: $$[$0-2], message: $$[$0]}) 
break;
case 36: this.$ = yy._Construction({type: $$[$0-2], message: $$[$0]}) 
break;
case 37: this.$ = yy._Invocation({func: $$[$0-3], args: $$[$0-1]}) 
break;
case 38: $$[$0-2].push($$[$0]); this.$ = $$[$0-2] 
break;
case 39: this.$ = [$$[$0]] 
break;
case 40: this.$ = yy._Message({target: $$[$0-1], args: $$[$0]}) 
break;
case 42: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 43: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 44: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 45: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 46: $$[$0-1].push($$[$0][0]); this.$ = $$[$0-1] 
break;
case 48: this.$ = [{arg: $$[$0-1], value: $$[$0]}] 
break;
case 53: this.$ = $$[$0] 
break;
case 54: this.$ = yy._Parenthetical($$[$0-1]) 
break;
case 55: this.$ = yy._String($$[$0]) 
break;
case 56: this.$ = yy._Number($$[$0]) 
break;
}
},
table: [{3:1,4:2,5:3,7:6,8:[1,15],9:[1,16],10:4,11:[1,5],15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,28:18,29:[1,23],34:21,35:[1,27],36:[1,26],42:17,43:19,44:20,47:[1,22],48:[1,24],49:[1,25]},{1:[3]},{1:[2,1],6:28,12:[1,29],13:[1,30],14:[1,31]},{1:[2,2],12:[2,2],13:[2,2],14:[2,2],26:[2,2],38:[2,2]},{1:[2,6],12:[2,6],13:[2,6],14:[2,6],26:[2,6],38:[2,6]},{1:[2,7],12:[2,7],13:[2,7],14:[2,7],26:[2,7],38:[2,7]},{1:[2,8],12:[2,8],13:[2,8],14:[2,8],26:[2,8],38:[2,8]},{1:[2,12],12:[2,12],13:[2,12],14:[2,12],24:[2,12],26:[2,12],38:[2,12],41:[2,12]},{1:[2,13],12:[2,13],13:[2,13],14:[2,13],24:[2,13],26:[2,13],38:[2,13],41:[2,13]},{1:[2,14],9:[1,32],12:[2,14],13:[2,14],14:[2,14],24:[2,14],26:[2,14],38:[2,14],41:[2,14]},{1:[2,15],12:[2,15],13:[2,15],14:[2,15],24:[2,15],26:[2,15],38:[2,15],41:[2,15]},{1:[2,16],12:[2,16],13:[2,16],14:[2,16],24:[2,16],26:[2,16],31:[1,33],38:[2,16],41:[2,16]},{1:[2,17],12:[2,17],13:[2,17],14:[2,17],24:[2,17],26:[2,17],38:[2,17],41:[2,17]},{1:[2,18],12:[2,18],13:[2,18],14:[2,18],24:[2,18],26:[2,18],31:[1,35],38:[2,18],40:34,41:[2,18],45:36,46:[1,37]},{1:[2,19],12:[2,19],13:[2,19],14:[2,19],24:[2,19],26:[2,19],38:[2,19],41:[2,19]},{9:[1,38]},{1:[2,49],9:[1,40],12:[2,49],13:[2,49],14:[2,49],24:[2,49],26:[2,49],31:[2,49],32:[1,39],33:[1,41],36:[1,42],38:[2,49],39:[1,43],41:[2,49],46:[2,49]},{1:[2,41],9:[2,41],12:[2,41],13:[2,41],14:[2,41],24:[2,41],26:[2,41],38:[2,41],41:[2,41]},{1:[2,26],12:[2,26],13:[2,26],14:[2,26],24:[2,26],26:[2,26],30:[1,44],38:[2,26],41:[2,26]},{1:[2,50],9:[1,45],12:[2,50],13:[2,50],14:[2,50],24:[2,50],26:[2,50],31:[2,50],38:[2,50],41:[2,50],46:[2,50]},{1:[2,51],9:[1,46],12:[2,51],13:[2,51],14:[2,51],24:[2,51],26:[2,51],31:[2,51],38:[2,51],41:[2,51],46:[2,51]},{1:[2,52],9:[2,52],12:[2,52],13:[2,52],14:[2,52],24:[2,52],26:[2,52],31:[2,52],38:[2,52],41:[2,52],46:[2,52]},{1:[2,53],12:[2,53],13:[2,53],14:[2,53],24:[2,53],26:[2,53],38:[2,53],41:[2,53]},{9:[1,16],10:47,15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,28:18,29:[1,23],34:21,35:[1,27],36:[1,26],42:17,43:19,44:20,47:[1,22],48:[1,24],49:[1,25]},{1:[2,55],9:[2,55],12:[2,55],13:[2,55],14:[2,55],24:[2,55],26:[2,55],31:[2,55],38:[2,55],41:[2,55],46:[2,55]},{1:[2,56],9:[2,56],12:[2,56],13:[2,56],14:[2,56],24:[2,56],26:[2,56],31:[2,56],38:[2,56],41:[2,56],46:[2,56]},{4:48,5:3,7:6,8:[1,15],9:[1,16],10:4,11:[1,5],15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,28:18,29:[1,23],34:21,35:[1,27],36:[1,26],42:17,43:19,44:20,47:[1,22],48:[1,24],49:[1,25]},{36:[1,49]},{1:[2,4],5:50,7:6,8:[1,15],9:[1,16],10:4,11:[1,5],12:[2,4],13:[2,4],14:[2,4],15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,26:[2,4],28:18,29:[1,23],34:21,35:[1,27],36:[1,26],38:[2,4],42:17,43:19,44:20,47:[1,22],48:[1,24],49:[1,25]},{1:[2,9],8:[2,9],9:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],26:[2,9],29:[2,9],35:[2,9],36:[2,9],38:[2,9],47:[2,9],48:[2,9],49:[2,9]},{1:[2,10],8:[2,10],9:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],26:[2,10],29:[2,10],35:[2,10],36:[2,10],38:[2,10],47:[2,10],48:[2,10],49:[2,10]},{1:[2,11],8:[2,11],9:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],26:[2,11],29:[2,11],35:[2,11],36:[2,11],38:[2,11],47:[2,11],48:[2,11],49:[2,11]},{1:[2,45],9:[2,45],12:[2,45],13:[2,45],14:[2,45],24:[2,45],26:[2,45],38:[2,45],41:[2,45]},{9:[1,52],21:51,34:21,35:[1,27],36:[1,26],43:53,44:54,48:[1,24],49:[1,25]},{1:[2,40],9:[2,40],12:[2,40],13:[2,40],14:[2,40],24:[2,40],26:[2,40],38:[2,40],41:[2,40],45:55,46:[1,37]},{9:[1,52],21:56,34:21,35:[1,27],36:[1,26],43:53,44:54,48:[1,24],49:[1,25]},{1:[2,47],9:[2,47],12:[2,47],13:[2,47],14:[2,47],24:[2,47],26:[2,47],38:[2,47],41:[2,47],46:[2,47]},{9:[1,52],21:57,34:21,35:[1,27],36:[1,26],43:53,44:54,48:[1,24],49:[1,25]},{1:[2,5],12:[2,5],13:[2,5],14:[2,5],26:[2,5],38:[2,5]},{9:[1,58]},{1:[2,42],9:[2,42],12:[2,42],13:[2,42],14:[2,42],24:[2,42],26:[2,42],33:[1,59],38:[2,42],41:[2,42]},{9:[1,16],10:60,15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,28:18,29:[1,23],34:21,35:[1,27],36:[1,26],42:17,43:19,44:20,47:[1,22],48:[1,24],49:[1,25]},{9:[1,16],10:62,15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,28:18,29:[1,23],34:21,35:[1,27],36:[1,26],37:61,42:17,43:19,44:20,47:[1,22],48:[1,24],49:[1,25]},{1:[2,34],9:[1,64],12:[2,34],13:[2,34],14:[2,34],24:[2,34],26:[2,34],38:[2,34],40:63,41:[2,34],45:36,46:[1,37]},{23:67,24:[1,68],27:65,29:[1,66]},{1:[2,43],9:[2,43],12:[2,43],13:[2,43],14:[2,43],24:[2,43],26:[2,43],38:[2,43],41:[2,43]},{1:[2,44],9:[2,44],12:[2,44],13:[2,44],14:[2,44],24:[2,44],26:[2,44],38:[2,44],41:[2,44]},{23:67,24:[1,68],27:69},{6:28,12:[1,29],13:[1,30],14:[1,31],38:[1,70]},{9:[1,16],10:62,15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,28:18,29:[1,23],34:21,35:[1,27],36:[1,26],37:71,42:17,43:19,44:20,47:[1,22],48:[1,24],49:[1,25]},{1:[2,3],12:[2,3],13:[2,3],14:[2,3],26:[2,3],38:[2,3]},{1:[2,28],12:[2,28],13:[2,28],14:[2,28],24:[2,28],26:[2,28],31:[2,28],38:[2,28],41:[2,28]},{1:[2,49],9:[2,49],12:[2,49],13:[2,49],14:[2,49],24:[2,49],26:[2,49],31:[2,49],38:[2,49],41:[2,49],46:[2,49]},{1:[2,50],9:[2,50],12:[2,50],13:[2,50],14:[2,50],24:[2,50],26:[2,50],31:[2,50],38:[2,50],41:[2,50],46:[2,50]},{1:[2,51],9:[2,51],12:[2,51],13:[2,51],14:[2,51],24:[2,51],26:[2,51],31:[2,51],38:[2,51],41:[2,51],46:[2,51]},{1:[2,46],9:[2,46],12:[2,46],13:[2,46],14:[2,46],24:[2,46],26:[2,46],38:[2,46],41:[2,46],46:[2,46]},{1:[2,29],12:[2,29],13:[2,29],14:[2,29],24:[2,29],26:[2,29],31:[2,29],38:[2,29],41:[2,29]},{1:[2,48],9:[2,48],12:[2,48],13:[2,48],14:[2,48],24:[2,48],26:[2,48],38:[2,48],41:[2,48],46:[2,48]},{33:[1,72]},{9:[1,16],10:73,15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,28:18,29:[1,23],34:21,35:[1,27],36:[1,26],42:17,43:19,44:20,47:[1,22],48:[1,24],49:[1,25]},{1:[2,32],12:[2,32],13:[2,32],14:[2,32],24:[2,32],26:[2,32],38:[2,32],41:[2,32]},{38:[1,74],41:[1,75]},{38:[2,39],41:[2,39]},{1:[2,35],12:[2,35],13:[2,35],14:[2,35],24:[2,35],26:[2,35],38:[2,35],41:[2,35],45:55,46:[1,37]},{1:[2,36],12:[2,36],13:[2,36],14:[2,36],24:[2,36],26:[2,36],38:[2,36],41:[2,36]},{1:[2,27],12:[2,27],13:[2,27],14:[2,27],24:[2,27],26:[2,27],38:[2,27],41:[2,27]},{9:[1,16],10:76,15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,28:18,29:[1,23],34:21,35:[1,27],36:[1,26],42:17,43:19,44:20,47:[1,22],48:[1,24],49:[1,25]},{4:78,5:3,7:6,8:[1,15],9:[1,16],10:4,11:[1,5],15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,25:77,26:[1,79],28:18,29:[1,23],34:21,35:[1,27],36:[1,26],42:17,43:19,44:20,47:[1,22],48:[1,24],49:[1,25]},{8:[2,20],9:[2,20],11:[2,20],26:[2,20],29:[2,20],35:[2,20],36:[2,20],47:[2,20],48:[2,20],49:[2,20]},{1:[2,24],12:[2,24],13:[2,24],14:[2,24],24:[2,24],26:[2,24],30:[2,24],38:[2,24],41:[2,24]},{1:[2,54],9:[2,54],12:[2,54],13:[2,54],14:[2,54],24:[2,54],26:[2,54],31:[2,54],38:[2,54],41:[2,54],46:[2,54]},{38:[1,80],41:[1,75]},{9:[1,16],10:81,15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,28:18,29:[1,23],34:21,35:[1,27],36:[1,26],42:17,43:19,44:20,47:[1,22],48:[1,24],49:[1,25]},{1:[2,31],12:[2,31],13:[2,31],14:[2,31],24:[2,31],26:[2,31],38:[2,31],41:[2,31]},{1:[2,37],12:[2,37],13:[2,37],14:[2,37],24:[2,37],26:[2,37],38:[2,37],41:[2,37]},{9:[1,16],10:82,15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,28:18,29:[1,23],34:21,35:[1,27],36:[1,26],42:17,43:19,44:20,47:[1,22],48:[1,24],49:[1,25]},{23:67,24:[1,68],27:83},{1:[2,22],12:[2,22],13:[2,22],14:[2,22],24:[2,22],26:[2,22],30:[2,22],38:[2,22],41:[2,22]},{6:28,12:[1,29],13:[1,30],14:[1,31],25:84,26:[1,79]},{1:[2,21],12:[2,21],13:[2,21],14:[2,21],24:[2,21],26:[2,21],30:[2,21],38:[2,21],41:[2,21]},{1:[2,33],9:[2,33],12:[2,33],13:[2,33],14:[2,33],24:[2,33],26:[2,33],31:[2,33],38:[2,33],41:[2,33],46:[2,33]},{1:[2,30],12:[2,30],13:[2,30],14:[2,30],24:[2,30],26:[2,30],38:[2,30],41:[2,30]},{38:[2,38],41:[2,38]},{1:[2,25],12:[2,25],13:[2,25],14:[2,25],24:[2,25],26:[2,25],30:[2,25],38:[2,25],41:[2,25]},{1:[2,23],12:[2,23],13:[2,23],14:[2,23],24:[2,23],26:[2,23],30:[2,23],38:[2,23],41:[2,23]}],
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
exports.parser = parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); }
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