(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{352:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(2);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"==typeof Reflect?"undefined":p(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(f,e);var t,r,n,p,s=(t=f,function(){var e,r=u(t);if(a()){var n=u(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return c(this,e)});function f(){var e;return o(this,f),(e=s.apply(this,arguments)).active=!1,e}return r=f,(n=[{key:"shouldUpdate",value:function(){return this.active}}])&&i(r.prototype,n),p&&i(r,p),f}(n.a);s([Object(n.e)({type:Boolean})],f.prototype,"active",void 0)},353:function(e,t,r){"use strict";var n=r(2),o=r(12),i=r(32),c=new WeakMap,a=Object(i.b)((function(e){return function(t){if(!(t instanceof i.a))throw new Error("unsafeHTML can only be used in text bindings");var r=c.get(t);if(void 0===r||!Object(o.f)(e)||e!==r.value||t.value!==r.fragment){var n=document.createElement("template");n.innerHTML=e;var a=document.importNode(n.content,!0);t.setValue(a),c.set(t,{value:e,fragment:a})}}})),u=r(54),l=n.b`:host{display:block;margin:64px 0;box-sizing:border-box}:host *{box-sizing:border-box}.grid-container--content{grid-template-areas:"sidebar article article ."}.background{position:relative;grid-row-start:sidebar;grid-row-end:article;grid-column-start:sidebar;grid-column-end:article;background-color:#f7f7f7}.background:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}article{position:relative;grid-area:article;padding:36px 36px 36px 0;font-size:1.1em}h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child,h6:first-child{margin-top:0}ol,ul{padding-inline-start:16px}ol li,ul li{padding:3px 0}img{max-width:100%;height:auto}blockquote{position:relative;position:relative;padding:8px 8px 8px 32px;margin:32px 0 0 0;background-color:#faebd7;z-index:1}blockquote:before{content:"";position:absolute;top:0;bottom:0;left:0;width:16px;background-color:transparent;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:0 0;z-index:0}blockquote p{margin:.5em 0}.download{display:flex;padding:24px 0;color:inherit;text-decoration:none}.download p{margin:0}.download img{min-width:65px}.download__text{margin-inline-start:1em}.download__link{color:var(--app-link-color);text-decoration:underline}@media (min-width:768px){.grid-container--content{grid-template-areas:"sidebar article article article article article article article article article ."}}@media (min-width:1025px){.grid-container--content{grid-template-areas:"sidebar article article article article article article article article . ."}}@media (min-width:1281px){.grid-container--content{grid-template-areas:"sidebar sidebar article article article article article article . . ."}}`;function p(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n      <div class="grid-container grid-container--content">\n        <div class="background"></div>\n        <article>\n          ',"\n        </article>\n      </div>\n    "]);return p=function(){return e},e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"==typeof Reflect?"undefined":y(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(y,e);var t,r,o,i,c=(t=y,function(){var e,r=h(t);if(b()){var n=h(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return d(this,e)});function y(){var e;return s(this,y),(e=c.apply(this,arguments)).content="",e}return r=y,i=[{key:"styles",get:function(){return[u.a,l]}}],(o=[{key:"render",value:function(){return Object(n.d)(p(),a(this.content))}}])&&f(r.prototype,o),i&&f(r,i),y}(n.a);m([Object(n.e)({type:String})],v.prototype,"content",void 0),v=m([Object(n.c)("section-content")],v)},355:function(e,t,r){"use strict";var n=r(2),o=r(54),i=n.b`:host{display:block}:host *{box-sizing:border-box}.grid-container--header{grid-template-rows:repeat(1,minmax(50px,auto));grid-template-areas:". header header ."}.section__header{grid-area:header;display:grid;grid-template-rows:minmax(45px,auto) minmax(45px,auto) auto;grid-template-areas:"subheadline" "headline" "text"}::slotted(h1),::slotted(h2){margin:0}::slotted(h1){grid-area:headline;display:flex;flex-direction:column;font-size:2em;letter-spacing:.067em}::slotted(h1::first-line),::slotted(h2){grid-area:subheadline;font-size:1.5em;color:#7b7b7b}::slotted(p){grid-area:text;font-size:1.4em}@media (min-width:768px){.grid-container--header{grid-template-areas:". header header header header header . . . . ."}}@media (min-width:1281px){.grid-container--header{grid-template-areas:". . header header header header . . . . ."}}`;function c(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n      <section class="grid-container grid-container--header">\n        <header class="section__header">\n          <slot name="subheadline"></slot>\n          <slot name="headline"></slot>\n          <slot name="text"></slot>\n        </header>\n      </section>\n    ']);return c=function(){return e},e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"==typeof Reflect?"undefined":d(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(g,e);var t,r,d,b,h=(t=g,function(){var e,r=s(t);if(p()){var n=s(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return l(this,e)});function g(){return a(this,g),h.apply(this,arguments)}return r=g,b=[{key:"styles",get:function(){return[o.a,i]}}],(d=[{key:"render",value:function(){return Object(n.d)(c())}}])&&u(r.prototype,d),b&&u(r,b),g}(n.a);h=b([Object(n.c)("section-header")],h)},356:function(e,t){e.exports="<h2 id=herzlich-willkommen>Herzlich Willkommen,</h2> <p>die zahnärztliche Praxisgemeinschaft Dr. Karina Hilgner &amp; Dr. Benjamin Vogt begrüßt Sie ganz herzlich auf ihrer Internetseite.</p> <p>Auf den folgenden Seiten möchten wir uns, unsere Praxis, unsere Philosophie sowie unser Team vorstellen.</p> <p>Hier haben Sie die Möglichkeit, sich vorab zu informieren oder zu einem späteren Zeitpunkt (z.B. Verhaltensmaßregeln, Adressen, Notdienst, aktuelle Angebote oder Anamnese-Bögen) nachzuschlagen.</p> <p>Sie haben noch Fragen oder möchten gerne detailliertere Informationen?</p> <p>Bitte kontaktieren Sie uns einfach telefonisch. Gerne beantworten wir Ihre Fragen in einem persönlichen Beratungstermin.</p> <p>Wir möchten, dass Sie sich wohlfühlen!</p> <blockquote> <p>In unserer Praxis setzen wir auf ein kompetentes Team und moderne Technik. Um Ihre Zähne ein Leben lang gesund zu halten bieten wir ein breites Spektrum an Behandlungen der Zahnheilkunde ab. Auf dieser Homepage können Sie uns kennen lernen und sich umfassend informieren.</p> </blockquote> "},384:function(e,t,r){"use strict";r.r(t),r.d(t,"ViewIndex",(function(){return B}));var n=r(2),o=r(352),i=r(54),c=n.b`:host{display:block}:host *{box-sizing:border-box}.grid-container--intro{grid-template-rows:repeat(5,minmax(50px,auto));grid-template-areas:". header header ." "picture picture picture ." ". times times ." ". phone phone ." ". address address."}h1,h2,h4{margin:0}h1{font-size:2em;letter-spacing:.067em}h1::first-line{font-size:.75em;letter-spacing:0;color:#7b7b7b}h2{font-size:1.5em;color:#7b7b7b}h4{margin-bottom:1em}.section__header{grid-area:header;display:flex;flex-direction:column;justify-content:flex-end}.picture{grid-area:picture}.address{position:relative;grid-area:address;padding:24px;font-style:normal;background-color:#f7f7f7;border-width:1px;border-style:solid;border-color:#00e;color:inherit;text-decoration:none}.phone{position:relative;grid-area:phone;padding:24px;background-color:var(--app-background-color-gray);border-width:1px;border-style:solid;border-color:var(--app-link-color);color:inherit;text-decoration:none}.phone .number{color:var(--app-link-color);text-decoration:underline}.address:before,.phone:before,.times:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}.times{position:relative;grid-area:times;padding:24px;background-color:var(--app-background-color-gray)}.times .time-row{display:flex;max-width:200px}.times .time-row time{margin-left:auto}@media (min-width:768px){.grid-container--intro{grid-template-rows:repeat(3,minmax(50px,auto));grid-template-areas:". header header header header header . . . . ." "picture picture picture picture picture picture picture picture picture . ." ". times times times phone phone phone address address address ."}}@media (min-width:1025px){.grid-container--intro{grid-template-rows:repeat(7,minmax(50px,auto));grid-template-areas:". header header header header header . . . . ." ". header header header header header . times times times ." "picture picture picture picture picture picture picture times times times ." "picture picture picture picture picture picture picture phone phone phone ." "picture picture picture picture picture picture picture phone phone phone ." "picture picture picture picture picture picture picture address address address ." "picture picture picture picture picture picture picture address address address ."}}@media (min-width:1281px){.grid-container--intro{grid-template-areas:". . header header header header . . . . ." ". . header header header header . times times times ." "picture picture picture picture picture picture picture times times times ." "picture picture picture picture picture picture picture phone phone phone ." "picture picture picture picture picture picture picture phone phone phone ." "picture picture picture picture picture picture picture address address address ." "picture picture picture picture picture picture picture address address address ."}}`,a=(r(355),n.b`:host{position:relative;display:flex;justify-content:center;align-items:center;max-height:380px;background-color:#d3d3d3;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-sizing:border-box}:host *{box-sizing:border-box}:host:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);border-width:1px;border-style:dashed;border-color:#242a49;z-index:-1}:host i{justify-content:center;align-items:center}picture{width:100%;height:auto;max-height:380px;background-color:#d3d3d3;overflow:hidden}img{display:block;width:100%;height:auto;margin:0 auto}@media (min-width:1281px){:host,picture{max-height:460px}}`);function u(){var e=d(["\n      <i>Kein Bild gefunden</i>\n      "]);return u=function(){return e},e}function l(){var e=d(['\n        <source\n          media="(min-width: 768px)"\n          srcset=',"/>\n        "]);return l=function(){return e},e}function p(){var e=d(['\n        <source media="(min-width: 1025px)"\n                srcset=',"/>\n        "]);return p=function(){return e},e}function s(){var e=d(["\n      <picture>\n        ","\n        ","\n        <img src="," alt="," />\n      </picture>"]);return s=function(){return e},e}function f(){var e=d(["\n      ","\n    "]);return f=function(){return e},e}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var j=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"==typeof Reflect?"undefined":v(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(d,e);var t,r,o,i,c=(t=d,function(){var e,r=y(t);if(g()){var n=y(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return h(this,e)});function d(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(e=c.call(this)).alt="",e.default="",e.tablet="",e.desktop="",e.webp="",e}return r=d,i=[{key:"styles",get:function(){return[a]}}],(o=[{key:"render",value:function(){return Object(n.d)(f(),this.default?Object(n.d)(s(),this.desktop?Object(n.d)(p(),this.desktop):"",this.tablet?Object(n.d)(l(),this.tablet):"",this.default,this.alt):Object(n.d)(u()))}}])&&b(r.prototype,o),i&&b(r,i),d}(n.a);function x(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n      <section class="grid-container grid-container--intro">\n        <header class="section__header">\n          <h1 slot="headline">Zahnarztpraxis<br>Dr. Karina Hilgner<br>Dr. Benjamin Vogt</h1>\n        </header>\n        \x3c!-- <header>\n          <h2>Zahnärzte</h2>\n          <h1>Dr. Karina Hilgner<br><span></span>Dr. Benjamin Vogt</h1>\n        </header> --\x3e\n        <app-picture class="picture"\n                     alt="Intro Bild"\n                     default="./images/index/intro.jpg"\n        >\n        </app-picture>\n        <div class="times">\n          <h4>Öffnungszeiten</h4>\n          <span class="time-row"><b>Mo-Do:</b><time>08:00 - 20:00 Uhr</time></span>\n          <span class="time-row"><b>Fr:</b><time>07:00 - 19:00 Uhr</time></span>\n        </div>\n        <a class="phone" href="tel:+49221795014" title="Rufen Sie einfach an mit einem Mausklick.">\n          <h4>Terminvereinbarungen</h4>\n          <p>Rufen Sie einfach an:<br>\n          <b class="number">0221 / 79 50 14</b></p>\n        </a>\n        <a class="address" href="./download/Zahnarztpraxis Dr. Hilgner & Dr. Vogt.vcf" title="Vistenkarte herunterladen." download>\n          <address>\n            <h4>Anschrift</h4>\n            Zahnarztpraxis<br>\n            Dr. Hilgner & Dr. Vogt<br>\n            Weilerweg 33<br>\n            50765 Köln\n          </address>\n        </a>\n      </section>\n    ']);return x=function(){return e},e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}j([Object(n.e)({type:String})],w.prototype,"alt",void 0),j([Object(n.e)({type:String})],w.prototype,"default",void 0),j([Object(n.e)({type:String})],w.prototype,"tablet",void 0),j([Object(n.e)({type:String})],w.prototype,"desktop",void 0),j([Object(n.e)({type:String})],w.prototype,"webp",void 0),w=j([Object(n.c)("app-picture")],w);var R=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"==typeof Reflect?"undefined":H(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(l,e);var t,r,o,a,u=(t=l,function(){var e,r=P(t);if(z()){var n=P(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return k(this,e)});function l(){var e;return O(this,l),(e=u.apply(this,arguments))._date=new Date,e._businessOpen=!1,e}return r=l,a=[{key:"styles",get:function(){return[i.a,c]}}],(o=[{key:"render",value:function(){return Object(n.d)(x())}},{key:"_checkOpen",value:function(){var e=this._date.getDay(),t=this._date.getHours(),r=this._date.getMinutes(),n=this._date.getSeconds();return console.log("".concat(e,":").concat(t,":").concat(r,":").concat(n)),6===e||7===e?(console.log("closed sa-so"),this._businessOpen=!1):e>=1&&e<=4&&t>=8||t<20?(console.log("open mo-do"),this._businessOpen=!0):5===e&&t>=7||t<19?(console.log("open fr"),this._businessOpen=!0):(console.log("closed ruhezeit"),this._businessOpen=!1)}}])&&I(r.prototype,o),a&&I(r,a),l}(n.a);R([Object(n.e)({type:Date})],_.prototype,"_date",void 0),R([Object(n.e)({type:Boolean})],_.prototype,"_businessOpen",void 0),_=R([Object(n.c)("section-intro")],_);r(353);var M=r(356),Z=r.n(M);function D(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n      <section-intro></section-intro>\n      <section-content content=","></section-content>\n    "]);return D=function(){return e},e}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function G(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var V=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"==typeof Reflect?"undefined":T(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(a,e);var t,r,o,i,c=(t=a,function(){var e,r=N(t);if(J()){var n=N(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return G(this,e)});function a(){return C(this,a),c.apply(this,arguments)}return r=a,(o=[{key:"render",value:function(){return Object(n.d)(D(),Z.a)}}])&&E(r.prototype,o),i&&E(r,i),a}(o.a);B=V([Object(n.c)("view-index")],B)}}]);