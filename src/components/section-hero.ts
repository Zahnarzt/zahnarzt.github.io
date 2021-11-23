import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import './lazy-image';
import StyleGrid from './css-grid.css';
import Style from './section-hero.css';

export interface IArticle {
  href: string;
  name: string;
  content: string | null;
  subnavigation?: Array<IArticle>;
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
          <h3>Inhalt</h3>
          <ul>
          <!-- ${this.articles.map((article) =>
            html`
              <li>
                <a href="#${article.href}">${article.name}</a>
              </li>
            `
          )} -->
          ${this.articles.map((article) => {
            // if (article.content) {
            //   return html`
            //     <li>
            //       <a href="#${article.href}">${article.name}</a>
            //     </li>
            //   `
            // }
            return html`
              <li>
              ${article.subnavigation ?
                html`
                  <span>${article.name}</span>
                  <ul>
                    ${article.subnavigation.map((subarticle) =>
                      html`
                        <li><a href="#${subarticle.href}">${subarticle.name}</a></li>
                      `
                    )}
                  </ul>
                `:
                html`<li><a href="#${article.href}">${article.name}</a></li>`
              }
              </li>
            `
          })}
          <!-- ${this.articles.map((article) => {
            if (article.content) {
              return html`
                <li>
                  <a href="#${article.href}">${article.name}</a>
                </li>
              `
            } else
            if (article.subnavigation) {

              return article.subnavigation.map((subarticle) => {
                if (subarticle.content) {
                  return html`
                    <li>
                      <a href="#${subarticle.href}">${subarticle.name}</a>
                    </li>
                  `
                } else {
                  return html``;
                }
              })
            } else {
              return html``;
            }
          })} -->
          </ul>
        </div>
        <slot name="picture"></slot>
      </section>
    `;
  }
}

