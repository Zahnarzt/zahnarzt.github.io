import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PageScrollElement } from './page-scroll-element';

import Formulare from '../../markdown/informationen/formulare.md';
import Zahnzusatz from '../../markdown/informationen/zahnzusatz.md';

@customElement('view-informations')
export class ViewInformations extends PageScrollElement {
  constructor () {
    // Always call super() first
    super();

    // Initialize properties
    this.header = [
      'Praktische Hinweise',
      'Informationen'
    ];

    this.articles = [
      {
        href: 'formulare',
        name: 'Formulare zum Download',
        content: Formulare
      },
      {
        href: 'zahnzusatzversicherung',
        name: 'Zahnzusatzversicherung',
        content: Zahnzusatz
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
                    src="./images/informationen/empfang-672.jpeg"
                    sizes="(min-width: 1025px) 63vw, (min-width: 768px) 87vw, 92vw"
                    srcset="./images/informationen/empfang-296.jpeg 296w, ./images/informationen/empfang-320.jpeg 320w, ./images/informationen/empfang-390.jpeg 390w, ./images/informationen/empfang-672.jpeg 672w, ./images/informationen/empfang-794.jpeg 794w, ./images/informationen/empfang-1028.jpeg 1028w, ./images/informationen/empfang-1600.jpeg 1600w"
                    alt="Dr. Hilgner und Dr.Vogt">
        </lazy-image>
      </section-hero>
      ${this.articles.map((article) => {
        if (article.content) {
          return html`
            <section-content id=${article.href} content=${article.content}></section-content>
          `
        } else if (article.subnavigation) {
          return article.subnavigation.map((subarticle) => {
            if (subarticle.content) {
              return html`
                <section-content id=${subarticle.href} content=${subarticle.content}></section-content>
              `
            } else {
              return html``;
            }
          })
        } else {
          return html``;
        }
      })}
    `;
  }
}
