import {
  customElement,
  html,
  LitElement
} from 'lit-element';
import StyleGrid from './css-grid.css';
import StyleRibbon from './section-ribbon.css';

@customElement('section-ribbon')
export class SectionRibbon extends LitElement {
  static get styles() {
    return [
      StyleGrid,
      StyleRibbon
    ];
  }

  render() {
    return html`
      <section class="grid-container grid-container--ribbon">
        <div class="ribbon-content">
          <slot></slot>
        </div>
      </section>
    `;
  }
}
