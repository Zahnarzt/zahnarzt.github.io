import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import StyleGrid from './css-grid.css';
import StyleHeader from './section-header.css';

@customElement('section-header')
export class SectionHeader extends LitElement {
  static get styles() {
    return [
      StyleGrid,
      StyleHeader
    ];
  }

  render() {
    return html`
      <section class="grid-container grid-container--header">
        <header class="section__header">
          <slot name="subheadline"></slot>
          <slot name="headline"></slot>
          <slot name="text"></slot>
        </header>
      </section>
    `;
  }
}
