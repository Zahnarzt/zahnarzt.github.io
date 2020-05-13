import {
  customElement,
  html,
  LitElement,
  property
} from 'lit-element';
import StyleGrid from './css-grid.css';
import StyleIntro from './section-intro.css';

import './section-header';
import './lazy-image';

@customElement('section-intro')
export class SectionIntro extends LitElement {

  @property({type: Date})     _date = new Date();
  @property({type: Boolean})  _businessOpen = false;

  static get styles() {
    return [
      StyleGrid,
      StyleIntro
    ];
  }

  render() {
    return html`
      <section class="grid-container grid-container--intro">
        <header class="section__header">
          <h1 slot="headline">Zahnarztpraxis<br>Dr. Karina Hilgner<br>Dr. Benjamin Vogt</h1>
        </header>
        <lazy-image class="picture small border"
                    src="./images/index/intro-hilgner-vogt-672.jpeg"
                    sizes="(min-width: 1025px) 63vw, (min-width: 768px) 87vw, 92vw"
                    srcset="./images/index/intro-hilgner-vogt-296.jpeg 296w, ./images/index/intro-hilgner-vogt-320.jpeg 320w, ./images/index/intro-hilgner-vogt-390.jpeg 390w, ./images/index/intro-hilgner-vogt-672.jpeg 672w, ./images/index/intro-hilgner-vogt-794.jpeg 794w, ./images/index/intro-hilgner-vogt-1028.jpeg 1028w, ./images/index/intro-hilgner-vogt-1600.jpeg 1600w"
                    alt="Dr. Hilgner und Dr.Vogt">
        </lazy-image>
        <div class="times">
          <h4>Öffnungszeiten</h4>
          <span class="time-row"><b>Mo-Do:</b><time>08:00 - 20:00 Uhr</time></span>
          <span class="time-row"><b>Fr:</b><time>07:00 - 19:00 Uhr</time></span>
        </div>
        <a class="phone" href="tel:+49221795014" title="Rufen Sie einfach an mit einem Mausklick.">
          <h4>Terminvereinbarungen</h4>
          <p>Rufen Sie einfach an:<br>
          <b class="number">0221 / 79 50 14</b></p>
        </a>
        <a class="address" href="./download/Zahnarztpraxis Dr. Hilgner & Dr. Vogt.vcf" title="Vistenkarte herunterladen." download>
          <address>
            <h4>Anschrift</h4>
            Zahnarztpraxis<br>
            Dr. Hilgner & Dr. Vogt<br>
            Weilerweg 33<br>
            50765 Köln
          </address>
        </a>
      </section>
    `;
  }
}
