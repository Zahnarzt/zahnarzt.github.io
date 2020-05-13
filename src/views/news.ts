import { customElement, html } from 'lit-element';
import { PageScrollElement } from './page-scroll-element';

import Corona from '../../markdown/aktuelles/corona.md';
import Abschied from '../../markdown/aktuelles/abschied.md';

@customElement('view-news')
export class ViewNews extends PageScrollElement {
  constructor () {
    // Always call super() first
    super();

    // Initialize properties
    this.header = [
      'Rund um die Praxis',
      'Aktuelles'
    ];

    this.articles = [
      {
        href: 'corona',
        name: 'Gemeinsam gegen Corona-Viren',
        content: Corona
      },
      {
        href: 'abschied',
        name: 'Abschied Herr Jansen',
        content: Abschied
      }
    ]
  }

  protected render() {
    return html`
      <section-hero
        .header=${this.header}
        .articles=${this.articles}
        @click="${this._handleClickSubnav}"
      >
        <lazy-image slot="picture"
                    class="picture small border"
                    src="./images/aktuelles/aktuelles-672.jp2"
                    sizes="(min-width: 1025px) 63vw, (min-width: 768px) 87vw, 92vw"
                    srcset="./images/aktuelles/aktuelles-296.jp2 296w, ./images/aktuelles/aktuelles-320.jp2 320w, ./images/aktuelles/aktuelles-390.jp2 390w, ./images/aktuelles/aktuelles-672.jp2 672w, ./images/aktuelles/aktuelles-794.jp2 794w, ./images/aktuelles/aktuelles-1028.jp2 1028w, , ./images/aktuelles/aktuelles-1600.jp2 1600w"
                    alt="Dr. Hilgner und Dr.Vogt">
        </lazy-image>
      </section-hero>
      ${this.articles.map((article) =>
        html`
         <section-content id=${article.href} content=${article.content}></section-content>
        `
      )}
    `;
  }
}
