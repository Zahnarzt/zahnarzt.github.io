import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PageViewElement } from './page-view-element';

import '../components/section-header';
import '../components/section-content';

import Datenschutz from '../../markdown/datenschutz/datenschutz.md';

@customElement('view-dataprotection')
export class ViewDataProtection extends PageViewElement {
  protected render() {
    return html`
      <section-header>
        <h1 slot="headline">Datenschutz</h1>
      </section-header>
      <section-content id="datenschutz" content=${Datenschutz}></section-content>
    `
  }
}
