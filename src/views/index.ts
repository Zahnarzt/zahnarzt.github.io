import { html, customElement } from 'lit-element';
import { PageViewElement } from './page-view-element';

import '../components/section-intro';
import '../components/section-content';

import MdIntro from '../../markdown/index/content.md';

@customElement('view-index')
export class ViewIndex extends PageViewElement {
  protected render() {
    return html`
      <section-intro></section-intro>
      <section-content content=${MdIntro}></section-content>
    `;
  }
}
