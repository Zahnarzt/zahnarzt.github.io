import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import StyleGrid from './css-grid.css';
import StyleContact from './section-contact.css';

@customElement('section-contact')
export class SectionContact extends LitElement {

  @property({type: Date})     _date = new Date();
  @property({type: Boolean})  _businessOpen = false;

  static get styles() {
    return [
      StyleGrid,
      StyleContact
    ];
  }

  render() {
    return html`
      <section class="grid-container grid-container--contact">
        <header>
          <h2>Wo & wie Sie uns finden</h2>
          <h1>Kontakt</h1>
        </header>
        <div class="maps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.7474227155976!2d6.882781951217275!3d51.02081487945781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf31b57c5361ab%3A0x869a03e553df029e!2sDr.%20Karina%20Hilgner%20%26%20Dr.%20Benjamin%20Vogt!5e0!3m2!1sde!2sde!4v1595085765570!5m2!1sde!2sde"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0">
          </iframe>
        </div>
        <a class="address" href="./download/Zahnarztpraxis Dr. Hilgner & Dr. Vogt.vcf" title="Vistenkarte herunterladen." download>
          <address>
            <h3>Anschrift</h3>
            Zahnarztpraxis<br>
            Dr. Hilgner & Dr. Vogt<br>
            Weilerweg 33<br>
            50765 Köln
          </address>
        </a>
        <a class="phone" href="tel:+49221795014" title="Rufen Sie einfach an mit einem Mausklick.">
          <h3>Terminvereinbarungen</h3>
          <p>Rufen Sie einfach an:<br>
          <b class="number">0221 / 79 50 14</b></p>
        </a>
        <a class="times">
          <h3>Öffnungszeiten</h3>
          <span class="time-row"><b>Mo-Do:</b><time>08:00 - 20:00 Uhr</time></span>
          <span class="time-row"><b>Fr:</b><time>07:00 - 19:00 Uhr</time></span>
        </a>
      </section>
    `;
  }
}
