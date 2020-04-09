import { customElement } from 'lit-element';
import { PageScrollElement } from './page-scroll-element';

import Prophylaxe from '../../markdown/leistungen/prophylaxe.md';
import Zahnerhaltung from '../../markdown/leistungen/zahnerhaltung.md';
import Kinderbehandlung from '../../markdown/leistungen/kinderbehandlung.md';
import Zahnfleischbehandlung from '../../markdown/leistungen/zahnfleischbehandlung.md';
import ZahnaerztlicheChirugie from '../../markdown/leistungen/zahnaerztliche-chirugie.md';
import DysfunktionaleErkrankungen from '../../markdown/leistungen/dysfunktionele-erkrankungen.md';
import Zahnersatz from '../../markdown/leistungen/zahnersatz.md';
import AesthetischeZahnheilkunde from '../../markdown/leistungen/aesthetische-zahnheilkunde.md';
import Implantatberatung from '../../markdown/leistungen/implantatberatung.md';

@customElement('view-services')
export class ViewServices extends PageScrollElement {
  constructor () {
    // Always call super() first
    super();

    // Initialize properties
    this.header = [
      'Unser Praxisspektrum',
      'Leistungen'
    ];

    this.articles = [
      {
        href: 'prophylaxe',
        name: 'Prophylaxe',
        content: Prophylaxe
      },
      {
        href: 'zahnerhaltung',
        name: 'Zahnerhaltung',
        content: Zahnerhaltung
      },
      {
        href: 'kinderbehandlung',
        name: 'Kinderbehandlung',
        content: Kinderbehandlung
      },
      {
        href: 'zahnfleischbehandlung',
        name: 'Zahnfleischbehandlung',
        content: Zahnfleischbehandlung
      },
      {
        href: 'chirugie',
        name: 'Zahnärztliche Chirugie',
        content: ZahnaerztlicheChirugie
      },
      {
        href: 'dysfunktional',
        name: 'Behandlung dysfunktioneller Erkrankungen',
        content: DysfunktionaleErkrankungen
      },
      {
        href: 'zahnersatz',
        name: 'Zahnersatz',
        content: Zahnersatz
      },
      {
        href: 'aesthetisch',
        name: 'Ästhetische Zahnheilkunde',
        content: AesthetischeZahnheilkunde
      },
      {
        href: 'implantatberatung',
        name: 'Implantatberatung',
        content: Implantatberatung
      }
    ]
  }
}
