(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{352:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(2);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":f(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(d,e);var t,n,r,f,p=(t=d,function(){var e,n=u(t);if(a()){var r=u(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return c(this,e)});function d(){var e;return o(this,d),(e=p.apply(this,arguments)).active=!1,e}return n=d,(r=[{key:"shouldUpdate",value:function(){return this.active}}])&&i(n.prototype,r),f&&i(n,f),d}(r.a);p([Object(r.e)({type:Boolean})],d.prototype,"active",void 0)},353:function(e,t,n){"use strict";var r=n(2),o=n(12),i=n(32),c=new WeakMap,a=Object(i.b)((function(e){return function(t){if(!(t instanceof i.a))throw new Error("unsafeHTML can only be used in text bindings");var n=c.get(t);if(void 0===n||!Object(o.f)(e)||e!==n.value||t.value!==n.fragment){var r=document.createElement("template");r.innerHTML=e;var a=document.importNode(r.content,!0);t.setValue(a),c.set(t,{value:e,fragment:a})}}})),u=n(54),l=r.b`:host{display:block;margin:64px 0;box-sizing:border-box}:host *{box-sizing:border-box}.grid-container--content{grid-template-areas:"sidebar article article ."}.background{position:relative;grid-row-start:sidebar;grid-row-end:article;grid-column-start:sidebar;grid-column-end:article;background-color:#f7f7f7}.background:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}article{position:relative;grid-area:article;padding:36px 36px 36px 0;font-size:1.1rem}ol,ul{padding-inline-start:16px}ol li,ul li{padding:3px 0}img{max-width:100%;height:auto}blockquote{position:relative;position:relative;padding:8px 8px 8px 32px;margin:32px 0 0 0;background-color:#faebd7;z-index:1}blockquote:before{content:"";position:absolute;top:0;bottom:0;left:0;width:16px;background-color:transparent;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:0 0;z-index:0}blockquote p{margin:.5em 0}.download{display:flex;padding:24px 0;color:inherit;text-decoration:none}.download p{margin:0}.download__text{margin-inline-start:1em}.download__link{color:var(--app-link-color);text-decoration:underline}@media (min-width:768px){.grid-container--content{grid-template-areas:"sidebar article article article article article article article article article ."}}@media (min-width:1025px){.grid-container--content{grid-template-areas:"sidebar article article article article article article article article . ."}}@media (min-width:1281px){.grid-container--content{grid-template-areas:"sidebar sidebar article article article article article article . . ."}}`;function f(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n      <div class="grid-container grid-container--content">\n        <div class="background"></div>\n        <article>\n          ',"\n        </article>\n      </div>\n    "]);return f=function(){return e},e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":h(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(h,e);var t,n,o,i,c=(t=h,function(){var e,n=y(t);if(b()){var r=y(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return s(this,e)});function h(){var e;return p(this,h),(e=c.apply(this,arguments)).content="",e}return n=h,i=[{key:"styles",get:function(){return[u.a,l]}}],(o=[{key:"render",value:function(){return Object(r.d)(f(),a(this.content))}}])&&d(n.prototype,o),i&&d(n,i),h}(r.a);m([Object(r.e)({type:String})],v.prototype,"content",void 0),v=m([Object(r.c)("section-content")],v)},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return H}));var r=n(2),o=n(352),i=n(54),c=r.b`:host{display:block}:host *{box-sizing:border-box}.grid-container--about{grid-template-rows:repeat(3,minmax(50px,auto));grid-template-areas:". header header ." ". box-one box-one ." ". picture picture picture"}h1,h2,h4{margin:0}h1{display:flex;flex-direction:column;font-size:2em;letter-spacing:.067em}h1 span{margin-right:auto}h2{color:#7b7b7b}h4{margin-bottom:1em}ul{padding-inline-start:16px}ul li{padding:3px 0}header{grid-area:header;display:flex;flex-direction:column;justify-content:flex-end}.picture{grid-area:picture}.picture:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);border-width:1px;border-style:dashed;border-color:#242a49;z-index:-1}.box{position:relative;padding:var(--app-padding-medium);color:inherit;background-color:var(--app-background-color-gray);border-width:1px;border-style:solid;border-color:#00e;text-decoration:none}.box:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}.box-one{grid-area:box-one}a{color:#00e;text-decoration:underline}@media (min-width:768px){.grid-container--about{grid-template-rows:repeat(5,minmax(50px,auto));grid-template-areas:". header header header header header . . . . ." ". header header header header header . . . . ." ". box-one box-one box-one picture picture picture picture picture picture picture" ". box-one box-one box-one picture picture picture picture picture picture picture" ". . . . picture picture picture picture picture picture picture"}}@media (min-width:1281px){.grid-container--about{grid-template-areas:". . header header header header . . . . ." ". . header header header header . . . . ." ". box-one box-one box-one picture picture picture picture picture picture picture" ". box-one box-one box-one picture picture picture picture picture picture picture" ". . . . picture picture picture picture picture picture picture"}}`;function a(){var e=l(['\n              <li>\n                <a href="#','">',"</a>\n              </li>\n            "]);return a=function(){return e},e}function u(){var e=l(['\n      <section class="grid-container grid-container--about">\n        <header>\n          <h2>',"</h2>\n          <h1>",'</h1>\n        </header>\n        <div class="box box-one">\n          <h4>Inhalt</h4>\n          <ul>\n          ','\n          </ul>\n        </div>\n        <app-picture class="picture"\n                     alt="Intro Bild"\n                     default="./images/index/intro.jpg"\n        >\n        </app-picture>\n      </section>\n    ']);return u=function(){return e},e}function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var h=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":g(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(h,e);var t,n,o,l,g=(t=h,function(){var e,n=b(t);if(s()){var r=b(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return d(this,e)});function h(){var e;return f(this,h),(e=g.apply(this,arguments)).header=[],e.articles=[],e}return n=h,l=[{key:"styles",get:function(){return[i.a,c]}}],(o=[{key:"render",value:function(){var e=this.header[0],t=this.header[1];return Object(r.d)(u(),e,t,this.articles.map((function(e){return Object(r.d)(a(),e.href,e.name)})))}}])&&p(n.prototype,o),l&&p(n,l),h}(r.a);h([Object(r.e)({type:Array})],m.prototype,"header",void 0),h([Object(r.e)({type:Array})],m.prototype,"articles",void 0),h([Object(r.e)({type:Function})],m.prototype,"handleClick",void 0),m=h([Object(r.c)("section-hero")],m);n(353);function v(){var e=I(["\n         <section-content id="," content=","></section-content>\n        "]);return v=function(){return e},e}function w(){var e=I(["\n      <section-hero\n        .header=","\n        .articles=",'\n        @click="','"\n      >\n      </section-hero>\n      ',"\n    "]);return w=function(){return e},e}function I(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var R=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":Z(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(a,e);var t,n,o,i,c=(t=a,function(){var e,n=z(t);if(P()){var r=z(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return O(this,e)});function a(){var e;return j(this,a),(e=c.apply(this,arguments)).header=[],e.articles=[],e}return n=a,(o=[{key:"render",value:function(){return Object(r.d)(w(),this.header,this.articles,this._handleClickSubnav,this.articles.map((function(e){return Object(r.d)(v(),e.href,e.content)})))}},{key:"_handleClickSubnav",value:function(e){var t;e.preventDefault();var n=e.composedPath()[0],r=(null==n?void 0:n.getAttribute("href")).replace("#",""),o=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById(r);if(o){var i=document.body.getBoundingClientRect().top,c=o.getBoundingClientRect().top-i-129;window.scrollTo({top:c,behavior:"smooth"})}}}])&&x(n.prototype,o),i&&x(n,i),a}(o.a);R([Object(r.e)({type:Array})],H.prototype,"header",void 0),R([Object(r.e)({type:Array})],H.prototype,"articles",void 0)},371:function(e,t){e.exports='<h2 id=formulare-zum-download>Formulare zum Download</h2> <a class=download href=./download/Anamnesebogen.pdf target=_blank> <p> <img src=/images/icons/pdf.svg alt="Pdf Icon"></p> <div class=download__text> <b>Anamnesebogen</b><br> <span class=download__link>Anamnesebogen.pdf</span><br> PDF-Dokument [641.4 KB] </div> </a> <a class=download href=./download/Verhaltensregeln-nach-der-PZR.pdf target=_blank> <p> <img src=/images/icons/pdf.svg alt="Pdf Icon"></p> <div class=download__text> <b>Verhaltensempfehlung nach einer Professionellen Zahnreinigung</b><br> <span class=download__link>Verhaltensregeln-nach-der-PZR.pdf</span><br> PDF-Dokument [56.7 KB] </div> </a> <a class=download href=./download/Nach-einer-Zahnentfernung-oder-einer-Operation.pdf target=_blank> <p> <img src=/images/icons/pdf.svg alt="Pdf Icon"></p> <div class=download__text> <b>Verhaltensempfehlung nach einer Zahnentfernung oder Operation</b><br> <span class=download__link>Nach-einer-Zahnentfernung-oder-einer-Operation.pdf</span><br> PDF-Dokument [29.2 KB] </div> </a> '},372:function(e,t){e.exports="<h2 id=zahnzusatzversicherung>Zahnzusatzversicherung</h2> <p>Unter folgenden Link finden Sie eine Vergleichsrechner für Zusatzversicherungen</p> <p><a href=https://www.waizmanntabelle.de target=_blank>https://www.waizmanntabelle.de</a></p> "},379:function(e,t,n){"use strict";n.r(t),n.d(t,"ViewInformations",(function(){return y}));var r=n(2),o=n(354),i=n(371),c=n.n(i),a=n(372),u=n.n(a);function l(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(r,e);var t,n=(t=r,function(){var e,n=p(t);if(f()){var r=p(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return l(this,e)});function r(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(e=n.call(this)).header=["Praktische Hinweise","Informationen"],e.articles=[{href:"formulare",name:"Formulare zum Download",content:c.a},{href:"zahnzusatzversicherung",name:"Zahnzusatzversicherung",content:u.a}],e}return r}(o.a);y=b([Object(r.c)("view-informations")],y)}}]);