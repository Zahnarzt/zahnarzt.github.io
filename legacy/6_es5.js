(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{352:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t(2);function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,n){return!n||"object"!==l(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e,n,t,r){var i,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(n,t,a):i(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a},f=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(f,e);var n,t,r,l,d=(n=f,function(){var e,t=u(n);if(c()){var r=u(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return a(this,e)});function f(){var e;return i(this,f),(e=d.apply(this,arguments)).active=!1,e}return t=f,(r=[{key:"shouldUpdate",value:function(){return this.active}}])&&o(t.prototype,r),l&&o(t,l),f}(r.a);d([Object(r.e)({type:Boolean})],f.prototype,"active",void 0)},353:function(e,n,t){"use strict";var r=t(2),i=t(12),o=t(32),a=new WeakMap,c=Object(o.b)((function(e){return function(n){if(!(n instanceof o.a))throw new Error("unsafeHTML can only be used in text bindings");var t=a.get(n);if(void 0===t||!Object(i.f)(e)||e!==t.value||n.value!==t.fragment){var r=document.createElement("template");r.innerHTML=e;var c=document.importNode(r.content,!0);n.setValue(c),a.set(n,{value:e,fragment:c})}}})),u=t(54),s=r.b`:host{display:block;margin:64px 0;box-sizing:border-box}:host *{box-sizing:border-box}.grid-container--content{grid-template-areas:"sidebar article article ."}.background{position:relative;grid-row-start:sidebar;grid-row-end:article;grid-column-start:sidebar;grid-column-end:article;background-color:#f7f7f7}.background:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}article{position:relative;grid-area:article;padding:36px 36px 36px 0;font-size:1.1rem}ol,ul{padding-inline-start:16px}ol li,ul li{padding:3px 0}blockquote{position:relative;position:relative;padding:8px 8px 8px 32px;margin:32px 0 0 0;background-color:#faebd7;z-index:1}blockquote:before{content:"";position:absolute;top:0;bottom:0;left:0;width:16px;background-color:transparent;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:0 0;z-index:0}blockquote p{margin:.5em 0}.download{display:flex;padding:24px 0;color:inherit;text-decoration:none}.download p{margin:0}.download__text{margin-inline-start:1em}.download__link{color:var(--app-link-color);text-decoration:underline}@media (min-width:768px){.grid-container--content{grid-template-areas:"sidebar article article article article article article article article article ."}}@media (min-width:1025px){.grid-container--content{grid-template-areas:"sidebar article article article article article article article article . ."}}@media (min-width:1281px){.grid-container--content{grid-template-areas:"sidebar sidebar article article article article article article . . ."}}`;function l(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n      <div class="grid-container grid-container--content">\n        <div class="background"></div>\n        <article>\n          ',"\n        </article>\n      </div>\n    "]);return l=function(){return e},e}function d(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,n){return!n||"object"!==m(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=function(e,n,t,r){var i,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"===("undefined"==typeof Reflect?"undefined":m(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(n,t,a):i(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a},w=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(m,e);var n,t,i,o,a=(n=m,function(){var e,t=b(n);if(h()){var r=b(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return g(this,e)});function m(){var e;return d(this,m),(e=a.apply(this,arguments)).content="",e}return t=m,o=[{key:"styles",get:function(){return[u.a,s]}}],(i=[{key:"render",value:function(){return Object(r.d)(l(),c(this.content))}}])&&f(t.prototype,i),o&&f(t,o),m}(r.a);y([Object(r.e)({type:String})],w.prototype,"content",void 0),w=y([Object(r.c)("section-content")],w)},355:function(e,n,t){"use strict";var r=t(2),i=t(54),o=r.b`:host{display:block}:host *{box-sizing:border-box}.grid-container--header{grid-template-rows:repeat(1,minmax(50px,auto));grid-template-areas:". header header ."}header{grid-area:header;display:grid;grid-template-rows:minmax(45px,auto) minmax(45px,auto) auto;grid-template-areas:"subheadline" "headline" "text"}::slotted(h1),::slotted(h2){margin:0}::slotted(h1){grid-area:headline;display:flex;flex-direction:column;font-size:2em;letter-spacing:.067em}::slotted(h2){grid-area:subheadline;color:#7b7b7b}::slotted(p){grid-area:text;font-size:1.4em}@media (min-width:768px){.grid-container--header{grid-template-areas:". header header header header header . . . . ."}}@media (min-width:1281px){.grid-container--header{grid-template-areas:". . header header header header . . . . ."}}`;function a(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n      <section class="grid-container grid-container--header">\n        <header>\n          <slot name="subheadline"></slot>\n          <slot name="headline"></slot>\n          <slot name="text"></slot>\n        </header>\n      </section>\n    ']);return a=function(){return e},e}function c(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,n){return!n||"object"!==g(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var h=function(e,n,t,r){var i,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"===("undefined"==typeof Reflect?"undefined":g(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(n,t,a):i(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a},b=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(p,e);var n,t,g,h,b=(n=p,function(){var e,t=d(n);if(l()){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return s(this,e)});function p(){return c(this,p),b.apply(this,arguments)}return t=p,h=[{key:"styles",get:function(){return[i.a,o]}}],(g=[{key:"render",value:function(){return Object(r.d)(a())}}])&&u(t.prototype,g),h&&u(t,h),p}(r.a);b=h([Object(r.c)("section-header")],b)},375:function(e,n){e.exports="<p><strong>Zahnärztliche Praxisgemeinschaft</strong><br><strong>Dr. Karina Hilgner &amp; Dr. Benjamin Vogt</strong><br>Weilerweg 33<br>50765 Köln </p> <p><strong>Telefon:</strong><br>+49 (221) 79 50 14 </p> <p><strong>Telefax:</strong><br>+49 (221) 790 25 95 </p> <p><strong>E-Mail:</strong><br><a href=mailto:zahnaerzte.weiler@gmail.com>zahnaerzte.weiler@gmail.com</a> </p> <p><strong>Internet:</strong><br><a href=http://www.zahnaerzte-weiler.de>www.zahnaerzte-weiler.de</a> </p> <p><strong>Zuständige Kammer:</strong><br>Zahnärztekammer Nordrhein<br>Emanuel-Leutze-Str. 8<br>40547 Düsseldorf </p> <p><strong>Zuständige kassenärztliche Vereinigung:</strong><br>Kassenzahnärztliche Vereinigung Nordrhein<br>Lindemannstr 34-42<br>40237 Düsseldorf </p> <p><strong>Berufsbezeichnung:</strong><br>Zahnarzt, verliehen in der Bundesrepublik Deutschland. Die Befugnis zum Führen der Berufsbezeichnung &quot;Zahnarzt&quot; wurde in der Bundesrepublik Deutschland verliehen. Es gelten folgende gesetzliche Regelungen: Berufsordnung der Zahnärzte, Nordrhein, Heilkundegesetz, Zahnheilkundegesetz, GOZ zugänglich unter <a href=http://www.zaek-nr.de>www.zaek-nr.de</a></p> <p><strong>Berufsrechtliche Regelungen:</strong> </p> <ul> <li>Zahnheilkundegesetz</li> <li>Heilberufe-Kammergesetz</li> <li>Gebührenordnung für Zahnärzte</li> <li>Berufsordnung für Zahnärzte</li> </ul> <p><strong>Haftungshinweis:</strong><br>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p> <p><strong>Datenschutz:</strong><br>Datenschutzerklärung </p> <p>Der Schutz und die Sicherheit von persönlichen Daten hat bei uns eine hohe Priorität. Daher halten wir uns strikt an die Regeln des deutschen Bundesdatenschutzgesetzes (BDSG). Nachfolgend werden Sie darüber informiert, welche Art von Daten erfasst und zu welchem Zweck sie erhoben werden:</p> <ol> <li>Datenübermittlung /Datenprotokollierung<br>Beim Besuch dieser Seite verzeichnet der Web-Server automatisch Log-Files, die keiner bestimmten Person zugeordnet werden können. Diese Daten beinhalten z. B. den Browsertyp und -version, verwendetes Betriebssystem, Referrer URL (die zuvor besuchte Seite), IP-Adresse des anfragenden Rechners, Zugriffsdatum und -uhrzeit der Serveranfrage und die Dateianfrage des Client (Dateiname und URL). Diese Daten werden nur zum Zweck der statistischen Auswertung gesammelt. Eine Weitergabe an Dritte, zu kommerziellen oder nichtkommerziellen Zwecken, findet nicht statt.</li> <li>Nutzung persönlicher Daten<br>Persönliche Daten werden nur erhoben oder verarbeitet, wenn Sie diese Angaben freiwillig, z.B. im Rahmen einer Anfrage mitteilen. Sofern keine erforderlichen Gründe im Zusammenhang mit einer Geschäftsabwicklung bestehen, können Sie jederzeit die zuvor erteilte Genehmigung Ihrer persönlichen Datenspeicherung mit sofortiger Wirkung schriftlich (z.B. per E-Mail oder per Fax) widerrufen. Ihre Daten werden nicht an Dritte weitergeben, es sei denn, eine Weitergabe ist aufgrund gesetzlicher Vorschriften erforderlich.</li> <li>Auskunft, Änderung und Löschung Ihrer Daten<br>Gemäß geltendem Recht können Sie jederzeit bei uns schriftlich nachfragen, ob und welche personenbezogenen Daten bei uns über Sie gespeichert sind. Eine entsprechende Mitteilung hierzu erhalten Sie umgehend.</li> <li>Sicherheit Ihrer Daten<br>Ihre uns zur Verfügung gestellten persönlichen Daten werden durch Ergreifung aller technischen sowie organisatorischen Sicherheitsmaßnahmen so gesichert, dass sie für den Zugriff unberechtigter Dritter unzugänglich sind. Bei Versendung von sehr sensiblen Daten oder Informationen ist es empfehlenswert, den Postweg zu nutzen, da eine vollständige Datensicherheit per E-Mail nicht gewährleistet werden kann.</li> <li>Hinweis zu Google Analytics<br>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“, d. h. Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung diese Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.</li> <li>Cookies<br>Auf einigen unserer Seiten verwenden wir sog. &quot;Session-Cookies&quot;, um Ihnen die Nutzung unserer Webseiten zu erleichtern. Dabei handelt es sich um kleine Textdateien, die nur für die Dauer Ihres Besuchs unserer Webseite auf Ihrer Festplatte hinterlegt und abhängig von der Einstellung Ihres Browser-Programms beim Beenden des Browsers wieder gelöscht werden. Diese Cookies rufen keine auf Ihrer Festplatte über Sie gespeicherten Informationen ab und beeinträchtigen nicht Ihren PC oder ihre Dateien. Die meisten Browser sind so eingestellt, dass sie Cookies automatisch akzeptieren. Sie können das Speichern von Cookies jedoch deaktivieren oder ihren Browser so einstellen, dass er Sie auf die Sendung von Cookies hinweist.</li> <li>Änderungen dieser Datenschutzbestimmungen<br>Wir werden diese Richtlinien zum Schutz Ihrer persönlichen Daten von Zeit zu Zeit aktualisieren. Sie sollten sich diese Richtlinien gelegentlich ansehen, um auf dem Laufenden darüber zu bleiben, wie wir Ihre Daten schützen und die Inhalte unserer Website stetig verbessern. Sollten wir wesentliche Änderungen bei der Sammlung, der Nutzung und/oder der Weitergabe der uns von Ihnen zur Verfügung gestellten personenbezogenen Daten vornehmen, werden wir Sie durch einen eindeutigen und gut sichtbaren Hinweis auf der Website darauf aufmerksam machen. Mit der Nutzung der Webseite erklären Sie sich mit den Bedingungen dieser Richtlinien zum Schutz persönlicher Daten einverstanden.</li> </ol> <p>Bei Fragen zu diesen Datenschutzbestimmungen wenden Sie sich bitte über unsere Kontakt-Seite an uns.</p> "},381:function(e,n,t){"use strict";t.r(n),t.d(n,"ViewImprint",(function(){return p}));var r=t(2),i=t(352),o=(t(355),t(353),t(375)),a=t.n(o);function c(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n      <section-header>\n        <h1 slot="headline">Impressum</h1>\n      </section-header>\n      <section-content id="impressum" content=',"></section-content>\n    "]);return c=function(){return e},e}function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,n){return!n||"object"!==h(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=function(e,n,t,r){var i,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"===("undefined"==typeof Reflect?"undefined":h(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(n,t,a):i(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a},p=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(b,e);var n,t,i,o,h=(n=b,function(){var e,t=f(n);if(d()){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return l(this,e)});function b(){return u(this,b),h.apply(this,arguments)}return t=b,(i=[{key:"render",value:function(){return Object(r.d)(c(),a.a)}}])&&s(t.prototype,i),o&&s(t,o),b}(i.a);p=b([Object(r.c)("view-imprint")],p)}}]);