import { css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Layout } from './../view';

@customElement('slide-carousel-comp')
export class SlideCarouselComp extends Layout {
  @state() private actual = 0;
  @state() private width = 0;
  @state() private slotCount = 0;
  @state() private contentWidth = '';
  @state() private hideBackButton = false;
  @state() private hideForwardButton = false;

  render() {
    return html`
      <div id="container" class="container">
        <div class="back-button button">
          <div class="icon" @click=${this.clickBack} ?hidden=${this.hideBackButton}>
            <slot name="back">
              <div class="icon-default">&#60;</div>
            </slot>
          </div>
        </div>
        <div class="content-container">
          <div
            class="content"
            style="width: ${this.contentWidth}; margin-left: calc(calc(${this.width}px * ${this.actual}) * -1);"
          >
            <slot name="content" @slotchange=${this.handleSlotchange}> </slot>
          </div>
        </div>
        <div class="forward-button button">
          <div class="icon" @click=${this.clickForward} ?hidden=${this.hideForwardButton}>
            <slot name="forward">
              <div class="icon-default">&#62;</div>
            </slot>
          </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.handleResize);
  }
  disconnectedCallback() {
    window.removeEventListener('resize', this.handleResize);
    super.disconnectedCallback();
  }

  private handleResize = () => {
    console.log('handleResize');
    const div = this.shadowRoot?.querySelector('.container');
    this.width = div!.clientWidth;
    console.log(this.width);
  };

  handleSlotchange(e: Event) {
    this.refreshContent();
  }

  refreshContent() {
    const div = this.shadowRoot?.querySelector('.container');
    this.width = div!.clientWidth;
    console.log(this.width);

    const slot = this.shadowRoot!.querySelector('slot[name="content"]') as HTMLSlotElement;
    const slots = slot?.assignedElements();

    this.slotCount = slots.length;
    this.contentWidth = this.slotCount * this.width + 'px';

    for (var i = 0; i < slots!.length; ++i) {
      //console.log(slots?.at(i));
      if (i == this.actual) {
      } else {
      }
    }

    if (this.actual == 0) {
      this.hideBackButton = true;
    } else {
      this.hideBackButton = false;
    }

    if (this.actual == slots.length - 1) {
      this.hideForwardButton = true;
    } else {
      this.hideForwardButton = false;
    }
  }

  clickBack() {
    --this.actual;
    this.refreshContent();
  }

  clickForward() {
    ++this.actual;
    this.refreshContent();
  }

  static styles = css`
    :host {
      width: 100%;
      display: block;
    }
    .container {
      width: 100%;
      display: flex;
      flex-direction: row;
      position: relative;
    }
    .content-container {
      overflow: hidden;
    }
    .content {
      display: flex;
      flex-direction: row;
      transition: margin-left 0.5s;
    }
    .button {
      position: absolute;
      width: 80px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .back-button {
      left: 0px;
    }
    .forward-button {
      right: 0px;
    }
    .icon {
      width: max-content;
      cursor: pointer;
    }
    .icon-default {
      color: white;
      font-size: 48px;
    }
  `;
}
