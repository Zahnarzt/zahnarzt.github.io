(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{352:function(e,n,r){"use strict";r.d(n,"a",(function(){return h}));var t=r(2);function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function a(e,n){return(a=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function u(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,t=c(e);if(n){var i=c(this).constructor;r=Reflect.construct(t,arguments,i)}else r=t.apply(this,arguments);return s(this,r)}}function s(e,n){return!n||"object"!==l(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e,n,r,t){var i,o=arguments.length,a=o<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,r):t;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,r,t);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(a=(o<3?i(a):o>3?i(n,r,a):i(n,r))||a);return o>3&&a&&Object.defineProperty(n,r,a),a},h=function(){var e=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&a(e,n)}(c,e);var n,r,t,s=u(c);function c(){var e;return i(this,c),(e=s.apply(this,arguments)).active=!1,e}return n=c,(r=[{key:"shouldUpdate",value:function(){return this.active}}])&&o(n.prototype,r),t&&o(n,t),c}(t.a);return d([Object(t.e)({type:Boolean})],e.prototype,"active",void 0),e}()},353:function(e,n,r){"use strict";var t=r(2),i=r(12),o=r(32),a=new WeakMap,u=Object(o.b)((function(e){return function(n){if(!(n instanceof o.a))throw new Error("unsafeHTML can only be used in text bindings");var r=a.get(n);if(void 0===r||!Object(i.f)(e)||e!==r.value||n.value!==r.fragment){var t=document.createElement("template");t.innerHTML=e;var u=document.importNode(t.content,!0);n.setValue(u),a.set(n,{value:e,fragment:u})}}})),s=r(54),c=t.b`:host{display:block;margin:64px 0;box-sizing:border-box}:host *{box-sizing:border-box}.grid-container--content{grid-template-areas:"sidebar article article ."}.background{position:relative;grid-row-start:sidebar;grid-row-end:article;grid-column-start:sidebar;grid-column-end:article;background-color:#f7f7f7}.background:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}article{position:relative;grid-area:article;padding:36px 36px 36px 0;font-size:1.1em}h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child,h6:first-child{margin-top:0}ol,ul{padding-inline-start:16px}ol li,ul li{padding:3px 0}img{max-width:100%;height:auto}blockquote{position:relative;position:relative;padding:8px 8px 8px 32px;margin:32px 0 0 0;background-color:#faebd7;z-index:1}blockquote:before{content:"";position:absolute;top:0;bottom:0;left:0;width:16px;background-color:transparent;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:0 0;z-index:0}blockquote p{margin:.5em 0}.download{display:flex;padding:24px 0;color:inherit;text-decoration:none}.download p{margin:0}.download img{min-width:65px}.download__text{margin-inline-start:1em}.download__link{color:var(--app-link-color);text-decoration:underline}@media (min-width:768px){.grid-container--content{grid-template-areas:"sidebar article article article article article article article article article ."}}@media (min-width:1025px){.grid-container--content{grid-template-areas:"sidebar article article article article article article article article . ."}}@media (min-width:1281px){.grid-container--content{grid-template-areas:"sidebar sidebar article article article article article article . . ."}}`;function l(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n      <div class="grid-container grid-container--content">\n        <div class="background"></div>\n        <article>\n          ',"\n        </article>\n      </div>\n    "]);return l=function(){return e},e}function d(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function h(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function f(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,t=b(e);if(n){var i=b(this).constructor;r=Reflect.construct(t,arguments,i)}else r=t.apply(this,arguments);return p(this,r)}}function p(e,n){return!n||"object"!==m(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var w,y=function(e,n,r,t){var i,o=arguments.length,a=o<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,r):t;if("object"===("undefined"==typeof Reflect?"undefined":m(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,r,t);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(a=(o<3?i(a):o>3?i(n,r,a):i(n,r))||a);return o>3&&a&&Object.defineProperty(n,r,a),a};w=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(a,e);var n,r,i,o=f(a);function a(){var e;return d(this,a),(e=o.apply(this,arguments)).content="",e}return n=a,i=[{key:"styles",get:function(){return[s.a,c]}}],(r=[{key:"render",value:function(){return Object(t.d)(l(),u(this.content))}}])&&h(n.prototype,r),i&&h(n,i),a}(t.a),y([Object(t.e)({type:String})],w.prototype,"content",void 0),w=y([Object(t.c)("section-content")],w)},354:function(e,n,r){"use strict";var t=r(2),i=r(54),o=t.b`:host{display:block}:host *{box-sizing:border-box}.grid-container--header{grid-template-rows:repeat(1,minmax(50px,auto));grid-template-areas:". header header ."}.section__header{grid-area:header;display:grid;grid-template-rows:minmax(45px,auto) minmax(45px,auto) auto;grid-template-areas:"subheadline" "headline" "text"}::slotted(h1),::slotted(h2){margin:0}::slotted(h1){grid-area:headline;display:flex;flex-direction:column;font-size:2em;letter-spacing:.067em}::slotted(h1:first-line),::slotted(h2){grid-area:subheadline;font-size:1.5em;color:#7b7b7b}::slotted(p){grid-area:text;font-size:1.4em}@media (min-width:768px){.grid-container--header{grid-template-areas:". header header header header header . . . . ."}}@media (min-width:1281px){.grid-container--header{grid-template-areas:". . header header header header . . . . ."}}`;function a(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n      <section class="grid-container grid-container--header">\n        <header class="section__header">\n          <slot name="subheadline"></slot>\n          <slot name="headline"></slot>\n          <slot name="text"></slot>\n        </header>\n      </section>\n    ']);return a=function(){return e},e}function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function c(e,n){return(c=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,t=h(e);if(n){var i=h(this).constructor;r=Reflect.construct(t,arguments,i)}else r=t.apply(this,arguments);return d(this,r)}}function d(e,n){return!n||"object"!==g(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f,p=function(e,n,r,t){var i,o=arguments.length,a=o<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,r):t;if("object"===("undefined"==typeof Reflect?"undefined":g(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,r,t);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(a=(o<3?i(a):o>3?i(n,r,a):i(n,r))||a);return o>3&&a&&Object.defineProperty(n,r,a),a};f=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&c(e,n)}(g,e);var n,r,d,h=l(g);function g(){return u(this,g),h.apply(this,arguments)}return n=g,d=[{key:"styles",get:function(){return[i.a,o]}}],(r=[{key:"render",value:function(){return Object(t.d)(a())}}])&&s(n.prototype,r),d&&s(n,d),g}(t.a),f=p([Object(t.c)("section-header")],f)},377:function(e,n){e.exports="<p>Wir führen unsere Webseiten nach den im Folgenden geregelten Grundsätzen: Wir verpflichten uns, die gesetzlichen Bestimmungen zum Datenschutz einzuhalten und bemühen uns, stets die Grundsätze der Datenvermeidung und der Datenminimierung zu berücksichtigen.</p> <ol> <li><p>Name und Anschrift des Verantwortlichen</p> <p>Der Verantwortliche im Sinne der Datenschutz-Grundverordnung und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten der Europäischen Union sowie sonstiger datenschutzrechtlicher Bestimmungen ist:</p> <p>Dr. Karina Hilgner &amp; Dr. Benjamin Vogt<br>Weilerweg 33<br>50765 Köln<br>Telefon: +49 (0) 221 795014<br>E-Mail: <a href=mailto:zahnaerzte.weiler@gmail.com>zahnaerzte.weiler@gmail.com</a> </p> </li> <li><p>Begriffserklärungen</p> <p>Wir haben unsere Datenschutzerklärung nach den Grundsätzen der Klarheit un Transparenz gestaltet. Sollten dennoch Unklarheiten in Bezug auf die Verwendun von verschiedenen Begrifflichkeiten bestehen, können die entsprechende Definitionen hier eingesehen werden.</p> </li> <li><p>Rechtsgrundlage für die Verarbeitung von personenbezogenen Daten</p> <p>Wir verarbeiten Ihre personenbezogenen Daten wie bspw. Ihren Namen und Vornamen, Ihre E-Mail-Adresse und IP-Adresse usw. nur, wenn hierfür eine gesetzliche Grundlage gegeben ist. Hier kommen nach der Datenschutzgrundverordnung insbesondere drei Regelungen in Betracht:</p> <ul> <li>Sie haben uns Ihre Einwilligung zu der Verarbeitung Ihrer personenbezogenen Daten für einen oder mehrere Zwecke erteilt, Art. 6 Abs. 1 S. 1 lit. a DSGVO. Sie werden in diesem Zusammenhang von uns über den Zweck bzw. die Zwecke der Verarbeitung ausführlich informiert und Ihre ausdrückliche Einwilligung wird bei uns dokumentiert.</li> <li>Die Verarbeitung Ihrer personenbezogenen Daten ist für die Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen mit Ihnen erforderlich, Art. 6 Abs. 1 S. 1 lit. b DSGVO.</li> <li>Die Verarbeitung der personenbezogenen Daten ist zur Wahrung unserer berechtigten Interessen erforderlich, sofern nicht Ihre Interessen oder Grundrechte und Grundfreiheiten überwiegen, Art. 6 Abs. 1 S. 1 lit. f DSGVO.</li> </ul> <p>Wir weisen Sie aber an den jeweiligen Stellen immer noch einmal darauf hin, auf welcher Rechtsgrundlage die Verarbeitung Ihrer personenbezogenen Daten erfolgt.</p> </li> <li><p>Weitergabe der personenbezogenen Daten</p> <p>Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:</p> <ul> <li>Sie Ihre ausdrückliche Einwilligung nach Art. 6 Abs. 1 S. 1 lit. a DSGVO dazu erteilt haben, die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben, für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.</li> </ul> </li> <li><p>Speicherdauer und Löschung</p> <p>Wir speichern alle personenbezogenen Daten, die Sie uns übermitteln, nur so lange, wie sie benötigt werden, um die Zwecke zu erfüllen, zu denen diese Daten übermittelt wurden, oder solange dies von Gesetzes wegen vorgeschrieben ist. Mit Zweckerfüllung und/oder Ablauf der gesetzlichen Speicherungsfristen werden die Daten von uns gelöscht oder gesperrt.</p> </li> <li><p>Erhebung und Speicherung von personenbezogenen Daten sowie deren Art und Zweck der Verwendung</p> <ul> <li><p>Beim Besuch der Webseite</p> <p>Beim Aufrufen unserer Webseite werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Webseite gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:</p> <ul> <li>IP-Adresse des anfragenden Rechners</li> <li>Datum und Uhrzeit des Zugriffs</li> <li>Name und URL der abgerufenen Datei</li> <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li> </ul> <p>Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:</p> <ul> <li>Auswertung der Systemsicherheit und -stabilität</li> <li>zu weiteren administrativen Zwecken</li> </ul> <p>Daten, die einen Rückschluss auf Ihre Person zulassen, wie bspw. die IP-Adresse, werden spätestens nach 7 Tagen gelöscht. Sollten wir die Daten über diesen Zeitraum hinaus speichern, werden diese Daten pseudonymisiert, so dass eine Zuordnung zu Ihnen nicht mehr möglich ist.</p> <p>Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.</p> </li> <li><p>Kontaktformular / E-Mail-Kontakt</p> <p>Wir stellen Ihnen auf unserer Webseite ein Formular zur Verfügung, so dass Sie die Möglichkeit haben, jederzeit Kontakt mit uns aufzunehmen. Für die Verwendung des Kontaktformulars ist die Angabe eines Namens für eine persönliche Anrede und einer gültigen E-Mail-Adresse zur Kontaktaufnahme notwendig, damit wir wissen, von wem die Anfrage stammt und diese auch bearbeiten können.</p> <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten sowie Ihre IP-Adresse gem. Art. 6 Abs. S. 1 lit. b und f DSGVO zur Durchführung vorvertraglicher Maßnahmen, die auf Ihre Anfrage hin erfolgen bzw. zur Wahrnehmung unseres berechtigten Interesses, nämlich zur Ausübung unserer geschäftlichen Tätigkeit verarbeitet.</p> <p>Gerne können Sie uns auch stattdessen eine E-Mail unter Verwendung der auf unserer Webseite angegebenen E-Mail-Adresse zusenden. Wir speichern und verarbeiten in diesem Fall Ihre E-Mail-Adresse sowie die von Ihnen im Rahmen der E-Mail gemachten Angaben gemäß Art. 6 Abs. S. 1 lit. b und f DSGVO zur Bearbeitung Ihrer Nachricht.</p> <p>Die Anfragen sowie die damit einhergehenden Daten werden spätestens 3 Monate nach Erhalt gelöscht, sofern diese nicht für eine weitere vertragliche Beziehung benötigt werden.</p> </li> </ul> </li> <li><p>Cookies</p> <p>Wir setzen auf unserer Webseite keine Cookies ein.</p> </li> <li><p>Analyse- und Trackingtools</p> <p>Wir setzen auf unserer Webseite keine Analyse- und Trackingtools ein.</p> </li> <li><p>Rechte des Betroffenen</p> <p>Ihnen stehen folgende Rechte zu:</p> <ul> <li><p>Auskunft</p> <p>Sie haben gemäß Art. 15 DSGVO das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen. Dieses Auskunftsrecht umfasst dabei Informationen über:</p> <ul> <li>die Verarbeitungszwecke</li> <li>die Kategorien der personenbezogenen Daten</li> <li>die Empfänger oder Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden</li> <li>die geplante Speicherdauer oder zumindest die Kriterien für die Festlegung der Speicherdauer</li> <li>das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch</li> <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde</li> <li>die Herkunft Ihrer personenbezogenen Daten, sofern diese nicht bei uns erhoben wurden</li> <li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten Berichtigung</li> </ul> <p>Ihnen steht nach Art. 16 DSGVO ein Recht auf unverzügliche Berichtigung unrichtiger oder unvollständiger gespeicherter personenbezogener Daten bei uns zu.</p> </li> <li><p>Löschung</p> <p>Sie haben nach Art. 17 DSGVO das Recht, die unverzügliche Löschung Ihrer personenbezogenen Daten bei uns zu verlangen, soweit die weitere Verarbeitung nicht aus einem der nachfolgenden Gründe erforderlich ist:</p> <ul> <li>zur Ausübung des Rechts auf freie Meinungsäußerung und Information</li> <li>zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Europäischen Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, - die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde</li> <li>aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Art. 9 Abs. 2 lit. h und i sowie Art. 9 Abs. 3 DSGVO für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gem. Art. 89 Abs. 1 DSGVO, soweit das unter Abschnitt a) genannte Recht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt</li> <li>zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen</li> <li>Einschränkung der Verarbeitung</li> </ul> <p>Sie können gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten aus einem der nachfolgenden Gründe verlangen:</p> <ul> <li>Sie bestreiten die Richtigkeit Ihrer personenbezogenen Daten.</li> <li>Die Verarbeitung ist unrechtmäßig und Sie lehnen die Löschung der personenbezogenen Daten ab.</li> <li>Wir benötigen die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger, Sie benötigen diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li> <li>Sie legen Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO ein.</li> </ul> </li> <li><p>Unterrichtung</p> <p>Wenn Sie die Berichtigung oder Löschung Ihrer personenbezogenen Daten oder eine Einschränkung der Verarbeitung nach Art. 16, Art. 17 Abs. 1 und Art. 18 DSGVO verlangt haben, teilen wir dies allen Empfängern, denen Ihre personenbezogenen Daten offengelegt wurden, mit, es sei denn, dies erweist sich als unmöglich oder ist mit einem unverhältnismäßigen Aufwand verbunden. Sie können von uns verlangen, dass wir Ihnen diese Empfänger mitteilen.</p> </li> <li><p>Übermittlung</p> <p>Sie haben das Recht, Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</p> <p>Sie haben ebenfalls das Recht, die Übermittlung dieser Daten an einen Dritten zu verlangen, sofern die Verarbeitung mithilfe automatisierter Verfahren erfolgte und auf einer Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a oder Art. 9 Abs. 2 lit. a oder auf einem Vertrag gemäß Art. 6 Abs. 1 S. 1 lit. b DSGVO beruht.</p> </li> <li><p>Widerruf</p> <p>Sie haben gemäß Art. 7 Abs. 3 DSGVO das Recht, ihre erteilte Einwilligung jederzeit uns gegenüber zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt. Zukünftig dürfen wir die Datenverarbeitung, die auf Ihrer widerrufenen Einwilligung beruhte nicht mehr fortführen.</p> </li> <li><p>Beschwerde</p> <p>Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.</p> </li> <li><p>Widerspruch</p> <p>Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe der besonderen Situation von uns umgesetzt wird. Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an <a href=mailto:zahnaerzte.weiler@gmail.com>zahnaerzte.weiler@gmail.com</a>.</p> </li> <li><p>Automatisierte Entscheidung im Einzelfall einschließlich Profiling</p> <p>Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt. Dies gilt nicht, wenn die Entscheidung</p> <ul> <li>für den Abschluss oder die Erfüllung eines Vertrags zwischen Ihnen und uns erforderlich ist</li> <li>aufgrund von Rechtsvorschriften der Europäischen Union oder der Mitgliedstaaten, denen wir unterliegen, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung Ihrer Rechte und Freiheiten sowie Ihrer berechtigten Interessen enthalten</li> <li>mit Ihrer ausdrücklichen Einwilligung erfolgt</li> </ul> <p>Allerdings dürfen diese Entscheidungen nicht auf besonderen Kategorien personenbezogener Daten nach Art. 9 Abs. 1 DSGVO beruhen, sofern nicht Art. 9 Abs. 2 lit. a oder g DSGVO gilt und angemessene Maßnahmen zum Schutz der Rechte und Freiheiten sowie Ihrer berechtigten Interessen getroffen wurden.</p> <p>Hinsichtlich der in i) und iii) genannten Fälle treffen wir angemessene Maßnahmen, um die Rechte und Freiheiten sowie Ihre berechtigten Interessen zu wahren, wozu mindestens das Recht auf Erwirkung des Eingreifens einer Person von unserer Seite, auf Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung gehört.</p> </li> </ul> </li> <li><p>Änderung der Datenschutzerklärung</p> <p>Sollten wir die Datenschutzerklärung ändern, dann wird dies auf der Webseite kenntlich gemacht und die registrierten Kunden werden per E-Mail darüber informiert.</p> </li> </ol> <p>Stand 01.04.2020</p> "},383:function(e,n,r){"use strict";r.r(n),r.d(n,"ViewDataProtection",(function(){return b}));var t=r(2),i=r(352),o=(r(354),r(353),r(377)),a=r.n(o);function u(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n      <section-header>\n        <h1 slot="headline">Datenschutz</h1>\n      </section-header>\n      <section-content id="datenschutz" content=',"></section-content>\n    "]);return u=function(){return e},e}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function c(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function l(e,n){return(l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function d(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,t=g(e);if(n){var i=g(this).constructor;r=Reflect.construct(t,arguments,i)}else r=t.apply(this,arguments);return h(this,r)}}function h(e,n){return!n||"object"!==f(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(e,n,r,t){var i,o=arguments.length,a=o<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,r):t;if("object"===("undefined"==typeof Reflect?"undefined":f(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,r,t);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(a=(o<3?i(a):o>3?i(n,r,a):i(n,r))||a);return o>3&&a&&Object.defineProperty(n,r,a),a},b=function(){var e=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&l(e,n)}(h,e);var n,r,i,o=d(h);function h(){return s(this,h),o.apply(this,arguments)}return n=h,(r=[{key:"render",value:function(){return Object(t.d)(u(),a.a)}}])&&c(n.prototype,r),i&&c(n,i),h}(i.a);return e=p([Object(t.c)("view-dataprotection")],e)}()}}]);