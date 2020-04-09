import { customElement } from 'lit-element';
import { PageScrollElement } from './page-scroll-element';

import DrHilgner from '../../markdown/ueber-uns/dr-hilgner.md';
import DrVogt from '../../markdown/ueber-uns/dr-vogt.md';
import Team from '../../markdown/ueber-uns/team.md';
import Labor from '../../markdown/ueber-uns/labor.md';
import Praxisleitbild from '../../markdown/ueber-uns/praxisleitbild.md'

@customElement('view-about')
export class ViewAbout extends PageScrollElement {
  constructor () {
    // Always call super() first
    super();

    // Initialize properties
    this.header = [
      'Lernen Sie uns kennen',
      'Über uns'
    ];

    this.articles = [
      {
        href: 'hilgner',
        name: 'Dr. Karina Hilgner',
        content: DrHilgner
      },
      {
        href: 'vogt',
        name: 'Dr. Benjamin Vogt',
        content: DrVogt
      },
      {
        href: 'team',
        name: 'Unser Team',
        content: Team
      },
      {
        href: 'labor',
        name: 'Labor',
        content: Labor
      },
      {
        href: 'praxisleitbild',
        name: 'Praxisleitbild',
        content: Praxisleitbild
      }
    ]
  }
}
