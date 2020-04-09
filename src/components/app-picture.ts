import {
  customElement,
  html,
  LitElement,
  property
} from 'lit-element';
import StyleAppPicture from './app-picture.css';

@customElement('app-picture')
export class AppPicture extends LitElement {
  @property({type: String})
  alt = '';

  @property({type: String})
  default = '';

  @property({type: String})
  tablet = '';

  @property({type: String})
  desktop = '';

  @property({type: String})
  webp = '';

  static get styles() {
    return [StyleAppPicture];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      ${this.default
      ? html`
      <picture>
        ${this.desktop
        ? html`
        <source media="(min-width: 1025px)"
                srcset=${this.desktop}/>
        `
        : ``}
        ${this.tablet
        ? html`
        <source
          media="(min-width: 768px)"
          srcset=${this.tablet}/>
        `
        : ``}
        <img src=${this.default} alt=${this.alt} />
      </picture>`
      : html`
      <i>Kein Bild gefunden</i>
      `}
    `;
  }
}
