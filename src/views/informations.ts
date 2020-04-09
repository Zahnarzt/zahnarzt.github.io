import { customElement } from 'lit-element';
import { PageScrollElement } from './page-scroll-element';

import Formulare from '../../markdown/informationen/formulare.md';
import Zahnzusatz from '../../markdown/informationen/zahnzusatz.md';

@customElement('view-informations')
export class ViewInformations extends PageScrollElement {
  constructor () {
    // Always call super() first
    super();

    // Initialize properties
    this.header = [
      'Praktische Hinweise',
      'Informationen'
    ];

    this.articles = [
      {
        href: 'formulare',
        name: 'Formulare zum Download',
        content: Formulare
      },
      {
        href: 'zahnzusatzversicherung',
        name: 'Zahnzusatzversicherung',
        content: Zahnzusatz
      }
    ]
  }
}
