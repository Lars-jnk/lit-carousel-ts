import { css, html } from 'lit';
import { state } from 'lit/decorators.js';
import { Layout } from '../view';

export abstract class DialogComp extends Layout {
  @state() private isOpen = false;

  render() {
    return html`
      <div class="backdrop" .hidden=${!this.isOpen} @click="${this.close}">
        <div class="container">
          <div class="dialog" @click="${this.clickDialog}">dialog ${this.subTemplate()}</div>
        </div>
      </div>
    `;
  }

  subTemplate() {
    return html``;
  }

  public open() {
    this.isOpen = true;
  }

  public close(e: PointerEvent) {
    this.isOpen = false;
  }

  private clickDialog(e: PointerEvent) {
    e.stopPropagation();
  }

  static styles = css`
    :host {
      display: block;
    }
    .backdrop {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      z-index: 100;
      background-color: rgba(0, 0, 0, 0.4);
    }
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .dialog {
      width: 400px;
      height: 300px;
      z-index: 101;
      background-color: white;
      color: black;
    }
  `;
}
