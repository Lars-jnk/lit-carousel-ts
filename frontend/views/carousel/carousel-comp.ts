import { css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Layout } from './../view';

@customElement('carousel-comp')
export class CarouselComp extends Layout {
  @state() private actual = 0;
  @state() private hideBackButton = false;
  @state() private hideForwardButton = false;

  render() {
    return html`
      <div class="container">
        <div class="back-button button">
          <slot name="back">
            <div id="back-icon" class="icon" ?hidden=${this.hideBackButton} @click=${this.clickBack}>&#60;</div>
          </slot>
        </div>
        <slot name="content" @slotchange=${this.handleSlotchange}> </slot>
        <div class="forward-button button">
          <slot name="forward">
            <div id="forward-icon" class="icon" ?hidden=${this.hideForwardButton} @click=${this.clickForward}>
              &#62;
            </div>
          </slot>
        </div>
      </div>
    `;
  }

  handleSlotchange(e: Event) {
    this.refreshContent();
  }

  refreshContent() {
    const slot = this.shadowRoot!.querySelector('slot[name="content"]') as HTMLSlotElement;
    console.log(slot);
    const slots = slot?.assignedElements();
    console.log(slots);
    for (var i = 0; i < slots!.length; ++i) {
      console.log(slots?.at(i));
      if (i == this.actual) {
        slots?.at(i)?.removeAttribute('hidden');
      } else {
        slots?.at(i)?.setAttribute('hidden', 'true');
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
      display: block;
    }
    .container {
      display: flex;
      flex-direction: row;
      position: relative;
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
      color: white;
      font-size: 48px;
      cursor: pointer;
    }
  `;
}
