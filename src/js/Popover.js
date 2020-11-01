import popoverHTML from '../popover.html';

export default class Popover {
  constructor({ parentEl, title, text }) {
    this.parentEl = parentEl;
    this.title = title;
    this.text = text;
    this.selectors = {
      body: '[data-popover="body"]',
      title: '[data-popover="title"]',
      text: '[data-popover="text"]',
    };
    this.els = {
      body: null,
      title: null,
      text: null,
    };
  }

  init() {
    const bodyEl = document.getElementsByTagName('body')[0];
    bodyEl.insertAdjacentHTML('beforeend', popoverHTML);

    this.els.body = bodyEl.querySelector(this.selectors.body);

    this.els.title = this.els.body.querySelector(this.selectors.title);
    this.els.title.textContent = this.title;

    this.els.text = this.els.body.querySelector(this.selectors.text);
    this.els.text.textContent = this.text;

    const parentRect = this.parentEl.getBoundingClientRect();
    const popoverRect = this.els.body.getBoundingClientRect();
    popoverRect.height += 10; // Прибавить высоту стрелки

    this.els.body.style.top = `${window.scrollY + parentRect.top - popoverRect.height}px`;
    this.els.body.style.left = `${parentRect.left + (parentRect.width - popoverRect.width) / 2}px`;
  }
}
