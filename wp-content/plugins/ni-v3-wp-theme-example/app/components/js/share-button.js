!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.ShareButton=e()}}(function(){return function e(t,n,o){function i(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){var n=t[s][1][e];return i(n?n:e)},u,u.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,t,n){e("../../modules/es6.array.iterator"),t.exports=e("../../modules/$.core").Array.values},{"../../modules/$.core":6,"../../modules/es6.array.iterator":34}],2:[function(e,t,n){e("../../modules/es6.math.trunc"),t.exports=e("../../modules/$.core").Math.trunc},{"../../modules/$.core":6,"../../modules/es6.math.trunc":35}],3:[function(e,t,n){e("../../modules/es6.symbol"),t.exports=e("../../modules/$.core").Symbol},{"../../modules/$.core":6,"../../modules/es6.symbol":36}],4:[function(e,t,n){var o=e("./$.is-object");t.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},{"./$.is-object":17}],5:[function(e,t,n){var o={}.toString;t.exports=function(e){return o.call(e).slice(8,-1)}},{}],6:[function(e,t,n){var o=t.exports={version:"1.2.3"};"number"==typeof __e&&(__e=o)},{}],7:[function(e,t,n){var o=e("./$.global"),i=e("./$.core"),r=e("./$.hide"),s=e("./$.redef"),a="prototype",c=function(e,t){return function(){return e.apply(t,arguments)}},u=function(e,t,n){var l,f,d,h,p=e&u.G,g=e&u.P,y=p?o:e&u.S?o[t]||(o[t]={}):(o[t]||{})[a],m=p?i:i[t]||(i[t]={});p&&(n=t);for(l in n)f=!(e&u.F)&&y&&l in y,d=(f?y:n)[l],h=e&u.B&&f?c(d,o):g&&"function"==typeof d?c(Function.call,d):d,y&&!f&&s(y,l,d),m[l]!=d&&r(m,l,h),g&&((m[a]||(m[a]={}))[l]=d)};o.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,t.exports=u},{"./$.core":6,"./$.global":12,"./$.hide":14,"./$.redef":26}],8:[function(e,t,n){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],9:[function(e,t,n){var o=e("./$");t.exports=function(e){var t=o.getKeys(e),n=o.getSymbols;if(n)for(var i,r=n(e),s=o.isEnum,a=0;r.length>a;)s.call(e,i=r[a++])&&t.push(i);return t}},{"./$":22}],10:[function(e,t,n){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],11:[function(e,t,n){var o={}.toString,i=e("./$.to-iobject"),r=e("./$").getNames,s="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return r(e)}catch(t){return s.slice()}};t.exports.get=function(e){return s&&"[object Window]"==o.call(e)?a(e):r(i(e))}},{"./$":22,"./$.to-iobject":30}],12:[function(e,t,n){var o=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=o)},{}],13:[function(e,t,n){var o={}.hasOwnProperty;t.exports=function(e,t){return o.call(e,t)}},{}],14:[function(e,t,n){var o=e("./$"),i=e("./$.property-desc");t.exports=e("./$.support-desc")?function(e,t,n){return o.setDesc(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},{"./$":22,"./$.property-desc":25,"./$.support-desc":28}],15:[function(e,t,n){var o=e("./$.cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},{"./$.cof":5}],16:[function(e,t,n){var o=e("./$.cof");t.exports=Array.isArray||function(e){return"Array"==o(e)}},{"./$.cof":5}],17:[function(e,t,n){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],18:[function(e,t,n){"use strict";var o=e("./$"),i={};e("./$.hide")(i,e("./$.wks")("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=o.create(i,{next:e("./$.property-desc")(1,r)}),e("./$.tag")(t,n+" Iterator")}},{"./$":22,"./$.hide":14,"./$.property-desc":25,"./$.tag":29,"./$.wks":33}],19:[function(e,t,n){"use strict";var o=e("./$.library"),i=e("./$.def"),r=e("./$.redef"),s=e("./$.hide"),a=e("./$.has"),c=e("./$.wks")("iterator"),u=e("./$.iterators"),l=!([].keys&&"next"in[].keys()),f="@@iterator",d="keys",h="values",p=function(){return this};t.exports=function(t,n,g,y,m,v,b){e("./$.iter-create")(g,n,y);var k,w,$=function(e){switch(e){case d:return function(){return new g(this,e)};case h:return function(){return new g(this,e)}}return function(){return new g(this,e)}},_=n+" Iterator",S=t.prototype,j=S[c]||S[f]||m&&S[m],x=j||$(m);if(j){var O=e("./$").getProto(x.call(new t));e("./$.tag")(O,_,!0),!o&&a(S,f)&&s(O,c,p)}if((!o||b)&&s(S,c,x),u[n]=x,u[_]=p,m)if(k={values:m==h?x:$(h),keys:v?x:$(d),entries:m!=h?x:$("entries")},b)for(w in k)w in S||r(S,w,k[w]);else i(i.P+i.F*l,n,k)}},{"./$":22,"./$.def":7,"./$.has":13,"./$.hide":14,"./$.iter-create":18,"./$.iterators":21,"./$.library":24,"./$.redef":26,"./$.tag":29,"./$.wks":33}],20:[function(e,t,n){t.exports=function(e,t){return{value:t,done:!!e}}},{}],21:[function(e,t,n){t.exports={}},{}],22:[function(e,t,n){var o=Object;t.exports={create:o.create,getProto:o.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:o.getOwnPropertyDescriptor,setDesc:o.defineProperty,setDescs:o.defineProperties,getKeys:o.keys,getNames:o.getOwnPropertyNames,getSymbols:o.getOwnPropertySymbols,each:[].forEach}},{}],23:[function(e,t,n){var o=e("./$"),i=e("./$.to-iobject");t.exports=function(e,t){for(var n,r=i(e),s=o.getKeys(r),a=s.length,c=0;a>c;)if(r[n=s[c++]]===t)return n}},{"./$":22,"./$.to-iobject":30}],24:[function(e,t,n){t.exports=!1},{}],25:[function(e,t,n){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],26:[function(e,t,n){var o=e("./$.global"),i=e("./$.hide"),r=e("./$.uid")("src"),s="toString",a=Function[s],c=(""+a).split(s);e("./$.core").inspectSource=function(e){return a.call(e)},(t.exports=function(e,t,n,s){"function"==typeof n&&(n.hasOwnProperty(r)||i(n,r,e[t]?""+e[t]:c.join(String(t))),n.hasOwnProperty("name")||i(n,"name",t)),e===o?e[t]=n:(s||delete e[t],i(e,t,n))})(Function.prototype,s,function(){return"function"==typeof this&&this[r]||a.call(this)})},{"./$.core":6,"./$.global":12,"./$.hide":14,"./$.uid":31}],27:[function(e,t,n){var o=e("./$.global"),i="__core-js_shared__",r=o[i]||(o[i]={});t.exports=function(e){return r[e]||(r[e]={})}},{"./$.global":12}],28:[function(e,t,n){t.exports=!e("./$.fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./$.fails":10}],29:[function(e,t,n){var o=e("./$").setDesc,i=e("./$.has"),r=e("./$.wks")("toStringTag");t.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,r)&&o(e,r,{configurable:!0,value:t})}},{"./$":22,"./$.has":13,"./$.wks":33}],30:[function(e,t,n){var o=e("./$.iobject"),i=e("./$.defined");t.exports=function(e){return o(i(e))}},{"./$.defined":8,"./$.iobject":15}],31:[function(e,t,n){var o=0,i=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++o+i).toString(36))}},{}],32:[function(e,t,n){var o=e("./$.wks")("unscopables");void 0==[][o]&&e("./$.hide")(Array.prototype,o,{}),t.exports=function(e){[][o][e]=!0}},{"./$.hide":14,"./$.wks":33}],33:[function(e,t,n){var o=e("./$.shared")("wks"),i=e("./$.global").Symbol;t.exports=function(t){return o[t]||(o[t]=i&&i[t]||(i||e("./$.uid"))("Symbol."+t))}},{"./$.global":12,"./$.shared":27,"./$.uid":31}],34:[function(e,t,n){"use strict";var o=e("./$.unscope"),i=e("./$.iter-step"),r=e("./$.iterators"),s=e("./$.to-iobject");e("./$.iter-define")(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,i(1)):"keys"==t?i(0,n):"values"==t?i(0,e[n]):i(0,[n,e[n]])},"values"),r.Arguments=r.Array,o("keys"),o("values"),o("entries")},{"./$.iter-define":19,"./$.iter-step":20,"./$.iterators":21,"./$.to-iobject":30,"./$.unscope":32}],35:[function(e,t,n){var o=e("./$.def");o(o.S,"Math",{trunc:function(e){return(e>0?Math.floor:Math.ceil)(e)}})},{"./$.def":7}],36:[function(e,t,n){"use strict";var o=e("./$"),i=e("./$.global"),r=e("./$.has"),s=e("./$.support-desc"),a=e("./$.def"),c=e("./$.redef"),u=e("./$.fails"),l=e("./$.shared"),f=e("./$.tag"),d=e("./$.uid"),h=e("./$.wks"),p=e("./$.keyof"),g=e("./$.get-names"),y=e("./$.enum-keys"),m=e("./$.is-array"),v=e("./$.an-object"),b=e("./$.to-iobject"),k=e("./$.property-desc"),w=o.getDesc,$=o.setDesc,_=o.create,S=g.get,j=i.Symbol,x=i.JSON,O=x&&x.stringify,C=!1,P=h("_hidden"),L=o.isEnum,E=l("symbol-registry"),F=l("symbols"),A="function"==typeof j,I=Object.prototype,N=s&&u(function(){return 7!=_($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a})?function(e,t,n){var o=w(I,t);o&&delete I[t],$(e,t,n),o&&e!==I&&$(I,t,o)}:$,T=function(e){var t=F[e]=_(j.prototype);return t._k=e,s&&C&&N(I,e,{configurable:!0,set:function(t){r(this,P)&&r(this[P],e)&&(this[P][e]=!1),N(this,e,k(1,t))}}),t},B=function(e){return"symbol"==typeof e},D=function(e,t,n){return n&&r(F,t)?(n.enumerable?(r(e,P)&&e[P][t]&&(e[P][t]=!1),n=_(n,{enumerable:k(0,!1)})):(r(e,P)||$(e,P,k(1,{})),e[P][t]=!0),N(e,t,n)):$(e,t,n)},M=function(e,t){v(e);for(var n,o=y(t=b(t)),i=0,r=o.length;r>i;)D(e,n=o[i++],t[n]);return e},H=function(e,t){return void 0===t?_(e):M(_(e),t)},q=function(e){var t=L.call(this,e);return t||!r(this,e)||!r(F,e)||r(this,P)&&this[P][e]?t:!0},W=function(e,t){var n=w(e=b(e),t);return!n||!r(F,t)||r(e,P)&&e[P][t]||(n.enumerable=!0),n},z=function(e){for(var t,n=S(b(e)),o=[],i=0;n.length>i;)r(F,t=n[i++])||t==P||o.push(t);return o},U=function(e){for(var t,n=S(b(e)),o=[],i=0;n.length>i;)r(F,t=n[i++])&&o.push(F[t]);return o},R=function(e){for(var t,n,o=[e],i=1,r=arguments;r.length>i;)o.push(r[i++]);return t=o[1],"function"==typeof t&&(n=t),(n||!m(t))&&(t=function(e,t){return n&&(t=n.call(this,e,t)),B(t)?void 0:t}),o[1]=t,O.apply(x,o)},J=u(function(){var e=j();return"[null]"!=O([e])||"{}"!=O({a:e})||"{}"!=O(Object(e))});A||(j=function(){if(B(this))throw TypeError("Symbol is not a constructor");return T(d(arguments.length>0?arguments[0]:void 0))},c(j.prototype,"toString",function(){return this._k}),B=function(e){return e instanceof j},o.create=H,o.isEnum=q,o.getDesc=W,o.setDesc=D,o.setDescs=M,o.getNames=g.get=z,o.getSymbols=U,s&&!e("./$.library")&&c(I,"propertyIsEnumerable",q,!0));var G={"for":function(e){return r(E,e+="")?E[e]:E[e]=j(e)},keyFor:function(e){return p(E,e)},useSetter:function(){C=!0},useSimple:function(){C=!1}};o.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(e){var t=h(e);G[e]=A?t:T(t)}),C=!0,a(a.G+a.W,{Symbol:j}),a(a.S,"Symbol",G),a(a.S+a.F*!A,"Object",{create:H,defineProperty:D,defineProperties:M,getOwnPropertyDescriptor:W,getOwnPropertyNames:z,getOwnPropertySymbols:U}),x&&a(a.S+a.F*(!A||J),"JSON",{stringify:R}),f(j,"Symbol"),f(Math,"Math",!0),f(i.JSON,"JSON",!0)},{"./$":22,"./$.an-object":4,"./$.def":7,"./$.enum-keys":9,"./$.fails":10,"./$.get-names":11,"./$.global":12,"./$.has":13,"./$.is-array":16,"./$.keyof":23,"./$.library":24,"./$.property-desc":25,"./$.redef":26,"./$.shared":27,"./$.support-desc":28,"./$.tag":29,"./$.to-iobject":30,"./$.uid":31,"./$.wks":33}],37:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=function(e,t,n){for(var o=!0;o;){var i=e,r=t,s=n;o=!1,null===i&&(i=Function.prototype);var a=Object.getOwnPropertyDescriptor(i,r);if(void 0!==a){if("value"in a)return a.value;var c=a.get;return void 0===c?void 0:c.call(s)}var u=Object.getPrototypeOf(i);if(null===u)return void 0;e=u,t=r,n=s,o=!0,a=u=void 0}},c=e("./share-utils"),u=o(c);e("core-js/fn/symbol"),e("core-js/fn/array/iterator"),e("core-js/fn/math/trunc");var l=function(e){function t(e,n){i(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),"object"==typeof e?(this.element=void 0,n=e):this.element=e,this.el={head:document.getElementsByTagName("head")[0],body:document.getElementsByTagName("body")[0]},this.config={enabledNetworks:0,protocol:"//",url:window.location.href,caption:null,title:this._defaultTitle(),image:this._defaultImage(),description:this._defaultDescription(),ui:{flyout:"sb-top sb-center",buttonText:"",namespace:"sb-",networkOrder:[],collision:!1},networks:{googlePlus:{enabled:!0,url:null},twitter:{enabled:!0,url:null,description:null},facebook:{enabled:!0,loadSdk:!0,url:null,appId:null,title:null,caption:null,description:null,image:null},pinterest:{enabled:0,url:null,image:null,description:null},reddit:{enabled:0,url:null,title:null},linkedin:{enabled:!0,url:null,title:null,description:null},whatsapp:{enabled:0,description:null,url:null},email:{enabled:!0,title:null,description:null}}},this.listener=null,this._setup(this.element,n)}return r(t,e),s(t,[{key:"open",value:function(){this._public("Open")}},{key:"close",value:function(){this._public("Close")}},{key:"toggle",value:function(){this._public("Toggle")}},{key:"toggleListen",value:function(){this._public("Listen")}},{key:"_public",value:function(e){var n=void 0;n="undefined"==typeof element?a(Object.getPrototypeOf(t.prototype),"_objToArray",this).call(this,document.getElementsByTagName("share-button")):document.querySelectorAll(element);var o=!0,i=!1,r=void 0;try{for(var s,c=n[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){var u=s.value,l=u.getElementsByClassName(this.config.ui.namespace+"social")[0];this["_event"+e](u,l)}}catch(f){i=!0,r=f}finally{try{!o&&c["return"]&&c["return"]()}finally{if(i)throw r}}}},{key:"_setup",value:function(e,n){var o=void 0;"undefined"==typeof e?o=a(Object.getPrototypeOf(t.prototype),"_objToArray",this).call(this,document.getElementsByTagName("share-button")):(o=document.querySelectorAll("share-button"+e),"object"==typeof o&&(o=a(Object.getPrototypeOf(t.prototype),"_objToArray",this).call(this,o))),this._merge(this.config,n),this.config.networks.whatsapp.enabled&&!this._isMobile()&&(this.config.networks.whatsapp.enabled=!1),0===this.config.ui.networkOrder.length&&(this.config.ui.networkOrder=["pinterest","twitter","facebook","whatsapp","googlePlus","reddit","linkedin","email"]);var i=!0,r=!1,s=void 0;try{for(var c,u=Object.keys(this.config.networks)[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){var l=c.value;this.config.ui.networkOrder.indexOf(l.toString())<0&&(this.config.networks[l].enabled=!1,this.config.ui.networkOrder.push(l))}}catch(f){r=!0,s=f}finally{try{!i&&u["return"]&&u["return"]()}finally{if(r)throw s}}this._fixFlyout(),this._detectNetworks(),this._normalizeNetworkConfiguration(),this.config.networks.facebook.enabled&&this.config.networks.facebook.loadSdk&&this._injectFacebookSdk();var d=0,h=!0,p=!1,g=void 0;try{for(var y,m=o[Symbol.iterator]();!(h=(y=m.next()).done);h=!0){var v=y.value;this._setupInstance(v,d++)}}catch(f){p=!0,g=f}finally{try{!h&&m["return"]&&m["return"]()}finally{if(p)throw g}}}},{key:"_setupInstance",value:function(e,t){var n=this;this._hide(e),this._addClass(e,"sharer-"+t),this._injectHtml(e),this._show(e);var o=e.getElementsByClassName(this.config.ui.namespace+"social")[0],i=e.getElementsByTagName("li");this._addClass(o,"networks-"+this.config.enabledNetworks),e.addEventListener("click",function(){return n._eventToggle(e,o)});var r=function(t){var o=i[t];"undefined"!=typeof o&&!function(){var t=o.getAttribute("data-network"),i=o.getElementsByTagName("a")[0];n._addClass(o,n.config.networks[t]["class"]),i.setAttribute("onclick","return false"),i.addEventListener("mousedown",function(){n._hook("before",t,e)}),i.addEventListener("mouseup",function(){n["_network"+t.capFLetter()](o)}),i.addEventListener("click",function(){n._hook("after",t,e)})}()};for(var s in Object.keys(i))r(s)}},{key:"_eventToggle",value:function(e,t){this._hasClass(t,"active")?this._eventClose(t):this._eventOpen(e,t)}},{key:"_eventOpen",value:function(e,t){this._hasClass(t,"load")&&this._removeClass(t,"load"),this.collision&&this._collisionDetection(e,t),this._addClass(t,"active")}},{key:"_eventClose",value:function(e){this._removeClass(e,"active")}},{key:"_eventListen",value:function(e,t){var n=this,o=this._getDimensions(e,t);null===this.listener?this.listener=window.setInterval(function(){return n._adjustClasses(e,t,o)},100):(window.clearInterval(this.listener),this.listener=null)}},{key:"_fixFlyout",value:function(){var e=this.config.ui.flyout.split(" ");e[0].substring(0,this.config.ui.namespace.length)!==this.config.ui.namespace&&(e[0]=""+this.config.ui.namespace+e[0]),e[1].substring(0,this.config.ui.namespace.length)!==this.config.ui.namespace&&(e[1]=""+this.config.ui.namespace+e[1]),this.config.ui.flyout=e.join(" ")}},{key:"_collisionDetection",value:function(e,t){var n=this,o=this._getDimensions(e,t);this._adjustClasses(e,t,o),e.classList.contains("clicked")||(window.addEventListener("scroll",function(){return n._adjustClasses(e,o)}),window.addEventListener("resize",function(){return n._adjustClasses(e,o)}),e.classList.add("clicked"))}},{key:"_getDimensions",value:function(e,t){return{networksWidth:t.offsetWidth,buttonHeight:e.offsetHeight,buttonWidth:e.offsetWidth}}},{key:"_adjustClasses",value:function(e,t,n){var o=window.innerWidth,i=window.innerHeight,r=e.getBoundingClientRect().left+n.buttonWidth/2,s=o-r,a=e.getBoundingClientRect().top+n.buttonHeight/2,c=this._findLocation(r,a,o,i);if("middle"===c[1]&&"center"!==c[0]&&("left"===c[0]&&o<=r+220+n.buttonWidth/2||"right"===c[0]&&o<=s+220+n.buttonWidth/2))t.classList.add(this.config.ui.namespace+"top"),t.classList.remove(this.config.ui.namespace+"middle"),t.classList.remove(this.config.ui.namespace+"bottom");else{switch(c[0]){case"left":t.classList.add(this.config.ui.namespace+"right"),t.classList.remove(this.config.ui.namespace+"center"),t.classList.remove(this.config.ui.namespace+"left");break;case"center":"top"!==c[1]&&t.classList.add(this.config.ui.namespace+"top"),t.classList.add(this.config.ui.namespace+"center"),t.classList.remove(this.config.ui.namespace+"left"),t.classList.remove(this.config.ui.namespace+"right"),t.classList.remove(this.config.ui.namespace+"middle");break;case"right":t.classList.add(this.config.ui.namespace+"left"),t.classList.remove(this.config.ui.namespace+"center"),t.classList.remove(this.config.ui.namespace+"right")}switch(c[1]){case"top":t.classList.add(this.config.ui.namespace+"bottom"),t.classList.remove(this.config.ui.namespace+"middle"),"center"!==c[0]&&t.classList.remove(this.config.ui.namespace+"top");break;case"middle":"center"!==c[0]&&(t.classList.add(this.config.ui.namespace+"middle"),t.classList.remove(this.config.ui.namespace+"top")),t.classList.remove(this.config.ui.namespace+"bottom");break;case"bottom":t.classList.add(this.config.ui.namespace+"top"),t.classList.remove(this.config.ui.namespace+"middle"),t.classList.remove(this.config.ui.namespace+"bottom")}}}},{key:"_findLocation",value:function(e,t,n,o){var i=["left","center","right"],r=["top","middle","bottom"],s=Math.trunc(3*(1-(n-e)/n)),a=Math.trunc(3*(1-(o-t)/o));return s>=3?s=2:-1>=s&&(s=0),a>=3?a=2:-1>=a&&(a=0),[i[s],r[a]]}},{key:"_networkFacebook",value:function(e){return this.config.networks.facebook.loadSdk?window.FB?(this._updateHref(e,"https://www.facebook.com/sharer/sharer.php",{u:this.config.networks.facebook.url}),FB.ui({method:"feed",name:this.config.networks.facebook.title,link:this.config.networks.facebook.url,picture:this.config.networks.facebook.image,caption:this.config.networks.facebook.caption,description:this.config.networks.facebook.description})):console.error("The Facebook JS SDK hasn't loaded yet."):this._updateHref(e,"https://www.facebook.com/sharer/sharer.php",{u:this.config.networks.facebook.url})}},{key:"_networkTwitter",value:function(e){this._updateHref(e,"https://twitter.com/intent/tweet",{text:this.config.networks.twitter.description,url:this.config.networks.twitter.url})}},{key:"_networkGooglePlus",value:function(e){this._updateHref(e,"https://plus.google.com/share",{url:this.config.networks.googlePlus.url})}},{key:"_networkPinterest",value:function(e){this._updateHref(e,"https://www.pinterest.com/pin/create/button",{url:this.config.networks.pinterest.url,media:this.config.networks.pinterest.image,description:this.config.networks.pinterest.description})}},{key:"_networkLinkedin",value:function(e){this._updateHref(e,"https://www.linkedin.com/shareArticle",{mini:"true",url:this.config.networks.linkedin.url,title:this.config.networks.linkedin.title,summary:this.config.networks.linkedin.description})}},{key:"_networkEmail",value:function(e){this._updateHref(e,"mailto:",{subject:this.config.networks.email.title,body:this.config.networks.email.description})}},{key:"_networkReddit",value:function(e){this._updateHref(e,"http://www.reddit.com/submit",{url:this.config.networks.reddit.url,title:this.config.networks.reddit.title})}},{key:"_networkWhatsapp",value:function(e){this._updateHref(e,"whatsapp://send",{text:this.config.networks.whatsapp.description+" "+this.config.networks.whatsapp.url})}},{key:"_injectStylesheet",value:function(e){if(!this.el.head.querySelector("link[href='"+e+"']")){var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),this.el.head.appendChild(t)}}},{key:"_injectHtml",value:function(e){var t=this.config.ui.networkOrder,n="",o=!0,i=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(o=(s=a.next()).done);o=!0){var c=s.value;n+="<li class='"+c+"' data-network='"+c+"'><a></a></li>"}}catch(u){i=!0,r=u}finally{try{!o&&a["return"]&&a["return"]()}finally{if(i)throw r}}e.innerHTML=this.config.ui.buttonText+"<div class='"+this.config.ui.namespace+"social load "+this.config.ui.flyout+"'><ul>"+n+"</ul></div>"}},{key:"_injectFacebookSdk",value:function(){if(!window.FB&&this.config.networks.facebook.appId&&!this.el.body.querySelector("#fb-root")){var e=document.createElement("script");e.text="window.fbAsyncInit=function(){FB.init({appId:'"+this.config.networks.facebook.appId+"',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if (e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src='//connect.facebook.net/en_US/all.js';i.parentNode.insertBefore(r,i)})(document,'script','facebook-jssdk');";var t=document.createElement("div");t.id="fb-root",this.el.body.appendChild(t),this.el.body.appendChild(e)}}},{key:"_hook",value:function(e,t,n){var o=this.config.networks[t][e];if("function"==typeof o){var i=o.call(this.config.networks[t],n);void 0!==i&&(i=this._normalizeFilterConfigUpdates(i),this.extend(this.config.networks[t],i,!0),this._normalizeNetworkConfiguration())}}},{key:"_defaultTitle",value:function(){var e=void 0;return(e=document.querySelector('meta[property="og:title"]')||document.querySelector('meta[name="twitter:title"]'))?e.getAttribute("content"):(e=document.querySelector("title"))?e.textContent||e.innerText:void 0}},{key:"_defaultImage",value:function(){var e=void 0;return(e=document.querySelector('meta[property="og:image"]')||document.querySelector('meta[name="twitter:image"]'))?e.getAttribute("content"):void 0}},{key:"_defaultDescription",value:function(){var e=void 0;return(e=document.querySelector('meta[property="og:description"]')||document.querySelector('meta[name="twitter:description"]')||document.querySelector('meta[name="description"]'))?e.getAttribute("content"):""}},{key:"_detectNetworks",value:function(){var e=!0,t=!1,n=void 0;try{for(var o,i=Object.keys(this.config.networks)[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var r=o.value,s=!0,a=!1,c=void 0;try{for(var u,l=Object.keys(this.config.networks[r])[Symbol.iterator]();!(s=(u=l.next()).done);s=!0){var f=u.value;null===this.config.networks[r][f]&&(this.config.networks[r][f]=this.config[f])}}catch(d){a=!0,c=d}finally{try{!s&&l["return"]&&l["return"]()}finally{if(a)throw c}}this.config.networks[r].enabled?(this["class"]="enabled",this.config.enabledNetworks+=1):this["class"]="disabled",this.config.networks[r]["class"]=this["class"]}}catch(d){t=!0,n=d}finally{try{!e&&i["return"]&&i["return"]()}finally{if(t)throw n}}}},{key:"_normalizeNetworkConfiguration",value:function(){this.config.networks.facebook.appId||(this.config.networks.facebook.loadSdk=!1),this.config.networks.twitter.description&&(this._isEncoded(this.config.networks.twitter.description)||(this.config.networks.twitter.description=encodeURIComponent(this.config.networks.twitter.description))),"number"==typeof this.config.networks.facebook.appId&&(this.config.networks.facebook.appId=this.config.networks.facebook.appId.toString())}},{key:"_normalizeFilterConfigUpdates",value:function(e){return this.config.networks.facebook.appId!==e.appId&&(console.warn("You are unable to change the Facebook appId after the button has been initialized. Please update your Facebook filters accordingly."),delete e.appId),this.config.networks.facebook.loadSdk!==e.loadSdk&&(console.warn("You are unable to change the Facebook loadSdk option after the button has been initialized. Please update your Facebook filters accordingly."),delete e.appId),e}}]),t}(u["default"]);t.exports=l},{"./share-utils":38,"core-js/fn/array/iterator":1,"core-js/fn/math/trunc":2,"core-js/fn/symbol":3}],38:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){o(this,e)}return i(e,[{key:"_getStyle",value:function(e,t){var n="";return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(e,"").getPropertyValue(t):e.currentStyle&&(t=t.replace(/\-(\w)/g,function(e,t){return t.toUpperCase()}),n=e.currentStyle[t]),n}},{key:"_hide",value:function(e){e.style.display="none"}},{key:"_show",value:function(e){e.style.display="initial"}},{key:"_hasClass",value:function(e,t){return e.classList.contains(t)}},{key:"_addClass",value:function(e,t){e.classList.add(t)}},{key:"_removeClass",value:function(e,t){e.classList.remove(t)}},{key:"_isEncoded",value:function(e){return e=e.toRFC3986(),decodeURIComponent(e)!==e}},{key:"_encode",value:function(e){return"undefined"==typeof e||null===e||this._isEncoded(e)?encodeURIComponent(e):e.toRFC3986()}},{key:"_getUrl",value:function(e){var t=this,n=(arguments.length<=1||void 0===arguments[1]?!1:arguments[1],arguments.length<=2||void 0===arguments[2]?{}:arguments[2]),o=function(){var e=[],o=!0,i=!1,r=void 0;try{for(var s,a=Object.keys(n)[Symbol.iterator]();!(o=(s=a.next()).done);o=!0){var c=s.value,u=n[c];e.push(c+"="+t._encode(u))}}catch(l){i=!0,r=l}finally{try{!o&&a["return"]&&a["return"]()}finally{if(i)throw r}}return e.join("&")}();return o&&(o="?"+o),e+o}},{key:"_updateHref",value:function(e,t,n){var o=t.indexOf("mailto:")>=0,i=e.getElementsByTagName("a")[0];if(i.setAttribute("href",this._getUrl(t,!o,n)),!(o||this.config.networks.facebook.loadSdk&&"facebook"===e.getAttribute("class"))){var r={width:500,height:350};r.top=screen.height/2-r.height/2,r.left=screen.width/2-r.width/2,window.open(i.href,"targetWindow","\n          toolbar=no,\n          location=no,\n          status=no,\n          menubar=no,\n          scrollbars=yes,\n          resizable=yes,\n          left="+r.left+",\n          top="+r.top+",\n          width="+r.width+",\n          height="+r.height+"\n        ")}}},{key:"popup",value:function t(e){var n=this,o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],t={width:500,height:350};t.top=screen.height/2-t.height/2,t.left=screen.width/2-t.width/2;var i=function(){var e=[],t=!0,i=!1,r=void 0;try{for(var s,a=Object.keys(o)[Symbol.iterator]();!(t=(s=a.next()).done);t=!0){var c=s.value,u=o[c];e.push(c+"="+n._encode(u))}}catch(l){i=!0,r=l}finally{try{!t&&a["return"]&&a["return"]()}finally{if(i)throw r}}return e.join("&")}();i&&(i="?"+i),window.open(e+i,"targetWindow","\n        toolbar=no,\n        location=no,\n        status=no,\n        menubar=no,\n        scrollbars=yes,\n        resizable=yes,\n        left="+t.left+",\n        top="+t.top+",\n        width="+t.width+",\n        height="+t.height+"\n      ")}},{key:"_merge",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){"object"!=typeof e&&(e={});for(var n in t)if(t.hasOwnProperty(n)){var o=t[n];if("object"==typeof o){e[n]=this._merge(e[n],o);continue}e[n]=o}for(var i=2,r=arguments.length;r>i;i++)_merge(e,arguments[i]);return e})},{key:"_objToArray",value:function(e){var t=[];for(var n in e)"object"==typeof e[n]&&t.push(e[n]);return t}},{key:"_isMobile",value:function(){return navigator.userAgent.match(/Android|iPhone|PhantomJS/i)&&!navigator.userAgent.match(/iPod|iPad/i)?!0:!1}}]),e}();String.prototype.toRFC3986=function(){var e=encodeURIComponent(this);e.replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})},String.prototype.capFLetter=function(){return this.charAt(0).toUpperCase()+this.slice(1)},n["default"]=r,t.exports=n["default"]},{}]},{},[37])(37)});