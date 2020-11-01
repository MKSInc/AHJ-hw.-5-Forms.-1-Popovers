import MainController from '../MainController';

describe('MainController ', () => {
  let mainCtrl;
  beforeEach(() => {
    document.body.innerHTML = `
    <div id="container">
      <a data-popover="install" class="btn">Download and install</a>
      <a data-popover="sendMessage" class="btn">Send a message</a>
    </div>
    `;
    // const containerEl = document.getElementById('container');
    mainCtrl = new MainController();

    mainCtrl.init();
  });

  test('if popover is not active, should add popover to DOM tree', () => {
    mainCtrl.popovers.install.parentEl.click();
    expect(document.querySelector('[data-popover="body"]')).not.toBeNull();
  });

  test('if popover is active, should remove popover from DOM tree', () => {
    mainCtrl.popovers.sendMessage.parentEl.click();
    mainCtrl.popovers.sendMessage.parentEl.click();
    expect(document.querySelector('[data-popover="body"]')).toBeNull();
  });

  test('if popover is active, should remove the popover from the DOM tree and add it to another element', () => {
    mainCtrl.popovers.install.parentEl.click();
    mainCtrl.popovers.sendMessage.parentEl.click();
    expect(document.querySelector('[data-popover="body"]')).not.toBeNull();
  });
});
