import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DialogComp } from '../Dialog';

@customElement('demo-dialog')
export class DemoDialog extends DialogComp {
  subTemplate() {
    return html`demo dialog`;
  }
}
