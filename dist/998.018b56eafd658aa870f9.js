(self.webpackChunklit_element_starter_kit=self.webpackChunklit_element_starter_kit||[]).push([[998],{9471:(e,t,n)=>{"use strict";var r=n(7599),i=n(5701),o=n(6767),u=n(5362);function c(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=2;function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var i=b(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(o,e);var t,n,r,i=p(o);function o(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=i.call(this,e)).it=u.Ld,e.type!==l)throw Error(t.constructor.directiveName+"() can only be used in child bindings");return g(t)}return t=o,(n=[{key:"render",value:function(e){if(e===u.Ld||null==e)return this.vt=void 0,this.it=e;if(e===u.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.vt;this.it=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}])&&d(t.prototype,n),r&&d(t,r),o}(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"_$AT",value:function(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}},{key:"_$AS",value:function(e,t){return this.update(e,t)}},{key:"update",value:function(e,t){return this.render.apply(this,c(t))}},{key:"_$AU",get:function(){return this._$AM._$AU}}])&&s(t.prototype,n),r&&s(t,r),e}());y.directiveName="unsafeHTML",y.resultType=1;var m=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return{_$litDirective$:e,values:n}}}(y),w=n(5764);const v=n(2207).iv`:host{display:block;margin:64px 0;box-sizing:border-box}:host *{box-sizing:border-box}.grid-container--content{grid-template-areas:"sidebar article article ."}.background{position:relative;grid-row-start:sidebar;grid-row-end:article;grid-column-start:sidebar;grid-column-end:article;background-color:#f7f7f7}.background:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}article{position:relative;grid-area:article;padding:36px 36px 36px 0;font-size:1.1em}h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child,h6:first-child{margin-top:0}ol,ul{padding-inline-start:16px}ol li,ul li{padding:3px 0}img{max-width:100%;height:auto}blockquote{position:relative;position:relative;padding:8px 8px 8px 32px;margin:32px 0 0 0;background-color:#e3ecfe;z-index:1}blockquote:before{content:"";position:absolute;top:0;bottom:0;left:0;width:16px;background-color:transparent;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:0 0;z-index:0}blockquote p{margin:.5em 0}.download{display:flex;padding:24px 0;color:inherit;text-decoration:none}.download p{margin:0}.download img{min-width:65px}.download__text{margin-inline-start:1em}.download__link{color:var(--app-link-color);text-decoration:underline}@media(min-width:768px){.grid-container--content{grid-template-areas:"sidebar article article article article article article article article article ."}}@media(min-width:1025px){.grid-container--content{grid-template-areas:"sidebar article article article article article article article article . ."}}@media(min-width:1281px){.grid-container--content{grid-template-areas:"sidebar sidebar article article article article article article . . ."}}`;function z(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n      <div class="grid-container grid-container--content">\n        <div class="background"></div>\n        <article>\n          ',"\n        </article>\n      </div>\n    "]);return z=function(){return e},e}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var i=O(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return D(this,n)}}function D(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var P=function(e,t,n,r){var i,o=arguments.length,u=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":x(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(u=(o<3?i(u):o>3?i(t,n,u):i(t,n))||u);return o>3&&u&&Object.defineProperty(t,n,u),u},R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(u,e);var t,n,i,o=j(u);function u(){var e;return I(this,u),(e=o.apply(this,arguments)).content="",e}return t=u,i=[{key:"styles",get:function(){return[w.Z,v]}}],(n=[{key:"render",value:function(){return(0,r.dy)(z(),m(this.content))}}])&&k(t.prototype,n),i&&k(t,i),u}(r.oi);P([(0,i.C)({type:String})],R.prototype,"content",void 0),R=P([(0,o.M)("section-content")],R)},2743:(e,t,n)=>{"use strict";var r=n(7599),i=n(6767),o=n(5764);const u=n(2207).iv`:host{display:block}:host *{box-sizing:border-box}.grid-container--header{grid-template-rows:repeat(1,minmax(50px,auto));grid-template-areas:". header header ."}.section__header{grid-area:header;display:grid;grid-template-rows:minmax(45px,auto) minmax(45px,auto) auto;grid-template-areas:"subheadline" "headline" "text"}::slotted(h1),::slotted(h2){margin:0}::slotted(h1){grid-area:headline;display:flex;flex-direction:column;font-size:2em;letter-spacing:.067em}::slotted(h1:first-line),::slotted(h2){grid-area:subheadline;font-size:1.5em;color:#7b7b7b}::slotted(p){grid-area:text;font-size:1.4em}@media(min-width:768px){.grid-container--header{grid-template-areas:". header header header header header . . . . ."}}@media(min-width:1281px){.grid-container--header{grid-template-areas:". . header header header header . . . . ."}}`;function c(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n      <section class="grid-container grid-container--header">\n        <header class="section__header">\n          <slot name="subheadline"></slot>\n          <slot name="headline"></slot>\n          <slot name="text"></slot>\n        </header>\n      </section>\n    ']);return c=function(){return e},e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=function(e,t,n,r){var i,o=arguments.length,u=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":p(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(u=(o<3?i(u):o>3?i(t,n,u):i(t,n))||u);return o>3&&u&&Object.defineProperty(t,n,u),u},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(h,e);var t,n,i,d=f(h);function h(){return a(this,h),d.apply(this,arguments)}return t=h,i=[{key:"styles",get:function(){return[o.Z,u]}}],(n=[{key:"render",value:function(){return(0,r.dy)(c())}}])&&s(t.prototype,n),i&&s(t,i),h}(r.oi);b=g([(0,i.M)("section-header")],b)},8998:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ViewImprint:()=>y});var r=n(7599),i=n(6767),o=n(5347),u=(n(2743),n(9471),n(8153)),c=n.n(u);function a(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n      <section-header>\n        <h1 slot="headline">Impressum</h1>\n      </section-header>\n      <section-content id="impressum" content=',"></section-content>\n    "]);return a=function(){return e},e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var i=p(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=function(e,t,n,r){var i,o=arguments.length,u=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":g(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(u=(o<3?i(u):o>3?i(t,n,u):i(t,n))||u);return o>3&&u&&Object.defineProperty(t,n,u),u},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(u,e);var t,n,i,o=d(u);function u(){return s(this,u),o.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){return(0,r.dy)(a(),c())}}])&&l(t.prototype,n),i&&l(t,i),u}(o.X);y=b([(0,i.M)("view-imprint")],y)},5347:(e,t,n)=>{"use strict";n.d(t,{X:()=>h});var r=n(7599),i=n(5701);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e,t,n,r){var i,o=arguments.length,u=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":f(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(u=(o<3?i(u):o>3?i(t,n,u):i(t,n))||u);return o>3&&u&&Object.defineProperty(t,n,u),u},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(s,e);var t,n,r,i=a(s);function s(){var e;return o(this,s),(e=i.apply(this,arguments)).active=!1,e}return t=s,(n=[{key:"shouldUpdate",value:function(){return this.active}}])&&u(t.prototype,n),r&&u(t,r),s}(r.oi);d([(0,i.C)({type:Boolean})],h.prototype,"active",void 0)},8153:e=>{e.exports="<p><strong>Zahnärztliche Praxisgemeinschaft</strong><br><strong>Dr. Karina Hilgner &amp; Dr. Benjamin Vogt</strong><br>Weilerweg 33<br>50765 Köln </p> <p><strong>Telefon:</strong><br>+49 (221) 79 50 14 </p> <p><strong>Telefax:</strong><br>+49 (221) 790 25 95 </p> <p><strong>E-Mail:</strong><br><a href=mailto:zahnaerzte.weiler@gmail.com>zahnaerzte.weiler@gmail.com</a> </p> <p><strong>Internet:</strong><br><a href=http://www.zahnaerzte-weiler.de>www.zahnaerzte-weiler.de</a> </p> <p><strong>Zuständige Kammer:</strong><br>Zahnärztekammer Nordrhein<br>Emanuel-Leutze-Str. 8<br>40547 Düsseldorf </p> <p><strong>Zuständige kassenärztliche Vereinigung:</strong><br>Kassenzahnärztliche Vereinigung Nordrhein<br>Lindemannstr 34-42<br>40237 Düsseldorf </p> <p><strong>Berufsbezeichnung:</strong><br>Zahnarzt, verliehen in der Bundesrepublik Deutschland. Die Befugnis zum Führen der Berufsbezeichnung &quot;Zahnarzt&quot; wurde in der Bundesrepublik Deutschland verliehen. Es gelten folgende gesetzliche Regelungen: Berufsordnung der Zahnärzte, Nordrhein, Heilkundegesetz, Zahnheilkundegesetz, GOZ zugänglich unter <a href=http://www.zaek-nr.de>www.zaek-nr.de</a></p> <p><strong>Berufsrechtliche Regelungen:</strong> </p> <ul> <li>Zahnheilkundegesetz</li> <li>Heilberufe-Kammergesetz</li> <li>Gebührenordnung für Zahnärzte</li> <li>Berufsordnung für Zahnärzte</li> </ul> <p><strong>Haftungshinweis:</strong><br>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p> <p><strong>Datenschutz:</strong><br>Datenschutzerklärung </p> <p>Der Schutz und die Sicherheit von persönlichen Daten hat bei uns eine hohe Priorität. Daher halten wir uns strikt an die Regeln des deutschen Bundesdatenschutzgesetzes (BDSG). Nachfolgend werden Sie darüber informiert, welche Art von Daten erfasst und zu welchem Zweck sie erhoben werden:</p> <ol> <li>Datenübermittlung /Datenprotokollierung<br>Beim Besuch dieser Seite verzeichnet der Web-Server automatisch Log-Files, die keiner bestimmten Person zugeordnet werden können. Diese Daten beinhalten z. B. den Browsertyp und -version, verwendetes Betriebssystem, Referrer URL (die zuvor besuchte Seite), IP-Adresse des anfragenden Rechners, Zugriffsdatum und -uhrzeit der Serveranfrage und die Dateianfrage des Client (Dateiname und URL). Diese Daten werden nur zum Zweck der statistischen Auswertung gesammelt. Eine Weitergabe an Dritte, zu kommerziellen oder nichtkommerziellen Zwecken, findet nicht statt.</li> <li>Nutzung persönlicher Daten<br>Persönliche Daten werden nur erhoben oder verarbeitet, wenn Sie diese Angaben freiwillig, z.B. im Rahmen einer Anfrage mitteilen. Sofern keine erforderlichen Gründe im Zusammenhang mit einer Geschäftsabwicklung bestehen, können Sie jederzeit die zuvor erteilte Genehmigung Ihrer persönlichen Datenspeicherung mit sofortiger Wirkung schriftlich (z.B. per E-Mail oder per Fax) widerrufen. Ihre Daten werden nicht an Dritte weitergeben, es sei denn, eine Weitergabe ist aufgrund gesetzlicher Vorschriften erforderlich.</li> <li>Auskunft, Änderung und Löschung Ihrer Daten<br>Gemäß geltendem Recht können Sie jederzeit bei uns schriftlich nachfragen, ob und welche personenbezogenen Daten bei uns über Sie gespeichert sind. Eine entsprechende Mitteilung hierzu erhalten Sie umgehend.</li> <li>Sicherheit Ihrer Daten<br>Ihre uns zur Verfügung gestellten persönlichen Daten werden durch Ergreifung aller technischen sowie organisatorischen Sicherheitsmaßnahmen so gesichert, dass sie für den Zugriff unberechtigter Dritter unzugänglich sind. Bei Versendung von sehr sensiblen Daten oder Informationen ist es empfehlenswert, den Postweg zu nutzen, da eine vollständige Datensicherheit per E-Mail nicht gewährleistet werden kann.</li> <li>Hinweis zu Google Analytics<br>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“, d. h. Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung diese Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.</li> <li>Cookies<br>Auf einigen unserer Seiten verwenden wir sog. &quot;Session-Cookies&quot;, um Ihnen die Nutzung unserer Webseiten zu erleichtern. Dabei handelt es sich um kleine Textdateien, die nur für die Dauer Ihres Besuchs unserer Webseite auf Ihrer Festplatte hinterlegt und abhängig von der Einstellung Ihres Browser-Programms beim Beenden des Browsers wieder gelöscht werden. Diese Cookies rufen keine auf Ihrer Festplatte über Sie gespeicherten Informationen ab und beeinträchtigen nicht Ihren PC oder ihre Dateien. Die meisten Browser sind so eingestellt, dass sie Cookies automatisch akzeptieren. Sie können das Speichern von Cookies jedoch deaktivieren oder ihren Browser so einstellen, dass er Sie auf die Sendung von Cookies hinweist.</li> <li>Änderungen dieser Datenschutzbestimmungen<br>Wir werden diese Richtlinien zum Schutz Ihrer persönlichen Daten von Zeit zu Zeit aktualisieren. Sie sollten sich diese Richtlinien gelegentlich ansehen, um auf dem Laufenden darüber zu bleiben, wie wir Ihre Daten schützen und die Inhalte unserer Website stetig verbessern. Sollten wir wesentliche Änderungen bei der Sammlung, der Nutzung und/oder der Weitergabe der uns von Ihnen zur Verfügung gestellten personenbezogenen Daten vornehmen, werden wir Sie durch einen eindeutigen und gut sichtbaren Hinweis auf der Website darauf aufmerksam machen. Mit der Nutzung der Webseite erklären Sie sich mit den Bedingungen dieser Richtlinien zum Schutz persönlicher Daten einverstanden.</li> </ol> <p>Bei Fragen zu diesen Datenschutzbestimmungen wenden Sie sich bitte über unsere Kontakt-Seite an uns.</p> "}}]);