(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{352:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(2);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(f,e);var t,n,r,s,p=(t=f,function(){var e,n=u(t);if(c()){var r=u(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return a(this,e)});function f(){var e;return i(this,f),(e=p.apply(this,arguments)).active=!1,e}return n=f,(r=[{key:"shouldUpdate",value:function(){return this.active}}])&&o(n.prototype,r),s&&o(n,s),f}(r.a);p([Object(r.e)({type:Boolean})],f.prototype,"active",void 0)},353:function(e,t,n){"use strict";var r=n(2),i=n(12),o=n(32),a=new WeakMap,c=Object(o.b)((function(e){return function(t){if(!(t instanceof o.a))throw new Error("unsafeHTML can only be used in text bindings");var n=a.get(t);if(void 0===n||!Object(i.f)(e)||e!==n.value||t.value!==n.fragment){var r=document.createElement("template");r.innerHTML=e;var c=document.importNode(r.content,!0);t.setValue(c),a.set(t,{value:e,fragment:c})}}})),u=n(54),l=r.b`:host{display:block;margin:64px 0;box-sizing:border-box}:host *{box-sizing:border-box}.grid-container--content{grid-template-areas:"sidebar article article ."}.background{position:relative;grid-row-start:sidebar;grid-row-end:article;grid-column-start:sidebar;grid-column-end:article;background-color:#f7f7f7}.background:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}article{position:relative;grid-area:article;padding:36px 36px 36px 0;font-size:1.1em}h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child,h6:first-child{margin-top:0}ol,ul{padding-inline-start:16px}ol li,ul li{padding:3px 0}img{max-width:100%;height:auto}blockquote{position:relative;position:relative;padding:8px 8px 8px 32px;margin:32px 0 0 0;background-color:#faebd7;z-index:1}blockquote:before{content:"";position:absolute;top:0;bottom:0;left:0;width:16px;background-color:transparent;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:0 0;z-index:0}blockquote p{margin:.5em 0}.download{display:flex;padding:24px 0;color:inherit;text-decoration:none}.download p{margin:0}.download img{min-width:65px}.download__text{margin-inline-start:1em}.download__link{color:var(--app-link-color);text-decoration:underline}@media (min-width:768px){.grid-container--content{grid-template-areas:"sidebar article article article article article article article article article ."}}@media (min-width:1025px){.grid-container--content{grid-template-areas:"sidebar article article article article article article article article . ."}}@media (min-width:1281px){.grid-container--content{grid-template-areas:"sidebar sidebar article article article article article article . . ."}}`;function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n      <div class="grid-container grid-container--content">\n        <div class="background"></div>\n        <article>\n          ',"\n        </article>\n      </div>\n    "]);return s=function(){return e},e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":m(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(m,e);var t,n,i,o,a=(t=m,function(){var e,n=g(t);if(b()){var r=g(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return d(this,e)});function m(){var e;return p(this,m),(e=a.apply(this,arguments)).content="",e}return n=m,o=[{key:"styles",get:function(){return[u.a,l]}}],(i=[{key:"render",value:function(){return Object(r.d)(s(),c(this.content))}}])&&f(n.prototype,i),o&&f(n,o),m}(r.a);y([Object(r.e)({type:String})],v.prototype,"content",void 0),v=y([Object(r.c)("section-content")],v)},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return Z}));var r=n(2),i=n(352),o=n(54),a=r.b`:host{display:block}:host *{box-sizing:border-box}.grid-container--about{grid-template-rows:repeat(3,minmax(50px,auto));grid-template-areas:". header header ." ". box-one box-one ." ". picture picture picture"}h1,h2,h4{margin:0}h1{display:flex;flex-direction:column;font-size:2em;letter-spacing:.067em}h1 span{margin-right:auto}h2{color:#7b7b7b}h4{margin-bottom:1em}ul{padding-inline-start:16px}ul li{padding:3px 0}header{grid-area:header;display:flex;flex-direction:column;justify-content:flex-end}.picture{grid-area:picture}.picture:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);border-width:1px;border-style:dashed;border-color:#242a49;z-index:-1}.box{position:relative;padding:var(--app-padding-medium);color:inherit;background-color:var(--app-background-color-gray);border-width:1px;border-style:solid;border-color:#00e;text-decoration:none}.box:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}.box-one{grid-area:box-one}a{color:#00e;text-decoration:underline}@media (min-width:768px){.grid-container--about{grid-template-rows:repeat(5,minmax(50px,auto));grid-template-areas:". header header header header header . . . . ." ". header header header header header . . . . ." ". box-one box-one box-one picture picture picture picture picture picture picture" ". box-one box-one box-one picture picture picture picture picture picture picture" ". . . . picture picture picture picture picture picture picture"}}@media (min-width:1281px){.grid-container--about{grid-template-areas:". . header header header header . . . . ." ". . header header header header . . . . ." ". box-one box-one box-one picture picture picture picture picture picture picture" ". box-one box-one box-one picture picture picture picture picture picture picture" ". . . . picture picture picture picture picture picture picture"}}`;function c(){var e=l(['\n              <li>\n                <a href="#','">',"</a>\n              </li>\n            "]);return c=function(){return e},e}function u(){var e=l(['\n      <section class="grid-container grid-container--about">\n        <header>\n          <h2>',"</h2>\n          <h1>",'</h1>\n        </header>\n        <div class="box box-one">\n          <h4>Inhalt</h4>\n          <ul>\n          ','\n          </ul>\n        </div>\n        <app-picture class="picture"\n                     alt="Intro Bild"\n                     default="./images/index/intro.jpg"\n        >\n        </app-picture>\n      </section>\n    ']);return u=function(){return e},e}function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":h(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(m,e);var t,n,i,l,h=(t=m,function(){var e,n=b(t);if(d()){var r=b(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f(this,e)});function m(){var e;return s(this,m),(e=h.apply(this,arguments)).header=[],e.articles=[],e}return n=m,l=[{key:"styles",get:function(){return[o.a,a]}}],(i=[{key:"render",value:function(){var e=this.header[0],t=this.header[1];return Object(r.d)(u(),e,t,this.articles.map((function(e){return Object(r.d)(c(),e.href,e.name)})))}}])&&p(n.prototype,i),l&&p(n,l),m}(r.a);m([Object(r.e)({type:Array})],y.prototype,"header",void 0),m([Object(r.e)({type:Array})],y.prototype,"articles",void 0),m([Object(r.e)({type:Function})],y.prototype,"handleClick",void 0),y=m([Object(r.c)("section-hero")],y);n(353);function v(){var e=j(["\n         <section-content id="," content=","></section-content>\n        "]);return v=function(){return e},e}function x(){var e=j(["\n      <section-hero\n        .header=","\n        .articles=",'\n        @click="','"\n      >\n      </section-hero>\n      ',"\n    "]);return x=function(){return e},e}function j(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var M=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":H(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(c,e);var t,n,i,o,a=(t=c,function(){var e,n=O(t);if(P()){var r=O(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return I(this,e)});function c(){var e;return w(this,c),(e=a.apply(this,arguments)).header=[],e.articles=[],e}return n=c,(i=[{key:"render",value:function(){return Object(r.d)(x(),this.header,this.articles,this._handleClickSubnav,this.articles.map((function(e){return Object(r.d)(v(),e.href,e.content)})))}},{key:"_handleClickSubnav",value:function(e){var t;e.preventDefault();var n=e.composedPath()[0],r=(null==n?void 0:n.getAttribute("href")).replace("#",""),i=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById(r);if(i){var o=document.body.getBoundingClientRect().top,a=i.getBoundingClientRect().top-o-129;window.scrollTo({top:a,behavior:"smooth"})}}}])&&z(n.prototype,i),o&&z(n,o),c}(i.a);M([Object(r.e)({type:Array})],Z.prototype,"header",void 0),M([Object(r.e)({type:Array})],Z.prototype,"articles",void 0)},357:function(e,t){e.exports='<h2 id=dr-karina-hilgner>Dr. Karina Hilgner</h2> <h3 id=zahnärztin>Zahnärztin</h3> <p><img src=/images/ueber-uns/dr-hilgner.jpg alt="Dr Hilgner"> </p> <p>1981<br>Abitur in Polen, Tarnowski Gory</p> <p>1983<br>Abitur in Deutschland, Geilenkirchen</p> <p>1983<br>Studium der Zahnmedizin an der Heinrich-Heine-Universität Düsseldorf</p> <p>1989<br>Staatsexamen und Approbation als Zahnarzt</p> <p>1989<br>Assistenzzeit in Düsseldorf und Mönchengladbach</p> <p>1992<br>Niederlassung in eigener Praxis in Köln Volkhoven-Weiler</p> <p>1996<br>Promotion</p> <h4 id=mitgliedschaften>Mitgliedschaften</h4> <ul> <li><p>Zahnärztekammer Nordrhein</p> </li> <li><p>Dt. Gesellschaft für Zahn-, Mund- und Kieferheilkunde</p> </li> <li><p>Dt. Gesellschaft für Kinderheilkunde</p> </li> <li><p>Zahnärzteinitiative Köln</p> </li> </ul> '},358:function(e,t){e.exports='<h2 id=dr-benjamin-vogt>Dr. Benjamin Vogt</h2> <h3 id=zahnarzt>Zahnarzt</h3> <p><img src=/images/ueber-uns/dr-vogt.jpg alt="Dr Benjamin Vogt"> </p> <p>Verheiratet, 3 Kinder</p> <p>2011<br>Abitur, Marienschule Opladen, Gymnasium des Erzbistums Köln</p> <p>2012-2017<br>Studium der Zahnmedizin in Regelstudienzeit an der Universität zu Köln</p> <p>2017-2019<br>Assistenzzeit in Monheim und Köln</p> <p>2019<br>Promotion zum Dr. med. dent. </p> <p>2019-2020<br>Angestellter Zahnarzt in Köln</p> <p>2020<br>Niederlassung in eigener Praxis in Köln Volkhoven-Weiler</p> '},359:function(e,t){e.exports='<h2 id=team-hilgner>Team Hilgner</h2> <p><img src=/images/ueber-uns/team-hilgner-a.jpg alt="Team Person Hilgner A"><br>Rezeption, Verwaltung, Abrechnung </p> <p><img src=/images/ueber-uns/team-hilgner-b.jpg alt="Team Person Hilgner B"><br>Behandlung, Prophylaxe, Röntgen </p> <p><img src=/images/ueber-uns/team-hilgner-c.jpg alt="Team Person Hilgner C"><br>Behandlung, Prophylaxe, Röntgen </p> <p><img src=/images/ueber-uns/team-hilgner-d.jpg alt="Team Person Hilgner D"><br>Behandlung, Prophylaxe &amp; Röntgen</p> <h2 id=team-vogt>Team Vogt</h2> <p><img src=/images/ueber-uns/team-vogt-a.jpg alt="Team Person Vogt A"><br>Rezeption &amp; Organisation </p> <p><img src=/images/ueber-uns/team-vogt-b.jpg alt="Team Person Vogt B"><br>Behandlung &amp; Prophylaxe </p> <p><img src=/images/ueber-uns/team-vogt-c.jpg alt="Team Person Vogt C"><br>Behandlung &amp; Prophylaxe </p> <p><img src=/images/ueber-uns/team-vogt-d.jpg alt="Team Person Vogt D"><br>Behandlung, Prophylaxe, Materialverwaltung</p> '},360:function(e,t){e.exports="<h2 id=labor>Labor</h2> <p><img src=/images/ueber-uns/labor.jpg alt=Labor><br>Zahntechniker </p> "},361:function(e,t){e.exports="<h2 id=wenn-wir-nicht-ständig-bemüht-sind-besser-zu-werden-haben-wir-aufgehört-gut-zu-sein>Wenn wir nicht ständig bemüht sind besser zu werden haben wir aufgehört gut zu sein!</h2> <p>Seit dem wir 1992 unsere zahnärztliche Praxisgemeinschaft gegründet haben, liegt es uns am Herzen eine patientenorientierte Praxis zu führen. Durch die Wahl von unterschiedlichen Behandlern sowie die Terminvergabe von 7-20 Uhr oder ein eigenes Praxislabor, möchten wir unseren Patienten demonstrieren, dass wir ein modernes Dienstleistungsunternehmen darstellen. Wir arbeiten nach aktuellen Qualitäts- und Hygienestandards. Unser wichtigstes Ziel ist es eine bestmögliche individuelle Versorgung für unsere Patienten zu erreichen und durch innovative Zahnheilkunde gerüstet zu sein. </p> <p><strong>Patienten</strong> Oberstes Ziel ist die Zufriedenheit unserer Patienten. Dabei steht der Patient im Mittelpunkt unseres Handelns. Fortlaufende Patientenorientierung deckt dabei Schwachstellen im Praxisablauf auf und hilft die Wünsche unserer Patienten zu befriedigen. Wir sind bemüht ein angstfreies und vertrauen volles Umfeld zu schaffen und längere Wartezeiten zu vermeiden. </p> <p><strong>Team</strong><br>Ärzte, Mitarbeiter und Zahntechniker verstehen sich als Team. Kommunikationspflege wird durch regelmäßige Teambesprechungen gewährleistet. Durch konsequente Fortbildung der Ärzte, Zahntechniker und Mitarbeiter ist es uns möglich unseren Patienten ein breites Spektrum an Diagnostik und Therapiemöglichkeiten anzubieten und somit die geeigneten Maßnahmen individuell auf die Patienten abzustimmen. </p> <p><strong>Qualität</strong><br>Unser Anspruch ist es für Sie höchste Qualität zu liefern. Das gilt gleichermaßen für die Ausführung der Behandlungen, als auch für die Auswahl der verwendeten Produkte. In unserem Praxislabor legen wir großen Wert auf Biokompatibilität (Verträglichkeit) der verwendeten Materialien. </p> <p><strong>Kooperation</strong><br>Wir sind bemüht mit unseren Partnerärzten, Krankenkassen, Labors oder interdisziplinär tätigen Spezialisten bestmöglich zu kooperieren, um unseren Patienten Mehrfachuntersuchungen zu ersparen und ein Höchstmaß an Effizienz zu erreichen. </p> <p><strong>Qualitätsmanagment</strong><br>Um alle die vorgenannten Kriterien sicherzustellen, führen wir in unserer Praxis ein Qualitätsmanagement durch. Hierbei werden Arbeitsabläufe, Arbeitsergebnisse und Methoden regelmäßig überprüft und nötigenfalls verbessert.Das QM hat zur Aufgabe hohe Qualitätsansprüche zu gewährleisten und höchste Patientenzufriedenheit zu erhalten.</p> "},377:function(e,t,n){"use strict";n.r(t),n.d(t,"ViewAbout",(function(){return j}));var r=n(2),i=n(354),o=n(357),a=n.n(o),c=n(358),u=n.n(c),l=n(359),s=n.n(l),p=n(360),f=n.n(p),d=n(361),b=n.n(d);function g(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var x=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":v(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(r,e);var t,n=(t=r,function(){var e,n=m(t);if(h()){var r=m(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return g(this,e)});function r(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(e=n.call(this)).header=["Lernen Sie uns kennen","Über uns"],e.articles=[{href:"hilgner",name:"Dr. Karina Hilgner",content:a.a},{href:"vogt",name:"Dr. Benjamin Vogt",content:u.a},{href:"team",name:"Unser Team",content:s.a},{href:"labor",name:"Labor",content:f.a},{href:"praxisleitbild",name:"Praxisleitbild",content:b.a}],e}return r}(i.a);j=x([Object(r.c)("view-about")],j)}}]);