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
    if (!string || !(string instanceof String)) return null;
    return string.charAt(string.length - 1) != "}";
  }
  
  var DELETE = '%%%DELETE%%%';
  

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"body":4,"line":5,"meta":6,"terminator":7,"importation":8,"import":9,"WORD":10,"class_def":11,"method_def":12,"expression":13,"statement":14,"NEWLINE":15,";":16,"EOF":17,"assignment":18,"invocation":19,"message":20,"construction":21,"operation":22,"If":23,"value":24,"fallback":25,"indent":26,"INDENT":27,"dedent":28,"DEDENT":29,"block":30,"if_block":31,"if":32,"else":33,"OPERATOR":34,"~":35,"ASSIGNMENT_OPERATOR":36,"cg_shortcut":37,"@":38,"(":39,"list":40,")":41,"!":42,"selector_args":43,",":44,"class":45,":":46,"def":47,"casts":48,"method_arg":49,"static":50,"SELECTOR_ARG":51,"cast":52,"simple_cast":53,"simple_message":54,"literal":55,"parenthetical":56,"selector_arg":57,"FALLBACK":58,"STRING_LITERAL":59,"NUMBER":60,"$accept":0,"$end":1},
terminals_: {2:"error",9:"import",10:"WORD",14:"statement",15:"NEWLINE",16:";",17:"EOF",27:"INDENT",29:"DEDENT",32:"if",33:"else",34:"OPERATOR",35:"~",36:"ASSIGNMENT_OPERATOR",38:"@",39:"(",41:")",42:"!",44:",",45:"class",46:":",47:"def",50:"static",51:"SELECTOR_ARG",58:"FALLBACK",59:"STRING_LITERAL",60:"NUMBER"},
productions_: [0,[3,1],[4,1],[4,1],[4,3],[4,3],[4,2],[8,2],[6,1],[6,1],[6,1],[5,1],[5,1],[7,1],[7,1],[7,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[26,1],[28,1],[30,2],[30,3],[31,3],[31,5],[23,1],[23,3],[22,3],[22,3],[18,5],[18,4],[18,3],[37,4],[21,2],[21,3],[21,3],[19,4],[40,3],[40,1],[11,5],[12,4],[12,5],[12,3],[12,4],[49,3],[49,2],[48,3],[48,3],[48,1],[53,2],[53,1],[52,2],[52,2],[20,2],[20,1],[54,2],[54,2],[54,2],[54,2],[43,2],[43,1],[57,2],[24,1],[24,1],[24,1],[24,1],[25,1],[56,3],[55,1],[55,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:
    var deleteToken = new RegExp(DELETE + '.*\n', 'g');
    imports = imports.map(function (import) { return code(import) }).join('\n');
    console.log(classes[0]);
    return imports + '\n\n' + code($$[$0]).replace(deleteToken, '');
  
break;
case 2:this.$ = Array(scope.length).join('\t') + code($$[$0])
break;
case 5:var c = code($$[$0-2]); this.$ = code($$[$0-2]) + (needsSemicolon(c) ? ';' : '') + $$[$0-1] + Array(scope.length).join('\t') + code($$[$0])
break;
case 6:var c = code($$[$0-1]); this.$ = code($$[$0-1]) + (needsSemicolon(c) ? ';' : '') + $$[$0]
break;
case 7: imports.push(yy._Importation({framework: $$[$0]})) 
break;
case 13:this.$ = '\n'
break;
case 14:this.$ = '\n'
break;
case 15:this.$ = ''
break;
case 24: scope.push([]) 
break;
case 25: scope.pop() 
break;
case 26:this.$ = ''
break;
case 27:var c = code($$[$0-1]); this.$ = code($$[$0-1]) + (needsSemicolon(c) ? ';' : '')
break;
case 28:this.$ = 'if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 29:this.$ = code($$[$0-4]) + ' else if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 31:this.$ = code($$[$0-2]) + ' else {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 32: this.$ = yy._Operation({left: $$[$0-2], operator: $$[$0-1], right: $$[$0]}) 
break;
case 33: this.$ = yy._Operation({left: $$[$0-2], operator: $$[$0-1], right: $$[$0]}) 
break;
case 34: this.$ = yy._Assignment({scope: scope, type: $$[$0-4], scalar: true, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 35: this.$ = yy._Assignment({scope: scope, type: $$[$0-3], identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 36: this.$ = yy._Assignment({scope: scope, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 37: this.$ = yy._CGShortcut($$[$0-1]) 
break;
case 38: this.$ = yy._Construction({type: $$[$0-1]}) 
break;
case 39: this.$ = yy._Construction({type: $$[$0-2], message: $$[$0]}) 
break;
case 40: this.$ = yy._Construction({type: $$[$0-2], message: $$[$0]}) 
break;
case 41: this.$ = yy._Invocation({func: $$[$0-3], args: $$[$0-1]}) 
break;
case 42: $$[$0-2].push($$[$0]); this.$ = $$[$0-2] 
break;
case 43: this.$ = [$$[$0]] 
break;
case 44: classes.push(yy._Class()); this.$ = $$[$0] 
break;
case 45: this.$ = yy._Method(merge({memberOf: classes.last(), operator: '-', signature: $$[$0-1], block: $$[$0], indents: scope.length}, $$[$0-2])) 
break;
case 46: this.$ = yy._Method(merge({memberOf: classes.last(), operator: '+', signature: $$[$0-1], block: $$[$0], indents: scope.length}, $$[$0-2])) 
break;
case 47: this.$ = yy._Method({memberOf: classes.last(), operator: '-', signature: $$[$0-1], block: $$[$0], indents: scope.length}) 
break;
case 48: this.$ = yy._Method({memberOf: classes.last(), operator: '+', signature: $$[$0-1], block: $$[$0], indents: scope.length}) 
break;
case 49: $$[$0-2].args.push([yy._MethodArg({arg: $$[$0-1], cast: $$[$0]})]); this.$ = $$[$0-2] 
break;
case 50: this.$ = {args: [yy._MethodArg({arg: $$[$0-1], cast: $$[$0]})]} 
break;
case 51: this.$ = $$[$0-1] 
break;
case 52: this.$ = $$[$0-1] 
break;
case 54: this.$ = yy._Cast({type: $$[$0-1], scalar: true}) 
break;
case 55: this.$ = yy._Cast({type: $$[$0]}) 
break;
case 56: $$[$0-1].scalar = true; this.$ = $$[$0-1]
break;
case 57: this.$ = yy._Cast({type: $$[$0-1].type + ' ' + $$[$0]}) 
break;
case 58: this.$ = yy._Message({target: $$[$0-1], args: $$[$0]}) 
break;
case 60: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 61: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 62: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 63: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 64: $$[$0-1].push($$[$0][0]); this.$ = $$[$0-1] 
break;
case 66: this.$ = [{arg: $$[$0-1], value: $$[$0]}] 
break;
case 71: this.$ = $$[$0] 
break;
case 72: this.$ = yy._Parenthetical($$[$0-1]) 
break;
case 73: this.$ = yy._String($$[$0]) 
break;
case 74: this.$ = yy._Number($$[$0]) 
break;
}
},
table: [{3:1,4:2,5:3,6:4,8:7,9:[1,18],10:[1,22],11:8,12:9,13:5,14:[1,6],18:10,19:11,20:12,21:13,22:14,23:15,24:16,25:17,31:24,32:[1,29],37:27,38:[1,33],39:[1,32],45:[1,19],47:[1,20],50:[1,21],54:23,55:25,56:26,58:[1,28],59:[1,30],60:[1,31]},{1:[3]},{1:[2,1],7:34,15:[1,35],16:[1,36],17:[1,37]},{1:[2,2],15:[2,2],16:[2,2],17:[2,2],29:[2,2],41:[2,2]},{1:[2,3],15:[2,3],16:[2,3],17:[2,3],29:[2,3],41:[2,3]},{1:[2,11],15:[2,11],16:[2,11],17:[2,11],29:[2,11],41:[2,11]},{1:[2,12],15:[2,12],16:[2,12],17:[2,12],29:[2,12],41:[2,12]},{1:[2,8],15:[2,8],16:[2,8],17:[2,8],29:[2,8],41:[2,8]},{1:[2,9],15:[2,9],16:[2,9],17:[2,9],29:[2,9],41:[2,9]},{1:[2,10],15:[2,10],16:[2,10],17:[2,10],29:[2,10],41:[2,10]},{1:[2,16],15:[2,16],16:[2,16],17:[2,16],27:[2,16],29:[2,16],41:[2,16],44:[2,16]},{1:[2,17],15:[2,17],16:[2,17],17:[2,17],27:[2,17],29:[2,17],41:[2,17],44:[2,17]},{1:[2,18],10:[1,38],15:[2,18],16:[2,18],17:[2,18],27:[2,18],29:[2,18],41:[2,18],44:[2,18]},{1:[2,19],15:[2,19],16:[2,19],17:[2,19],27:[2,19],29:[2,19],41:[2,19],44:[2,19]},{1:[2,20],15:[2,20],16:[2,20],17:[2,20],27:[2,20],29:[2,20],34:[1,39],41:[2,20],44:[2,20]},{1:[2,21],15:[2,21],16:[2,21],17:[2,21],27:[2,21],29:[2,21],41:[2,21],44:[2,21]},{1:[2,22],15:[2,22],16:[2,22],17:[2,22],27:[2,22],29:[2,22],34:[1,41],41:[2,22],43:40,44:[2,22],51:[1,43],57:42},{1:[2,23],15:[2,23],16:[2,23],17:[2,23],27:[2,23],29:[2,23],41:[2,23],44:[2,23]},{10:[1,44]},{10:[1,45]},{10:[1,51],39:[1,48],48:46,49:47,51:[1,50],53:49},{47:[1,52]},{1:[2,67],10:[1,54],15:[2,67],16:[2,67],17:[2,67],27:[2,67],29:[2,67],34:[2,67],35:[1,53],36:[1,55],39:[1,56],41:[2,67],42:[1,57],44:[2,67],51:[2,67]},{1:[2,59],10:[2,59],15:[2,59],16:[2,59],17:[2,59],27:[2,59],29:[2,59],41:[2,59],44:[2,59]},{1:[2,30],15:[2,30],16:[2,30],17:[2,30],27:[2,30],29:[2,30],33:[1,58],41:[2,30],44:[2,30]},{1:[2,68],10:[1,59],15:[2,68],16:[2,68],17:[2,68],27:[2,68],29:[2,68],34:[2,68],41:[2,68],44:[2,68],51:[2,68]},{1:[2,69],10:[1,60],15:[2,69],16:[2,69],17:[2,69],27:[2,69],29:[2,69],34:[2,69],41:[2,69],44:[2,69],51:[2,69]},{1:[2,70],10:[2,70],15:[2,70],16:[2,70],17:[2,70],27:[2,70],29:[2,70],34:[2,70],41:[2,70],44:[2,70],51:[2,70]},{1:[2,71],15:[2,71],16:[2,71],17:[2,71],27:[2,71],29:[2,71],41:[2,71],44:[2,71]},{10:[1,22],13:61,18:10,19:11,20:12,21:13,22:14,23:15,24:16,25:17,31:24,32:[1,29],37:27,38:[1,33],39:[1,32],54:23,55:25,56:26,58:[1,28],59:[1,30],60:[1,31]},{1:[2,73],10:[2,73],15:[2,73],16:[2,73],17:[2,73],27:[2,73],29:[2,73],34:[2,73],41:[2,73],44:[2,73],51:[2,73]},{1:[2,74],10:[2,74],15:[2,74],16:[2,74],17:[2,74],27:[2,74],29:[2,74],34:[2,74],41:[2,74],44:[2,74],51:[2,74]},{4:62,5:3,6:4,8:7,9:[1,18],10:[1,22],11:8,12:9,13:5,14:[1,6],18:10,19:11,20:12,21:13,22:14,23:15,24:16,25:17,31:24,32:[1,29],37:27,38:[1,33],39:[1,32],45:[1,19],47:[1,20],50:[1,21],54:23,55:25,56:26,58:[1,28],59:[1,30],60:[1,31]},{39:[1,63]},{1:[2,6],5:65,6:64,8:7,9:[1,18],10:[1,22],11:8,12:9,13:5,14:[1,6],15:[2,6],16:[2,6],17:[2,6],18:10,19:11,20:12,21:13,22:14,23:15,24:16,25:17,29:[2,6],31:24,32:[1,29],37:27,38:[1,33],39:[1,32],41:[2,6],45:[1,19],47:[1,20],50:[1,21],54:23,55:25,56:26,58:[1,28],59:[1,30],60:[1,31]},{1:[2,13],9:[2,13],10:[2,13],14:[2,13],15:[2,13],16:[2,13],17:[2,13],29:[2,13],32:[2,13],38:[2,13],39:[2,13],41:[2,13],45:[2,13],47:[2,13],50:[2,13],58:[2,13],59:[2,13],60:[2,13]},{1:[2,14],9:[2,14],10:[2,14],14:[2,14],15:[2,14],16:[2,14],17:[2,14],29:[2,14],32:[2,14],38:[2,14],39:[2,14],41:[2,14],45:[2,14],47:[2,14],50:[2,14],58:[2,14],59:[2,14],60:[2,14]},{1:[2,15],9:[2,15],10:[2,15],14:[2,15],15:[2,15],16:[2,15],17:[2,15],29:[2,15],32:[2,15],38:[2,15],39:[2,15],41:[2,15],45:[2,15],47:[2,15],50:[2,15],58:[2,15],59:[2,15],60:[2,15]},{1:[2,63],10:[2,63],15:[2,63],16:[2,63],17:[2,63],27:[2,63],29:[2,63],41:[2,63],44:[2,63]},{10:[1,67],24:66,37:27,38:[1,33],39:[1,32],55:68,56:69,59:[1,30],60:[1,31]},{1:[2,58],10:[2,58],15:[2,58],16:[2,58],17:[2,58],27:[2,58],29:[2,58],41:[2,58],44:[2,58],51:[1,43],57:70},{10:[1,67],24:71,37:27,38:[1,33],39:[1,32],55:68,56:69,59:[1,30],60:[1,31]},{1:[2,65],10:[2,65],15:[2,65],16:[2,65],17:[2,65],27:[2,65],29:[2,65],41:[2,65],44:[2,65],51:[2,65]},{10:[1,67],24:72,37:27,38:[1,33],39:[1,32],55:68,56:69,59:[1,30],60:[1,31]},{1:[2,7],15:[2,7],16:[2,7],17:[2,7],29:[2,7],41:[2,7]},{46:[1,73]},{49:74,51:[1,50]},{26:77,27:[1,78],30:75,51:[1,76]},{10:[1,51],52:79,53:80},{27:[2,53],51:[2,53]},{10:[1,51],39:[1,48],48:81,53:49},{27:[2,55],35:[1,82],41:[2,55],51:[2,55]},{10:[1,51],39:[1,48],48:83,49:84,51:[1,50],53:49},{10:[1,85]},{1:[2,60],10:[2,60],15:[2,60],16:[2,60],17:[2,60],27:[2,60],29:[2,60],36:[1,86],41:[2,60],44:[2,60]},{10:[1,22],13:87,18:10,19:11,20:12,21:13,22:14,23:15,24:16,25:17,31:24,32:[1,29],37:27,38:[1,33],39:[1,32],54:23,55:25,56:26,58:[1,28],59:[1,30],60:[1,31]},{10:[1,22],13:89,18:10,19:11,20:12,21:13,22:14,23:15,24:16,25:17,31:24,32:[1,29],37:27,38:[1,33],39:[1,32],40:88,54:23,55:25,56:26,58:[1,28],59:[1,30],60:[1,31]},{1:[2,38],10:[1,91],15:[2,38],16:[2,38],17:[2,38],27:[2,38],29:[2,38],41:[2,38],43:90,44:[2,38],51:[1,43],57:42},{26:77,27:[1,78],30:92,32:[1,93]},{1:[2,61],10:[2,61],15:[2,61],16:[2,61],17:[2,61],27:[2,61],29:[2,61],41:[2,61],44:[2,61]},{1:[2,62],10:[2,62],15:[2,62],16:[2,62],17:[2,62],27:[2,62],29:[2,62],41:[2,62],44:[2,62]},{26:77,27:[1,78],30:94},{7:34,15:[1,35],16:[1,36],17:[1,37],41:[1,95]},{10:[1,22],13:89,18:10,19:11,20:12,21:13,22:14,23:15,24:16,25:17,31:24,32:[1,29],37:27,38:[1,33],39:[1,32],40:96,54:23,55:25,56:26,58:[1,28],59:[1,30],60:[1,31]},{1:[2,4],15:[2,4],16:[2,4],17:[2,4],29:[2,4],41:[2,4]},{1:[2,5],15:[2,5],16:[2,5],17:[2,5],29:[2,5],41:[2,5]},{1:[2,32],15:[2,32],16:[2,32],17:[2,32],27:[2,32],29:[2,32],34:[2,32],41:[2,32],44:[2,32]},{1:[2,67],10:[2,67],15:[2,67],16:[2,67],17:[2,67],27:[2,67],29:[2,67],34:[2,67],41:[2,67],44:[2,67],51:[2,67]},{1:[2,68],10:[2,68],15:[2,68],16:[2,68],17:[2,68],27:[2,68],29:[2,68],34:[2,68],41:[2,68],44:[2,68],51:[2,68]},{1:[2,69],10:[2,69],15:[2,69],16:[2,69],17:[2,69],27:[2,69],29:[2,69],34:[2,69],41:[2,69],44:[2,69],51:[2,69]},{1:[2,64],10:[2,64],15:[2,64],16:[2,64],17:[2,64],27:[2,64],29:[2,64],41:[2,64],44:[2,64],51:[2,64]},{1:[2,33],15:[2,33],16:[2,33],17:[2,33],27:[2,33],29:[2,33],34:[2,33],41:[2,33],44:[2,33]},{1:[2,66],10:[2,66],15:[2,66],16:[2,66],17:[2,66],27:[2,66],29:[2,66],41:[2,66],44:[2,66],51:[2,66]},{10:[1,97]},{26:77,27:[1,78],30:98,51:[1,76]},{1:[2,47],15:[2,47],16:[2,47],17:[2,47],29:[2,47],41:[2,47]},{10:[1,51],39:[1,48],48:99,53:49},{4:101,5:3,6:4,8:7,9:[1,18],10:[1,22],11:8,12:9,13:5,14:[1,6],18:10,19:11,20:12,21:13,22:14,23:15,24:16,25:17,28:100,29:[1,102],31:24,32:[1,29],37:27,38:[1,33],39:[1,32],45:[1,19],47:[1,20],50:[1,21],54:23,55:25,56:26,58:[1,28],59:[1,30],60:[1,31]},{9:[2,24],10:[2,24],14:[2,24],29:[2,24],32:[2,24],38:[2,24],39:[2,24],45:[2,24],47:[2,24],50:[2,24],58:[2,24],59:[2,24],60:[2,24]},{10:[1,105],35:[1,104],41:[1,103]},{41:[1,106]},{27:[2,50],51:[2,50]},{27:[2,54],41:[2,54],51:[2,54]},{49:107,51:[1,50]},{26:77,27:[1,78],30:108,51:[1,76]},{36:[1,109]},{10:[1,22],13:110,18:10,19:11,20:12,21:13,22:14,23:15,24:16,25:17,31:24,32:[1,29],37:27,38:[1,33],39:[1,32],54:23,55:25,56:26,58:[1,28],59:[1,30],60:[1,31]},{1:[2,36],15:[2,36],16:[2,36],17:[2,36],27:[2,36],29:[2,36],41:[2,36],44:[2,36]},{41:[1,111],44:[1,112]},{41:[2,43],44:[2,43]},{1:[2,39],15:[2,39],16:[2,39],17:[2,39],27:[2,39],29:[2,39],41:[2,39],44:[2,39],51:[1,43],57:70},{1:[2,40],15:[2,40],16:[2,40],17:[2,40],27:[2,40],29:[2,40],41:[2,40],44:[2,40]},{1:[2,31],15:[2,31],16:[2,31],17:[2,31],27:[2,31],29:[2,31],41:[2,31],44:[2,31]},{10:[1,22],13:113,18:10,19:11,20:12,21:13,22:14,23:15,24:16,25:17,31:24,32:[1,29],37:27,38:[1,33],39:[1,32],54:23,55:25,56:26,58:[1,28],59:[1,30],60:[1,31]},{1:[2,28],15:[2,28],16:[2,28],17:[2,28],27:[2,28],29:[2,28],33:[2,28],41:[2,28],44:[2,28]},{1:[2,72],10:[2,72],15:[2,72],16:[2,72],17:[2,72],27:[2,72],29:[2,72],34:[2,72],41:[2,72],44:[2,72],51:[2,72]},{41:[1,114],44:[1,112]},{26:77,27:[1,78],30:115},{1:[2,45],15:[2,45],16:[2,45],17:[2,45],29:[2,45],41:[2,45]},{27:[2,49],51:[2,49]},{1:[2,26],15:[2,26],16:[2,26],17:[2,26],27:[2,26],29:[2,26],33:[2,26],41:[2,26],44:[2,26]},{7:34,15:[1,35],16:[1,36],17:[1,37],28:116,29:[1,102]},{1:[2,25],15:[2,25],16:[2,25],17:[2,25],27:[2,25],29:[2,25],33:[2,25],41:[2,25],44:[2,25]},{27:[2,51],51:[2,51]},{10:[2,56],35:[2,56],41:[2,56]},{10:[2,57],35:[2,57],41:[2,57]},{27:[2,52],51:[2,52]},{26:77,27:[1,78],30:117,51:[1,76]},{1:[2,48],15:[2,48],16:[2,48],17:[2,48],29:[2,48],41:[2,48]},{10:[1,22],13:118,18:10,19:11,20:12,21:13,22:14,23:15,24:16,25:17,31:24,32:[1,29],37:27,38:[1,33],39:[1,32],54:23,55:25,56:26,58:[1,28],59:[1,30],60:[1,31]},{1:[2,35],15:[2,35],16:[2,35],17:[2,35],27:[2,35],29:[2,35],41:[2,35],44:[2,35]},{1:[2,41],15:[2,41],16:[2,41],17:[2,41],27:[2,41],29:[2,41],41:[2,41],44:[2,41]},{10:[1,22],13:119,18:10,19:11,20:12,21:13,22:14,23:15,24:16,25:17,31:24,32:[1,29],37:27,38:[1,33],39:[1,32],54:23,55:25,56:26,58:[1,28],59:[1,30],60:[1,31]},{26:77,27:[1,78],30:120},{1:[2,37],10:[2,37],15:[2,37],16:[2,37],17:[2,37],27:[2,37],29:[2,37],34:[2,37],41:[2,37],44:[2,37],51:[2,37]},{1:[2,44],15:[2,44],16:[2,44],17:[2,44],29:[2,44],41:[2,44]},{1:[2,27],15:[2,27],16:[2,27],17:[2,27],27:[2,27],29:[2,27],33:[2,27],41:[2,27],44:[2,27]},{1:[2,46],15:[2,46],16:[2,46],17:[2,46],29:[2,46],41:[2,46]},{1:[2,34],15:[2,34],16:[2,34],17:[2,34],27:[2,34],29:[2,34],41:[2,34],44:[2,34]},{41:[2,42],44:[2,42]},{1:[2,29],15:[2,29],16:[2,29],17:[2,29],27:[2,29],29:[2,29],33:[2,29],41:[2,29],44:[2,29]}],
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