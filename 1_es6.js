(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{21:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":f(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(p,e);var t,n,r,f,s=(t=p,function(){var e,n=a(t);if(l()){var r=a(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return c(this,e)});function p(){var e;return i(this,p),(e=s.apply(this,arguments)).active=!1,e}return n=p,(r=[{key:"shouldUpdate",value:function(){return this.active}}])&&o(n.prototype,r),f&&o(n,f),p}(r.a);s([Object(r.e)({type:Boolean})],p.prototype,"active",void 0)},22:function(e,t,n){"use strict";var r=n(0),i=n(2),o=n(5),c=new WeakMap,l=Object(o.b)((function(e){return function(t){if(!(t instanceof o.a))throw new Error("unsafeHTML can only be used in text bindings");var n=c.get(t);if(void 0===n||!Object(i.f)(e)||e!==n.value||t.value!==n.fragment){var r=document.createElement("template");r.innerHTML=e;var l=document.importNode(r.content,!0);t.setValue(l),c.set(t,{value:e,fragment:l})}}})),a=n(11),u=r.b`:host{display:block;margin:64px 0;box-sizing:border-box}:host *{box-sizing:border-box}.grid-container--content{grid-template-areas:"sidebar article article ."}.background{position:relative;grid-row-start:sidebar;grid-row-end:article;grid-column-start:sidebar;grid-column-end:article;background-color:#f7f7f7}.background:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}article{position:relative;grid-area:article;padding:36px 36px 36px 0;font-size:1.1rem}ol,ul{padding-inline-start:16px}ol li,ul li{padding:3px 0}blockquote{position:relative;position:relative;padding:8px 8px 8px 32px;margin:32px 0 0 0;background-color:#faebd7;z-index:1}blockquote:before{content:"";position:absolute;top:0;bottom:0;left:0;width:16px;background-color:transparent;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:0 0;z-index:0}blockquote p{margin:.5em 0}.download{display:flex;padding:24px 0;color:inherit;text-decoration:none}.download p{margin:0}.download__text{margin-inline-start:1em}.download__link{color:var(--app-link-color);text-decoration:underline}@media (min-width:768px){.grid-container--content{grid-template-areas:"sidebar article article article article article article article article article ."}}@media (min-width:1025px){.grid-container--content{grid-template-areas:"sidebar article article article article article article article article . ."}}@media (min-width:1281px){.grid-container--content{grid-template-areas:"sidebar sidebar article article article article article article . . ."}}`;function f(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n      <div class="grid-container grid-container--content">\n        <div class="background"></div>\n        <article>\n          ',"\n        </article>\n      </div>\n    "]);return f=function(){return e},e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":y(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(y,e);var t,n,i,o,c=(t=y,function(){var e,n=b(t);if(h()){var r=b(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return d(this,e)});function y(){var e;return s(this,y),(e=c.apply(this,arguments)).content="",e}return n=y,o=[{key:"styles",get:function(){return[a.a,u]}}],(i=[{key:"render",value:function(){return Object(r.d)(f(),l(this.content))}}])&&p(n.prototype,i),o&&p(n,o),y}(r.a);m([Object(r.e)({type:String})],v.prototype,"content",void 0),v=m([Object(r.c)("section-content")],v)},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n(0),i=n(21),o=n(11),c=r.b`:host{display:block}:host *{box-sizing:border-box}.grid-container--about{grid-template-rows:repeat(3,minmax(50px,auto));grid-template-areas:". header header ." ". box-one box-one ." ". picture picture picture"}h1,h2,h4{margin:0}h1{display:flex;flex-direction:column;font-size:2em;letter-spacing:.067em}h1 span{margin-right:auto}h2{color:#7b7b7b}h4{margin-bottom:1em}ul{padding-inline-start:16px}ul li{padding:3px 0}header{grid-area:header;display:flex;flex-direction:column;justify-content:flex-end}.picture{grid-area:picture}.picture:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);border-width:1px;border-style:dashed;border-color:#242a49;z-index:-1}.box{position:relative;padding:var(--app-padding-medium);color:inherit;background-color:var(--app-background-color-gray);border-width:1px;border-style:solid;border-color:#00e;text-decoration:none}.box:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}.box-one{grid-area:box-one}a{color:#00e;text-decoration:underline}@media (min-width:768px){.grid-container--about{grid-template-rows:repeat(5,minmax(50px,auto));grid-template-areas:". header header header header header . . . . ." ". header header header header header . . . . ." ". box-one box-one box-one picture picture picture picture picture picture picture" ". box-one box-one box-one picture picture picture picture picture picture picture" ". . . . picture picture picture picture picture picture picture"}}@media (min-width:1281px){.grid-container--about{grid-template-areas:". . header header header header . . . . ." ". . header header header header . . . . ." ". box-one box-one box-one picture picture picture picture picture picture picture" ". box-one box-one box-one picture picture picture picture picture picture picture" ". . . . picture picture picture picture picture picture picture"}}`;function l(){var e=u(['\n              <li>\n                <a href="#','">',"</a>\n              </li>\n            "]);return l=function(){return e},e}function a(){var e=u(['\n      <section class="grid-container grid-container--about">\n        <header>\n          <h2>',"</h2>\n          <h1>",'</h1>\n        </header>\n        <div class="box box-one">\n          <h4>Inhalt</h4>\n          <ul>\n          ','\n          </ul>\n        </div>\n        <app-picture class="picture"\n                     alt="Intro Bild"\n                     default="./images/index/intro.jpg"\n        >\n        </app-picture>\n      </section>\n    ']);return a=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":g(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(y,e);var t,n,i,u,g=(t=y,function(){var e,n=h(t);if(d()){var r=h(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return p(this,e)});function y(){var e;return f(this,y),(e=g.apply(this,arguments)).header=[],e.articles=[],e}return n=y,u=[{key:"styles",get:function(){return[o.a,c]}}],(i=[{key:"render",value:function(){var e=this.header[0],t=this.header[1];return Object(r.d)(a(),e,t,this.articles.map((function(e){return Object(r.d)(l(),e.href,e.name)})))}}])&&s(n.prototype,i),u&&s(n,u),y}(r.a);y([Object(r.e)({type:Array})],m.prototype,"header",void 0),y([Object(r.e)({type:Array})],m.prototype,"articles",void 0),y([Object(r.e)({type:Function})],m.prototype,"handleClick",void 0),m=y([Object(r.c)("section-hero")],m);n(22);function v(){var e=k(["\n         <section-content id="," content=","></section-content>\n        "]);return v=function(){return e},e}function x(){var e=k(["\n      <section-hero\n        .header=","\n        .articles=",'\n        @click="','"\n      >\n      </section-hero>\n      ',"\n    "]);return x=function(){return e},e}function k(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var M=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":Z(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(l,e);var t,n,i,o,c=(t=l,function(){var e,n=O(t);if(z()){var r=O(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return w(this,e)});function l(){var e;return I(this,l),(e=c.apply(this,arguments)).header=[],e.articles=[],e}return n=l,(i=[{key:"render",value:function(){return Object(r.d)(x(),this.header,this.articles,this._handleClickSubnav,this.articles.map((function(e){return Object(r.d)(v(),e.href,e.content)})))}},{key:"_handleClickSubnav",value:function(e){var t;e.preventDefault();var n=e.composedPath()[0],r=(null==n?void 0:n.getAttribute("href")).replace("#",""),i=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById(r);if(i){var o=document.body.getBoundingClientRect().top,c=i.getBoundingClientRect().top-o-129;window.scrollTo({top:c,behavior:"smooth"})}}}])&&j(n.prototype,i),o&&j(n,o),l}(i.a);M([Object(r.e)({type:Array})],S.prototype,"header",void 0),M([Object(r.e)({type:Array})],S.prototype,"articles",void 0)},31:function(e,t){e.exports="<h2 id=prophylaxe>Prophylaxe</h2> <h3 id=zähne-gesund-erhalten>Zähne gesund erhalten</h3> <p>Zu den Leistungen unserer Prophylaxe zählen:</p> <ul> <li>Professionelle Zahnreinigung (PZR)</li> <li>Airflow (Entfernen von Kaffee-, Tee- oder Nikotinbelägen)</li> <li>Training und Beratung zur häuslichen Mundhygiene (Zungenreinigung, Interdentalpflege u.v.m.)</li> <li>Bestimmung des individuellen Karies- + Parodontitisrisikos)</li> <li>Fissurenversiegelung</li> <li>Recall und Nachsorge nach Parodontalbehandlung oder Implantatversorgung</li> <li>Prothesenreinigung im praxiseigenen Labor</li> <li>Zahnschutzschienen zur Vermeidung von Sportverletzungen</li> <li>Bürstenbiopsie (Mundkrebsfrüherkennung)</li> </ul> "},32:function(e,t){e.exports="<h2 id=zahnerhaltung>Zahnerhaltung</h2> <ul> <li>Inlays (laborgefertigte Einlagefüllungen aus Keramik,Gold oder Composit)</li> <li>morphologisch gestaltete Compositfüllungen</li> <li>Endodontie (Wurzelkanalfüllungen)</li> <li>Revision endodontisch versorgter Zähne</li> <li>Stabilisierung gelockerter Zähne durch interdentale Schienung</li> <li>Amalgamsanierung</li> </ul> "},33:function(e,t){e.exports="<h2 id=kinderbehandlung>Kinderbehandlung</h2> <ul> <li>Prophylaxe ( Fissurenversiegelung, Fluoridierung, Zahnreinigung, Plaqueanfärbung, Aufklärung und Motivation Mundhygiene)</li> <li>Füllungstherapie</li> <li>Elternberatung (Bißfehlstellungsprophylaxe, Ernährung)</li> <li>Milchzahnendodontie</li> <li>Zahnschutz Sport (Eishockey, Hockey, Boxen)</li> <li><a href=https://www.waizmanntabelle.de/kinder>https://www.waizmanntabelle.de/kinder</a></li> </ul> "},34:function(e,t){e.exports="<h2 id=zahnfleischbehandlung>Zahnfleischbehandlung</h2> <ul> <li>Individuelle Parodontitisvorbehandlung</li> <li>Bestimmung besonders aggressiver Parodontitiskeime</li> <li>Konservativ (geschlossene Kürettage)</li> <li>Chirurgisch (offene Kürettage)</li> <li>Antibiotikatherapie (systemisch oder lokal)</li> <li>Nachsorge</li> </ul> "},35:function(e,t){e.exports="<h2 id=zahnärztliche-chirugie>Zahnärztliche Chirugie</h2> <ul> <li>Weisheitszahnentfernung</li> <li>Wurzelspitzenresektion</li> <li>Wurzelrestentfernung</li> <li>Zystektomie</li> <li>Zahnfleischmodellation</li> </ul> "},36:function(e,t){e.exports="<h2 id=behandlung-dysfunktioneller-erkrankungen>Behandlung dysfunktioneller Erkrankungen</h2> <ul> <li>CMD (Cranio-Mandibuläre-Dysfunktion) Überbegriff für strukturelle, funktionelle, biochemische und psychische Fehlregulation der Muskel- oder Kiefergelenkfunktion</li> <li>Reflexschiene</li> <li>Zentrikschiene</li> <li>Exzentrikschiene/Repositionsschiene</li> </ul> "},37:function(e,t){e.exports="<h2 id=zahnersatz>Zahnersatz</h2> <ul> <li>Implantatprothetik (festsitzend und herausnehmbar) </li> <li>Teilkronen (Keramik, Gold)</li> <li>Kronen (Metallkeramik, Vollkeramik, Zirkon, CAD/CAM)</li> <li>Brücken (Metallkeramik, Vollkeramik, Zirkon, CAD/CAM)</li> <li>Teleskoptechnik (Teleskopprothesen und teleskopierende Brücken)</li> <li>Stiftaufbauten (gedreht, gegossen, glasfaserverstärkt)</li> <li>Geschiebetechnik</li> <li>Langzeitprovisorien</li> <li>Vollprothesen/Teilprothesen</li> <li>Marylandbrücke (Klebebrücke)</li> </ul> "},38:function(e,t){e.exports="<h2 id=ästhetische-zahnheilkunde>Ästhetische Zahnheilkunde</h2> <ul> <li>Metallfreie Kronen</li> <li>Bleaching (Aufhellen aller oder einzelner Zähne)</li> <li>Kosmetischer Lückenschluß (Bsp. Frontzahndiastema)</li> <li>Veneers (Zahnformkorrektur mittels keramischen Verblendschalen)</li> <li>Mehrfach geschichtete und farblich individuell angepasste Front- und Seitenzahnfüllungen</li> </ul> "},39:function(e,t){e.exports="<h2 id=implantatberatung>Implantatberatung</h2> <ul> <li>Einzelzahnlücke</li> <li>Zahnloser Problemkiefer</li> <li>Prothesenintoleranz</li> <li>Hybrid Brücken</li> <li>Einzelimplantate zur Verbesserung bestehender Prothesen</li> <li>Miniimplantate</li> </ul> "},47:function(e,t,n){"use strict";n.r(t),n.d(t,"ViewServices",(function(){return M}));var r=n(0),i=n(23),o=n(31),c=n.n(o),l=n(32),a=n.n(l),u=n(33),f=n.n(u),s=n(34),p=n.n(s),d=n(35),h=n.n(d),b=n(36),g=n.n(b),y=n(37),m=n.n(y),v=n(38),x=n.n(v),k=n(39),I=n.n(k);function j(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Z=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":P(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(r,e);var t,n=(t=r,function(){var e,n=z(t);if(w()){var r=z(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return j(this,e)});function r(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(e=n.call(this)).header=["Unser Praxisspektrum","Leistungen"],e.articles=[{href:"prophylaxe",name:"Prophylaxe",content:c.a},{href:"zahnerhaltung",name:"Zahnerhaltung",content:a.a},{href:"kinderbehandlung",name:"Kinderbehandlung",content:f.a},{href:"zahnfleischbehandlung",name:"Zahnfleischbehandlung",content:p.a},{href:"chirugie",name:"Zahnärztliche Chirugie",content:h.a},{href:"dysfunktional",name:"Behandlung dysfunktioneller Erkrankungen",content:g.a},{href:"zahnersatz",name:"Zahnersatz",content:m.a},{href:"aesthetisch",name:"Ästhetische Zahnheilkunde",content:x.a},{href:"implantatberatung",name:"Implantatberatung",content:I.a}],e}return r}(i.a);M=Z([Object(r.c)("view-services")],M)}}]);