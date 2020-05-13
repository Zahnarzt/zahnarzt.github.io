import * as stylesheet from './lazy-image.css';

declare global {
  interface HTMLElementTagNameMap {
    'lazy-image': LazyImage;
  }
}

interface IsIntersecting {
  isIntersecting: boolean;
}

const imageTemplate = `
<slot name="placeholder-loading" aria-hidden="false"></slot>
<img id="image" aria-hidden="true">
<slot name="placeholder-error-image" aria-hidden="true"></slot>
<slot name="placeholder-error-text" aria-hidden="true"></slot>
`;

/** The LazyImage web component */
export default class LazyImage extends HTMLElement {
  private shadowLoading: HTMLSlotElement | null;

  private shadowImage: HTMLImageElement;

  private shadowErrorImage: HTMLSlotElement | null;

  private shadowErrorText: HTMLSlotElement | null;

  private observer: IntersectionObserver | null;

  /**
   * Define witch attribunes of the custom element need to be observed
   */
  static get observedAttributes(): string[] {
    return ['src', 'sizes', 'srcset', 'alt'];
  }

  /**
   * An instance of the element is created or upgraded.
   */
  constructor() {
    super();
    console.log('lazy image constructor');

    // Add the main template to the component
    const templateElement = document.createElement('template');

    // Add stylesheet
    templateElement.innerHTML = `<style>${stylesheet.default}</style>`;

    // Prepare template
    templateElement.innerHTML += imageTemplate;

    // Attach template content to the shadow dom
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(templateElement.content.cloneNode(true));

    // Assign shadow elements
    this.shadowLoading =
      shadowRoot.querySelector('slot[name=placeholder-loading]');
    this.shadowImage =
      shadowRoot.getElementById('image') as HTMLImageElement;
    this.shadowErrorImage =
      shadowRoot.querySelector('slot[name=placeholder-error-image]');
    this.shadowErrorText =
      shadowRoot.querySelector('slot[name=placeholder-error-text]');

    this.observer = null;
  }

  /**
   * Called every time the element is inserted into the DOM.
   * @public
   */
  public connectedCallback(): void {
    this.setAttribute('role', 'presentation');

    if(this.hasAttribute('alt')) {
      this.shadowImage.alt = this.getAttribute('alt') || '';
    }
    if (this.shadowLoading && !this.shadowLoading.assignedNodes().length) {
      this.shadowLoading.setAttribute('aria-hidden', 'true');
    }
    if (this.shadowErrorImage && !this.shadowErrorImage.assignedNodes().length) {
      this.shadowErrorImage.setAttribute('aria-hidden', 'true');
    }
    if (this.shadowErrorText && !this.shadowErrorText.assignedNodes().length) {
      this.shadowErrorText.setAttribute('aria-hidden', 'true');
    }

    this.shadowImage.addEventListener('load', this._onLoad.bind(this));
    this.shadowImage.addEventListener('error', this._onError.bind(this));

    if ('loading' in HTMLImageElement.prototype) {
      this.shadowImage.setAttribute('loading', 'lazy');
      this._loadImage();
    } else if ('IntersectionObserver' in window) {
      this._addIntersectionObserver();
    } else {
      this._loadImage();
    }
  }

  /**
   * Called every time the element is removed from the DOM.
   * @public
   */
  public disconnectedCallback(): void {
    this._removeIntersectionObserver();
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

  /**
   * Sets the `intersecting` property when the element is on screen.
   * @private
   * @param  {[IntersectionObserverEntry]} entries
   */
  private _handleIntersection =
    (entries: IntersectionObserverEntry[] | null): void => {
      const isIntersecting = ({isIntersecting}: IsIntersecting): boolean => {
        return isIntersecting;
      };

      if (entries) {
        if (entries.some(isIntersecting)) {
          this._loadImage();
        }
      }
    }

  /**
   * Initializes the IntersectionObserver when the element instantiates.
   * @private
   */
  private _addIntersectionObserver(): void {
    /* istanbul ignore if */
    if (this.observer) {
      this._removeIntersectionObserver();
    }

    this.observer =
      new IntersectionObserver(this._handleIntersection.bind(this), {
        root: null,
        rootMargin: '10px',
        threshold: [0.0, 1.0]
      });
    this.observer.observe(this);
  }

  /**
   * Unobserves and unloads the IntersectionObserver.
   * @private
   */
  private _removeIntersectionObserver(): void {
    if (!this.observer) {
      return;
    }
    this.observer.unobserve(this);
    this.observer = null;
  }

  /**
   * Sets the intersecting image attributes.
   * @private
   */
  private _loadImage(): void {
    if(this.hasAttribute('srcset')) {
      if(this.hasAttribute('sizes')) {
        this.shadowImage.sizes = this.getAttribute('sizes') || '';
      }

      this.shadowImage.srcset = this.getAttribute('srcset') || '';
    }
    if(this.hasAttribute('src')) {
      this.shadowImage.src = this.getAttribute('src') || '';
    }
  }

  /**
   * Called if image is loaded.
   * Dispatches `loaded` event and replaces aria-hidden attributes.
   * @private
   */
  private _onLoad = (): void => {
    this.setAttribute('loaded', '');
    this.dispatchEvent(
      new CustomEvent(
        'loaded',
        {
          bubbles: true,
          composed: true,
          detail: {success: true}
        }
      )
    );

    if (this.shadowLoading) {
      this.shadowLoading.setAttribute('aria-hidden', 'true');
    }
    this.shadowImage.setAttribute('aria-hidden', 'false');
    if (this.shadowErrorImage) {
      this.shadowErrorImage.setAttribute('aria-hidden', 'true');
    }
    if (this.shadowErrorImage) {
      this.shadowErrorImage.setAttribute('aria-hidden', 'true');
    }

    this._removeIntersectionObserver();
  }

  /**
   * Called if image load fails.
   * Dispatches `error` event and replaces aria-hidden attributes.
   * @private
   */
  private _onError = (): void => {
    this.setAttribute('error', '');
    this.dispatchEvent(
      new CustomEvent(
        'error',
        {
          bubbles: true,
          composed: true,
          detail: {success: false}
        }
      )
    );

    if (this.shadowLoading) {
      this.shadowLoading.setAttribute('aria-hidden', 'true');
    }
    this.shadowImage.setAttribute('aria-hidden', 'true');
    if (this.shadowErrorImage) {
      this.shadowErrorImage.setAttribute('aria-hidden', 'false');
    }
    if (this.shadowErrorText) {
      this.shadowErrorText.setAttribute('aria-hidden', 'false');
    }
  }
}

window.customElements.define('lazy-image', LazyImage);
