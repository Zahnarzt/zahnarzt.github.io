import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { PageScrollElement } from './page-scroll-element';

import Prophylaxe from '../../markdown/leistungen/prophylaxe.md';
import Zahnerhaltung from '../../markdown/leistungen/zahnerhaltung.md';
import Kinderbehandlung from '../../markdown/leistungen/kinderbehandlung.md';
import Zahnfleischbehandlung from '../../markdown/leistungen/zahnfleischbehandlung.md';
import ZahnaerztlicheChirugie from '../../markdown/leistungen/zahnaerztliche-chirugie.md';
import DysfunktionaleErkrankungen from '../../markdown/leistungen/dysfunktionele-erkrankungen.md';
import Zahnersatz from '../../markdown/leistungen/zahnersatz.md';
import AesthetischeZahnheilkunde from '../../markdown/leistungen/aesthetische-zahnheilkunde.md';
import Implantologie from '../../markdown/leistungen/Implantologie.md';

@customElement('view-services')
export class ViewServices extends PageScrollElement {
  constructor () {
    // Always call super() first
    super();

    // Initialize properties
    this.header = [
      'Unser Praxisspektrum',
      'Leistungen'
    ];

    this.articles = [
      {
        href: 'prophylaxe',
        name: 'Prophylaxe',
        content: Prophylaxe
      },
      {
        href: 'zahnerhaltung',
        name: 'Zahnerhaltung',
        content: Zahnerhaltung
      },
      {
        href: 'kinderbehandlung',
        name: 'Kinderbehandlung',
        content: Kinderbehandlung
      },
      {
        href: 'zahnfleischbehandlung',
        name: 'Zahnfleischbehandlung',
        content: Zahnfleischbehandlung
      },
      {
        href: 'chirugie',
        name: 'Zahnärztliche Chirugie',
        content: ZahnaerztlicheChirugie
      },
      {
        href: 'dysfunktional',
        name: 'Behandlung dysfunktioneller Erkrankungen',
        content: DysfunktionaleErkrankungen
      },
      {
        href: 'zahnersatz',
        name: 'Zahnersatz',
        content: Zahnersatz
      },
      {
        href: 'aesthetisch',
        name: 'Ästhetische Zahnheilkunde',
        content: AesthetischeZahnheilkunde
      },
      {
        href: 'implantologie',
        name: 'Implantologie',
        content: Implantologie
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
                    src="./images/leistungen/leistungen-672.jpeg"
                    sizes="(min-width: 1025px) 63vw, (min-width: 768px) 87vw, 92vw"
                    srcset="./images/leistungen/leistungen-296.jpeg 296w, ./images/leistungen/leistungen-320.jpeg 320w, ./images/leistungen/leistungen-390.jpeg 390w, ./images/leistungen/leistungen-672.jpeg 672w, ./images/leistungen/leistungen-794.jpeg 794w, ./images/leistungen/leistungen-1028.jpeg 1028w, ./images/leistungen/leistungen-1600.jpeg 1600w"
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
