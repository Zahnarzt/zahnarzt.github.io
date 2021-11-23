import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PageViewElement } from './page-view-element';
import '../components/section-contact';

@customElement('view-contact')
export class ViewContact extends PageViewElement {
  protected render() {
    return html`
      <section-contact></section-contact>
    `;
  }
}
