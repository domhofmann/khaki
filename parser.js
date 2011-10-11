/* Jison generated parser */
var parser = (function(){


  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }
  
  Array.prototype.last = function () {
    return this[this.length - 1];
  }
  
  var imports = ['#import <UIKit/UIKit.h>'];
  var classes = [require('./types.js')._Class()];
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
  
  merge = function (obj1, obj2) {
      var obj3 = {};
      for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
      for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
      return obj3;
  }
  
  needsSemicolon = function (string) {
    return string.charAt(string.length - 1) != "}";
  }
  
  var DELETE = '%%%DELETE%%%';
  

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"body":4,"line":5,"meta":6,"terminator":7,"importation":8,"import":9,"WORD":10,"class_def":11,"method_def":12,"expression":13,"statement":14,"NEWLINE":15,";":16,"EOF":17,"return":18,"assignment":19,"invocation":20,"message":21,"operation":22,"construction":23,"If":24,"value":25,"synonym":26,"fallback":27,"indent":28,"INDENT":29,"dedent":30,"DEDENT":31,"block":32,"if_block":33,"if":34,"else":35,"OPERATOR":36,"~":37,"ASSIGNMENT_OPERATOR":38,"cg_shortcut":39,"@":40,"(":41,"list":42,")":43,"!":44,"selector_args":45,",":46,"class":47,":":48,"def":49,"casts":50,"method_arg":51,"static":52,"SELECTOR_ARG":53,"cast":54,"simple_cast":55,"simple_message":56,"literal":57,"parenthetical":58,"selector_arg":59,"property_chain":60,"SYNONYM":61,".":62,"FALLBACK":63,"STRING_LITERAL":64,"NUMBER":65,"$accept":0,"$end":1},
terminals_: {2:"error",9:"import",10:"WORD",15:"NEWLINE",16:";",17:"EOF",18:"return",26:"synonym",29:"INDENT",31:"DEDENT",34:"if",35:"else",36:"OPERATOR",37:"~",38:"ASSIGNMENT_OPERATOR",40:"@",41:"(",43:")",44:"!",46:",",47:"class",48:":",49:"def",52:"static",53:"SELECTOR_ARG",61:"SYNONYM",62:".",63:"FALLBACK",64:"STRING_LITERAL",65:"NUMBER"},
productions_: [0,[3,1],[4,1],[4,1],[4,3],[4,3],[4,2],[8,2],[6,1],[6,1],[6,1],[5,1],[5,1],[7,1],[7,1],[7,1],[14,2],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[28,1],[30,1],[32,2],[32,3],[33,3],[33,5],[24,1],[24,3],[22,3],[22,3],[19,5],[19,4],[19,3],[39,4],[23,2],[23,3],[23,3],[20,4],[42,3],[42,1],[11,5],[12,4],[12,3],[12,4],[12,3],[12,5],[12,4],[12,5],[12,4],[51,3],[51,2],[50,3],[50,3],[50,1],[55,2],[55,1],[54,2],[54,2],[21,2],[21,1],[56,2],[56,2],[56,2],[56,2],[45,2],[45,1],[59,2],[25,1],[25,1],[25,1],[25,1],[25,1],[25,1],[60,3],[60,3],[27,1],[58,3],[57,1],[57,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:
    var deleteToken = new RegExp(DELETE + '.*\n*', 'g');
    imports = imports.map(function (import) { return code(import) }).join('\n');
    //console.log(classes[0]);
    //return imports + '\n\n' + code($$[$0]).replace(deleteToken, '');
    
    classes.pop();
    return classes.map(function (classObj) {
        return imports + '\n\n' + code(yy._Interface(classObj)) + '\n\n' + code(yy._Implementation(classObj));
    }).join('\n\n');
    
  
break;
case 2:this.$ = Array(scope.length).join('\t') + code($$[$0])
break;
case 3: this.$ = DELETE 
break;
case 5: var c = code($$[$0-2]); this.$ = c + (needsSemicolon(c) ? ';' : '') + $$[$0-1] + Array(scope.length).join('\t') + code($$[$0]) 
break;
case 6: var c = code($$[$0-1]); this.$ = code($$[$0-1]) + (needsSemicolon(c) ? ';' : '') + $$[$0] 
break;
case 7: imports.push(yy._Importation({framework: $$[$0]})) 
break;
case 13:this.$ = '\n'
break;
case 14:this.$ = '\n'
break;
case 15:this.$ = ''
break;
case 16: this.$ = 'return ' + code($$[$0]) 
break;
case 26: scope.push([]) 
break;
case 27: scope.pop() 
break;
case 28: this.$ = '' 
break;
case 29: var c = code($$[$0-1]); this.$ = c + (needsSemicolon(c) ? ';' : '') 
break;
case 30:this.$ = 'if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 31:this.$ = code($$[$0-4]) + ' else if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 33:this.$ = code($$[$0-2]) + ' else {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 34: this.$ = yy._Operation({left: $$[$0-2], operator: $$[$0-1], right: $$[$0]}) 
break;
case 35: this.$ = yy._Operation({left: $$[$0-2], operator: $$[$0-1], right: $$[$0]}) 
break;
case 36: this.$ = yy._Assignment({scope: scope, type: $$[$0-4], scalar: true, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 37: this.$ = yy._Assignment({scope: scope, type: $$[$0-3], identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 38: this.$ = yy._Assignment({scope: scope, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 39: this.$ = yy._CGShortcut($$[$0-1]) 
break;
case 40: this.$ = yy._Construction({type: $$[$0-1]}) 
break;
case 41: this.$ = yy._Construction({type: $$[$0-2], message: $$[$0]}) 
break;
case 42: this.$ = yy._Construction({type: $$[$0-2], message: $$[$0]}) 
break;
case 43: this.$ = yy._Invocation({func: $$[$0-3], args: $$[$0-1]}) 
break;
case 44: $$[$0-2].push($$[$0]); this.$ = $$[$0-2] 
break;
case 45: this.$ = [$$[$0]] 
break;
case 46: var c = classes.last(); c.name = $$[$0-3]; c.superclass = $$[$0-1]; classes.push(yy._Class()); this.$ = $$[$0] 
break;
case 47: this.$ = yy._Method(merge({memberOf: classes.last(), operator: '-', signature: $$[$0-1], block: $$[$0], indents: scope.length}, $$[$0-2])) 
break;
case 48: this.$ = yy._Method({memberOf: classes.last(), operator: '-', signature: $$[$0-1], block: $$[$0], indents: scope.length}) 
break;
case 49: this.$ = yy._Method(merge({memberOf: classes.last(), operator: '-', signature: $$[$0-1], block: $$[$0], indents: scope.length}, $$[$0-2])) 
break;
case 50: this.$ = yy._Method({memberOf: classes.last(), operator: '-', signature: $$[$0-1], block: $$[$0], indents: scope.length}) 
break;
case 51: this.$ = yy._Method(merge({memberOf: classes.last(), operator: '+', signature: $$[$0-1], block: $$[$0], indents: scope.length}, $$[$0-2])) 
break;
case 52: this.$ = yy._Method({memberOf: classes.last(), operator: '+', signature: $$[$0-1], block: $$[$0], indents: scope.length}) 
break;
case 53: this.$ = yy._Method(merge({memberOf: classes.last(), operator: '+', signature: $$[$0-1], block: $$[$0], indents: scope.length}, $$[$0-2])) 
break;
case 54: this.$ = yy._Method({memberOf: classes.last(), operator: '+', signature: $$[$0-1], block: $$[$0], indents: scope.length}) 
break;
case 55: $$[$0-2].args.push([yy._MethodArg({arg: $$[$0-1], cast: $$[$0]})]); this.$ = $$[$0-2] 
break;
case 56: this.$ = {args: [yy._MethodArg({arg: $$[$0-1], cast: $$[$0]})]} 
break;
case 57: this.$ = $$[$0-1] 
break;
case 58: this.$ = $$[$0-1] 
break;
case 60: this.$ = yy._Cast({type: $$[$0-1], scalar: true}) 
break;
case 61: this.$ = yy._Cast({type: $$[$0]}) 
break;
case 62: $$[$0-1].scalar = true; this.$ = $$[$0-1]
break;
case 63: this.$ = yy._Cast({type: $$[$0-1].type + ' ' + $$[$0]}) 
break;
case 64: this.$ = yy._Message({target: $$[$0-1], args: $$[$0]}) 
break;
case 66: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 67: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 68: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 69: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 70: $$[$0-1].push($$[$0][0]); this.$ = $$[$0-1] 
break;
case 72: this.$ = [{arg: $$[$0-1], value: $$[$0]}] 
break;
case 79: this.$ = $$[$0-2] + '.' + WORD2 
break;
case 80: this.$ = $$[$0-2] + '.' + $$[$0] 
break;
case 81: this.$ = $$[$0] 
break;
case 82: this.$ = yy._Parenthetical($$[$0-1]) 
break;
case 83: this.$ = yy._String($$[$0]) 
break;
case 84: this.$ = yy._Number($$[$0]) 
break;
}
},
table: [{3:1,4:2,5:3,6:4,8:7,9:[1,20],10:[1,24],11:8,12:9,13:5,14:6,18:[1,19],19:10,20:11,21:12,22:13,23:14,24:15,25:16,26:[1,17],27:18,33:26,34:[1,33],39:30,40:[1,37],41:[1,36],47:[1,21],49:[1,22],52:[1,23],56:25,57:28,58:29,60:27,61:[1,31],63:[1,32],64:[1,34],65:[1,35]},{1:[3]},{1:[2,1],7:38,15:[1,39],16:[1,40],17:[1,41]},{1:[2,2],15:[2,2],16:[2,2],17:[2,2],31:[2,2],43:[2,2]},{1:[2,3],15:[2,3],16:[2,3],17:[2,3],31:[2,3],43:[2,3]},{1:[2,11],15:[2,11],16:[2,11],17:[2,11],31:[2,11],43:[2,11]},{1:[2,12],15:[2,12],16:[2,12],17:[2,12],31:[2,12],43:[2,12]},{1:[2,8],15:[2,8],16:[2,8],17:[2,8],31:[2,8],43:[2,8]},{1:[2,9],15:[2,9],16:[2,9],17:[2,9],31:[2,9],43:[2,9]},{1:[2,10],15:[2,10],16:[2,10],17:[2,10],31:[2,10],43:[2,10]},{1:[2,17],15:[2,17],16:[2,17],17:[2,17],29:[2,17],31:[2,17],43:[2,17],46:[2,17]},{1:[2,18],15:[2,18],16:[2,18],17:[2,18],29:[2,18],31:[2,18],43:[2,18],46:[2,18]},{1:[2,19],10:[1,42],15:[2,19],16:[2,19],17:[2,19],29:[2,19],31:[2,19],43:[2,19],46:[2,19]},{1:[2,20],15:[2,20],16:[2,20],17:[2,20],29:[2,20],31:[2,20],36:[1,43],43:[2,20],46:[2,20]},{1:[2,21],15:[2,21],16:[2,21],17:[2,21],29:[2,21],31:[2,21],43:[2,21],46:[2,21]},{1:[2,22],15:[2,22],16:[2,22],17:[2,22],29:[2,22],31:[2,22],43:[2,22],46:[2,22]},{1:[2,23],15:[2,23],16:[2,23],17:[2,23],29:[2,23],31:[2,23],36:[1,45],43:[2,23],45:44,46:[2,23],53:[1,47],59:46},{1:[2,24],15:[2,24],16:[2,24],17:[2,24],29:[2,24],31:[2,24],43:[2,24],46:[2,24]},{1:[2,25],15:[2,25],16:[2,25],17:[2,25],29:[2,25],31:[2,25],43:[2,25],46:[2,25]},{10:[1,24],13:48,19:10,20:11,21:12,22:13,23:14,24:15,25:16,26:[1,17],27:18,33:26,34:[1,33],39:30,40:[1,37],41:[1,36],56:25,57:28,58:29,60:27,61:[1,31],63:[1,32],64:[1,34],65:[1,35]},{10:[1,49]},{10:[1,50]},{10:[1,53],41:[1,54],50:51,51:52,53:[1,56],55:55},{49:[1,57]},{1:[2,73],10:[1,59],15:[2,73],16:[2,73],17:[2,73],29:[2,73],31:[2,73],36:[2,73],37:[1,58],38:[1,60],41:[1,61],43:[2,73],44:[1,62],46:[2,73],53:[2,73],62:[1,63]},{1:[2,65],10:[2,65],15:[2,65],16:[2,65],17:[2,65],29:[2,65],31:[2,65],43:[2,65],46:[2,65]},{1:[2,32],15:[2,32],16:[2,32],17:[2,32],29:[2,32],31:[2,32],35:[1,64],43:[2,32],46:[2,32]},{1:[2,74],10:[2,74],15:[2,74],16:[2,74],17:[2,74],29:[2,74],31:[2,74],36:[2,74],43:[2,74],46:[2,74],53:[2,74],62:[1,65]},{1:[2,75],10:[1,66],15:[2,75],16:[2,75],17:[2,75],29:[2,75],31:[2,75],36:[2,75],43:[2,75],46:[2,75],53:[2,75]},{1:[2,76],10:[1,67],15:[2,76],16:[2,76],17:[2,76],29:[2,76],31:[2,76],36:[2,76],43:[2,76],46:[2,76],53:[2,76]},{1:[2,77],10:[2,77],15:[2,77],16:[2,77],17:[2,77],29:[2,77],31:[2,77],36:[2,77],43:[2,77],46:[2,77],53:[2,77]},{1:[2,78],10:[2,78],15:[2,78],16:[2,78],17:[2,78],29:[2,78],31:[2,78],36:[2,78],43:[2,78],46:[2,78],53:[2,78]},{1:[2,81],15:[2,81],16:[2,81],17:[2,81],29:[2,81],31:[2,81],43:[2,81],46:[2,81]},{10:[1,24],13:68,19:10,20:11,21:12,22:13,23:14,24:15,25:16,26:[1,17],27:18,33:26,34:[1,33],39:30,40:[1,37],41:[1,36],56:25,57:28,58:29,60:27,61:[1,31],63:[1,32],64:[1,34],65:[1,35]},{1:[2,83],10:[2,83],15:[2,83],16:[2,83],17:[2,83],29:[2,83],31:[2,83],36:[2,83],43:[2,83],46:[2,83],53:[2,83]},{1:[2,84],10:[2,84],15:[2,84],16:[2,84],17:[2,84],29:[2,84],31:[2,84],36:[2,84],43:[2,84],46:[2,84],53:[2,84]},{4:69,5:3,6:4,8:7,9:[1,20],10:[1,24],11:8,12:9,13:5,14:6,18:[1,19],19:10,20:11,21:12,22:13,23:14,24:15,25:16,26:[1,17],27:18,33:26,34:[1,33],39:30,40:[1,37],41:[1,36],47:[1,21],49:[1,22],52:[1,23],56:25,57:28,58:29,60:27,61:[1,31],63:[1,32],64:[1,34],65:[1,35]},{41:[1,70]},{1:[2,6],5:72,6:71,8:7,9:[1,20],10:[1,24],11:8,12:9,13:5,14:6,15:[2,6],16:[2,6],17:[2,6],18:[1,19],19:10,20:11,21:12,22:13,23:14,24:15,25:16,26:[1,17],27:18,31:[2,6],33:26,34:[1,33],39:30,40:[1,37],41:[1,36],43:[2,6],47:[1,21],49:[1,22],52:[1,23],56:25,57:28,58:29,60:27,61:[1,31],63:[1,32],64:[1,34],65:[1,35]},{1:[2,13],9:[2,13],10:[2,13],15:[2,13],16:[2,13],17:[2,13],18:[2,13],26:[2,13],31:[2,13],34:[2,13],40:[2,13],41:[2,13],43:[2,13],47:[2,13],49:[2,13],52:[2,13],61:[2,13],63:[2,13],64:[2,13],65:[2,13]},{1:[2,14],9:[2,14],10:[2,14],15:[2,14],16:[2,14],17:[2,14],18:[2,14],26:[2,14],31:[2,14],34:[2,14],40:[2,14],41:[2,14],43:[2,14],47:[2,14],49:[2,14],52:[2,14],61:[2,14],63:[2,14],64:[2,14],65:[2,14]},{1:[2,15],9:[2,15],10:[2,15],15:[2,15],16:[2,15],17:[2,15],18:[2,15],26:[2,15],31:[2,15],34:[2,15],40:[2,15],41:[2,15],43:[2,15],47:[2,15],49:[2,15],52:[2,15],61:[2,15],63:[2,15],64:[2,15],65:[2,15]},{1:[2,69],10:[2,69],15:[2,69],16:[2,69],17:[2,69],29:[2,69],31:[2,69],43:[2,69],46:[2,69]},{10:[1,74],25:73,39:30,40:[1,37],41:[1,36],57:75,58:76,60:27,61:[1,31],64:[1,34],65:[1,35]},{1:[2,64],10:[2,64],15:[2,64],16:[2,64],17:[2,64],29:[2,64],31:[2,64],43:[2,64],46:[2,64],53:[1,47],59:77},{10:[1,74],25:78,39:30,40:[1,37],41:[1,36],57:75,58:76,60:27,61:[1,31],64:[1,34],65:[1,35]},{1:[2,71],10:[2,71],15:[2,71],16:[2,71],17:[2,71],29:[2,71],31:[2,71],43:[2,71],46:[2,71],53:[2,71]},{10:[1,74],25:79,39:30,40:[1,37],41:[1,36],57:75,58:76,60:27,61:[1,31],64:[1,34],65:[1,35]},{1:[2,16],15:[2,16],16:[2,16],17:[2,16],31:[2,16],43:[2,16]},{1:[2,7],15:[2,7],16:[2,7],17:[2,7],31:[2,7],43:[2,7]},{48:[1,80]},{10:[1,82],51:81,53:[1,56]},{28:85,29:[1,86],32:83,53:[1,84]},{10:[2,61],28:85,29:[1,86],32:87,37:[1,88],53:[2,61]},{10:[1,91],54:89,55:90},{10:[2,59],29:[2,59],53:[2,59]},{10:[1,91],41:[1,54],50:92,55:55},{10:[1,95],41:[1,54],50:93,51:94,53:[1,56],55:55},{10:[1,96]},{1:[2,66],10:[2,66],15:[2,66],16:[2,66],17:[2,66],29:[2,66],31:[2,66],38:[1,97],43:[2,66],46:[2,66]},{10:[1,24],13:98,19:10,20:11,21:12,22:13,23:14,24:15,25:16,26:[1,17],27:18,33:26,34:[1,33],39:30,40:[1,37],41:[1,36],56:25,57:28,58:29,60:27,61:[1,31],63:[1,32],64:[1,34],65:[1,35]},{10:[1,24],13:100,19:10,20:11,21:12,22:13,23:14,24:15,25:16,26:[1,17],27:18,33:26,34:[1,33],39:30,40:[1,37],41:[1,36],42:99,56:25,57:28,58:29,60:27,61:[1,31],63:[1,32],64:[1,34],65:[1,35]},{1:[2,40],10:[1,102],15:[2,40],16:[2,40],17:[2,40],29:[2,40],31:[2,40],43:[2,40],45:101,46:[2,40],53:[1,47],59:46},{10:[1,103]},{28:85,29:[1,86],32:104,34:[1,105]},{10:[1,106]},{1:[2,67],10:[2,67],15:[2,67],16:[2,67],17:[2,67],29:[2,67],31:[2,67],43:[2,67],46:[2,67]},{1:[2,68],10:[2,68],15:[2,68],16:[2,68],17:[2,68],29:[2,68],31:[2,68],43:[2,68],46:[2,68]},{28:85,29:[1,86],32:107},{7:38,15:[1,39],16:[1,40],17:[1,41],43:[1,108]},{10:[1,24],13:100,19:10,20:11,21:12,22:13,23:14,24:15,25:16,26:[1,17],27:18,33:26,34:[1,33],39:30,40:[1,37],41:[1,36],42:109,56:25,57:28,58:29,60:27,61:[1,31],63:[1,32],64:[1,34],65:[1,35]},{1:[2,4],15:[2,4],16:[2,4],17:[2,4],31:[2,4],43:[2,4]},{1:[2,5],15:[2,5],16:[2,5],17:[2,5],31:[2,5],43:[2,5]},{1:[2,34],15:[2,34],16:[2,34],17:[2,34],29:[2,34],31:[2,34],36:[2,34],43:[2,34],46:[2,34]},{1:[2,73],10:[2,73],15:[2,73],16:[2,73],17:[2,73],29:[2,73],31:[2,73],36:[2,73],43:[2,73],46:[2,73],53:[2,73],62:[1,63]},{1:[2,75],10:[2,75],15:[2,75],16:[2,75],17:[2,75],29:[2,75],31:[2,75],36:[2,75],43:[2,75],46:[2,75],53:[2,75]},{1:[2,76],10:[2,76],15:[2,76],16:[2,76],17:[2,76],29:[2,76],31:[2,76],36:[2,76],43:[2,76],46:[2,76],53:[2,76]},{1:[2,70],10:[2,70],15:[2,70],16:[2,70],17:[2,70],29:[2,70],31:[2,70],43:[2,70],46:[2,70],53:[2,70]},{1:[2,35],15:[2,35],16:[2,35],17:[2,35],29:[2,35],31:[2,35],36:[2,35],43:[2,35],46:[2,35]},{1:[2,72],10:[2,72],15:[2,72],16:[2,72],17:[2,72],29:[2,72],31:[2,72],43:[2,72],46:[2,72],53:[2,72]},{10:[1,110]},{28:85,29:[1,86],32:111,53:[1,84]},{28:85,29:[1,86],32:112},{1:[2,48],15:[2,48],16:[2,48],17:[2,48],31:[2,48],43:[2,48]},{10:[1,91],41:[1,54],50:113,55:55},{4:115,5:3,6:4,8:7,9:[1,20],10:[1,24],11:8,12:9,13:5,14:6,18:[1,19],19:10,20:11,21:12,22:13,23:14,24:15,25:16,26:[1,17],27:18,30:114,31:[1,116],33:26,34:[1,33],39:30,40:[1,37],41:[1,36],47:[1,21],49:[1,22],52:[1,23],56:25,57:28,58:29,60:27,61:[1,31],63:[1,32],64:[1,34],65:[1,35]},{9:[2,26],10:[2,26],18:[2,26],26:[2,26],31:[2,26],34:[2,26],40:[2,26],41:[2,26],47:[2,26],49:[2,26],52:[2,26],61:[2,26],63:[2,26],64:[2,26],65:[2,26]},{1:[2,50],15:[2,50],16:[2,50],17:[2,50],31:[2,50],43:[2,50]},{10:[2,60],29:[2,60],43:[2,60],53:[2,60]},{10:[1,119],37:[1,118],43:[1,117]},{43:[1,120]},{29:[2,61],37:[1,88],43:[2,61],53:[2,61]},{29:[2,56],53:[2,56]},{10:[1,122],51:121,53:[1,56]},{28:85,29:[1,86],32:123,53:[1,84]},{10:[2,61],28:85,29:[1,86],32:124,37:[1,88],53:[2,61]},{38:[1,125]},{10:[1,24],13:126,19:10,20:11,21:12,22:13,23:14,24:15,25:16,26:[1,17],27:18,33:26,34:[1,33],39:30,40:[1,37],41:[1,36],56:25,57:28,58:29,60:27,61:[1,31],63:[1,32],64:[1,34],65:[1,35]},{1:[2,38],15:[2,38],16:[2,38],17:[2,38],29:[2,38],31:[2,38],43:[2,38],46:[2,38]},{43:[1,127],46:[1,128]},{43:[2,45],46:[2,45]},{1:[2,41],15:[2,41],16:[2,41],17:[2,41],29:[2,41],31:[2,41],43:[2,41],46:[2,41],53:[1,47],59:77},{1:[2,42],15:[2,42],16:[2,42],17:[2,42],29:[2,42],31:[2,42],43:[2,42],46:[2,42]},{1:[2,80],10:[2,80],15:[2,80],16:[2,80],17:[2,80],29:[2,80],31:[2,80],36:[2,80],43:[2,80],46:[2,80],53:[2,80],62:[2,80]},{1:[2,33],15:[2,33],16:[2,33],17:[2,33],29:[2,33],31:[2,33],43:[2,33],46:[2,33]},{10:[1,24],13:129,19:10,20:11,21:12,22:13,23:14,24:15,25:16,26:[1,17],27:18,33:26,34:[1,33],39:30,40:[1,37],41:[1,36],56:25,57:28,58:29,60:27,61:[1,31],63:[1,32],64:[1,34],65:[1,35]},{1:[2,79],10:[2,79],15:[2,79],16:[2,79],17:[2,79],29:[2,79],31:[2,79],36:[2,79],43:[2,79],46:[2,79],53:[2,79],62:[2,79]},{1:[2,30],15:[2,30],16:[2,30],17:[2,30],29:[2,30],31:[2,30],35:[2,30],43:[2,30],46:[2,30]},{1:[2,82],10:[2,82],15:[2,82],16:[2,82],17:[2,82],29:[2,82],31:[2,82],36:[2,82],43:[2,82],46:[2,82],53:[2,82]},{43:[1,130],46:[1,128]},{28:85,29:[1,86],32:131},{1:[2,47],15:[2,47],16:[2,47],17:[2,47],31:[2,47],43:[2,47]},{1:[2,49],15:[2,49],16:[2,49],17:[2,49],31:[2,49],43:[2,49]},{29:[2,55],53:[2,55]},{1:[2,28],15:[2,28],16:[2,28],17:[2,28],29:[2,28],31:[2,28],35:[2,28],43:[2,28],46:[2,28]},{7:38,15:[1,39],16:[1,40],17:[1,41],30:132,31:[1,116]},{1:[2,27],15:[2,27],16:[2,27],17:[2,27],29:[2,27],31:[2,27],35:[2,27],43:[2,27],46:[2,27]},{10:[2,57],29:[2,57],53:[2,57]},{10:[2,62],37:[2,62],43:[2,62]},{10:[2,63],37:[2,63],43:[2,63]},{10:[2,58],29:[2,58],53:[2,58]},{28:85,29:[1,86],32:133,53:[1,84]},{28:85,29:[1,86],32:134},{1:[2,52],15:[2,52],16:[2,52],17:[2,52],31:[2,52],43:[2,52]},{1:[2,54],15:[2,54],16:[2,54],17:[2,54],31:[2,54],43:[2,54]},{10:[1,24],13:135,19:10,20:11,21:12,22:13,23:14,24:15,25:16,26:[1,17],27:18,33:26,34:[1,33],39:30,40:[1,37],41:[1,36],56:25,57:28,58:29,60:27,61:[1,31],63:[1,32],64:[1,34],65:[1,35]},{1:[2,37],15:[2,37],16:[2,37],17:[2,37],29:[2,37],31:[2,37],43:[2,37],46:[2,37]},{1:[2,43],15:[2,43],16:[2,43],17:[2,43],29:[2,43],31:[2,43],43:[2,43],46:[2,43]},{10:[1,24],13:136,19:10,20:11,21:12,22:13,23:14,24:15,25:16,26:[1,17],27:18,33:26,34:[1,33],39:30,40:[1,37],41:[1,36],56:25,57:28,58:29,60:27,61:[1,31],63:[1,32],64:[1,34],65:[1,35]},{28:85,29:[1,86],32:137},{1:[2,39],10:[2,39],15:[2,39],16:[2,39],17:[2,39],29:[2,39],31:[2,39],36:[2,39],43:[2,39],46:[2,39],53:[2,39]},{1:[2,46],15:[2,46],16:[2,46],17:[2,46],31:[2,46],43:[2,46]},{1:[2,29],15:[2,29],16:[2,29],17:[2,29],29:[2,29],31:[2,29],35:[2,29],43:[2,29],46:[2,29]},{1:[2,51],15:[2,51],16:[2,51],17:[2,51],31:[2,51],43:[2,51]},{1:[2,53],15:[2,53],16:[2,53],17:[2,53],31:[2,53],43:[2,53]},{1:[2,36],15:[2,36],16:[2,36],17:[2,36],29:[2,36],31:[2,36],43:[2,36],46:[2,36]},{43:[2,44],46:[2,44]},{1:[2,31],15:[2,31],16:[2,31],17:[2,31],29:[2,31],31:[2,31],35:[2,31],43:[2,31],46:[2,31]}],
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