import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PageScrollElement } from './page-scroll-element';

import StelleZFA from '../../markdown/aktuelles/stelle-zfa.md';
import StelleZFAStuhl from '../../markdown/aktuelles/stelle-zfa-stuhlassistenz.md';
import AusbildungZFA from '../../markdown/aktuelles/ausbildung-zfa.md';
import Urlaub from '../../markdown/aktuelles/urlaub.md';

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
        href: 'urlaub',
        name: 'Urlaub',
        content: Urlaub
      },
      {
        href: 'stellenanzeigen',
        name: 'Stellenanzeigen',
        content: null,
        subnavigation: [
          {
            href: 'stelle-zva',
            name: 'Zahnmedizinische Fachangestellte',
            content: StelleZFA
          },
          {
            href: 'stelle-zva-stuhl',
            name: 'Zahnmedizinische Fachangestellte für die Stuhlassistenz',
            content: StelleZFAStuhl
          },
          {
            href: 'ausbildung-zva',
            name: 'Ausbildung zur zahnmedizinischen Fachangestellte',
            content: AusbildungZFA
          }
        ]
      },
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
                    src="./images/aktuelles/aktuelles-672.jpeg"
                    sizes="(min-width: 1025px) 63vw, (min-width: 768px) 87vw, 92vw"
                    srcset="./images/aktuelles/aktuelles-296.jpeg 296w, ./images/aktuelles/aktuelles-320.jpeg 320w, ./images/aktuelles/aktuelles-390.jpeg 390w, ./images/aktuelles/aktuelles-672.jpeg 672w, ./images/aktuelles/aktuelles-794.jpeg 794w, ./images/aktuelles/aktuelles-1028.jpeg 1028w, ./images/aktuelles/aktuelles-1600.jpeg 1600w"
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
