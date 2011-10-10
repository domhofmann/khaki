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
  
  merge = function (obj1, obj2) {
      var obj3 = {};
      for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
      for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
      return obj3;
  }
  
  needsSemicolon = function (string) {
    if (!string) return null;
    return string.charAt(string.length - 1) != "}";
  }
  
  var DELETE = '%%%DELETE%%%';
  

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"body":4,"line":5,"terminator":6,"importation":7,"import":8,"WORD":9,"expression":10,"statement":11,"NEWLINE":12,";":13,"EOF":14,"assignment":15,"invocation":16,"message":17,"construction":18,"operation":19,"If":20,"method_def":21,"value":22,"fallback":23,"indent":24,"INDENT":25,"dedent":26,"DEDENT":27,"block":28,"if_block":29,"if":30,"else":31,"OPERATOR":32,"~":33,"ASSIGNMENT_OPERATOR":34,"cg_shortcut":35,"@":36,"(":37,"list":38,")":39,"!":40,"selector_args":41,",":42,"def":43,"casts":44,"method_arg":45,"classdef":46,"SELECTOR_ARG":47,"cast":48,"simple_cast":49,"simple_message":50,"literal":51,"parenthetical":52,"selector_arg":53,"FALLBACK":54,"STRING_LITERAL":55,"NUMBER":56,"$accept":0,"$end":1},
terminals_: {2:"error",8:"import",9:"WORD",11:"statement",12:"NEWLINE",13:";",14:"EOF",25:"INDENT",27:"DEDENT",30:"if",31:"else",32:"OPERATOR",33:"~",34:"ASSIGNMENT_OPERATOR",36:"@",37:"(",39:")",40:"!",42:",",43:"def",46:"classdef",47:"SELECTOR_ARG",54:"FALLBACK",55:"STRING_LITERAL",56:"NUMBER"},
productions_: [0,[3,1],[4,1],[4,3],[4,2],[7,2],[5,1],[5,1],[5,1],[6,1],[6,1],[6,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[24,1],[26,1],[28,2],[28,3],[29,3],[29,5],[20,1],[20,3],[19,3],[19,3],[15,5],[15,4],[15,3],[35,4],[18,2],[18,3],[18,3],[16,4],[38,3],[38,1],[21,4],[21,4],[21,3],[21,3],[45,3],[45,2],[44,3],[44,3],[44,1],[49,2],[49,1],[48,2],[48,2],[17,2],[17,1],[50,2],[50,2],[50,2],[50,2],[41,2],[41,1],[53,2],[22,1],[22,1],[22,1],[22,1],[23,1],[52,3],[51,1],[51,1]],
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
case 21: scope.push([]) 
break;
case 22: scope.pop() 
break;
case 23:this.$ = ''
break;
case 24:var c = code($$[$0-1]); this.$ = code($$[$0-1]) + (needsSemicolon(c) ? ';' : '')
break;
case 25:this.$ = 'if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 26:this.$ = code($$[$0-4]) + ' else if (' + code($$[$0-1]) + ') {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 28:this.$ = code($$[$0-2]) + ' else {\n' + code($$[$0]) + '\n' + Array(scope.length).join('\t') + '}'
break;
case 29: this.$ = yy._Operation({left: $$[$0-2], operator: $$[$0-1], right: $$[$0]}) 
break;
case 30: this.$ = yy._Operation({left: $$[$0-2], operator: $$[$0-1], right: $$[$0]}) 
break;
case 31: this.$ = yy._Assignment({scope: scope, type: $$[$0-4], scalar: true, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 32: this.$ = yy._Assignment({scope: scope, type: $$[$0-3], identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 33: this.$ = yy._Assignment({scope: scope, identifier: $$[$0-2], operator: $$[$0-1], expression: $$[$0]}) 
break;
case 34: this.$ = yy._CGShortcut($$[$0-1]) 
break;
case 35: this.$ = yy._Construction({type: $$[$0-1]}) 
break;
case 36: this.$ = yy._Construction({type: $$[$0-2], message: $$[$0]}) 
break;
case 37: this.$ = yy._Construction({type: $$[$0-2], message: $$[$0]}) 
break;
case 38: this.$ = yy._Invocation({func: $$[$0-3], args: $$[$0-1]}) 
break;
case 39: $$[$0-2].push($$[$0]); this.$ = $$[$0-2] 
break;
case 40: this.$ = [$$[$0]] 
break;
case 41: this.$ = yy._Method(merge({operator: '-', signature: $$[$0-1], block: $$[$0]}, $$[$0-2])) 
break;
case 42: this.$ = yy._Method(merge({operator: '+', signature: $$[$0-1], block: $$[$0]}, $$[$0-2])) 
break;
case 43: this.$ = yy._Method({operator: '-', signature: $$[$0-1], block: $$[$0]}) 
break;
case 44: this.$ = yy._Method({operator: '+', signature: $$[$0-1], block: $$[$0]}) 
break;
case 45: $$[$0-2].args.push([yy._MethodArg({arg: $$[$0-1], cast: $$[$0]})]); this.$ = $$[$0-2] 
break;
case 46: this.$ = {args: [yy._MethodArg({arg: $$[$0-1], cast: $$[$0]})]} 
break;
case 47: this.$ = $$[$0-1] 
break;
case 48: this.$ = $$[$0-1] 
break;
case 50: this.$ = yy._Cast({type: $$[$0-1], scalar: true}) 
break;
case 51: this.$ = yy._Cast({type: $$[$0]}) 
break;
case 52: $$[$0-1].scalar = true; this.$ = $$[$0-1]
break;
case 53: this.$ = yy._Cast({type: $$[$0-1].type + ' ' + $$[$0]}) 
break;
case 54: this.$ = yy._Message({target: $$[$0-1], args: $$[$0]}) 
break;
case 56: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 57: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 58: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 59: this.$ = yy._Message({target: $$[$0-1], message: $$[$0]}) 
break;
case 60: $$[$0-1].push($$[$0][0]); this.$ = $$[$0-1] 
break;
case 62: this.$ = [{arg: $$[$0-1], value: $$[$0]}] 
break;
case 67: this.$ = $$[$0] 
break;
case 68: this.$ = yy._Parenthetical($$[$0-1]) 
break;
case 69: this.$ = yy._String($$[$0]) 
break;
case 70: this.$ = yy._Number($$[$0]) 
break;
}
},
table: [{3:1,4:2,5:3,7:6,8:[1,16],9:[1,17],10:4,11:[1,5],15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,23:15,29:19,30:[1,26],35:24,36:[1,30],37:[1,29],43:[1,20],46:[1,21],50:18,51:22,52:23,54:[1,25],55:[1,27],56:[1,28]},{1:[3]},{1:[2,1],6:31,12:[1,32],13:[1,33],14:[1,34]},{1:[2,2],12:[2,2],13:[2,2],14:[2,2],27:[2,2],39:[2,2]},{1:[2,6],12:[2,6],13:[2,6],14:[2,6],27:[2,6],39:[2,6]},{1:[2,7],12:[2,7],13:[2,7],14:[2,7],27:[2,7],39:[2,7]},{1:[2,8],12:[2,8],13:[2,8],14:[2,8],27:[2,8],39:[2,8]},{1:[2,12],12:[2,12],13:[2,12],14:[2,12],25:[2,12],27:[2,12],39:[2,12],42:[2,12]},{1:[2,13],12:[2,13],13:[2,13],14:[2,13],25:[2,13],27:[2,13],39:[2,13],42:[2,13]},{1:[2,14],9:[1,35],12:[2,14],13:[2,14],14:[2,14],25:[2,14],27:[2,14],39:[2,14],42:[2,14]},{1:[2,15],12:[2,15],13:[2,15],14:[2,15],25:[2,15],27:[2,15],39:[2,15],42:[2,15]},{1:[2,16],12:[2,16],13:[2,16],14:[2,16],25:[2,16],27:[2,16],32:[1,36],39:[2,16],42:[2,16]},{1:[2,17],12:[2,17],13:[2,17],14:[2,17],25:[2,17],27:[2,17],39:[2,17],42:[2,17]},{1:[2,18],12:[2,18],13:[2,18],14:[2,18],25:[2,18],27:[2,18],39:[2,18],42:[2,18]},{1:[2,19],12:[2,19],13:[2,19],14:[2,19],25:[2,19],27:[2,19],32:[1,38],39:[2,19],41:37,42:[2,19],47:[1,40],53:39},{1:[2,20],12:[2,20],13:[2,20],14:[2,20],25:[2,20],27:[2,20],39:[2,20],42:[2,20]},{9:[1,41]},{1:[2,63],9:[1,43],12:[2,63],13:[2,63],14:[2,63],25:[2,63],27:[2,63],32:[2,63],33:[1,42],34:[1,44],37:[1,45],39:[2,63],40:[1,46],42:[2,63],47:[2,63]},{1:[2,55],9:[2,55],12:[2,55],13:[2,55],14:[2,55],25:[2,55],27:[2,55],39:[2,55],42:[2,55]},{1:[2,27],12:[2,27],13:[2,27],14:[2,27],25:[2,27],27:[2,27],31:[1,47],39:[2,27],42:[2,27]},{9:[1,53],37:[1,50],44:48,45:49,47:[1,52],49:51},{9:[1,53],37:[1,50],44:54,45:55,47:[1,52],49:51},{1:[2,64],9:[1,56],12:[2,64],13:[2,64],14:[2,64],25:[2,64],27:[2,64],32:[2,64],39:[2,64],42:[2,64],47:[2,64]},{1:[2,65],9:[1,57],12:[2,65],13:[2,65],14:[2,65],25:[2,65],27:[2,65],32:[2,65],39:[2,65],42:[2,65],47:[2,65]},{1:[2,66],9:[2,66],12:[2,66],13:[2,66],14:[2,66],25:[2,66],27:[2,66],32:[2,66],39:[2,66],42:[2,66],47:[2,66]},{1:[2,67],12:[2,67],13:[2,67],14:[2,67],25:[2,67],27:[2,67],39:[2,67],42:[2,67]},{9:[1,17],10:58,15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,23:15,29:19,30:[1,26],35:24,36:[1,30],37:[1,29],43:[1,20],46:[1,21],50:18,51:22,52:23,54:[1,25],55:[1,27],56:[1,28]},{1:[2,69],9:[2,69],12:[2,69],13:[2,69],14:[2,69],25:[2,69],27:[2,69],32:[2,69],39:[2,69],42:[2,69],47:[2,69]},{1:[2,70],9:[2,70],12:[2,70],13:[2,70],14:[2,70],25:[2,70],27:[2,70],32:[2,70],39:[2,70],42:[2,70],47:[2,70]},{4:59,5:3,7:6,8:[1,16],9:[1,17],10:4,11:[1,5],15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,23:15,29:19,30:[1,26],35:24,36:[1,30],37:[1,29],43:[1,20],46:[1,21],50:18,51:22,52:23,54:[1,25],55:[1,27],56:[1,28]},{37:[1,60]},{1:[2,4],5:61,7:6,8:[1,16],9:[1,17],10:4,11:[1,5],12:[2,4],13:[2,4],14:[2,4],15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,23:15,27:[2,4],29:19,30:[1,26],35:24,36:[1,30],37:[1,29],39:[2,4],43:[1,20],46:[1,21],50:18,51:22,52:23,54:[1,25],55:[1,27],56:[1,28]},{1:[2,9],8:[2,9],9:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],27:[2,9],30:[2,9],36:[2,9],37:[2,9],39:[2,9],43:[2,9],46:[2,9],54:[2,9],55:[2,9],56:[2,9]},{1:[2,10],8:[2,10],9:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],27:[2,10],30:[2,10],36:[2,10],37:[2,10],39:[2,10],43:[2,10],46:[2,10],54:[2,10],55:[2,10],56:[2,10]},{1:[2,11],8:[2,11],9:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],27:[2,11],30:[2,11],36:[2,11],37:[2,11],39:[2,11],43:[2,11],46:[2,11],54:[2,11],55:[2,11],56:[2,11]},{1:[2,59],9:[2,59],12:[2,59],13:[2,59],14:[2,59],25:[2,59],27:[2,59],39:[2,59],42:[2,59]},{9:[1,63],22:62,35:24,36:[1,30],37:[1,29],51:64,52:65,55:[1,27],56:[1,28]},{1:[2,54],9:[2,54],12:[2,54],13:[2,54],14:[2,54],25:[2,54],27:[2,54],39:[2,54],42:[2,54],47:[1,40],53:66},{9:[1,63],22:67,35:24,36:[1,30],37:[1,29],51:64,52:65,55:[1,27],56:[1,28]},{1:[2,61],9:[2,61],12:[2,61],13:[2,61],14:[2,61],25:[2,61],27:[2,61],39:[2,61],42:[2,61],47:[2,61]},{9:[1,63],22:68,35:24,36:[1,30],37:[1,29],51:64,52:65,55:[1,27],56:[1,28]},{1:[2,5],12:[2,5],13:[2,5],14:[2,5],27:[2,5],39:[2,5]},{9:[1,69]},{1:[2,56],9:[2,56],12:[2,56],13:[2,56],14:[2,56],25:[2,56],27:[2,56],34:[1,70],39:[2,56],42:[2,56]},{9:[1,17],10:71,15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,23:15,29:19,30:[1,26],35:24,36:[1,30],37:[1,29],43:[1,20],46:[1,21],50:18,51:22,52:23,54:[1,25],55:[1,27],56:[1,28]},{9:[1,17],10:73,15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,23:15,29:19,30:[1,26],35:24,36:[1,30],37:[1,29],38:72,43:[1,20],46:[1,21],50:18,51:22,52:23,54:[1,25],55:[1,27],56:[1,28]},{1:[2,35],9:[1,75],12:[2,35],13:[2,35],14:[2,35],25:[2,35],27:[2,35],39:[2,35],41:74,42:[2,35],47:[1,40],53:39},{24:78,25:[1,79],28:76,30:[1,77]},{45:80,47:[1,52]},{24:78,25:[1,79],28:81,47:[1,82]},{9:[1,53],48:83,49:84},{25:[2,49],47:[2,49]},{9:[1,53],37:[1,50],44:85,49:51},{25:[2,51],33:[1,86],39:[2,51],47:[2,51]},{45:87,47:[1,52]},{24:78,25:[1,79],28:88,47:[1,82]},{1:[2,57],9:[2,57],12:[2,57],13:[2,57],14:[2,57],25:[2,57],27:[2,57],39:[2,57],42:[2,57]},{1:[2,58],9:[2,58],12:[2,58],13:[2,58],14:[2,58],25:[2,58],27:[2,58],39:[2,58],42:[2,58]},{24:78,25:[1,79],28:89},{6:31,12:[1,32],13:[1,33],14:[1,34],39:[1,90]},{9:[1,17],10:73,15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,23:15,29:19,30:[1,26],35:24,36:[1,30],37:[1,29],38:91,43:[1,20],46:[1,21],50:18,51:22,52:23,54:[1,25],55:[1,27],56:[1,28]},{1:[2,3],12:[2,3],13:[2,3],14:[2,3],27:[2,3],39:[2,3]},{1:[2,29],12:[2,29],13:[2,29],14:[2,29],25:[2,29],27:[2,29],32:[2,29],39:[2,29],42:[2,29]},{1:[2,63],9:[2,63],12:[2,63],13:[2,63],14:[2,63],25:[2,63],27:[2,63],32:[2,63],39:[2,63],42:[2,63],47:[2,63]},{1:[2,64],9:[2,64],12:[2,64],13:[2,64],14:[2,64],25:[2,64],27:[2,64],32:[2,64],39:[2,64],42:[2,64],47:[2,64]},{1:[2,65],9:[2,65],12:[2,65],13:[2,65],14:[2,65],25:[2,65],27:[2,65],32:[2,65],39:[2,65],42:[2,65],47:[2,65]},{1:[2,60],9:[2,60],12:[2,60],13:[2,60],14:[2,60],25:[2,60],27:[2,60],39:[2,60],42:[2,60],47:[2,60]},{1:[2,30],12:[2,30],13:[2,30],14:[2,30],25:[2,30],27:[2,30],32:[2,30],39:[2,30],42:[2,30]},{1:[2,62],9:[2,62],12:[2,62],13:[2,62],14:[2,62],25:[2,62],27:[2,62],39:[2,62],42:[2,62],47:[2,62]},{34:[1,92]},{9:[1,17],10:93,15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,23:15,29:19,30:[1,26],35:24,36:[1,30],37:[1,29],43:[1,20],46:[1,21],50:18,51:22,52:23,54:[1,25],55:[1,27],56:[1,28]},{1:[2,33],12:[2,33],13:[2,33],14:[2,33],25:[2,33],27:[2,33],39:[2,33],42:[2,33]},{39:[1,94],42:[1,95]},{39:[2,40],42:[2,40]},{1:[2,36],12:[2,36],13:[2,36],14:[2,36],25:[2,36],27:[2,36],39:[2,36],42:[2,36],47:[1,40],53:66},{1:[2,37],12:[2,37],13:[2,37],14:[2,37],25:[2,37],27:[2,37],39:[2,37],42:[2,37]},{1:[2,28],12:[2,28],13:[2,28],14:[2,28],25:[2,28],27:[2,28],39:[2,28],42:[2,28]},{9:[1,17],10:96,15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,23:15,29:19,30:[1,26],35:24,36:[1,30],37:[1,29],43:[1,20],46:[1,21],50:18,51:22,52:23,54:[1,25],55:[1,27],56:[1,28]},{4:98,5:3,7:6,8:[1,16],9:[1,17],10:4,11:[1,5],15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,23:15,26:97,27:[1,99],29:19,30:[1,26],35:24,36:[1,30],37:[1,29],43:[1,20],46:[1,21],50:18,51:22,52:23,54:[1,25],55:[1,27],56:[1,28]},{8:[2,21],9:[2,21],11:[2,21],27:[2,21],30:[2,21],36:[2,21],37:[2,21],43:[2,21],46:[2,21],54:[2,21],55:[2,21],56:[2,21]},{24:78,25:[1,79],28:100,47:[1,82]},{1:[2,43],12:[2,43],13:[2,43],14:[2,43],25:[2,43],27:[2,43],39:[2,43],42:[2,43]},{9:[1,53],37:[1,50],44:101,49:51},{9:[1,104],33:[1,103],39:[1,102]},{39:[1,105]},{25:[2,46],47:[2,46]},{25:[2,50],39:[2,50],47:[2,50]},{24:78,25:[1,79],28:106,47:[1,82]},{1:[2,44],12:[2,44],13:[2,44],14:[2,44],25:[2,44],27:[2,44],39:[2,44],42:[2,44]},{1:[2,25],12:[2,25],13:[2,25],14:[2,25],25:[2,25],27:[2,25],31:[2,25],39:[2,25],42:[2,25]},{1:[2,68],9:[2,68],12:[2,68],13:[2,68],14:[2,68],25:[2,68],27:[2,68],32:[2,68],39:[2,68],42:[2,68],47:[2,68]},{39:[1,107],42:[1,95]},{9:[1,17],10:108,15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,23:15,29:19,30:[1,26],35:24,36:[1,30],37:[1,29],43:[1,20],46:[1,21],50:18,51:22,52:23,54:[1,25],55:[1,27],56:[1,28]},{1:[2,32],12:[2,32],13:[2,32],14:[2,32],25:[2,32],27:[2,32],39:[2,32],42:[2,32]},{1:[2,38],12:[2,38],13:[2,38],14:[2,38],25:[2,38],27:[2,38],39:[2,38],42:[2,38]},{9:[1,17],10:109,15:7,16:8,17:9,18:10,19:11,20:12,21:13,22:14,23:15,29:19,30:[1,26],35:24,36:[1,30],37:[1,29],43:[1,20],46:[1,21],50:18,51:22,52:23,54:[1,25],55:[1,27],56:[1,28]},{24:78,25:[1,79],28:110},{1:[2,23],12:[2,23],13:[2,23],14:[2,23],25:[2,23],27:[2,23],31:[2,23],39:[2,23],42:[2,23]},{6:31,12:[1,32],13:[1,33],14:[1,34],26:111,27:[1,99]},{1:[2,22],12:[2,22],13:[2,22],14:[2,22],25:[2,22],27:[2,22],31:[2,22],39:[2,22],42:[2,22]},{1:[2,41],12:[2,41],13:[2,41],14:[2,41],25:[2,41],27:[2,41],39:[2,41],42:[2,41]},{25:[2,45],47:[2,45]},{25:[2,47],47:[2,47]},{9:[2,52],33:[2,52],39:[2,52]},{9:[2,53],33:[2,53],39:[2,53]},{25:[2,48],47:[2,48]},{1:[2,42],12:[2,42],13:[2,42],14:[2,42],25:[2,42],27:[2,42],39:[2,42],42:[2,42]},{1:[2,34],9:[2,34],12:[2,34],13:[2,34],14:[2,34],25:[2,34],27:[2,34],32:[2,34],39:[2,34],42:[2,34],47:[2,34]},{1:[2,31],12:[2,31],13:[2,31],14:[2,31],25:[2,31],27:[2,31],39:[2,31],42:[2,31]},{39:[2,39],42:[2,39]},{1:[2,26],12:[2,26],13:[2,26],14:[2,26],25:[2,26],27:[2,26],31:[2,26],39:[2,26],42:[2,26]},{1:[2,24],12:[2,24],13:[2,24],14:[2,24],25:[2,24],27:[2,24],31:[2,24],39:[2,24],42:[2,24]}],
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