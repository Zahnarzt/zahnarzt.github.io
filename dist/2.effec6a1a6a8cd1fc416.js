(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{359:function(e,n,t){"use strict";t.d(n,"a",(function(){return B}));var r=t(31),i=t(357),o=t(48),l=(t(361),t(110)),u=t(24).a`:host{display:block}:host *{box-sizing:border-box}.grid-container--about{grid-template-rows:repeat(3,minmax(50px,auto));grid-template-areas:". header header ." ". box-one box-one ." ". picture picture picture"}h1,h2,h3,h4{margin:0}h1{font-size:2em;letter-spacing:.067em}h2{color:#7b7b7b}h3,h4{font-size:1em;margin-bottom:1em}ul{padding-inline-start:16px}ul li{padding:3px 0}header{grid-area:header;display:flex;flex-direction:column;justify-content:flex-end}.picture,slot[name=picture]::slotted(lazy-image){grid-area:picture}.picture:before,slot[name=picture]::slotted(lazy-image::before){content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);border-width:1px;border-style:dashed;border-color:#242a49;z-index:-1}.box{position:relative;padding:var(--app-padding-medium);color:inherit;background-color:var(--app-background-color-gray);border-width:1px;border-style:solid;border-color:#00e;text-decoration:none}.box:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}.box-one{grid-area:box-one}a{color:#00e;text-decoration:underline}@media(min-width:768px){.grid-container--about{grid-template-rows:repeat(5,minmax(50px,auto));grid-template-areas:". header header header header header . . . . ." ". header header header header header . . . . ." ". box-one box-one box-one picture picture picture picture picture picture picture" ". box-one box-one box-one picture picture picture picture picture picture picture" ". . . . picture picture picture picture picture picture picture"}}@media(min-width:1281px){.grid-container--about{grid-template-areas:". . header header header header . . . . ." ". . header header header header . . . . ." ". box-one box-one box-one picture picture picture picture picture picture picture" ". box-one box-one box-one picture picture picture picture picture picture picture" ". . . . picture picture picture picture picture picture picture"}}`;function a(){var e=m([""]);return a=function(){return e},e}function c(){var e=m([""]);return c=function(){return e},e}function s(){var e=m(['\n                    <li>\n                      <a href="#','">',"</a>\n                    </li>\n                  "]);return s=function(){return e},e}function f(){var e=m(['\n                <li>\n                  <a href="#','">',"</a>\n                </li>\n              "]);return f=function(){return e},e}function h(){var e=m(['<li><a href="#','">',"</a></li>"]);return h=function(){return e},e}function p(){var e=m(['\n                        <li><a href="#','">',"</a></li>\n                      "]);return p=function(){return e},e}function d(){var e=m(["\n                  <span>","</span>\n                  <ul>\n                    ","\n                  </ul>\n                "]);return d=function(){return e},e}function g(){var e=m(["\n              <li>\n              ","\n              </li>\n            "]);return g=function(){return e},e}function b(){var e=m(['\n              <li>\n                <a href="#','">',"</a>\n              </li>\n            "]);return b=function(){return e},e}function y(){var e=m(['\n      <section class="grid-container grid-container--about">\n        <header>\n          <h2>',"</h2>\n          <h1>",'</h1>\n        </header>\n        <div class="box box-one">\n          <h3>Inhalt</h3>\n          <ul>\n          \x3c!-- '," --\x3e\n          ","\n          \x3c!-- ",' --\x3e\n          </ul>\n        </div>\n        <slot name="picture"></slot>\n      </section>\n    ']);return y=function(){return e},e}function m(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function v(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function k(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,n){return(j=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function x(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=z(e);if(n){var i=z(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return w(this,t)}}function w(e,n){return!n||"object"!==O(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var P,Z=function(e,n,t,r){var i,o=arguments.length,l=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"===("undefined"==typeof Reflect?"undefined":O(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,r);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(l=(o<3?i(l):o>3?i(n,t,l):i(n,t))||l);return o>3&&l&&Object.defineProperty(n,t,l),l};P=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&j(e,n)}(m,e);var n,t,r,i=x(m);function m(){var e;return v(this,m),(e=i.apply(this,arguments)).header=[],e.articles=[],e}return n=m,r=[{key:"styles",get:function(){return[l.a,u]}}],(t=[{key:"render",value:function(){var e=this.header[0],n=this.header[1];return Object(o.b)(y(),e,n,this.articles.map((function(e){return Object(o.b)(b(),e.href,e.name)})),this.articles.map((function(e){return Object(o.b)(g(),e.subnavigation?Object(o.b)(d(),e.name,e.subnavigation.map((function(e){return Object(o.b)(p(),e.href,e.name)}))):Object(o.b)(h(),e.href,e.name))})),this.articles.map((function(e){return e.content?Object(o.b)(f(),e.href,e.name):e.subnavigation?e.subnavigation.map((function(e){return e.content?Object(o.b)(s(),e.href,e.name):Object(o.b)(c())})):Object(o.b)(a())})))}}])&&k(n.prototype,t),r&&k(n,r),m}(o.a),Z([Object(r.b)({type:Array})],P.prototype,"header",void 0),Z([Object(r.b)({type:Array})],P.prototype,"articles",void 0),Z([Object(r.b)({type:Function})],P.prototype,"handleClick",void 0),P=Z([Object(r.a)("section-hero")],P),t(358);function I(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function R(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,n){return(S=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function M(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=E(e);if(n){var i=E(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return C(this,t)}}function C(e,n){return!n||"object"!==D(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var _,H=function(e,n,t,r){var i,o=arguments.length,l=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"===("undefined"==typeof Reflect?"undefined":D(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,r);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(l=(o<3?i(l):o>3?i(n,t,l):i(n,t))||l);return o>3&&l&&Object.defineProperty(n,t,l),l},B=(_=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&S(e,n)}(o,e);var n,t,r,i=M(o);function o(){var e;return I(this,o),(e=i.apply(this,arguments)).header=[],e.articles=[],e}return n=o,(t=[{key:"_handleClickSubnav",value:function(e){var n;e.preventDefault();var t=e.composedPath()[0],r=null==t?void 0:t.getAttribute("href"),i=null==r?void 0:r.replace("#",""),o=null===(n=this.shadowRoot)||void 0===n?void 0:n.getElementById(i);if(o){var l=document.body.getBoundingClientRect().top,u=o.getBoundingClientRect().top-l-129;window.scrollTo({top:u,behavior:"smooth"})}}}])&&R(n.prototype,t),r&&R(n,r),o}(i.a),H([Object(r.b)({type:Array})],_.prototype,"header",void 0),H([Object(r.b)({type:Array})],_.prototype,"articles",void 0),_)},371:function(e,n){e.exports="<h2 id=prophylaxe>Prophylaxe</h2> <h3 id=zähne-gesund-erhalten>Zähne gesund erhalten</h3> <p><img src=/images/leistungen/prophylaxe.jpeg alt=Prophylaxe> Zu den Leistungen unserer Prophylaxe zählen:</p> <ul> <li>Professionelle Zahnreinigung (PZR)</li> <li>Airflow (Entfernen von Kaffee-, Tee- oder Nikotinbelägen)</li> <li>Training und Beratung zur häuslichen Mundhygiene (Zungenreinigung, Interdentalpflege u.v.m.)</li> <li>Bestimmung des individuellen Karies- + Parodontitisrisikos)</li> <li>Fissurenversiegelung</li> <li>Recall und Nachsorge nach Parodontalbehandlung oder Implantatversorgung</li> <li>Prothesenreinigung im praxiseigenen Labor</li> <li>Zahnschutzschienen zur Vermeidung von Sportverletzungen</li> <li>Bürstenbiopsie (Mundkrebsfrüherkennung)</li> </ul> "},372:function(e,n){e.exports="<h2 id=zahnerhaltung>Zahnerhaltung</h2> <p><img src=/images/leistungen/zahnerhaltung.jpeg alt=Zahnerhaltung> </p> <ul> <li>Inlays (laborgefertigte Einlagefüllungen aus Keramik,Gold oder Composit)</li> <li>morphologisch gestaltete Compositfüllungen</li> <li>Endodontie (Wurzelkanalfüllungen)</li> <li>Revision endodontisch versorgter Zähne</li> <li>Stabilisierung gelockerter Zähne durch interdentale Schienung</li> <li>Amalgamsanierung</li> </ul> "},373:function(e,n){e.exports="<h2 id=kinderbehandlung>Kinderbehandlung</h2> <p><img src=/images/leistungen/kinderbehandlung.jpeg alt=Kinderbehandlung> </p> <ul> <li>Prophylaxe (Fissurenversiegelung, Fluoridierung, Zahnreinigung, Plaqueanfärbung, Aufklärung und Motivation Mundhygiene)</li> <li>Füllungstherapie</li> <li>Elternberatung (Bißfehlstellungsprophylaxe, Ernährung)</li> <li>Milchzahnendodontie</li> <li>Zahnschutz Sport (Eishockey, Hockey, Boxen)</li> <li><a href=https://www.waizmanntabelle.de/kinder>https://www.waizmanntabelle.de/kinder</a></li> </ul> "},374:function(e,n){e.exports="<h2 id=zahnfleischbehandlung>Zahnfleischbehandlung</h2> <p><img src=/images/leistungen/zahnfleischbehandlung.jpeg alt=Zahnfleischbehandlung> </p> <ul> <li>Individuelle Parodontitisvorbehandlung</li> <li>Bestimmung besonders aggressiver Parodontitiskeime</li> <li>Konservativ (geschlossene Kürettage)</li> <li>Chirurgisch (offene Kürettage)</li> <li>Antibiotikatherapie (systemisch oder lokal)</li> <li>Nachsorge</li> </ul> "},375:function(e,n){e.exports="<h2 id=zahnärztliche-chirugie>Zahnärztliche Chirugie</h2> <ul> <li>Weisheitszahnentfernung</li> <li>Wurzelspitzenresektion</li> <li>Wurzelrestentfernung</li> <li>Zystektomie</li> <li>Zahnfleischmodellation</li> </ul> "},376:function(e,n){e.exports="<h2 id=behandlung-dysfunktioneller-erkrankungen>Behandlung dysfunktioneller Erkrankungen</h2> <ul> <li>CMD (Cranio-Mandibuläre-Dysfunktion) Überbegriff für strukturelle, funktionelle, biochemische und psychische Fehlregulation der Muskel- oder Kiefergelenkfunktion</li> <li>Reflexschiene</li> <li>Zentrikschiene</li> <li>Exzentrikschiene/Repositionsschiene</li> </ul> "},377:function(e,n){e.exports="<h2 id=zahnersatz>Zahnersatz</h2> <p><img src=/images/leistungen/zahnersatz.jpeg alt=Zahnersatz> </p> <ul> <li>Implantatprothetik (festsitzend und herausnehmbar) </li> <li>Teilkronen (Keramik, Gold)</li> <li>Kronen (Metallkeramik, Vollkeramik, Zirkon, CAD/CAM)</li> <li>Brücken (Metallkeramik, Vollkeramik, Zirkon, CAD/CAM)</li> <li>Teleskoptechnik (Teleskopprothesen und teleskopierende Brücken)</li> <li>Stiftaufbauten (gedreht, gegossen, glasfaserverstärkt)</li> <li>Geschiebetechnik</li> <li>Langzeitprovisorien</li> <li>Vollprothesen/Teilprothesen</li> <li>Marylandbrücke (Klebebrücke)</li> </ul> "},378:function(e,n){e.exports="<h2 id=ästhetische-zahnheilkunde>Ästhetische Zahnheilkunde</h2> <ul> <li>Metallfreie Kronen</li> <li>Bleaching (Aufhellen aller oder einzelner Zähne)</li> <li>Kosmetischer Lückenschluß (Bsp. Frontzahndiastema)</li> <li>Veneers (Zahnformkorrektur mittels keramischen Verblendschalen)</li> <li>Mehrfach geschichtete und farblich individuell angepasste Front- und Seitenzahnfüllungen</li> </ul> "},379:function(e,n){e.exports="<h2 id=implantologie>Implantologie</h2> <p><img src=/images/leistungen/implantatberatung.jpeg alt=Implantologie> </p> <ul> <li>Einzelzahnlücke</li> <li>Zahnloser Kiefer</li> <li>Prothesenintoleranz</li> <li>Einzelimplantate zur Verbesserung bestehender Prothesen</li> <li>Miniimplantate</li> </ul> "},390:function(e,n,t){"use strict";t.r(n),t.d(n,"ViewServices",(function(){return B}));var r=t(48),i=t(31),o=t(359),l=t(371),u=t.n(l),a=t(372),c=t.n(a),s=t(373),f=t.n(s),h=t(374),p=t.n(h),d=t(375),g=t.n(d),b=t(376),y=t.n(b),m=t(377),v=t.n(m),k=t(378),j=t.n(k),x=t(379),w=t.n(x);function z(){var e=R([""]);return z=function(){return e},e}function O(){var e=R([""]);return O=function(){return e},e}function P(){var e=R(["\n                <section-content id="," content=","></section-content>\n              "]);return P=function(){return e},e}function Z(){var e=R(["\n            <section-content id="," content=","></section-content>\n          "]);return Z=function(){return e},e}function I(){var e=R(["\n      <section-hero\n        .header=","\n        .articles=",'\n        @click="','"\n      >\n        <lazy-image slot="picture"\n                    class="picture small border"\n                    src="./images/leistungen/leistungen-672.jpeg"\n                    sizes="(min-width: 1025px) 63vw, (min-width: 768px) 87vw, 92vw"\n                    srcset="./images/leistungen/leistungen-296.jpeg 296w, ./images/leistungen/leistungen-320.jpeg 320w, ./images/leistungen/leistungen-390.jpeg 390w, ./images/leistungen/leistungen-672.jpeg 672w, ./images/leistungen/leistungen-794.jpeg 794w, ./images/leistungen/leistungen-1028.jpeg 1028w, ./images/leistungen/leistungen-1600.jpeg 1600w"\n                    alt="Dr. Hilgner und Dr.Vogt">\n        </lazy-image>\n      </section-hero>\n      ',"\n    "]);return I=function(){return e},e}function R(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function S(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,n){return(M=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function C(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=D(e);if(n){var i=D(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return E(this,t)}}function E(e,n){return!n||"object"!==_(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var H=function(e,n,t,r){var i,o=arguments.length,l=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"===("undefined"==typeof Reflect?"undefined":_(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,r);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(l=(o<3?i(l):o>3?i(n,t,l):i(n,t))||l);return o>3&&l&&Object.defineProperty(n,t,l),l},B=function(){var e=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&M(e,n)}(l,e);var n,t,i,o=C(l);function l(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),(e=o.call(this)).header=["Unser Praxisspektrum","Leistungen"],e.articles=[{href:"prophylaxe",name:"Prophylaxe",content:u.a},{href:"zahnerhaltung",name:"Zahnerhaltung",content:c.a},{href:"kinderbehandlung",name:"Kinderbehandlung",content:f.a},{href:"zahnfleischbehandlung",name:"Zahnfleischbehandlung",content:p.a},{href:"chirugie",name:"Zahnärztliche Chirugie",content:g.a},{href:"dysfunktional",name:"Behandlung dysfunktioneller Erkrankungen",content:y.a},{href:"zahnersatz",name:"Zahnersatz",content:v.a},{href:"aesthetisch",name:"Ästhetische Zahnheilkunde",content:j.a},{href:"implantologie",name:"Implantologie",content:w.a}],e}return n=l,(t=[{key:"render",value:function(){return Object(r.b)(I(),this.header,this.articles,this._handleClickSubnav,this.articles.map((function(e){return e.content?Object(r.b)(Z(),e.href,e.content):e.subnavigation?e.subnavigation.map((function(e){return e.content?Object(r.b)(P(),e.href,e.content):Object(r.b)(O())})):Object(r.b)(z())})))}}])&&S(n.prototype,t),i&&S(n,i),l}(o.a);return e=H([Object(i.a)("view-services")],e)}()}}]);