import { connect } from 'pwa-helpers/connect-mixin.js';
import * as Stylesheet from './app-header.css';
import {
  Logo,
  IconMenu,
  IconClose
} from '../../icons/app-icons';
// This element is connected to the Redux store.
import { store/* , RootState */ } from '../../store/store';
// These are the actions needed by this element.
import {
  updateMenuState
} from '../../store/actions/app';

declare global {
  interface HTMLElementTagNameMap {
    'app-header': AppHeader;
  }
}

interface IMenu {
  opened: boolean;
  text: string;
  icon: string;
}

const Template = (_page: string) => `
<header class="grid-container grid-container--header">
  <a href="/" class="logo">${Logo}</a>

  <div class="menu">
    <button type="button">
      <span></span>
      <svg width="36" height="36" viewBox="0 0 24 24"></svg>
    </button>
  </div>

  <!-- This gets hidden on a small screen-->
  <nav class="navigation">
    <a ?selected="${_page === 'ueber-uns'}" href="/ueber-uns">Über uns</a>
    <a ?selected="${_page === 'leistungen'}" href="/leistungen">Leistungen</a>
    <a ?selected="${_page === 'informationen'}" href="/informationen">Informationen</a>
    <a ?selected="${_page === 'aktuelles'}" href="/aktuelles">Aktuelles</a>
    <a ?selected="${_page === 'kontakt'}" href="/kontakt">Kontakt</a>
  </nav>
</header>
`;

/** The AppHeader web component */
export default class AppHeader extends connect(store)(HTMLElement) {
  private _shadowRoot: ShadowRoot;

  private _page: string;

  private _menu: IMenu;

  private _scrollInView: boolean;

  private _scrollLastTop: number;

  private _scrollLastTimestamp: number;

  private _shadowMenuButton: HTMLElement | null;

  private _shadowNavigation: HTMLElement | null;

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

    // Assign shadow elements
    this._shadowMenuButton = this._shadowRoot.querySelector('button');
    this._shadowNavigation = this._shadowRoot.querySelector('.navigation');

    // Set properties
    this._menu = {
      opened: false,
      text: 'Menu',
      icon: IconMenu
    };
    this._scrollInView = true;
    this._scrollLastTop = 0;
    this._scrollLastTimestamp = 0;

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

    if (this._shadowMenuButton) {
      this._shadowMenuButton.addEventListener('click', () => {
        this._onMenuClick();
      }, false);
    }

    window.addEventListener('scroll', () => {
      this._updateScrollState();
    }, false);
  }

  /**
   * Called every time the element is removed from the DOM.
   * @public
   */
  public disconnectedCallback(): void {
    this.removeEventListener('click', this._onMenuClick, false);
    window.removeEventListener('scroll', () => {
      this._updateScrollState();
    }, false);
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
    this._menu.opened = state.app!.menuOpened;
    this._render();
  }

  private _render() {
    const menuText = this._shadowMenuButton?.querySelector('span');
    const menuIcon = this._shadowMenuButton?.querySelector('svg');

    if (this._menu.opened) {
      this._menu = {
        opened: true,
        text: 'Schließen',
        icon: IconClose
      };
      this._shadowMenuButton?.setAttribute('opened', `${this._menu.opened}`);
      this._shadowNavigation?.setAttribute('opened', `${this._menu.opened}`);

      if (menuText) {
        menuText.innerText = this._menu.text;
      }

      if (menuIcon) {
        menuIcon.innerHTML = this._menu.icon;
      }
    } else {
      this._menu = {
        opened: false,
        text: 'Menu',
        icon: IconMenu
      };
      this._shadowMenuButton?.removeAttribute('opened');
      this._shadowNavigation?.removeAttribute('opened');

      if (menuText) {
        menuText.innerText = this._menu.text;
      }

      if (menuIcon) {
        menuIcon.innerHTML = this._menu.icon;
      }
    }

    const prevNav =
    this._shadowNavigation?.querySelector(`a[selected]`);
    const activeNav =
      this._shadowNavigation?.querySelector(`a[href='/${this._page}']`);
    prevNav?.removeAttribute('selected');
    activeNav?.setAttribute('selected', 'selected');
  }

  private _onMenuClick() {
    // ToDo dispatch only if bool changes
    store.dispatch(updateMenuState(this._menu.opened ? false : true));
  }

  private _updateScrollState() {
    const now = performance.now();
    const scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    const windowHeight = window.innerHeight;
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = this.offsetHeight;

    // scroll direction down
    if (top > this._scrollLastTop) {
      if (top >= scrollHeight - windowHeight) {
        return;
      }

      if (top >= headerHeight) {
        if (this._scrollInView) {
          this.style.transform = `translate3d(0, ${-headerHeight}px, 0)`;
          this._setTransitionDuration(top, now);
          this._scrollInView = false;
        }
      } else {
        this.style.transform = `translate3d(0, ${-top}px, 0)`;
        this._setTransitionDuration(top, now);
      }
    }
    // scroll direction up
    else if (top < this._scrollLastTop) {
      if (top > headerHeight) {
        if (!this._scrollInView) {
          this.style.transform = `translate3d(0, 0, 0)`;
          this._setTransitionDuration(top, now);
          this._scrollInView = true;
        }
      } else {
        if (this.style.transform !== `translate3d(0px, 0px, 0px)`) {
          this.style.transform = `translate3d(0, ${-top}px, 0)`;
          this._setTransitionDuration(top, now);
        }
      }
    }

    this._scrollLastTop = top;
    this._scrollLastTimestamp = now;
  }

  private _setTransitionDuration(top, now) {
    const dScrollTop = top - this._scrollLastTop;
    const dTime = now - this._scrollLastTimestamp;
    const scrollVelocity = dScrollTop / dTime;
    this.style.transitionDuration =
          this._clamp((top - this._scrollLastTop) / scrollVelocity, 0, 300) + 'ms';
  }

  private _clamp(v, min, max): number {
    return Math.min(max, Math.max(min, v));
  }
}

window.customElements.define('app-header', AppHeader);
