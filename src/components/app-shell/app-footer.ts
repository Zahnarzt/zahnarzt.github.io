import { connect } from 'pwa-helpers/connect-mixin.js';
import * as Stylesheet from './app-footer.css';
import {
  Logo
} from '../../icons/app-icons';
// This element is connected to the Redux store.
import { store/* , RootState */ } from '../../store/store';

declare global {
  interface HTMLElementTagNameMap {
    'app-footer': AppFooter;
  }
}

const Template = (_page: string) => `
<footer class="grid-container grid-container--footer">
  <div class="logo">${Logo}</div>
  <div class="copyright">
    <p>
      <a ?selected="${_page === 'impressum'}" href="/impressum">Impressum</a> |
      <a ?selected="${_page === 'datenschutz'}" href="/datenschutz">Datenschutz</a>
    </p>
    <p>Copyright &copy; 2020 Zahnärzte Dr. Hilgner & Dr. Vogt. Alle Rechte vorbehalten.</p>
  </div>
</footer>
`;

/** The AppFooter web component */
export default class AppFooter extends connect(store)(HTMLElement) {
  private _shadowRoot: ShadowRoot;

  private _page: string;

  /**
   * An instance of the element is created or upgraded.
   */
  constructor() {
    super();

    // Add the main template to the component
    const templateElement = document.createElement('template');

    // Add stylesheet
    templateElement.innerHTML = `<style>${Stylesheet.default}</style>`;

    // Prepare template
    this._page = 'index';
    templateElement.innerHTML += Template(
      this._page
    );

    // Attach template content to the shadow dom
    this._shadowRoot = this.attachShadow({mode: 'open'});
    this._shadowRoot.appendChild(templateElement.content.cloneNode(true));

    this._render();
  }

  /**
   * Called every time the element is inserted into the DOM.
   * @public
   */
  public connectedCallback(): void {
    super.connectedCallback();
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'banner');
    }
  }

  /**
   * Called when an observed attribute has been added, removed, updated, or
   * replaced. Also called for initial values when an element is created by the
   * parser, or upgraded. Note: only attributes listed in the observedAttributes
   * property will receive this callback.
   * @public
   * @param attr The attribute that changes
   * @param oldValue Old value of the attribute
   * @param newValue New value of the attribute
   */
  public attributeChangedCallback(
    attr: string,
    oldValue: string,
    newValue: string
  ): void {
    if (oldValue !== newValue) {
      this[attr] = newValue;
    }
  }

  stateChanged(state) {
    this._page = state.app!.page;
    this._render();
  }

  private _render() {
  }
}

window.customElements.define('app-footer', AppFooter);
