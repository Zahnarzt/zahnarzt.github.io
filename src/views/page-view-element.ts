import { LitElement } from 'lit';
import {property} from 'lit/decorators.js';

export class PageViewElement extends LitElement {
  @property({type: Boolean})
  active = false;

  // Only render this page if it's actually visible.
  protected shouldUpdate() {
    return this.active;
  }
}
