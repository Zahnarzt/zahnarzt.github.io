import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import StyleGrid from './css-grid.css';
import StyleContent from './section-content.css';

@customElement('section-content')
export class SectionContent extends LitElement {
  @property({type: String})
  content = '';

  static get styles() {
    return [
      StyleGrid,
      StyleContent
    ];
  }

  render() {
    return html`
      <div class="grid-container grid-container--content">
        <div class="background"></div>
        <article>
          ${unsafeHTML(this.content)}
        </article>
      </div>
    `;
  }
}
