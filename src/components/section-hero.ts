import {
  customElement,
  html,
  LitElement,
  property
} from 'lit-element';

import './lazy-image';
import StyleGrid from './css-grid.css';
import Style from './section-hero.css';

interface IArticle {
  href: string;
  name: string;
}

@customElement('section-hero')
export class SectionHero extends LitElement {
  @property({type: Array})
  header: Array<string> = [];

  @property({type: Array})
  articles: Array<IArticle> = [];

  @property({type: Function})
  handleClick;

  static get styles() {
    return [
      StyleGrid,
      Style
    ];
  }

  render() {
    const subheadline = this.header[0];
    const headline = this.header[1];

    return html`
      <section class="grid-container grid-container--about">
        <header>
          <h2>${subheadline}</h2>
          <h1>${headline}</h1>
        </header>
        <div class="box box-one">
          <h4>Inhalt</h4>
          <ul>
          ${this.articles.map((article) =>
            html`
              <li>
                <a href="#${article.href}">${article.name}</a>
              </li>
            `
          )}
          </ul>
        </div>
        <slot name="picture"></slot>
      </section>
    `;
  }
}

