import { css, CSSResultGroup, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DialogComp } from '../dialog';

@customElement('demo-dialog')
export class DemoDialog extends DialogComp {
  dialogTemplate() {
    return html`demo dialog`;
  }

  static styles = [
    super.styles,
    css`
      .dialog {
        width: 300px;
        height: 200px;
        background-color: yellow;
      }
    `,
  ] as CSSResultGroup;
}
