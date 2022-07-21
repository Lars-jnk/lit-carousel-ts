import { css, html } from 'lit';
import { state } from 'lit/decorators.js';
import { Layout } from './../view';

export abstract class DialogComp extends Layout {
  @state() private isOpen = false;

  render() {
    return html` <div class="backdrop" .hidden=${!this.isOpen} @click="${this.close}">dialog</div> `;
  }

  public open() {
    this.isOpen = true;
  }

  public close() {
    this.isOpen = false;
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
      background-color: white;
      opacity: 0.4;
    }
  `;
}
