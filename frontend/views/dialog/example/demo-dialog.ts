import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DialogComp } from '../dialog';

@customElement('demo-dialog')
export class DemoDialog extends DialogComp {
  subTemplate() {
    return html`demo dialog`;
  }

  static styles = [
    super.styles,
    css`
      .dialog {
        width: 300px;
        height: 200px;
        z-index: 101;
        background-color: yellow;
        color: black;
      }
    `,
  ];
}
