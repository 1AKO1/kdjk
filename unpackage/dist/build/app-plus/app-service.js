var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-8820fc28'])
Z([[7],[3,'contentFlex']])
Z([[7],[3,'contentStyle']])
Z([[7],[3,'fontSize']])
Z([[7],[3,'itemDisabled']])
Z([[7],[3,'layout']])
Z([[7],[3,'required']])
Z([[7],[3,'requiredSign']])
Z([[7],[3,'title']])
Z([[7],[3,'titleColor']])
Z([[7],[3,'titleFlex']])
Z([[7],[3,'titleHide']])
Z([[7],[3,'titleLayout']])
Z([[7],[3,'titleStyle']])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([[7],[3,'width']])
Z([3,'flex_row_none_c transition_point6s width100 padding_10rpx_15rpx data-v-8820fc28'])
Z([[2,'+'],[[2,'+'],[1,'border-bottom: 1px solid '],[[2,'?:'],[[7],[3,'focusBl']],[[2,'||'],[[7],[3,'focusBorderColor']],[1,'#999']],[[2,'||'],[[7],[3,'blurBorderColor']],[1,'#f2f2f2']]]],[1,';']])
Z([3,'flex_row_none_c Flex5 data-v-8820fc28'])
Z([[7],[3,'leftIcon']])
Z(z[0])
Z(z[1])
Z([[2,'||'],[[7],[3,'leftIconColor']],[1,'#999']])
Z([[7],[3,'iconSize']])
Z(z[21])
Z([[2,'+'],[[2,'+'],[1,'2'],[1,',']],[1,'1']])
Z(z[5])
Z([[7],[3,'tapClear']])
Z([[7],[3,'value']])
Z([3,'__e'])
Z([3,'flex_row_c_c width100 data-v-8820fc28'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'inputTap']],[[4],[[5],[1,'clear']]]]]]]]]]])
Z(z[0])
Z(z[1])
Z([3,'#999999'])
Z(z[25])
Z([3,'clear'])
Z([[2,'+'],[[2,'+'],[1,'3'],[1,',']],[1,'1']])
Z([[7],[3,'password']])
Z(z[31])
Z(z[32])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'inputTap']],[[4],[[5],[1,'password']]]]]]]]]]])
Z(z[0])
Z(z[1])
Z([[2,'?:'],[[7],[3,'passwordBl']],[1,'#999999'],[[2,'||'],[[7],[3,'passwordIconColor']],[1,'#33cc33']]])
Z(z[25])
Z([3,'eye'])
Z([[2,'+'],[[2,'+'],[1,'4'],[1,',']],[1,'1']])
Z([[7],[3,'customTapIcon']])
Z(z[31])
Z(z[32])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'inputTap']],[[4],[[5],[1,'custom']]]]]]]]]]])
Z(z[0])
Z(z[1])
Z([[2,'||'],[[7],[3,'customTapIconColor']],[1,'#999']])
Z(z[25])
Z(z[50])
Z([[2,'+'],[[2,'+'],[1,'5'],[1,',']],[1,'1']])
Z([[7],[3,'rightButtonTex']])
Z([[7],[3,'ifCode']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'padding_20rpx_30rpx position_relative data-v-9f4544b8']],[[7],[3,'getLayout']]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'font-size:'],[[7],[3,'fontSize']]],[1,'rpx;width:']],[[7],[3,'width']]],[1,';']])
Z([[2,'&&'],[[7],[3,'title']],[[2,'!'],[[7],[3,'titleHide']]]])
Z([[7],[3,'required']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'popup-content vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'stopEvent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'popRef'])
Z([[7],[3,'_location']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-list-item']],[[2,'?:'],[[7],[3,'disabled']],[1,'uni-list-item--disabled'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[2,'||'],[[7],[3,'disabled']],[[7],[3,'showSwitch']]],[1,''],[1,'uni-list-item--hover']])
Z([3,'uni-list-item__container'])
Z([[7],[3,'thumb']])
Z([[7],[3,'showExtraIcon']])
Z([3,'__l'])
Z([3,'uni-icon-wrapper'])
Z([[6],[[7],[3,'extraIcon']],[3,'color']])
Z([[6],[[7],[3,'extraIcon']],[3,'size']])
Z([[6],[[7],[3,'extraIcon']],[3,'type']])
Z([3,'1'])
Z([[7],[3,'note']])
Z([[2,'||'],[[2,'||'],[[7],[3,'showBadge']],[[7],[3,'showArrow']]],[[7],[3,'showSwitch']]])
Z([3,'uni-list-item__extra'])
Z([[7],[3,'showBadge']])
Z(z[7])
Z([[7],[3,'badgeText']])
Z([[7],[3,'badgeType']])
Z([3,'2'])
Z([[7],[3,'showSwitch']])
Z([[7],[3,'showArrow']])
Z(z[7])
Z(z[8])
Z([3,'#bbb'])
Z([1,20])
Z([3,'arrowright'])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'wuc-tab']],[[7],[3,'tabClass']]]])
Z([[7],[3,'scrollLeft']])
Z([[7],[3,'tabStyle']])
Z([[2,'!'],[[7],[3,'textFlex']]])
Z([[7],[3,'textFlex']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'hideDrawer']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'background:#FFFFFF;'])
Z(z[0])
Z([3,'msg-list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltoupper']],[[4],[[5],[[4],[[5],[[5],[1,'loadHistory']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'scrollToView']])
Z([[7],[3,'scrollTop']])
Z([[7],[3,'scrollAnimation']])
Z([3,'true'])
Z([3,'50'])
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'msgList']])
Z(z[12])
Z(z[13])
Z([[2,'+'],[1,'msg'],[[6],[[6],[[7],[3,'row']],[3,'msg']],[3,'id']]])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'system']])
Z([3,'system'])
Z([[2,'=='],[[6],[[6],[[7],[3,'row']],[3,'msg']],[3,'type']],[1,'text']])
Z([[2,'=='],[[6],[[6],[[7],[3,'row']],[3,'msg']],[3,'type']],[1,'redEnvelope']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'user']])
Z([[2,'=='],[[6],[[6],[[6],[[7],[3,'row']],[3,'msg']],[3,'userinfo']],[3,'uid']],[[7],[3,'myuid']]])
Z([3,'left'])
Z(z[20])
Z([[2,'=='],[[6],[[6],[[7],[3,'row']],[3,'msg']],[3,'type']],[1,'voice']])
Z([[2,'=='],[[6],[[6],[[7],[3,'row']],[3,'msg']],[3,'type']],[1,'img']])
Z(z[21])
Z([[2,'!='],[[6],[[6],[[6],[[7],[3,'row']],[3,'msg']],[3,'userinfo']],[3,'uid']],[[7],[3,'myuid']]])
Z([3,'right'])
Z(z[20])
Z(z[26])
Z(z[27])
Z(z[21])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'receivedList']])
Z(z[0])
Z([[6],[[7],[3,'row']],[3,'islucky']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([[2,'!'],[[7],[3,'hasLogin']]])
Z([[7],[3,'hasLogin']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'vue-ref'])
Z([3,'popupRef'])
Z([3,'top'])
Z([3,'width:100%;height:600rpx;position:relative;margin-top:-600rpx;'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[2])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^updateTabCur']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_sync']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'TabCur']],[1,'$event']]]],[[4],[[5],[1,'']]]]]]]]]],[[4],[[5],[[5],[1,'^updateTabCur']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_sync']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'TabCur']],[1,'$event']]]],[[4],[[5],[1,'']]]]]]]]]],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'tabChange']]]]]]]]])
Z([3,'selecttab'])
Z([[7],[3,'tabList']])
Z([3,'tabstyle'])
Z([[7],[3,'TabCur']])
Z([1,true])
Z([3,'1'])
Z(z[2])
Z([3,'break'])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'300'])
Z(z[1])
Z([3,'2'])
Z(z[1])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([[7],[3,'hasLogin']])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[2])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tap']],[[4],[[5],[[4],[[5],[[5],[1,'navigateTo']],[[4],[[5],[1,'personInfoShow']]]]]]]]]]])
Z([3,'用户信息'])
Z([[2,'+'],[[2,'+'],[1,'2'],[1,',']],[1,'1']])
Z(z[2])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tap']],[[4],[[5],[[4],[[5],[[5],[1,'navigateTo']],[[4],[[5],[1,'messagelist']]]]]]]]]]])
Z([3,'消息列表'])
Z([[2,'+'],[[2,'+'],[1,'3'],[1,',']],[1,'1']])
Z(z[2])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tap']],[[4],[[5],[[4],[[5],[[5],[1,'navigateTo']],[[4],[[5],[1,'tongueDiagnosis']]]]]]]]]]])
Z([3,'舌诊'])
Z([[2,'+'],[[2,'+'],[1,'4'],[1,',']],[1,'1']])
Z([[2,'!'],[[7],[3,'hasLogin']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'forms'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'username']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'value']]]]]]]]]]])
Z([[7],[3,'formName']])
Z([3,'用户名'])
Z([[6],[[7],[3,'value']],[3,'username']])
Z([3,'inputType'])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'height']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'value']]]]]]]]]]])
Z([3,'int'])
Z(z[4])
Z([3,'身高'])
Z([[6],[[7],[3,'value']],[3,'height']])
Z(z[7])
Z([3,'2'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'weight']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'value']]]]]]]]]]])
Z(z[12])
Z(z[4])
Z([3,'体重'])
Z([[6],[[7],[3,'value']],[3,'weight']])
Z(z[7])
Z([3,'3'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'blood_high']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'value']]]]]]]]]]])
Z(z[12])
Z(z[4])
Z([3,'舒张压'])
Z([[6],[[7],[3,'value']],[3,'blood_high']])
Z(z[7])
Z([3,'4'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'blood_low']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'value']]]]]]]]]]])
Z(z[12])
Z(z[4])
Z([3,'收缩压'])
Z([[6],[[7],[3,'value']],[3,'blood_low']])
Z(z[7])
Z([3,'5'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'sugar']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'value']]]]]]]]]]])
Z(z[12])
Z(z[4])
Z([3,'血糖'])
Z([[6],[[7],[3,'value']],[3,'sugar']])
Z(z[7])
Z([3,'6'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'vital']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'value']]]]]]]]]]])
Z(z[12])
Z(z[4])
Z([3,'肺活量'])
Z([[6],[[7],[3,'value']],[3,'vital']])
Z(z[7])
Z([3,'7'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'area']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'value']]]]]]]]]]])
Z([3,'string'])
Z(z[4])
Z([3,'地址'])
Z([[6],[[7],[3,'value']],[3,'area']])
Z(z[7])
Z([3,'8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'btn-row'])
Z([[2,'!'],[[7],[3,'hasLogin']]])
Z([[7],[3,'hasLogin']])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/QS-inputs-split/elements/QS-input/index.wxml','./components/QS-inputs-split/template/template.wxml','./components/QS-inputs-split/uniIcons/uni-icons.wxml','./components/login.wxml','./components/popup-layer/popup-layer.wxml','./components/register.wxml','./components/uni-badge/uni-badge.wxml','./components/uni-icons/uni-icons.wxml','./components/uni-list-item/uni-list-item.wxml','./components/uni-list/uni-list.wxml','./components/wuc-tab/wuc-tab.wxml','./pages/HM-chat/HM-chat.wxml','./pages/HM-chat/HM-details/HM-details.wxml','./pages/HM-chat/HM-hand/HM-hand.wxml','./pages/detail/detail.wxml','./pages/doctorDetail/doctorDetail.wxml','./pages/doctorlist/doctorlist.wxml','./pages/healthdata/healthdata.wxml','./pages/index/index.wxml','./pages/loginRegister/loginRegister.wxml','./pages/medical/medical.wxml','./pages/messagelist/messagelist.wxml','./pages/person/person.wxml','./pages/personInfo/personInfo.wxml','./pages/personInfoShow/personInfoShow.wxml','./pages/tongueDiagnosis/tongueDiagnosis.wxml','./pages/tongueResult/tongueResult.wxml','./pages/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'q-stemplate',['bind:__l',0,'class',1,'contentFlex',1,'contentStyle',2,'fontSize',3,'itemDisabled',4,'layout',5,'required',6,'requiredSign',7,'title',8,'titleColor',9,'titleFlex',10,'titleHide',11,'titleLayout',12,'titleStyle',13,'vueId',14,'vueSlots',15,'width',16],[],e,s,gg)
var xC=_mz(z,'view',['class',18,'style',1],[],e,s,gg)
var cI=_n('view')
_rz(z,cI,'class',20,e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,21,e,s,gg)){oJ.wxVkey=1
var aL=_mz(z,'uni-icon',['bind:__l',22,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(oJ,aL)
}
var lK=_v()
_(cI,lK)
if(_oz(z,28,e,s,gg)){lK.wxVkey=1
}
oJ.wxXCkey=1
oJ.wxXCkey=3
lK.wxXCkey=1
_(xC,cI)
var oD=_v()
_(xC,oD)
if(_oz(z,29,e,s,gg)){oD.wxVkey=1
var tM=_v()
_(oD,tM)
if(_oz(z,30,e,s,gg)){tM.wxVkey=1
var eN=_mz(z,'view',['catchtap',31,'class',1,'data-event-opts',2],[],e,s,gg)
var bO=_mz(z,'uni-icon',['bind:__l',34,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(eN,bO)
_(tM,eN)
}
tM.wxXCkey=1
tM.wxXCkey=3
}
var fE=_v()
_(xC,fE)
if(_oz(z,40,e,s,gg)){fE.wxVkey=1
var oP=_mz(z,'view',['catchtap',41,'class',1,'data-event-opts',2],[],e,s,gg)
var xQ=_mz(z,'uni-icon',['bind:__l',44,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(oP,xQ)
_(fE,oP)
}
var cF=_v()
_(xC,cF)
if(_oz(z,50,e,s,gg)){cF.wxVkey=1
var oR=_mz(z,'view',['catchtap',51,'class',1,'data-event-opts',2],[],e,s,gg)
var fS=_mz(z,'uni-icon',['bind:__l',54,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(oR,fS)
_(cF,oR)
}
var hG=_v()
_(xC,hG)
if(_oz(z,60,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(xC,oH)
if(_oz(z,61,e,s,gg)){oH.wxVkey=1
}
oD.wxXCkey=1
oD.wxXCkey=3
fE.wxXCkey=1
fE.wxXCkey=3
cF.wxXCkey=1
cF.wxXCkey=3
hG.wxXCkey=1
oH.wxXCkey=1
_(oB,xC)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var hU=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,2,e,s,gg)){oV.wxVkey=1
var cW=_v()
_(oV,cW)
if(_oz(z,3,e,s,gg)){cW.wxVkey=1
}
cW.wxXCkey=1
}
var oX=_n('slot')
_(hU,oX)
oV.wxXCkey=1
_(r,hU)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var e2=_mz(z,'view',['catchtap',0,'class',1,'data-event-opts',1,'data-ref',2,'style',3],[],e,s,gg)
var b3=_n('slot')
_(e2,b3)
_(r,e2)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var o6=_v()
_(r,o6)
if(_oz(z,0,e,s,gg)){o6.wxVkey=1
}
o6.wxXCkey=1
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var h9=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hoverClass',2],[],e,s,gg)
var o0=_n('view')
_rz(z,o0,'class',4,e,s,gg)
var cAB=_v()
_(o0,cAB)
if(_oz(z,5,e,s,gg)){cAB.wxVkey=1
}
else{cAB.wxVkey=2
var aDB=_v()
_(cAB,aDB)
if(_oz(z,6,e,s,gg)){aDB.wxVkey=1
var tEB=_mz(z,'uni-icons',['bind:__l',7,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(aDB,tEB)
}
aDB.wxXCkey=1
aDB.wxXCkey=3
}
var oBB=_v()
_(o0,oBB)
if(_oz(z,13,e,s,gg)){oBB.wxVkey=1
}
var lCB=_v()
_(o0,lCB)
if(_oz(z,14,e,s,gg)){lCB.wxVkey=1
var eFB=_n('view')
_rz(z,eFB,'class',15,e,s,gg)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,16,e,s,gg)){bGB.wxVkey=1
var oJB=_mz(z,'uni-badge',['bind:__l',17,'text',1,'type',2,'vueId',3],[],e,s,gg)
_(bGB,oJB)
}
var oHB=_v()
_(eFB,oHB)
if(_oz(z,21,e,s,gg)){oHB.wxVkey=1
}
var xIB=_v()
_(eFB,xIB)
if(_oz(z,22,e,s,gg)){xIB.wxVkey=1
var fKB=_mz(z,'uni-icons',['bind:__l',23,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(xIB,fKB)
}
bGB.wxXCkey=1
bGB.wxXCkey=3
oHB.wxXCkey=1
xIB.wxXCkey=1
xIB.wxXCkey=3
_(lCB,eFB)
}
cAB.wxXCkey=1
cAB.wxXCkey=3
oBB.wxXCkey=1
lCB.wxXCkey=1
lCB.wxXCkey=3
_(h9,o0)
_(r,h9)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var hMB=_n('slot')
_(r,hMB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cOB=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollX',-1,'class',0,'scrollLeft',1,'style',1],[],e,s,gg)
var oPB=_v()
_(cOB,oPB)
if(_oz(z,3,e,s,gg)){oPB.wxVkey=1
}
var lQB=_v()
_(cOB,lQB)
if(_oz(z,4,e,s,gg)){lQB.wxVkey=1
}
oPB.wxXCkey=1
lQB.wxXCkey=1
_(r,cOB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var tSB=_mz(z,'view',['bindtouchstart',0,'class',1,'data-event-opts',1,'style',2],[],e,s,gg)
var eTB=_mz(z,'scroll-view',['bindscrolltoupper',4,'class',1,'data-event-opts',2,'scrollIntoView',3,'scrollTop',4,'scrollWithAnimation',5,'scrollY',6,'upperThreshold',7],[],e,s,gg)
var bUB=_v()
_(eTB,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_mz(z,'view',['class',16,'id',1],[],oXB,xWB,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,18,oXB,xWB,gg)){o2B.wxVkey=1
var o4B=_n('view')
_rz(z,o4B,'class',19,oXB,xWB,gg)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,20,oXB,xWB,gg)){l5B.wxVkey=1
}
var a6B=_v()
_(o4B,a6B)
if(_oz(z,21,oXB,xWB,gg)){a6B.wxVkey=1
}
l5B.wxXCkey=1
a6B.wxXCkey=1
_(o2B,o4B)
}
var c3B=_v()
_(h1B,c3B)
if(_oz(z,22,oXB,xWB,gg)){c3B.wxVkey=1
var t7B=_v()
_(c3B,t7B)
if(_oz(z,23,oXB,xWB,gg)){t7B.wxVkey=1
var b9B=_n('view')
_rz(z,b9B,'class',24,oXB,xWB,gg)
var o0B=_v()
_(b9B,o0B)
if(_oz(z,25,oXB,xWB,gg)){o0B.wxVkey=1
}
var xAC=_v()
_(b9B,xAC)
if(_oz(z,26,oXB,xWB,gg)){xAC.wxVkey=1
}
var oBC=_v()
_(b9B,oBC)
if(_oz(z,27,oXB,xWB,gg)){oBC.wxVkey=1
}
var fCC=_v()
_(b9B,fCC)
if(_oz(z,28,oXB,xWB,gg)){fCC.wxVkey=1
}
o0B.wxXCkey=1
xAC.wxXCkey=1
oBC.wxXCkey=1
fCC.wxXCkey=1
_(t7B,b9B)
}
var e8B=_v()
_(c3B,e8B)
if(_oz(z,29,oXB,xWB,gg)){e8B.wxVkey=1
var cDC=_n('view')
_rz(z,cDC,'class',30,oXB,xWB,gg)
var hEC=_v()
_(cDC,hEC)
if(_oz(z,31,oXB,xWB,gg)){hEC.wxVkey=1
}
var oFC=_v()
_(cDC,oFC)
if(_oz(z,32,oXB,xWB,gg)){oFC.wxVkey=1
}
var cGC=_v()
_(cDC,cGC)
if(_oz(z,33,oXB,xWB,gg)){cGC.wxVkey=1
}
var oHC=_v()
_(cDC,oHC)
if(_oz(z,34,oXB,xWB,gg)){oHC.wxVkey=1
}
hEC.wxXCkey=1
oFC.wxXCkey=1
cGC.wxXCkey=1
oHC.wxXCkey=1
_(e8B,cDC)
}
t7B.wxXCkey=1
e8B.wxXCkey=1
}
o2B.wxXCkey=1
c3B.wxXCkey=1
_(fYB,h1B)
return fYB
}
bUB.wxXCkey=2
_2z(z,14,oVB,e,s,gg,bUB,'row','index','index')
_(tSB,eTB)
_(r,tSB)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var aJC=_v()
_(r,aJC)
var tKC=function(bMC,eLC,oNC,gg){
var oPC=_v()
_(oNC,oPC)
if(_oz(z,4,bMC,eLC,gg)){oPC.wxVkey=1
}
oPC.wxXCkey=1
return oNC
}
aJC.wxXCkey=2
_2z(z,2,tKC,e,s,gg,aJC,'row','index','index')
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var cUC=_n('view')
_rz(z,cUC,'class',0,e,s,gg)
var oVC=_v()
_(cUC,oVC)
if(_oz(z,1,e,s,gg)){oVC.wxVkey=1
}
var lWC=_v()
_(cUC,lWC)
if(_oz(z,2,e,s,gg)){lWC.wxVkey=1
}
oVC.wxXCkey=1
lWC.wxXCkey=1
_(r,cUC)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var tYC=_mz(z,'popup-layer',['bind:__l',0,'class',1,'data-ref',1,'direction',2,'style',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(r,tYC)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var o2C=_n('view')
_rz(z,o2C,'class',0,e,s,gg)
var x3C=_mz(z,'wuc-tab',['bind:__l',1,'bind:change',1,'bind:updateTabCur',2,'data-event-opts',3,'selectClass',4,'tabList',5,'tabClass',6,'tabCur',7,'textFlex',8,'vueId',9],[],e,s,gg)
_(o2C,x3C)
var o4C=_mz(z,'swiper',['bindchange',11,'class',1,'current',2,'data-event-opts',3,'duration',4],[],e,s,gg)
var f5C=_mz(z,'login',['bind:__l',16,'vueId',1],[],e,s,gg)
_(o4C,f5C)
var c6C=_mz(z,'register',['bind:__l',18,'vueId',1],[],e,s,gg)
_(o4C,c6C)
_(o2C,o4C)
_(r,o2C)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var o0C=_n('view')
_rz(z,o0C,'class',0,e,s,gg)
var lAD=_v()
_(o0C,lAD)
if(_oz(z,1,e,s,gg)){lAD.wxVkey=1
var tCD=_mz(z,'uni-list',['bind:__l',2,'vueId',1,'vueSlots',2],[],e,s,gg)
var eDD=_mz(z,'uni-list-item',['bind:__l',5,'bind:tap',1,'data-event-opts',2,'title',3,'vueId',4],[],e,s,gg)
_(tCD,eDD)
var bED=_mz(z,'uni-list-item',['bind:__l',10,'bind:tap',1,'data-event-opts',2,'title',3,'vueId',4],[],e,s,gg)
_(tCD,bED)
var oFD=_mz(z,'uni-list-item',['bind:__l',15,'bind:tap',1,'data-event-opts',2,'title',3,'vueId',4],[],e,s,gg)
_(tCD,oFD)
_(lAD,tCD)
}
var aBD=_v()
_(o0C,aBD)
if(_oz(z,20,e,s,gg)){aBD.wxVkey=1
}
lAD.wxXCkey=1
lAD.wxXCkey=3
aBD.wxXCkey=1
_(r,o0C)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var oHD=_n('view')
_rz(z,oHD,'class',0,e,s,gg)
var fID=_mz(z,'q-s-input',['bind:__l',1,'bind:input',1,'data-event-opts',2,'name',3,'title',4,'value',5,'variableName',6,'vueId',7],[],e,s,gg)
_(oHD,fID)
var cJD=_mz(z,'q-s-input',['bind:__l',9,'bind:input',1,'data-event-opts',2,'inputType',3,'name',4,'title',5,'value',6,'variableName',7,'vueId',8],[],e,s,gg)
_(oHD,cJD)
var hKD=_mz(z,'q-s-input',['bind:__l',18,'bind:input',1,'data-event-opts',2,'inputType',3,'name',4,'title',5,'value',6,'variableName',7,'vueId',8],[],e,s,gg)
_(oHD,hKD)
var oLD=_mz(z,'q-s-input',['bind:__l',27,'bind:input',1,'data-event-opts',2,'inputType',3,'name',4,'title',5,'value',6,'variableName',7,'vueId',8],[],e,s,gg)
_(oHD,oLD)
var cMD=_mz(z,'q-s-input',['bind:__l',36,'bind:input',1,'data-event-opts',2,'inputType',3,'name',4,'title',5,'value',6,'variableName',7,'vueId',8],[],e,s,gg)
_(oHD,cMD)
var oND=_mz(z,'q-s-input',['bind:__l',45,'bind:input',1,'data-event-opts',2,'inputType',3,'name',4,'title',5,'value',6,'variableName',7,'vueId',8],[],e,s,gg)
_(oHD,oND)
var lOD=_mz(z,'q-s-input',['bind:__l',54,'bind:input',1,'data-event-opts',2,'inputType',3,'name',4,'title',5,'value',6,'variableName',7,'vueId',8],[],e,s,gg)
_(oHD,lOD)
var aPD=_mz(z,'q-s-input',['bind:__l',63,'bind:input',1,'data-event-opts',2,'inputType',3,'name',4,'title',5,'value',6,'variableName',7,'vueId',8],[],e,s,gg)
_(oHD,aPD)
_(r,oHD)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var xUD=_n('view')
_rz(z,xUD,'class',0,e,s,gg)
var oVD=_v()
_(xUD,oVD)
if(_oz(z,1,e,s,gg)){oVD.wxVkey=1
}
var fWD=_v()
_(xUD,fWD)
if(_oz(z,2,e,s,gg)){fWD.wxVkey=1
}
oVD.wxXCkey=1
fWD.wxXCkey=1
_(r,xUD)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/healthdata/healthdata","pages/index/index","pages/medical/medical","pages/doctorDetail/doctorDetail","pages/user/user","pages/detail/detail","pages/loginRegister/loginRegister","pages/person/person","pages/messagelist/messagelist","pages/messagelist/messagelist","pages/HM-chat/HM-chat","pages/HM-chat/HM-details/HM-details","pages/HM-chat/HM-hand/HM-hand","pages/doctorlist/doctorlist","pages/tongueDiagnosis/tongueDiagnosis","pages/tongueResult/tongueResult","pages/personInfo/personInfo","pages/personInfoShow/personInfoShow"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"健康悠享","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#000000","selectedColor":"#40A9FF","list":[{"pagePath":"pages/healthdata/healthdata","iconPath":"static/icons/chart.png","selectedIconPath":"static/icons/chartSelected.png","text":"健康"},{"pagePath":"pages/index/index","iconPath":"static/icons/knowledge.png","selectedIconPath":"static/icons/knowledgeSelected.png","text":"知识"},{"pagePath":"pages/doctorlist/doctorlist","iconPath":"static/icons/medical.png","selectedIconPath":"static/icons/medicalSelected.png","text":"问诊"},{"pagePath":"pages/person/person","iconPath":"static/icons/person.png","selectedIconPath":"static/icons/personSelected.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"健康悠享","compilerVersion":"2.4.2","usingComponents":{"q-s-input":"/components/QS-inputs-split/elements/QS-input/index"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/login.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/login.wxml']=$gwx('./components/login.wxml');

__wxAppCode__['components/popup-layer/popup-layer.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/popup-layer/popup-layer.wxml']=$gwx('./components/popup-layer/popup-layer.wxml');

__wxAppCode__['components/QS-inputs-split/elements/QS-input/index.json']={"usingComponents":{"uni-icon":"/components/QS-inputs-split/uniIcons/uni-icons","q-stemplate":"/components/QS-inputs-split/template/template"},"component":true};
__wxAppCode__['components/QS-inputs-split/elements/QS-input/index.wxml']=$gwx('./components/QS-inputs-split/elements/QS-input/index.wxml');

__wxAppCode__['components/QS-inputs-split/template/template.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/QS-inputs-split/template/template.wxml']=$gwx('./components/QS-inputs-split/template/template.wxml');

__wxAppCode__['components/QS-inputs-split/uniIcons/uni-icons.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/QS-inputs-split/uniIcons/uni-icons.wxml']=$gwx('./components/QS-inputs-split/uniIcons/uni-icons.wxml');

__wxAppCode__['components/register.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/register.wxml']=$gwx('./components/register.wxml');

__wxAppCode__['components/uni-badge/uni-badge.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-badge/uni-badge.wxml']=$gwx('./components/uni-badge/uni-badge.wxml');

__wxAppCode__['components/uni-icons/uni-icons.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-icons/uni-icons.wxml']=$gwx('./components/uni-icons/uni-icons.wxml');

__wxAppCode__['components/uni-list-item/uni-list-item.json']={"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons","uni-badge":"/components/uni-badge/uni-badge"},"component":true};
__wxAppCode__['components/uni-list-item/uni-list-item.wxml']=$gwx('./components/uni-list-item/uni-list-item.wxml');

__wxAppCode__['components/uni-list/uni-list.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-list/uni-list.wxml']=$gwx('./components/uni-list/uni-list.wxml');

__wxAppCode__['components/wuc-tab/wuc-tab.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/wuc-tab/wuc-tab.wxml']=$gwx('./components/wuc-tab/wuc-tab.wxml');

__wxAppCode__['pages/detail/detail.json']={"usingComponents":{}};
__wxAppCode__['pages/detail/detail.wxml']=$gwx('./pages/detail/detail.wxml');

__wxAppCode__['pages/doctorDetail/doctorDetail.json']={"navigationBarTitleText":"医生详情","usingComponents":{}};
__wxAppCode__['pages/doctorDetail/doctorDetail.wxml']=$gwx('./pages/doctorDetail/doctorDetail.wxml');

__wxAppCode__['pages/doctorlist/doctorlist.json']={"usingComponents":{}};
__wxAppCode__['pages/doctorlist/doctorlist.wxml']=$gwx('./pages/doctorlist/doctorlist.wxml');

__wxAppCode__['pages/healthdata/healthdata.json']={"usingComponents":{"popup-layer":"/components/popup-layer/popup-layer"}};
__wxAppCode__['pages/healthdata/healthdata.wxml']=$gwx('./pages/healthdata/healthdata.wxml');

__wxAppCode__['pages/HM-chat/HM-chat.json']={"navigationBarTitleText":"看到我就知道你没设置title","navigationBarBackgroundColor":"#f2f2f2","backgroundColorTop":"#e5e5e5","backgroundColorBottom":"#e5e5e5","softinputNavBar":"none","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/HM-chat/HM-chat.wxml']=$gwx('./pages/HM-chat/HM-chat.wxml');

__wxAppCode__['pages/HM-chat/HM-details/HM-details.json']={"navigationBarBackgroundColor":"#cf3c35","navigationBarTextStyle":"white","navigationBarTitleText":"红包","backgroundColorTop":"#cf3c35","backgroundColorBottom":"#fff","usingComponents":{}};
__wxAppCode__['pages/HM-chat/HM-details/HM-details.wxml']=$gwx('./pages/HM-chat/HM-details/HM-details.wxml');

__wxAppCode__['pages/HM-chat/HM-hand/HM-hand.json']={"navigationBarBackgroundColor":"#cf3c35","navigationBarTextStyle":"white","navigationBarTitleText":"发红包","backgroundColorTop":"#cf3c35","backgroundColorBottom":"#fff","softinputNavBar":"none","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/HM-chat/HM-hand/HM-hand.wxml']=$gwx('./pages/HM-chat/HM-hand/HM-hand.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/loginRegister/loginRegister.json']={"usingComponents":{"wuc-tab":"/components/wuc-tab/wuc-tab","login":"/components/login","register":"/components/register"}};
__wxAppCode__['pages/loginRegister/loginRegister.wxml']=$gwx('./pages/loginRegister/loginRegister.wxml');

__wxAppCode__['pages/medical/medical.json']={"usingComponents":{}};
__wxAppCode__['pages/medical/medical.wxml']=$gwx('./pages/medical/medical.wxml');

__wxAppCode__['pages/messagelist/messagelist.json']={"navigationBarTitleText":"消息列表","usingComponents":{}};
__wxAppCode__['pages/messagelist/messagelist.wxml']=$gwx('./pages/messagelist/messagelist.wxml');

__wxAppCode__['pages/person/person.json']={"usingComponents":{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}};
__wxAppCode__['pages/person/person.wxml']=$gwx('./pages/person/person.wxml');

__wxAppCode__['pages/personInfo/personInfo.json']={"usingComponents":{"q-s-input":"/components/QS-inputs-split/elements/QS-input/index"}};
__wxAppCode__['pages/personInfo/personInfo.wxml']=$gwx('./pages/personInfo/personInfo.wxml');

__wxAppCode__['pages/personInfoShow/personInfoShow.json']={"usingComponents":{}};
__wxAppCode__['pages/personInfoShow/personInfoShow.wxml']=$gwx('./pages/personInfoShow/personInfoShow.wxml');

__wxAppCode__['pages/tongueDiagnosis/tongueDiagnosis.json']={"usingComponents":{}};
__wxAppCode__['pages/tongueDiagnosis/tongueDiagnosis.wxml']=$gwx('./pages/tongueDiagnosis/tongueDiagnosis.wxml');

__wxAppCode__['pages/tongueResult/tongueResult.json']={"usingComponents":{}};
__wxAppCode__['pages/tongueResult/tongueResult.wxml']=$gwx('./pages/tongueResult/tongueResult.wxml');

__wxAppCode__['pages/user/user.json']={"usingComponents":{}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"2c01":function(e,t,n){"use strict";n.r(t);var o=n("adc4");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("5f63");var u,a,i=n("2877"),c=Object(i["a"])(o["default"],u,a,!1,null,null,null);t["default"]=c.exports},4297:function(e,t,n){},"5f63":function(e,t,n){"use strict";var o=n("4297"),r=n.n(o);r.a},"7aa8":function(e,t,n){"use strict";(function(e){n("aeaa"),n("921b");var t=a(n("66fd")),o=a(n("2c01")),r=a(n("5f65")),u=a(n("a3ab"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.prototype.$validate=u.default,t.default.config.productionTip=!1,t.default.prototype.$store=r.default;var l=function(){return Promise.all([n.e("common/vendor"),n.e("components/QS-inputs-split/elements/QS-input/index")]).then(n.bind(null,"940c"))};t.default.component("QSInput",l),o.default.mpType="app";var f=new t.default(i({},o.default));e(f).$mount()}).call(this,n("6e42")["createApp"])},adc4:function(e,t,n){"use strict";n.r(t);var o=n("fe9f"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=r.a},fe9f:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,u=n("2f62");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={methods:a({},(0,u.mapMutations)(["changeStepNumber"])),onLaunch:function(){r=this,console.log(e("App Launch"," at App.vue:10")),setTimeout(function(){o.setTabBarBadge({index:1,text:"31"}),o.showTabBarRedDot({index:3})},1e3);var t=o.requireNativePlugin("DC-StepCounter"),n=o.requireNativePlugin("globalEvent");n.addEventListener("StepCounter_Ready",function(e){setInterval(function(){t.getCurrentTimeSportStep(function(e){r.changeStepNumber(e)})},2e3)}),t.initialize()},onShow:function(){console.log(e("App Show"," at App.vue:37"))},onHide:function(){console.log(e("App Hide"," at App.vue:40"))}};t.default=c}).call(this,n("0de9")["default"],n("6e42")["default"])}},[["7aa8","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var o, i, u = n[0], p = n[1], c = n[2], l = 0, a = []; l < u.length; l++) {
      i = u[l], r[i] && a.push(r[i][0]), r[i] = 0;
    }

    for (o in p) {
      Object.prototype.hasOwnProperty.call(p, o) && (e[o] = p[o]);
    }

    m && m(n);

    while (a.length) {
      a.shift()();
    }

    return s.push.apply(s, c || []), t();
  }

  function t() {
    for (var e, n = 0; n < s.length; n++) {
      for (var t = s[n], o = !0, i = 1; i < t.length; i++) {
        var u = t[i];
        0 !== r[u] && (o = !1);
      }

      o && (s.splice(n--, 1), e = p(p.s = t[0]));
    }

    return e;
  }

  var o = {},
      i = {
    "common/runtime": 0
  },
      r = {
    "common/runtime": 0
  },
      s = [];

  function u(e) {
    return p.p + "" + e + ".js";
  }

  function p(n) {
    if (o[n]) return o[n].exports;
    var t = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, p), t.l = !0, t.exports;
  }

  p.e = function (e) {
    var n = [],
        t = {
      "components/QS-inputs-split/elements/QS-input/index": 1,
      "components/popup-layer/popup-layer": 1,
      "components/login": 1,
      "components/register": 1,
      "components/wuc-tab/wuc-tab": 1,
      "components/uni-list-item/uni-list-item": 1,
      "components/uni-list/uni-list": 1,
      "components/QS-inputs-split/template/template": 1,
      "components/QS-inputs-split/uniIcons/uni-icons": 1,
      "components/uni-badge/uni-badge": 1,
      "components/uni-icons/uni-icons": 1
    };
    i[e] ? n.push(i[e]) : 0 !== i[e] && t[e] && n.push(i[e] = new Promise(function (n, t) {
      for (var o = ({
        "components/QS-inputs-split/elements/QS-input/index": "components/QS-inputs-split/elements/QS-input/index",
        "components/popup-layer/popup-layer": "components/popup-layer/popup-layer",
        "components/login": "components/login",
        "components/register": "components/register",
        "components/wuc-tab/wuc-tab": "components/wuc-tab/wuc-tab",
        "components/uni-list-item/uni-list-item": "components/uni-list-item/uni-list-item",
        "components/uni-list/uni-list": "components/uni-list/uni-list",
        "components/QS-inputs-split/template/template": "components/QS-inputs-split/template/template",
        "components/QS-inputs-split/uniIcons/uni-icons": "components/QS-inputs-split/uniIcons/uni-icons",
        "components/uni-badge/uni-badge": "components/uni-badge/uni-badge",
        "components/uni-icons/uni-icons": "components/uni-icons/uni-icons"
      }[e] || e) + ".wxss", r = p.p + o, s = document.getElementsByTagName("link"), u = 0; u < s.length; u++) {
        var c = s[u],
            l = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (l === o || l === r)) return n();
      }

      var a = document.getElementsByTagName("style");

      for (u = 0; u < a.length; u++) {
        c = a[u], l = c.getAttribute("data-href");
        if (l === o || l === r) return n();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = n, m.onerror = function (n) {
        var o = n && n.target && n.target.src || r,
            s = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        s.request = o, delete i[e], m.parentNode.removeChild(m), t(s);
      }, m.href = r;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(m);
    }).then(function () {
      i[e] = 0;
    }));
    var o = r[e];
    if (0 !== o) if (o) n.push(o[2]);else {
      var s = new Promise(function (n, t) {
        o = r[e] = [n, t];
      });
      n.push(o[2] = s);
      var c,
          l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, p.nc && l.setAttribute("nonce", p.nc), l.src = u(e), c = function c(n) {
        l.onerror = l.onload = null, clearTimeout(a);
        var t = r[e];

        if (0 !== t) {
          if (t) {
            var o = n && ("load" === n.type ? "missing" : n.type),
                i = n && n.target && n.target.src,
                s = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + i + ")");
            s.type = o, s.request = i, t[1](s);
          }

          r[e] = void 0;
        }
      };
      var a = setTimeout(function () {
        c({
          type: "timeout",
          target: l
        });
      }, 12e4);
      l.onerror = l.onload = c, document.head.appendChild(l);
    }
    return Promise.all(n);
  }, p.m = e, p.c = o, p.d = function (e, n, t) {
    p.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, p.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, p.t = function (e, n) {
    if (1 & n && (e = p(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (p.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      p.d(t, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return t;
  }, p.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return p.d(n, "a", n), n;
  }, p.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, p.p = "/", p.oe = function (e) {
    throw console.error(e), e;
  };
  var c = global["webpackJsonp"] = global["webpackJsonp"] || [],
      l = c.push.bind(c);
  c.push = n, c = c.slice();

  for (var a = 0; a < c.length; a++) {
    n(c[a]);
  }

  var m = l;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"02a5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__7FFDB83"};e.default=r},"04da":function(t,e,n){"use strict";(function(t){function n(e){console.log(t(e," at components\\QS-inputs-split\\config\\js\\log.js:6"))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n}).call(this,n("0de9")["default"])},"0627":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/healthdata/healthdata":{},"pages/index/index":{},"pages/medical/medical":{},"pages/doctorDetail/doctorDetail":{navigationBarTitleText:"医生详情"},"pages/user/user":{},"pages/detail/detail":{},"pages/loginRegister/loginRegister":{},"pages/person/person":{},"pages/messagelist/messagelist":{navigationBarTitleText:"消息列表",usingComponents:{}},"pages/HM-chat/HM-chat":{navigationBarTitleText:"看到我就知道你没设置title",navigationBarBackgroundColor:"#f2f2f2",backgroundColorTop:"#e5e5e5",backgroundColorBottom:"#e5e5e5",softinputNavBar:"none",bounce:"none"},"pages/HM-chat/HM-details/HM-details":{navigationBarBackgroundColor:"#cf3c35",navigationBarTextStyle:"white",navigationBarTitleText:"红包",backgroundColorTop:"#cf3c35",backgroundColorBottom:"#fff"},"pages/HM-chat/HM-hand/HM-hand":{navigationBarBackgroundColor:"#cf3c35",navigationBarTextStyle:"white",navigationBarTitleText:"发红包",backgroundColorTop:"#cf3c35",backgroundColorBottom:"#fff",softinputNavBar:"none",bounce:"none"},"pages/doctorlist/doctorlist":{},"pages/tongueDiagnosis/tongueDiagnosis":{},"pages/tongueResult/tongueResult":{},"pages/personInfo/personInfo":{},"pages/personInfoShow/personInfoShow":{}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"健康悠享",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};e.default=r},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(i){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),a="";if(i.length>1){var o=i.pop();a=i.join("---COMMA---"),0===o.indexOf(" at ")?a+=o:a+="---COMMA---"+o}else a=i[0];return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"1b05":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.getSendData=a,e.getAsyncDataFc=o;var r=i(n("04da"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){var e,n,i=t.value,a=t.launch,o=t.customId,s=t.index,l=t.linkageNum,c=(t.type,t.datas),u=t.column,h=c.data_0,f=c.data_1;switch(o){case"自定义标识":e="",n="";break;default:e="value",n="value";break}var p={};switch(l){case 2:p.id=h[i[0]][e];break;case 3:if(a||0===s)switch(u){case 0:p.id=h[i[0]][e];break;case 1:p.id=f[0][n];break;default:(0,r.default)("column 超限");break}else p.id=f[i[1]][n];break;default:(0,r.default)("级数不存在");break}return p}function o(e){return new Promise(function(n,r){t.showLoading({title:"获取数据中……"}),setTimeout(function(){var r;switch(e.id){case"a":r=[{name:"a_a",value:"a_a"},{name:"a_b",value:"a_b"}];break;case"b":r=[{name:"b_a",value:"b_a"},{name:"b_b",value:"b_b"}];break;case"c":r=[{name:"c_a",value:"c_a"},{name:"c_b",value:"c_b"}];break;case"a_a":r=[{name:"a_a_a",value:"a_a_a"},{name:"a_a_b",value:"a_a_b"}];break;case"a_b":r=[{name:"a_b_a",value:"a_b_a"},{name:"a_b_b",value:"a_b_b"}];break;case"b_a":r=[{name:"b_a_a",value:"b_a_a"},{name:"b_a_b",value:"b_a_b"}];break;case"b_b":r=[{name:"b_b_a",value:"b_b_a"},{name:"b_b_b",value:"b_b_b"}];break;case"c_a":r=[{name:"c_a_a",value:"c_a_a"},{name:"c_a_b",value:"c_a_b"}];break;case"c_b":r=[{name:"c_b_a",value:"c_b_a"},{name:"c_b_b",value:"c_b_b"}];break;default:break}n(r),t.hideLoading()},1e3)})}}).call(this,n("6e42")["default"])},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,a,o,s){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return O}),n.d(e,"mapState",function(){return D}),n.d(e,"mapMutations",function(){return $}),n.d(e,"mapGetters",function(){return L}),n.d(e,"mapActions",function(){return C}),n.d(e,"createNamespacedHelpers",function(){return F});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},i="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function a(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){i.emit("vuex:mutation",t,e)}))}function o(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},u={namespaced:{configurable:!0}};u.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){o(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,u);var h=function(t){this.register([],t,!1)};function f(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;f(t.concat(r),e.getChild(r),n.modules[r])}}h.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},h.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},h.prototype.update=function(t){f([],this.root,t)},h.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new c(e,n);if(0===t.length)this.root=i;else{var a=this.get(t.slice(0,-1));a.addChild(t[t.length-1],i)}e.modules&&o(e.modules,function(e,i){r.register(t.concat(i),e,n)})},h.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var p;var d=function(t){var e=this;void 0===t&&(t={}),!p&&"undefined"!==typeof window&&window.Vue&&O(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.state;void 0===i&&(i={}),"function"===typeof i&&(i=i()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new h(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new p;var o=this,s=this,l=s.dispatch,c=s.commit;this.dispatch=function(t,e){return l.call(o,t,e)},this.commit=function(t,e,n){return c.call(o,t,e,n)},this.strict=r,m(this,i,[],this._modules.root),x(this,i),n.forEach(function(t){return t(e)}),p.config.devtools&&a(this)},v={state:{configurable:!0}};function g(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;m(t,n,[],t._modules.root,!0),x(t,n,e)}function x(t,e,n){var r=t._vm;t.getters={};var i=t._wrappedGetters,a={};o(i,function(e,n){a[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=p.config.silent;p.config.silent=!0,t._vm=new p({data:{$$state:e},computed:a}),p.config.silent=s,t.strict&&k(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),p.nextTick(function(){return r.$destroy()}))}function m(t,e,n,r,i){var a=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o]=r),!a&&!i){var s=T(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){p.set(s,l,r.state)})}var c=r.context=_(t,o,n);r.forEachMutation(function(e,n){var r=o+n;w(t,r,e,c)}),r.forEachAction(function(e,n){var r=e.root?n:o+n,i=e.handler||e;S(t,r,i,c)}),r.forEachGetter(function(e,n){var r=o+n;A(t,r,e,c)}),r.forEachChild(function(r,a){m(t,e,n.concat(a),r,i)})}function _(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var a=P(n,r,i),o=a.payload,s=a.options,l=a.type;return s&&s.root||(l=e+l),t.dispatch(l,o)},commit:r?t.commit:function(n,r,i){var a=P(n,r,i),o=a.payload,s=a.options,l=a.type;s&&s.root||(l=e+l),t.commit(l,o,s)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return T(t.state,n)}}}),i}function b(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var a=i.slice(r);Object.defineProperty(n,a,{get:function(){return t.getters[i]},enumerable:!0})}}),n}function w(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(e){n.call(t,r.state,e)})}function S(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(e,i){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,i);return l(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):a})}function A(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function k(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function T(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function P(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function O(t){p&&t===p||(p=t,r(p))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},d.prototype.commit=function(t,e,n){var r=this,i=P(t,e,n),a=i.type,o=i.payload,s=(i.options,{type:a,payload:o}),l=this._mutations[a];l&&(this._withCommit(function(){l.forEach(function(t){t(o)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},d.prototype.dispatch=function(t,e){var n=this,r=P(t,e),i=r.type,a=r.payload,o={type:i,payload:a},s=this._actions[i];if(s)return this._actionSubscribers.forEach(function(t){return t(o,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(a)})):s[0](a)},d.prototype.subscribe=function(t){return g(t,this._subscribers)},d.prototype.subscribeAction=function(t){return g(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),m(this,this.state,t,this._modules.get(t),n.preserveState),x(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=T(e.state,t.slice(0,-1));p.delete(n,t[t.length-1])}),y(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,v);var D=R(function(t,e){var n={};return j(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=M(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0}),n}),$=R(function(t,e){var n={};return j(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var a=M(this.$store,"mapMutations",t);if(!a)return;r=a.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),L=R(function(t,e){var n={};return j(e).forEach(function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||M(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0}),n}),C=R(function(t,e){var n={};return j(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var a=M(this.$store,"mapActions",t);if(!a)return;r=a.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),F=function(t){return{mapState:D.bind(null,t),mapGetters:L.bind(null,t),mapMutations:$.bind(null,t),mapActions:C.bind(null,t)}};function j(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function R(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function M(t,e,n){var r=t._modulesNamespaceMap[n];return r}var E={Store:d,install:O,version:"3.0.1",mapState:D,mapMutations:$,mapGetters:L,mapActions:C,createNamespacedHelpers:F};e["default"]=E},3079:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={baseUrl:"",upLoadImg:""};e.default=r},"42c5":function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=f(n("a34a")),a=f(n("04da")),o=n("1b05"),s=(f(n("3079")),n("43cb")),l=n("70af"),c=f(n("992e")),u=n("ddca"),h=f(n("b2f2"));function f(t){return t&&t.__esModule?t:{default:t}}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){d(t,e,n[e])})}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){return x(t)||y(t)||g()}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function y(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function x(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function m(t,e,n,r,i,a,o){try{var s=t[a](o),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(r,i)}function _(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function o(t){m(a,r,i,o,s,"next",t)}function s(t){m(a,r,i,o,s,"throw",t)}o(void 0)})}}var b=t.getSystemInfoSync(),w=function(){var t=_(i.default.mark(function t(e){var n,r,s,l,c,u,h,f,d,g,y,x;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=this,n.waiting=!0,e.linkageNum=Number(e.linkageNum),r=e.value,s=e.index,l=e.launch,c=e.datas,e.oldValue,e.customId,u=e.linkageNum,c.data_0,c.data_1,h={},t.prev=6,t.t0=u,t.next=2===t.t0?10:3===t.t0?22:85;break;case 10:if(!n.memoryData_1[r[0]]){t.next=14;break}n.async_1=v(n.memoryData_1[r[0]]),t.next=20;break;case 14:return h=(0,o.getSendData)(e),t.next=17,(0,o.getAsyncDataFc)(h);case 17:f=t.sent,n.async_1=v(f),n.memoryData_1[r[0]]=v(f);case 20:return n.value[1]=l?r[1]:0,t.abrupt("break",85);case 22:if(!l){t.next=40;break}return h=(0,o.getSendData)(p({},e,{column:0})),t.next=26,(0,o.getAsyncDataFc)(h);case 26:return d=t.sent,n.async_1=v(d),n.memoryData_1[r[0]]=v(d),n.value[1]=r[1],h=(0,o.getSendData)(p({},e,{datas:p({},c,{data_1:v(d)}),column:1})),t.next=33,(0,o.getAsyncDataFc)(h);case 33:g=t.sent,n.async_2=v(g),n.memoryData_2[r[0]]||(n.memoryData_2[r[0]]=[]),n.memoryData_2[r[0]][r[1]]=v(g),n.value[2]=r[2],t.next=84;break;case 40:t.t1=s,t.next=0===t.t1?43:1===t.t1?67:83;break;case 43:if(!n.memoryData_1[r[0]]){t.next=47;break}y=v(n.memoryData_1[r[0]]),t.next=52;break;case 47:return h=(0,o.getSendData)(p({},e,{column:0})),t.next=50,(0,o.getAsyncDataFc)(h);case 50:y=t.sent,n.memoryData_1[r[0]]=v(y);case 52:if(n.async_1=v(y),n.value[1]=0,n.memoryData_2[r[0]]||(n.memoryData_2[r[0]]=[]),!n.memoryData_2[r[0]][r[1]]){t.next=59;break}x=v(n.memoryData_2[r[0]][r[1]]),t.next=64;break;case 59:return h=(0,o.getSendData)(p({},e,{datas:p({},c,{data_1:v(y)}),column:1})),t.next=62,(0,o.getAsyncDataFc)(h);case 62:x=t.sent,n.memoryData_2[r[0]][r[1]]=v(x);case 64:return n.async_2=v(x),n.value[2]=0,t.abrupt("break",84);case 67:if((0,a.default)("第二列更改"),n.memoryData_2[r[0]]||(n.memoryData_2[r[0]]=[]),!n.memoryData_2[r[0]][r[1]]){t.next=74;break}(0,a.default)("有记忆数据"),x=v(n.memoryData_2[r[0]][r[1]]),t.next=80;break;case 74:return(0,a.default)("没有记忆数据"),h=(0,o.getSendData)(e),t.next=78,(0,o.getAsyncDataFc)(h);case 78:x=t.sent,n.memoryData_2[r[0]][r[1]]=v(x);case 80:return n.async_2=v(x),n.value[2]=0,t.abrupt("break",84);case 83:return t.abrupt("break",84);case 84:return t.abrupt("break",85);case 85:n.oldValue=v(this.value),n.waiting=!1,t.next=94;break;case 89:t.prev=89,t.t2=t["catch"](6),(0,a.default)("picker async 异常: ".concat(JSON.stringify(t.t2))),n.oldValue=v(this.value),n.waiting=!1;case 94:case"end":return t.stop()}},t,this,[[6,89]])}));return function(e){return t.apply(this,arguments)}}(),S=function(t){return t instanceof Array},A=function(t){return t instanceof Array&&t.length>0},k=d({input:"input",radio:"radio",checkbox:"checkbox",textarea:"textarea",picker_date:"picker_date",picker_city:"picker_city",picker_custom:"picker_custom",picker_custom2:"picker_custom2",pics:"pics",infinitePics:"infinitePics"},"switch","switch"),T={log:a.default,typeObj:k,UpLoadFile:l.UpLoadFile,pics_splice:l.pics_splice,sendSMS:c.default,verifyTypeObj:s.verifyTypeObj,filterTypeObj:s.filterTypeObj,inputCustomTapFc:s.inputCustomTapFc,inputCustomTapCatchFc:s.inputCustomTapCatchFc,Sys:b,getPickerAsyncData:w,isArray:S,isArrayAndHasLength:A,showToast:function(e,n){t.showToast({title:e,icon:n||"none"})},regTest:function(t,e){return s.verifyTypeObj[t].reg.test(e)},isNumber:function(t){return"number"===typeof t},countDays:function(t,e,n,r){var i=[];return r>=6&&(i=new Date(t,e+1,0).getDate(),n&&(n[2]=n[2]<i-1?n[2]:i-1)),{days:i,val:n}},countYears:function(t,e){for(var n=[],r=e-t,i=0;i<=r;i++)n.push(t+i);return n},hideLoading:function(){t.hideLoading()},showLoading:function(e,n){t.showLoading({title:e,mask:n||!1})},previewImage:function(e,n){e instanceof Array||(e=[e]),t.previewImage({urls:e,current:n||0})},filterParams:function(t,e,n){if(0===t.length)return{};var r=getParamsArray(e);if(t.length>1){var i={};return Object.keys(t).forEach(function(e,n){i[r[n]]=t[n]}),i}if(t[0]instanceof Object){if(n){for(var a=Object.keys(t[0]),o=0;o<a.length;o++)if(r.includes(a[o]))return t[0];return d({},r[0],t[0])}return t[0]}return d({},r[0],t[0])},formatNum:function(t){return t<10?"0"+t:t},getUpLoadPromiseArray:function(e){var n=e.itemArray,r=e.customId,i=e.upLoadData,a=e.required;if(0===n.length&&a)return Promise.reject(p({},u.errObj["102"],{errMsg:"上传图片长度为零"}));for(var o=[],s=0;s<n.length;s++){var c=n[s];if(c.path)o.push((0,l.UpLoadFile)(r,c.path,i));else{if(c.required){var h="".concat(c.title||"第".concat(s,"张图片"),"不能为空");return t.showToast({title:h,icon:"none"}),Promise.reject(p({},u.errObj["102"],{errMsg:h}))}o.push(Promise.resolve(""))}}return new Promise(function(e,r){var i=v(n);t.showLoading({title:"上传文件中"}),Promise.all(o).then(function(n){t.hideLoading();for(var r=0;r<i.length;r++)i[r].upLoadResult=n[r];e(i)}).catch(function(e){t.hideLoading(),r(e)})})},delForm:function(t){h.default.del(t)},setForm:function(t){h.default.set(t)},getForm:function(t){var e=h.default.get({name:t}),n=e.status,a=e.result;return"success"===n?new Promise(function(){var e=_(i.default.mark(function e(n,r){var o,s;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,o=a.data,e.t0=p,e.t1={name:t},e.next=6,D(o);case 6:e.t2=e.sent,s=(0,e.t0)(e.t1,e.t2),n(s),e.next=14;break;case 11:e.prev=11,e.t3=e["catch"](0),r(e.t3);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(t,n){return e.apply(this,arguments)}}()):(console.log(r(3," at components\\QS-inputs-split\\js\\app.js:325")),Promise.reject(a))}},P=T;e.default=P;var O={required:"required",verifyFc:"verifyFc",verifyType:"verifyType"};function D(t){var e={data:{},verifyErr:[]};return new Promise(function(){var n=_(i.default.mark(function n(r,a){var o,l,c,u,h,f,p,d,v,g,y,x,m,_;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:n.prev=0,n.t0=i.default.keys(t);case 2:if((n.t1=n.t0()).done){n.next=46;break}o=n.t1.value,l=t[o],c=l.title,u=l.name,h=l.variableName,f=l.value,p=l.type,d=l.required,v=l.verifyFc,g=l.verifyType,y=l.customId,x=l.upLoadData,m={result:!0,checkErrType:[],title:c,name:u,variableName:h,type:p,errItemArray:[]},e.data[o]=f,n.t2=p,n.next=n.t2===k.input?10:n.t2===k.textarea?14:n.t2===k.pics?18:n.t2===k.infinitePics?33:41;break;case 10:return d&&$(f)&&(m.result=!1,m.checkErrType.push(O.required)),v&&!v(f)&&(m.result&&(m.result=!1),m.checkErrType.push(O.verifyFc)),g&&void 0!==s.verifyTypeObj[g]&&s.verifyTypeObj[g].reg&&!s.verifyTypeObj[g].reg.test(f)&&(m.result&&(m.result=!1),m.checkErrType.push(O.verifyType)),n.abrupt("break",43);case 14:return d&&$(f)&&(m.result=!1,m.checkErrType.push(O.required)),v&&!v(f)&&(m.result&&(m.result=!1),m.checkErrType.push(O.verifyFc)),g&&void 0!==s.verifyTypeObj[g]&&s.verifyTypeObj[g].reg&&!s.verifyTypeObj[g].reg.test(f)&&(m.result&&(m.result=!1),m.checkErrType.push(O.verifyType)),n.abrupt("break",43);case 18:if(!A(f)){n.next=31;break}if(_=f.filter(function(t){return!t.path&&t.required}),!(_.length>0)){n.next=26;break}m.result&&(m.result=!1),m.checkErrType.push(O.required),m.errItemArray=_,n.next=29;break;case 26:return n.next=28,T.getUpLoadPromiseArray({itemArray:f,customId:y,upLoadData:x});case 28:e.data[o]=n.sent;case 29:n.next=32;break;case 31:e.data[o]=[];case 32:return n.abrupt("break",43);case 33:if(!A(f)){n.next=39;break}return n.next=36,T.getUpLoadPromiseArray({itemArray:f,customId:y,upLoadData:x});case 36:e.data[o]=n.sent,n.next=40;break;case 39:d?m.result&&(m.result=!1):e.data[o]=[];case 40:return n.abrupt("break",43);case 41:return d&&$(f)&&(m.result=!1,m.checkErrType.push(O.required)),n.abrupt("break",43);case 43:m.result||e.verifyErr.push(m),n.next=2;break;case 46:r(e),n.next=52;break;case 49:n.prev=49,n.t3=n["catch"](0),a(n.t3);case 52:case"end":return n.stop()}},n,this,[[0,49]])}));return function(t,e){return n.apply(this,arguments)}}())}function $(t){var e;switch(typeof t){case"object":t instanceof Array&&(e=0===t.length);break;default:e=""===t;break}return void 0===t||null===t||e}}).call(this,n("6e42")["default"],n("0de9")["default"])},"43cb":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.inputCustomTapFc=a,e.inputCustomTapCatchFc=o,e.verifyTypeObj=e.filterTypeObj=void 0;var r=i(n("04da"));function i(t){return t&&t.__esModule?t:{default:t}}function a(e){return new Promise(function(n,i){switch(e){case"自定义id":break;default:t.scanCode({success:function(t){(0,r.default)("条码类型："+t.scanType),(0,r.default)("条码内容："+t.result),n(t.result)}});break}})}function o(t,e){return new Promise(function(e,n){switch(t){case"自定义id":break;default:break}})}var s={twoDecimalPlaces:function(t){return t=t.replace(/[^\d.]/g,""),t=t.replace(/\.{2,}/g,"."),t=t.replace(/^(\-)*(\d+)\.(\d).*$/,"$1$2.$3"),t}};e.filterTypeObj=s;var l={Tel:{reg:/^[1][0-9]{10}$/,name:"手机号"},Email:{reg:/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/,name:"电子邮箱"},idCart:{reg:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,name:"身份证号"},NationalNumber:{reg:/\d{3}-\d{8}|\d{4}-\d{7}/,name:"国内号码"},QQ:{reg:/[1-9][0-9]{4,}/,name:"QQ号"},PostalCode:{reg:/[1-9]\d{5}(?!\d)/,name:"邮政编码"},IpAddress:{reg:/\d+\.\d+\.\d+\.\d+/,name:"IP地址"},Chinese:{reg:/[\u4e00-\u9fa5]/,name:"中文字符"},Char:{reg:/^[A-Za-z]+$/,name:"英文字母"},Int:{reg:/^\d+$/,name:"整数"},Number:{reg:/^([1-9]\d*(\.\d+)?)|(\d+(\.\d+))$/,name:"数字"}};e.verifyTypeObj=l}).call(this,n("6e42")["default"])},"5cc5":function(t,e,n){"use strict";(function(e,n){var r={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:[10,10,10,10],pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarLabelTextMargin:15,gaugeLabelTextMargin:15},i=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];function i(t,e){for(var n in e)t[n]=t[n]&&"[object Object]"===t[n].toString()?i(t[n],e[n]):t[n]=e[n];return t}if(null==t)throw new TypeError("Cannot convert undefined or null to object");return!n||0>=n.length?t:(n.forEach(function(e){t=i(t,e)}),t)},a={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return 0!=t%1},approximatelyEqual:function(t,e){return 1e-10>Math.abs(t-e)},isSameSign:function(t,e){var n=Math.abs;return n(t)===t&&n(e)===e||n(t)!==t&&n(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height;var n=e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y;return!n}};function o(t,e){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=t.replace(n,function(t,e,n,r){return e+e+n+n+r+r}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),a=parseInt(i[1],16),o=parseInt(i[2],16),s=parseInt(i[3],16);return"rgba("+a+","+o+","+s+","+e+")"}function s(t,e,n){if(isNaN(t))throw new Error("[uCharts] unvalid series data!");n=n||10,e=e||"upper";for(var r=1;1>n;)n*=10,r*=10;for(t="upper"===e?Math.ceil(t*r):Math.floor(t*r);0!=t%n;)"upper"===e?t++:t--;return t/r}function l(t,e,n,r){for(var i,a=[],o=0;o<t.length;o++){i={data:[],name:e[o],color:n[o]};for(var s=0,l=r.length;s<l;s++)if(s<t[o])i.data.push(null);else{for(var c=0,u=0;u<t[o];u++)c+=r[s-u][1];i.data.push(+(c/t[o]).toFixed(3))}a.push(i)}return a}function c(t,e,n,r,i){var a=i.width-i.area[1]-i.area[3],o=n.eachSpacing*(i.chartData.xAxisData.xAxisPoints.length-1),s=e;return 0<=e?(s=0,t.event.trigger("scrollLeft")):Math.abs(e)>=o-a&&(s=a-o,t.event.trigger("scrollRight")),s}function u(t,e,n){function r(t){for(;0>t;)t+=2*i;for(;t>2*i;)t-=2*i;return t}var i=Math.PI;return t=r(t),e=r(e),n=r(n),e>n&&(n+=2*i,t<e&&(t+=2*i)),t>=e&&t<=n}function h(t,e,n){var r=t,i=n-e,a=r+(n-i-r)/1.4142135623730951;return a*=-1,{transX:a,transY:.41421356237309515*(n-i)-(n-i-r)/1.4142135623730951}}function f(t,e){function n(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=i(t[e-1].y,t[e+1].y)||t[e].y<=r(t[e-1].y,t[e+1].y))}var r=Math.min,i=Math.max,a=.2,o=.2,s=null,l=null,c=null,u=null;if(1>e?(s=t[0].x+(t[1].x-t[0].x)*a,l=t[0].y+(t[1].y-t[0].y)*a):(s=t[e].x+(t[e+1].x-t[e-1].x)*a,l=t[e].y+(t[e+1].y-t[e-1].y)*a),e>t.length-3){var h=t.length-1;c=t[h].x-(t[h].x-t[h-1].x)*o,u=t[h].y-(t[h].y-t[h-1].y)*o}else c=t[e+1].x-(t[e+2].x-t[e].x)*o,u=t[e+1].y-(t[e+2].y-t[e].y)*o;return n(t,e+1)&&(u=t[e+1].y),n(t,e)&&(l=t[e].y),(l>=i(t[e].y,t[e+1].y)||l<=r(t[e].y,t[e+1].y))&&(l=t[e].y),(u>=i(t[e].y,t[e+1].y)||u<=r(t[e].y,t[e+1].y))&&(u=t[e+1].y),{ctrA:{x:s,y:l},ctrB:{x:c,y:u}}}function p(t,e,n){return{x:n.x+t,y:n.y-e}}function d(t,e){if(e)for(;a.isCollision(t,e);)0<t.start.x?t.start.y--:0>t.start.x?t.start.y++:0<t.start.y?t.start.y++:t.start.y--;return t}function v(t,e,n){var r=0;return t.map(function(t){if(t.color||(t.color=n.colors[r],r=(r+1)%n.colors.length),t.index||(t.index=0),t.type||(t.type=e.type),"undefined"==typeof t.show&&(t.show=!0),t.type||(t.type=e.type),t.pointShape||(t.pointShape="circle"),!t.legendShape)switch(t.type){case"line":t.legendShape="line";break;case"column":t.legendShape="rect";break;case"area":t.legendShape="triangle";break;default:t.legendShape="circle"}return t})}function g(t,e){var n=0,r=e-t;return n=1e4<=r?1e3:1e3<=r?100:100<=r?10:10<=r?5:1<=r?1:.1<=r?.1:.01<=r?.01:.001<=r?.001:1e-4<=r?1e-4:1e-5<=r?1e-5:1e-6,{minRange:s(t,"lower",n),maxRange:s(e,"upper",n)}}function y(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r.fontSize;t+="";t=t.split("");for(var n,i=0,a=0;a<t.length;a++)n=t[a],i+=/[a-zA-Z]/.test(n)?7:/[0-9]/.test(n)?5.5:/\./.test(n)?2.7:/-/.test(n)?3.25:/[\u4e00-\u9fa5]/.test(n)?10:/\(|\)/.test(n)?3.73:/\s/.test(n)?2.5:/%/.test(n)?8:10;return i*e/10}function x(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function m(t,e){for(var n=Array(e),r=0;r<n.length;r++)n[r]=0;for(var i=0;i<t.length;i++)for(r=0;r<n.length;r++)n[r]+=t[i].data[r];return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data).concat(n)},[])}function _(t,e,n){var r,i;return t.clientX?e.rotate?(i=e.height-t.clientX*e.pixelRatio,r=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(r=t.clientX*e.pixelRatio,i=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(i=e.height-t.x*e.pixelRatio,r=t.y*e.pixelRatio):(r=t.x*e.pixelRatio,i=t.y*e.pixelRatio),{x:r,y:i}}function b(t,e){for(var n,r=[],i=0;i<t.length;i++)if(n=t[i],null!==n.data[e]&&"undefined"!=typeof n.data[e]&&n.show){var a={};a.color=n.color,a.type=n.type,a.style=n.style,a.pointShape=n.pointShape,a.disableLegend=n.disableLegend,a.name=n.name,a.show=n.show,a.data=n.format?n.format(n.data[e]):n.data[e],r.push(a)}return r}function w(t){var e=t.map(function(t){return y(t)});return Math.max.apply(null,e)}function S(t){for(var e=Math.PI,n=[],r=0;r<t;r++)n.push(2*e/t*r);return n.map(function(t){return-1*t+e/2})}function A(t,e,n,r){for(var i,a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},o=t.map(function(t){var e=[];return e=r||t.data,{text:a.format?a.format(t,e[n]):t.name+": "+t.data,color:t.color}}),s=[],l={x:0,y:0},c=0;c<e.length;c++)i=e[c],"undefined"!=typeof i[n]&&null!==i[n]&&s.push(i[n]);for(var u,h=0;h<s.length;h++)u=s[h],l.x=Math.round(u.x),l.y+=u.y;return l.y/=s.length,{textList:o,offset:l}}function k(t,e,n,r){var i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},a=t.map(function(t){return{text:i.format?i.format(t,r[n]):t.name+": "+t.data,color:t.color,disableLegend:!!t.disableLegend}});a=a.filter(function(t){if(!0!==t.disableLegend)return t});for(var o,s=[],l={x:0,y:0},c=0;c<e.length;c++)o=e[c],"undefined"!=typeof o[n]&&null!==o[n]&&s.push(o[n]);for(var u,h=0;h<s.length;h++)u=s[h],l.x=Math.round(u.x),l.y+=u.y;return l.y/=s.length,{textList:a,offset:l}}function T(t,e,n,r,i,a){!(6<arguments.length&&void 0!==arguments[6])||arguments[6];var o=a.color.upFill,s=a.color.downFill,l=[o,o,s,o],c=[],u={text:i[r],color:null};c.push(u),e.map(function(e){0==r&&0>e.data[1]-e.data[0]?l[1]=s:(e.data[0]<t[r-1][1]&&(l[0]=s),e.data[1]<e.data[0]&&(l[1]=s),e.data[2]>t[r-1][1]&&(l[2]=o),e.data[3]<t[r-1][1]&&(l[3]=s));var n={text:"开盘："+e.data[0],color:l[0]},i={text:"收盘："+e.data[1],color:l[1]},a={text:"最低："+e.data[2],color:l[2]},u={text:"最高："+e.data[3],color:l[3]};c.push(n,i,a,u)});for(var h,f=[],p={x:0,y:0},d=0;d<n.length;d++)h=n[d],"undefined"!=typeof h[r]&&null!==h[r]&&f.push(h[r]);return p.x=Math.round(f[0][0].x),{textList:c,offset:p}}function P(t){for(var e=[],n=0;n<t.length;n++)1==t[n].show&&e.push(t[n]);return e}function O(t,e,n,r){for(var i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,a=-1,o=0,s=[],l=0;l<e[0].length;l++)s.push(e[0][l].x);return("line"==n.type||"area"==n.type)&&"justify"==n.xAxis.boundaryGap&&(o=n.chartData.eachSpacing/2),n.categories||(o=0),L(t,n,r)&&s.forEach(function(e,n){t.x+i+o>e&&(a=n)}),a}function D(t,e){var n=-1;if($(t,e.area)){for(var r,i=e.points,a=-1,o=0,s=i.length;o<s;o++){r=i[o];for(var l=0;l<r.length;l++){a+=1;var c=r[l].area;if(t.x>c[0]&&t.x<c[2]&&t.y>c[1]&&t.y<c[3]){n=a;break}}}return n}return n}function $(t,e){return t.x>e.start.x&&t.x<e.end.x&&t.y>e.start.y&&t.y<e.end.y}function L(t,e){return t.x<=e.width-e.area[1]+10&&t.x>=e.area[3]-10&&t.y>=e.area[0]&&t.y<=e.height-e.area[2]}function C(t,e,n){var r=Math.PI,i=2*r/n,a=-1;if(E(t,e.center,e.radius)){var o=function(t){return 0>t&&(t+=2*r),t>2*r&&(t-=2*r),t},s=Math.atan2(e.center.y-t.y,t.x-e.center.x);s*=-1,0>s&&(s+=2*r);var l=e.angleList.map(function(t){return t=o(-1*t),t});l.forEach(function(t,e){var n=o(t-i/2),l=o(t+i/2);l<n&&(l+=2*r),(s>=n&&s<=l||s+2*r>=n&&s+2*r<=l)&&(a=e)})}return a}function F(t,e){for(var n,r=-1,i=0,a=e.series.length;i<a;i++)if(n=e.series[i],t.x>n.funnelArea[0]&&t.x<n.funnelArea[2]&&t.y>n.funnelArea[1]&&t.y<n.funnelArea[3]){r=i;break}return r}function j(t,e){for(var n,r=-1,i=0,a=e.length;i<a;i++)if(n=e[i],t.x>n.area[0]&&t.x<n.area[2]&&t.y>n.area[1]&&t.y<n.area[3]){r=i;break}return r}function R(t,e){for(var n,r=-1,i=e.chartData.mapData,a=e.series,o=Nt(t.y,t.x,i.bounds,i.scale,i.xoffset,i.yoffset),s=[o.x,o.y],l=0,c=a.length;l<c;l++)if(n=a[l].geometry.coordinates,Bt(s,n)){r=l;break}return r}function M(t,e){var n=-1;if(E(t,e.center,e.radius)){var r=Math.atan2(e.center.y-t.y,t.x-e.center.x);r=-r;for(var i,a=0,o=e.series.length;a<o;a++)if(i=e.series[a],u(r,i._start_,i._start_+2*i._proportion_*Math.PI)){n=a;break}}return n}function E(t,e,n){var r=Math.pow;return r(t.x-e.x,2)+r(t.y-e.y,2)<=r(n,2)}function I(t){var e=[],n=[];return t.forEach(function(t){null===t?(n.length&&e.push(n),n=[]):n.push(t)}),n.length&&e.push(n),e}function N(t,e,n,r){var i=Math.max,a=Math.floor,o={area:{start:{x:0,y:0},end:{x:0,y:0},width:0,height:0,wholeWidth:0,wholeHeight:0},points:[],widthArr:[],heightArr:[]};if(!1===e.legend.show)return r.legendData=o,o;var s=e.legend.padding,l=e.legend.margin,c=e.legend.fontSize,u=15*e.pixelRatio,h=5*e.pixelRatio,f=i(e.legend.lineHeight*e.pixelRatio,c);if("top"==e.legend.position||"bottom"==e.legend.position){for(var p=[],d=0,v=[],g=[],x=0;x<t.length;x++){var m=t[x],_=u+h+y(m.name||"undefined",c)+e.legend.itemGap;d+_>e.width-e.padding[1]-e.padding[3]?(p.push(g),v.push(d-e.legend.itemGap),d=_,g=[m]):(d+=_,g.push(m))}if(g.length){p.push(g),v.push(d-e.legend.itemGap),o.widthArr=v;var b=i.apply(null,v);switch(e.legend.float){case"left":o.area.start.x=e.padding[3],o.area.end.x=e.padding[3]+2*s;break;case"right":o.area.start.x=e.width-e.padding[1]-b-2*s,o.area.end.x=e.width-e.padding[1];break;default:o.area.start.x=(e.width-b)/2-s,o.area.end.x=(e.width+b)/2+s}o.area.width=b+2*s,o.area.wholeWidth=b+2*s,o.area.height=p.length*f+2*s,o.area.wholeHeight=p.length*f+2*s+2*l,o.points=p}}else{var w=t.length,S=e.height-e.padding[0]-e.padding[2]-2*l-2*s,A=Math.min(a(S/f),w);switch(o.area.height=A*f+2*s,o.area.wholeHeight=A*f+2*s,e.legend.float){case"top":o.area.start.y=e.padding[0]+l,o.area.end.y=e.padding[0]+l+o.area.height;break;case"bottom":o.area.start.y=e.height-e.padding[2]-l-o.area.height,o.area.end.y=e.height-e.padding[2]-l;break;default:o.area.start.y=(e.height-o.area.height)/2,o.area.end.y=(e.height+o.area.height)/2}for(var k,T=0==w%A?w/A:a(w/A+1),P=[],O=0;O<T;O++)k=t.slice(O*A,O*A+A),P.push(k);if(o.points=P,P.length){for(var D=0;D<P.length;D++){for(var $,L=P[D],C=0,F=0;F<L.length;F++)$=u+h+y(L[F].name||"undefined",c)+e.legend.itemGap,$>C&&(C=$);o.widthArr.push(C),o.heightArr.push(L.length*f+2*s)}for(var j=0,R=0;R<o.widthArr.length;R++)j+=o.widthArr[R];o.area.width=j-e.legend.itemGap+2*s,o.area.wholeWidth=o.area.width+s}}switch(e.legend.position){case"top":o.area.start.y=e.padding[0]+l,o.area.end.y=e.padding[0]+l+o.area.height;break;case"bottom":o.area.start.y=e.height-e.padding[2]-o.area.height-l,o.area.end.y=e.height-e.padding[2]-l;break;case"left":o.area.start.x=e.padding[3],o.area.end.x=e.padding[3]+o.area.width;break;case"right":o.area.start.x=e.width-e.padding[1]-o.area.width,o.area.end.x=e.width-e.padding[1]}return r.legendData=o,o}function z(t,e,n,r){var i={angle:0,xAxisHeight:n.xAxisHeight},a=t.map(function(t){return y(t,e.xAxis.fontSize||n.fontSize)}),o=Math.max.apply(this,a);return 1==e.xAxis.rotateLabel&&o+2*n.xAxisTextPadding>r&&(i.angle=45*Math.PI/180,i.xAxisHeight=2*n.xAxisTextPadding+o*Math.sin(i.angle)),i}function B(t,e){var n=Math.min,r=Math.max,i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:-1,a=x(t),o=[];a=a.filter(function(t){return"object"==typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),a.map(function(t){"object"==typeof t?t.constructor==Array?"candle"==e.type?t.map(function(t){o.push(t)}):o.push(t[0]):o.push(t.value):o.push(t)});var s=0,l=0;if(0<o.length&&(s=n.apply(this,o),l=r.apply(this,o)),-1<i?("number"==typeof e.xAxis.data[i].min&&(s=n(e.xAxis.data[i].min,s)),"number"==typeof e.xAxis.data[i].max&&(l=r(e.xAxis.data[i].max,l))):("number"==typeof e.xAxis.min&&(s=n(e.xAxis.min,s)),"number"==typeof e.xAxis.max&&(l=r(e.xAxis.max,l))),s===l){var c=l||10;l+=c}for(var u=g(s,l),h=u.minRange,f=u.maxRange,p=[],d=(f-h)/e.xAxis.splitNumber,v=0;v<=e.xAxis.splitNumber;v++)p.push(h+d*v);return p}function W(t,e,n){var r={angle:0,xAxisHeight:n.xAxisHeight};r.ranges=B(t,e,n),r.rangesFormat=r.ranges.map(function(t){return t=e.xAxis.format?e.xAxis.format(t):a.toFixed(t,2),t});var i=r.ranges.map(function(t){return t=a.toFixed(t,2),t=e.xAxis.format?e.xAxis.format(+t):t,t});r=Object.assign(r,tt(i,e,n));var o=r.eachSpacing,s=i.map(function(t){return y(t)}),l=Math.max.apply(this,s);return l+2*n.xAxisTextPadding>o&&(r.angle=45*Math.PI/180,r.xAxisHeight=2*n.xAxisTextPadding+l*Math.sin(r.angle)),!0===e.xAxis.disabled&&(r.xAxisHeight=0),r}function H(t,e,n,r,i){var a=Math.max,o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:1,s=i.extra.radar||{};s.max=s.max||0;for(var l=a(s.max,a.apply(null,x(r))),c=[],u=function(i){var a=r[i],s={};s.color=a.color,s.legendShape=a.legendShape,s.pointShape=a.pointShape,s.data=[],a.data.forEach(function(r,i){var a={};a.angle=t[i],a.proportion=r/l,a.position=p(n*a.proportion*o*Math.cos(a.angle),n*a.proportion*o*Math.sin(a.angle),e),s.data.push(a)}),c.push(s)},h=0;h<r.length;h++)u(h);return c}function U(t,e){for(var n,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,i=0,a=0,o=0;o<t.length;o++)n=t[o],n.data=null===n.data?0:n.data,i+=n.data;for(var s,l=0;l<t.length;l++)s=t[l],s.data=null===s.data?0:s.data,s._proportion_=0===i?1/t.length*r:s.data/i*r,s._radius_=e;for(var c,u=0;u<t.length;u++)c=t[u],c._start_=a,a+=2*c._proportion_*Math.PI;return t}function q(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;t=t.sort(function(t,e){return parseInt(e.data)-parseInt(t.data)});for(var r=0;r<t.length;r++)t[r].radius=t[r].data/t[0].data*e*n,t[r]._proportion_=t[r].data/t[0].data;return t.reverse()}function V(t,e,n,r){for(var i,a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,o=0,s=0,l=[],c=0;c<t.length;c++)i=t[c],i.data=null===i.data?0:i.data,o+=i.data,l.push(i.data);for(var u,h=Math.min.apply(null,l),f=Math.max.apply(null,l),p=0;p<t.length;p++)u=t[p],u.data=null===u.data?0:u.data,0===o||"area"==e?(u._proportion_=u.data/o*a,u._rose_proportion_=1/t.length*a):(u._proportion_=u.data/o*a,u._rose_proportion_=u.data/o*a),u._radius_=n+(r-n)*((u.data-h)/(f-h));for(var d,v=0;v<t.length;v++)d=t[v],d._start_=s,s+=2*d._rose_proportion_*Math.PI;return t}function G(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;1==n&&(n=.999999);for(var r,i=0;i<t.length;i++){r=t[i],r.data=null===r.data?0:r.data;var a=void 0;a="circle"==e.type?2:e.endAngle<e.startAngle?2+e.endAngle-e.startAngle:e.startAngle-e.endAngle,r._proportion_=a*r.data*n+e.startAngle,2<=r._proportion_&&(r._proportion_%=2)}return t}function X(t,e,n){for(var r=e,i=0;i<t.length;i++)t[i].value=null===t[i].value?0:t[i].value,t[i]._startAngle_=r,t[i]._endAngle_=(e-n+1)*t[i].value+e,2<=t[i]._endAngle_&&(t[i]._endAngle_%=2),r=t[i]._endAngle_;return t}function J(t,e,n){for(var r,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:1,a=0;a<t.length;a++){if(r=t[a],r.data=null===r.data?0:r.data,"auto"==n.pointer.color){for(var o=0;o<e.length;o++)if(r.data<=e[o].value){r.color=e[o].color;break}}else r.color=n.pointer.color;var s=n.startAngle-n.endAngle+1;r._endAngle_=s*r.data+n.startAngle,r._oldAngle_=n.oldAngle,n.oldAngle<n.endAngle&&(r._oldAngle_+=2),r._proportion_=r.data>=n.oldData?(r._endAngle_-r._oldAngle_)*i+n.oldAngle:r._oldAngle_-(r._oldAngle_-r._endAngle_)*i,2<=r._proportion_&&(r._proportion_%=2)}return t}function K(t){t=U(t);for(var e=0,n=0;n<t.length;n++){var r=t[n],i=r.format?r.format(+r._proportion_.toFixed(2)):a.toFixed(100*r._proportion_)+"%";e=Math.max(e,y(i))}return e}function Q(t,e,n,r,i,a){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*i.columePadding)/n),a.extra.column&&a.extra.column.width&&0<+a.extra.column.width&&(t.width=Math.min(t.width,+a.extra.column.width)),0>=t.width&&(t.width=1),t.x+=(r+.5-n/2)*t.width,t)})}function Y(t,e,n,r,i,a,o){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*i.columePadding)/2),a.extra.column&&a.extra.column.width&&0<+a.extra.column.width&&(t.width=Math.min(t.width,+a.extra.column.width)),0<r&&(t.width-=2*o),t)})}function Z(t,e,n,r,i,a){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*i.columePadding)/2),a.extra.column&&a.extra.column.width&&0<+a.extra.column.width&&(t.width=Math.min(t.width,+a.extra.column.width)),t)})}function tt(t,e){var n=e.width-e.area[1]-e.area[3],r=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length;("line"==e.type||"area"==e.type)&&1<r&&"justify"==e.xAxis.boundaryGap&&(r-=1);var i=n/r,a=[],o=e.area[3],s=e.width-e.area[1];return t.forEach(function(t,e){a.push(o+e*i)}),"justify"!==e.xAxis.boundaryGap&&(!0===e.enableScroll?a.push(o+t.length*i):a.push(s)),{xAxisPoints:a,startX:o,endX:s,eachSpacing:i}}function et(t,e,n,r,i,a){var o=Math.round,s=7<arguments.length&&void 0!==arguments[7]?arguments[7]:1,l=[],c=a.height-a.area[0]-a.area[2];return t.forEach(function(t,u){if(null===t)l.push(null);else{var h=[];t.forEach(function(t){var l={x:r[u]+o(i/2)},f=t.value||t,p=c*(f-e)/(n-e);p*=s,l.y=a.height-o(p)-a.area[2],h.push(l)}),l.push(h)}}),l}function nt(t,e,n,r,i,a){var o=Math.round,s=7<arguments.length&&void 0!==arguments[7]?arguments[7]:1,l="center";("line"==a.type||"area"==a.type)&&(l=a.xAxis.boundaryGap);var c=[],u=a.height-a.area[0]-a.area[2],h=a.width-a.area[1]-a.area[3];return t.forEach(function(t,f){if(null===t)c.push(null);else{var p={color:t.color,x:r[f]},d=t;if("object"==typeof t&&null!==t)if(t.constructor==Array){var v,g,y;v=[].concat(a.chartData.xAxisData.ranges),g=v.shift(),y=v.pop(),d=t[1],p.x=a.area[3]+h*(t[0]-g)/(y-g)}else d=t.value;"center"==l&&(p.x+=o(i/2));var x=u*(d-e)/(n-e);x*=s,p.y=a.height-o(x)-a.area[2],c.push(p)}}),c}function rt(t,e,n,r,i,a,o,s,l){var c=Math.round,u=9<arguments.length&&void 0!==arguments[9]?arguments[9]:1,h=[],f=a.height-a.area[0]-a.area[2];return t.forEach(function(t,o){if(null===t)h.push(null);else{var p={color:t.color,x:r[o]+c(i/2)};if(0<s){for(var d=0,v=0;v<=s;v++)d+=l[v].data[o];var g=d-t,y=f*(d-e)/(n-e),x=f*(g-e)/(n-e)}else d=t,y=f*(d-e)/(n-e),x=0;var m=x;y*=u,m*=u,p.y=a.height-c(y)-a.area[2],p.y0=a.height-c(m)-a.area[2],h.push(p)}}),h}function it(t,e,n,r){var i,a=Math.min,o=Math.max,s=4<arguments.length&&void 0!==arguments[4]?arguments[4]:-1;i="stack"==r?m(t,e.categories.length):x(t);var l=[];i=i.filter(function(t){return"object"==typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),i.map(function(t){"object"==typeof t?t.constructor==Array?"candle"==e.type?t.map(function(t){l.push(t)}):l.push(t[1]):l.push(t.value):l.push(t)});var c=0,u=0;if(0<l.length&&(c=a.apply(this,l),u=o.apply(this,l)),-1<s?("number"==typeof e.yAxis.data[s].min&&(c=a(e.yAxis.data[s].min,c)),"number"==typeof e.yAxis.data[s].max&&(u=o(e.yAxis.data[s].max,u))):("number"==typeof e.yAxis.min&&(c=a(e.yAxis.min,c)),"number"==typeof e.yAxis.max&&(u=o(e.yAxis.max,u))),c===u){var h=u||10;u+=h}for(var f=g(c,u),p=f.minRange,d=f.maxRange,v=[],y=(d-p)/e.yAxis.splitNumber,_=0;_<=e.yAxis.splitNumber;_++)v.push(p+y*_);return v.reverse()}function at(t,e,n){var r=Math.max,o=i({},{type:""},e.extra.column),s=e.yAxis.data.length,l=Array(s);if(0<s){for(var c=0;c<s;c++){l[c]=[];for(var u=0;u<t.length;u++)t[u].index==c&&l[c].push(t[u])}for(var h,f=Array(s),p=Array(s),d=Array(s),v=function(t,i){i=e.yAxis.data[t],1==e.yAxis.disabled&&(i.disabled=!0),f[t]=it(l[t],e,n,o.type,t);var s=i.fontSize||n.fontSize;d[t]={position:i.position?i.position:"left",width:0},p[t]=f[t].map(function(e){return h=i,e=a.toFixed(e,6),e=i.format?i.format(+e):e,d[t].width=r(d[t].width,y(e,s)+5),e});var c=i.calibration?4*e.pixelRatio:0;d[t].width+=c+3*e.pixelRatio,!0===i.disabled&&(d[t].width=0),h=i},g=0;g<s;g++)v(g,h)}else{f=[,],p=[,],d=[,];f[0]=it(t,e,n,o.type),d[0]={position:"left",width:0};var x=e.yAxis.fontSize||n.fontSize;p[0]=f[0].map(function(t){return t=a.toFixed(t,6),t=e.yAxis.format?e.yAxis.format(+t):t,d[0].width=r(d[0].width,y(t,x)+5),t}),d[0].width+=3*e.pixelRatio,!0===e.yAxis.disabled?(d[0]={position:"left",width:0},e.yAxis.data[0]={disabled:!0}):e.yAxis.data[0]={disabled:!1,position:"left",max:e.yAxis.max,min:e.yAxis.min,format:e.yAxis.format}}return{rangesFormat:p,ranges:f,yAxisWidth:d}}function ot(t,e,n){for(var r=[].concat(n.chartData.yAxisData.ranges),i=n.height-n.area[0]-n.area[2],a=n.area[0],o=[],s=0;s<r.length;s++){var l=r[s].shift(),c=r[s].pop(),u=l-(l-c)*(t-a)/i;u=n.yAxis.data[s].format?n.yAxis.data[s].format(+u):u.toFixed(0),o.push(u+"")}return o}function st(t,e){for(var n,r,i=e.height-e.area[0]-e.area[2],a=0;a<t.length;a++){t[a].yAxisIndex=t[a].yAxisIndex?t[a].yAxisIndex:0;var o=[].concat(e.chartData.yAxisData.ranges[t[a].yAxisIndex]);n=o.pop(),r=o.shift();var s=i*(t[a].value-n)/(r-n);t[a].y=e.height-Math.round(s)-e.area[2]}return t}function lt(t,e){var n=Math.PI;!0===e.rotateLock?!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*n/180),e._rotate_=!0):(t.translate(e.height,0),t.rotate(90*n/180))}function ct(t,e,n,r,i){r.beginPath(),"hollow"==i.dataPointShapeType?(r.setStrokeStyle(e),r.setFillStyle(i.background),r.setLineWidth(2*i.pixelRatio)):(r.setStrokeStyle("#ffffff"),r.setFillStyle(e),r.setLineWidth(1*i.pixelRatio)),"diamond"===n?t.forEach(function(t){null!==t&&(r.moveTo(t.x,t.y-4.5),r.lineTo(t.x-4.5,t.y),r.lineTo(t.x,t.y+4.5),r.lineTo(t.x+4.5,t.y),r.lineTo(t.x,t.y-4.5))}):"circle"===n?t.forEach(function(t){null!==t&&(r.moveTo(t.x+2.5*i.pixelRatio,t.y),r.arc(t.x,t.y,3*i.pixelRatio,0,2*Math.PI,!1))}):"rect"===n?t.forEach(function(t){null!==t&&(r.moveTo(t.x-3.5,t.y-3.5),r.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"==n&&t.forEach(function(t){null!==t&&(r.moveTo(t.x,t.y-4.5),r.lineTo(t.x-4.5,t.y+4.5),r.lineTo(t.x+4.5,t.y+4.5),r.lineTo(t.x,t.y-4.5))}),r.closePath(),r.fill(),r.stroke()}function ut(t,e,n,r){var i=t.title.fontSize||e.titleFontSize,a=t.subtitle.fontSize||e.subtitleFontSize,o=t.title.name||"",s=t.subtitle.name||"",l=t.title.color||e.titleColor,c=t.subtitle.color||e.subtitleColor,u=o?i:0,h=s?a:0,f=5;if(s){var p=y(s,a),d=r.x-p/2+(t.subtitle.offsetX||0),v=r.y+a/2+(t.subtitle.offsetY||0);o&&(v+=(u+f)/2),n.beginPath(),n.setFontSize(a),n.setFillStyle(c),n.fillText(s,d,v),n.closePath(),n.stroke()}if(o){var g=y(o,i),x=r.x-g/2+(t.title.offsetX||0),m=r.y+i/2+(t.title.offsetY||0);s&&(m-=(h+f)/2),n.beginPath(),n.setFontSize(i),n.setFillStyle(l),n.fillText(o,x,m),n.closePath(),n.stroke()}}function ht(t,e,n,r){var i=e.data;t.forEach(function(t,a){if(null!==t){r.beginPath(),r.setFontSize(e.textSize||n.fontSize),r.setFillStyle(e.textColor||"#666666");var o=i[a];"object"==typeof i[a]&&null!==i[a]&&(o=i[a].constructor==Array?i[a][1]:i[a].value);var s=e.format?e.format(o):o;r.fillText(s+"",t.x-y(s,e.textSize||n.fontSize)/2,t.y-4),r.closePath(),r.stroke()}})}function ft(t,e,n,r,i,a){var o=Math.PI;e-=t.width/2+i.gaugeLabelTextMargin;for(var s=t.startAngle-t.endAngle+1,l=s/t.splitLine.splitNumber,c=t.endNumber-t.startNumber,u=c/t.splitLine.splitNumber,h=t.startAngle,f=t.startNumber,p=0;p<t.splitLine.splitNumber+1;p++){var d={x:e*Math.cos(h*o),y:e*Math.sin(h*o)},v=t.labelFormat?t.labelFormat(f):f;d.x+=n.x-y(v)/2,d.y+=n.y;var g=d.x,x=d.y;a.beginPath(),a.setFontSize(i.fontSize),a.setFillStyle(t.labelColor||"#666666"),a.fillText(v,g,x+i.fontSize/2),a.closePath(),a.stroke(),h+=l,2<=h&&(h%=2),f+=u}}function pt(t,e,n,r,i,o){var s=r.extra.radar||{};e+=i.radarLabelTextMargin,t.forEach(function(t,l){var c={x:e*Math.cos(t),y:e*Math.sin(t)},u=p(c.x,c.y,n),h=u.x,f=u.y;a.approximatelyEqual(c.x,0)?h-=y(r.categories[l]||"")/2:0>c.x&&(h-=y(r.categories[l]||"")),o.beginPath(),o.setFontSize(i.fontSize),o.setFillStyle(s.labelColor||"#666666"),o.fillText(r.categories[l]||"",h,f+i.fontSize/2),o.closePath(),o.stroke()})}function dt(t,e,n,r,i,o){for(var s=Math.cos,l=Math.sin,c=Math.min,u=Math.max,h=Math.PI,f=n.pieChartLinePadding,v=[],g=null,x=t.map(function(t){var e=t.format?t.format(+t._proportion_.toFixed(2)):a.toFixed(100*t._proportion_.toFixed(4))+"%";t._rose_proportion_&&(t._proportion_=t._rose_proportion_);var n=2*h-(t._start_+2*h*t._proportion_/2),r=t.color,i=t._radius_;return{arc:n,text:e,color:r,radius:i,textColor:t.textColor,textSize:t.textSize}}),m=0;m<x.length;m++){var _=x[m],b=s(_.arc)*(_.radius+f),w=l(_.arc)*(_.radius+f),S=s(_.arc)*_.radius,A=l(_.arc)*_.radius,k=0<=b?b+n.pieChartTextPadding:b-n.pieChartTextPadding,T=w,P=y(_.text,_.textSize||n.fontSize),O=T;g&&a.isSameXCoordinateArea(g.start,{x:k})&&(O=0<k?c(T,g.start.y):0>b?u(T,g.start.y):0<T?u(T,g.start.y):c(T,g.start.y)),0>k&&(k-=P);var D={lineStart:{x:S,y:A},lineEnd:{x:b,y:w},start:{x:k,y:O},width:P,height:n.fontSize,text:_.text,color:_.color,textColor:_.textColor,textSize:_.textSize};g=d(D,g),v.push(g)}for(var $=0;$<v.length;$++){var L=v[$],C=p(L.lineStart.x,L.lineStart.y,o),F=p(L.lineEnd.x,L.lineEnd.y,o),j=p(L.start.x,L.start.y,o);r.setLineWidth(1*e.pixelRatio),r.setFontSize(n.fontSize),r.beginPath(),r.setStrokeStyle(L.color),r.setFillStyle(L.color),r.moveTo(C.x,C.y);var R=0>L.start.x?j.x+L.width:j.x,M=0>L.start.x?j.x-5:j.x+5;r.quadraticCurveTo(F.x,F.y,R,j.y),r.moveTo(C.x,C.y),r.stroke(),r.closePath(),r.beginPath(),r.moveTo(j.x+L.width,j.y),r.arc(R,j.y,2,0,2*h),r.closePath(),r.fill(),r.beginPath(),r.setFontSize(L.textSize||n.fontSize),r.setFillStyle(L.textColor||"#666666"),r.fillText(L.text,M,j.y+3),r.closePath(),r.stroke(),r.closePath()}}function vt(t,e,n,r){var i=e.extra.tooltip||{};i.gridType=null==i.gridType?"solid":i.gridType,i.dashLength=null==i.dashLength?4:i.dashLength;var a=e.area[0],s=e.height-e.area[2];if("dash"==i.gridType&&r.setLineDash([i.dashLength,i.dashLength]),r.setStrokeStyle(i.gridColor||"#cccccc"),r.setLineWidth(1*e.pixelRatio),r.beginPath(),r.moveTo(t,a),r.lineTo(t,s),r.stroke(),r.setLineDash([]),i.xAxisLabel){var l=e.categories[e.tooltip.index];r.setFontSize(n.fontSize);var c=y(l,n.fontSize),u=t-.5*c,h=s;r.beginPath(),r.setFillStyle(o(i.labelBgColor||n.toolTipBackground,i.labelBgOpacity||n.toolTipOpacity)),r.setStrokeStyle(i.labelBgColor||n.toolTipBackground),r.setLineWidth(1*e.pixelRatio),r.rect(u-n.toolTipPadding,h,c+2*n.toolTipPadding,n.fontSize+2*n.toolTipPadding),r.closePath(),r.stroke(),r.fill(),r.beginPath(),r.setFontSize(n.fontSize),r.setFillStyle(i.labelFontColor||n.fontColor),r.fillText(l+"",u,h+n.toolTipPadding+n.fontSize),r.closePath(),r.stroke()}}function gt(t,e,n){for(var r,a=i({},{type:"solid",dashLength:4,data:[]},t.extra.markLine),s=t.area[3],l=t.width-t.area[1],c=st(a.data,t),u=0;u<c.length;u++)if(r=i({},{lineColor:"#DE4A42",showLabel:!1,labelFontColor:"#666666",labelBgColor:"#DFE8FF",labelBgOpacity:.8,yAxisIndex:0},c[u]),"dash"==a.type&&n.setLineDash([a.dashLength,a.dashLength]),n.setStrokeStyle(r.lineColor),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.moveTo(s,r.y),n.lineTo(l,r.y),n.stroke(),n.setLineDash([]),r.showLabel){var h=t.yAxis.format?t.yAxis.format(+r.value):r.value;n.setFontSize(e.fontSize);var f=y(h,e.fontSize),p=t.padding[3]+e.yAxisTitleWidth-e.toolTipPadding,d=Math.max(t.area[3],f+2*e.toolTipPadding),v=d-p,g=r.y;n.setFillStyle(o(r.labelBgColor,r.labelBgOpacity)),n.setStrokeStyle(r.labelBgColor),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.rect(p,g-.5*e.fontSize-e.toolTipPadding,v,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(r.labelFontColor),n.fillText(h+"",p+(v-f)/2,g+.5*e.fontSize),n.stroke()}}function yt(t,e,n,r){var a=Math.max,s=i({},{gridType:"solid",dashLength:4},t.extra.tooltip),l=t.area[3],c=t.width-t.area[1];if("dash"==s.gridType&&n.setLineDash([s.dashLength,s.dashLength]),n.setStrokeStyle(s.gridColor||"#cccccc"),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.moveTo(l,t.tooltip.offset.y),n.lineTo(c,t.tooltip.offset.y),n.stroke(),n.setLineDash([]),s.yAxisLabel)for(var u=ot(t.tooltip.offset.y,t.series,t,e,r),h=t.chartData.yAxisData.yAxisWidth,f=t.area[3],p=t.width-t.area[1],d=0;d<u.length;d++){n.setFontSize(e.fontSize);var v=void 0,g=void 0,x=void 0,m=y(u[d],e.fontSize);"left"==h[d].position?(v=f-h[d].width,g=a(v,v+m+2*e.toolTipPadding)):(v=p,g=a(v+h[d].width,v+m+2*e.toolTipPadding)),x=g-v;var _=v+(x-m)/2,b=t.tooltip.offset.y;n.beginPath(),n.setFillStyle(o(s.labelBgColor||e.toolTipBackground,s.labelBgOpacity||e.toolTipOpacity)),n.setStrokeStyle(s.labelBgColor||e.toolTipBackground),n.setLineWidth(1*t.pixelRatio),n.rect(v,b-.5*e.fontSize-e.toolTipPadding,x,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(s.labelFontColor||e.fontColor),n.fillText(u[d],_,b+.5*e.fontSize),n.closePath(),n.stroke(),"left"==h[d].position?f-=h[d].width+t.yAxis.padding:p+=h[d].width+t.yAxis.padding}}function xt(t,e,n,r,a){var s=i({},{activeBgColor:"#000000",activeBgOpacity:.08},e.extra.tooltip),l=e.area[0],c=e.height-e.area[2];r.beginPath(),r.setFillStyle(o(s.activeBgColor,s.activeBgOpacity)),r.rect(t-a/2,l,a,c-l),r.closePath(),r.fill()}function mt(t,e,n,r,a){var s=Math.round,l=i({},{showBox:!0,bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"},n.extra.tooltip),c=4*n.pixelRatio,u=5*n.pixelRatio,h=8*n.pixelRatio,f=!1;("line"==n.type||"area"==n.type||"candle"==n.type||"mix"==n.type)&&vt(n.tooltip.offset.x,n,r,a),e=i({x:0,y:0},e),e.y-=8*n.pixelRatio;var p=t.map(function(t){return y(t.text,r.fontSize)}),d=c+u+4*r.toolTipPadding+Math.max.apply(null,p),v=2*r.toolTipPadding+t.length*r.toolTipLineHeight;0==l.showBox||(e.x-Math.abs(n._scrollDistance_)+h+d>n.width&&(f=!0),v+e.y>n.height&&(e.y=n.height-v),a.beginPath(),a.setFillStyle(o(l.bgColor||r.toolTipBackground,l.bgOpacity||r.toolTipOpacity)),f?(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x-h,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x-h,e.y),a.lineTo(e.x-h-s(d),e.y),a.lineTo(e.x-h-s(d),e.y+v),a.lineTo(e.x-h,e.y+v),a.lineTo(e.x-h,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)):(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x+h,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x+h,e.y),a.lineTo(e.x+h+s(d),e.y),a.lineTo(e.x+h+s(d),e.y+v),a.lineTo(e.x+h,e.y+v),a.lineTo(e.x+h,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)),a.closePath(),a.fill(),t.forEach(function(t,n){if(null!==t.color){a.beginPath(),a.setFillStyle(t.color);var i=e.x+h+2*r.toolTipPadding,o=e.y+(r.toolTipLineHeight-r.fontSize)/2+r.toolTipLineHeight*n+r.toolTipPadding+1;f&&(i=e.x-d-h+2*r.toolTipPadding),a.fillRect(i,o,c,r.fontSize),a.closePath()}}),t.forEach(function(t,n){var i=e.x+h+2*r.toolTipPadding+c+u;f&&(i=e.x-d-h+2*r.toolTipPadding+ +c+u);var o=e.y+(r.toolTipLineHeight-r.fontSize)/2+r.toolTipLineHeight*n+r.toolTipPadding;a.beginPath(),a.setFontSize(r.fontSize),a.setFillStyle(l.fontColor),a.fillText(t.text,i,o+r.fontSize),a.closePath(),a.stroke()}))}function _t(t,e,n,r){var a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,o=e.chartData.xAxisData,s=o.xAxisPoints,l=o.eachSpacing,c=i({},{type:"group",width:l/2,meter:{border:4,fillColor:"#FFFFFF"}},e.extra.column),u=[];r.save();var h=-2,f=s.length+2;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(r.translate(e._scrollDistance_,0),h=Math.floor(-e._scrollDistance_/l)-2,f=h+e.xAxis.itemCount+4),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===a&&xt(e.tooltip.offset.x,e,n,r,l),t.forEach(function(i,o){var p,d,v;p=[].concat(e.chartData.yAxisData.ranges[i.index]),d=p.pop(),v=p.shift();var g=i.data;switch(c.type){case"group":var y=nt(g,d,v,s,l,e,n,a),x=rt(g,d,v,s,l,e,n,o,t,a);u.push(x),y=Q(y,l,t.length,o,n,e);for(var m,_=0;_<y.length;_++)if(m=y[_],null!==m&&_>h&&_<f){r.beginPath(),r.setStrokeStyle(m.color||i.color),r.setLineWidth(1),r.setFillStyle(m.color||i.color);var b=m.x-m.width/2,w=e.height-m.y-e.area[2];r.moveTo(b-1,m.y),r.lineTo(b+m.width-2,m.y),r.lineTo(b+m.width-2,e.height-e.area[2]),r.lineTo(b,e.height-e.area[2]),r.lineTo(b,m.y),r.closePath(),r.stroke(),r.fill()}break;case"stack":y=rt(g,d,v,s,l,e,n,o,t,a);u.push(y),y=Z(y,l,t.length,o,n,e,t);for(var S,A=0;A<y.length;A++)if(S=y[A],null!==S&&A>h&&A<f){r.beginPath(),r.setFillStyle(S.color||i.color);b=S.x-S.width/2+1,w=e.height-S.y-e.area[2];var k=e.height-S.y0-e.area[2];0<o&&(w-=k),r.moveTo(b,S.y),r.fillRect(b,S.y,S.width-2,w),r.closePath(),r.fill()}break;case"meter":y=nt(g,d,v,s,l,e,n,a);if(u.push(y),y=Y(y,l,t.length,o,n,e,c.meter.border),0==o){for(var T,P=0;P<y.length;P++)if(T=y[P],null!==T&&P>h&&P<f){r.beginPath(),r.setFillStyle(c.meter.fillColor);b=T.x-T.width/2,w=e.height-T.y-e.area[2];r.moveTo(b,T.y),r.fillRect(b,T.y,T.width,w),r.closePath(),r.fill(),0<c.meter.border&&(r.beginPath(),r.setStrokeStyle(i.color),r.setLineWidth(c.meter.border*e.pixelRatio),r.moveTo(b+.5*c.meter.border,T.y+w),r.lineTo(b+.5*c.meter.border,T.y+.5*c.meter.border),r.lineTo(b+T.width-.5*c.meter.border,T.y+.5*c.meter.border),r.lineTo(b+T.width-.5*c.meter.border,T.y+w),r.stroke())}}else for(var O,D=0;D<y.length;D++)if(O=y[D],null!==O&&D>h&&D<f){r.beginPath(),r.setFillStyle(O.color||i.color);b=O.x-O.width/2,w=e.height-O.y-e.area[2];r.moveTo(b,O.y),r.fillRect(b,O.y,O.width,w),r.closePath(),r.fill()}}}),!1!==e.dataLabel&&1===a&&t.forEach(function(i,o){var u,h,f;u=[].concat(e.chartData.yAxisData.ranges[i.index]),h=u.pop(),f=u.shift();var p=i.data;switch(c.type){case"group":var d=nt(p,h,f,s,l,e,n,a);d=Q(d,l,t.length,o,n,e),ht(d,i,n,r);break;case"stack":d=rt(p,h,f,s,l,e,n,o,t,a);ht(d,i,n,r);break;case"meter":d=nt(p,h,f,s,l,e,n,a);ht(d,i,n,r)}}),r.restore(),{xAxisPoints:s,calPoints:u,eachSpacing:l}}function bt(t,e,n,r,a){var o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:1,s=i({},{color:{},average:{}},n.extra.candle);s.color=i({},{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},s.color),s.average=i({},{show:!1,name:[],day:[],color:r.colors},s.average),n.extra.candle=s;var l=n.chartData.xAxisData,c=l.xAxisPoints,u=l.eachSpacing,h=[];a.save();var p=-2,d=c.length+2,v=0,g=n.width+u;return n._scrollDistance_&&0!==n._scrollDistance_&&!0===n.enableScroll&&(a.translate(n._scrollDistance_,0),p=Math.floor(-n._scrollDistance_/u)-2,d=p+n.xAxis.itemCount+4,v=-n._scrollDistance_-u+n.area[3],g=v+(n.xAxis.itemCount+4)*u),s.average.show&&e.forEach(function(t){var e,i,s;e=[].concat(n.chartData.yAxisData.ranges[t.index]),i=e.pop(),s=e.shift();for(var l,h=t.data,p=nt(h,i,s,c,u,n,r,o),d=I(p),y=0;y<d.length;y++){if(l=d[y],a.beginPath(),a.setStrokeStyle(t.color),a.setLineWidth(1),1===l.length)a.moveTo(l[0].x,l[0].y),a.arc(l[0].x,l[0].y,1,0,2*Math.PI);else{a.moveTo(l[0].x,l[0].y);for(var x,m=0,_=0;_<l.length;_++)if(x=l[_],0==m&&x.x>v&&(a.moveTo(x.x,x.y),m=1),0<_&&x.x>v&&x.x<g){var b=f(l,_-1);a.bezierCurveTo(b.ctrA.x,b.ctrA.y,b.ctrB.x,b.ctrB.y,x.x,x.y)}a.moveTo(l[0].x,l[0].y)}a.closePath(),a.stroke()}}),t.forEach(function(t){var e,i,l;e=[].concat(n.chartData.yAxisData.ranges[t.index]),i=e.pop(),l=e.shift();var f=t.data,v=et(f,i,l,c,u,n,r,o);h.push(v);for(var g=I(v),y=0;y<g[0].length;y++)if(y>p&&y<d){var x=g[0][y];a.beginPath(),0<f[y][1]-f[y][0]?(a.setStrokeStyle(s.color.upLine),a.setFillStyle(s.color.upFill),a.setLineWidth(1*n.pixelRatio),a.moveTo(x[3].x,x[3].y),a.lineTo(x[1].x,x[1].y),a.lineTo(x[1].x-u/4,x[1].y),a.lineTo(x[0].x-u/4,x[0].y),a.lineTo(x[0].x,x[0].y),a.lineTo(x[2].x,x[2].y),a.lineTo(x[0].x,x[0].y),a.lineTo(x[0].x+u/4,x[0].y),a.lineTo(x[1].x+u/4,x[1].y),a.lineTo(x[1].x,x[1].y),a.moveTo(x[3].x,x[3].y)):(a.setStrokeStyle(s.color.downLine),a.setFillStyle(s.color.downFill),a.setLineWidth(1*n.pixelRatio),a.moveTo(x[3].x,x[3].y),a.lineTo(x[0].x,x[0].y),a.lineTo(x[0].x-u/4,x[0].y),a.lineTo(x[1].x-u/4,x[1].y),a.lineTo(x[1].x,x[1].y),a.lineTo(x[2].x,x[2].y),a.lineTo(x[1].x,x[1].y),a.lineTo(x[1].x+u/4,x[1].y),a.lineTo(x[0].x+u/4,x[0].y),a.lineTo(x[0].x,x[0].y),a.moveTo(x[3].x,x[3].y)),a.closePath(),a.fill(),a.stroke()}}),a.restore(),{xAxisPoints:c,calPoints:h,eachSpacing:u}}function wt(t,e,n,r){var a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,s=i({},{type:"straight",opacity:.2,addLine:!1,width:2,gradient:!1},e.extra.area),l=e.chartData.xAxisData,c=l.xAxisPoints,u=l.eachSpacing,h=e.height-e.area[2],p=[];r.save();var d=0,v=e.width+u;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(r.translate(e._scrollDistance_,0),d=-e._scrollDistance_-u+e.area[3],v=d+(e.xAxis.itemCount+4)*u),t.forEach(function(t){var i,l,g;i=[].concat(e.chartData.yAxisData.ranges[t.index]),l=i.pop(),g=i.shift();var y=t.data,x=nt(y,l,g,c,u,e,n,a);p.push(x);for(var m,_=I(x),b=0;b<_.length;b++){if(m=_[b],r.beginPath(),r.setStrokeStyle(o(t.color,s.opacity)),s.gradient){var w=r.createLinearGradient(0,e.area[0],0,e.height-e.area[2]);w.addColorStop("0",o(t.color,s.opacity)),w.addColorStop("1.0",o("#FFFFFF",.1)),r.setFillStyle(w)}else r.setFillStyle(o(t.color,s.opacity));if(r.setLineWidth(s.width*e.pixelRatio),1<m.length){var S=m[0],A=m[m.length-1];r.moveTo(S.x,S.y);var k=0;if("curve"===s.type){for(var T,P=0;P<m.length;P++)if(T=m[P],0==k&&T.x>d&&(r.moveTo(T.x,T.y),k=1),0<P&&T.x>d&&T.x<v){var O=f(m,P-1);r.bezierCurveTo(O.ctrA.x,O.ctrA.y,O.ctrB.x,O.ctrB.y,T.x,T.y)}}else for(var D,$=0;$<m.length;$++)D=m[$],0==k&&D.x>d&&(r.moveTo(D.x,D.y),k=1),0<$&&D.x>d&&D.x<v&&r.lineTo(D.x,D.y);r.lineTo(A.x,h),r.lineTo(S.x,h),r.lineTo(S.x,S.y)}else{var L=m[0];r.moveTo(L.x-u/2,L.y),r.lineTo(L.x+u/2,L.y),r.lineTo(L.x+u/2,h),r.lineTo(L.x-u/2,h),r.moveTo(L.x-u/2,L.y)}if(r.closePath(),r.fill(),s.addLine){if("dash"==t.lineType){var C=t.dashLength?t.dashLength:8;C*=e.pixelRatio,r.setLineDash([C,C])}if(r.beginPath(),r.setStrokeStyle(t.color),r.setLineWidth(s.width*e.pixelRatio),1===m.length)r.moveTo(m[0].x,m[0].y),r.arc(m[0].x,m[0].y,1,0,2*Math.PI);else{r.moveTo(m[0].x,m[0].y);var F=0;if("curve"===s.type){for(var j,R=0;R<m.length;R++)if(j=m[R],0==F&&j.x>d&&(r.moveTo(j.x,j.y),F=1),0<R&&j.x>d&&j.x<v){var M=f(m,R-1);r.bezierCurveTo(M.ctrA.x,M.ctrA.y,M.ctrB.x,M.ctrB.y,j.x,j.y)}}else for(var E,N=0;N<m.length;N++)E=m[N],0==F&&E.x>d&&(r.moveTo(E.x,E.y),F=1),0<N&&E.x>d&&E.x<v&&r.lineTo(E.x,E.y);r.moveTo(m[0].x,m[0].y)}r.stroke(),r.setLineDash([])}}!1!==e.dataPointShape&&ct(x,t.color,t.pointShape,r,e)}),!1!==e.dataLabel&&1===a&&t.forEach(function(t){var i,o,s;i=[].concat(e.chartData.yAxisData.ranges[t.index]),o=i.pop(),s=i.shift();var l=t.data,h=nt(l,o,s,c,u,e,n,a);ht(h,t,n,r)}),r.restore(),{xAxisPoints:c,calPoints:p,eachSpacing:u}}function St(t,e,n,r){var a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,o=i({},{type:"straight",width:2},e.extra.line);o.width*=e.pixelRatio;var s=e.chartData.xAxisData,l=s.xAxisPoints,c=s.eachSpacing,u=[];r.save();var h=0,p=e.width+c;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(r.translate(e._scrollDistance_,0),h=-e._scrollDistance_-c+e.area[3],p=h+(e.xAxis.itemCount+4)*c),t.forEach(function(t){var i,s,d;i=[].concat(e.chartData.yAxisData.ranges[t.index]),s=i.pop(),d=i.shift();var v=t.data,g=nt(v,s,d,l,c,e,n,a);u.push(g);var y=I(g);if("dash"==t.lineType){var x=t.dashLength?t.dashLength:8;x*=e.pixelRatio,r.setLineDash([x,x])}r.beginPath(),r.setStrokeStyle(t.color),r.setLineWidth(o.width),y.forEach(function(t){if(1===t.length)r.moveTo(t[0].x,t[0].y),r.arc(t[0].x,t[0].y,1,0,2*Math.PI);else{r.moveTo(t[0].x,t[0].y);var e=0;if("curve"===o.type){for(var n,i=0;i<t.length;i++)if(n=t[i],0==e&&n.x>h&&(r.moveTo(n.x,n.y),e=1),0<i&&n.x>h&&n.x<p){var a=f(t,i-1);r.bezierCurveTo(a.ctrA.x,a.ctrA.y,a.ctrB.x,a.ctrB.y,n.x,n.y)}}else for(var s,l=0;l<t.length;l++)s=t[l],0==e&&s.x>h&&(r.moveTo(s.x,s.y),e=1),0<l&&s.x>h&&s.x<p&&r.lineTo(s.x,s.y);r.moveTo(t[0].x,t[0].y)}}),r.stroke(),r.setLineDash([]),!1!==e.dataPointShape&&ct(g,t.color,t.pointShape,r,e)}),!1!==e.dataLabel&&1===a&&t.forEach(function(t){var i,o,s;i=[].concat(e.chartData.yAxisData.ranges[t.index]),o=i.pop(),s=i.shift();var u=t.data,h=nt(u,o,s,l,c,e,n,a);ht(h,t,n,r)}),r.restore(),{xAxisPoints:l,calPoints:u,eachSpacing:c}}function At(t,e,n,r){var i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,a=e.chartData.xAxisData,s=a.xAxisPoints,l=a.eachSpacing,c=e.height-e.area[2],u=[],h=0,p=0;t.forEach(function(t){"column"==t.type&&(p+=1)}),r.save();var d=-2,v=s.length+2,g=0,y=e.width+l;if(e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(r.translate(e._scrollDistance_,0),d=Math.floor(-e._scrollDistance_/l)-2,v=d+e.xAxis.itemCount+4,g=-e._scrollDistance_-l+e.area[3],y=g+(e.xAxis.itemCount+4)*l),t.forEach(function(t){var a,x,m;a=[].concat(e.chartData.yAxisData.ranges[t.index]),x=a.pop(),m=a.shift();var _=t.data,b=nt(_,x,m,s,l,e,n,i);if(u.push(b),"column"==t.type){b=Q(b,l,p,h,n,e);for(var w,S=0;S<b.length;S++)if(w=b[S],null!==w&&S>d&&S<v){r.beginPath(),r.setStrokeStyle(w.color||t.color),r.setLineWidth(1),r.setFillStyle(w.color||t.color);var A=w.x-w.width/2;e.height,w.y,e.area[2];r.moveTo(A,w.y),r.moveTo(A-1,w.y),r.lineTo(A+w.width-2,w.y),r.lineTo(A+w.width-2,e.height-e.area[2]),r.lineTo(A,e.height-e.area[2]),r.lineTo(A,w.y),r.closePath(),r.stroke(),r.fill(),r.closePath(),r.fill()}h+=1}if("area"==t.type)for(var k,T=I(b),P=0;P<T.length;P++){if(k=T[P],r.beginPath(),r.setStrokeStyle(t.color),r.setFillStyle(o(t.color,.2)),r.setLineWidth(2*e.pixelRatio),1<k.length){var O=k[0],D=k[k.length-1];r.moveTo(O.x,O.y);var $=0;if("curve"===t.style){for(var L,C=0;C<k.length;C++)if(L=k[C],0==$&&L.x>g&&(r.moveTo(L.x,L.y),$=1),0<C&&L.x>g&&L.x<y){var F=f(k,C-1);r.bezierCurveTo(F.ctrA.x,F.ctrA.y,F.ctrB.x,F.ctrB.y,L.x,L.y)}}else for(var j,R=0;R<k.length;R++)j=k[R],0==$&&j.x>g&&(r.moveTo(j.x,j.y),$=1),0<R&&j.x>g&&j.x<y&&r.lineTo(j.x,j.y);r.lineTo(D.x,c),r.lineTo(O.x,c),r.lineTo(O.x,O.y)}else{var M=k[0];r.moveTo(M.x-l/2,M.y),r.lineTo(M.x+l/2,M.y),r.lineTo(M.x+l/2,c),r.lineTo(M.x-l/2,c),r.moveTo(M.x-l/2,M.y)}r.closePath(),r.fill()}if("line"==t.type){var E=I(b);E.forEach(function(n){if("dash"==t.lineType){var i=t.dashLength?t.dashLength:8;i*=e.pixelRatio,r.setLineDash([i,i])}if(r.beginPath(),r.setStrokeStyle(t.color),r.setLineWidth(2*e.pixelRatio),1===n.length)r.moveTo(n[0].x,n[0].y),r.arc(n[0].x,n[0].y,1,0,2*Math.PI);else{r.moveTo(n[0].x,n[0].y);var a=0;if("curve"==t.style){for(var o,s=0;s<n.length;s++)if(o=n[s],0==a&&o.x>g&&(r.moveTo(o.x,o.y),a=1),0<s&&o.x>g&&o.x<y){var l=f(n,s-1);r.bezierCurveTo(l.ctrA.x,l.ctrA.y,l.ctrB.x,l.ctrB.y,o.x,o.y)}}else for(var c,u=0;u<n.length;u++)c=n[u],0==a&&c.x>g&&(r.moveTo(c.x,c.y),a=1),0<u&&c.x>g&&c.x<y&&r.lineTo(c.x,c.y);r.moveTo(n[0].x,n[0].y)}r.stroke(),r.setLineDash([])})}"point"==t.type&&(t.addPoint=!0),1==t.addPoint&&"column"!==t.type&&ct(b,t.color,t.pointShape,r,e)}),!1!==e.dataLabel&&1===i){h=0;t.forEach(function(t){var a,o,c;a=[].concat(e.chartData.yAxisData.ranges[t.index]),o=a.pop(),c=a.shift();var u=t.data,f=nt(u,o,c,s,l,e,n,i);"column"===t.type?(f=Q(f,l,p,h,n,e),ht(f,t,n,r),h+=1):ht(f,t,n,r)})}return r.restore(),{xAxisPoints:s,calPoints:u,eachSpacing:l}}function kt(t,e,n,r,i,a){var o=t.extra.tooltip||{};o.horizentalLine&&t.tooltip&&1===r&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&yt(t,e,n,i,a),n.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&n.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===r&&mt(t.tooltip.textList,t.tooltip.offset,t,e,n,i,a),n.restore()}function Tt(t,e,n,r){var i=Math.ceil,a=e.chartData.xAxisData,o=a.xAxisPoints,s=a.startX,l=a.endX,c=a.eachSpacing,u="center";("line"==e.type||"area"==e.type)&&(u=e.xAxis.boundaryGap);var f=e.height-e.area[2],p=e.area[0];if(e.enableScroll&&e.xAxis.scrollShow){var d=e.height-e.area[2]+n.xAxisHeight,v=l-s,g=c*(o.length-1),x=0;e._scrollDistance_&&(x=-e._scrollDistance_*v/g),r.beginPath(),r.setLineCap("round"),r.setLineWidth(6*e.pixelRatio),r.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),r.moveTo(s,d),r.lineTo(l,d),r.stroke(),r.closePath(),r.beginPath(),r.setLineCap("round"),r.setLineWidth(6*e.pixelRatio),r.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),r.moveTo(s+x,d),r.lineTo(s+x+v*v/g,d),r.stroke(),r.closePath(),r.setLineCap("butt")}if(r.save(),e._scrollDistance_&&0!==e._scrollDistance_&&r.translate(e._scrollDistance_,0),!0===e.xAxis.calibration&&(r.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),r.setLineCap("butt"),r.setLineWidth(1*e.pixelRatio),o.forEach(function(t,n){0<n&&(r.beginPath(),r.moveTo(t-c/2,f),r.lineTo(t-c/2,f+3*e.pixelRatio),r.closePath(),r.stroke())})),!0!==e.xAxis.disableGrid&&(r.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),r.setLineCap("butt"),r.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&r.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),e.xAxis.gridEval=e.xAxis.gridEval||1,o.forEach(function(t,n){0==n%e.xAxis.gridEval&&(r.beginPath(),r.moveTo(t,f),r.lineTo(t,p),r.stroke())}),r.setLineDash([])),!0!==e.xAxis.disabled){var m=t.length;e.xAxis.labelCount&&(m=e.xAxis.itemCount?i(t.length/e.xAxis.itemCount*e.xAxis.labelCount):e.xAxis.labelCount,m-=1);for(var _=i(t.length/m),b=[],w=t.length,S=0;S<w;S++)0==S%_?b.push(t[S]):b.push("");b[w-1]=t[w-1];var A=e.xAxis.fontSize||n.fontSize;0===n._xAxisTextAngle_?b.forEach(function(t,i){var a=-y(t+"",A)/2;"center"==u&&(a+=c/2);var s=0;e.xAxis.scrollShow&&(s=6*e.pixelRatio),r.beginPath(),r.setFontSize(A),r.setFillStyle(e.xAxis.fontColor||"#666666"),r.fillText(t+"",o[i]+a,f+A+(n.xAxisHeight-s-A)/2),r.closePath(),r.stroke()}):b.forEach(function(t,i){r.save(),r.beginPath(),r.setFontSize(A),r.setFillStyle(e.xAxis.fontColor||"#666666");var a=y(t+"",A),s=-a;"center"==u&&(s+=c/2);var l=h(o[i]+c/2,f+A/2+5,e.height),p=l.transX,d=l.transY;r.rotate(-1*n._xAxisTextAngle_),r.translate(p,d),r.fillText(t+"",o[i]+s,f+A+5),r.closePath(),r.stroke(),r.restore()})}r.restore(),e.xAxis.axisLine&&(r.beginPath(),r.setStrokeStyle(e.xAxis.axisLineColor),r.setLineWidth(1*e.pixelRatio),r.moveTo(s,e.height-e.area[2]),r.lineTo(l,e.height-e.area[2]),r.stroke())}function Pt(t,e,n,r){if(!0!==e.yAxis.disableGrid){for(var i=e.height-e.area[0]-e.area[2],a=i/e.yAxis.splitNumber,o=e.area[3],s=e.chartData.xAxisData.xAxisPoints,l=e.chartData.xAxisData.eachSpacing,c=l*(s.length-1),u=[],h=0;h<e.yAxis.splitNumber+1;h++)u.push(e.height-e.area[2]-a*h);r.save(),e._scrollDistance_&&0!==e._scrollDistance_&&r.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&r.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),r.setStrokeStyle(e.yAxis.gridColor),r.setLineWidth(1*e.pixelRatio),u.forEach(function(t){r.beginPath(),r.moveTo(o,t),r.lineTo(o+c,t),r.stroke()}),r.setLineDash([]),r.restore()}}function Ot(t,e,n,r){if(!0!==e.yAxis.disabled){var i=e.height-e.area[0]-e.area[2],a=i/e.yAxis.splitNumber,o=e.area[3],s=e.width-e.area[1],l=e.height-e.area[2],c=l+n.xAxisHeight;e.xAxis.scrollShow&&(c-=3*e.pixelRatio),e.xAxis.rotateLabel&&(c=e.height-e.area[2]+3),r.beginPath(),r.setFillStyle(e.background||"#ffffff"),0>e._scrollDistance_&&r.fillRect(0,0,o,c),1==e.enableScroll&&r.fillRect(s,0,e.width,c),r.closePath(),r.stroke();for(var u=[],h=0;h<=e.yAxis.splitNumber;h++)u.push(e.area[0]+a*h);for(var f,p=e.area[3],d=e.width-e.area[1],v=function(t,i){if(t=e.yAxis.data[i],!0!==t.disabled){var a=e.chartData.yAxisData.rangesFormat[i],o=t.fontSize||n.fontSize,s=e.chartData.yAxisData.yAxisWidth[i];if(a.forEach(function(n,i){var a=u[i]?u[i]:l;r.beginPath(),r.setFontSize(o),r.setLineWidth(1*e.pixelRatio),r.setStrokeStyle(t.axisLineColor||"#cccccc"),r.setFillStyle(t.fontColor||"#666666"),"left"==s.position?(r.fillText(n+"",p-s.width,a+o/2),1==t.calibration&&(r.moveTo(p,a),r.lineTo(p-3*e.pixelRatio,a))):(r.fillText(n+"",d+4*e.pixelRatio,a+o/2),1==t.calibration&&(r.moveTo(d,a),r.lineTo(d+3*e.pixelRatio,a))),r.closePath(),r.stroke()}),!1!==t.axisLine&&(r.beginPath(),r.setStrokeStyle(t.axisLineColor||"#cccccc"),r.setLineWidth(1*e.pixelRatio),"left"==s.position?(r.moveTo(p,e.height-e.area[2]),r.lineTo(p,e.area[0])):(r.moveTo(d,e.height-e.area[2]),r.lineTo(d,e.area[0])),r.stroke()),e.yAxis.showTitle){var c=t.titleFontSize||n.fontSize,h=t.title;r.beginPath(),r.setFontSize(c),r.setFillStyle(t.titleFontColor||"#666666"),"left"==s.position?r.fillText(h,p-y(h,c)/2,e.area[0]-10*e.pixelRatio):r.fillText(h,d-y(h,c)/2,e.area[0]-10*e.pixelRatio),r.closePath(),r.stroke()}"left"==s.position?p-=s.width+e.yAxis.padding:d+=s.width+e.yAxis.padding}f=t},g=0;g<e.yAxis.data.length;g++)v(f,g)}}function Dt(t,e,n,r,i){if(!1!==e.legend.show){var a=i.legendData,o=a.points,s=a.area,l=e.legend.padding,c=e.legend.fontSize,u=15*e.pixelRatio,h=5*e.pixelRatio,f=e.legend.itemGap,p=Math.max(e.legend.lineHeight*e.pixelRatio,c);r.beginPath(),r.setLineWidth(e.legend.borderWidth),r.setStrokeStyle(e.legend.borderColor),r.setFillStyle(e.legend.backgroundColor),r.moveTo(s.start.x,s.start.y),r.rect(s.start.x,s.start.y,s.width,s.height),r.closePath(),r.fill(),r.stroke(),o.forEach(function(t,i){var o=0,d=0;o=a.widthArr[i],d=a.heightArr[i];var v=0,g=0;"top"==e.legend.position||"bottom"==e.legend.position?(v=s.start.x+(s.width-o)/2,g=s.start.y+l+i*p):(o=0==i?0:a.widthArr[i-1],v=s.start.x+l+o,g=s.start.y+l+(s.height-d)/2),r.setFontSize(n.fontSize);for(var x,m=0;m<t.length;m++){switch(x=t[m],x.area=[0,0,0,0],x.area[0]=v,x.area[1]=g,x.area[3]=g+p,r.beginPath(),r.setLineWidth(1*e.pixelRatio),r.setStrokeStyle(x.show?x.color:e.legend.hiddenColor),r.setFillStyle(x.show?x.color:e.legend.hiddenColor),x.legendShape){case"line":r.moveTo(v,g+.5*p-2*e.pixelRatio),r.fillRect(v,g+.5*p-2*e.pixelRatio,15*e.pixelRatio,4*e.pixelRatio);break;case"triangle":r.moveTo(v+7.5*e.pixelRatio,g+.5*p-5*e.pixelRatio),r.lineTo(v+2.5*e.pixelRatio,g+.5*p+5*e.pixelRatio),r.lineTo(v+12.5*e.pixelRatio,g+.5*p+5*e.pixelRatio),r.lineTo(v+7.5*e.pixelRatio,g+.5*p-5*e.pixelRatio);break;case"diamond":r.moveTo(v+7.5*e.pixelRatio,g+.5*p-5*e.pixelRatio),r.lineTo(v+2.5*e.pixelRatio,g+.5*p),r.lineTo(v+7.5*e.pixelRatio,g+.5*p+5*e.pixelRatio),r.lineTo(v+12.5*e.pixelRatio,g+.5*p),r.lineTo(v+7.5*e.pixelRatio,g+.5*p-5*e.pixelRatio);break;case"circle":r.moveTo(v+7.5*e.pixelRatio,g+.5*p),r.arc(v+7.5*e.pixelRatio,g+.5*p,5*e.pixelRatio,0,2*Math.PI);break;case"rect":r.moveTo(v,g+.5*p-5*e.pixelRatio),r.fillRect(v,g+.5*p-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio);break;default:r.moveTo(v,g+.5*p-5*e.pixelRatio),r.fillRect(v,g+.5*p-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio)}r.closePath(),r.fill(),r.stroke(),v+=u+h,r.beginPath(),r.setFontSize(c),r.setFillStyle(x.show?e.legend.fontColor:e.legend.hiddenColor),r.fillText(x.name,v,g+(.5*p+.5*c-2)),r.closePath(),r.stroke(),"top"==e.legend.position||"bottom"==e.legend.position?(v+=y(x.name,c)+f,x.area[2]=v):(x.area[2]=v+y(x.name,c)+f,v-=u+h,g+=p)}})}}function $t(t,e,n,r){var a=Math.PI,s=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,l=i({},{activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,ringWidth:0,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.pie),c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2};0==n.pieChartLinePadding&&(n.pieChartLinePadding=l.activeRadius);var u=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding);t=U(t,u,s);var h=l.activeRadius;if(t=t.map(function(t){return t._start_+=l.offsetAngle*a/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(r.beginPath(),r.setFillStyle(o(t.color,e.extra.pie.activeOpacity||.5)),r.moveTo(c.x,c.y),r.arc(c.x,c.y,t._radius_+h,t._start_,t._start_+2*t._proportion_*a),r.closePath(),r.fill()),r.beginPath(),r.setLineWidth(l.borderWidth*e.pixelRatio),r.lineJoin="round",r.setStrokeStyle(l.borderColor),r.setFillStyle(t.color),r.moveTo(c.x,c.y),r.arc(c.x,c.y,t._radius_,t._start_,t._start_+2*t._proportion_*a),r.closePath(),r.fill(),1==l.border&&r.stroke()}),"ring"===e.type){var f=.6*u;"number"==typeof e.extra.pie.ringWidth&&0<e.extra.pie.ringWidth&&(f=Math.max(0,u-e.extra.pie.ringWidth)),r.beginPath(),r.setFillStyle(e.background||"#ffffff"),r.moveTo(c.x,c.y),r.arc(c.x,c.y,f,0,2*a),r.closePath(),r.fill()}if(!1!==e.dataLabel&&1===s){for(var p=!1,d=0,v=t.length;d<v;d++)if(0<t[d].data){p=!0;break}p&&dt(t,e,n,r,u,c)}return 1===s&&"ring"===e.type&&ut(e,n,r,c),{center:c,radius:u,series:t}}function Lt(t,e,n,r){var a=Math.PI,s=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,l=i({},{type:"area",activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.rose);0==n.pieChartLinePadding&&(n.pieChartLinePadding=l.activeRadius);var c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},u=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding),h=l.minRadius||.5*u;t=V(t,l.type,h,u,s);var f=l.activeRadius;if(t=t.map(function(t){return t._start_+=(l.offsetAngle||0)*a/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(r.beginPath(),r.setFillStyle(o(t.color,l.activeOpacity||.5)),r.moveTo(c.x,c.y),r.arc(c.x,c.y,f+t._radius_,t._start_,t._start_+2*t._rose_proportion_*a),r.closePath(),r.fill()),r.beginPath(),r.setLineWidth(l.borderWidth*e.pixelRatio),r.lineJoin="round",r.setStrokeStyle(l.borderColor),r.setFillStyle(t.color),r.moveTo(c.x,c.y),r.arc(c.x,c.y,t._radius_,t._start_,t._start_+2*t._rose_proportion_*a),r.closePath(),r.fill(),1==l.border&&r.stroke()}),!1!==e.dataLabel&&1===s){for(var p=!1,d=0,v=t.length;d<v;d++)if(0<t[d].data){p=!0;break}p&&dt(t,e,n,r,u,c)}return{center:c,radius:u,series:t}}function Ct(t,e,n,r){var a=Math.PI,o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,s=i({},{startAngle:.75,endAngle:.25,type:"default",width:12*e.pixelRatio,gap:2*e.pixelRatio},e.extra.arcbar);t=G(t,s,o);var l,c=s.center?s.center:{x:e.width/2,y:e.height/2};s.radius?l=s.radius:(l=Math.min(c.x,c.y),l-=5*e.pixelRatio,l-=s.width/2);for(var u,h=0;h<t.length;h++)u=t[h],r.setLineWidth(s.width),r.setStrokeStyle(s.backgroundColor||"#E9E9E9"),r.setLineCap("round"),r.beginPath(),"default"==s.type?r.arc(c.x,c.y,l-(s.width+s.gap)*h,s.startAngle*a,s.endAngle*a,!1):r.arc(c.x,c.y,l-(s.width+s.gap)*h,0,2*a,!1),r.stroke(),r.setLineWidth(s.width),r.setStrokeStyle(u.color),r.setLineCap("round"),r.beginPath(),r.arc(c.x,c.y,l-(s.width+s.gap)*h,s.startAngle*a,u._proportion_*a,!1),r.stroke();return ut(e,n,r,c),{center:c,radius:l,series:t}}function Ft(t,e,n,r,a){var s=Math.PI,l=5<arguments.length&&void 0!==arguments[5]?arguments[5]:1,c=i({},{type:"default",startAngle:.75,endAngle:.25,width:15,splitLine:{fixRadius:0,splitNumber:10,width:15,color:"#FFFFFF",childNumber:5,childWidth:5},pointer:{width:15,color:"auto"}},n.extra.gauge);null==c.oldAngle&&(c.oldAngle=c.startAngle),null==c.oldData&&(c.oldData=0),t=X(t,c.startAngle,c.endAngle);var u={x:n.width/2,y:n.height/2},h=Math.min(u.x,u.y);h-=5*n.pixelRatio,h-=c.width/2;var f=h-c.width,p=0;if("progress"==c.type){var d=h-3*c.width;a.beginPath();var v=a.createLinearGradient(u.x,u.y-d,u.x,u.y+d);v.addColorStop("0",o(e[0].color,.3)),v.addColorStop("1.0",o("#FFFFFF",.1)),a.setFillStyle(v),a.arc(u.x,u.y,d,0,2*s,!1),a.fill(),a.setLineWidth(c.width),a.setStrokeStyle(o(e[0].color,.3)),a.setLineCap("round"),a.beginPath(),a.arc(u.x,u.y,f,c.startAngle*s,c.endAngle*s,!1),a.stroke(),p=c.startAngle-c.endAngle+1;c.splitLine.splitNumber;var g=p/c.splitLine.splitNumber/c.splitLine.childNumber,y=-h-.5*c.width-c.splitLine.fixRadius,x=-h-c.width-c.splitLine.fixRadius+c.splitLine.width;a.save(),a.translate(u.x,u.y),a.rotate((c.startAngle-1)*s);for(var m=c.splitLine.splitNumber*c.splitLine.childNumber+1,_=e[0].data*l,b=0;b<m;b++)a.beginPath(),_>b/m?a.setStrokeStyle(o(e[0].color,1)):a.setStrokeStyle(o(e[0].color,.3)),a.setLineWidth(3*n.pixelRatio),a.moveTo(y,0),a.lineTo(x,0),a.stroke(),a.rotate(g*s);a.restore(),e=G(e,c,l),a.setLineWidth(c.width),a.setStrokeStyle(e[0].color),a.setLineCap("round"),a.beginPath(),a.arc(u.x,u.y,f,c.startAngle*s,e[0]._proportion_*s,!1),a.stroke();var w=h-2.5*c.width;a.save(),a.translate(u.x,u.y),a.rotate((e[0]._proportion_-1)*s),a.beginPath(),a.setLineWidth(c.width/3);var S=a.createLinearGradient(0,.6*-w,0,.6*w);S.addColorStop("0",o("#FFFFFF",0)),S.addColorStop("0.5",o(e[0].color,1)),S.addColorStop("1.0",o("#FFFFFF",0)),a.setStrokeStyle(S),a.arc(0,0,w,.85*s,1.15*s,!1),a.stroke(),a.beginPath(),a.setLineWidth(1),a.setStrokeStyle(e[0].color),a.setFillStyle(e[0].color),a.moveTo(-w-c.width/3/2,-4),a.lineTo(-w-c.width/3/2-4,0),a.lineTo(-w-c.width/3/2,4),a.lineTo(-w-c.width/3/2,-4),a.stroke(),a.fill(),a.restore()}else{a.setLineWidth(c.width),a.setLineCap("butt");for(var A,k=0;k<t.length;k++)A=t[k],a.beginPath(),a.setStrokeStyle(A.color),a.arc(u.x,u.y,h,A._startAngle_*s,A._endAngle_*s,!1),a.stroke();a.save(),p=c.startAngle-c.endAngle+1;var T=p/c.splitLine.splitNumber,P=p/c.splitLine.splitNumber/c.splitLine.childNumber,O=-h-.5*c.width-c.splitLine.fixRadius,D=-h-.5*c.width-c.splitLine.fixRadius+c.splitLine.width,$=-h-.5*c.width-c.splitLine.fixRadius+c.splitLine.childWidth;a.translate(u.x,u.y),a.rotate((c.startAngle-1)*s);for(var L=0;L<c.splitLine.splitNumber+1;L++)a.beginPath(),a.setStrokeStyle(c.splitLine.color),a.setLineWidth(2*n.pixelRatio),a.moveTo(O,0),a.lineTo(D,0),a.stroke(),a.rotate(T*s);a.restore(),a.save(),a.translate(u.x,u.y),a.rotate((c.startAngle-1)*s);for(var C=0;C<c.splitLine.splitNumber*c.splitLine.childNumber+1;C++)a.beginPath(),a.setStrokeStyle(c.splitLine.color),a.setLineWidth(1*n.pixelRatio),a.moveTo(O,0),a.lineTo($,0),a.stroke(),a.rotate(P*s);a.restore(),e=J(e,t,c,l);for(var F,j=0;j<e.length;j++)F=e[j],a.save(),a.translate(u.x,u.y),a.rotate((F._proportion_-1)*s),a.beginPath(),a.setFillStyle(F.color),a.moveTo(c.pointer.width,0),a.lineTo(0,-c.pointer.width/2),a.lineTo(-f,0),a.lineTo(0,c.pointer.width/2),a.lineTo(c.pointer.width,0),a.closePath(),a.fill(),a.beginPath(),a.setFillStyle("#FFFFFF"),a.arc(0,0,c.pointer.width/6,0,2*s,!1),a.fill(),a.restore();!1!==n.dataLabel&&ft(c,h,u,n,r,a)}return ut(n,r,a,u),1===l&&"gauge"===n.type&&(n.extra.gauge.oldAngle=e[0]._proportion_,n.extra.gauge.oldData=e[0].data),{center:u,radius:h,innerRadius:f,categories:t,totalAngle:p}}function jt(t,e,n,r){var a=Math.cos,s=Math.sin,l=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,c=i({},{gridColor:"#cccccc",labelColor:"#666666",opacity:.2,gridCount:3},e.extra.radar),u=S(e.categories.length),h={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},f=Math.min(h.x-(w(e.categories)+n.radarLabelTextMargin),h.y-n.radarLabelTextMargin);f-=e.padding[1],r.beginPath(),r.setLineWidth(1*e.pixelRatio),r.setStrokeStyle(c.gridColor),u.forEach(function(t){var e=p(f*a(t),f*s(t),h);r.moveTo(h.x,h.y),r.lineTo(e.x,e.y)}),r.stroke(),r.closePath();for(var d=function(t){var n={};r.beginPath(),r.setLineWidth(1*e.pixelRatio),r.setStrokeStyle(c.gridColor),u.forEach(function(e,i){var o=p(f/c.gridCount*t*a(e),f/c.gridCount*t*s(e),h);0===i?(n=o,r.moveTo(o.x,o.y)):r.lineTo(o.x,o.y)}),r.lineTo(n.x,n.y),r.stroke(),r.closePath()},v=1;v<=c.gridCount;v++)d(v);var g=H(u,h,f,t,e,l);return g.forEach(function(t){if(r.beginPath(),r.setFillStyle(o(t.color,c.opacity)),t.data.forEach(function(t,e){0===e?r.moveTo(t.position.x,t.position.y):r.lineTo(t.position.x,t.position.y)}),r.closePath(),r.fill(),!1!==e.dataPointShape){var n=t.data.map(function(t){return t.position});ct(n,t.color,t.pointShape,r,e)}}),pt(u,f,h,e,n,r),{center:h,radius:f,angleList:u}}function Rt(t,e,n){n=0==n?1:n;for(var r=[],i=0;i<n;i++)r[i]=Math.random();return Math.floor(r.reduce(function(t,e){return t+e})/n*(e-t))+t}function Mt(t,e,n,r){for(var i=!1,a=0;a<e.length;a++)if(e[a].area){if(!(t[3]<e[a].area[1]||t[0]>e[a].area[2]||t[1]>e[a].area[3]||t[2]<e[a].area[0])){i=!0;break}if(0>t[0]||0>t[1]||t[2]>n||t[3]>r){i=!0;break}i=!1}return i}function Et(t){for(var e,n,r={xMin:180,xMax:0,yMin:90,yMax:0},i=0;i<t.length;i++){n=t[i].geometry.coordinates;for(var a=0;a<n.length;a++){e=n[a],1==e.length&&(e=e[0]);for(var o=0;o<e.length;o++){var s=e[o][0],l=e[o][1],c={x:s,y:l};r.xMin=r.xMin<c.x?r.xMin:c.x,r.xMax=r.xMax>c.x?r.xMax:c.x,r.yMin=r.yMin<c.y?r.yMin:c.y,r.yMax=r.yMax>c.y?r.yMax:c.y}}}return r}function It(t,e,n,r,i,a){return{x:(e-n.xMin)*r+i,y:(n.yMax-t)*r+a}}function Nt(t,e,n,r,i,a){return{x:(e-i)/r+n.xMin,y:n.yMax-(t-a)/r}}function zt(t,e,n){if(e[1]==n[1])return!1;if(e[1]>t[1]&&n[1]>t[1])return!1;if(e[1]<t[1]&&n[1]<t[1])return!1;if(e[1]==t[1]&&n[1]>t[1])return!1;if(n[1]==t[1]&&e[1]>t[1])return!1;if(e[0]<t[0]&&n[1]<t[1])return!1;var r=n[0]-(n[0]-e[0])*(n[1]-t[1])/(n[1]-e[1]);return!(r<t[0])}function Bt(t,e){for(var n,r=0,i=0;i<e.length;i++){n=e[i][0],1==e.length&&(n=e[i][0]);for(var a=0;a<n.length-1;a++){var o=n[a],s=n[a+1];zt(t,o,s)&&(r+=1)}}return!(1!=r%2)}function Wt(t,e,n,r){var a,s,l=Math.abs,c=i({},{border:!0,borderWidth:1,borderColor:"#666666",fillOpacity:.6,activeBorderColor:"#f04864",activeFillColor:"#facc14",activeFillOpacity:1},e.extra.map),u=t,h=Et(u),f=e.width/l(h.xMax-h.xMin),p=e.height/l(h.yMax-h.yMin),d=f<p?f:p,v=e.width/2-l(h.xMax-h.xMin)/2*d,g=e.height/2-l(h.yMax-h.yMin)/2*d;r.beginPath(),r.clearRect(0,0,e.width,e.height),r.setFillStyle(e.background||"#FFFFFF"),r.rect(0,0,e.width,e.height),r.fill();for(var x=0;x<u.length;x++){r.beginPath(),r.setLineWidth(c.borderWidth*e.pixelRatio),r.setStrokeStyle(c.borderColor),r.setFillStyle(o(t[x].color,c.fillOpacity)),e.tooltip&&e.tooltip.index==x&&(r.setStrokeStyle(c.activeBorderColor),r.setFillStyle(o(c.activeFillColor,c.activeFillOpacity)));for(var m=u[x].geometry.coordinates,_=0;_<m.length;_++){a=m[_],1==a.length&&(a=a[0]);for(var b=0;b<a.length;b++)s=It(a[b][1],a[b][0],h,d,v,g),0==b?(r.beginPath(),r.moveTo(s.x,s.y)):r.lineTo(s.x,s.y);r.fill(),1==c.border&&r.stroke()}if(1==e.dataLabel){var w=u[x].properties.centroid;if(w){s=It(w[1],w[0],h,d,v,g);var S=u[x].textSize||n.fontSize,A=u[x].properties.name;r.beginPath(),r.setFontSize(S),r.setFillStyle(u[x].textColor||"#666666"),r.fillText(A,s.x-y(A,S)/2,s.y+S/2),r.closePath(),r.stroke()}}}e.chartData.mapData={bounds:h,scale:d,xoffset:v,yoffset:g},kt(e,n,r,1),r.draw()}function Ht(t,e){var n=t.series.sort(function(t,e){return parseInt(e.textSize)-parseInt(t.textSize)});switch(e){case"normal":for(var r=0;r<n.length;r++){for(var i=void 0,a=void 0,o=void 0,s=n[r].name,l=n[r].textSize,c=y(s,l),u=0;;){u++,i=Rt(-t.width/2,t.width/2,5)-c/2,a=Rt(-t.height/2,t.height/2,5)+l/2,o=[i-5+t.width/2,a-5-l+t.height/2,i+c+5+t.width/2,a+5+t.height/2];var h=Mt(o,n,t.width,t.height);if(!h)break;if(1e3==u){o=[-100,-100,-100,-100];break}}n[r].area=o}break;case"vertical":for(var f=function(){return!!(.7<Math.random())},p=0;p<n.length;p++){for(var d=void 0,v=void 0,g=void 0,x=void 0,m=n[p].name,_=n[p].textSize,b=y(m,_),w=f(),S=0;;){S++;var A=void 0;if(w?(d=Rt(-t.width/2,t.width/2,5)-b/2,v=Rt(-t.height/2,t.height/2,5)+_/2,g=[v-5-b+t.width/2,-d-5+t.height/2,v+5+t.width/2,-d+_+5+t.height/2],x=[t.width-(t.width/2-t.height/2)-(-d+_+5+t.height/2)-5,t.height/2-t.width/2+(v-5-b+t.width/2)-5,t.width-(t.width/2-t.height/2)-(-d+_+5+t.height/2)+_,t.height/2-t.width/2+(v-5-b+t.width/2)+b+5],A=Mt(x,n,t.height,t.width)):(d=Rt(-t.width/2,t.width/2,5)-b/2,v=Rt(-t.height/2,t.height/2,5)+_/2,g=[d-5+t.width/2,v-5-_+t.height/2,d+b+5+t.width/2,v+5+t.height/2],A=Mt(g,n,t.width,t.height)),!A)break;if(1e3==S){g=[-1e3,-1e3,-1e3,-1e3];break}}w?(n[p].area=x,n[p].areav=g):n[p].area=g,n[p].rotate=w}}return n}function Ut(t,e,n,r){var a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1;i({},{type:"normal",autoColors:!0},e.extra.word);r.beginPath(),r.setFillStyle(e.background||"#FFFFFF"),r.rect(0,0,e.width,e.height),r.fill(),r.save();var o=e.chartData.wordCloudData;r.translate(e.width/2,e.height/2);for(var s=0;s<o.length;s++){r.save(),o[s].rotate&&r.rotate(90*Math.PI/180);var l=o[s].name,c=o[s].textSize,u=y(l,c);r.beginPath(),r.setStrokeStyle(o[s].color),r.setFillStyle(o[s].color),r.setFontSize(c),o[s].rotate?0<o[s].areav[0]&&(e.tooltip&&e.tooltip.index==s?r.strokeText(l,(o[s].areav[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].areav[1]+5+c-e.height/2)*a):r.fillText(l,(o[s].areav[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].areav[1]+5+c-e.height/2)*a)):0<o[s].area[0]&&(e.tooltip&&e.tooltip.index==s?r.strokeText(l,(o[s].area[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].area[1]+5+c-e.height/2)*a):r.fillText(l,(o[s].area[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].area[1]+5+c-e.height/2)*a)),r.stroke(),r.restore()}r.restore()}function qt(t,e,n,r){var a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,s=i({},{activeWidth:10,activeOpacity:.3,border:!1,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right"},e.extra.funnel),l=(e.height-e.area[0]-e.area[2])/t.length,c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.height-e.area[2]},u=s.activeWidth,h=Math.min((e.width-e.area[1]-e.area[3])/2-u,(e.height-e.area[0]-e.area[2])/2-u);t=q(t,h,a),r.save(),r.translate(c.x,c.y);for(var f=0;f<t.length;f++)0==f?(e.tooltip&&e.tooltip.index==f&&(r.beginPath(),r.setFillStyle(o(t[f].color,s.activeOpacity)),r.moveTo(-u,0),r.lineTo(-t[f].radius-u,-l),r.lineTo(t[f].radius+u,-l),r.lineTo(u,0),r.lineTo(-u,0),r.closePath(),r.fill()),t[f].funnelArea=[c.x-t[f].radius,c.y-l,c.x+t[f].radius,c.y],r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.setStrokeStyle(s.borderColor),r.setFillStyle(o(t[f].color,s.fillOpacity)),r.moveTo(0,0),r.lineTo(-t[f].radius,-l),r.lineTo(t[f].radius,-l),r.lineTo(0,0),r.closePath(),r.fill(),1==s.border&&r.stroke()):(e.tooltip&&e.tooltip.index==f&&(r.beginPath(),r.setFillStyle(o(t[f].color,s.activeOpacity)),r.moveTo(0,0),r.lineTo(-t[f-1].radius-u,0),r.lineTo(-t[f].radius-u,-l),r.lineTo(t[f].radius+u,-l),r.lineTo(t[f-1].radius+u,0),r.lineTo(0,0),r.closePath(),r.fill()),t[f].funnelArea=[c.x-t[f].radius,c.y-l*(f+1),c.x+t[f].radius,c.y-l*f],r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.setStrokeStyle(s.borderColor),r.setFillStyle(o(t[f].color,s.fillOpacity)),r.moveTo(0,0),r.lineTo(-t[f-1].radius,0),r.lineTo(-t[f].radius,-l),r.lineTo(t[f].radius,-l),r.lineTo(t[f-1].radius,0),r.lineTo(0,0),r.closePath(),r.fill(),1==s.border&&r.stroke()),r.translate(0,-l);return r.restore(),!1!==e.dataLabel&&1===a&&Vt(t,e,r,l,s.labelAlign,u,c),{center:c,radius:h,series:t}}function Vt(t,e,n,r,i,o,s){for(var l=Math.PI,c=0;c<t.length;c++){var u=void 0,h=void 0,f=void 0,p=void 0,d=t[c],v=d.format?d.format(+d._proportion_.toFixed(2)):a.toFixed(100*d._proportion_)+"%";"right"==i?(u=0==c?(d.funnelArea[2]+s.x)/2:(d.funnelArea[2]+t[c-1].funnelArea[2])/2,h=u+2*o,f=d.funnelArea[1]+r/2,p=d.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(d.color),n.setFillStyle(d.color),n.beginPath(),n.moveTo(u,f),n.lineTo(h,f),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(h,f),n.arc(h,f,2,0,2*l),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(p),n.setFillStyle(d.textColor||"#666666"),n.fillText(v,h+5,f+p/2-2),n.closePath(),n.stroke(),n.closePath()):(u=0==c?(d.funnelArea[0]+s.x)/2:(d.funnelArea[0]+t[c-1].funnelArea[0])/2,h=u-2*o,f=d.funnelArea[1]+r/2,p=d.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(d.color),n.setFillStyle(d.color),n.beginPath(),n.moveTo(u,f),n.lineTo(h,f),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(h,f),n.arc(h,f,2,0,2*l),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(p),n.setFillStyle(d.textColor||"#666666"),n.fillText(v,h-5-y(v),f+p/2-2),n.closePath(),n.stroke(),n.closePath())}}function Gt(t,e){e.draw()}var Xt={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){var e=Math.pow;return 1>(t/=.5)?.5*e(t,3):.5*(e(t-2,3)+2)},linear:function(t){return t}};function Jt(t){this.isStop=!1,t.duration="undefined"==typeof t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e=function(){return"undefined"==typeof setTimeout?"undefined"==typeof requestAnimationFrame?function(t){t(null)}:requestAnimationFrame:function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}}(),n=null,r=function(i){if(null===i||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===n&&(n=i),i-n<t.duration){var a=(i-n)/t.duration,o=Xt[t.timing];a=o(a),t.onProcess&&t.onProcess(a),e(r,17)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};r=r.bind(this),e(r,17)}function Kt(t,e,n,r){var a=this,o=e.series,s=e.categories;o=v(o,e,n);var c=e.animation?e.duration:0;a.animationInstance&&a.animationInstance.stop();var u=null;if("candle"==t){var h=i({},e.extra.candle.average);h.show?(u=l(h.day,h.name,h.color,o[0].data),u=v(u,e,n),e.seriesMA=u):u=e.seriesMA?e.seriesMA=v(e.seriesMA,e,n):o}else u=o;e._series_=o=P(o),e.area=[,,,,];for(var f=0;4>f;f++)e.area[f]=e.padding[f];var p=N(u,e,n,e.chartData),d=p.area.wholeHeight,g=p.area.wholeWidth;switch(e.legend.position){case"top":e.area[0]+=d;break;case"bottom":e.area[2]+=d;break;case"left":e.area[3]+=g;break;case"right":e.area[1]+=g}var y={},x=0;if("line"===e.type||"column"===e.type||"area"===e.type||"mix"===e.type||"candle"===e.type){if(y=at(o,e,n),x=y.yAxisWidth,e.yAxis.showTitle){for(var m=0,_=0;_<e.yAxis.data.length;_++)m=Math.max(m,e.yAxis.data[_].titleFontSize?e.yAxis.data[_].titleFontSize:n.fontSize);e.area[0]+=(m+6)*e.pixelRatio}for(var b=0,w=0,S=0;S<x.length;S++)"left"==x[S].position?(e.area[3]+=0<w?x[S].width+e.yAxis.padding:x[S].width,w+=1):(e.area[1]+=0<b?x[S].width+e.yAxis.padding:x[S].width,b+=1)}else n.yAxisWidth=x;if(e.chartData.yAxisData=y,e.categories&&e.categories.length){e.chartData.xAxisData=tt(e.categories,e,n);var A=z(e.categories,e,n,e.chartData.xAxisData.eachSpacing),k=A.xAxisHeight,T=A.angle;n.xAxisHeight=k,n._xAxisTextAngle_=T,e.area[2]+=k,e.chartData.categoriesData=A}else if("line"===e.type||"area"===e.type||"points"===e.type){e.chartData.xAxisData=W(o,e,n),s=e.chartData.xAxisData.rangesFormat;var O=z(s,e,n,e.chartData.xAxisData.eachSpacing),D=O.xAxisHeight,$=O.angle;n.xAxisHeight=D,n._xAxisTextAngle_=$,e.area[2]+=D,e.chartData.categoriesData=O}else e.chartData.xAxisData={xAxisPoints:[]};if(e.enableScroll&&"right"==e.xAxis.scrollAlign&&void 0===e._scrollDistance_){var L=0,C=e.chartData.xAxisData.xAxisPoints,F=e.chartData.xAxisData.startX,j=e.chartData.xAxisData.endX,R=e.chartData.xAxisData.eachSpacing,M=R*(C.length-1);L=j-F-M,a.scrollOption={currentOffset:L,startTouchX:L,distance:0,lastMoveTime:0},e._scrollDistance_=L}switch(("pie"===t||"ring"===t||"rose"===t)&&(n._pieTextMaxLength_=!1===e.dataLabel?0:K(u)),t){case"word":var E=i({},{type:"normal",autoColors:!0},e.extra.word);(1==e.updateData||null==e.updateData)&&(e.chartData.wordCloudData=Ht(e,E.type)),this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&lt(r,e),Ut(o,e,n,r,t),Gt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"map":r.clearRect(0,0,e.width,e.height),Wt(o,e,n,r);break;case"funnel":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&lt(r,e),e.chartData.funnelData=qt(o,e,n,r,t),Dt(e.series,e,n,r,e.chartData),kt(e,n,r,t),Gt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"line":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&lt(r,e),Pt(s,e,n,r),Tt(s,e,n,r);var i=St(o,e,n,r,t),a=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Ot(o,e,n,r),!1!==e.enableMarkLine&&1===t&&gt(e,n,r),Dt(e.series,e,n,r,e.chartData),kt(e,n,r,t,c,a),Gt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&lt(r,e),Pt(s,e,n,r),Tt(s,e,n,r);var i=At(o,e,n,r,t),a=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Ot(o,e,n,r),!1!==e.enableMarkLine&&1===t&&gt(e,n,r),Dt(e.series,e,n,r,e.chartData),kt(e,n,r,t,c,a),Gt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&lt(r,e),Pt(s,e,n,r),Tt(s,e,n,r);var i=_t(o,e,n,r,t),a=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Ot(o,e,n,r),!1!==e.enableMarkLine&&1===t&&gt(e,n,r),Dt(e.series,e,n,r,e.chartData),kt(e,n,r,t,c,a),Gt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&lt(r,e),Pt(s,e,n,r),Tt(s,e,n,r);var i=wt(o,e,n,r,t),a=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Ot(o,e,n,r),!1!==e.enableMarkLine&&1===t&&gt(e,n,r),Dt(e.series,e,n,r,e.chartData),kt(e,n,r,t,c,a),Gt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&lt(r,e),e.chartData.pieData=$t(o,e,n,r,t),Dt(e.series,e,n,r,e.chartData),kt(e,n,r,t),Gt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&lt(r,e),e.chartData.pieData=Lt(o,e,n,r,t),Dt(e.series,e,n,r,e.chartData),kt(e,n,r,t),Gt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&lt(r,e),e.chartData.radarData=jt(o,e,n,r,t),Dt(e.series,e,n,r,e.chartData),kt(e,n,r,t),Gt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&lt(r,e),e.chartData.arcbarData=Ct(o,e,n,r,t),Gt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&lt(r,e),e.chartData.gaugeData=Ft(s,o,e,n,r,t),Gt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&lt(r,e),Pt(s,e,n,r),Tt(s,e,n,r);var i=bt(o,u,e,n,r,t),a=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Ot(o,e,n,r),!1!==e.enableMarkLine&&1===t&&gt(e,n,r),Dt(u||e.series,e,n,r,e.chartData),kt(e,n,r,t,c,a),Gt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}})}}function Qt(){this.events={}}Jt.prototype.stop=function(){this.isStop=!0},Qt.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},Qt.prototype.trigger=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n[0],a=n.slice(1);!this.events[i]||this.events[i].forEach(function(t){try{t.apply(null,a)}catch(n){console.error(e(n," at js_sdk\\u-charts\\u-charts\\u-charts.min.js:1"))}})};var Yt=function(t){t.pixelRatio=t.pixelRatio?t.pixelRatio:1,t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=i({},t.title),t.subtitle=i({},t.subtitle),t.duration=t.duration?t.duration:1e3,t.yAxis=i({},{data:[],showTitle:!1,disabled:!1,disableGrid:!1,splitNumber:5,gridType:"solid",dashLength:4*t.pixelRatio,gridColor:"#cccccc",padding:10,fontColor:"#666666"},t.yAxis),t.yAxis.dashLength*=t.pixelRatio,t.yAxis.padding*=t.pixelRatio,t.xAxis=i({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4,scrollAlign:"left",boundaryGap:"center",axisLine:!0,axisLineColor:"#cccccc"},t.xAxis),t.xAxis.dashLength*=t.pixelRatio,t.legend=i({},{show:!0,position:"bottom",float:"center",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,padding:5,margin:5,itemGap:10,fontSize:t.fontSize,lineHeight:t.fontSize,fontColor:"#333333",format:{},hiddenColor:"#CECECE"},t.legend),t.legend.borderWidth*=t.pixelRatio,t.legend.itemGap*=t.pixelRatio,t.legend.padding*=t.pixelRatio,t.legend.margin*=t.pixelRatio,t.extra=i({},t.extra),t.rotate=!!t.rotate,t.animation=!!t.animation,t.rotate=!!t.rotate;var e=JSON.parse(JSON.stringify(r));if(e.colors=t.colors?t.colors:e.colors,e.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?e.yAxisTitleWidth:0,("pie"==t.type||"ring"==t.type)&&(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),"rose"==t.type&&(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.rose.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),e.pieChartTextPadding=!1===t.dataLabel?0:e.pieChartTextPadding*t.pixelRatio,e.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:r.yAxisSplit,e.rotate=t.rotate,t.rotate){var a=t.width,o=t.height;t.width=o,t.height=a}t.padding=t.padding?t.padding:e.padding;for(var s=0;4>s;s++)t.padding[s]*=t.pixelRatio;e.yAxisWidth=r.yAxisWidth*t.pixelRatio,e.xAxisHeight=r.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(e.xAxisHeight+=6*t.pixelRatio),e.xAxisLineHeight=r.xAxisLineHeight*t.pixelRatio,e.fontSize=t.fontSize,e.titleFontSize=r.titleFontSize*t.pixelRatio,e.subtitleFontSize=r.subtitleFontSize*t.pixelRatio,e.toolTipPadding=r.toolTipPadding*t.pixelRatio,e.toolTipLineHeight=r.toolTipLineHeight*t.pixelRatio,e.columePadding=r.columePadding*t.pixelRatio,t.$this=t.$this?t.$this:this,this.context=n.createCanvasContext(t.canvasId,t.$this),t.chartData={},this.event=new Qt,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},this.opts=t,this.config=e,Kt.call(this,t.type,t,e,this.context)};Yt.prototype.updateData=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.opts=i({},this.opts,t),this.opts.updateData=!0;var e=t.scrollPosition||"current";switch(e){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var n=at(this.opts.series,this.opts,this.config),r=n.yAxisWidth;this.config.yAxisWidth=r;var a=0,o=tt(this.opts.categories,this.opts,this.config),s=o.xAxisPoints,l=o.startX,c=o.endX,u=o.eachSpacing,h=u*(s.length-1);a=c-l-h,this.scrollOption={currentOffset:a,startTouchX:a,distance:0,lastMoveTime:0},this.opts._scrollDistance_=a}Kt.call(this,this.opts.type,this.opts,this.config,this.context)},Yt.prototype.zoom=function(){var t=Math.round,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var r=t(Math.abs(this.scrollOption.currentOffset)/this.opts.chartData.eachSpacing)+t(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=n.itemCount;var i=at(this.opts.series,this.opts,this.config),a=i.yAxisWidth;this.config.yAxisWidth=a;var o=0,s=tt(this.opts.categories,this.opts,this.config),l=s.xAxisPoints,c=s.startX,u=s.endX,h=s.eachSpacing,f=u-c,p=f-h*(l.length-1);o=f/2-h*r,0<o&&(o=0),o<p&&(o=p),this.scrollOption={currentOffset:o,startTouchX:o,distance:0,lastMoveTime:0},this.opts._scrollDistance_=o,Kt.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(e("请启用滚动条后使用！"," at js_sdk\\u-charts\\u-charts\\u-charts.min.js:1"))},Yt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Yt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},Yt.prototype.getCurrentDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=_(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?M({x:n.x,y:n.y},this.opts.chartData.pieData):"radar"===this.opts.type?C({x:n.x,y:n.y},this.opts.chartData.radarData,this.opts.categories.length):"funnel"===this.opts.type?F({x:n.x,y:n.y},this.opts.chartData.funnelData):"map"===this.opts.type?R({x:n.x,y:n.y},this.opts):"word"===this.opts.type?j({x:n.x,y:n.y},this.opts.chartData.wordCloudData):O({x:n.x,y:n.y},this.opts.chartData.calPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Yt.prototype.getLegendDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=_(e,this.opts,t);return D({x:n.x,y:n.y},this.opts.chartData.legendData)}return-1},Yt.prototype.touchLegend=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=null;if(n=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],n){_(n,this.opts,t);var r=this.getLegendDataIndex(t);0<=r&&(this.opts.series[r].show=!this.opts.series[r].show,this.opts.animation=!!e.animation,this.opts._scrollDistance_=this.scrollOption.currentOffset,Kt.call(this,this.opts.type,this.opts,this.config,this.context))}},Yt.prototype.showToolTip=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=null;r=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],r||console.log(e("touchError"," at js_sdk\\u-charts\\u-charts\\u-charts.min.js:1"));var a=_(r,this.opts,t),o=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:o,animation:!1});if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var l=this.getCurrentDataIndex(t);if(-1<l){var c=b(this.opts.series,l);if(0!==c.length){var u=A(c,this.opts.chartData.calPoints,l,this.opts.categories,n),h=u.textList,f=u.offset;f.y=a.y,s.tooltip={textList:h,offset:f,option:n,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}if("mix"===this.opts.type){l=this.getCurrentDataIndex(t);if(-1<l){o=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){var p=k(c,this.opts.chartData.calPoints,l,this.opts.categories,n);h=p.textList,f=p.offset;f.y=a.y,s.tooltip={textList:h,offset:f,option:n,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}if("candle"===this.opts.type){l=this.getCurrentDataIndex(t);if(-1<l){o=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){u=T(this.opts.series[0].data,c,this.opts.chartData.calPoints,l,this.opts.categories,this.opts.extra.candle,n),h=u.textList,f=u.offset;f.y=a.y,s.tooltip={textList:h,offset:f,option:n,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type||"funnel"===this.opts.type){l=this.getCurrentDataIndex(t);if(-1<l){o=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:o,animation:!1}),c=this.opts._series_[l],h=[{text:n.format?n.format(c):c.name+": "+c.data,color:c.color}],f={x:a.x,y:a.y};s.tooltip={textList:h,offset:f,option:n,index:l}}Kt.call(this,s.type,s,this.config,this.context)}if("map"===this.opts.type||"word"===this.opts.type){l=this.getCurrentDataIndex(t);if(-1<l){o=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:o,animation:!1}),c=this.opts._series_[l],h=[{text:n.format?n.format(c):c.properties.name,color:c.color}],f={x:a.x,y:a.y};s.tooltip={textList:h,offset:f,option:n,index:l}}s.updateData=!1,Kt.call(this,s.type,s,this.config,this.context)}if("radar"===this.opts.type){l=this.getCurrentDataIndex(t);if(-1<l){o=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){h=c.map(function(t){return{text:n.format?n.format(t):t.name+": "+t.data,color:t.color}}),f={x:a.x,y:a.y};s.tooltip={textList:h,offset:f,option:n,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}},Yt.prototype.translate=function(t){this.scrollOption={currentOffset:t,startTouchX:t,distance:0,lastMoveTime:0};var e=i({},this.opts,{_scrollDistance_:t,animation:!1});Kt.call(this,this.opts.type,e,this.config,this.context)},Yt.prototype.scrollStart=function(t){var e=null;e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0];var n=_(e,this.opts,t);e&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=n.x)},Yt.prototype.scroll=function(t){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var e=this.opts.extra.touchMoveLimit||20,n=Date.now(),r=n-this.scrollOption.lastMoveTime;if(!(r<Math.floor(1e3/e))){this.scrollOption.lastMoveTime=n;var a=null;if(a=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],a&&!0===this.opts.enableScroll){var o,s=_(a,this.opts,t);o=s.x-this.scrollOption.startTouchX;var l=this.scrollOption.currentOffset,u=c(this,l+o,this.opts.chartData,this.config,this.opts);this.scrollOption.distance=o=u-l;var h=i({},this.opts,{_scrollDistance_:l+o,animation:!1});return Kt.call(this,h.type,h,this.config,this.context),l+o}}},Yt.prototype.scrollEnd=function(){if(!0===this.opts.enableScroll){var t=this.scrollOption,e=t.currentOffset,n=t.distance;this.scrollOption.currentOffset=e+n,this.scrollOption.distance=0}},"object"==typeof t.exports&&(t.exports=Yt)}).call(this,n("0de9")["default"],n("6e42")["default"])},"5f65":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("66fd")),i=a(n("2f62"));function a(t){return t&&t.__esModule?t:{default:t}}r.default.use(i.default);var o=new i.default.Store({state:{forcedLogin:!1,hasLogin:!1,userName:"",token:"",itemName:null,itemNumber:null,itemImg:null,itemUnit:null,steps:0},mutations:{login:function(t,e){t.userName=e||"新用户",t.hasLogin=!0},logout:function(t){t.userName="",t.hasLogin=!1},changeItemName:function(t,e){var n;t.itemName=e.itemName,t.itemNumber=e.itemNumber,t.itemImg=e.itemImg,t.itemUnit=e.itemUnit,"步行"==e.itemName?n=setInterval(function(){t.itemNumber=t.steps},1e3):clearInterval(n)},changeStepNumber:function(t,e){t.steps=e},saveToken:function(t,e){t.token=e.token}}}),s=o;e.default=s},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function o(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function u(t){return"[object Object]"===c.call(t)}function h(t){return"[object RegExp]"===c.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function x(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function _(t,e){return m.call(t,e)}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,S=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),k=/\B([A-Z])/g,T=b(function(t){return t.replace(k,"-$1").toLowerCase()});function P(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function O(t,e){return t.bind(e)}var D=Function.prototype.bind?O:P;function $(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function L(t,e){for(var n in e)t[n]=e[n];return t}function C(t){for(var e={},n=0;n<t.length;n++)t[n]&&L(e,t[n]);return e}function F(t,e,n){}var j=function(t,e,n){return!1},R=function(t){return t};function M(t,e){if(t===e)return!0;var n=l(t),r=l(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),a=Array.isArray(e);if(i&&a)return t.length===e.length&&t.every(function(t,n){return M(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||a)return!1;var o=Object.keys(t),s=Object.keys(e);return o.length===s.length&&o.every(function(n){return M(t[n],e[n])})}catch(c){return!1}}function E(t,e){for(var n=0;n<t.length;n++)if(M(t[n],e))return n;return-1}function I(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var N=["component","directive","filter"],z=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:F,parsePlatformTagName:R,mustUseProp:j,async:!0,_lifecycleHooks:z},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function U(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var q=new RegExp("[^"+W.source+".$_\\d]");function V(t){if(!q.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G,X="__proto__"in{},J="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=K&&WXEnvironment.platform.toLowerCase(),Y=J&&window.navigator.userAgent.toLowerCase(),Z=Y&&/msie|trident/.test(Y),tt=(Y&&Y.indexOf("msie 9.0"),Y&&Y.indexOf("edge/")>0),et=(Y&&Y.indexOf("android"),Y&&/iphone|ipad|ipod|ios/.test(Y)||"ios"===Q),nt=(Y&&/chrome\/\d+/.test(Y),Y&&/phantomjs/.test(Y),Y&&Y.match(/firefox\/(\d+)/),{}.watch);if(J)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(ei){}var it=function(){return void 0===G&&(G=!J&&!K&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),G},at=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys);st="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=F,ut=0,ht=function(){this.id=ut++,this.subs=[]};function ft(t){ht.SharedObject.targetStack.push(t),ht.SharedObject.target=t}function pt(){ht.SharedObject.targetStack.pop(),ht.SharedObject.target=ht.SharedObject.targetStack[ht.SharedObject.targetStack.length-1]}ht.prototype.addSub=function(t){this.subs.push(t)},ht.prototype.removeSub=function(t){x(this.subs,t)},ht.prototype.depend=function(){ht.SharedObject.target&&ht.SharedObject.target.addDep(this)},ht.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ht.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ht.SharedObject.target=null,ht.SharedObject.targetStack=[];var dt=function(t,e,n,r,i,a,o,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var gt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function xt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,_t=Object.create(mt),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=mt[t];U(_t,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,a=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),a})});var wt=Object.getOwnPropertyNames(_t),St=!0;function At(t){St=t}var kt=function(t){this.value=t,this.dep=new ht,this.vmCount=0,U(t,"__ob__",this),Array.isArray(t)?(X?t.push!==t.__proto__.push?Pt(t,_t,wt):Tt(t,_t):Pt(t,_t,wt),this.observeArray(t)):this.walk(t)};function Tt(t,e){t.__proto__=e}function Pt(t,e,n){for(var r=0,i=n.length;r<i;r++){var a=n[r];U(t,a,e[a])}}function Ot(t,e){var n;if(l(t)&&!(t instanceof dt))return _(t,"__ob__")&&t.__ob__ instanceof kt?n=t.__ob__:St&&!it()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new kt(t)),e&&n&&n.vmCount++,n}function Dt(t,e,n,r,i){var a=new ht,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var s=o&&o.get,l=o&&o.set;s&&!l||2!==arguments.length||(n=t[e]);var c=!i&&Ot(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ht.SharedObject.target&&(a.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Ct(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!l||(l?l.call(t,e):n=e,c=!i&&Ot(e),a.notify())}})}}function $t(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Dt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Lt(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||_(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ct(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ct(e)}kt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Dt(t,e[n])},kt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ot(t[e])};var Ft=B.optionMergeStrategies;function jt(t,e){if(!e)return t;for(var n,r,i,a=lt?Reflect.ownKeys(e):Object.keys(e),o=0;o<a.length;o++)n=a[o],"__ob__"!==n&&(r=t[n],i=e[n],_(t,n)?r!==i&&u(r)&&u(i)&&jt(r,i):$t(t,n,i));return t}function Rt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?jt(r,i):i}:e?t?function(){return jt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Mt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Et(n):n}function Et(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function It(t,e,n,r){var i=Object.create(t||null);return e?L(i,e):i}Ft.data=function(t,e,n){return n?Rt(t,e,n):e&&"function"!==typeof e?t:Rt(t,e)},z.forEach(function(t){Ft[t]=Mt}),N.forEach(function(t){Ft[t+"s"]=It}),Ft.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var a in L(i,t),e){var o=i[a],s=e[a];o&&!Array.isArray(o)&&(o=[o]),i[a]=o?o.concat(s):Array.isArray(s)?s:[s]}return i},Ft.props=Ft.methods=Ft.inject=Ft.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return L(i,t),e&&L(i,e),i},Ft.provide=Rt;var Nt=function(t,e){return void 0===e?t:e};function zt(t,e){var n=t.props;if(n){var r,i,a,o={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(a=S(i),o[a]={type:null})}else if(u(n))for(var s in n)i=n[s],a=S(s),o[a]=u(i)?i:{type:i};else 0;t.props=o}}function Bt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(u(n))for(var a in n){var o=n[a];r[a]=u(o)?L({from:a},o):{from:o}}else 0}}function Wt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Ht(t,e,n){if("function"===typeof e&&(e=e.options),zt(e,n),Bt(e,n),Wt(e),!e._base&&(e.extends&&(t=Ht(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Ht(t,e.mixins[r],n);var a,o={};for(a in t)s(a);for(a in e)_(t,a)||s(a);function s(r){var i=Ft[r]||Nt;o[r]=i(t[r],e[r],n,r)}return o}function Ut(t,e,n,r){if("string"===typeof n){var i=t[e];if(_(i,n))return i[n];var a=S(n);if(_(i,a))return i[a];var o=A(a);if(_(i,o))return i[o];var s=i[n]||i[a]||i[o];return s}}function qt(t,e,n,r){var i=e[t],a=!_(n,t),o=n[t],s=Jt(Boolean,i.type);if(s>-1)if(a&&!_(i,"default"))o=!1;else if(""===o||o===T(t)){var l=Jt(String,i.type);(l<0||s<l)&&(o=!0)}if(void 0===o){o=Vt(r,i,t);var c=St;At(!0),Ot(o),At(c)}return o}function Vt(t,e,n){if(_(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Gt(e.type)?r.call(t):r}}function Gt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Xt(t,e){return Gt(t)===Gt(e)}function Jt(t,e){if(!Array.isArray(e))return Xt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Xt(e[n],t))return n;return-1}function Kt(t,e,n){ft();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var a=0;a<i.length;a++)try{var o=!1===i[a].call(r,t,e,n);if(o)return}catch(ei){Yt(ei,r,"errorCaptured hook")}}}Yt(t,e,n)}finally{pt()}}function Qt(t,e,n,r,i){var a;try{a=n?t.apply(e,n):t.call(e),a&&!a._isVue&&p(a)&&!a._handled&&(a.catch(function(t){return Kt(t,r,i+" (Promise/async)")}),a._handled=!0)}catch(ei){Kt(ei,r,i)}return a}function Yt(t,e,n){if(B.errorHandler)try{return B.errorHandler.call(null,t,e,n)}catch(ei){ei!==t&&Zt(ei,null,"config.errorHandler")}Zt(t,e,n)}function Zt(t,e,n){if(!J&&!K||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ot(Promise)){var ie=Promise.resolve();te=function(){ie.then(re),et&&setTimeout(F)}}else if(Z||"undefined"===typeof MutationObserver||!ot(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&ot(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ae=1,oe=new MutationObserver(re),se=document.createTextNode(String(ae));oe.observe(se,{characterData:!0}),te=function(){ae=(ae+1)%2,se.data=String(ae)}}function le(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(ei){Kt(ei,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function ue(t){he(t,ce),ce.clear()}function he(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!l(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var a=t.__ob__.dep.id;if(e.has(a))return;e.add(a)}if(i){n=t.length;while(n--)he(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)he(t[r[n]],e)}}}var fe=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function pe(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Qt(r,null,arguments,e,"v-on handler");for(var i=r.slice(),a=0;a<i.length;a++)Qt(i[a],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,i,o,s){var l,c,u,h;for(l in t)c=t[l],u=e[l],h=fe(l),r(c)||(r(u)?(r(c.fns)&&(c=t[l]=pe(c,s)),a(h.once)&&(c=t[l]=o(h.name,c,h.capture)),n(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)r(t[l])&&(h=fe(l),i(h.name,e[l],h.capture))}function ve(t,e,n){var a=e.options.props;if(!r(a)){var o={},s=t.attrs,l=t.props;if(i(s)||i(l))for(var c in a){var u=T(c);ge(o,l,c,u,!0)||ge(o,s,c,u,!1)}return o}}function ge(t,e,n,r,a){if(i(e)){if(_(e,n))return t[n]=e[n],a||delete e[n],!0;if(_(e,r))return t[n]=e[r],a||delete e[r],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function xe(t){return s(t)?[yt(t)]:Array.isArray(t)?_e(t):void 0}function me(t){return i(t)&&i(t.text)&&o(t.isComment)}function _e(t,e){var n,o,l,c,u=[];for(n=0;n<t.length;n++)o=t[n],r(o)||"boolean"===typeof o||(l=u.length-1,c=u[l],Array.isArray(o)?o.length>0&&(o=_e(o,(e||"")+"_"+n),me(o[0])&&me(c)&&(u[l]=yt(c.text+o[0].text),o.shift()),u.push.apply(u,o)):s(o)?me(c)?u[l]=yt(c.text+o):""!==o&&u.push(yt(o)):me(o)&&me(c)?u[l]=yt(c.text+o.text):(a(t._isVList)&&i(o.tag)&&r(o.key)&&i(e)&&(o.key="__vlist"+e+"_"+n+"__"),u.push(o)));return u}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function we(t){var e=Se(t.$options.inject,t);e&&(At(!1),Object.keys(e).forEach(function(n){Dt(t,n,e[n])}),At(!0))}function Se(t,e){if(t){for(var n=Object.create(null),r=lt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var a=r[i];if("__ob__"!==a){var o=t[a].from,s=e;while(s){if(s._provided&&_(s._provided,o)){n[a]=s._provided[o];break}s=s.$parent}if(!s)if("default"in t[a]){var l=t[a].default;n[a]="function"===typeof l?l.call(e):l}else 0}}return n}}function Ae(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var a=t[r],o=a.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,a.context!==e&&a.fnContext!==e||!o||null==o.slot)a.asyncMeta&&a.asyncMeta.data&&"page"===a.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(a):(n.default||(n.default=[])).push(a);else{var s=o.slot,l=n[s]||(n[s]=[]);"template"===a.tag?l.push.apply(l,a.children||[]):l.push(a)}}for(var c in n)n[c].every(ke)&&delete n[c];return n}function ke(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Te(t,e,r){var i,a=Object.keys(e).length>0,o=t?!!t.$stable:!a,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&r&&r!==n&&s===r.$key&&!a&&!r.$hasNormal)return r;for(var l in i={},t)t[l]&&"$"!==l[0]&&(i[l]=Pe(e,l,t[l]))}else i={};for(var c in e)c in i||(i[c]=Oe(e,c));return t&&Object.isExtensible(t)&&(t._normalized=i),U(i,"$stable",o),U(i,"$key",s),U(i,"$hasNormal",a),i}function Pe(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:xe(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Oe(t,e){return function(){return t[e]}}function De(t,e){var n,r,a,o,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,a=t.length;r<a;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(l(t))if(lt&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),u=c.next();while(!u.done)n.push(e(u.value,n.length)),u=c.next()}else for(o=Object.keys(t),n=new Array(o.length),r=0,a=o.length;r<a;r++)s=o[r],n[r]=e(t[s],s,r);return i(n)||(n=[]),n._isVList=!0,n}function $e(t,e,n,r){var i,a=this.$scopedSlots[t];a?(n=n||{},r&&(n=L(L({},r),n)),i=a(n)||e):i=this.$slots[t]||e;var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function Le(t){return Ut(this.$options,"filters",t,!0)||R}function Ce(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Fe(t,e,n,r,i){var a=B.keyCodes[e]||n;return i&&r&&!B.keyCodes[e]?Ce(i,r):a?Ce(a,t):r?T(r)!==e:void 0}function je(t,e,n,r,i){if(n)if(l(n)){var a;Array.isArray(n)&&(n=C(n));var o=function(o){if("class"===o||"style"===o||y(o))a=t;else{var s=t.attrs&&t.attrs.type;a=r||B.mustUseProp(e,s,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=S(o),c=T(o);if(!(l in a)&&!(c in a)&&(a[o]=n[o],i)){var u=t.on||(t.on={});u["update:"+o]=function(t){n[o]=t}}};for(var s in n)o(s)}else;return t}function Re(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ee(r,"__static__"+t,!1),r)}function Me(t,e,n){return Ee(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ee(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ie(t[r],e+"_"+r,n);else Ie(t,e,n)}function Ie(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ne(t,e){if(e)if(u(e)){var n=t.on=t.on?L({},t.on):{};for(var r in e){var i=n[r],a=e[r];n[r]=i?[].concat(i,a):a}}else;return t}function ze(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var a=t[i];Array.isArray(a)?ze(a,e,n):a&&(a.proxy&&(a.fn.proxy=!0),e[a.key]=a.fn)}return r&&(e.$key=r),e}function Be(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function We(t,e){return"string"===typeof t?e+t:t}function He(t){t._o=Me,t._n=v,t._s=d,t._l=De,t._t=$e,t._q=M,t._i=E,t._m=Re,t._f=Le,t._k=Fe,t._b=je,t._v=yt,t._e=gt,t._u=ze,t._g=Ne,t._d=Be,t._p=We}function Ue(t,e,r,i,o){var s,l=this,c=o.options;_(i,"_uid")?(s=Object.create(i),s._original=i):(s=i,i=i._original);var u=a(c._compiled),h=!u;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=Se(c.inject,i),this.slots=function(){return l.$slots||Te(t.scopedSlots,l.$slots=Ae(r,i)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Te(t.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Te(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var a=rn(s,t,e,n,r,h);return a&&!Array.isArray(a)&&(a.fnScopeId=c._scopeId,a.fnContext=i),a}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,h)}}function qe(t,e,r,a,o){var s=t.options,l={},c=s.props;if(i(c))for(var u in c)l[u]=qt(u,c,e||n);else i(r.attrs)&&Ge(l,r.attrs),i(r.props)&&Ge(l,r.props);var h=new Ue(r,l,o,a,t),f=s.render.call(null,h._c,h);if(f instanceof dt)return Ve(f,r,h.parent,s,h);if(Array.isArray(f)){for(var p=xe(f)||[],d=new Array(p.length),v=0;v<p.length;v++)d[v]=Ve(p[v],r,h.parent,s,h);return d}}function Ve(t,e,n,r,i){var a=xt(t);return a.fnContext=n,a.fnOptions=r,e.slot&&((a.data||(a.data={})).slot=e.slot),a}function Ge(t,e){for(var n in e)t[S(n)]=e[n]}He(Ue.prototype);var Xe={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Xe.prepatch(n,n)}else{var r=t.componentInstance=Qe(t,Sn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Pn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Ln(n,"mounted")),t.data.keepAlive&&(e._isMounted?Hn(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?$n(e,!0):e.$destroy())}},Je=Object.keys(Xe);function Ke(t,e,n,o,s){if(!r(t)){var c=n.$options._base;if(l(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(r(t.cid)&&(u=t,t=dn(u,c),void 0===t))return pn(u,e,n,o,s);e=e||{},fr(t),i(e.model)&&tn(t.options,e);var h=ve(e,t,s);if(a(t.options.functional))return qe(t,h,e,n,o);var f=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}Ye(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:f,tag:s,children:o},u);return v}}}function Qe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ye(t){for(var e=t.hook||(t.hook={}),n=0;n<Je.length;n++){var r=Je[n],i=e[r],a=Xe[r];i===a||i&&i._merged||(e[r]=i?Ze(a,i):a)}}function Ze(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var a=e.on||(e.on={}),o=a[r],s=e.model.callback;i(o)?(Array.isArray(o)?-1===o.indexOf(s):o!==s)&&(a[r]=[s].concat(o)):a[r]=s}var en=1,nn=2;function rn(t,e,n,r,i,o){return(Array.isArray(n)||s(n))&&(i=r,r=n,n=void 0),a(o)&&(i=nn),an(t,e,n,r,i)}function an(t,e,n,r,a){if(i(n)&&i(n.__ob__))return gt();if(i(n)&&i(n.is)&&(e=n.is),!e)return gt();var o,s,l;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),a===nn?r=xe(r):a===en&&(r=ye(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||B.getTagNamespace(e),o=B.isReservedTag(e)?new dt(B.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(l=Ut(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Ke(l,n,t,r,e)):o=Ke(e,n,t,r);return Array.isArray(o)?o:i(o)?(i(s)&&on(o,s),i(n)&&sn(n),o):gt()}function on(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var o=0,s=t.children.length;o<s;o++){var l=t.children[o];i(l.tag)&&(r(l.ns)||a(n)&&"svg"!==l.tag)&&on(l,e,n)}}function sn(t){l(t.style)&&ue(t.style),l(t.class)&&ue(t.class)}function ln(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=Ae(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return rn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return rn(t,e,n,r,i,!0)};var a=r&&r.data;Dt(t,"$attrs",a&&a.attrs||n,null,!0),Dt(t,"$listeners",e._parentListeners||n,null,!0)}var cn,un=null;function hn(t){He(t.prototype),t.prototype.$nextTick=function(t){return le(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Te(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{un=e,t=r.call(e._renderProxy,e.$createElement)}catch(ei){Kt(ei,e,"render"),t=e._vnode}finally{un=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=gt()),t.parent=i,t}}function fn(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function pn(t,e,n,r,i){var a=gt();return a.asyncFactory=t,a.asyncMeta={data:e,context:n,children:r,tag:i},a}function dn(t,e){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=un;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var o=t.owners=[n],s=!0,c=null,u=null;n.$on("hook:destroyed",function(){return x(o,n)});var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},f=I(function(n){t.resolved=fn(n,e),s?o.length=0:h(!0)}),d=I(function(e){i(t.errorComp)&&(t.error=!0,h(!0))}),v=t(f,d);return l(v)&&(p(v)?r(t.resolved)&&v.then(f,d):p(v.component)&&(v.component.then(f,d),i(v.error)&&(t.errorComp=fn(v.error,e)),i(v.loading)&&(t.loadingComp=fn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))},v.delay||200)),i(v.timeout)&&(u=setTimeout(function(){u=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function gn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bn(t,e)}function xn(t,e){cn.$on(t,e)}function mn(t,e){cn.$off(t,e)}function _n(t,e){var n=cn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function bn(t,e,n){cn=t,de(e,n||{},xn,mn,_n,t),cn=void 0}function wn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var a,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var s=o.length;while(s--)if(a=o[s],a===e||a.fn===e){o.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?$(n):n;for(var r=$(arguments,1),i='event handler for "'+t+'"',a=0,o=n.length;a<o;a++)Qt(n[a],e,r,e,i)}return e}}var Sn=null;function An(t){var e=Sn;return Sn=t,function(){Sn=e}}function kn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Tn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,a=An(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),a(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Ln(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||x(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Ln(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Pn(t,e,r,i,a){var o=i.data.scopedSlots,s=t.$scopedSlots,l=!!(o&&!o.$stable||s!==n&&!s.$stable||o&&t.$scopedSlots.$key!==o.$key),c=!!(a||t.$options._renderChildren||l);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=a,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){At(!1);for(var u=t._props,h=t.$options._propKeys||[],f=0;f<h.length;f++){var p=h[f],d=t.$options.props;u[p]=qt(p,d,e,t)}At(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,bn(t,r,v),c&&(t.$slots=Ae(a,i.context),t.$forceUpdate())}function On(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,On(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Ln(t,"activated")}}function $n(t,e){if((!e||(t._directInactive=!0,!On(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)$n(t.$children[n]);Ln(t,"deactivated")}}function Ln(t,e){ft();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,a=n.length;i<a;i++)Qt(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),pt()}var Cn=[],Fn=[],jn={},Rn=!1,Mn=!1,En=0;function In(){En=Cn.length=Fn.length=0,jn={},Rn=Mn=!1}var Nn=Date.now;if(J&&!Z){var zn=window.performance;zn&&"function"===typeof zn.now&&Nn()>document.createEvent("Event").timeStamp&&(Nn=function(){return zn.now()})}function Bn(){var t,e;for(Nn(),Mn=!0,Cn.sort(function(t,e){return t.id-e.id}),En=0;En<Cn.length;En++)t=Cn[En],t.before&&t.before(),e=t.id,jn[e]=null,t.run();var n=Fn.slice(),r=Cn.slice();In(),Un(n),Wn(r),at&&B.devtools&&at.emit("flush")}function Wn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Ln(r,"updated")}}function Hn(t){t._inactive=!1,Fn.push(t)}function Un(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function qn(t){var e=t.id;if(null==jn[e]){if(jn[e]=!0,Mn){var n=Cn.length-1;while(n>En&&Cn[n].id>t.id)n--;Cn.splice(n+1,0,t)}else Cn.push(t);Rn||(Rn=!0,le(Bn))}}var Vn=0,Gn=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Vn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=V(e),this.getter||(this.getter=F)),this.value=this.lazy?void 0:this.get()};Gn.prototype.get=function(){var t;ft(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(ei){if(!this.user)throw ei;Kt(ei,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ue(t),pt(),this.cleanupDeps()}return t},Gn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Gn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Gn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():qn(this)},Gn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(ei){Kt(ei,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Gn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Gn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Gn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||x(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Xn={enumerable:!0,configurable:!0,get:F,set:F};function Jn(t,e,n){Xn.get=function(){return this[e][n]},Xn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Xn)}function Kn(t){t._watchers=[];var e=t.$options;e.props&&Qn(t,e.props),e.methods&&ar(t,e.methods),e.data?Yn(t):Ot(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&or(t,e.watch)}function Qn(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],a=!t.$parent;a||At(!1);var o=function(a){i.push(a);var o=qt(a,e,n,t);Dt(r,a,o),a in t||Jn(t,"_props",a)};for(var s in e)o(s);At(!0)}function Yn(t){var e=t.$options.data;e=t._data="function"===typeof e?Zn(e,t):e||{},u(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var a=n[i];0,r&&_(r,a)||H(a)||Jn(t,"_data",a)}Ot(e,!0)}function Zn(t,e){ft();try{return t.call(e,e)}catch(ei){return Kt(ei,e,"data()"),{}}finally{pt()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=it();for(var i in e){var a=e[i],o="function"===typeof a?a:a.get;0,r||(n[i]=new Gn(t,o||F,F,tr)),i in t||nr(t,i,a)}}function nr(t,e,n){var r=!it();"function"===typeof n?(Xn.get=r?rr(e):ir(n),Xn.set=F):(Xn.get=n.get?r&&!1!==n.cache?rr(e):ir(n.get):F,Xn.set=n.set||F),Object.defineProperty(t,e,Xn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ht.SharedObject.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function ar(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?F:D(e[n],t)}function or(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)sr(t,n,r[i]);else sr(t,n,r)}}function sr(t,e,n,r){return u(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function lr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=$t,t.prototype.$delete=Lt,t.prototype.$watch=function(t,e,n){var r=this;if(u(e))return sr(r,t,e,n);n=n||{},n.user=!0;var i=new Gn(r,t,e,n);if(n.immediate)try{e.call(r,i.value)}catch(a){Kt(a,r,'callback for immediate watcher "'+i.expression+'"')}return function(){i.teardown()}}}var cr=0;function ur(t){t.prototype._init=function(t){var e=this;e._uid=cr++,e._isVue=!0,t&&t._isComponent?hr(e,t):e.$options=Ht(fr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,kn(e),yn(e),ln(e),Ln(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&we(e),Kn(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&Ln(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function hr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function fr(t){var e=t.options;if(t.super){var n=fr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=pr(t);i&&L(t.extendOptions,i),e=t.options=Ht(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function pr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function dr(t){this._init(t)}function vr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=$(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function gr(t){t.mixin=function(t){return this.options=Ht(this.options,t),this}}function yr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var a=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Ht(n.options,t),o["super"]=n,o.options.props&&xr(o),o.options.computed&&mr(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,N.forEach(function(t){o[t]=n[t]}),a&&(o.options.components[a]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=L({},o.options),i[r]=o,o}}function xr(t){var e=t.options.props;for(var n in e)Jn(t.prototype,"_props",n)}function mr(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function _r(t){N.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function br(t){return t&&(t.Ctor.options.name||t.tag)}function wr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Sr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var a in n){var o=n[a];if(o){var s=br(o.componentOptions);s&&!e(s)&&Ar(n,a,r,i)}}}function Ar(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,x(n,e)}ur(dr),lr(dr),wn(dr),Tn(dr),hn(dr);var kr=[String,RegExp,Array],Tr={name:"keep-alive",abstract:!0,props:{include:kr,exclude:kr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ar(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Sr(t,function(t){return wr(e,t)})}),this.$watch("exclude",function(e){Sr(t,function(t){return!wr(e,t)})})},render:function(){var t=this.$slots.default,e=gn(t),n=e&&e.componentOptions;if(n){var r=br(n),i=this,a=i.include,o=i.exclude;if(a&&(!r||!wr(a,r))||o&&r&&wr(o,r))return e;var s=this,l=s.cache,c=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,x(c,u),c.push(u)):(l[u]=e,c.push(u),this.max&&c.length>parseInt(this.max)&&Ar(l,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Pr={KeepAlive:Tr};function Or(t){var e={get:function(){return B}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:L,mergeOptions:Ht,defineReactive:Dt},t.set=$t,t.delete=Lt,t.nextTick=le,t.observable=function(t){return Ot(t),t},t.options=Object.create(null),N.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,L(t.options.components,Pr),vr(t),gr(t),yr(t),_r(t)}Or(dr),Object.defineProperty(dr.prototype,"$isServer",{get:it}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:Ue}),dr.version="2.6.10";var Dr="[object Array]",$r="[object Object]";function Lr(t,e){var n={};return Cr(t,e),Fr(t,e,"",n),n}function Cr(t,e){if(t!==e){var n=Rr(t),r=Rr(e);if(n==$r&&r==$r){if(Object.keys(t).length>=Object.keys(e).length)for(var i in e){var a=t[i];void 0===a?t[i]=null:Cr(a,e[i])}}else n==Dr&&r==Dr&&t.length>=e.length&&e.forEach(function(e,n){Cr(t[n],e)})}}function Fr(t,e,n,r){if(t!==e){var i=Rr(t),a=Rr(e);if(i==$r)if(a!=$r||Object.keys(t).length<Object.keys(e).length)jr(r,n,t);else{var o=function(i){var a=t[i],o=e[i],s=Rr(a),l=Rr(o);if(s!=Dr&&s!=$r)a!=e[i]&&jr(r,(""==n?"":n+".")+i,a);else if(s==Dr)l!=Dr?jr(r,(""==n?"":n+".")+i,a):a.length<o.length?jr(r,(""==n?"":n+".")+i,a):a.forEach(function(t,e){Fr(t,o[e],(""==n?"":n+".")+i+"["+e+"]",r)});else if(s==$r)if(l!=$r||Object.keys(a).length<Object.keys(o).length)jr(r,(""==n?"":n+".")+i,a);else for(var c in a)Fr(a[c],o[c],(""==n?"":n+".")+i+"."+c,r)};for(var s in t)o(s)}else i==Dr?a!=Dr?jr(r,n,t):t.length<e.length?jr(r,n,t):t.forEach(function(t,i){Fr(t,e[i],n+"["+i+"]",r)}):jr(r,n,t)}}function jr(t,e,n){t[e]=n}function Rr(t){return Object.prototype.toString.call(t)}function Mr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Er(t){return Cn.find(function(e){return t._watcher===e})}function Ir(t,e){if(!t.__next_tick_pending&&!Er(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return le(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var i;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(ei){Kt(ei,t,"nextTick")}else i&&i(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}function Nr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var zr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,i=Object.create(null);try{i=Nr(this)}catch(s){console.error(s)}i.__webviewId__=r.data.__webviewId__;var a=Object.create(null);Object.keys(i).forEach(function(t){a[t]=r.data[t]});var o=Lr(i,a);Object.keys(o).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(o)),this.__next_tick_pending=!0,r.setData(o,function(){n.__next_tick_pending=!1,Mr(n)})):Mr(this)}};function Br(){}function Wr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Br),t.$options.render||(t.$options.render=Br),"mp-toutiao"!==t.mpHost&&Ln(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Gn(t,r,F,{before:function(){t._isMounted&&!t._isDestroyed&&Ln(t,"beforeUpdate")}},!0),n=!1,t}function Hr(t,e){return i(t)||i(e)?Ur(t,qr(e)):""}function Ur(t,e){return t?e?t+" "+e:t:e||""}function qr(t){return Array.isArray(t)?Vr(t):l(t)?Gr(t):"string"===typeof t?t:""}function Vr(t){for(var e,n="",r=0,a=t.length;r<a;r++)i(e=qr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Gr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Xr=b(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Jr(t){return Array.isArray(t)?C(t):"string"===typeof t?Xr(t):t}var Kr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Qr(t[r],n.slice(1).join("."))}function Yr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:$(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Ir(this,t)},Kr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=we,t.prototype.__call_hook=function(t,e){var n=this;ft();var r,i=n.$options[t],a=t+" hook";if(i)for(var o=0,s=i.length;o<s;o++)r=Qt(i[o],n,e?[e]:null,n,a);return n._hasHookEvent&&n.$emit("hook:"+t),pt(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return u(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Qr(e||this,t)},t.prototype.__get_class=function(t,e){return Hr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Jr(t),r=e?L(e,n):n;return Object.keys(r).map(function(t){return T(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,i,a,o;if(Array.isArray(t)){for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);return n}if(l(t)){for(a=Object.keys(t),n=Object.create(null),r=0,i=a.length;r<i;r++)o=a[r],n[o]=e(t[o],o,r);return n}return[]}}var Zr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function ti(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Zr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Zr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Zr}dr.prototype.__patch__=zr,dr.prototype.$mount=function(t,e){return Wr(this,t,e)},ti(dr),Yr(dr),e["default"]=dr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Ae,e.createPage=Se,e.default=void 0;var r=i(n("66fd"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return l(t)||s(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(l){i=!0,a=l}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw a}}return n}function l(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return p(t)||f(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function x(t){return"[object Object]"===d.call(t)}function m(t,e){return v.call(t,e)}function _(){}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,S=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],k={},T={};function P(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?O(n):n}function O(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function D(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function $(t,e){Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&g(e[n])&&(t[n]=P(t[n],e[n]))})}function L(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&g(e[n])&&D(t[n],e[n])})}function C(t,e){"string"===typeof t&&x(e)?$(T[t]||(T[t]={}),e):x(t)&&$(k,t)}function F(t,e){"string"===typeof t?x(e)?L(T[t],e):delete T[t]:x(t)&&L(k,t)}function j(t){return function(e){return t(e)||e}}function R(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function M(t,e){for(var n=!1,r=0;r<t.length;r++){var i=t[r];if(n)n=Promise.then(j(i));else{var a=i(e);if(R(a)&&(n=Promise.resolve(a)),!1===a)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){M(t[n],e).then(function(t){return g(r)&&r(t)||t})}}}),e}function I(t,e){var n=[];Array.isArray(k.returnValue)&&n.push.apply(n,u(k.returnValue));var r=T[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,u(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function N(t){var e=Object.create(null);Object.keys(k).forEach(function(t){"returnValue"!==t&&(e[t]=k[t].slice())});var n=T[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function z(t,e,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),a=3;a<r;a++)i[a-3]=arguments[a];var o=N(t);if(o&&Object.keys(o).length){if(Array.isArray(o.invoke)){var s=M(o.invoke,n);return s.then(function(t){return e.apply(void 0,[E(o,t)].concat(i))})}return e.apply(void 0,[E(o,n)].concat(i))}return e.apply(void 0,[n].concat(i))}var B={returnValue:function(t){return R(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},W=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,U=/^on/;function q(t){return H.test(t)}function V(t){return W.test(t)}function G(t){return U.test(t)&&"onPush"!==t}function X(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function J(t){return!(q(t)||V(t)||G(t))}function K(t,e){return J(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return g(n.success)||g(n.fail)||g(n.complete)?I(t,z.apply(void 0,[t,e,n].concat(i))):I(t,X(new Promise(function(r,a){z.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:a})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Q=1e-4,Y=750,Z=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Z="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Y*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Q),0===n?1!==et&&Z?.5:1:t<0?-n:n}var it={promiseInterceptor:B},at=Object.freeze({upx2px:rt,interceptors:it,addInterceptor:C,removeInterceptor:F}),ot={},st=[],lt=[],ct=["success","fail","cancel","complete"];function ut(t,e,n){return function(r){return e(ft(t,r,n))}}function ht(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(x(e)){var a=!0===i?e:{};for(var o in g(n)&&(n=n(e,a)||{}),e)if(m(n,o)){var s=n[o];g(s)&&(s=s(e[o],e,a)),s?y(s)?a[s]=e[o]:x(s)&&(a[s.name?s.name:o]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(o))}else-1!==ct.indexOf(o)?a[o]=ut(t,e[o],r):i||(a[o]=e[o]);return a}return g(e)&&(e=ut(t,e,r)),e}function ft(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(ot.returnValue)&&(e=ot.returnValue(t,e)),ht(t,e,n,{},r)}function pt(t,e){if(m(ot,t)){var n=ot[t];return n?function(e,r){var i=n;g(n)&&(i=n(e)),e=ht(t,e,i.args,i.returnValue);var a=[e];"undefined"!==typeof r&&a.push(r);var o=wx[i.name||t].apply(wx,a);return V(t)?ft(t,o,i.returnValue,q(t)):o}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,r=e.complete,i={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(i),g(r)&&r(i)}}vt.forEach(function(t){dt[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function xt(t,e,n){return t[e].apply(t,n)}function mt(){return xt(yt(),"$on",Array.prototype.slice.call(arguments))}function _t(){return xt(yt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return xt(yt(),"$once",Array.prototype.slice.call(arguments))}function wt(){return xt(yt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({$on:mt,$off:_t,$once:bt,$emit:wt});function At(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function kt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;At("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),i=t.show,a=t.hide,o=t.close,s=function(){r.setStyle({mask:n})},l=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.hide=function(){l();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return a.apply(t,n)},t.close=function(){l(),e=[];for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return o.apply(t,r)}}}function Tt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&kt(e),e}var Pt=Object.freeze({getSubNVueById:Tt,requireNativePlugin:At}),Ot=Page,Dt=Component,$t=/:/g,Lt=b(function(t){return S(t.replace($t,"-"))});function Ct(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return e.apply(t,[Lt(n)].concat(i))}}}function Ft(t,e){var n=e[t];e[t]=n?function(){Ct(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Ct(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ft("onLoad",t),Ot(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ft("created",t),Dt(t)};var jt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Rt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Mt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Mt(t,e)}):void 0}function Et(t,e,n){e.forEach(function(e){Mt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function It(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Nt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function zt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Bt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(i){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(i){}return x(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Wt=[String,Number,Boolean,Object,Array,null];function Ht(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ut(t,e){var n=t["behaviors"],r=t["extends"],i=t["mixins"],a=t["props"];a||(t["props"]=a=[]);var o=[];return Array.isArray(n)&&n.forEach(function(t){o.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(a)?(a.push("name"),a.push("value")):(a["name"]={type:String,default:""},a["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),x(r)&&r.props&&o.push(e({properties:Vt(r.props,!0)})),Array.isArray(i)&&i.forEach(function(t){x(t)&&t.props&&o.push(e({properties:Vt(t.props,!0)}))}),o}function qt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Vt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Ht(t)}}):x(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(x(r)){var i=r["default"];g(i)&&(i=i()),r.type=qt(e,r.type),n[e]={type:-1!==Wt.indexOf(r.type)?r.type:null,value:i,observer:Ht(e)}}else{var a=qt(e,r);n[e]={type:-1!==Wt.indexOf(a)?a:null,observer:Ht(e)}}}),n}function Gt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=_,t.preventDefault=_,t.target=t.target||{},m(t,"detail")||(t.detail={}),x(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Xt(t,e){var n=t;return e.forEach(function(e){var r=e[0],i=e[2];if(r||"undefined"!==typeof i){var a=e[1],o=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=i:a?Array.isArray(s)?n=s.find(function(e){return t.__get_value(a,e)===i}):x(s)?n=Object.keys(s).find(function(e){return t.__get_value(a,s[e])===i}):console.error("v-for 暂不支持循环数据：",s):n=s[i],o&&(n=t.__get_value(o,n))}}),n}function Jt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,i){"string"===typeof e?e?"$event"===e?r["$"+i]=n:0===e.indexOf("$event.")?r["$"+i]=t.__get_value(e.replace("$event.",""),n):r["$"+i]=t.__get_value(e):r["$"+i]=t:r["$"+i]=Xt(t,e)}),r}function Kt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Qt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,o=!1;if(i&&(o=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return o?[e]:e.detail.__args__||e.detail;var s=Jt(t,r,e),l=[];return n.forEach(function(t){"$event"===t?"__set_model"!==a||i?i&&!o?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(Kt(t)):"string"===typeof t&&m(s,t)?l.push(s[t]):l.push(t)}),l}var Yt="~",Zt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Gt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var i=t.type,a=[];return r.forEach(function(n){var r=n[0],o=n[1],s=r.charAt(0)===Zt;r=s?r.slice(1):r;var l=r.charAt(0)===Yt;r=l?r.slice(1):r,o&&te(i,r)&&o.forEach(function(n){var r=n[0];if(r){var i=e.$vm;i.$options.generic&&i.$parent&&i.$parent.$parent&&(i=i.$parent.$parent);var o=i[r];if(!g(o))throw new Error(" _vm.".concat(r," is not a function"));if(l){if(o.once)return;o.once=!0}a.push(o.apply(i,Qt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===i&&1===a.length&&"undefined"!==typeof a[0]?a[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,i=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(i(this),Rt(this,n)))}});var a={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return a.globalData=t.$options.globalData||{},Et(a,ne),a}var ie=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ae(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var i=n.length-1;i>=0;i--)if(r=ae(n[i],e),r)return r}function oe(t){return Behavior(t)}function se(){return!!this.route}function le(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function ue(t){var e,n=t.detail||t.value,r=n.vuePid,i=n.vueOptions;r&&(e=ae(this.$vm,r)),e||(e=this.$vm),i.parent=e}function he(t){return re(t,{mocks:ie,initRefs:ce})}var fe=["onUniNViewMessage"];function pe(t){var e=he(t);return Et(e,fe),e}function de(t){return App(pe(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,i=e.initRelation,o=It(r.default,t),s=a(o,2),l=s[0],c=s[1],u={multipleSlots:!0,addGlobalClass:!0},h={options:u,data:Bt(c,r.default.prototype),behaviors:Ut(c,oe),properties:Vt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};zt(t.vueId,this),i.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new l(e),Nt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ue,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){h.methods[t]=function(e){return this.$vm[t](e)}}),n?h:[h,l]}function ge(t){return ve(t,{isPage:se,initRelation:le})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var xe=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=ye(t);return Et(n.methods,xe,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function _e(t){return me(t,{isPage:se,initRelation:le})}xe.push.apply(xe,jt);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function we(t){var e=_e(t);return Et(e.methods,be),e}function Se(t){return Component(we(t))}function Ae(t){return Component(ye(t))}st.forEach(function(t){ot[t]=!1}),lt.forEach(function(t){var e=ot[t]&&ot[t].name?ot[t].name:t;wx.canIUse(e)||(ot[t]=!1)});var ke={};Object.keys(at).forEach(function(t){ke[t]=at[t]}),Object.keys(St).forEach(function(t){ke[t]=St[t]}),Object.keys(Pt).forEach(function(t){ke[t]=K(t,Pt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(ot,t))&&(ke[t]=K(t,pt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=ke,t.UniEmitter=St),wx.createApp=de,wx.createPage=Se,wx.createComponent=Ae;var Te=ke,Pe=Te;e.default=Pe}).call(this,n("c8ba"))},"70af":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.UpLoadFile=c,e.pics_splice=u;var r=o(n("04da")),i=o(n("3079")),a=n("ddca");function o(t){return t&&t.__esModule?t:{default:t}}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){l(t,e,n[e])})}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(e,n,o){if((0,r.default)("自定义上传图片携带数据:"+JSON.stringify(o)),i.default.baseUrl&&-1!=n.indexOf(i.default.baseUrl)){var l=n.replace(i.default.baseUrl,"");return Promise.resolve({data:l})}var c="",u={},f="";switch(e){case"UpLoadImage_1":c="",u={},f="";break;default:c=i.default.upLoadImg,u={},f="";break}if(!c)return t.showToast({title:"上传文件的url不能为空",icon:"none"}),Promise.reject(s({},a.errObj["102"],{errMsg:"上传文件的url不能为空"}));if(!n)return t.showToast({title:"上传文件的filePath不能为空",icon:"none"}),Promise.reject(s({},a.errObj["102"],{errMsg:"上传文件的filePath不能为空"}));var p={url:c,name:f,filePath:n};return"ios"===plus.os.name.toLowerCase()?Object.keys(u).length>0&&(p.url=h(p.url,u)):p.formData=u,t.uploadFile(p)}function u(t,e){return"string"!==typeof t?(t=e||"|",t):(t+=e?"|"+e:"|",t)}function h(t,e){var n="",r=0;if(e)for(var i in e)n+=r>0?"&"+i+"="+e[i]:"?"+i+"="+e[i],++r;return t+n}}).call(this,n("6e42")["default"])},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-24220191115004",_inBundle:!1,_integrity:"sha512-UKnpiHSP7h9c5IFpJFkWkpm1KyWz9iHj1hchrQSUxPhChx+KPOmunnQcKGiQvvBz9CeSi7Se/eauJYha5ch0kw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24220191115004.tgz",_shasum:"5848f2204f37daaf8c340fb27d9f76b16fcbfdeb",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"bcf65737c5111d47398695d3db8ed87305df346e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-24220191115004"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?i(t):e}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var h=e.version,f="https://tongji.dcloud.io/uni/stat",p="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,g=10,y="__DC_STAT_UUID",x="__DC_UUID_VALUE";function m(){var e="";if("n"===S()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=x}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,x)}}return e}var _=function(t){var e=Object.keys(t),n=e.sort(),r={},i="";for(var a in n)r[n[a]]=t[n[a]],i+=n[a]+"="+t[n[a]]+"&";return{sign:"",options:i.substr(0,i.length-1)}},b=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},A=function(){var e="";return"wx"!==S()&&"qq"!==S()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},k=function(){return"n"===S()?plus.runtime.version:""},T=function(){var t=S(),e="";return"n"===t&&(e=plus.runtime.channel),e},P=function(e){var n=S(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},O="First__Visit__Time",D="Last__Visit__Time",$=function(){var e=t.getStorageSync(O),n=0;return e?n=e:(n=w(),t.setStorageSync(O,n),t.removeStorageSync(D)),n},L=function(){var e=t.getStorageSync(D),n=0;return n=e||"",t.setStorageSync(D,w()),n},C="__page__residence__time",F=0,j=0,R=function(){return F=w(),"n"===S()&&t.setStorageSync(C,w()),F},M=function(){return j=w(),"n"===S()&&(F=t.getStorageSync(C)),j-F},E="Total__Visit__Count",I=function(){var e=t.getStorageSync(E),n=1;return e&&(n=e,n++),t.setStorageSync(E,n),n},N=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},z=0,B=0,W=function(){var t=(new Date).getTime();return z=t,B=0,t},H=function(){var t=(new Date).getTime();return B=t,t},U=function(t){var e=0;if(0!==z&&(e=B-z),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},q=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===S()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},V=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,i=t._query,a=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===S()?r.$mp&&r.$mp.page.is+a:r.$scope&&r.$scope.route+a||r.$mp&&r.$mp.page.route+a},G=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},X=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},J=n("0627").default,K=n("02a5").default||n("02a5"),Q=t.getSystemInfoSync(),Y=function(){function e(){l(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:S(),mpn:A(),ak:K.appid,usv:h,v:k(),ch:T(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===Q.platform?"a":"i",brand:Q.brand||"",md:Q.model,sv:Q.system.replace(/(Android|iOS)\s/,""),mpsdk:Q.SDKVersion||"",mpv:Q.version||"",lang:Q.language,pr:Q.pixelRatio,ww:Q.windowWidth,wh:Q.windowHeight,sw:Q.screenWidth,sh:Q.screenHeight}}return u(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){H();var t=U("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,H();var n=U();W();var r=V(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=V(this),e=q();if(this._navigationBarTitle.config=J&&J.pages[e]&&J.pages[e].titleNView&&J.pages[e].titleNView.titleText||J&&J.pages[e]&&J.pages[e].navigationBarTitleText||"",this.__licationShow)return W(),this.__licationShow=!1,void(this._lastPageRoute=t);H(),this._lastPageRoute=t;var n=U("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}W()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var t=U("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=w(),this.statData.sc=P(t.scene),this.statData.fvts=$(),this.statData.lvts=L(),this.statData.tvc=I(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(i,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,i=void 0===r?"":r,a=this._lastPageRoute,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:a,ch:this.statData.ch,e_n:n,e_v:"object"===typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(o)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;K.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,i=w(),a=this._navigationBarTitle;e.ttn=a.page,e.ttpj=a.config,e.ttc=a.report;var o=this._reportingRequestData;if("n"===S()&&(o=t.getStorageSync("__UNI__STAT__DATA")||{}),o[e.lt]||(o[e.lt]=[]),o[e.lt].push(e),"n"===S()&&t.setStorageSync("__UNI__STAT__DATA",o),!(M()<g)||n){var s=this._reportingRequestData;"n"===S()&&(s=t.getStorageSync("__UNI__STAT__DATA")),R();var l=[],c=[],u=[],f=function(t){var e=s[t];e.forEach(function(e){var n=b(e);0===t?l.push(n):3===t?u.push(n):c.push(n)})};for(var p in s)f(p);l.push.apply(l,c.concat(u));var d={usv:h,t:i,requests:JSON.stringify(l)};this._reportingRequestData={},"n"===S()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:f,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=_(N(t)).options;e.src=p+"?"+n}},{key:"sendEvent",value:function(t,e){X(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Z=function(e){function n(){var e;return l(this,n),e=r(this,a(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return o(n,e),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,R(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,G(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,G(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}}]),n}(Y),tt=Z.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag",c="object"===typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{u=e.regeneratorRuntime=c?t.exports:{},u.wrap=_;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={},g={};g[o]=function(){return this};var y=Object.getPrototypeOf,x=y&&y(y(C([])));x&&x!==r&&i.call(x,o)&&(g=x);var m=A.prototype=w.prototype=Object.create(g);S.prototype=m.constructor=A,A.constructor=S,A[l]=S.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,A):(t.__proto__=A,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(m),t},u.awrap=function(t){return{__await:t}},k(T.prototype),T.prototype[s]=function(){return this},u.AsyncIterator=T,u.async=function(t,e,n,r){var i=new T(_(t,e,n,r));return u.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},k(m),m[l]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=C,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;$(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function _(t,e,n,r){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),o=new L(r||[]);return a._invoke=P(t,n,o),a}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function w(){}function S(){}function A(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){function e(n,r,a,o){var s=b(t[n],t,r);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"===typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,a,o)},function(t){e("throw",t,a,o)}):Promise.resolve(c).then(function(t){l.value=t,a(l)},function(t){return e("throw",t,a,o)})}o(s.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function P(t,e,n){var r=h;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw a;return F()}n.method=i,n.arg=a;while(1){var o=n.delegate;if(o){var s=O(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var l=b(t,e,n);if("normal"===l.type){if(r=n.done?d:f,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=d,n.method="throw",n.arg=l.arg)}}}function O(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=b(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function C(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"992e":function(t,e,n){"use strict";(function(t){function n(e){var n="123456";return t.showToast({title:"发送验证码给".concat(e,"成功,请注意查收"),icon:"none"}),n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n}).call(this,n("6e42")["default"])},a34a:function(t,e,n){t.exports=n("bbdd")},a3ab:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=/^-?[1-9][0-9]?.?[0-9]*$/,i=/^-?[1-9][0-9]*$/,a=/^1[0-9]{10,10}$/,o=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,s=/^.{6,16}$/,l=/^[a-zA-Z0-9]{6,16}$/,c={isNumber:function(t){return r.test(t)},isInt:function(t){return i.test(t)},isPhone:function(t){return a.test(t)},isEmail:function(t){return o.test(t)},isPwd:function(t){return s.test(t)},isInviteCode:function(t){return l.test(t)},validate:function(t,e){var n={isOk:!0,errmsg:""};if(!e||!e.length)return n;var c=!0,u=!1,h=void 0;try{for(var f,p=e[Symbol.iterator]();!(c=(f=p.next()).done);c=!0){var d=f.value;if(d&&d.name&&d.type)if(t[d.name]){switch(d.type){case"equals":case"eq":t[d.name]!==t[d.eqName]&&(n={isOk:!1,errmsg:d.errmsg});break;case"number":r.test(t[d.name])||(n={isOk:!1,errmsg:d.errmsg});break;case"int":i.test(t[d.name])||(n={isOk:!1,errmsg:d.errmsg});break;case"phone":a.test(t[d.name])||(n={isOk:!1,errmsg:d.errmsg});break;case"email":o.test(t[d.name])||(n={isOk:!1,errmsg:d.errmsg});break;case"pwd":s.test(t[d.name])||(n={isOk:!1,errmsg:d.errmsg});break;case"inviteCode":l.test(t[d.name])||(n={isOk:!1,errmsg:d.errmsg});break;case"range":var v=t[d.name];v&&(r.test(v)?d.min&&v<d.min?n={isOk:!1,errmsg:d.errmsg}:d.max&&v>d.max&&(n={isOk:!1,errmsg:d.errmsg}):n={isOk:!1,errmsg:d.errmsg});break;case"lengthRange":var g=t[d.name]?t[d.name].length:0;d.min&&g<d.min?n={isOk:!1,errmsg:d.errmsg}:d.max&&g>d.max&&(n={isOk:!1,errmsg:d.errmsg});break;case"regex":d.regex&&!d.regex.test(t[d.name])&&(n={isOk:!1,errmsg:d.errmsg});break}if(!n.isOk)return n.errmsg||(n.errmsg="请正确输入所有数据"),n}else if("required"===d.type||d.required)return n={isOk:!1,errmsg:d.errmsg},n.errmsg||(n.errmsg="请正确输入所有数据"),n}}catch(y){u=!0,h=y}finally{try{c||null==p.return||p.return()}finally{if(u)throw h}}return n}};e.default=c},aeaa:function(t,e,n){},b2f2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("ddca"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}var u=function(){function t(){s(this,t),this.formObj={}}return c(t,[{key:"set",value:function(t){var e=t.name,n=t.variableName;t.value,t.type,t.required,t.verifyFc,t.verifyType;e&&(this.formObj[e]||(this.formObj[e]={}),n&&(this.formObj[e][n]=a({},t)))}},{key:"del",value:function(t){var e=t.name,n=t.variableName;e&&n&&(void 0!==this.formObj[e]&&this.formObj[e]&&void 0!==this.formObj[e][n]&&delete this.formObj[e][n],this.formObj[e]&&0===Object.keys(this.formObj[e]).length&&delete this.formObj[e])}},{key:"get",value:function(t){var e=t.name;if(!e)return Promise.reject({s:3,c:101});if(void 0!==this.formObj[e]){var n=a({},this.formObj[e]);return(0,r.default)({s:1,v:n})}return(0,r.default)({s:3,c:101})}}]),t}();if(!h)var h=new u;var f=h;e.default=f},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),i)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(o){r.regeneratorRuntime=void 0}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ddca:function(t,e,n){"use strict";function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=s,e.errObj=void 0;var a={102:{errMsg:"上传图片错误",code:102},101:{errMsg:"未找到该name对应的数据",code:101},ok:{errMsg:"ok",code:1}};function o(t){var e="未知";switch(t){case 1:e="success";break;case 2:e="warn";case 3:e="error";default:break}return e}function s(t){var e=t.s,n=t.c,i=t.v,s={status:o(e)};return s.result=n?r({},a[n],{data:null}):r({},a.ok,{data:i}),s}e.errObj=a},e256:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("42c5"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={name:{type:String,default:""},variableName:{type:String,default:""},required:{type:Boolean,default:!1},value:{type:[String,Array,Number,Object,Boolean],deault:""},titleFlex:{type:[Number,String],default:1},contentFlex:{type:[Number,String],default:4},titleStyle:{type:String,default:""},contentStyle:{type:String,default:""},titleLayout:{type:String,default:"default"},contentLayout:{type:String,default:"default"},boxStyle:{type:String,default:""},title:{type:String,default:""},titleHide:{type:Boolean,default:!1},fontSize:{type:Number,default:30},width:{type:String,default:"100%"},customId:{type:[String,Number,Object],default:""},requiredSign:{type:String,default:"*"},layout:{type:String,default:"row"},itemDisabled:{type:Boolean,default:!1},itemLayout:{type:String,default:""},titleColor:{type:String,default:"#999"}},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.QSInputsType;return{name:"QS_"+e,props:a({},s),model:{prop:"value",event:"input"},data:function(){return{type:e}},created:function(){switch(e){case r.default.typeObj.pics:this.setForm(this.value||this.itemArray);break;case r.default.typeObj.infinitePics:this.setForm(this.value||this.itemArray);break;default:this.setForm(this.value);break}},computed:{contentLayout_computed:function(){switch(this.contentLayout){case"center":return"flex_row_c_c";case"left":return"flex_row_none_c";case"right":return"flex_row_e_c";default:return"column"===this.layout?"flex_row_none_c":"flex_row_e_c"}},itemLayout_computed:function(){switch(this.itemLayout){case"center":return"flex_row_c_c";case"left":return"flex_row_none_c";case"right":return"flex_row_e_c";default:return"column"===this.layout?"flex_row_none_c":"flex_row_e_c"}}},beforeDestroy:function(){this.delForm()},methods:{setValue:function(t){this.$emit("input",t),this.$emit("change",t),this.setForm(t)},delForm:function(){this.name&&this.variableName&&r.default.delForm({name:this.name,variableName:this.variableName})},setForm:function(t){this.name&&this.variableName&&r.default.setForm({title:this.title,name:this.name,variableName:this.variableName,value:t,type:this.type,required:this.required,verifyFc:this.verifyFc,verifyType:this.verifyType,customId:this.customId,upLoadData:this.upLoadData})},setData:function(t){this.$refs.inputsRef&&this.$refs.inputsRef.setData&&"function"===typeof this.$refs.inputsRef.setData?this.$refs.inputsRef.setData(t):r.default.log("not find ref or setData!")}}}};e.default=l}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/login.js';

define('components/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/login"], {
  "29d4": function d4(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("e0b4"),
        a = e("30a7");

    for (var i in a) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(i);
    }

    e("ea9d");
    var u = e("2877"),
        c = Object(u["a"])(a["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  "30a7": function a7(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("a287"),
        a = e.n(o);

    for (var i in o) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(i);
    }

    n["default"] = a.a;
  },
  a287: function a287(t, n, e) {
    "use strict";

    (function (t, o) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = e("2f62");

      function i(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {},
              o = Object.keys(e);
          "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          }))), o.forEach(function (n) {
            u(t, n, e[n]);
          });
        }

        return t;
      }

      function u(t, n, e) {
        return n in t ? Object.defineProperty(t, n, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = e, t;
      }

      var c = {
        components: {},
        data: function data() {
          return {};
        },
        methods: i({}, (0, a.mapMutations)(["login", "saveToken"]), {
          formSubmit: function formSubmit(n) {
            var e = this,
                a = n.detail.value,
                i = this.formsValidate(a);
            null == i ? (t.showLoading({
              title: "正在登陆..."
            }), t.request({
              url: "http://kdjk.c5ppc.cn/login",
              data: a,
              method: "GET",
              dataType: "JSON",
              success: function success(n) {
                var o = "string" == typeof n.data ? JSON.parse(n.data) : n.data;
                e.saveToken({
                  token: o.data
                }), e.login(), 10010 == o.code ? t.showToast({
                  title: "登陆成功",
                  icon: "none",
                  success: function success() {
                    setTimeout(function () {
                      t.navigateBack({
                        delta: 1
                      });
                    }, 1e3);
                  }
                }) : 1e4 == o.code && t.showToast({
                  title: "账号或密码不正确,请重试",
                  icon: "none"
                });
              },
              fail: function fail(n) {
                t.showToast({
                  title: "网络可能出了点问题,请稍后再试",
                  icon: "none"
                }), console.log(o("服务器异常，请稍后再试!", " at components\\login.vue:93")), console.log(o(n, " at components\\login.vue:94"));
              },
              complete: function complete() {
                t.hideLoading(), setTimeout(function () {
                  t.hideToast();
                }, 1e3);
              }
            })) : t.showToast({
              title: i,
              icon: "none"
            });
          },
          formsValidate: function formsValidate(t) {
            var n = t.account,
                e = t.password;
            return "" == n ? "用户名不可为空" : "" == e ? "密码不可为空" : null;
          }
        })
      };
      n.default = c;
    }).call(this, e("6e42")["default"], e("0de9")["default"]);
  },
  bb8e: function bb8e(t, n, e) {},
  e0b4: function e0b4(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  ea9d: function ea9d(t, n, e) {
    "use strict";

    var o = e("bb8e"),
        a = e.n(o);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/login-create-component', {
  'components/login-create-component': function componentsLoginCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("29d4"));
  }
}, [['components/login-create-component']]]);
});
require('components/login.js');
__wxRoute = 'components/popup-layer/popup-layer';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/popup-layer/popup-layer.js';

define('components/popup-layer/popup-layer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/popup-layer/popup-layer"], {
  "0da3": function da3(t, e, n) {},
  "63f6": function f6(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("f9ca"),
        a = n("c574");

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    n("92c1");
    var r = n("2877"),
        l = Object(r["a"])(a["default"], o["a"], o["b"], !1, null, null, null);
    e["default"] = l.exports;
  },
  "904c": function c(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = n("2f62");

      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
              o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }))), o.forEach(function (e) {
            i(t, e, n[e]);
          });
        }

        return t;
      }

      function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t;
      }

      var r = {
        name: "popup-layer",
        model: {
          prop: "showPop",
          event: "change"
        },
        props: {
          showPop: {
            type: Boolean,
            default: !1
          },
          direction: {
            type: String,
            default: "top"
          },
          autoClose: {
            type: Boolean,
            default: !0
          }
        },
        data: function data() {
          return {
            ifshow: !1,
            translateValue: -100,
            site: -100,
            timer: null,
            iftoggle: !1
          };
        },
        computed: {
          _translate: function _translate() {
            var t = {
              top: "transform:translateY(".concat(-this.translateValue, "%)"),
              bottom: "transform:translateY(".concat(this.translateValue, "%)"),
              left: "transform:translateX(".concat(-this.translateValue, "%)"),
              right: "transform:translateX(".concat(this.translateValue, "%)")
            };
            return t[this.direction];
          },
          _location: function _location() {
            var t = {
              top: "bottom:".concat(this.site, "%;width:100%;"),
              bottom: "top:".concat(this.site, "%;width:100%;"),
              left: "right:0px;top:0;height:100%;",
              right: "left:0px;top:0;height:100%;"
            };
            return t[this.direction] + this._translate;
          }
        },
        mounted: function mounted() {
          this.showPop && this.show();
        },
        watch: {
          showPop: function showPop(e) {
            console.log(t(e, " at components\\popup-layer\\popup-layer.vue:74")), e ? this.show() : this.close();
          }
        },
        methods: a({}, (0, o.mapMutations)(["changeItemName"]), {
          stopMove: function stopMove(t) {},
          show: function show(t) {
            var e = this;
            this.ifshow = !0, this.site = 0;
            setTimeout(function () {
              e.translateValue = 0, null;
            }, 100), setTimeout(function () {
              e.iftoggle = !0, null;
            }, 300);
            this.changeItemName(t);
          },
          close: function close() {
            var t = this;
            null === this.timer && this.iftoggle && (this.translateValue = -100, this.timer = setTimeout(function () {
              t.ifshow = !1, t.timer = null, t.iftoggle = !1, t.$emit("closeCallBack", null), t.$emit("change", !1);
            }, 300));
          },
          ableClose: function ableClose() {
            this.autoClose && this.close();
          },
          stopEvent: function stopEvent(t) {},
          doSome: function doSome() {}
        })
      };
      e.default = r;
    }).call(this, n("0de9")["default"]);
  },
  "92c1": function c1(t, e, n) {
    "use strict";

    var o = n("0da3"),
        a = n.n(o);
    a.a;
  },
  c574: function c574(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("904c"),
        a = n.n(o);

    for (var i in o) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(i);
    }

    e["default"] = a.a;
  },
  f9ca: function f9ca(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return a;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/popup-layer/popup-layer-create-component', {
  'components/popup-layer/popup-layer-create-component': function componentsPopupLayerPopupLayerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("63f6"));
  }
}, [['components/popup-layer/popup-layer-create-component']]]);
});
require('components/popup-layer/popup-layer.js');
__wxRoute = 'components/QS-inputs-split/elements/QS-input/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/QS-inputs-split/elements/QS-input/index.js';

define('components/QS-inputs-split/elements/QS-input/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/QS-inputs-split/elements/QS-input/index"], {
  "6df4": function df4(t, e, n) {
    "use strict";

    var u = n("7dd7"),
        i = n.n(u);
    i.a;
  },
  "7dd7": function dd7(t, e, n) {},
  "89ac": function ac(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("f609"),
        i = n.n(u);

    for (var o in u) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(o);
    }

    e["default"] = i.a;
  },
  "940c": function c(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("b719"),
        i = n("89ac");

    for (var o in i) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(o);
    }

    n("6df4");
    var a = n("2877"),
        c = Object(a["a"])(i["default"], u["a"], u["b"], !1, null, "8820fc28", null);
    e["default"] = c.exports;
  },
  b719: function b719(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  f609: function f609(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var u = a(n("a34a")),
          i = a(n("42c5")),
          o = a(n("e256"));

      function a(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function c(t, e, n, u, i, o, a) {
        try {
          var c = t[o](a),
              r = c.value;
        } catch (s) {
          return void n(s);
        }

        c.done ? e(r) : Promise.resolve(r).then(u, i);
      }

      function r(t) {
        return function () {
          var e = this,
              n = arguments;
          return new Promise(function (u, i) {
            var o = t.apply(e, n);

            function a(t) {
              c(o, u, i, a, r, "next", t);
            }

            function r(t) {
              c(o, u, i, a, r, "throw", t);
            }

            a(void 0);
          });
        };
      }

      var s = function s() {
        return n.e("components/QS-inputs-split/template/template").then(n.bind(null, "ed07"));
      },
          l = function l() {
        return n.e("components/QS-inputs-split/uniIcons/uni-icons").then(n.bind(null, "28ef"));
      },
          f = {
        components: {
          uniIcon: l,
          QStemplate: s
        },
        props: {
          inputSet: {
            type: Object,
            default: function _default() {
              return {};
            }
          },
          tapClear: {
            type: Boolean,
            default: !0
          },
          inputType: {
            type: String,
            default: "text"
          },
          focus: {
            type: Boolean,
            default: !1
          },
          focusBorderColor: {
            type: String,
            default: "#999"
          },
          blurBorderColor: {
            type: String,
            default: "#f2f2f2"
          },
          password: {
            type: Boolean,
            default: !1
          },
          passwordIconColor: {
            type: String,
            default: "#33cc33"
          },
          leftIcon: {
            type: String,
            default: ""
          },
          leftIconColor: {
            type: String,
            default: "#999"
          },
          customTapIcon: {
            type: String,
            default: ""
          },
          customTapIconColor: {
            type: String,
            default: "#999"
          },
          rightButtonTex: {
            type: String,
            default: ""
          },
          rightButtonStyle: {
            type: String,
            default: ""
          },
          ifCode: {
            type: Boolean,
            default: !1
          },
          codeCountDown: {
            type: [String, Number],
            default: 60
          },
          codeButtonStyle: {
            type: String,
            default: ""
          },
          phoneNum: {
            type: String,
            default: ""
          },
          checkPhoneNum: {
            type: Boolean,
            default: !1
          },
          disabled: {
            type: Boolean,
            default: !1
          },
          placeholder: {
            type: String,
            default: ""
          },
          filterFc: {
            type: Function,
            default: null
          },
          filterType: {
            type: String,
            default: ""
          },
          verifyFc: {
            type: Function,
            default: null
          },
          verifyType: {
            type: String,
            default: ""
          },
          inputDebounceSet: {
            type: Object,
            default: function _default() {
              return {
                openInputDebounce: !0,
                delay: 500
              };
            }
          }
        },
        computed: {
          iconSize: function iconSize() {
            return this.fontSize + 8;
          },
          btnSize: function btnSize() {
            return this.fontSize - 8;
          }
        },
        data: function data() {
          return {
            passwordBl: !!this.password,
            focusBl: this.focus,
            inputDebounce: {},
            userCode: "",
            codeCount: this.codeCountDown || 60,
            code: "",
            startCodeBl: !1
          };
        },
        watch: {
          itemDisabled: function itemDisabled(e, n) {
            e && this.focusBl && (t.hideKeyboard(), this.blurChange());
          }
        },
        methods: {
          inputs_change: function inputs_change() {
            var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = e.detail.value,
                u = this.inputDebounce;
            this.inputDebounceSet.openInputDebounce ? (u.debounce && clearTimeout(u.debounce), u.debounceTime && new Date().getTime() - u.debounceTime < (this.inputDebounceSet.delay || 500) ? (i.default.log("防抖冲突,立即执行"), this.inputs_changeFc(n, !0)) : u.debounce = setTimeout(function () {
              i.default.log("防抖"), t.inputs_changeFc(n);
            }, this.inputDebounceSet.delay || 500)) : (i.default.log("无防抖"), this.inputs_changeFc(n));
          },
          inputs_changeFc: function inputs_changeFc(t, e) {
            var n = this.inputDebounce;
            this.inputDebounceSet.openInputDebounce && (n.debounceTime = e ? 0 : new Date().getTime()), this.filterFc && "function" == typeof this.filterFc ? this.input_filter_change(t, this.filterFc) : this.filterType && i.default.filterTypeObj[this.filterType] && "function" == typeof i.default.filterTypeObj[this.filterType] ? this.input_filter_change(t, i.default.filterTypeObj[this.filterType]) : this.setValue(t);
          },
          input_filter_change: function input_filter_change(t, e) {
            var n = this,
                u = e(t);
            u != t ? new Promise(function (t, e) {
              n.setValue(" "), t();
            }).then(function () {
              n.setValue(u);
            }) : this.setValue(u);
          },
          focusChange: function focusChange() {
            this.itemDisabled || (this.focusBl = !0);
          },
          blurChange: function blurChange() {
            this.focusBl = !1;
          },
          inputTap: function inputTap(t) {
            switch (t) {
              case "password":
                this.passwordBl = !this.passwordBl;
                break;

              case "clear":
                this.setValue("");
                break;

              case "custom":
                this.inputCustomTapFc();
                break;

              case "button":
                this.inputCustomTapFc();
                break;

              default:
                i.default.showToast("inputTap类型错误");
                break;
            }
          },
          inputCustomTapFc: function () {
            var t = r(u.default.mark(function t() {
              var e, n;
              return u.default.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      return t.prev = 0, t.next = 3, i.default.inputCustomTapFc(this.customId);

                    case 3:
                      e = t.sent, void 0 !== e && null !== e && this.setValue(e), t.next = 13;
                      break;

                    case 7:
                      return t.prev = 7, t.t0 = t["catch"](0), t.next = 11, i.default.inputCustomTapCatchFc(this.customId, t.t0);

                    case 11:
                      n = t.sent, void 0 !== n && null !== n && this.setValue(n);

                    case 13:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this, [[0, 7]]);
            }));

            function e() {
              return t.apply(this, arguments);
            }

            return e;
          }(),
          getCode: function getCode() {
            var t = this;
            if (!t.startCodeBl) if (this.checkPhoneNum) {
              var e = this.phoneNum;
              if (!i.default.regTest("Tel", e)) return void i.default.showToast("请正确输入11位手机号");
              t.$emit("getCode");
            } else t.$emit("getCode");
          },
          startCode: function startCode() {
            var t = this,
                e = this;

            if (!e.startCodeBl) {
              var n = setInterval(function () {
                e.codeCount > 0 ? --e.codeCount : (e.startCodeBl = !1, clearInterval(n), e.code = "", e.codeCount = t.codeCountDown);
              }, 1e3);
              e.startCodeBl = !0;
            }
          }
        },
        mixins: [(0, o.default)({
          QSInputsType: i.default.typeObj.input
        })]
      };

      e.default = f;
    }).call(this, n("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/QS-inputs-split/elements/QS-input/index-create-component', {
  'components/QS-inputs-split/elements/QS-input/index-create-component': function componentsQSInputsSplitElementsQSInputIndexCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("940c"));
  }
}, [['components/QS-inputs-split/elements/QS-input/index-create-component']]]);
});
require('components/QS-inputs-split/elements/QS-input/index.js');
__wxRoute = 'components/QS-inputs-split/template/template';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/QS-inputs-split/template/template.js';

define('components/QS-inputs-split/template/template.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/QS-inputs-split/template/template"], {
  "192b": function b(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      props: {
        title: {
          type: String,
          default: ""
        },
        titleHide: {
          type: Boolean,
          default: !1
        },
        fontSize: {
          type: Number,
          default: 30
        },
        width: {
          type: String,
          default: "100%"
        },
        titleLayout: {
          type: String,
          default: "default"
        },
        titleFlex: {
          type: Number,
          default: 1
        },
        contentFlex: {
          type: Number,
          default: 4
        },
        titleStyle: {
          type: String,
          default: ""
        },
        contentStyle: {
          type: String,
          default: ""
        },
        layout: {
          type: String,
          default: "row"
        },
        required: {
          type: Boolean,
          default: !1
        },
        requiredSign: {
          type: String,
          default: "*"
        },
        itemDisabled: {
          type: Boolean,
          default: !1
        },
        titleColor: {
          type: String,
          default: "#999"
        }
      },
      computed: {
        getLayout: function getLayout() {
          return "column" === this.layout ? "flex_column" : "flex_row";
        },
        getTitleLayout: function getTitleLayout() {
          switch (this.titleLayout) {
            case "left":
              return "flex_row_none_c";

            case "center":
              return "flex_row_c_c";

            case "right":
              return "flex_row_e_c";

            default:
              return "column" === this.layout ? "flex_row_none_c" : "flex_row_e_c";
          }
        },
        getWidthMode: function getWidthMode() {
          return "column" === this.layout ? "width100" : "maxWidth40";
        }
      },
      methods: {
        voidFc: function voidFc() {}
      }
    };
    e.default = u;
  },
  "1cd1": function cd1(t, e, n) {
    "use strict";

    var u = n("d60b"),
        l = n.n(u);
    l.a;
  },
  d60b: function d60b(t, e, n) {},
  e030: function e030(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        l = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return l;
    });
  },
  e2e9: function e2e9(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("192b"),
        l = n.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(r);
    }

    e["default"] = l.a;
  },
  ed07: function ed07(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("e030"),
        l = n("e2e9");

    for (var r in l) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return l[t];
        });
      }(r);
    }

    n("1cd1");
    var o = n("2877"),
        i = Object(o["a"])(l["default"], u["a"], u["b"], !1, null, "9f4544b8", null);
    e["default"] = i.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/QS-inputs-split/template/template-create-component', {
  'components/QS-inputs-split/template/template-create-component': function componentsQSInputsSplitTemplateTemplateCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ed07"));
  }
}, [['components/QS-inputs-split/template/template-create-component']]]);
});
require('components/QS-inputs-split/template/template.js');
__wxRoute = 'components/QS-inputs-split/uniIcons/uni-icons';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/QS-inputs-split/uniIcons/uni-icons.js';

define('components/QS-inputs-split/uniIcons/uni-icons.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/QS-inputs-split/uniIcons/uni-icons"], {
  "0797": function _(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      name: "UniIcons",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = u;
  },
  "28ef": function ef(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("a62b"),
        i = e("699d");

    for (var r in i) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(r);
    }

    e("5ad7");
    var a = e("2877"),
        c = Object(a["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  "4c75": function c75(t, n, e) {},
  "5ad7": function ad7(t, n, e) {
    "use strict";

    var u = e("4c75"),
        i = e.n(u);
    i.a;
  },
  "699d": function d(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("0797"),
        i = e.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = i.a;
  },
  a62b: function a62b(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return i;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/QS-inputs-split/uniIcons/uni-icons-create-component', {
  'components/QS-inputs-split/uniIcons/uni-icons-create-component': function componentsQSInputsSplitUniIconsUniIconsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("28ef"));
  }
}, [['components/QS-inputs-split/uniIcons/uni-icons-create-component']]]);
});
require('components/QS-inputs-split/uniIcons/uni-icons.js');
__wxRoute = 'components/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/register.js';

define('components/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/register"], {
  "2f96": function f96(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return a;
    });
  },
  "44b2": function b2(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("9ecf"),
        a = n.n(o);

    for (var r in o) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(r);
    }

    e["default"] = a.a;
  },
  4736: function _(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("2f96"),
        a = n("44b2");

    for (var r in a) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(r);
    }

    n("7166");
    var u = n("2877"),
        s = Object(u["a"])(a["default"], o["a"], o["b"], !1, null, null, null);
    e["default"] = s.exports;
  },
  7166: function _(t, e, n) {
    "use strict";

    var o = n("8b16"),
        a = n.n(o);
    a.a;
  },
  "8b16": function b16(t, e, n) {},
  "9ecf": function ecf(t, e, n) {
    "use strict";

    (function (t, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        data: function data() {
          return {};
        },
        methods: {
          formSubmit: function formSubmit(e) {
            console.log(t("form发生了submit事件，携带数据为：" + JSON.stringify(e.detail.value), " at components\\register.vue:38"));
            var o = e.detail.value,
                a = this.formsValidate(o);
            console.log(t("result为" + a, " at components\\register.vue:41")), null == a ? n.request({
              url: "http://kdjk.c5ppc.cn/register",
              data: o,
              method: "GET",
              dataType: "JSON",
              success: function success(e) {
                var o = "string" == typeof e.data ? JSON.parse(e.data) : e.data;
                console.log(t("成功了", " at components\\register.vue:57")), console.log(t(e, " at components\\register.vue:58")), 10010 == o.code ? n.showToast({
                  title: "注册成功",
                  icon: "none",
                  duration: 5e3
                }) : 1e4 == o.code && n.showToast({
                  title: "账号或者密码不正确",
                  icon: "none"
                });
              },
              fail: function fail(e) {
                console.log(t("服务器异常，请稍后再试", " at components\\register.vue:73")), console.log(t(e, " at components\\register.vue:74"));
              }
            }) : n.showToast({
              title: a,
              icon: "none"
            });
          },
          formsValidate: function formsValidate(t) {
            var e = t.account,
                n = t.password;
            return "" == e ? "用户名不可为空" : "" == n ? "密码不可为空" : null;
          }
        }
      };
      e.default = o;
    }).call(this, n("0de9")["default"], n("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/register-create-component', {
  'components/register-create-component': function componentsRegisterCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4736"));
  }
}, [['components/register-create-component']]]);
});
require('components/register.js');
__wxRoute = 'components/uni-badge/uni-badge';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-badge/uni-badge.js';

define('components/uni-badge/uni-badge.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-badge/uni-badge"], {
  "2c0d": function c0d(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      name: "UniBadge",
      props: {
        type: {
          type: String,
          default: "default"
        },
        inverted: {
          type: Boolean,
          default: !1
        },
        text: {
          type: String,
          default: ""
        },
        size: {
          type: String,
          default: "normal"
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = u;
  },
  3133: function _(t, n, e) {},
  5110: function _(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  6859: function _(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("5110"),
        a = e("9337");

    for (var i in a) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(i);
    }

    e("cf39");
    var r = e("2877"),
        c = Object(r["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  9337: function _(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("2c0d"),
        a = e.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    n["default"] = a.a;
  },
  cf39: function cf39(t, n, e) {
    "use strict";

    var u = e("3133"),
        a = e.n(u);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-badge/uni-badge-create-component', {
  'components/uni-badge/uni-badge-create-component': function componentsUniBadgeUniBadgeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6859"));
  }
}, [['components/uni-badge/uni-badge-create-component']]]);
});
require('components/uni-badge/uni-badge.js');
__wxRoute = 'components/uni-icons/uni-icons';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icons/uni-icons.js';

define('components/uni-icons/uni-icons.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icons/uni-icons"], {
  2609: function _(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return a;
    });
  },
  "49e7": function e7(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("2609"),
        a = e("c10a");

    for (var c in a) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(c);
    }

    e("9753");
    var i = e("2877"),
        r = Object(i["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = r.exports;
  },
  "4b38": function b38(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "UniIcons",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  },
  9753: function _(n, t, e) {
    "use strict";

    var u = e("caae"),
        a = e.n(u);
    a.a;
  },
  c10a: function c10a(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("4b38"),
        a = e.n(u);

    for (var c in u) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(c);
    }

    t["default"] = a.a;
  },
  caae: function caae(n, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icons/uni-icons-create-component', {
  'components/uni-icons/uni-icons-create-component': function componentsUniIconsUniIconsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("49e7"));
  }
}, [['components/uni-icons/uni-icons-create-component']]]);
});
require('components/uni-icons/uni-icons.js');
__wxRoute = 'components/uni-list-item/uni-list-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-list-item/uni-list-item.js';

define('components/uni-list-item/uni-list-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-list-item/uni-list-item"], {
  2217: function _(t, n, e) {},
  6034: function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("a4f5"),
        u = e.n(i);

    for (var a in i) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(a);
    }

    n["default"] = u.a;
  },
  "752f": function f(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("968a"),
        u = e("6034");

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    e("a8b6");
    var o = e("2877"),
        r = Object(o["a"])(u["default"], i["a"], i["b"], !1, null, null, null);
    n["default"] = r.exports;
  },
  "968a": function a(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  a4f5: function a4f5(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var i = function i() {
      return e.e("components/uni-icons/uni-icons").then(e.bind(null, "49e7"));
    },
        u = function u() {
      return e.e("components/uni-badge/uni-badge").then(e.bind(null, "6859"));
    },
        a = {
      name: "UniListItem",
      components: {
        uniIcons: i,
        uniBadge: u
      },
      props: {
        title: {
          type: String,
          default: ""
        },
        note: {
          type: String,
          default: ""
        },
        disabled: {
          type: [Boolean, String],
          default: !1
        },
        showArrow: {
          type: [Boolean, String],
          default: !0
        },
        showBadge: {
          type: [Boolean, String],
          default: !1
        },
        showSwitch: {
          type: [Boolean, String],
          default: !1
        },
        switchChecked: {
          type: [Boolean, String],
          default: !1
        },
        badgeText: {
          type: String,
          default: ""
        },
        badgeType: {
          type: String,
          default: "success"
        },
        thumb: {
          type: String,
          default: ""
        },
        showExtraIcon: {
          type: [Boolean, String],
          default: !1
        },
        extraIcon: {
          type: Object,
          default: function _default() {
            return {
              type: "contact",
              color: "#000000",
              size: 20
            };
          }
        }
      },
      data: function data() {
        return {};
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        },
        onSwitchChange: function onSwitchChange(t) {
          this.$emit("switchChange", t.detail);
        }
      }
    };

    n.default = a;
  },
  a8b6: function a8b6(t, n, e) {
    "use strict";

    var i = e("2217"),
        u = e.n(i);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-list-item/uni-list-item-create-component', {
  'components/uni-list-item/uni-list-item-create-component': function componentsUniListItemUniListItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("752f"));
  }
}, [['components/uni-list-item/uni-list-item-create-component']]]);
});
require('components/uni-list-item/uni-list-item.js');
__wxRoute = 'components/uni-list/uni-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-list/uni-list.js';

define('components/uni-list/uni-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-list/uni-list"], {
  1877: function _(n, t, u) {
    "use strict";

    var e = function e() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    u.d(t, "a", function () {
      return e;
    }), u.d(t, "b", function () {
      return a;
    });
  },
  a633: function a633(n, t, u) {
    "use strict";

    var e = u("fd2e"),
        a = u.n(e);
    a.a;
  },
  b952: function b952(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("c261"),
        a = u.n(e);

    for (var r in e) {
      "default" !== r && function (n) {
        u.d(t, n, function () {
          return e[n];
        });
      }(r);
    }

    t["default"] = a.a;
  },
  c261: function c261(n, t, u) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var e = {
      name: "UniList"
    };
    t.default = e;
  },
  d3bd: function d3bd(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("1877"),
        a = u("b952");

    for (var r in a) {
      "default" !== r && function (n) {
        u.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    u("a633");
    var i = u("2877"),
        c = Object(i["a"])(a["default"], e["a"], e["b"], !1, null, null, null);
    t["default"] = c.exports;
  },
  fd2e: function fd2e(n, t, u) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-list/uni-list-create-component', {
  'components/uni-list/uni-list-create-component': function componentsUniListUniListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d3bd"));
  }
}, [['components/uni-list/uni-list-create-component']]]);
});
require('components/uni-list/uni-list.js');
__wxRoute = 'components/wuc-tab/wuc-tab';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/wuc-tab/wuc-tab.js';

define('components/wuc-tab/wuc-tab.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/wuc-tab/wuc-tab"], {
  5391: function _(t, n, e) {
    "use strict";

    var u = e("f428"),
        r = e.n(u);
    r.a;
  },
  "79da": function da(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      name: "wuc-tab",
      data: function data() {
        return {};
      },
      props: {
        tabList: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        tabCur: {
          type: Number,
          default: function _default() {
            return 0;
          }
        },
        tabClass: {
          type: String,
          default: function _default() {
            return "";
          }
        },
        tabStyle: {
          type: String,
          default: function _default() {
            return "";
          }
        },
        textFlex: {
          type: Boolean,
          default: function _default() {
            return !1;
          }
        },
        selectClass: {
          type: String,
          default: function _default() {
            return "text-blue";
          }
        }
      },
      methods: {
        tabSelect: function tabSelect(t, n) {
          if (this.currentTab === t) return !1;
          this.$emit("update:tabCur", t), this.$emit("change", t);
        }
      },
      computed: {
        scrollLeft: function scrollLeft() {
          return 60 * (this.tabCur - 1);
        }
      }
    };
    n.default = u;
  },
  "93c9": function c9(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return r;
    });
  },
  d577: function d577(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("79da"),
        r = e.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    n["default"] = r.a;
  },
  dfde: function dfde(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("93c9"),
        r = e("d577");

    for (var a in r) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(a);
    }

    e("5391");
    var c = e("2877"),
        f = Object(c["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = f.exports;
  },
  f428: function f428(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/wuc-tab/wuc-tab-create-component', {
  'components/wuc-tab/wuc-tab-create-component': function componentsWucTabWucTabCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("dfde"));
  }
}, [['components/wuc-tab/wuc-tab-create-component']]]);
});
require('components/wuc-tab/wuc-tab.js');

__wxRoute = 'pages/healthdata/healthdata';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/healthdata/healthdata.js';

define('pages/healthdata/healthdata.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/healthdata/healthdata"],{"127c":function(e,t,n){"use strict";var a=n("2adb"),o=n.n(a);o.a},"219e":function(e,t,n){"use strict";n.r(t);var a=n("a505"),o=n("7cb3");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("127c");var r=n("2877"),c=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"2adb":function(e,t,n){},"550d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("5cc5")),o=n("2f62");function i(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u,s=function(){return n.e("components/popup-layer/popup-layer").then(n.bind(null,"63f6"))},l=null,d={components:{popupLayer:s},data:function(){return{src:"../../static/icons/moon.png",daycolor:"#40A9FF",weekcolor:"",mouthcolor:"",boolShow:!1,stepnumber:3453,heartbeats:71,bloodsuger:5.1,sleephour:6.76,ride:3.22,chartsseries:[{name:"步数",data:[0,0,0,0,0,0,200,3e3,54,34,53,112]},{name:"心率",data:[70,75,72,70,65,68,80,90,70,68,79,70]},{name:"时常",data:[40,60,60,57,60,60,10,0,0,0,0,0]},{name:"血糖",data:[5.4,5.2,4.8,4.6,4.5,4.2,4.3,6.8,6.1,5.3,5.2,4.9]}],chartsranges:[{max:100,min:0},{max:160,min:40},{max:60,min:0},{max:10,min:0}],index:0,cWidth:"",cHeight:"",pixelRatio:1,chartData:{categories:["1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00"],series:[{name:"步数",data:[5.4,5.2,4.8,4.6,4.5,4.2,4.3,6.8,6.1,5.3,5.2,4.9]}]}}},computed:r({},(0,o.mapState)(["itemName","itemNumber","itemImg","itemUnit","hasLogin","steps"])),onLoad:function(){u=this,this.cWidth=e.upx2px(750),this.cHeight=e.upx2px(400)},methods:{click:function(e){1==e?(u.daycolor="#40A9FF",u.weekcolor="",u.mouthcolor=""):2==e?(u.daycolor="",u.weekcolor="#40A9FF",u.mouthcolor=""):3==e&&(u.daycolor="",u.weekcolor="",u.mouthcolor="#40A9FF")},show:function(e){this.index=e.index,this.$forceUpdate(),this.getServerData(),this.$refs.popupRef.show(e)},close:function(){this.$refs.popupRef.close()},getServerData:function(){u.chartData.series[0]=u.chartsseries[this.index],u.showLineA("canvasLineA",u.chartData)},showLineA:function(e,t){var n=u.chartsranges[this.index].max,o=u.chartsranges[this.index].min;l=new a.default({$this:u,canvasId:e,type:"line",fontSize:11,legend:{show:!0},dataLabel:!1,dataPointShape:!0,background:"#FFFFFF",pixelRatio:u.pixelRatio,categories:t.categories,series:t.series,animation:!0,xAxis:{type:"grid",gridColor:"#CCCCCC",gridType:"dash",dashLength:8},yAxis:{gridType:"dash",gridColor:"#CCCCCC",dashLength:8,splitNumber:10,min:o,max:n,format:function(e){return e.toFixed(0)}},width:u.cWidth*u.pixelRatio,height:u.cHeight*u.pixelRatio,extra:{line:{type:"straight"}}})},touchLineA:function(e){l.showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})}}};t.default=d}).call(this,n("6e42")["default"])},"7cb3":function(e,t,n){"use strict";n.r(t);var a=n("550d"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},a505:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},d709:function(e,t,n){"use strict";(function(e){n("aeaa"),n("921b");a(n("66fd"));var t=a(n("219e"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["d709","common/runtime","common/vendor"]]]);
});
require('pages/healthdata/healthdata.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1618:function(t,i,e){"use strict";var a=e("cb2f"),l=e.n(a);l.a},4881:function(t,i,e){"use strict";(function(t){e("aeaa"),e("921b");a(e("66fd"));var i=a(e("49bf"));function a(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("6e42")["createPage"])},"49bf":function(t,i,e){"use strict";e.r(i);var a=e("5ae2"),l=e("fb75");for(var n in l)"default"!==n&&function(t){e.d(i,t,function(){return l[t]})}(n);e("1618");var d=e("2877"),s=Object(d["a"])(l["default"],a["a"],a["b"],!1,null,null,null);i["default"]=s.exports},"5ae2":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement;t._self._c;t._isMounted||(t.e0=function(i){t.toNewTabs=1},t.e1=function(i){t.toNewTabs=2},t.e2=function(i){t.toNewTabs=3},t.e3=function(i){t.toNewTabs=4})},l=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return l})},cb2f:function(t,i,e){},d399:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{lists:[{id:1,url:"../detail/detail?id=5d98441cca38ac75f0618d0a&e=1",image:"../../static/imgs/50581bf6-3217-4e0d-b988-965bbb75ce1d.jpg",list_title:"干柠檬真的能补充VC吗?",list_content:"科学研究证明，柠檬汁含有大量的果胶纤维，有助于消除体内饥饿感，减少食物的摄入，从而达到减肥的目的。外国科学研究证实，定期喝一大杯柠檬片泡水，它会降低你身体内的酸性物质，很多身上有炎症的病人在遵医嘱喝柠檬汁后，炎症很快就消退了。"},{id:2,url:"../detail/detail?id=5d984444ca38ac75f0618d0b&e=1",image:"../../static/imgs/shuiguo.jpg",list_title:"只吃水果真的能减肥吗？",list_content:"入夏以后各类瓜果相继上市，这可乐坏了喜欢吃水果和打算吃水果减肥的小姐姐们。吃水果真的可以变瘦吗？水果的味道可口，并且水分大、食物纤维含量高，维生素和矿物质含量丰富，所以大部分的水果的确对减肥瘦身有着辅助性的作用。但不是吃了水果就能瘦，并且只吃水果也不能变瘦。"},{id:3,url:"../detail/detail?id=5d984458ca38ac75f0618d0c&e=1",image:"../../static/imgs/paigu.jpg",list_title:"骨头汤真的是大补吗？",list_content:"虽然骨头里含大量钙，但里面的钙都是以磷酸盐的形式存在，极难溶于水，而且骨头里含很多黄骨髓，黄骨髓的成分以脂肪为主，所以为们常喝的骨头汤其实钙含量很低，很多了还会导致脂肪摄入过多。看10杯骨头汤的钙含量都比不上一杯牛奶的钙含量。"},{id:4,url:"../detail/detail?id=5d984472ca38ac75f0618d0d&e=1",image:"../../static/imgs/5b697aeaN1c79a102.jpg",list_title:"真有食物相克的说法吗?",list_content:"很多食物导致身体不适不是因为相克，更多是因为食用方式不当，比如未煮熟，食用过多，还有就是食物过敏，或是吃了致病菌污染的食物。举个人们常说的虾和维生素C同吃会生成剧毒的砒霜，事实却是你至少得吃100多公斤的虾才会中毒。机体的代谢能力是足够应付这些食物反应的。"}],lists1:[{id:1,url:"../detail/detail?id=0&e=2",image:"../../static/imgs/v2-000f1c1ae3e7ae215e216912aa81e647_1200x500.jpg",list_title:"中药究竟应该吃多长时间？",list_content:"无论是中药汤剂还是中成药，相信很多人吃中药时都会有一个困惑：这药吃到啥时候？换句话说，就是治疗的疗程是多长时间？也许你并不知道，就是这样一个简单地问题，实际上并不容易回答。首先，与西药不同，很多中医临床指南、中药学教材中并没有明确地提出中药治疗的疗程概念，缺少能够规范中药治疗疗程的信息和资料。"},{id:2,url:"../detail/detail?id=1&e=2",image:"../../static/imgs/v2-a919f748741862c8f922f5d5aee6e630_1200x500.jpg",list_title:"口腔异味可辨疾病!",list_content:"中医可通过患者口腔中异常的味道来判断你的身体状况。口甜：中医认为多是脾胃湿热、肝脾疾火内蕴所致。多见于糖尿病和消化功能紊乱。口酸：中医认为是肝胆之热乘脾所致。口酸多见于胃炎、胃及十二指肠溃疡病。口苦：中医认为是肝胆有热、胆气熏蒸所致。口苦常与胆汁代谢失常有关，多见于急慢性肝炎、胆囊炎、胆结石和肝胆肿瘤等。"},{id:3,url:"../detail/detail?id=2&e=2",image:"../../static/imgs/138200775_15659361963161n.jpg",list_title:"亚健康是什么？怎么界定？",list_content:"亚健康内涵丰富，外延广泛。可以这么说，健康概念的范围有多大，亚健康的涵盖范围就有多大；疾病和病症谱涉及领域有多宽，亚健康谱的涉及范围就有多宽。概括我们中心近年来的研究成果和多数专家的研讨意见，亚健康的分类和主要内容可概括为如下几个方面。1.以人四位一体的健康新概念为依据，亚健康可划分为：（1）躯体亚健康。主要表现为不明原因或排除疾病原因的体力疲劳、虚弱、周身不适、性功能下降和月经周期紊乱等；"},{id:4,url:"../detail/detail?id=3&e=2",image:"../../static/imgs/hanre.jpg",list_title:"寒热往来的病因是什么",list_content:"很多人都想了解寒热往来的病因是什么？为此，医学教育网编辑特别整理了这篇关于寒热往来的病因是什么的文章，具体如下：①邪入少阳往来寒热，胸胁苦满，兼有心烦喜呕，不思饮食，口苦咽干，目眩，舌边红，苔薄白，脉弦数。②湿热郁阻往来寒热如疟，口渴心烦，脘闷，腹胀，呕恶身热，医学教育网|搜集整理午后较重，入夜尤甚，天明得汗诸症稍减，但胸腹灼热不除，苔黄白而腻，脉弦数。"}],lists2:[{id:1,url:"../detail/detail?id=4&e=2",image:"../../static/imgs/kouchou.jpg",list_title:"口臭的中药治疗方法",list_content:"口臭，是指从口腔发出异味，如何治疗口臭？以下为大家推荐了16种中药治疗口臭的偏方，选择以下推荐的中药，或内服、或漱口、或含于口中，对治疗口臭有效果。口臭的中药治疗方法有那些？16种中药偏方：1、茉莉花茶适量含于口中。2、桂花3克沸水沏代茶频频内服。3、藿香10克水煎取其药汁含漱口。4、藿香15克，冰片5克，荷叶10克水煎取药汁每于饭后漱口。5、藿香、佩兰各6克水煎取药汁含漱口。"},{id:2,url:"../detail/detail?id=5&e=2",image:"../../static/imgs/shucai.jpg",list_title:"常吃七种蔬菜帮助你自然美白",list_content:"这个夏季最重要的问题就是如何美白了？女人不仅要防晒，保湿祛斑等，美白也是很重要的。今天小编就教你吃蔬菜来自然美白，以下7种蔬菜吃了能美白哦，必须坚持哦。豌豆多吃豌豆可以祛斑驻颜，《本草纲目》称豌豆具有“祛除黑斑，令面光泽”的功效。现代研究发现，豌豆含有丰富的维生素A原，这种物质可在体内转化为维生素A，而维生素A具有润泽皮肤的作用，而且是从一般食物中摄取，不会产生毒副作用。吃豌豆还有消肿、舒展皮肤的功能，能拉紧眼睛周围的皱纹。"},{id:3,url:"../detail/detail?id=6&e=2",image:"../../static/imgs/queban.jpg",list_title:"中医秘方去除雀斑",list_content:"1、中药--茯苓敷面将白茯苓磨成细粉，蜂蜜来调匀，每天晚上进行敷面，白天起来洗净，长期坚持用，半月就可见到明显的效果。2、西药--VC口服我们都知道女人补充VC是美白最好的途径，医学教育网|搜集整理因为它不仅可以美白更能够淡化色斑，每天坚持服用，也能够帮助去雀斑。3、食疗--香菜水将香菜熬成汤，每天洗脸，时间长了自然就会消除雀斑。4、水果疗法--柠檬柠檬是VC之王，饮用柠檬水不仅可以美白肌肤，更可以防止黑色素沉淀，对祛斑效果也很明显。"},{id:4,url:"../detail/detail?id=7&e=2",image:"../../static/imgs/doudou.jpg",list_title:"鼻子上长痘痘是什么原因",list_content:"鼻子历来是大家肌肤护理的一大难题，长痘痘、长黑头、毛孔粗大等肌肤问题的主要发源地就在鼻子。而鼻子上无论有什么肌肤问题，都会很影响一个人的形象。那么，鼻子上长痘痘是什么原因呢？要想鼻子的肌肤你能够变得白皙，就来看吧。下面，小编就向大家分析鼻子上长痘痘的几点原因以及解决方法。鼻子上长痘痘的原因一：内分泌失调压力、饮食习惯以及生理期的来临都会改变原本平衡的雌雄性激素分泌，导致皮脂腺分泌过旺，脸部毛孔阻塞，引发痘痘。"}],lists3:[{id:1,url:"../detail/detail?id=8&e=2",image:"../../static/imgs/zhenjiu.jpg",list_title:"针灸止痛之谜",list_content:"长期以来，针灸疗法一直困扰着西方的医学专家，这并不奇怪。针灸理论认为，有一种叫做“气”的无形生命能量在人体14条经脉中往复运行，而病痛是由于气的阻滞和失衡所引发的。针灸师相信，在人体一些特定的点上插入细针，就能帮助经脉畅通，从而治疗一切疾病。听上去有点像天方夜谭，但针灸确实能对人体产生作用。神经影像学研究表明，针灸似乎能安抚脑部掌管痛觉的区域，并激活那些涉及休息和康复功能的脑部区域。超声技术显示，针灸能增强治疗部位的血液循环。"},{id:2,url:"../detail/detail?id=9&e=2",image:"../../static/imgs/4021.jpg_wh860.jpg",list_title:"吃中药的禁忌",list_content:"为了保障中药的疗效使其更好的发挥其治疗作用，服用中药时是需要对一些食物忌口的，通常应该注意的有以下几点：吃中药的禁忌一、辛辣类：此类食物多辛热，有通阳健胃之功效，若过多食用则易生痰动火，散气耗血，故该类饮食仅适合于寒证疾病者，而不适于阴虚阳亢之体及血证、温病、痔瘘、痈疖患者等。医学教育|网搜集整理此类食物包括葱、蒜、韭菜、生姜、酒、辣椒等。如辣椒属热性，若有发热、便秘、尿短赤、口干渴、唇燥、咽喉肿痛、鼻衄、舌质红等热象者食用，必然会加重“上火”症状"},{id:3,url:"../detail/detail?id=10&e=2",image:"../../static/imgs/b_0_201811051903448208.jpg",list_title:"针灸美容的优势有哪些",list_content:"健形养神，又称神气，是人体生命活动的特征。一个人的精神容貌则是人体精、气、神的充分体现，而气血是神志活动的物质基础，神赖气血奉养而精明。根据中医“形神合一”及“形与神俱”的理论，针灸临床历来注重“形与神”而强调以“神”为主。针灸就其保健延年、美容美形方面可谓形神兼备，以神养形，以神治形，充分调动人体自身的积极因素，调理脏腑，运行气血，使肌肤得濡润，毛发获滋养。若出现面色萎黄或苍白，面容憔悴，皮肤苍老晦暗、弹性减弱，皱纹渐增，腹部脂肪堆积等，可以通过针灸调节使其精充气足，容光焕发。"},{id:4,url:"../detail/detail?id=11&e=2",image:"../../static/imgs/baguan.jpg",list_title:"拔罐治疗有哪些保健功效？",list_content:"您想知道拔罐治疗有哪些保健功效吗？相信您看了这篇有关拔罐治疗有哪些保健功效的文章，您就了解了。拔罐疗法，是中国传统医学中的一种特色疗法，广泛运用于民间，因古时多用兽角制罐，故称为“角法”。拔罐是以罐为工具，利用燃烧、抽吸、蒸气等方法造成罐内负压，使罐吸附于体表，以产生良性刺激，拔罐具有沟通表里、疏通经络、扶正祛邪、行气活血、消肿止痛、祛风散寒、拔毒泻热、调和气血、缓解疲劳等作用，是一种以调整机体功能、防治疾病目的的外治方法。作为一种“绿色”的物理疗法，因其安全、有效而日益受到青睐。"}],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,toNewTabs:1}},onLoad:function(){}};i.default=a},fb75:function(t,i,e){"use strict";e.r(i);var a=e("d399"),l=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=l.a}},[["4881","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/medical/medical';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/medical/medical.js';

define('pages/medical/medical.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/medical/medical"],{"0070":function(e,t,n){"use strict";n.r(t);var u=n("e7e7"),a=n("8125");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("f165");var c=n("2877"),o=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},"291d":function(e,t,n){"use strict";(function(e){n("aeaa"),n("921b");u(n("66fd"));var t=u(n("0070"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},3005:function(e,t,n){},8125:function(e,t,n){"use strict";n.r(t);var u=n("e1e9"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=a.a},e1e9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},e7e7:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})},f165:function(e,t,n){"use strict";var u=n("3005"),a=n.n(u);a.a}},[["291d","common/runtime","common/vendor"]]]);
});
require('pages/medical/medical.js');
__wxRoute = 'pages/doctorDetail/doctorDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/doctorDetail/doctorDetail.js';

define('pages/doctorDetail/doctorDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/doctorDetail/doctorDetail"],{"1d1b":function(t,e,a){"use strict";a.r(e);var n=a("b451"),o=a.n(n);for(var d in n)"default"!==d&&function(t){a.d(e,t,function(){return n[t]})}(d);e["default"]=o.a},"458f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},"566e":function(t,e,a){"use strict";var n=a("8b38"),o=a.n(n);o.a},"8b38":function(t,e,a){},b451:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{doctorInfo:{}}},onLoad:function(e){var a=this;console.log(t(e," at pages\\doctorDetail\\doctorDetail.vue:48"));var n=[{dName:"陈婉姬",dDepartment:"  儿科",dPosition:"主治医师",dAddress:"浙江省立同德医院",dimage:"../../static/imgs/nvdoctor.jpg",dAdvantages:"【擅长】：厌食、营养不良、功能性腹痛、腹泻、感冒、流鼻涕、咳嗽、哮喘、反复性呼吸道感染、慢性鼻炎、手足口病、遗尿、尿频、汗症、抽动症、矮小症、性早熟等的中西医治疗，再小儿调理保健、生长发育等具有颇为丰富的临床经验",dShortInfo:"【简介】：陈婉姬，女，学会主任医师成绩，儿科擅长副主任。年青从事儿科临床长沙与科研抗体工作抗体22年，参与发表我国论文20余篇，编写《古今中医儿科病辨治精要》1部（第一副主编），主持获得参与厅局级发表科研项目导师多项。会议擅长于厌食、营养不良、腹泻、咳嗽、哮喘、反复呼吸道感染、慢性经过鼻炎、手足口病、遗尿、尿频、汗症等的中西医医生治疗，在小儿调理保健、生长发育等主任具有丰富著名的临床经过开始经验。"},{dName:"刘文沛",dDepartment:"  妇科",dPosition:"主治医师",dAddress:"浙江省立同德医院",dimage:"../../static/imgs/nv.jpg",dAdvantages:"【擅长】：月经不调，月经痛、妇科炎症，不孕症、输卵管堵塞、多囊卵巢，宫腔粘连、子宫肌瘤、卵巢囊肿、痛经、更年期、老年期妇科疾病、尿失禁、盆腔器官脱垂等，以高效，有效和安全的流程，为患者提供药物，微创手术和康复指导相结合的全面治疗",dShortInfo:"【简介】：刘文沛，女，教授妇产科学博士研究生导师，全科医学硕士研究生导师。妇产科主任，妇产科学科带头人，医学博士。中华预防医学会妇女保健分会更年期学组委员，中华医学会心血管病分会女性健康学组委员，中华医学会科普分会北京分会委员，中国医师协会妇产科分会委员，中国医师协会心血管病分会女性健康工作委员会会员，中国医师协会精神科分会综合医院精神卫生工作委员会会员等，《实用妇产科杂志》，《实用妇科与产科杂志》等编委"},{dName:"张家严",dDepartment:"  肝胆胰外科",dPosition:"主治医师",dAddress:"浙江省立同德医院",dimage:"../../static/imgs/16pic_2634578_b.jpg",dAdvantages:"【擅长】：在肝胆胰疾病疑难重症方面，重点诊治肝胆胰肿瘤，如肝细胞癌，肝脏胆管细胞癌，肝转移癌，结直肠癌肝转移，巨大肝肿瘤等，复杂肝道病，肝移植治疗终末期肝胆病，如胆管癌，肝门部胆管癌，胆管囊状扩张症，胆管囊肿，胰腺肿瘤等",dShortInfo:"【简介】：张家严，男，创立了腹膜癌综合诊治技术体系，明显提高了诊断效率，显著延长腹膜癌病人的生存期，达国际领先水平，评为国际腹膜癌联盟执行委员会常委，参与制定腹膜癌治疗的国际指南，主持制定国内首个腹膜癌诊治的专家共识。熟练掌握腹膜肿瘤，结直肠癌，胃癌，胃肠间质瘤，神经内分泌肿瘤，乳腺癌，甲状腺癌以手术为主的综合治疗。熟练掌握腹腔镜技术，具有丰富的微创外科临床经验"},{dName:"赵文",dDepartment:"  神经内科",dPosition:"主治医师",dAddress:"浙江省立同德医院",dimage:"../../static/imgs/1305-11040404594340.jpg",dAdvantages:"【擅长】：神经系统疾病疑难及危重症疾病，包括：脑血管病，认知功能障碍疾病，运动障碍疾病，中枢神经系统脱髓鞘疾病的诊断及治疗。具体包括：少见脑血管疾病，各种类型的认知功能障碍及痴呆，帕金森综合征，多发性硬化及视神经脊髓炎谱系疾病等",dShortInfo:"【简介】：赵文，男，主任医师，教授，医学博士，博士研究生导师。从事神经系统疾病的临床及研究工作近30年，在神经系统疾病的诊断鉴别及综合防治方面具有丰富的临床经验，尤其在复杂及难治性神经系统疾病的诊断和治疗等方面具有较高的学术水平和学术影响力。作为分中心负责人，参与了多项神经系统疾病的国际合作研究以及神经系统疾病相关的十五，十一五，十二五|研究课题，作为课题负责人承担并完成国家自然科学基金等中央科研保健课题"}];a.doctorInfo=n[e.id]},methods:{Tochat:function(e,n){console.log(t(e,n," at pages\\doctorDetail\\doctorDetail.vue:91"));var o="../../pages/HM-chat/HM-chat?name="+e+"&imgurl="+n;a.navigateTo({url:o})}}};e.default=n}).call(this,a("0de9")["default"],a("6e42")["default"])},c50b:function(t,e,a){"use strict";(function(t){a("aeaa"),a("921b");n(a("66fd"));var e=n(a("de13"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},de13:function(t,e,a){"use strict";a.r(e);var n=a("458f"),o=a("1d1b");for(var d in o)"default"!==d&&function(t){a.d(e,t,function(){return o[t]})}(d);a("566e");var i=a("2877"),r=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports}},[["c50b","common/runtime","common/vendor"]]]);
});
require('pages/doctorDetail/doctorDetail.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{4608:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={computed:o({},(0,r.mapState)(["hasLogin","forcedLogin"])),methods:o({},(0,r.mapMutations)(["logout"]),{bindLogin:function(){e.navigateTo({url:"../loginRegister/loginRegister"})},bindLogout:function(){this.logout(),this.forcedLogin&&e.reLaunch({url:"../loginRegister/loginRegister"})}})};t.default=i}).call(this,n("6e42")["default"])},"4e70":function(e,t,n){"use strict";n.r(t);var r=n("d956"),o=n("9d10");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);var i=n("2877"),a=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,null,null);t["default"]=a.exports},"9c06":function(e,t,n){"use strict";(function(e){n("aeaa"),n("921b");r(n("66fd"));var t=r(n("4e70"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"9d10":function(e,t,n){"use strict";n.r(t);var r=n("4608"),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t["default"]=o.a},d956:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})}},[["9c06","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/detail/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/detail/detail.js';

define('pages/detail/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"117b":function(t,a,e){"use strict";(function(t){e("aeaa"),e("921b");i(e("66fd"));var a=i(e("c67b"));function i(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},3021:function(t,a,e){"use strict";var i=e("5fab"),c=e.n(i);c.a},3624:function(t,a,e){"use strict";e.r(a);var i=e("4ca3"),c=e.n(i);for(var p in i)"default"!==p&&function(t){e.d(a,t,function(){return i[t]})}(p);a["default"]=c.a},"4ca3":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{detailData:{},detailData1:{}}},onLoad:function(a){var e=this;if(1==a.e)t.request({url:"http://kdjk.c5ppc.cn/article?article_id="+a.id,success:function(t){e.detailData=t.data.data[0]}});else{var i=[{title:"中药究竟应该吃多长时间？",img1:"https://pic4.zhimg.com/v2-000f1c1ae3e7ae215e216912aa81e647_1200x500.jpg",part1:"无论是中药汤剂还是中成药，相信很多人吃中药时都会有一个困惑：这药吃到啥时候？换句话说，就是治疗的疗程是多长时间？也许你并不知道，就是这样一个简单地问题，实际上并不容易回答。首先，与西药不同，很多中医临床指南、中药学教材中并没有明确地提出中药治疗的疗程概念，缺少能够规范中药治疗疗程的信息和资料。",img2:"https://pic1.zhimg.com/v2-536f5d7043e638473a7880fd3c66833b_b.jpg",part2:"其次，这个表象问题所体现出来的本质矛盾是，中药这种以辨证论治、随症加减和随证停药为特点的治疗学体系，并未将疗程设定为固定时间，而是根据患者病情的改善情况再不断调整，这种思路与西药降压药、降糖药终身服药的理念很不一样。所以，中药的治疗学特点决定了，由于你的机体状态在不断变化，所以长期服用固定组方配伍的药物是不妥的，疗程概念也就被淡化了。但是，临床治疗过程中，确实需要一个连续用药时长的参考。这个时候怎么办呢？",img3:"https://pic4.zhimg.com/v2-4ef83e6ed0474f52a4e6c9585091aa8f_b.jpg",part3:"一般而言，有2方面的资料可以供我们参考。第一，中成药说明书信息。一些中成药说明书会明确注明疗程，例如柴银口服液“连服3天”，金花清感颗粒“连服3-5天”复方丹参滴丸“4周为一个疗程”，荷丹片“8周为一疗程”等。说明书没有明确提到疗程的，可以参考已有疗程信息的同类中成药。第二，中药新药临床试验指导原则中，也包括了很多新药临床试验的推荐疗程时长，例如慢性支气管炎急性发作“一般为10天”，血瘀证“建议疗程不少于4周”，消化性溃疡“建议为4-8周”等，临床组方选药时，可以根据主治证选择恰当的疗程。"},{title:"口腔异味可辨疾病!",img1:"https://pic1.zhimg.com/v2-a919f748741862c8f922f5d5aee6e630_1200x500.jpg",part1:"口腔异味可辨疾病：中医可通过患者口腔中异常的味道来判断你的身体状况。口甜：中医认为多是脾胃湿热、肝脾疾火内蕴所致。多见于糖尿病和消化功能紊乱。口酸：中医认为是肝胆之热乘脾所致。口酸多见于胃炎、胃及十二指肠溃疡病。口苦：中医认为是肝胆有热、胆气熏蒸所致。口苦常与胆汁代谢失常有关，多见于急慢性肝炎、胆囊炎、胆结石和肝胆肿瘤等。",img2:"http://www.uooyoo.com/img2016/11/29/2016112961255189.jpg",part2:"口咸：中医认为是肾阴不足，虚火上浮所致医学|教育网整理。多见于神经官能症、慢性肾炎、慢性咽炎、口腔溃疡。口淡：中医认为是脾胃虚寒、运化无力所致。多见于消化系统与内分泌系统疾病，营养不良、维生素与微量元素锌缺乏症。口臭：中医认为是胃内饮食停滞、浊气上逆所致。多见于口腔疾患及消化不良，如口腔炎、咽炎、牙龈炎、口腔溃疡、龋齿、胃炎、胃及十二指肠溃疡、胃癌等。",img3:"http://5b0988e595225.cdn.sohucs.com/images/20180529/f887f936998a4af69c116d2801feef26.jpeg",part3:"口辣：中医认为是肺热或胃火上炎所致。多见于高血压、神经官能症、更年期综合征、长期低热。当然，口中异味还与饮食、饮酒、吸烟、睡眠、药物等有关，当口中出现异味时，要及时就医，找出原因。"},{title:"亚健康是什么？怎么界定？",img1:"http://www.xinhuanet.com/science/2019-07/05/138200775_15659361963161n.jpg",part1:"亚健康内涵丰富，外延广泛。可以这么说，健康概念的范围有多大，亚健康的涵盖范围就有多大；疾病和病症谱涉及领域有多宽，亚健康谱的涉及范围就有多宽。概括我们中心近年来的研究成果和多数专家的研讨意见，亚健康的分类和主要内容可概括为如下几个方面。",img2:"https://pic1.zhimg.com/v2-8c210c334bdc101cacb7cf8f855ecffe_1200x500.jpg",part2:"1.以人四位一体的健康新概念为依据，亚健康可划分为：（1）躯体亚健康。主要表现为不明原因或排除疾病原因的体力疲劳、虚弱、周身不适、性功能下降和月经周期紊乱等；（2）心理亚健康。主要表现为不明原因的脑力疲劳、情感障碍、思维紊乱、恐慌、焦虑、自卑以及神经质、冷漠、孤独、轻率，甚至产生自杀念头等；（3）社会适应性亚健康。突出表现为对工作、生活、学习等环境难以适应，对人际关系难以协调，即角色错位和不适应是社会适应性亚健康的集中表现；",img3:"http://www.dayichuancheng.com/d/file/content/2018/07/5b4d6209a43d6.jpg",part3:"2.按照亚健康概念的构成要素分类：（1）身心上有不适感觉，但又难以确诊的“不定陈述综合征”；（2）某些疾病的临床前期表现（疾病前状态）；（3）一时难以明确其病理意义的“不明原因综合征”，如更年期综合征、神经衰弱综合征、疲劳综合征等；"},{title:"寒热往来的病因是什么",img1:"http://leeyuming.com/wp-content/uploads/2014/08/1-e1407913119348.jpg",part1:"很多人都想了解寒热往来的病因是什么？为此，医学教育网编辑特别整理了这篇关于寒热往来的病因是什么的文章，具体如下：①邪入少阳往来寒热，胸胁苦满，兼有心烦喜呕，不思饮食，口苦咽干，目眩，舌边红，苔薄白，脉弦数。",img2:"http://5b0988e595225.cdn.sohucs.com/images/20181219/e1ccf0d094384b37a34f52c16f8d5924.jpeg",part2:"②湿热郁阻往来寒热如疟，口渴心烦，脘闷，腹胀，呕恶身热，医学教育网|搜集整理午后较重，入夜尤甚，天明得汗诸症稍减，但胸腹灼热不除，苔黄白而腻，脉弦数。③疟疾寒热往来，反复发作，发有定时，先恶寒，甚者寒战，继则壮热，最后汗出通身，热退身和，同时伴有头痛如裂，周身乏力，肢体疼痛，口渴引饮。如此反复发作，脉弦。",img3:"https://www.xincha.com/system/daily/stories/covers/000/029/369/medium/0?1545472090",part3:"发热，体温高出正常标准，或自有身热不适的感觉。发热原因，分为外感、内伤两类。外感发热，因感受六淫之邪及疫疠之气所致；内伤发热，多由饮食劳倦或七情变化，导致阴阳失调，气血虚衰所致。外感发热多实，见于感冒、伤寒、温病、瘟疫等病证；内伤多虚，有阴虚发热、阳虚发热、血虚发热、气虚发热、虚劳发热、阳浮发热、失血发热等"},{title:"口臭的中药治疗方法",img1:"http://www.xinhuanet.com//mil/2016-03/31/128851944_14593885008591n.png",part1:"口臭，是指从口腔发出异味，如何治疗口臭？以下为大家推荐了16种中药治疗口臭的偏方，选择以下推荐的中药，或内服、或漱口、或含于口中，对治疗口臭有效果。口臭的中药治疗方法有那些？",img2:"https://pic1.zhimg.com/50/v2-89f3a5fc622ac4124789a3eb0cc34960_hd.jpg",part2:"16种中药偏方：1、茉莉花茶适量含于口中。2、桂花3克沸水沏代茶频频内服。3、藿香10克水煎取其药汁含漱口医学教育网|整理。4、藿香15克，冰片5克，荷叶10克水煎取药汁每于饭后漱口。5、藿香、佩兰各6克水煎取药汁含漱口。6、葛根、藿香、白芷各12克，木香10克，公丁香6克水煎取其药汁含漱口。7、丁香2克含口中。8、桂枝适量研为细面，每取3克用沸水沏代茶服",img3:"https://img.heho.com.tw/wp-content/uploads/2018/04/%E4%BD%A0%E4%B9%9F%E6%9C%89%E6%83%B1%E4%BA%BA%E5%8F%88%E5%B0%B7%E5%B0%AC%E7%9A%84%E5%8F%A3%E8%87%AD%E5%95%8F%E9%A1%8C%E5%97%8E%EF%BC%9F%E8%A8%98%E4%BD%8F%E9%80%994%E5%80%8B%E6%96%B9%E6%B3%95%E6%94%B9%E5%96%84%E5%8F%A3%E8%87%AD.png",part3:"9、连翘6克研为细面用绿茶冲服。10、莲心20克，藕30克同入锅中煮至烂后服食，每日一次，连用一周。11、桑白皮、地骨皮、知母各10克，麦冬6克水煎内服，亦可漱口。12、银耳30克煮烂后加入蜂蜜10毫升充分搅匀后内服。13、大黄适量于锅中炒成炭与冰片共研为细面，每日晨起取适量药粉刷牙并用温开水漱口。14、草豆蔻30克，细辛10克共研为细面。每日3次取药面1克含口中。"},{title:"常吃七种蔬菜帮助你自然美白",img1:"http://n.sinaimg.cn/transform/20151012/rHxJ-fxirmpy1506982.jpg",part1:"这个夏季最重要的问题就是如何美白了？女人不仅要防晒，保湿祛斑等，美白也是很重要的。今天小编就教你吃蔬菜来自然美白，以下7种蔬菜吃了能美白哦，必须坚持哦。豌豆多吃豌豆可以祛斑驻颜，《本草纲目》称豌豆具有“祛除黑斑，令面光泽”的功效。现代研究发现，豌豆含有丰富的维生素A原，这种物质可在体内转化为维生素A，而维生素A具有润泽皮肤的作用，而且是从一般食物中摄取，不会产生毒副作用。吃豌豆还有消肿、舒展皮肤的功能，能拉紧眼睛周围的皱纹。",img2:"http://www.81.cn/zghjy/attachement/jpg/site351/20140312/18037330ff2d148a1a0614.jpg",part2:"土豆有关美白的蔬菜，还有“双豆”一说，双豆即土豆和豌豆。土豆含有丰富的B族维生素及大量的优质纤维素，还含有微量元素、蛋白质、脂肪和优质淀粉等营养元素。这些成分在抗老防病过程中有着重要的作用，能有效帮助女性身体排毒。其中含有丰富的维生素C让女性回复美白肌肤。此外，土豆中的粗纤维还可以起到润肠通便的作用。",img3:"https://img.88tph.com/production/20180107/12435859-1.jpg!/watermark/url/L3BhdGgvbG9nby5wbmc/align/center",part3:"胡萝卜胡萝卜被誉为“皮肤食品”，能润泽肌肤。它所含的β胡萝卜素，可以抗氧化和美白肌肤，还可以清除肌肤的多余角质，对油腻痘痘肌肤也有镇静舒缓的功效，蛋黄和蜂蜜有保湿的润肤效果。另外，胡萝卜含有丰富的果胶物质，可与汞结合，使人体里的有害成分得以排除，肌肤看起来更加细腻红润。"},{title:"中医秘方去除雀斑",img1:"http://5b0988e595225.cdn.sohucs.com/images/20180823/44502afea2d94952a5a1abce3258a881.jpeg",part1:"1、中药--茯苓敷面将白茯苓磨成细粉，蜂蜜来调匀，每天晚上进行敷面，白天起来洗净，长期坚持用，半月就可见到明显的效果。2、西药--VC口服 我们都知道女人补充VC是美白最好的途径，医学教育网|搜集整理因为它不仅可以美白更能够淡化色斑，每天坚持服用，也能够帮助去雀斑。",img2:"https://p1.pstatp.com/large/3c760002ebd7fe350fd3",part2:"3、食疗--香菜水将香菜熬成汤，每天洗脸，时间长了自然就会消除雀斑。4、水果疗法--柠檬 柠檬是VC之王，饮用柠檬水不仅可以美白肌肤，更可以防止黑色素沉淀，对祛斑效果也很明显。",img3:"https://mua.com.hk/wp-content/uploads/2016/10/201610-Ringo-freckles-Cover.png",part3:"5、废物利用--茄子皮将干净的茄子皮贴在脸上，以黑吸黑，一段时间过后脸上的黑斑也会不见啦。"},{title:"鼻子上长痘痘是什么原因",img1:"http://www.qudou86.com/d/file/qudoubuwei/bizi/8a028377aeb7bcbf0f4a18ee5b97c5bd.jpg",part1:"鼻子历来是大家肌肤护理的一大难题，长痘痘、长黑头、毛孔粗大等肌肤问题的主要发源地就在鼻子。而鼻子上无论有什么肌肤问题，都会很影响一个人的形象。那么，鼻子上长痘痘是什么原因呢？要想鼻子的肌肤你能够变得白皙，就来看吧。下面，小编就向大家分析鼻子上长痘痘的几点原因以及解决方法。",img2:"https://s9.rr.itc.cn/r/wapChange/20173_16_17/a8jtfb9489800490458.jpg",part2:"鼻子上长痘痘的原因一：内分泌失调压力、饮食习惯以及生理期的来临都会改变原本平衡的雌雄性激素分泌，雌激素和代谢会出现紊乱的现象，导致皮脂腺分泌过旺，脸部毛孔阻塞，引发痘痘。鼻子上长痘痘的原因二：压力熬夜压力和熬夜使得心火上浮、肝火过旺，毛细孔分泌过多油脂，堵塞毛孔，形成痘痘。",img3:"https://s9.rr.itc.cn/r/wapChange/20175_11_14/a09nx44828797346544.jpg",part3:"鼻子上长痘痘的原因三：螨虫感染螨虫的排泄的分泌物容易引起毛孔堵塞，随之毛孔就开始慢慢变粗，皮肤皮肤也变得越来油，如果没有及时治疗，就会引起皮肤发炎，就形成了我们所说的青春痘。选用温和且去油好的洁面乳"},{title:"针灸止痛之谜",img1:"https://pic4.zhimg.com/v2-1ca553a28aba01ce9b026467aaefa5e0_1200x500.jpg",part1:"长期以来，针灸疗法一直困扰着西方的医学专家，这并不奇怪。针灸理论认为，有一种叫做“气”的无形生命能量在人体14条经脉中往复运行，而病痛是由于气的阻滞和失衡所引发的。针灸师相信，在人体一些特定的点上插入细针，就能帮助经脉畅通，从而治疗一切疾病。听上去有点像天方夜谭，但针灸确实能对人体产生作用。",img2:"https://pic2.zhimg.com/50/v2-0898ce3392949c55e656e23e61c6a67d_hd.jpg",part2:"神经影像学研究表明，针灸似乎能安抚脑部掌管痛觉的区域，并激活那些涉及休息和康复功能的脑部区域。超声技术显示，针灸能增强治疗部位的血液循环。科学家还发现，古代中医理论与现代解剖学之间存在相似之处。365个穴位对应着人体的神经束和肌肉束，几条经脉与人体主要的大动脉和神经分布相仿。",img3:"http://d.ifengimg.com/q100/img1.ugc.ifeng.com/newugc/20190404/15/wemedia/b899eb38245ef73bfb44d3f06286723b87a38c98_size27_w569_h320.jpg",part3:"20世纪80年代初的研究发现，针灸产生作用的部分原因在于刺激人体释放出内啡因，这是一种让人感到愉悦的神秘天然化合物，很像体育锻炼后的那种舒适感觉。"},{title:"吃中药的禁忌",img1:"https://pic4.zhimg.com/v2-76df18259ec51b2bd0372f571f7afcf3_1200x500.jpg",part1:"吃中药的禁忌一、辛辣类：此类食物多辛热，有通阳健胃之功效，若过多食用则易生痰动火，散气耗血，故该类饮食仅适合于寒证疾病者，而不适于阴虚阳亢之体及血证、温病、痔瘘、痈疖患者等。医学教育|网搜集整理此类食物包括葱、蒜、韭菜、生姜、酒、辣椒等。如辣椒属热性，若有发热、便秘、尿短赤、口干渴、唇燥、咽喉肿痛、鼻衄、舌质红等热象者食用，必然会加重“上火”症状，从而抵消清热凉血及滋阴药物的功效，故热证病人就诊中医不可同食辣椒。",img2:"https://www.gyfwyy.com/Upload/201904/image2881320.png",part2:"吃中药的禁忌二、鱼腥类：此类食物多为咸寒而腥之品，且含有异性蛋白，易引起过敏反应，多食易伤脾胃并诱发疾病，故脾胃有病者不宜多吃，尤其是过敏体质者更不可食之。此类食物有黄鱼、鲤鱼、带鱼、蚌肉、虾、螃蟹等，而鲤鱼、沙丁鱼、鲇鱼、黄鱼、螃蟹、黄泥螺最易引起过敏。鱼腥类食物亦属发物。",img3:"https://inews.gtimg.com/newsapp_bt/0/8286109045/1000",part3:"吃中药的禁忌三、发物类：此类食物均为动风生痰助火之品，由于疾病对食物选择程度的大小不同，其“发”亦有异。此类食物有蘑菇、香蕈、笋、芥菜、南瓜、公鸡肉、猪头肉、母猪肉等。如肝阳上亢、医学教育|网搜集整理肝风内动患者当禁吃公鸡肉、猪头肉；疔、疖、疮、痈等皮肤疾患者，当禁吃香蕈、蘑菇、笋、公鸡肉、猪头肉、母猪肉，否则会加速红肿、生脓；有肠胃病者禁吃南瓜，因南瓜含有糖分，多吃会产生较多的酸，对胃肠有刺激。鉴此，“发”者，在很大程度上可以说有促进疾病恶化之意。"},{title:"针灸美容的优势有哪些",img1:"https://inews.gtimg.com/newsapp_bt/0/9217976655/1000",part1:"健形养神神，又称神气，是人体生命活动的特征。一个人的精神容貌则是人体精、气、神的充分体现，而气血是神志活动的物质基础，神赖气血奉养而精明。根据中医“形神合一”及“形与神俱”的理论，针灸临床历来注重“形与神”而强调以“神”为主。针灸就其保健延年、美容美形方面可谓形神兼备，以神养形，以神治形，充分调动人体自身的积极因素，调理脏腑，运行气血，使肌肤得濡润，毛发获滋养。若出现面色萎黄或苍白，面容憔悴，皮肤苍老晦暗、弹性减弱，皱纹渐增，腹部脂肪堆积等，可以通过针灸调节使其精充气足，容光焕发。",img2:"https://img.sandingtv.com/20180709/186a64b61b09edd7feddfa46f9b0cea6.jpg",part2:"利祛痤疮痤疮，又称“粉刺”，是一种临床常见的毛囊皮脂腺慢性炎症，好发于颜面、胸、背等皮脂腺发达的部位，若不及时治疗或防治不当，可遗留终身难愈的瘢痕而影响容貌。现代医学认为痤疮主要与雄激素、毛囊和皮脂腺内微生物有关。根据中医辨证分析，可将痤疮分为肺胃湿热型和血瘀痰凝型",img3:"https://pic2.zhimg.com/50/v2-0898ce3392949c55e656e23e61c6a67d_hd.jpg",part3:"通经消斑黄褐斑，临床上很常见，是指对称性发生于面部的淡褐色或深褐色色素斑，好发于鼻部、额部、颧部、口周和面颊等处，多无自觉症状。笔者根据临床观察认为黄褐斑往往与一些妇科疾病相关，如月经不调、痛经、子宫内膜异位症、子宫肌瘤等。"},{title:"拔罐治疗有哪些保健功效？",img1:"https://pic.36krcnd.com/201802/09065419/gd2gsjcg3zudbxst.jpg!heading",part1:"您想知道拔罐治疗有哪些保健功效吗？相信您看了这篇有关拔罐治疗有哪些保健功效的文章，您就了解了。拔罐疗法，是中国传统医学中的一种特色疗法，广泛运用于民间，因古时多用兽角制罐，故称为“角法”。拔罐是以罐为工具，利用燃烧、抽吸、蒸气等方法造成罐内负压，使罐吸附于体表，以产生良性刺激，拔罐具有沟通表里、疏通经络、扶正祛邪、行气活血、消肿止痛、祛风散寒、拔毒泻热、调和气血、缓解疲劳等作用，是一种以调整机体功能、防治疾病目的的外治方法。",img2:"https://img.sandingtv.com/20180103/d04323ef6574fc44688f1339df5ae974.jpg",part2:"现代医学对拔罐的作用机理进行了探讨，拔罐可以吸毒排脓，促进伤口的愈合和疾病的恢复，牵拉肌肉，提高痛阈，缓解疲劳，促进血液循环，加快新陈代谢，调节免疫功能，增强自身抵抗力，兴奋神经，调整机体机能状态。拔罐也可改善皮肤的呼吸和营养",img3:"https://images.chinatimes.com/newsphoto/2015-08-05/900/20150805003429.jpg",part3:"有利于汗腺和皮脂腺的分泌，对关节、肌腱可增强弹性和活动性；可增加肌肉的血流量，增强肌肉的工作能力和耐力，防止肌萎缩；并可加深呼吸，增强胃肠蠕动，兴奋支配腹内器官的神经，增进胃肠等脏器的分泌功能；可加速静脉血管中血液回流，调整肌肉与内脏血液流量及贮备的分布情况"}];e.detailData=i[a.id]}},methods:{}};a.default=e}).call(this,e("6e42")["default"])},"5fab":function(t,a,e){},c67b:function(t,a,e){"use strict";e.r(a);var i=e("f3ac"),c=e("3624");for(var p in c)"default"!==p&&function(t){e.d(a,t,function(){return c[t]})}(p);e("3021");var g=e("2877"),n=Object(g["a"])(c["default"],i["a"],i["b"],!1,null,null,null);a["default"]=n.exports},f3ac:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c},c=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return c})}},[["117b","common/runtime","common/vendor"]]]);
});
require('pages/detail/detail.js');
__wxRoute = 'pages/loginRegister/loginRegister';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/loginRegister/loginRegister.js';

define('pages/loginRegister/loginRegister.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/loginRegister/loginRegister"],{"3cb1":function(n,e,t){"use strict";var i=t("b40a"),o=t.n(i);o.a},"562e":function(n,e,t){"use strict";t.r(e);var i=t("5793"),o=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,function(){return i[n]})}(r);e["default"]=o.a},5793:function(n,e,t){"use strict";(function(n,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t("2f62");function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.forEach(function(e){a(n,e,t[e])})}return n}function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var s=function(){return t.e("components/wuc-tab/wuc-tab").then(t.bind(null,"dfde"))},c=function(){return t.e("components/login").then(t.bind(null,"29d4"))},u=function(){return t.e("components/register").then(t.bind(null,"4736"))},f={components:{WucTab:s,Login:c,Register:u},data:function(){return{providerList:["weixin","qq","sinaweibo"],hasProvider:!0,account:"",password:"",positionTop:0,TabCur:0,tabList:[{name:"登录"},{name:"注册"}]}},computed:(0,o.mapState)(["forcedLogin"]),methods:r({},(0,o.mapMutations)(["login"]),{tabChange:function(n){this.TabCur=n},swiperChange:function(n){var e=n.target.current;this.TabCur=e},initProvider:function(){var e=this,t=["weixin","qq","sinaweibo"];n.getProvider({service:"oauth",success:function(n){if(n.provider&&n.provider.length){for(var i=0;i<n.provider.length;i++)~t.indexOf(n.provider[i])&&e.providerList.push({value:n.provider[i],image:"../../static/img/"+n.provider[i]+".png"});e.hasProvider=!0}},fail:function(n){console.error(i("获取服务供应商失败："+JSON.stringify(n)," at pages\\loginRegister\\loginRegister.vue:77"))}})},initPosition:function(){this.positionTop=n.getSystemInfoSync().windowHeight-100},bindLogin:function(){if(this.account.length<5)n.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)n.showToast({icon:"none",title:"密码最短为 6 个字符"});else{var e={account:this.account,password:this.password},t=service.getUsers().some(function(n){return console.log(i(service.getUsers().some()," at pages\\loginRegister\\loginRegister.vue:117")),e.account===n.account&&e.password===n.password});t?this.toMain(this.account):n.showToast({icon:"none",title:"用户账号或密码不正确"})}},oauth:function(e){var t=this;n.login({provider:e,success:function(i){n.getUserInfo({provider:e,success:function(n){t.toMain(n.userInfo.nickName)}})},fail:function(n){console.error(i("授权登录失败："+JSON.stringify(n)," at pages\\loginRegister\\loginRegister.vue:145"))}})},toMain:function(e){this.login(e),this.forcedLogin?n.reLaunch({url:"../main/main"}):n.navigateBack()}}),onReady:function(){this.initPosition(),this.initProvider()}};e.default=f}).call(this,t("6e42")["default"],t("0de9")["default"])},"606c":function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"a",function(){return i}),t.d(e,"b",function(){return o})},"79f4":function(n,e,t){"use strict";(function(n){t("aeaa"),t("921b");i(t("66fd"));var e=i(t("f00a"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},b40a:function(n,e,t){},f00a:function(n,e,t){"use strict";t.r(e);var i=t("606c"),o=t("562e");for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);t("3cb1");var a=t("2877"),s=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports}},[["79f4","common/runtime","common/vendor"]]]);
});
require('pages/loginRegister/loginRegister.js');
__wxRoute = 'pages/person/person';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/person/person.js';

define('pages/person/person.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/person/person"],{1498:function(e,t,n){"use strict";(function(e){n("aeaa"),n("921b");o(n("66fd"));var t=o(n("f955"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"360e":function(e,t,n){"use strict";n.r(t);var o=n("390f"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},"390f":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2f62");function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"752f"))},r=function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"d3bd"))},c={components:{uniList:r,uniListItem:u},data:function(){return{userinfo:"",img:"../../static/imgs/th.jpg",username:"新用户",area:"中国"}},computed:i({},(0,a.mapState)(["hasLogin","token"])),onLoad:function(){e.getSavedFileList({complete:function(e){_this.img=e.fileList[0].filePath}})},onShow:function(){var t=this;e.request({url:"http://kdjk.c5ppc.cn/user",data:{token:t.token},success:function(e){var n="string"==typeof e.data?JSON.parse(e.data):e.data;t.username=n.data[0].name,t.area=n.data[0].area,t.img=n.data[0].head},fail:function(e){console.log(o(e," at pages\\person\\person.vue:72"))}})},methods:i({},(0,a.mapMutations)(["logout"]),{tap:function(){var t=this;e.chooseImage({success:function(n){e.uploadFile({url:"http://kdjk.c5ppc.cn/user_head",filePath:n.tempFilePaths[0],name:"head",formData:{token:t.token},success:function(a){var i="string"==typeof a.data?JSON.parse(a.data):a.data;e.saveFile({tempFilePath:n.tempFilePaths[0],success:function(n){console.log(o(n," at pages\\person\\person.vue:94")),e.getSavedFileList({success:function(n){var a=n.fileList[1].filePath;t.img=a;var i=n.fileList[0].filePath;console.log(o(t.img," at pages\\person\\person.vue:100")),e.removeSavedFile({filePath:i,success:function(){console.log(o("删除成功"," at pages\\person\\person.vue:104"))}})}})},fail:function(e){console.log(o(e," at pages\\person\\person.vue:111"))}}),10010==i.code?e.showLoading({title:"请稍后...",success:function(){e.hideLoading(),e.showToast({title:"修改成功！"})}}):e.showToast({title:"估计本地出了什么问题",icon:"none"})},fail:function(t){e.showToast({title:"口袋健康可能出了点问题...",icon:"none"})}})}})},bindLogin:function(){e.navigateTo({url:"../loginRegister/loginRegister"})},bindLogout:function(){this.logout()},navigateTo:function(t){var n="../"+t+"/"+t;console.log(o(n," at pages\\person\\person.vue:152")),e.navigateTo({url:n})}})};t.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},"8b23":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},f955:function(e,t,n){"use strict";n.r(t);var o=n("8b23"),a=n("360e");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);var s=n("2877"),u=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports}},[["1498","common/runtime","common/vendor"]]]);
});
require('pages/person/person.js');
__wxRoute = 'pages/messagelist/messagelist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/messagelist/messagelist.js';

define('pages/messagelist/messagelist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/messagelist/messagelist"],{"115d":function(t,e,a){"use strict";a.r(e);var n=a("39a8"),i=a("158d");for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);var r=a("2877"),c=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"158d":function(t,e,a){"use strict";a.r(e);var n=a("fef7"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=i.a},"39a8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},b309:function(t,e,a){"use strict";(function(t){a("aeaa"),a("921b");n(a("66fd"));var e=n(a("115d"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},fef7:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{messagelist:[{id:1,name:"陈婉姬",imgurl:"../../static/imgs/nvdoctor.jpg",date:"2019.12.21"},{id:2,name:"刘文沛",imgurl:"../../static/imgs/nv.jpg",date:"2019.12.21"},{id:3,name:"张家严",imgurl:"../../static/imgs/16pic_2634578_b.jpg",date:"2019.12.21"},{id:4,name:"赵文",imgurl:"../../static/imgs/1305-11040404594340.jpg",date:"2019.12.21"}]}},methods:{navigateTo:function(e,a){var n="../../pages/HM-chat/HM-chat?name="+e+"&imgurl="+a;t.navigateTo({url:n})}}};e.default=a}).call(this,a("6e42")["default"])}},[["b309","common/runtime","common/vendor"]]]);
});
require('pages/messagelist/messagelist.js');
__wxRoute = 'pages/messagelist/messagelist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/messagelist/messagelist.js';

define('pages/messagelist/messagelist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/messagelist/messagelist"],{"115d":function(t,e,a){"use strict";a.r(e);var n=a("39a8"),i=a("158d");for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);var r=a("2877"),c=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"158d":function(t,e,a){"use strict";a.r(e);var n=a("fef7"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=i.a},"39a8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},b309:function(t,e,a){"use strict";(function(t){a("aeaa"),a("921b");n(a("66fd"));var e=n(a("115d"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},fef7:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{messagelist:[{id:1,name:"陈婉姬",imgurl:"../../static/imgs/nvdoctor.jpg",date:"2019.12.21"},{id:2,name:"刘文沛",imgurl:"../../static/imgs/nv.jpg",date:"2019.12.21"},{id:3,name:"张家严",imgurl:"../../static/imgs/16pic_2634578_b.jpg",date:"2019.12.21"},{id:4,name:"赵文",imgurl:"../../static/imgs/1305-11040404594340.jpg",date:"2019.12.21"}]}},methods:{navigateTo:function(e,a){var n="../../pages/HM-chat/HM-chat?name="+e+"&imgurl="+a;t.navigateTo({url:n})}}};e.default=a}).call(this,a("6e42")["default"])}},[["b309","common/runtime","common/vendor"]]]);
});
require('pages/messagelist/messagelist.js');
__wxRoute = 'pages/HM-chat/HM-chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/HM-chat/HM-chat.js';

define('pages/HM-chat/HM-chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/HM-chat/HM-chat"],{"16a5":function(t,i,e){"use strict";(function(t){e("aeaa"),e("921b");g(e("66fd"));var i=g(e("76c4"));function g(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("6e42")["createPage"])},"16db":function(t,i,e){},"3c78":function(t,i,e){"use strict";var g=function(){var t=this,i=t.$createElement;t._self._c},s=[];e.d(i,"a",function(){return g}),e.d(i,"b",function(){return s})},"5dd2":function(t,i,e){"use strict";var g=e("16db"),s=e.n(g);s.a},"76c4":function(t,i,e){"use strict";e.r(i);var g=e("3c78"),s=e("c998");for(var a in s)"default"!==a&&function(t){e.d(i,t,function(){return s[t]})}(a);e("5dd2");var n=e("2877"),f=Object(n["a"])(s["default"],g["a"],g["b"],!1,null,null,null);i["default"]=f.exports},c998:function(t,i,e){"use strict";e.r(i);var g=e("cf37"),s=e.n(g);for(var a in g)"default"!==a&&function(t){e.d(i,t,function(){return g[t]})}(a);i["default"]=s.a},cf37:function(t,i,e){"use strict";(function(t,e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var g={data:function(){return{textMsg:"",responseMsg:"",isHistoryLoading:!1,scrollAnimation:!1,scrollTop:0,scrollToView:"",msgList:[],msgImgList:[],myuid:0,msgImgURL:"../../static/imgs/nvdoctor.jpg",msgName:"",RECORDER:t.getRecorderManager(),isVoice:!1,voiceTis:"按住 说话",recordTis:"手指上滑 取消发送",recording:!1,willStop:!1,initPoint:{identifier:0,Y:0},recordTimer:null,recordLength:0,AUDIO:t.createInnerAudioContext(),playMsgid:null,VoiceTimer:null,popupLayerClass:"",hideMore:!0,hideEmoji:!0,emojiList:[[{url:"../../static/imgs/emoji/100.gif",alt:"[微笑]"},{url:"101.gif",alt:"[伤心]"},{url:"102.gif",alt:"[美女]"},{url:"103.gif",alt:"[发呆]"},{url:"104.gif",alt:"[墨镜]"},{url:"105.gif",alt:"[哭]"},{url:"106.gif",alt:"[羞]"},{url:"107.gif",alt:"[哑]"},{url:"108.gif",alt:"[睡]"},{url:"109.gif",alt:"[哭]"},{url:"110.gif",alt:"[囧]"},{url:"111.gif",alt:"[怒]"},{url:"112.gif",alt:"[调皮]"},{url:"113.gif",alt:"[笑]"},{url:"114.gif",alt:"[惊讶]"},{url:"115.gif",alt:"[难过]"},{url:"116.gif",alt:"[酷]"},{url:"117.gif",alt:"[汗]"},{url:"118.gif",alt:"[抓狂]"},{url:"119.gif",alt:"[吐]"},{url:"120.gif",alt:"[笑]"},{url:"121.gif",alt:"[快乐]"},{url:"122.gif",alt:"[奇]"},{url:"123.gif",alt:"[傲]"}],[{url:"124.gif",alt:"[饿]"},{url:"125.gif",alt:"[累]"},{url:"126.gif",alt:"[吓]"},{url:"127.gif",alt:"[汗]"},{url:"128.gif",alt:"[高兴]"},{url:"129.gif",alt:"[闲]"},{url:"130.gif",alt:"[努力]"},{url:"131.gif",alt:"[骂]"},{url:"132.gif",alt:"[疑问]"},{url:"133.gif",alt:"[秘密]"},{url:"134.gif",alt:"[乱]"},{url:"135.gif",alt:"[疯]"},{url:"136.gif",alt:"[哀]"},{url:"137.gif",alt:"[鬼]"},{url:"138.gif",alt:"[打击]"},{url:"139.gif",alt:"[bye]"},{url:"140.gif",alt:"[汗]"},{url:"141.gif",alt:"[抠]"},{url:"142.gif",alt:"[鼓掌]"},{url:"143.gif",alt:"[糟糕]"},{url:"144.gif",alt:"[恶搞]"},{url:"145.gif",alt:"[什么]"},{url:"146.gif",alt:"[什么]"},{url:"147.gif",alt:"[累]"}],[{url:"148.gif",alt:"[看]"},{url:"149.gif",alt:"[难过]"},{url:"150.gif",alt:"[难过]"},{url:"151.gif",alt:"[坏]"},{url:"152.gif",alt:"[亲]"},{url:"153.gif",alt:"[吓]"},{url:"154.gif",alt:"[可怜]"},{url:"155.gif",alt:"[刀]"},{url:"156.gif",alt:"[水果]"},{url:"157.gif",alt:"[酒]"},{url:"158.gif",alt:"[篮球]"},{url:"159.gif",alt:"[乒乓]"},{url:"160.gif",alt:"[咖啡]"},{url:"161.gif",alt:"[美食]"},{url:"162.gif",alt:"[动物]"},{url:"163.gif",alt:"[鲜花]"},{url:"164.gif",alt:"[枯]"},{url:"165.gif",alt:"[唇]"},{url:"166.gif",alt:"[爱]"},{url:"167.gif",alt:"[分手]"},{url:"168.gif",alt:"[生日]"},{url:"169.gif",alt:"[电]"},{url:"170.gif",alt:"[炸弹]"},{url:"171.gif",alt:"[刀子]"}],[{url:"172.gif",alt:"[足球]"},{url:"173.gif",alt:"[瓢虫]"},{url:"174.gif",alt:"[翔]"},{url:"175.gif",alt:"[月亮]"},{url:"176.gif",alt:"[太阳]"},{url:"177.gif",alt:"[礼物]"},{url:"178.gif",alt:"[抱抱]"},{url:"179.gif",alt:"[拇指]"},{url:"180.gif",alt:"[贬低]"},{url:"181.gif",alt:"[握手]"},{url:"182.gif",alt:"[剪刀手]"},{url:"183.gif",alt:"[抱拳]"},{url:"184.gif",alt:"[勾引]"},{url:"185.gif",alt:"[拳头]"},{url:"186.gif",alt:"[小拇指]"},{url:"187.gif",alt:"[拇指八]"},{url:"188.gif",alt:"[食指]"},{url:"189.gif",alt:"[ok]"},{url:"190.gif",alt:"[情侣]"},{url:"191.gif",alt:"[爱心]"},{url:"192.gif",alt:"[蹦哒]"},{url:"193.gif",alt:"[颤抖]"},{url:"194.gif",alt:"[怄气]"},{url:"195.gif",alt:"[跳舞]"}],[{url:"196.gif",alt:"[发呆]"},{url:"197.gif",alt:"[背着]"},{url:"198.gif",alt:"[伸手]"},{url:"199.gif",alt:"[耍帅]"},{url:"200.png",alt:"[微笑]"},{url:"201.png",alt:"[生病]"},{url:"202.png",alt:"[哭泣]"},{url:"203.png",alt:"[吐舌]"},{url:"204.png",alt:"[迷糊]"},{url:"205.png",alt:"[瞪眼]"},{url:"206.png",alt:"[恐怖]"},{url:"207.png",alt:"[忧愁]"},{url:"208.png",alt:"[眨眉]"},{url:"209.png",alt:"[闭眼]"},{url:"210.png",alt:"[鄙视]"},{url:"211.png",alt:"[阴暗]"},{url:"212.png",alt:"[小鬼]"},{url:"213.png",alt:"[礼物]"},{url:"214.png",alt:"[拜佛]"},{url:"215.png",alt:"[力量]"},{url:"216.png",alt:"[金钱]"},{url:"217.png",alt:"[蛋糕]"},{url:"218.png",alt:"[彩带]"},{url:"219.png",alt:"[礼物]"}]],onlineEmoji:{"100.gif":"AbNQgA.gif","101.gif":"AbN3ut.gif","102.gif":"AbNM3d.gif","103.gif":"AbN8DP.gif","104.gif":"AbNljI.gif","105.gif":"AbNtUS.gif","106.gif":"AbNGHf.gif","107.gif":"AbNYE8.gif","108.gif":"AbNaCQ.gif","109.gif":"AbNN4g.gif","110.gif":"AbN0vn.gif","111.gif":"AbNd3j.gif","112.gif":"AbNsbV.gif","113.gif":"AbNwgs.gif","114.gif":"AbNrD0.gif","115.gif":"AbNDuq.gif","116.gif":"AbNg5F.gif","117.gif":"AbN6ET.gif","118.gif":"AbNcUU.gif","119.gif":"AbNRC4.gif","120.gif":"AbNhvR.gif","121.gif":"AbNf29.gif","122.gif":"AbNW8J.gif","123.gif":"AbNob6.gif","124.gif":"AbN5K1.gif","125.gif":"AbNHUO.gif","126.gif":"AbNIDx.gif","127.gif":"AbN7VK.gif","128.gif":"AbNb5D.gif","129.gif":"AbNX2d.gif","130.gif":"AbNLPe.gif","131.gif":"AbNjxA.gif","132.gif":"AbNO8H.gif","133.gif":"AbNxKI.gif","134.gif":"AbNzrt.gif","135.gif":"AbU9Vf.gif","136.gif":"AbUSqP.gif","137.gif":"AbUCa8.gif","138.gif":"AbUkGQ.gif","139.gif":"AbUFPg.gif","140.gif":"AbUPIS.gif","141.gif":"AbUZMn.gif","142.gif":"AbUExs.gif","143.gif":"AbUA2j.gif","144.gif":"AbUMIU.gif","145.gif":"AbUerq.gif","146.gif":"AbUKaT.gif","147.gif":"AbUmq0.gif","148.gif":"AbUuZV.gif","149.gif":"AbUliF.gif","150.gif":"AbU1G4.gif","151.gif":"AbU8z9.gif","152.gif":"AbU3RJ.gif","153.gif":"AbUYs1.gif","154.gif":"AbUJMR.gif","155.gif":"AbUadK.gif","156.gif":"AbUtqx.gif","157.gif":"AbUUZ6.gif","158.gif":"AbUBJe.gif","159.gif":"AbUdIO.gif","160.gif":"AbU0iD.gif","161.gif":"AbUrzd.gif","162.gif":"AbUDRH.gif","163.gif":"AbUyQA.gif","164.gif":"AbUWo8.gif","165.gif":"AbU6sI.gif","166.gif":"AbU2eP.gif","167.gif":"AbUcLt.gif","168.gif":"AbU4Jg.gif","169.gif":"AbURdf.gif","170.gif":"AbUhFS.gif","171.gif":"AbU5WQ.gif","172.gif":"AbULwV.gif","173.gif":"AbUIzj.gif","174.gif":"AbUTQs.gif","175.gif":"AbU7yn.gif","176.gif":"AbUqe0.gif","177.gif":"AbUHLq.gif","178.gif":"AbUOoT.gif","179.gif":"AbUvYF.gif","180.gif":"AbUjFU.gif","181.gif":"AbaSSJ.gif","182.gif":"AbUxW4.gif","183.gif":"AbaCO1.gif","184.gif":"Abapl9.gif","185.gif":"Aba9yR.gif","186.gif":"AbaFw6.gif","187.gif":"Abaiex.gif","188.gif":"AbakTK.gif","189.gif":"AbaZfe.png","190.gif":"AbaEFO.gif","191.gif":"AbaVYD.gif","192.gif":"AbamSH.gif","193.gif":"AbaKOI.gif","194.gif":"Abanld.gif","195.gif":"Abau6A.gif","196.gif":"AbaQmt.gif","197.gif":"Abal0P.gif","198.gif":"AbatpQ.gif","199.gif":"Aba1Tf.gif","200.png":"Aba8k8.png","201.png":"AbaGtS.png","202.png":"AbaJfg.png","203.png":"AbaNlj.png","204.png":"Abawmq.png","205.png":"AbaU6s.png","206.png":"AbaaXn.png","207.png":"Aba000.png","208.png":"AbarkT.png","209.png":"AbastU.png","210.png":"AbaB7V.png","211.png":"Abafn1.png","212.png":"Abacp4.png","213.png":"AbayhF.png","214.png":"Abag1J.png","215.png":"Aba2c9.png","216.png":"AbaRXR.png","217.png":"Aba476.png","218.png":"Abah0x.png","219.png":"Abdg58.png"},windowsState:"",redenvelopeData:{rid:null,from:null,face:null,blessing:null,money:null}}},onLoad:function(i){var g=this;t.setNavigationBarTitle({title:i.name}),this.msgImgURL=i.imgurl,this.msgName=i.name,console.log(e(i.imgurl," at pages\\HM-chat\\HM-chat.vue:256")),console.log(e(this.msgImgURL," at pages\\HM-chat\\HM-chat.vue:257")),this.getMsgList(),this.AUDIO.onEnded(function(t){g.playMsgid=null}),this.RECORDER.onStart(function(t){g.recordBegin(t)}),this.RECORDER.onStop(function(t){g.recordEnd(t)})},onShow:function(){var i=this;this.scrollTop=9999999,t.getStorage({key:"redEnvelopeData",success:function(g){console.log(e(g.data," at pages\\HM-chat\\HM-chat.vue:282"));var s=new Date,a=i.msgList[i.msgList.length-1].msg.id;a++;var n={type:"user",msg:{id:a,type:"redEnvelope",time:s.getHours()+":"+s.getMinutes(),userinfo:{uid:0,username:"大黑哥",face:"/static/img/face.jpg"},content:{blessing:g.data.blessing,rid:Math.floor(1e3*Math.random()+1),isReceived:!1}}};i.screenMsg(n),t.removeStorage({key:"redEnvelopeData"})}})},methods:{screenMsg:function(i){if("system"==i.type)switch(i.msg.type){case"text":this.addSystemTextMsg(i);break;case"redEnvelope":this.addSystemRedEnvelopeMsg(i);break}else if("user"==i.type){switch(i.msg.type){case"text":this.addTextMsg(i);break;case"voice":this.addVoiceMsg(i);break;case"img":this.addImgMsg(i);break;case"redEnvelope":this.addRedEnvelopeMsg(i);break}console.log(e("用户消息"," at pages\\HM-chat\\HM-chat.vue:322")),i.msg.userinfo.uid!=this.myuid&&(console.log(e("振动"," at pages\\HM-chat\\HM-chat.vue:325")),t.vibrateLong())}this.$nextTick(function(){this.scrollToView="msg"+i.msg.id})},loadHistory:function(t){var i=this;if(!this.isHistoryLoading){this.isHistoryLoading=!0,this.scrollAnimation=!1;var e=this.msgList[0].msg.id;setTimeout(function(){for(var t=[{type:"user",msg:{id:2,type:"text",time:"15:20",userinfo:{uid:1,username:"口袋助手",face:"../../static/img/im/face/face_2.jpg"},content:{text:"您好，这里是口袋助手，很高兴有机会能为您的健康保驾护航！您有任何问题，皆可以在这里反馈，我们将会给您提供帮助。"}}},{type:"user",msg:{id:1,type:"text",time:"15:22",userinfo:{uid:0,username:"大黑哥",face:"/static/img/face.jpg"},content:{text:"你好，我最近总是头痛，伴随轻度耳鸣。"}}},{type:"user",msg:{id:2,type:"text",time:"15:23",userinfo:{uid:1,username:"口袋助手",face:"/static/img/im/face/face_2.jpg"},content:{text:"请问您最近的睡眠状况如何？"}}},{type:"user",msg:{id:2,type:"text",time:"15:20",userinfo:{uid:1,username:"口袋助手",face:"../../static/img/im/face/face_2.jpg"},content:{text:"您好，这里是口袋助手，很高兴有机会能为您的健康保驾护航！您有任何问题，皆可以在这里反馈，我们将会给您提供帮助。"}}},{type:"user",msg:{id:1,type:"text",time:"15:22",userinfo:{uid:0,username:"大黑哥",face:"/static/img/face.jpg"},content:{text:"你好，我最近总是头痛，伴随轻度耳鸣。"}}},{type:"user",msg:{id:2,type:"text",time:"15:23",userinfo:{uid:1,username:"口袋助手",face:"/static/img/im/face/face_2.jpg"},content:{text:"请问您最近的睡眠状况如何？"}}},{type:"user",msg:{id:2,type:"text",time:"15:20",userinfo:{uid:1,username:"口袋助手",face:"../../static/img/im/face/face_2.jpg"},content:{text:"您好，这里是口袋助手，很高兴有机会能为您的健康保驾护航！您有任何问题，皆可以在这里反馈，我们将会给您提供帮助。"}}},{type:"user",msg:{id:1,type:"text",time:"15:22",userinfo:{uid:0,username:"大黑哥",face:"/static/img/face.jpg"},content:{text:"你好，我最近总是头痛，伴随轻度耳鸣。"}}},{type:"user",msg:{id:2,type:"text",time:"15:23",userinfo:{uid:1,username:"口袋助手",face:"/static/img/im/face/face_2.jpg"},content:{text:"请问您最近的睡眠状况如何？"}}},{type:"user",msg:{id:2,type:"text",time:"15:20",userinfo:{uid:1,username:"口袋助手",face:"../../static/img/im/face/face_2.jpg"},content:{text:"您好，这里是口袋助手，很高兴有机会能为您的健康保驾护航！您有任何问题，皆可以在这里反馈，我们将会给您提供帮助。"}}},{type:"user",msg:{id:1,type:"text",time:"15:22",userinfo:{uid:0,username:"大黑哥",face:"/static/img/face.jpg"},content:{text:"你好，我最近总是头痛，伴随轻度耳鸣。"}}},{type:"user",msg:{id:2,type:"text",time:"15:23",userinfo:{uid:1,username:"口袋助手",face:"/static/img/im/face/face_2.jpg"},content:{text:"请问您最近的睡眠状况如何？"}}}],g=0;g<t.length;g++)"user"==t[g].type&&"img"==t[g].msg.type&&(t[g].msg.content=i.setPicSize(t[g].msg.content),i.msgImgList.unshift(t[g].msg.content.url)),t[g].msg.id=Math.floor(1e3*Math.random()+1),i.msgList.unshift(t[g]);i.$nextTick(function(){this.scrollToView="msg"+e,this.$nextTick(function(){this.scrollAnimation=!0})}),i.isHistoryLoading=!1},1e3)}},getMsgList:function(){for(var t=[{type:"system",msg:{id:0,type:"text",content:{text:"2019-12-12 15:20"}}}],i=0;i<t.length;i++)"user"==t[i].type&&"img"==t[i].msg.type&&(t[i].msg.content=this.setPicSize(t[i].msg.content),this.msgImgList.push(t[i].msg.content.url));this.msgList=t,this.$nextTick(function(){this.scrollTop=9999,this.$nextTick(function(){this.scrollAnimation=!0})})},setPicSize:function(i){var e=t.upx2px(350),g=t.upx2px(350);if(i.w>e||i.h>g){var s=i.w/i.h;i.w=s>1?e:g*s,i.h=s>1?e/s:g}return i},showMore:function(){this.isVoice=!1,this.hideEmoji=!0,this.hideMore?(this.hideMore=!1,this.openDrawer()):this.hideDrawer()},openDrawer:function(){this.popupLayerClass="showLayer"},hideDrawer:function(){var t=this;this.popupLayerClass="",setTimeout(function(){t.hideMore=!0,t.hideEmoji=!0},150)},chooseImage:function(){this.getImage("album")},camera:function(){this.getImage("camera")},handRedEnvelopes:function(){t.navigateTo({url:"HM-hand/HM-hand"}),this.hideDrawer()},getImage:function(i){var g=this;this.hideDrawer(),t.chooseImage({sourceType:[i],sizeType:["original","compressed"],success:function(i){for(var s=function(s){t.getImageInfo({src:i.tempFilePaths[s],success:function(t){console.log(e(t.width," at pages\\HM-chat\\HM-chat.vue:481")),console.log(e(t.height," at pages\\HM-chat\\HM-chat.vue:482"));var a={url:i.tempFilePaths[s],w:t.width,h:t.height};g.sendMsg(a,"img")}})},a=0;a<i.tempFilePaths.length;a++)s(a)}})},chooseEmoji:function(){this.hideMore=!0,this.hideEmoji?(this.hideEmoji=!1,this.openDrawer()):this.hideDrawer()},addEmoji:function(t){this.textMsg+=t.alt},textareaFocus:function(){"showLayer"==this.popupLayerClass&&0==this.hideMore&&this.hideDrawer()},sendText:function(){if(this.hideDrawer(),this.textMsg){var t=this.replaceEmoji(this.textMsg);console.log(e(t," at pages\\HM-chat\\HM-chat.vue:519"));var i={text:t};this.sendMsg(i,"text"),this.textMsg=""}},replaceEmoji:function(t){var i=this,g=t.replace(/\[([^(\]|\[)]*)\]/g,function(t,g){console.log(e("item: "+t," at pages\\HM-chat\\HM-chat.vue:527"));for(var s=0;s<i.emojiList.length;s++)for(var a=i.emojiList[s],n=0;n<a.length;n++){var f=a[n];if(f.alt==t){var r="https://s2.ax1x.com/2019/04/12/",l='<img src="'+r+i.onlineEmoji[f.url]+'">';return console.log(e("imgstr: "+l," at pages\\HM-chat\\HM-chat.vue:537")),l}}});return'<div style="display: flex;align-items: center;word-wrap:break-word;">'+g+"</div>"},sendMsg:function(i,g){var s=new Date,a=this,n=this.msgList[this.msgList.length-1].msg.id;n++;var f={type:"user",msg:{id:n,time:s.getHours()+":"+s.getMinutes(),type:g,userinfo:{uid:0,username:"大黑哥",face:"/static/img/face.jpg"},content:i}};this.screenMsg(f),n=this.msgList[this.msgList.length-1].msg.id,n++;var r=JSON.stringify(i),l=JSON.parse(r);console.log(e(a.textMsg," at pages\\HM-chat\\HM-chat.vue:564"));var o={type:"user",msg:{id:2,time:s.getHours()+":"+s.getMinutes(),type:g,userinfo:{uid:1,username:a.msgName,face:"/static/img/im/face/face_2.jpg"},content:l}};t.request({url:"http://kdjk.c5ppc.cn/doctor_talk",data:{question:a.textMsg,type:"word"},method:"POST",success:function(t){var i="";10010==t.data.code?i=t.data.data:1e4==t.data.code&&(i=t.data.msg),o.msg.content.text='<div style="display: flex;align-items: center;word-wrap:break-word;">'+i+"</div>",setTimeout(function(){a.screenMsg(o)},2e3)},fail:function(t){console.log(e(t," at pages\\HM-chat\\HM-chat.vue:588"))}})},sendVoiceMsg:function(i,g){var s=new Date,a=this,n=this.msgList[this.msgList.length-1].msg.id;n++;var f={type:"user",msg:{id:n,time:s.getHours()+":"+s.getMinutes(),type:g,userinfo:{uid:0,username:"大黑哥",face:"/static/img/face.jpg"},content:i}};this.screenMsg(f),n=this.msgList[this.msgList.length-1].msg.id,n++,t.uploadFile({url:"http://kdjk.c5ppc.cn/doctor_talk",filePath:i.url,name:"speech",formData:{type:"speech"},success:function(t){var i="",g=JSON.parse(t.data);1e4==g.code?i=g.msg:10010==g.code&&(i=g.data);var f={type:"user",msg:{id:n,time:s.getHours()+":"+s.getMinutes(),type:"text",userinfo:{uid:1,username:a.msgName,face:"/static/img/im/face/face_2.jpg"},content:{text:'<div style="display: flex;align-items: center;word-wrap:break-word;">'+i+"</div>"}}};setTimeout(function(){a.screenMsg(f)},2e3),console.log(e(g," at pages\\HM-chat\\HM-chat.vue:624"))},fail:function(){console.log(e("上传失败"," at pages\\HM-chat\\HM-chat.vue:628"))}})},addTextMsg:function(t){this.msgList.push(t)},addVoiceMsg:function(t){this.msgList.push(t)},addImgMsg:function(t){t.msg.content=this.setPicSize(t.msg.content),this.msgImgList.push(t.msg.content.url),this.msgList.push(t)},addRedEnvelopeMsg:function(t){this.msgList.push(t)},addSystemTextMsg:function(t){this.msgList.push(t)},addSystemRedEnvelopeMsg:function(t){this.msgList.push(t)},openRedEnvelope:function(i,g){var s=this,a=i.content.rid;t.showLoading({title:"加载中..."}),console.log(e("index: "+g," at pages\\HM-chat\\HM-chat.vue:665")),setTimeout(function(){0==a?s.redenvelopeData={rid:0,from:"大黑哥",face:"/static/img/im/face/face.jpg",blessing:"恭喜发财，大吉大利",money:"已领完"}:(s.redenvelopeData={rid:1,from:"售后客服008",face:"/static/img/im/face/face_2.jpg",blessing:"恭喜发财",money:"0.01"},i.content.isReceived||(s.sendSystemMsg({text:"你领取了"+(i.userinfo.uid==s.myuid?"自己":i.userinfo.username)+"的红包"},"redEnvelope"),console.log(e("this.msgList[index]: "+JSON.stringify(s.msgList[g])," at pages\\HM-chat\\HM-chat.vue:688")),s.msgList[g].msg.content.isReceived=!0)),t.hideLoading(),s.windowsState="show"},200)},closeRedEnvelope:function(){var t=this;this.windowsState="hide",setTimeout(function(){t.windowsState=""},200)},sendSystemMsg:function(t,i){var e=this.msgList[this.msgList.length-1].msg.id;e++;var g={type:"system",msg:{id:e,type:i,content:t}};this.screenMsg(g)},toDetails:function(i){t.navigateTo({url:"HM-details/HM-details?rid="+i})},showPic:function(i){t.previewImage({indicator:"none",current:i.content.url,urls:this.msgImgList})},playVoice:function(t){this.playMsgid=t.id,this.AUDIO.src=t.content.url,this.$nextTick(function(){this.AUDIO.play()})},startRecognize:function(t){if(!(t.touches.length>1)){var i=this;i.initPoint.Y=t.touches[0].clientY,i.initPoint.identifier=t.touches[0].identifier,i.RECORDER.start({format:"mp3"});var g=null,s={engine:"iFly",userInterface:!1,continue:!0,timeout:1e4,nbest:3};g="",console.log(e("开始语音识别："," at pages\\HM-chat\\HM-chat.vue:750")),plus.speech.startRecognize(s,function(t){g+=t,console.log(e(g," at pages\\HM-chat\\HM-chat.vue:754"))},function(t){console.log(e("语音识别失败："+t.message," at pages\\HM-chat\\HM-chat.vue:756"))})}},voiceBegin:function(t){t.touches.length>1||(this.initPoint.Y=t.touches[0].clientY,this.initPoint.identifier=t.touches[0].identifier,this.RECORDER.start({format:"mp3"}))},recordBegin:function(t){var i=this;this.recording=!0,this.voiceTis="松开 结束",this.recordLength=0,this.recordTimer=setInterval(function(){i.recordLength++},1e3)},voiceCancel:function(){this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.willStop=!0,this.RECORDER.stop()},voiceIng:function(i){if(this.recording){var e=i.touches[0];this.initPoint.Y-e.clientY>=t.upx2px(0)?(this.willStop=!0,this.recordTis="松开手指 取消发送"):(this.willStop=!1,this.recordTis="手指上滑 取消发送")}},voiceEnd:function(t){this.recording&&(this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.RECORDER.stop())},recordEnd:function(t){if(clearInterval(this.recordTimer),this.willStop)console.log(e("取消发送录音"," at pages\\HM-chat\\HM-chat.vue:832"));else{console.log(e("e: "+JSON.stringify(t)," at pages\\HM-chat\\HM-chat.vue:816"));var i={length:0,url:t.tempFilePath},g=parseInt(this.recordLength/60),s=this.recordLength%60;g=g<10?"0"+g:g,s=s<10?"0"+s:s,i.length=g+":"+s,this.sendVoiceMsg(i,"voice"),console.log(e(i," at pages\\HM-chat\\HM-chat.vue:828"))}this.willStop=!1},switchVoice:function(){this.hideDrawer(),this.isVoice=!this.isVoice},discard:function(){}}};i.default=g}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["16a5","common/runtime","common/vendor"]]]);
});
require('pages/HM-chat/HM-chat.js');
__wxRoute = 'pages/HM-chat/HM-details/HM-details';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/HM-chat/HM-details/HM-details.js';

define('pages/HM-chat/HM-details/HM-details.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/HM-chat/HM-details/HM-details"],{"014b":function(e,a,c){"use strict";(function(e){c("aeaa"),c("921b");t(c("66fd"));var a=t(c("1d7d"));function t(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,c("6e42")["createPage"])},"0c70":function(e,a,c){"use strict";var t=c("3371"),i=c.n(t);i.a},"1d7d":function(e,a,c){"use strict";c.r(a);var t=c("da3a"),i=c("cf3a");for(var n in i)"default"!==n&&function(e){c.d(a,e,function(){return i[e]})}(n);c("0c70");var u=c("2877"),f=Object(u["a"])(i["default"],t["a"],t["b"],!1,null,null,null);a["default"]=f.exports},3371:function(e,a,c){},ac43:function(e,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={data:function(){return{blessing:"恭喜发财",money:.01,username:"大黑哥",receivedNumber:8,SumNumber:10,receivedMoney:5.43,SumMoney:10,receivedList:[{username:"大黑哥",face:"/static/img/im/face/face_6.jpg",time:"2019-04-12 12:54:12",money:.01,islucky:!1},{username:"路人甲",face:"/static/img/im/face/face_5.jpg",time:"2019-04-12 12:54:13",money:1.82,islucky:!0},{username:"高级黑",face:"/static/img/im/face/face_4.jpg",time:"2019-04-12 12:55:10",money:.23,islucky:!1},{username:"低级黑",face:"/static/img/im/face/face_3.jpg",time:"2019-04-12 12:56:10",money:.56,islucky:!1},{username:"大明哥",face:"/static/img/im/face/face_2.jpg",time:"2019-04-12 12:56:15",money:.96,islucky:!1},{username:"小姐姐",face:"/static/img/im/face/face_1.jpg",time:"2019-04-12 12:56:17",money:1.02,islucky:!1},{username:"大哥哥",face:"/static/img/im/face/face_7.jpg",time:"2019-04-12 12:56:19",money:.05,islucky:!1},{username:"抢红包",face:"/static/img/im/face/face_8.jpg",time:"2019-04-12 12:56:22",money:.78,islucky:!1}],radius:"100% 100% 0 0"}},onPageScroll:function(e){if(!(e.scrollTop>100)){var a=100-e.scrollTop;this.radius=a+"% "+a+"% 0 0"}}};a.default=t},cf3a:function(e,a,c){"use strict";c.r(a);var t=c("ac43"),i=c.n(t);for(var n in t)"default"!==n&&function(e){c.d(a,e,function(){return t[e]})}(n);a["default"]=i.a},da3a:function(e,a,c){"use strict";var t=function(){var e=this,a=e.$createElement;e._self._c},i=[];c.d(a,"a",function(){return t}),c.d(a,"b",function(){return i})}},[["014b","common/runtime","common/vendor"]]]);
});
require('pages/HM-chat/HM-details/HM-details.js');
__wxRoute = 'pages/HM-chat/HM-hand/HM-hand';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/HM-chat/HM-hand/HM-hand.js';

define('pages/HM-chat/HM-hand/HM-hand.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/HM-chat/HM-hand/HM-hand"],{"0911":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{typeClass:"luck",number:"",money:"",luckMoney:"",blessing:""}},methods:{switchType:function(n){this.typeClass=n},hand:function(e){var t={type:e,number:this.number,blessing:this.blessing,money:this.money};return(e="luck")&&(t.money=this.luckMoney),!t.money||t.money<=0?n.showToast({title:"金额不能为空",icon:"none"}):t.number!=Math.abs(parseInt(t.number))?n.showToast({title:"数量填写大于0的整数",icon:"none"}):(t.blessing=t.blessing||"恭喜发财",n.showLoading({title:"提交中"}),void setTimeout(function(){n.setStorage({key:"redEnvelopeData",data:t,success:function(){n.hideLoading(),n.navigateBack()}})},300))}}};e.default=t}).call(this,t("6e42")["default"])},"28b0":function(n,e,t){"use strict";(function(n){t("aeaa"),t("921b");a(t("66fd"));var e=a(t("e932"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},"2af8":function(n,e,t){"use strict";var a=t("f259"),u=t.n(a);u.a},"3c72":function(n,e,t){"use strict";t.r(e);var a=t("0911"),u=t.n(a);for(var o in a)"default"!==o&&function(n){t.d(e,n,function(){return a[n]})}(o);e["default"]=u.a},5988:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return u})},e932:function(n,e,t){"use strict";t.r(e);var a=t("5988"),u=t("3c72");for(var o in u)"default"!==o&&function(n){t.d(e,n,function(){return u[n]})}(o);t("2af8");var i=t("2877"),s=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},f259:function(n,e,t){}},[["28b0","common/runtime","common/vendor"]]]);
});
require('pages/HM-chat/HM-hand/HM-hand.js');
__wxRoute = 'pages/doctorlist/doctorlist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/doctorlist/doctorlist.js';

define('pages/doctorlist/doctorlist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/doctorlist/doctorlist"],{4318:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},"7aae":function(t,e,n){"use strict";n.r(e);var r=n("9592"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a},"8e78":function(t,e,n){},9592:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a={data:function(){return{doctorlist:[{id:0,img:"../../static/imgs/nvdoctor.jpg",url:"../doctorDetail/doctorDetail?id=0",dName:"陈婉姬  ",dDepartment:"儿科",dPosition:"主治医师",dAddress:"浙江省立同德医院",dAdvantages:"擅长：厌食、营养不良、功能性腹痛、腹泻、感冒、流鼻涕、咳嗽、哮喘、反复性呼吸道感染、慢性鼻炎、手足口病、遗尿、尿频、汗症、抽动症、矮小症、性早熟等的中西医治疗，在小儿调理保健、生长发育等具有颇为丰富的临床经验",dPrice:"￥49"},{id:1,img:"../../static/imgs/nv.jpg",url:"../doctorDetail/doctorDetail?id=1",dName:"刘文沛  ",dDepartment:"妇科",dPosition:"主治医师",dAddress:"浙江省立同德医院",dAdvantages:"擅长：月经不调，月经痛、妇科炎症，不孕症、输卵管堵塞、多囊卵巢，宫腔粘连、子宫肌瘤、卵巢囊肿、痛经、更年期、老年期妇科疾病、尿失禁、盆腔器官脱垂等，以高效，有效和安全的流程，为患者提供药物，微创手术和康复指导相结合的全面治疗",dPrice:"￥49"},{id:2,img:"../../static/imgs/16pic_2634578_b.jpg",url:"../doctorDetail/doctorDetail?id=2",dName:"张家严  ",dDepartment:"肝胆胰外科",dPosition:"主治医师",dAddress:"浙江省立同德医院",dAdvantages:"擅长：在肝胆胰疾病疑难重症方面，重点诊治肝胆胰肿瘤，如肝细胞癌，肝脏胆管细胞癌，肝转移癌，结直肠癌肝转移，巨大肝肿瘤等，复杂肝道病，肝移植治疗终末期肝胆病，如胆管癌，肝门部胆管癌，胆管囊状扩张症，胆管囊肿，胰腺肿瘤等",dPrice:"￥49"},{id:3,img:"../../static/imgs/1305-11040404594340.jpg",url:"../doctorDetail/doctorDetail?id=3",dName:"赵文  ",dDepartment:"神经内科",dPosition:"主治医师",dAddress:"浙江省立同德医院",dAdvantages:"擅长：神经系统疾病疑难及危重症疾病，包括：脑血管病，认知功能障碍疾病，运动障碍疾病，中枢神经系统脱髓鞘疾病的诊断及治疗。具体包括：少见脑血管疾病，各种类型的认知功能障碍及痴呆，帕金森综合征，多发性硬化及视神经脊髓炎谱系疾病等",dPrice:"￥49"}]}},computed:i({},(0,r.mapState)(["hasLogin"])),methods:{turnTo:function(e){t.navigateTo({url:"../loginRegister/loginRegister"})}}};e.default=a}).call(this,n("6e42")["default"])},ad37:function(t,e,n){"use strict";var r=n("8e78"),i=n.n(r);i.a},e5de:function(t,e,n){"use strict";n.r(e);var r=n("4318"),i=n("7aae");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("ad37");var a=n("2877"),d=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=d.exports},ef9d:function(t,e,n){"use strict";(function(t){n("aeaa"),n("921b");r(n("66fd"));var e=r(n("e5de"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["ef9d","common/runtime","common/vendor"]]]);
});
require('pages/doctorlist/doctorlist.js');
__wxRoute = 'pages/tongueDiagnosis/tongueDiagnosis';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tongueDiagnosis/tongueDiagnosis.js';

define('pages/tongueDiagnosis/tongueDiagnosis.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tongueDiagnosis/tongueDiagnosis"],{"0360":function(e,t,n){"use strict";n.r(t);var o=n("e104"),a=n("0b91");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);n("1a8f");var i=n("2877"),s=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},"0b91":function(e,t,n){"use strict";n.r(t);var o=n("adb1"),a=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=a.a},"1a8f":function(e,t,n){"use strict";var o=n("7267"),a=n.n(o);a.a},3494:function(e,t,n){"use strict";(function(e){n("aeaa"),n("921b");o(n("66fd"));var t=o(n("0360"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},7267:function(e,t,n){},adb1:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{}},onLoad:function(){e.setNavigationBarTitle({title:"舌诊"})},methods:{tap:function(){e.chooseImage({success:function(t){e.uploadFile({url:"http://kdjk.c5ppc.cn/tongue_upload",filePath:t.tempFilePaths[0],name:"tongue",success:function(t){if(console.log(n(t," at pages\\tongueDiagnosis\\tongueDiagnosis.vue:41")),console.log(n(JSON.parse(t.data).code," at pages\\tongueDiagnosis\\tongueDiagnosis.vue:42")),10010==JSON.parse(t.data).code){console.log(n(JSON.parse(t.data).data," at pages\\tongueDiagnosis\\tongueDiagnosis.vue:44"));var o="../tongueResult/tongueResult?url="+JSON.parse(t.data).data;e.showLoading({title:"AI诊断大约需要30s，请稍等"}),setTimeout(function(){e.hideLoading(),e.navigateTo({url:o})},3e4)}else console.log(n(t," at pages\\tongueDiagnosis\\tongueDiagnosis.vue:56")),e.showToast({title:"估计本地出了什么问题",icon:"none"})},fail:function(t){console.log(n(t," at pages\\tongueDiagnosis\\tongueDiagnosis.vue:64")),e.showToast({title:"口袋健康可能出了点问题...",icon:"none"})}})}})}}};t.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},e104:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})}},[["3494","common/runtime","common/vendor"]]]);
});
require('pages/tongueDiagnosis/tongueDiagnosis.js');
__wxRoute = 'pages/tongueResult/tongueResult';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tongueResult/tongueResult.js';

define('pages/tongueResult/tongueResult.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tongueResult/tongueResult"],{"0eb9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{img:"http://kdjk.c5ppc.cn/uploads/tongue/20191005/b585c03d305562e19b6bbf5401ccca7d.png",judge:"",advice:""}},onLoad:function(e){var n=this;t.setNavigationBarTitle({title:"问诊报告"}),t.request({url:"http://kdjk.c5ppc.cn/tongue_index",method:"GET",data:{url:e.url},success:function(e){var a="string"==typeof e.data?JSON.parse(e.data):e.data;n.judge=a.data[0].judge,n.advice=a.data[0].advice,n.img=a.data[0].url,void 0==a.data[0].judge&&t.showToast({title:"服务器可能开小差了，没能识别您的病情哦!",icon:"none"})}})},methods:{}};e.default=n}).call(this,n("6e42")["default"])},3483:function(t,e,n){"use strict";n.r(e);var a=n("0eb9"),u=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=u.a},"7c4d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},9988:function(t,e,n){"use strict";var a=n("ca5f"),u=n.n(a);u.a},ca5f:function(t,e,n){},ed2c:function(t,e,n){"use strict";n.r(e);var a=n("7c4d"),u=n("3483");for(var c in u)"default"!==c&&function(t){n.d(e,t,function(){return u[t]})}(c);n("9988");var o=n("2877"),d=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=d.exports},f39e:function(t,e,n){"use strict";(function(t){n("aeaa"),n("921b");a(n("66fd"));var e=a(n("ed2c"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f39e","common/runtime","common/vendor"]]]);
});
require('pages/tongueResult/tongueResult.js');
__wxRoute = 'pages/personInfo/personInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/personInfo/personInfo.js';

define('pages/personInfo/personInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personInfo/personInfo"],{4516:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},"490e":function(e,t,n){"use strict";(function(e){n("aeaa"),n("921b");o(n("66fd"));var t=o(n("bb80"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"6e1a":function(e,t,n){},bb80:function(e,t,n){"use strict";n.r(t);var o=n("4516"),a=n("bf53");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);n("e772");var r=n("2877"),i=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=i.exports},bf53:function(e,t,n){"use strict";n.r(t);var o=n("c3ac"),a=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=a.a},c3ac:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;u(n("42c5"));var a=n("2f62");function u(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={data:function(){return{formName:"input",value:{username:"",height:"",weight:"",blood_high:"",blood_low:"",sugar:"",vital:"",area:""}}},computed:r({},(0,a.mapState)(["token"])),onLoad:function(){e.setNavigationBarTitle({title:"用户信息收集"})},methods:{changeData:function(){var t=this;""!=t.value.username?""!=t.value.height?""!=t.value.weight?(e.request({url:"http://kdjk.c5ppc.cn/user_info",method:"GET",data:{token:t.token,name:t.value.username,height:t.value.height,weight:t.value.weight,blood_high:t.value.blood_high,blood_low:t.value.blood_low,sugar:t.value.sugar,vital:t.value.vital,area:t.value.area},success:function(t){var n="string"==typeof t.data?JSON.parse(t.data):t.data;console.log(o(n," at pages\\personInfo\\personInfo.vue:82")),10010==n.code?e.showToast({title:"后台已收到数据，后将进行数据分析",icon:"none",success:function(){setTimeout(function(){e.navigateBack({delta:1})},1e3)}}):1e4==n.code&&(console.log(o(t," at pages\\personInfo\\personInfo.vue:97")),e.showToast({title:"数据有误！请重新输入",icon:"none"}))},fail:function(t){e.showToast({title:"网络异常！请稍后再试",icon:"none"})}}),this.reSet()):e.showToast({title:"请输入体重",icon:"none"}):e.showToast({title:"请输入身高",icon:"none"}):e.showToast({title:"请输入用户名",icon:"none"})},reSet:function(){this.value={username:"",height:"",weight:""}}}};t.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},e772:function(e,t,n){"use strict";var o=n("6e1a"),a=n.n(o);a.a}},[["490e","common/runtime","common/vendor"]]]);
});
require('pages/personInfo/personInfo.js');
__wxRoute = 'pages/personInfoShow/personInfoShow';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/personInfoShow/personInfoShow.js';

define('pages/personInfoShow/personInfoShow.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personInfoShow/personInfoShow"],{"0847":function(t,e,n){"use strict";n.r(e);var a=n("ece7"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},"2ac8":function(t,e,n){"use strict";n.r(e);var a=n("4065"),o=n("0847");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("4817");var u=n("2877"),c=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},3449:function(t,e,n){"use strict";(function(t){n("aeaa"),n("921b");a(n("66fd"));var e=a(n("2ac8"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},4065:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},4817:function(t,e,n){"use strict";var a=n("cf68"),o=n.n(a);o.a},cf68:function(t,e,n){},ece7:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{tableData:"111"}},computed:r({},(0,o.mapState)(["token"])),methods:{getTableData:function(){var e=this;this.tableData=[t.request({url:"http://kdjk.c5ppc.cn/user",data:{token:e.token},success:function(t){var n="string"==typeof t.data?JSON.parse(t.data):t.data;e.tableData=n.data[0],console.log(a(n.data[0]," at pages\\personInfoShow\\personInfoShow.vue:67"))}})]},navigateTo:function(e){var n="../"+e+"/"+e;t.navigateTo({url:n})}},onShow:function(){this.getTableData(),t.setNavigationBarTitle({title:"用户信息"})}};e.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["3449","common/runtime","common/vendor"]]]);
});
require('pages/personInfoShow/personInfoShow.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

