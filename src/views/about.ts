import { customElement, html } from 'lit-element';
import { PageScrollElement } from './page-scroll-element';

import DrHilgner from '../../markdown/ueber-uns/dr-hilgner.md';
import DrVogt from '../../markdown/ueber-uns/dr-vogt.md';
import Team from '../../markdown/ueber-uns/team.md';
import Labor from '../../markdown/ueber-uns/labor.md';
import Praxisleitbild from '../../markdown/ueber-uns/praxisleitbild.md'

@customElement('view-about')
export class ViewAbout extends PageScrollElement {
  constructor () {
    // Always call super() first
    super();

    // Initialize properties
    this.header = [
      'Lernen Sie uns kennen',
      'Über uns'
    ];

    this.articles = [
      {
        href: 'hilgner',
        name: 'Dr. Karina Hilgner',
        content: DrHilgner
      },
      {
        href: 'vogt',
        name: 'Dr. Benjamin Vogt',
        content: DrVogt
      },
      {
        href: 'team',
        name: 'Unser Team',
        content: Team
      },
      {
        href: 'labor',
        name: 'Labor',
        content: Labor
      },
      {
        href: 'praxisleitbild',
        name: 'Praxisleitbild',
        content: Praxisleitbild
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
                    src="./images/ueber-uns/ueber-hilgner-vogt-672.jpeg"
                    sizes="(min-width: 1025px) 63vw, (min-width: 768px) 87vw, 92vw"
                    srcset="./images/ueber-uns/ueber-hilgner-vogt-296.jpeg 296w, ./images/ueber-uns/ueber-hilgner-vogt-320.jpeg 320w, ./images/ueber-uns/ueber-hilgner-vogt-390.jpeg 390w, ./images/ueber-uns/ueber-hilgner-vogt-672.jpeg 672w, ./images/ueber-uns/ueber-hilgner-vogt-794.jpeg 794w, ./images/ueber-uns/ueber-hilgner-vogt-1028.jpeg 1028w, ./images/ueber-uns/ueber-hilgner-vogt-1600.jpeg 1600w"
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
