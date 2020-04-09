import { customElement } from 'lit-element';
import { PageScrollElement } from './page-scroll-element';

import Corona from '../../markdown/aktuelles/corona.md';
import Abschied from '../../markdown/aktuelles/abschied.md';

@customElement('view-news')
export class ViewNews extends PageScrollElement {
  constructor () {
    // Always call super() first
    super();

    // Initialize properties
    this.header = [
      'Rund um die Praxis',
      'Aktuelles'
    ];

    this.articles = [
      {
        href: 'corona',
        name: 'Gemeinsam gegen Corona-Viren',
        content: Corona
      },
      {
        href: 'abschied',
        name: 'Abschied Herr Jansen',
        content: Abschied
      }
    ]
  }
}
