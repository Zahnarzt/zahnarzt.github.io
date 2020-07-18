import { property } from 'lit-element';
import { PageViewElement } from './page-view-element';
import '../components/section-hero';
import '../components/section-content';

interface IArticle {
  href: string;
  name: string;
  content: string;
}

export class PageScrollElement extends PageViewElement {
  @property({type: Array})
  header: string[] = [];

  @property({type: Array})
  articles: Array<IArticle> = [];

  _handleClickSubnav(event) {
    event.preventDefault();
    const composedPath = event.composedPath()[0];
    const hash = composedPath?.getAttribute('href');
    const htmlId = hash?.replace('#', '');
    const element = this.shadowRoot?.getElementById(htmlId);

    if (element) {
      const offset = 77 + (64 - 12); // header + margin element
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
           top: offsetPosition,
           behavior: "smooth"
      });
    }
  }
}
