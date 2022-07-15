import { css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Layout } from './../view';

@customElement('carousel-comp')
export class CarouselComp extends Layout {
  @state()
  private actual = 0;

  render() {
    return html`
      <div class="container">
        <div class="back-button button">
          <slot name="back">
            <div id="back-icon" class="icon" @click=${this.clickBack}>&#60;</div>
          </slot>
        </div>
        <slot name="content" @slotchange=${this.handleSlotchange}> </slot>
        <div class="forward-button button">
          <slot name="forward">
            <div id="forward-icon" class="icon" @click=${this.clickForward}>&#62;</div>
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

    const backIcon = this.shadowRoot!.querySelector('#back-icon');
    if (this.actual == 0) {
      backIcon?.setAttribute('hidden', 'true');
    } else {
      backIcon?.removeAttribute('hidden');
    }

    const forwardButton = this.shadowRoot!.querySelector('#forward-icon');
    if (this.actual == slots.length - 1) {
      forwardButton?.setAttribute('hidden', 'true');
    } else {
      forwardButton?.removeAttribute('hidden');
    }
  }

  clickBack() {
    --this.actual;
    this.refreshContent();
    console.log(this.actual);
  }

  clickForward() {
    ++this.actual;
    this.refreshContent();
    console.log(this.actual);
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
