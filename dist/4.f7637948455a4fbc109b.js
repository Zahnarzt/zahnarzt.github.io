(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{359:function(e,n,t){"use strict";t.d(n,"a",(function(){return _}));var r=t(31),i=t(357),o=t(48),a=(t(361),t(110)),u=t(24).a`:host{display:block}:host *{box-sizing:border-box}.grid-container--about{grid-template-rows:repeat(3,minmax(50px,auto));grid-template-areas:". header header ." ". box-one box-one ." ". picture picture picture"}h1,h2,h3,h4{margin:0}h1{font-size:2em;letter-spacing:.067em}h2{color:#7b7b7b}h3,h4{font-size:1em;margin-bottom:1em}ul{padding-inline-start:16px}ul li{padding:3px 0}header{grid-area:header;display:flex;flex-direction:column;justify-content:flex-end}.picture,slot[name=picture]::slotted(lazy-image){grid-area:picture}.picture:before,slot[name=picture]::slotted(lazy-image::before){content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);border-width:1px;border-style:dashed;border-color:#242a49;z-index:-1}.box{position:relative;padding:var(--app-padding-medium);color:inherit;background-color:var(--app-background-color-gray);border-width:1px;border-style:solid;border-color:#00e;text-decoration:none}.box:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}.box-one{grid-area:box-one}a{color:#00e;text-decoration:underline}@media(min-width:768px){.grid-container--about{grid-template-rows:repeat(5,minmax(50px,auto));grid-template-areas:". header header header header header . . . . ." ". header header header header header . . . . ." ". box-one box-one box-one picture picture picture picture picture picture picture" ". box-one box-one box-one picture picture picture picture picture picture picture" ". . . . picture picture picture picture picture picture picture"}}@media(min-width:1281px){.grid-container--about{grid-template-areas:". . header header header header . . . . ." ". . header header header header . . . . ." ". box-one box-one box-one picture picture picture picture picture picture picture" ". box-one box-one box-one picture picture picture picture picture picture picture" ". . . . picture picture picture picture picture picture picture"}}`;function c(){var e=y([""]);return c=function(){return e},e}function l(){var e=y([""]);return l=function(){return e},e}function s(){var e=y(['\n                    <li>\n                      <a href="#','">',"</a>\n                    </li>\n                  "]);return s=function(){return e},e}function p(){var e=y(['\n                <li>\n                  <a href="#','">',"</a>\n                </li>\n              "]);return p=function(){return e},e}function d(){var e=y(['<li><a href="#','">',"</a></li>"]);return d=function(){return e},e}function f(){var e=y(['\n                        <li><a href="#','">',"</a></li>\n                      "]);return f=function(){return e},e}function h(){var e=y(["\n                  <span>","</span>\n                  <ul>\n                    ","\n                  </ul>\n                "]);return h=function(){return e},e}function b(){var e=y(["\n              <li>\n              ","\n              </li>\n            "]);return b=function(){return e},e}function g(){var e=y(['\n              <li>\n                <a href="#','">',"</a>\n              </li>\n            "]);return g=function(){return e},e}function m(){var e=y(['\n      <section class="grid-container grid-container--about">\n        <header>\n          <h2>',"</h2>\n          <h1>",'</h1>\n        </header>\n        <div class="box box-one">\n          <h3>Inhalt</h3>\n          <ul>\n          \x3c!-- '," --\x3e\n          ","\n          \x3c!-- ",' --\x3e\n          </ul>\n        </div>\n        <slot name="picture"></slot>\n      </section>\n    ']);return m=function(){return e},e}function y(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function v(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function w(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,n){return(z=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function j(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=O(e);if(n){var i=O(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return x(this,t)}}function x(e,n){return!n||"object"!==k(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var P,I=function(e,n,t,r){var i,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"===("undefined"==typeof Reflect?"undefined":k(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(a=(o<3?i(a):o>3?i(n,t,a):i(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a};P=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&z(e,n)}(y,e);var n,t,r,i=j(y);function y(){var e;return v(this,y),(e=i.apply(this,arguments)).header=[],e.articles=[],e}return n=y,r=[{key:"styles",get:function(){return[a.a,u]}}],(t=[{key:"render",value:function(){var e=this.header[0],n=this.header[1];return Object(o.b)(m(),e,n,this.articles.map((function(e){return Object(o.b)(g(),e.href,e.name)})),this.articles.map((function(e){return Object(o.b)(b(),e.subnavigation?Object(o.b)(h(),e.name,e.subnavigation.map((function(e){return Object(o.b)(f(),e.href,e.name)}))):Object(o.b)(d(),e.href,e.name))})),this.articles.map((function(e){return e.content?Object(o.b)(p(),e.href,e.name):e.subnavigation?e.subnavigation.map((function(e){return e.content?Object(o.b)(s(),e.href,e.name):Object(o.b)(l())})):Object(o.b)(c())})))}}])&&w(n.prototype,t),r&&w(n,r),y}(o.a),I([Object(r.b)({type:Array})],P.prototype,"header",void 0),I([Object(r.b)({type:Array})],P.prototype,"articles",void 0),I([Object(r.b)({type:Function})],P.prototype,"handleClick",void 0),P=I([Object(r.a)("section-hero")],P),t(358);function S(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function A(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,n){return(R=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function D(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=Z(e);if(n){var i=Z(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return C(this,t)}}function C(e,n){return!n||"object"!==H(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var M,W=function(e,n,t,r){var i,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"===("undefined"==typeof Reflect?"undefined":H(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(a=(o<3?i(a):o>3?i(n,t,a):i(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a},_=(M=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&R(e,n)}(o,e);var n,t,r,i=D(o);function o(){var e;return S(this,o),(e=i.apply(this,arguments)).header=[],e.articles=[],e}return n=o,(t=[{key:"_handleClickSubnav",value:function(e){var n;e.preventDefault();var t=e.composedPath()[0],r=null==t?void 0:t.getAttribute("href"),i=null==r?void 0:r.replace("#",""),o=null===(n=this.shadowRoot)||void 0===n?void 0:n.getElementById(i);if(o){var a=document.body.getBoundingClientRect().top,u=o.getBoundingClientRect().top-a-129;window.scrollTo({top:u,behavior:"smooth"})}}}])&&A(n.prototype,t),r&&A(n,r),o}(i.a),W([Object(r.b)({type:Array})],M.prototype,"header",void 0),W([Object(r.b)({type:Array})],M.prototype,"articles",void 0),M)},382:function(e,n){e.exports='<script type=application/ld+json> {\n  "@context" : "https://schema.org/",\n  "@type" : "JobPosting",\n  "title" : "Zahnmedizinische Fachangestellte",\n  "description" : "<p>Wir suchen für die Anmeldung/Rezeption (keine Abrechnung) halbtags eine zuverlässige und freundliche ZFA (m/w/d).</p><p>Können Sie Geduld am Telefon aufbringen, sind Sie organisiert und haben Verständnis für die Probleme der Patienten? Dann bewerben Sie sich jetzt.</p><p>Die Arbeitszeit ist auf Nachmittage festgesetzt, zweimal wöchentlich von 14 bis 20 Uhr. Der Vertragsbeginn kann auf individuellen Wunsch angepasst werden.</p><p>Wiedereinsteiger sind auch herzlich willkommen.</p><p>Wir freuen uns von Ihnen zu hören!</p>",\n  "identifier": {\n    "@type": "PropertyValue",\n    "name": "Zahnärzte Weiler",\n    "value": "1111"\n  },\n  "datePosted" : "2021-11-23",\n  "validThrough" : "2022-07-20T00:00",\n  "hiringOrganization" : {\n    "@type" : "Organization",\n    "name" : "Zahnärzte Weiler",\n    "sameAs" : "https://zahnaerzte-weiler.de",\n    "logo" : "https://zahnaerzte-weiler.de/images/manifest/icon-144x144.png"\n  },\n  "jobLocation": {\n  "@type": "Place",\n    "address": {\n    "@type": "PostalAddress",\n    "streetAddress": "Weilerweg 33",\n    "addressLocality": "Köln",\n    "postalCode": "50765",\n    "addressCountry": "DE"\n    }\n  },\n} <\/script> <h2 id=stellenangebot-zahnmedizinische-fachangestellte-zfa>Stellenangebot Zahnmedizinische Fachangestellte (ZFA)</h2> <p>Wir suchen für die Anmeldung/Rezeption (keine Abrechnung) halbtags eine zuverlässige und freundliche ZFA (m/w/d).</p> <p>Können Sie Geduld am Telefon aufbringen, sind Sie organisiert und haben Verständnis für die Probleme der Patienten? Dann bewerben Sie sich jetzt.</p> <p>Die Arbeitszeit ist auf Nachmittage festgesetzt, zweimal wöchentlich von 14 bis 20 Uhr. Der Vertragsbeginn kann auf individuellen Wunsch angepasst werden. </p> <p>Wiedereinsteiger sind auch herzlich willkommen. </p> <p>Wir bieten:</p> <ul> <li>einen unbefristeten Arbeitsvertrag </li> <li>eine übertarifliche Bezahlung</li> <li>Fahrtkostenzuschuss</li> <li>Berufskleidung </li> </ul> <p>Neugierig?</p> <p>Wir freuen uns von Ihnen zu hören!</p> <p>Herzliche Grüße,<br>das gesamte Team</p> '},383:function(e,n){e.exports='<script type=application/ld+json> {\n  "@context" : "https://schema.org/",\n  "@type" : "JobPosting",\n  "title" : "Ausbildung zahnmedizinische Fachangestellte",\n  "description" : "<p>Möchtest du die verlässliche Assistenz des behandelnden Zahnarztes sein und möchtest du dich um das Wohlbefinden der Patienten in unserer Praxis kümmern, dann ist das die richtige Ausbildung für dich.</p><p>Dann freuen wir uns auf Ihre Bewerbung.</p>",\n  "identifier": {\n    "@type": "PropertyValue",\n    "name": "Zahnärzte Weiler",\n    "value": "2222"\n  },\n  "datePosted" : "2021-11-23",\n  "validThrough" : "2022-07-20T00:00",\n  "hiringOrganization" : {\n    "@type" : "Organization",\n    "name" : "Zahnärzte Weiler",\n    "sameAs" : "https://zahnaerzte-weiler.de",\n    "logo" : "https://zahnaerzte-weiler.de/images/manifest/icon-144x144.png"\n  },\n  "jobLocation": {\n  "@type": "Place",\n    "address": {\n    "@type": "PostalAddress",\n    "streetAddress": "Weilerweg 33",\n    "addressLocality": "Köln",\n    "postalCode": "50765",\n    "addressCountry": "DE"\n    }\n  },\n} <\/script> <h2 id=ausbildung-zahnmedizinische-fachangestellte-mwd>Ausbildung zahnmedizinische Fachangestellte (m/w/d)</h2> <p>Möchtest du die verlässliche Assistenz des behandelnden Zahnarztes sein und möchtest du dich um das Wohlbefinden der Patienten in unserer Praxis kümmern, dann ist das die richtige Ausbildung für dich.</p> <p>Allgemeine zahnmedizinische Assistenz:</p> <ul> <li>Patientenbetreuung vor, während und nach der Behandlung</li> <li>Vor- und Nachbereitung der Behandlung</li> <li>Röntgen</li> <li>Hygiene</li> </ul> <p>Dann freuen wir uns auf Ihre Bewerbung.</p> <p>Herzliche Grüße,<br>das gesamte Team</p> '},384:function(e,n){e.exports="<h2 id=urlaubsankündigungen>Urlaubsankündigungen</h2> <p>Liebe Patientinnen, liebe Patienten,</p> <p>wir sind vom 24.12.2021 bis zum 02.01.2022 im Urlaub. Ab dem 03.01.2022 sind wir wieder wie gewohnt für Sie da.</p> <p>Mit freundlichen Grüßen Ihre Praxis Dr. Hilgner und Dr. Vogt</p> "},385:function(e,n){e.exports='<h2 id=gemeinsam-gegen-corona-viren>Gemeinsam gegen Corona-Viren</h2> <p>Zu Ihrem und unseren Schutz unternehmen wir alles Mögliche, um eine Ansteckung durch Grippe- oder Coronaviren zu vermeiden. Dabei sind wir aber auf Ihre Mithilfe angewiesen.</p> <p>Auch wenn wir einen Behandlungstermin vereinbart haben, bleiben Sie bitte unbedingt zu Hause, wenn Sie</p> <ul> <li>eine Atemwegserkrankung mit Fieber haben,</li> <li>möglicherweise Kontakt zu einem Corona- oder Grippepatienten hatten,</li> <li>in den letzten Wochen ein Corona-Risikogebiet bereist haben oder</li> <li>schwere Infektzeichen haben und sich sehr schwach fühlen.</li> </ul> <p>In diesen Fällen melden Sie sich bitte ausschließlich telefonisch (unter der Rufnummer +49 221 79 50 15) bei unserer Zahnarztpraxis in Volkhoven-Weiler. Wir werden dann gemeinsam zeitnah einen neuen Behandlungstermin finden.</p> <p>Darüber hinaus empfehlen wir zurzeit Massenveranstaltungen zu vermeiden, zur Begrüßung nicht die Hand zu geben, nach Möglichkeit 2 Meter Abstand halten und auf Umarmungen zu verzichten, sowie regelmäßiges und gründliches Händewaschen.</p> <p>Die wichtigsten Fragen zum Coronavirus hat das Robert Koch Institut auf seiner Webseite zum Nachlesen zusammengestellt.(<a href=http://www.rki.de>www.rki.de</a>)</p> <p><img src=/images/aktuelles/anleitung-haendewaschen.png alt="Anleitung Händewaschen"> <img src=/images/aktuelles/info-haendewaschen.png alt="Information Händewaschen"></p> <blockquote> <p>So verhindern Sie nicht nur mögliche Ansteckungen mit dem Corona-Virus, sondern auch mit Influenza und anderen Krankheiten, die über Schmierinfektionen übertragen werden.</p> </blockquote> <p>Vielen Dank!</p> '},391:function(e,n,t){"use strict";t.r(n),t.d(n,"ViewNews",(function(){return I}));var r=t(48),i=t(31),o=t(359),a=t(382),u=t.n(a),c=t(383),l=t.n(c),s=t(384),p=t.n(s),d=t(385),f=t.n(d);function h(){var e=v([""]);return h=function(){return e},e}function b(){var e=v([""]);return b=function(){return e},e}function g(){var e=v(["\n                <section-content id="," content=","></section-content>\n              "]);return g=function(){return e},e}function m(){var e=v(["\n            <section-content id="," content=","></section-content>\n          "]);return m=function(){return e},e}function y(){var e=v(["\n      <section-hero\n        .header=","\n        .articles=",'\n        @click="','"\n      >\n        <lazy-image slot="picture"\n                    class="picture small border"\n                    src="./images/aktuelles/aktuelles-672.jpeg"\n                    sizes="(min-width: 1025px) 63vw, (min-width: 768px) 87vw, 92vw"\n                    srcset="./images/aktuelles/aktuelles-296.jpeg 296w, ./images/aktuelles/aktuelles-320.jpeg 320w, ./images/aktuelles/aktuelles-390.jpeg 390w, ./images/aktuelles/aktuelles-672.jpeg 672w, ./images/aktuelles/aktuelles-794.jpeg 794w, ./images/aktuelles/aktuelles-1028.jpeg 1028w, ./images/aktuelles/aktuelles-1600.jpeg 1600w"\n                    alt="Dr. Hilgner und Dr.Vogt">\n        </lazy-image>\n      </section-hero>\n      ',"\n    "]);return y=function(){return e},e}function v(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function w(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,n){return(z=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function j(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=O(e);if(n){var i=O(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return x(this,t)}}function x(e,n){return!n||"object"!==k(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var P=function(e,n,t,r){var i,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"===("undefined"==typeof Reflect?"undefined":k(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(a=(o<3?i(a):o>3?i(n,t,a):i(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a},I=function(){var e=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&z(e,n)}(a,e);var n,t,i,o=j(a);function a(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),(e=o.call(this)).header=["Rund um die Praxis","Aktuelles"],e.articles=[{href:"stellenanzeigen",name:"Stellenanzeigen",content:null,subnavigation:[{href:"stelle-zva",name:"Zahnmedizinische Fachangestellte",content:u.a},{href:"ausbildung-zva",name:"Ausbildung zur zahnmedizinischen Fachangestellte",content:l.a}]},{href:"urlaub",name:"Urlaub",content:p.a},{href:"corona",name:"Gemeinsam gegen Corona-Viren",content:f.a}],e}return n=a,(t=[{key:"render",value:function(){return Object(r.b)(y(),this.header,this.articles,this._handleClickSubnav,this.articles.map((function(e){return e.content?Object(r.b)(m(),e.href,e.content):e.subnavigation?e.subnavigation.map((function(e){return e.content?Object(r.b)(g(),e.href,e.content):Object(r.b)(b())})):Object(r.b)(h())})))}}])&&w(n.prototype,t),i&&w(n,i),a}(o.a);return e=P([Object(i.a)("view-news")],e)}()}}]);