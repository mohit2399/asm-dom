
var Module = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(Module) {
  Module = Module || {};

var d;d||(d=typeof Module !== 'undefined' ? Module : {});var n={},q;for(q in d)d.hasOwnProperty(q)&&(n[q]=d[q]);d.arguments=[];d.thisProgram="./this.program";d.quit=function(a,b){throw b;};d.preRun=[];d.postRun=[];var aa="";function ba(a){return d.locateFile?d.locateFile(a,aa):aa+a}aa=__dirname+"/";var ca,da;d.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};
d.readBinary=function(a){a=d.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(d.thisProgram=process.argv[1].replace(/\\/g,"/"));d.arguments=process.argv.slice(2);process.on("uncaughtException",function(a){if(!(a instanceof r))throw a;});process.on("unhandledRejection",function(){process.exit(1)});d.quit=function(a){process.exit(a)};d.inspect=function(){return"[Emscripten Module object]"};
var ea=d.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),t=d.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ea);for(q in n)n.hasOwnProperty(q)&&(d[q]=n[q]);n=void 0;function fa(a){var b;b||(b=16);return Math.ceil(a/b)*b}var ha={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}},ia=0;function assert(a,b){a||v("Assertion failed: "+b)}
function ka(a){var b;if(0===b||!a)return"";for(var c=0,e,f=0;;){e=w[a+f>>0];c|=e;if(0==e&&!b)break;f++;if(b&&f==b)break}b||(b=f);e="";if(128>c){for(;0<b;)c=String.fromCharCode.apply(String,w.subarray(a,a+Math.min(b,1024))),e=e?e+c:c,a+=1024,b-=1024;return e}return la(a)}var ma="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function na(a,b){for(var c=b;a[c];)++c;if(16<c-b&&a.subarray&&ma)return ma.decode(a.subarray(b,c));for(c="";;){var e=a[b++];if(!e)return c;if(e&128){var f=a[b++]&63;if(192==(e&224))c+=String.fromCharCode((e&31)<<6|f);else{var g=a[b++]&63;if(224==(e&240))e=(e&15)<<12|f<<6|g;else{var k=a[b++]&63;if(240==(e&248))e=(e&7)<<18|f<<12|g<<6|k;else{var h=a[b++]&63;if(248==(e&252))e=(e&3)<<24|f<<18|g<<12|k<<6|h;else{var m=a[b++]&63;e=(e&1)<<30|f<<24|g<<18|k<<12|h<<6|m}}}65536>e?c+=String.fromCharCode(e):(e-=
65536,c+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else c+=String.fromCharCode(e)}}function la(a){return na(w,a)}
function oa(a,b,c,e){if(0<e){e=c+e-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var k=a.charCodeAt(++f);g=65536+((g&1023)<<10)|k&1023}if(127>=g){if(c>=e)break;b[c++]=g}else{if(2047>=g){if(c+1>=e)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=e)break;b[c++]=224|g>>12}else{if(2097151>=g){if(c+3>=e)break;b[c++]=240|g>>18}else{if(67108863>=g){if(c+4>=e)break;b[c++]=248|g>>24}else{if(c+5>=e)break;b[c++]=252|g>>30;b[c++]=128|g>>24&63}b[c++]=128|g>>18&63}b[c++]=128|g>>12&63}b[c++]=
128|g>>6&63}b[c++]=128|g&63}}b[c]=0}}function pa(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:2097151>=e?b+4:67108863>=e?b+5:b+6}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function qa(a){var b=pa(a)+1,c=ra(b);oa(a,x,c,b);return c}function sa(a,b){0<a%b&&(a+=b-a%b);return a}var buffer,x,w,ta,ua,y,A,va,wa;
function xa(){d.HEAP8=x=new Int8Array(buffer);d.HEAP16=ta=new Int16Array(buffer);d.HEAP32=y=new Int32Array(buffer);d.HEAPU8=w=new Uint8Array(buffer);d.HEAPU16=ua=new Uint16Array(buffer);d.HEAPU32=A=new Uint32Array(buffer);d.HEAPF32=va=new Float32Array(buffer);d.HEAPF64=wa=new Float64Array(buffer)}var ya,B,za,Aa,Ba,Ca,C;ya=B=za=Aa=Ba=Ca=C=0;
d.reallocBuffer||(d.reallocBuffer=function(a){try{if(ArrayBuffer.g)var b=ArrayBuffer.g(buffer,a);else{var c=x;b=new ArrayBuffer(a);(new Int8Array(b)).set(c)}}catch(e){return!1}return Da(b)?b:!1});var Ea;try{Ea=Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get),Ea(new ArrayBuffer(4))}catch(a){Ea=function(b){return b.byteLength}}var Fa=d.TOTAL_STACK||5242880,D=d.TOTAL_MEMORY||16777216;
D<Fa&&t("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+D+"! (TOTAL_STACK="+Fa+")");d.buffer?buffer=d.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(d.wasmMemory=new WebAssembly.Memory({initial:D/65536}),buffer=d.wasmMemory.buffer):buffer=new ArrayBuffer(D),d.buffer=buffer);xa();
function E(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.C;"number"===typeof c?void 0===b.H?d.dynCall_v(c):d.dynCall_vi(c,b.H):c(void 0===b.H?null:b.H)}}}var Ga=[],Ha=[],Ia=[],Ja=[],Ka=[],La=!1;function Ma(){var a=d.preRun.shift();Ga.unshift(a)}var F=0,Na=null,G=null;d.preloadedImages={};d.preloadedAudios={};
function Oa(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(){return new Promise(function(a){a:{try{if(d.wasmBinary){var b=new Uint8Array(d.wasmBinary);break a}if(d.readBinary){b=d.readBinary(e);break a}throw"both async and sync fetching of the wasm failed";}catch(u){v(u)}b=void 0}a(b)})}function b(b){function c(a){k=a.exports;if(k.memory){a=k.memory;var b=d.buffer;a.byteLength<b.byteLength&&t("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");b=new Int8Array(b);(new Int8Array(a)).set(b);
d.buffer=buffer=a;xa()}d.asm=k;d.usingWasm=!0;F--;d.monitorRunDependencies&&d.monitorRunDependencies(F);0==F&&(null!==Na&&(clearInterval(Na),Na=null),G&&(a=G,G=null,a()))}function f(a){c(a.instance)}function h(b){a().then(function(a){return WebAssembly.instantiate(a,g)}).then(b).catch(function(a){t("failed to asynchronously prepare wasm: "+a);v(a)})}if("object"!==typeof WebAssembly)return t("no native wasm support detected"),!1;if(!(d.wasmMemory instanceof WebAssembly.Memory))return t("no native wasm Memory in use"),
!1;b.memory=d.wasmMemory;g.global={NaN:NaN,Infinity:Infinity};g["global.Math"]=Math;g.env=b;F++;d.monitorRunDependencies&&d.monitorRunDependencies(F);if(d.instantiateWasm)try{return d.instantiateWasm(g,c)}catch(z){return t("Module.instantiateWasm callback failed with error: "+z),!1}d.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Oa(e)||"function"!==typeof fetch?h(f):WebAssembly.instantiateStreaming(fetch(e,{credentials:"same-origin"}),g).then(f).catch(function(a){t("wasm streaming compile failed: "+
a);t("falling back to ArrayBuffer instantiation");h(f)});return{}}var c="asm-dom.wast",e="asm-dom.wasm",f="asm-dom.temp.asm.js";Oa(c)||(c=ba(c));Oa(e)||(e=ba(e));Oa(f)||(f=ba(f));var g={global:null,env:null,asm2wasm:ha,parent:d},k=null;d.asmPreload=d.asm;var h=d.reallocBuffer;d.reallocBuffer=function(a){if("asmjs"===m)var b=h(a);else a:{a=sa(a,d.usingWasm?65536:16777216);var c=d.buffer.byteLength;if(d.usingWasm)try{b=-1!==d.wasmMemory.grow((a-c)/65536)?d.buffer=d.wasmMemory.buffer:null;break a}catch(ja){b=
null;break a}b=void 0}return b};var m="";d.asm=function(a,c){if(!c.table){a=d.wasmTableSize;void 0===a&&(a=1024);var e=d.wasmMaxTableSize;c.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==e?new WebAssembly.Table({initial:a,maximum:e,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):Array(a);d.wasmTable=c.table}c.memoryBase||(c.memoryBase=d.STATIC_BASE);c.tableBase||(c.tableBase=0);c=b(c);assert(c,"no binaryen method succeeded.");return c}})();
var Pa=[function(a,b){d.removeAttribute(a,d.UTF8ToString(b))},function(a,b,c){d.setAttribute(a,d.UTF8ToString(b),d.UTF8ToString(c))},function(a,b){return 0===b?d.createElement(d.UTF8ToString(a)):d.createElementNS(d.UTF8ToString(b),d.UTF8ToString(a))},function(a){return d.createTextNode(d.UTF8ToString(a))},function(){return d.createDocumentFragment()},function(a){return d.createComment(d.UTF8ToString(a))},function(a,b){d.appendChild(a,b)},function(a,b,c){d.S(a,b,c)},function(a,b,c){d.insertBefore(a,
b,d.nextSibling(c))},function(a,b,c){d.insertBefore(a,b,c)},function(a,b,c){d.insertBefore(a,b,c)},function(a,b){d.removeChild(a);a=window.asmDomHelpers.vnodesData[b];void 0!==a&&void 0!==a.ref&&a.ref(null)},function(a,b){d.fa(a,d.UTF8ToString(b))},function(a,b){var c=d.parentNode(b);0!==c&&(d.insertBefore(c,a,d.nextSibling(b)),d.removeChild(b))},function(){d.S=window.asmDomHelpers.diff;d.ha=window.asmDomHelpers.domApi.addNode;d.createElement=window.asmDomHelpers.domApi.createElement;d.createElementNS=
window.asmDomHelpers.domApi.createElementNS;d.createTextNode=window.asmDomHelpers.domApi.createTextNode;d.createComment=window.asmDomHelpers.domApi.createComment;d.createDocumentFragment=window.asmDomHelpers.domApi.createDocumentFragment;d.insertBefore=window.asmDomHelpers.domApi.insertBefore;d.removeChild=window.asmDomHelpers.domApi.removeChild;d.appendChild=window.asmDomHelpers.domApi.appendChild;d.removeAttribute=window.asmDomHelpers.domApi.removeAttribute;d.setAttribute=window.asmDomHelpers.domApi.setAttribute;
d.parentNode=window.asmDomHelpers.domApi.parentNode;d.nextSibling=window.asmDomHelpers.domApi.nextSibling;d.fa=window.asmDomHelpers.domApi.setNodeValue;d.qa=window.asmDomHelpers.nodes;d.ka=window.asmDomHelpers.eventProxy}];ya=1024;B=ya+12288;Ha.push({C:function(){Qa()}},{C:function(){Ra()}},{C:function(){Sa()}},{C:function(){Ta()}});d.STATIC_BASE=ya;d.STATIC_BUMP=12288;var Ua=B;B+=16;function Va(){return!!Va.g}function Wa(a){d.___errno_location&&(y[d.___errno_location()>>2]=a);return a}var H=0;
function I(){H+=4;return y[H-4>>2]}var J={};function K(a,b){H=b;try{var c=I(),e=I(),f=I();a=0;K.g||(K.g=[null,[],[]],K.P=function(a,b){var c=K.g[a];assert(c);0===b||10===b?((1===a?ea:t)(na(c,0)),c.length=0):c.push(b)});for(b=0;b<f;b++){for(var g=y[e+8*b>>2],k=y[e+(8*b+4)>>2],h=0;h<k;h++)K.P(c,w[g+h]);a+=k}return a}catch(m){return"undefined"!==typeof FS&&m instanceof FS.G||v(m),-m.I}}
function Xa(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ya=void 0;function L(a){for(var b="";w[a];)b+=Ya[w[a++]];return b}var M={},N={},Za={};function $a(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}
function ab(a,b){a=$a(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function bb(a){var b=Error,c=ab(a,function(b){this.name=a;this.message=b;b=Error(b).stack;void 0!==b&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}
var O=void 0;function P(a){throw new O(a);}var cb=void 0;function db(a){throw new cb(a);}function Q(a,b,c){function e(b){b=c(b);b.length!==a.length&&db("Mismatched type converter count");for(var e=0;e<a.length;++e)R(a[e],b[e])}a.forEach(function(a){Za[a]=b});var f=Array(b.length),g=[],k=0;b.forEach(function(a,b){N.hasOwnProperty(a)?f[b]=N[a]:(g.push(a),M.hasOwnProperty(a)||(M[a]=[]),M[a].push(function(){f[b]=N[a];++k;k===g.length&&e(f)}))});0===g.length&&e(f)}
function R(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=b.name;a||P('type "'+e+'" must have a positive integer typeid pointer');if(N.hasOwnProperty(a)){if(c.Y)return;P("Cannot register type '"+e+"' twice")}N[a]=b;delete Za[a];M.hasOwnProperty(a)&&(b=M[a],delete M[a],b.forEach(function(a){a()}))}function eb(a){P(a.a.f.b.name+" instance already deleted")}var S=void 0,fb=[];
function gb(){for(;fb.length;){var a=fb.pop();a.a.u=!1;a["delete"]()}}function T(){}var hb={};function ib(a,b,c){if(void 0===a[b].h){var e=a[b];a[b]=function(){a[b].h.hasOwnProperty(arguments.length)||P("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].h+")!");return a[b].h[arguments.length].apply(this,arguments)};a[b].h=[];a[b].h[e.B]=e}}
function jb(a,b,c){d.hasOwnProperty(a)?((void 0===c||void 0!==d[a].h&&void 0!==d[a].h[c])&&P("Cannot register public name '"+a+"' twice"),ib(d,a,a),d.hasOwnProperty(c)&&P("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),d[a].h[c]=b):(d[a]=b,void 0!==c&&(d[a].ra=c))}function kb(a,b,c,e,f,g,k,h){this.name=a;this.constructor=b;this.v=c;this.s=e;this.l=f;this.U=g;this.A=k;this.T=h;this.ba=[]}
function lb(a,b,c){for(;b!==c;)b.A||P("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.A(a),b=b.l;return a}function mb(a,b){if(null===b)return this.J&&P("null is not a valid "+this.name),0;b.a||P('Cannot pass "'+U(b)+'" as a '+this.name);b.a.c||P("Cannot pass deleted object as a pointer of type "+this.name);return lb(b.a.c,b.a.f.b,this.b)}
function nb(a,b){if(null===b){this.J&&P("null is not a valid "+this.name);if(this.F){var c=this.da();null!==a&&a.push(this.s,c);return c}return 0}b.a||P('Cannot pass "'+U(b)+'" as a '+this.name);b.a.c||P("Cannot pass deleted object as a pointer of type "+this.name);!this.D&&b.a.f.D&&P("Cannot convert argument of type "+(b.a.j?b.a.j.name:b.a.f.name)+" to parameter type "+this.name);c=lb(b.a.c,b.a.f.b,this.b);if(this.F)switch(void 0===b.a.i&&P("Passing raw pointer to smart pointer is illegal"),this.ga){case 0:b.a.j===
this?c=b.a.i:P("Cannot convert argument of type "+(b.a.j?b.a.j.name:b.a.f.name)+" to parameter type "+this.name);break;case 1:c=b.a.i;break;case 2:if(b.a.j===this)c=b.a.i;else{var e=b.clone();c=this.ea(c,V(function(){e["delete"]()}));null!==a&&a.push(this.s,c)}break;default:P("Unsupporting sharing policy")}return c}
function ob(a,b){if(null===b)return this.J&&P("null is not a valid "+this.name),0;b.a||P('Cannot pass "'+U(b)+'" as a '+this.name);b.a.c||P("Cannot pass deleted object as a pointer of type "+this.name);b.a.f.D&&P("Cannot convert argument of type "+b.a.f.name+" to parameter type "+this.name);return lb(b.a.c,b.a.f.b,this.b)}function pb(a){return this.fromWireType(A[a>>2])}function qb(a,b,c){if(b===c)return a;if(void 0===c.l)return null;a=qb(a,b,c.l);return null===a?null:c.T(a)}var rb={};
function sb(a,b){for(void 0===b&&P("ptr should not be undefined");a.l;)b=a.A(b),a=a.l;return rb[b]}function tb(a,b){b.f&&b.c||db("makeClassHandle requires ptr and ptrType");!!b.j!==!!b.i&&db("Both smartPtrType and smartPtr must be specified");b.count={value:1};return Object.create(a,{a:{value:b}})}
function W(a,b,c,e,f,g,k,h,m,l,p){this.name=a;this.b=b;this.J=c;this.D=e;this.F=f;this.aa=g;this.ga=k;this.M=h;this.da=m;this.ea=l;this.s=p;f||void 0!==b.l?this.toWireType=nb:(this.toWireType=e?mb:ob,this.m=null)}function ub(a,b,c){d.hasOwnProperty(a)||db("Replacing nonexistant public symbol");void 0!==d[a].h&&void 0!==c?d[a].h[c]=b:(d[a]=b,d[a].B=c)}
function X(a,b){a=L(a);if(void 0!==d["FUNCTION_TABLE_"+a])var c=d["FUNCTION_TABLE_"+a][b];else if("undefined"!==typeof FUNCTION_TABLE)c=FUNCTION_TABLE[b];else{c=d.asm["dynCall_"+a];void 0===c&&(c=d.asm["dynCall_"+a.replace(/f/g,"d")],void 0===c&&P("No dynCall invoker for signature: "+a));for(var e=[],f=1;f<a.length;++f)e.push("a"+f);f="return function "+("dynCall_"+a+"_"+b)+"("+e.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n";c=(new Function("dynCall",
"rawFunction",f+"};\n"))(c,b)}"function"!==typeof c&&P("unknown function pointer with signature "+a+": "+b);return c}var vb=void 0;function wb(a){a=xb(a);var b=L(a);Y(a);return b}function yb(a,b){function c(a){f[a]||N[a]||(Za[a]?Za[a].forEach(c):(e.push(a),f[a]=!0))}var e=[],f={};b.forEach(c);throw new vb(a+": "+e.map(wb).join([", "]));}function zb(a,b){for(var c=[],e=0;e<a;e++)c.push(y[(b>>2)+e]);return c}function Ab(a){for(;a.length;){var b=a.pop();a.pop()(b)}}
function Bb(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=ab(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Cb(a,b,c,e,f){var g=b.length;2>g&&P("argTypes array size mismatch! Must at least get return value and 'this' types!");var k=null!==b[1]&&null!==c,h=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].m){h=!0;break}var m="void"!==b[0].name,l="",p="";for(c=0;c<g-2;++c)l+=(0!==c?", ":"")+"arg"+c,p+=(0!==c?", ":"")+"arg"+c+"Wired";a="return function "+$a(a)+"("+l+") {\nif (arguments.length !== "+(g-2)+") {\nthrowBindingError('function "+a+" called with ' + arguments.length + ' arguments, expected "+
(g-2)+" args!');\n}\n";h&&(a+="var destructors = [];\n");var u=h?"destructors":"null";l="throwBindingError invoker fn runDestructors retType classParam".split(" ");e=[P,e,f,Ab,b[0],b[1]];k&&(a+="var thisWired = classParam.toWireType("+u+", this);\n");for(c=0;c<g-2;++c)a+="var arg"+c+"Wired = argType"+c+".toWireType("+u+", arg"+c+"); // "+b[c+2].name+"\n",l.push("argType"+c),e.push(b[c+2]);k&&(p="thisWired"+(0<p.length?", ":"")+p);a+=(m?"var rv = ":"")+"invoker(fn"+(0<p.length?", ":"")+p+");\n";if(h)a+=
"runDestructors(destructors);\n";else for(c=k?1:2;c<b.length;++c)g=1===c?"thisWired":"arg"+(c-2)+"Wired",null!==b[c].m&&(a+=g+"_dtor("+g+"); // "+b[c].name+"\n",l.push(g+"_dtor"),e.push(b[c].m));m&&(a+="var ret = retType.fromWireType(rv);\nreturn ret;\n");l.push(a+"}\n");return Bb(l).apply(null,e)}var Db=[],Z=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Eb(a){4<a&&0===--Z[a].K&&(Z[a]=void 0,Db.push(a))}
function V(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Db.length?Db.pop():Z.length;Z[b]={K:1,value:a};return b}}function U(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Fb(a,b){switch(b){case 2:return function(a){return this.fromWireType(va[a>>2])};case 3:return function(a){return this.fromWireType(wa[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function Gb(a,b,c){switch(b){case 0:return c?function(a){return x[a]}:function(a){return w[a]};case 1:return c?function(a){return ta[a>>1]}:function(a){return ua[a>>1]};case 2:return c?function(a){return y[a>>2]}:function(a){return A[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}function Hb(a){a||P("Cannot use deleted val. handle = "+a);return Z[a].value}function Ib(a,b){var c=N[a];void 0===c&&P(b+" has unknown type "+wb(a));return c}var Jb={};
function Kb(a){var b=Jb[a];return void 0===b?L(a):b}var Lb=[];function Mb(a){var b=Lb.length;Lb.push(a);return b}function Nb(a,b){for(var c=Array(a),e=0;e<a;++e)c[e]=Ib(y[(b>>2)+e],"parameter "+e);return c}var Ob={};function Pb(a){if(0===a)return 0;a=ka(a);if(!Ob.hasOwnProperty(a))return 0;Pb.g&&Y(Pb.g);a=Ob[a];var b=pa(a)+1,c=Qb(b);c&&oa(a,x,c,b);Pb.g=c;return Pb.g}var Rb={},Sb=1;function Tb(a,b){Tb.g||(Tb.g={});a in Tb.g||(d.dynCall_v(b),Tb.g[a]=1)}
for(var Ub=Array(256),Vb=0;256>Vb;++Vb)Ub[Vb]=String.fromCharCode(Vb);Ya=Ub;O=d.BindingError=bb("BindingError");cb=d.InternalError=bb("InternalError");T.prototype.isAliasOf=function(a){if(!(this instanceof T&&a instanceof T))return!1;var b=this.a.f.b,c=this.a.c,e=a.a.f.b;for(a=a.a.c;b.l;)c=b.A(c),b=b.l;for(;e.l;)a=e.A(a),e=e.l;return b===e&&c===a};
T.prototype.clone=function(){this.a.c||eb(this);if(this.a.w)return this.a.count.value+=1,this;var a=this.a;a=Object.create(Object.getPrototypeOf(this),{a:{value:{count:a.count,u:a.u,w:a.w,c:a.c,f:a.f,i:a.i,j:a.j}}});a.a.count.value+=1;a.a.u=!1;return a};T.prototype["delete"]=function(){this.a.c||eb(this);this.a.u&&!this.a.w&&P("Object already scheduled for deletion");--this.a.count.value;if(0===this.a.count.value){var a=this.a;a.i?a.j.s(a.i):a.f.b.s(a.c)}this.a.w||(this.a.i=void 0,this.a.c=void 0)};
T.prototype.isDeleted=function(){return!this.a.c};T.prototype.deleteLater=function(){this.a.c||eb(this);this.a.u&&!this.a.w&&P("Object already scheduled for deletion");fb.push(this);1===fb.length&&S&&S(gb);this.a.u=!0;return this};W.prototype.V=function(a){this.M&&(a=this.M(a));return a};W.prototype.L=function(a){this.s&&this.s(a)};W.prototype.argPackAdvance=8;W.prototype.readValueFromPointer=pb;W.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};
W.prototype.fromWireType=function(a){function b(){return this.F?tb(this.b.v,{f:this.aa,c:c,j:this,i:a}):tb(this.b.v,{f:this,c:a})}var c=this.V(a);if(!c)return this.L(a),null;var e=sb(this.b,c);if(void 0!==e){if(0===e.a.count.value)return e.a.c=c,e.a.i=a,e.clone();e=e.clone();this.L(a);return e}e=this.b.U(c);e=hb[e];if(!e)return b.call(this);e=this.D?e.R:e.pointerType;var f=qb(c,this.b,e.b);return null===f?b.call(this):this.F?tb(e.b.v,{f:e,c:f,j:this,i:a}):tb(e.b.v,{f:e,c:f})};
d.getInheritedInstanceCount=function(){return Object.keys(rb).length};d.getLiveInheritedInstances=function(){var a=[],b;for(b in rb)rb.hasOwnProperty(b)&&a.push(rb[b]);return a};d.flushPendingDeletes=gb;d.setDelayFunction=function(a){S=a;fb.length&&S&&S(gb)};vb=d.UnboundTypeError=bb("UnboundTypeError");d.count_emval_handles=function(){for(var a=0,b=5;b<Z.length;++b)void 0!==Z[b]&&++a;return a};d.get_first_emval=function(){for(var a=5;a<Z.length;++a)if(void 0!==Z[a])return Z[a];return null};
var Wb=B;B=B+4+15&-16;C=Wb;za=Aa=fa(B);Ba=za+Fa;Ca=fa(Ba);y[C>>2]=Ca;d.wasmTableSize=176;d.wasmMaxTableSize=176;d.N={};
d.O={abort:v,enlargeMemory:function(){var a=d.usingWasm?65536:16777216,b=2147483648-a;if(y[C>>2]>b)return!1;var c=D;for(D=Math.max(D,16777216);D<y[C>>2];)536870912>=D?D=sa(2*D,a):D=Math.min(sa((3*D+2147483648)/4,a),b);a=d.reallocBuffer(D);if(!a||a.byteLength!=D)return D=c,!1;d.buffer=buffer=a;xa();return!0},getTotalMemory:function(){return D},abortOnCannotGrowMemory:function(){v("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+D+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")},
___cxa_allocate_exception:function(a){return Qb(a)},___cxa_throw:function(a){"uncaught_exception"in Va?Va.g++:Va.g=1;throw a;},___lock:function(){},___map_file:function(){Wa(1);return-1},___setErrNo:Wa,___syscall140:function(a,b){H=b;try{var c=J.W();I();var e=I(),f=I(),g=I();FS.na(c,e,g);y[f>>2]=c.position;c.X&&0===e&&0===g&&(c.X=null);return 0}catch(k){return"undefined"!==typeof FS&&k instanceof FS.G||v(k),-k.I}},___syscall146:K,___syscall6:function(a,b){H=b;try{var c=J.W();FS.close(c);return 0}catch(e){return"undefined"!==
typeof FS&&e instanceof FS.G||v(e),-e.I}},___syscall91:function(a,b){H=b;try{var c=I(),e=I(),f=J.$[c];if(!f)return 0;if(e===f.ma){var g=FS.la(f.fd);J.ja(c,g,e,f.flags);FS.pa(g);J.$[c]=null;f.ia&&Y(f.oa)}return 0}catch(k){return"undefined"!==typeof FS&&k instanceof FS.G||v(k),-k.I}},___unlock:function(){},__embind_register_bool:function(a,b,c,e,f){var g=Xa(c);b=L(b);R(a,{name:b,fromWireType:function(a){return!!a},toWireType:function(a,b){return b?e:f},argPackAdvance:8,readValueFromPointer:function(a){if(1===
c)var e=x;else if(2===c)e=ta;else if(4===c)e=y;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(e[a>>g])},m:null})},__embind_register_class:function(a,b,c,e,f,g,k,h,m,l,p,u,ja){p=L(p);g=X(f,g);h&&(h=X(k,h));l&&(l=X(m,l));ja=X(u,ja);var z=$a(p);jb(z,function(){yb("Cannot construct "+p+" due to unbound types",[e])});Q([a,b,c],e?[e]:[],function(b){b=b[0];if(e){var c=b.b;var f=c.v}else f=T.prototype;b=ab(z,function(){if(Object.getPrototypeOf(this)!==k)throw new O("Use 'new' to construct "+
p);if(void 0===m.o)throw new O(p+" has no accessible constructor");var a=m.o[arguments.length];if(void 0===a)throw new O("Tried to invoke ctor of "+p+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(m.o).toString()+") parameters instead!");return a.apply(this,arguments)});var k=Object.create(f,{constructor:{value:b}});b.prototype=k;var m=new kb(p,b,k,ja,c,g,h,l);c=new W(p,m,!0,!1,!1);f=new W(p+"*",m,!1,!1,!1);var u=new W(p+" const*",m,!1,!0,!1);hb[a]={pointerType:f,
R:u};ub(z,b);return[c,f,u]})},__embind_register_class_constructor:function(a,b,c,e,f,g){var k=zb(b,c);f=X(e,f);Q([],[a],function(a){a=a[0];var c="constructor "+a.name;void 0===a.b.o&&(a.b.o=[]);if(void 0!==a.b.o[b-1])throw new O("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+a.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");a.b.o[b-1]=function(){yb("Cannot construct "+a.name+" due to unbound types",
k)};Q([],k,function(e){a.b.o[b-1]=function(){arguments.length!==b-1&&P(c+" called with "+arguments.length+" arguments, expected "+(b-1));var a=[],h=Array(b);h[0]=g;for(var k=1;k<b;++k)h[k]=e[k].toWireType(a,arguments[k-1]);h=f.apply(null,h);Ab(a);return e[0].fromWireType(h)};return[]});return[]})},__embind_register_class_function:function(a,b,c,e,f,g,k,h){var m=zb(c,e);b=L(b);g=X(f,g);Q([],[a],function(a){function e(){yb("Cannot call "+f+" due to unbound types",m)}a=a[0];var f=a.name+"."+b;h&&a.b.ba.push(b);
var l=a.b.v,z=l[b];void 0===z||void 0===z.h&&z.className!==a.name&&z.B===c-2?(e.B=c-2,e.className=a.name,l[b]=e):(ib(l,b,f),l[b].h[c-2]=e);Q([],m,function(e){e=Cb(f,e,a,g,k);void 0===l[b].h?(e.B=c-2,l[b]=e):l[b].h[c-2]=e;return[]});return[]})},__embind_register_emval:function(a,b){b=L(b);R(a,{name:b,fromWireType:function(a){var b=Z[a].value;Eb(a);return b},toWireType:function(a,b){return V(b)},argPackAdvance:8,readValueFromPointer:pb,m:null})},__embind_register_float:function(a,b,c){c=Xa(c);b=L(b);
R(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,b){if("number"!==typeof b&&"boolean"!==typeof b)throw new TypeError('Cannot convert "'+U(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:Fb(b,c),m:null})},__embind_register_function:function(a,b,c,e,f,g){var k=zb(b,c);a=L(a);f=X(e,f);jb(a,function(){yb("Cannot call "+a+" due to unbound types",k)},b-1);Q([],k,function(c){c=[c[0],null].concat(c.slice(1));ub(a,Cb(a,c,null,f,g),b-1);return[]})},__embind_register_integer:function(a,
b,c,e,f){function g(a){return a}b=L(b);-1===f&&(f=4294967295);var k=Xa(c);if(0===e){var h=32-8*c;g=function(a){return a<<h>>>h}}var m=-1!=b.indexOf("unsigned");R(a,{name:b,fromWireType:g,toWireType:function(a,c){if("number"!==typeof c&&"boolean"!==typeof c)throw new TypeError('Cannot convert "'+U(c)+'" to '+this.name);if(c<e||c>f)throw new TypeError('Passing a number "'+U(c)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+e+", "+f+"]!");return m?c>>>
0:c|0},argPackAdvance:8,readValueFromPointer:Gb(b,k,0!==e),m:null})},__embind_register_memory_view:function(a,b,c){function e(a){a>>=2;var b=A;return new f(b.buffer,b[a+1],b[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=L(c);R(a,{name:c,fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{Y:!0})},__embind_register_std_string:function(a,b){b=L(b);var c="std::string"===b;R(a,{name:b,fromWireType:function(a){var b=A[a>>2];if(c){var e=
w[a+4+b],k=0;0!=e&&(k=e,w[a+4+b]=0);var h=a+4;for(e=0;e<=b;++e){var m=a+4+e;if(0==w[m]){h=la(h);if(void 0===l)var l=h;else l+=String.fromCharCode(0),l+=h;h=m+1}}0!=k&&(w[a+4+b]=k)}else{l=Array(b);for(e=0;e<b;++e)l[e]=String.fromCharCode(w[a+4+e]);l=l.join("")}Y(a);return l},toWireType:function(a,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var e="string"===typeof b;e||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||P("Cannot pass non-string to std::string");
var f=(c&&e?function(){return pa(b)}:function(){return b.length})(),h=Qb(4+f+1);A[h>>2]=f;if(c&&e)oa(b,w,h+4,f+1);else if(e)for(e=0;e<f;++e){var m=b.charCodeAt(e);255<m&&(Y(h),P("String has UTF-16 code units that do not fit in 8 bits"));w[h+4+e]=m}else for(e=0;e<f;++e)w[h+4+e]=b[e];null!==a&&a.push(Y,h);return h},argPackAdvance:8,readValueFromPointer:pb,m:function(a){Y(a)}})},__embind_register_std_wstring:function(a,b,c){c=L(c);if(2===b){var e=function(){return ua};var f=1}else 4===b&&(e=function(){return A},
f=2);R(a,{name:c,fromWireType:function(a){for(var b=e(),c=A[a>>2],g=Array(c),l=a+4>>f,p=0;p<c;++p)g[p]=String.fromCharCode(b[l+p]);Y(a);return g.join("")},toWireType:function(a,c){var g=e(),k=c.length,l=Qb(4+k*b);A[l>>2]=k;for(var p=l+4>>f,u=0;u<k;++u)g[p+u]=c.charCodeAt(u);null!==a&&a.push(Y,l);return l},argPackAdvance:8,readValueFromPointer:pb,m:function(a){Y(a)}})},__embind_register_void:function(a,b){b=L(b);R(a,{Z:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},
__emval_as:function(a,b,c){a=Hb(a);b=Ib(b,"emval::as");var e=[],f=V(e);y[c>>2]=f;return b.toWireType(e,a)},__emval_call_method:function(a,b,c,e,f){a=Lb[a];b=Hb(b);c=Kb(c);var g=[];y[e>>2]=V(g);return a(b,c,g,f)},__emval_decref:Eb,__emval_get_global:function(a){if(0===a)return V(Function("return this")());a=Kb(a);return V(Function("return this")()[a])},__emval_get_method_caller:function(a,b){b=Nb(a,b);for(var c=b[0],e=c.name+"_$"+b.slice(1).map(function(a){return a.name}).join("_")+"$",f=["retType"],
g=[c],k="",h=0;h<a-1;++h)k+=(0!==h?", ":"")+"arg"+h,f.push("argType"+h),g.push(b[1+h]);e="return function "+$a("methodCaller_"+e)+"(handle, name, destructors, args) {\n";var m=0;for(h=0;h<a-1;++h)e+="    var arg"+h+" = argType"+h+".readValueFromPointer(args"+(m?"+"+m:"")+");\n",m+=b[h+1].argPackAdvance;e+="    var rv = handle[name]("+k+");\n";for(h=0;h<a-1;++h)b[h+1].deleteObject&&(e+="    argType"+h+".deleteObject(arg"+h+");\n");c.Z||(e+="    return retType.toWireType(destructors, rv);\n");f.push(e+
"};\n");a=Bb(f).apply(null,g);return Mb(a)},__emval_get_property:function(a,b){a=Hb(a);b=Hb(b);return V(a[b])},__emval_incref:function(a){4<a&&(Z[a].K+=1)},__emval_new_cstring:function(a){return V(Kb(a))},__emval_run_destructors:function(a){Ab(Z[a].value);Eb(a)},__emval_take_value:function(a,b){a=Ib(a,"_emval_take_value");a=a.readValueFromPointer(b);return V(a)},_abort:function(){d.abort()},_emscripten_asm_const_i:function(a){return Pa[a]()},_emscripten_asm_const_ii:function(a,b){return Pa[a](b)},
_emscripten_asm_const_iii:function(a,b,c){return Pa[a](b,c)},_emscripten_asm_const_iiii:function(a,b,c,e){return Pa[a](b,c,e)},_emscripten_memcpy_big:function(a,b,c){w.set(w.subarray(b,b+c),a);return a},_getenv:Pb,_pthread_getspecific:function(a){return Rb[a]||0},_pthread_key_create:function(a){if(0==a)return 22;y[a>>2]=Sb;Rb[Sb]=0;Sb++;return 0},_pthread_once:Tb,_pthread_setspecific:function(a,b){if(!(a in Rb))return 22;Rb[a]=b;return 0},DYNAMICTOP_PTR:C,tempDoublePtr:Ua,STACKTOP:Aa};
var Xb=d.asm(d.N,d.O,buffer);d.asm=Xb;
var Qa=d.__GLOBAL__sub_I_asm_dom_cpp=function(){return d.asm.__GLOBAL__sub_I_asm_dom_cpp.apply(null,arguments)},Ra=d.__GLOBAL__sub_I_asm_dom_server_cpp=function(){return d.asm.__GLOBAL__sub_I_asm_dom_server_cpp.apply(null,arguments)},Ta=d.__GLOBAL__sub_I_bind_cpp=function(){return d.asm.__GLOBAL__sub_I_bind_cpp.apply(null,arguments)},Sa=d.__GLOBAL__sub_I_index_cpp=function(){return d.asm.__GLOBAL__sub_I_index_cpp.apply(null,arguments)},xb=d.___getTypeName=function(){return d.asm.___getTypeName.apply(null,arguments)},
Da=d._emscripten_replace_memory=function(){return d.asm._emscripten_replace_memory.apply(null,arguments)},Y=d._free=function(){return d.asm._free.apply(null,arguments)};d._main=function(){return d.asm._main.apply(null,arguments)};var Qb=d._malloc=function(){return d.asm._malloc.apply(null,arguments)},ra=d.stackAlloc=function(){return d.asm.stackAlloc.apply(null,arguments)};d.dynCall_i=function(){return d.asm.dynCall_i.apply(null,arguments)};
d.dynCall_ii=function(){return d.asm.dynCall_ii.apply(null,arguments)};d.dynCall_iii=function(){return d.asm.dynCall_iii.apply(null,arguments)};d.dynCall_iiii=function(){return d.asm.dynCall_iiii.apply(null,arguments)};d.dynCall_iiiii=function(){return d.asm.dynCall_iiiii.apply(null,arguments)};d.dynCall_iiiiii=function(){return d.asm.dynCall_iiiiii.apply(null,arguments)};d.dynCall_iiiiiiiii=function(){return d.asm.dynCall_iiiiiiiii.apply(null,arguments)};
d.dynCall_v=function(){return d.asm.dynCall_v.apply(null,arguments)};d.dynCall_vi=function(){return d.asm.dynCall_vi.apply(null,arguments)};d.dynCall_vii=function(){return d.asm.dynCall_vii.apply(null,arguments)};d.dynCall_viii=function(){return d.asm.dynCall_viii.apply(null,arguments)};d.dynCall_viiii=function(){return d.asm.dynCall_viiii.apply(null,arguments)};d.dynCall_viiiii=function(){return d.asm.dynCall_viiiii.apply(null,arguments)};
d.dynCall_viiiiii=function(){return d.asm.dynCall_viiiiii.apply(null,arguments)};d.asm=Xb;d.UTF8ToString=la;d.then=function(a){if(d.calledRun)a(d);else{var b=d.onRuntimeInitialized;d.onRuntimeInitialized=function(){b&&b();a(d)}}return d};function r(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}r.prototype=Error();r.prototype.constructor=r;G=function Yb(){d.calledRun||Zb();d.calledRun||(G=Yb)};
d.callMain=function(a){a=a||[];La||(La=!0,E(Ha));var b=a.length+1,c=ra(4*(b+1));y[c>>2]=qa(d.thisProgram);for(var e=1;e<b;e++)y[(c>>2)+e]=qa(a[e-1]);y[(c>>2)+b]=0;try{var f=d._main(b,c,0);if(!d.noExitRuntime||0!==f){if(!d.noExitRuntime&&(ia=!0,Aa=void 0,E(Ja),d.onExit))d.onExit(f);d.quit(f,new r(f))}}catch(g){g instanceof r||("SimulateInfiniteLoop"==g?d.noExitRuntime=!0:((a=g)&&"object"===typeof g&&g.stack&&(a=[g,g.stack]),t("exception thrown: "+a),d.quit(1,g)))}finally{}};
function Zb(a){function b(){if(!d.calledRun&&(d.calledRun=!0,!ia)){La||(La=!0,E(Ha));E(Ia);if(d.onRuntimeInitialized)d.onRuntimeInitialized();d._main&&$b&&d.callMain(a);if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;){var b=d.postRun.shift();Ka.unshift(b)}E(Ka)}}a=a||d.arguments;if(!(0<F)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)Ma();E(Ga);0<F||d.calledRun||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("")},
1);b()},1)):b())}}d.run=Zb;function v(a){if(d.onAbort)d.onAbort(a);void 0!==a?(ea(a),t(a),a=JSON.stringify(a)):a="";ia=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}d.abort=v;if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();var $b=!0;d.noInitialRun&&($b=!1);d.noExitRuntime=!0;Zb();


  return Module;
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
    module.exports = Module;
  else if (typeof define === 'function' && define['amd'])
    define([], function() { return Module; });
  else if (typeof exports === 'object')
    exports["Module"] = Module;
  