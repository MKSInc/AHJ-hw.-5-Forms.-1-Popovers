import Popover from './Popover';

export default class MainController {
  constructor() {
    this.popovers = {
      install: {
        parentEl: null,
        title: 'Install and Download',
        text: 'Ipsa iusto nam nihil ratione, rem saepe tempore!',
      },
      sendMessage: {
        parentEl: null,
        title: 'Send a message',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda ducimus incidunt provident unde vel!',
      },
    };
    this.popover = null;
    this.isPopoverActive = false;
  }

  init() {
    this.popovers.install.parentEl = document.querySelector('[data-popover="install"]');
    this.popovers.sendMessage.parentEl = document.querySelector('[data-popover="sendMessage"]');

    for (const popover of Object.values(this.popovers)) {
      popover.parentEl.addEventListener('click', this.onPopoverParentClick.bind(this));
    }
  }

  onPopoverParentClick(event) {
    const popoverName = event.currentTarget.dataset.popover;

    if (this.isPopoverActive) {
      this.popover.els.body.remove();
      this.isPopoverActive = false;
      if (this.popover.parentEl.dataset.popover === popoverName) return;
    }

    this.popover = new Popover(this.popovers[popoverName]);
    this.popover.init();
    this.isPopoverActive = true;
  }
}
