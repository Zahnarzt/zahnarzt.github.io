(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{352:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(2);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":d(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(f,e);var t,n,r,d,s=(t=f,function(){var e,n=u(t);if(a()){var r=u(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return c(this,e)});function f(){var e;return i(this,f),(e=s.apply(this,arguments)).active=!1,e}return n=f,(r=[{key:"shouldUpdate",value:function(){return this.active}}])&&o(n.prototype,r),d&&o(n,d),f}(r.a);s([Object(r.e)({type:Boolean})],f.prototype,"active",void 0)},353:function(e,t,n){"use strict";var r=n(2),i=n(12),o=n(32),c=new WeakMap,a=Object(o.b)((function(e){return function(t){if(!(t instanceof o.a))throw new Error("unsafeHTML can only be used in text bindings");var n=c.get(t);if(void 0===n||!Object(i.f)(e)||e!==n.value||t.value!==n.fragment){var r=document.createElement("template");r.innerHTML=e;var a=document.importNode(r.content,!0);t.setValue(a),c.set(t,{value:e,fragment:a})}}})),u=n(54),l=r.b`:host{display:block;margin:64px 0;box-sizing:border-box}:host *{box-sizing:border-box}.grid-container--content{grid-template-areas:"sidebar article article ."}.background{position:relative;grid-row-start:sidebar;grid-row-end:article;grid-column-start:sidebar;grid-column-end:article;background-color:#f7f7f7}.background:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}article{position:relative;grid-area:article;padding:36px 36px 36px 0;font-size:1.1rem}ol,ul{padding-inline-start:16px}ol li,ul li{padding:3px 0}img{max-width:100%;height:auto}blockquote{position:relative;position:relative;padding:8px 8px 8px 32px;margin:32px 0 0 0;background-color:#faebd7;z-index:1}blockquote:before{content:"";position:absolute;top:0;bottom:0;left:0;width:16px;background-color:transparent;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:0 0;z-index:0}blockquote p{margin:.5em 0}.download{display:flex;padding:24px 0;color:inherit;text-decoration:none}.download p{margin:0}.download__text{margin-inline-start:1em}.download__link{color:var(--app-link-color);text-decoration:underline}@media (min-width:768px){.grid-container--content{grid-template-areas:"sidebar article article article article article article article article article ."}}@media (min-width:1025px){.grid-container--content{grid-template-areas:"sidebar article article article article article article article article . ."}}@media (min-width:1281px){.grid-container--content{grid-template-areas:"sidebar sidebar article article article article article article . . ."}}`;function d(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n      <div class="grid-container grid-container--content">\n        <div class="background"></div>\n        <article>\n          ',"\n        </article>\n      </div>\n    "]);return d=function(){return e},e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":m(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(m,e);var t,n,i,o,c=(t=m,function(){var e,n=h(t);if(b()){var r=h(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return p(this,e)});function m(){var e;return s(this,m),(e=c.apply(this,arguments)).content="",e}return n=m,o=[{key:"styles",get:function(){return[u.a,l]}}],(i=[{key:"render",value:function(){return Object(r.d)(d(),a(this.content))}}])&&f(n.prototype,i),o&&f(n,o),m}(r.a);y([Object(r.e)({type:String})],w.prototype,"content",void 0),w=y([Object(r.c)("section-content")],w)},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var r=n(2),i=n(352),o=n(54),c=r.b`:host{display:block}:host *{box-sizing:border-box}.grid-container--about{grid-template-rows:repeat(3,minmax(50px,auto));grid-template-areas:". header header ." ". box-one box-one ." ". picture picture picture"}h1,h2,h4{margin:0}h1{display:flex;flex-direction:column;font-size:2em;letter-spacing:.067em}h1 span{margin-right:auto}h2{color:#7b7b7b}h4{margin-bottom:1em}ul{padding-inline-start:16px}ul li{padding:3px 0}header{grid-area:header;display:flex;flex-direction:column;justify-content:flex-end}.picture{grid-area:picture}.picture:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);border-width:1px;border-style:dashed;border-color:#242a49;z-index:-1}.box{position:relative;padding:var(--app-padding-medium);color:inherit;background-color:var(--app-background-color-gray);border-width:1px;border-style:solid;border-color:#00e;text-decoration:none}.box:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}.box-one{grid-area:box-one}a{color:#00e;text-decoration:underline}@media (min-width:768px){.grid-container--about{grid-template-rows:repeat(5,minmax(50px,auto));grid-template-areas:". header header header header header . . . . ." ". header header header header header . . . . ." ". box-one box-one box-one picture picture picture picture picture picture picture" ". box-one box-one box-one picture picture picture picture picture picture picture" ". . . . picture picture picture picture picture picture picture"}}@media (min-width:1281px){.grid-container--about{grid-template-areas:". . header header header header . . . . ." ". . header header header header . . . . ." ". box-one box-one box-one picture picture picture picture picture picture picture" ". box-one box-one box-one picture picture picture picture picture picture picture" ". . . . picture picture picture picture picture picture picture"}}`;function a(){var e=l(['\n              <li>\n                <a href="#','">',"</a>\n              </li>\n            "]);return a=function(){return e},e}function u(){var e=l(['\n      <section class="grid-container grid-container--about">\n        <header>\n          <h2>',"</h2>\n          <h1>",'</h1>\n        </header>\n        <div class="box box-one">\n          <h4>Inhalt</h4>\n          <ul>\n          ','\n          </ul>\n        </div>\n        <app-picture class="picture"\n                     alt="Intro Bild"\n                     default="./images/index/intro.jpg"\n        >\n        </app-picture>\n      </section>\n    ']);return u=function(){return e},e}function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":g(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(m,e);var t,n,i,l,g=(t=m,function(){var e,n=b(t);if(p()){var r=b(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f(this,e)});function m(){var e;return d(this,m),(e=g.apply(this,arguments)).header=[],e.articles=[],e}return n=m,l=[{key:"styles",get:function(){return[o.a,c]}}],(i=[{key:"render",value:function(){var e=this.header[0],t=this.header[1];return Object(r.d)(u(),e,t,this.articles.map((function(e){return Object(r.d)(a(),e.href,e.name)})))}}])&&s(n.prototype,i),l&&s(n,l),m}(r.a);m([Object(r.e)({type:Array})],y.prototype,"header",void 0),m([Object(r.e)({type:Array})],y.prototype,"articles",void 0),m([Object(r.e)({type:Function})],y.prototype,"handleClick",void 0),y=m([Object(r.c)("section-hero")],y);n(353);function w(){var e=I(["\n         <section-content id="," content=","></section-content>\n        "]);return w=function(){return e},e}function v(){var e=I(["\n      <section-hero\n        .header=","\n        .articles=",'\n        @click="','"\n      >\n      </section-hero>\n      ',"\n    "]);return v=function(){return e},e}function I(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var H=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":S(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(a,e);var t,n,i,o,c=(t=a,function(){var e,n=k(t);if(z()){var r=k(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return O(this,e)});function a(){var e;return x(this,a),(e=c.apply(this,arguments)).header=[],e.articles=[],e}return n=a,(i=[{key:"render",value:function(){return Object(r.d)(v(),this.header,this.articles,this._handleClickSubnav,this.articles.map((function(e){return Object(r.d)(w(),e.href,e.content)})))}},{key:"_handleClickSubnav",value:function(e){var t;e.preventDefault();var n=e.composedPath()[0],r=(null==n?void 0:n.getAttribute("href")).replace("#",""),i=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById(r);if(i){var o=document.body.getBoundingClientRect().top,c=i.getBoundingClientRect().top-o-129;window.scrollTo({top:c,behavior:"smooth"})}}}])&&j(n.prototype,i),o&&j(n,o),a}(i.a);H([Object(r.e)({type:Array})],M.prototype,"header",void 0),H([Object(r.e)({type:Array})],M.prototype,"articles",void 0)},373:function(e,t){e.exports='<h2 id=gemeinsam-gegen-corona-viren>Gemeinsam gegen Corona-Viren</h2> <p>Zu Ihrem und unseren Schutz unternehmen wir alles Mögliche, um eine Ansteckung durch Grippe- oder Coronaviren zu vermeiden. Dabei sind wir aber auf Ihre Mithilfe angewiesen.</p> <p>Auch wenn wir einen Behandlungstermin vereinbart haben, bleiben Sie bitte unbedingt zu Hause, wenn Sie</p> <ul> <li>eine Atemwegserkrankung mit Fieber haben,</li> <li>möglicherweise Kontakt zu einem Corona- oder Grippepatienten hatten,</li> <li>in den letzten Wochen ein Corona-Risikogebiet bereist haben oder</li> <li>schwere Infektzeichen haben und sich sehr schwach fühlen.</li> </ul> <p>In diesen Fällen melden Sie sich bitte ausschließlich telefonisch (unter der Rufnummer +49 221 79 50 15) bei unserer Zahnarztpraxis in Volkhoven-Weiler. Wir werden dann gemeinsam zeitnah einen neuen Behandlungstermin finden.</p> <p>Darüber hinaus empfehlen wir zurzeit Massenveranstaltungen zu vermeiden, zur Begrüßung nicht die Hand zu geben, nach Möglichkeit 2 Meter Abstand halten und auf Umarmungen zu verzichten, sowie regelmäßiges und gründliches Händewaschen.</p> <p>Die wichtigsten Fragen zum Coronavirus hat das Robert Koch Institut auf seiner Webseite zum Nachlesen zusammengestellt.(<a href=http://www.rki.de>www.rki.de</a>)</p> <p><img src=/images/aktuelles/anleitung-haendewaschen.png alt="Anleitung Händewaschen"> <img src=/images/aktuelles/info-haendewaschen.png alt="Information Händewaschen"></p> <blockquote> <p>So verhindern Sie nicht nur mögliche Ansteckungen mit dem Corona-Virus, sondern auch mit Influenza und anderen Krankheiten, die über Schmierinfektionen übertragen werden.</p> </blockquote> <p>Vielen Dank!</p> '},374:function(e,t){e.exports="<h3 id=sehr-geschätzte-patientinnen-und-patienten-liebe-freunde-und-bekannte>Sehr geschätzte Patientinnen und Patienten, liebe Freunde und Bekannte,</h3> <p>nach 30 Jahren ausgefüllter Berufstätigkeit habe ich mich entschlossen, meine Praxis zum 01.04.2020 an Herrn Dr. med dent. Benjamin Vogt zu übergeben.</p> <p>Dies mit einem weinenden und einem lachenden Auge deshalb, weil ich Sie, meine lieben Patientinnen und Patienten vermissen werde, mit einem lachenden Auge dagegen, weil ich überzeugt bin, dass Herr Dr. Vogt die Praxis in meinem Sinn und Geist weiterführen sowie weiterentwickeln wird.</p> <p>Herr Dr. Vogt studierte an der Universität zu Köln und konnte dort die bestmögliche zahnmedizinische Ausbildung absolvieren. Nach seinem Studium sammelte er mehrere Jahre Berufserfahrung in Monheim und Köln. Er deckt das gesamte Spektrum der Zahnmedizin ab und bringt den modernsten Wissensstand mit. Zu seinen Schwerpunkten gehört die maschinelle Endodontie auf höchstem Niveau und die Prothetik. Im Rahmen der Übergabe wird die Praxis vollständig digitalisiert und analoges Röntgen durch neue strahlenärmere Röntgengeräte ersetzt. Herr Dr. Vogt ist verheiratet und hat drei Kinder.</p> <p>Es würde mich freuen, wenn Sie meinem Nachfolger das gleiche Vertrauen schenken, wie Sie es mir gegenüber bekundet haben. Ich bin überzeugt, dass er Ihr Vertrauen verdient und Sie kompetent und einfühlsam behandeln wird. Herr Dr. Vogt wird das gesamte bewährte und Ihnen bekannte Praxisteam übernehmen, was die nahtlose Weiterführung der Praxistätigkeit gewährleistet.</p> <p>Ohne Ihren Einwand werden alle Ihre Unterlagen in der Praxis Dr. Vogt verbleiben. Die bereits vereinbarten Behandlungstermine bleiben selbstverständlich bestehen und auch alle zukünftigen Termine werden wie gewohnt für Sie eingeschrieben.</p> <p>Ganz herzlich möchte ich mich mit diesem Brief für das zum Teil jahrzehntelange Vertrauen bedanken, das Sie mir und meinem Team entgegengebracht haben.</p> <p>Die vielen netten Begegnungen, Gespräche und Kontakte haben mein Leben bereichert und werden mir sicherlich fehlen.</p> <p>Mit den allerbesten Grüßen, Ihr Markus Jansen</p> "},380:function(e,t,n){"use strict";n.r(t),n.d(t,"ViewNews",(function(){return h}));var r=n(2),i=n(354),o=n(373),c=n.n(o),a=n(374),u=n.n(a);function l(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":p(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(r,e);var t,n=(t=r,function(){var e,n=s(t);if(d()){var r=s(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return l(this,e)});function r(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(e=n.call(this)).header=["Rund um die Praxis","Aktuelles"],e.articles=[{href:"corona",name:"Gemeinsam gegen Corona-Viren",content:c.a},{href:"abschied",name:"Abschied Herr Jansen",content:u.a}],e}return r}(i.a);h=b([Object(r.c)("view-news")],h)}}]);