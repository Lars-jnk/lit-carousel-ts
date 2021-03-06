import '@vaadin/vaadin-button';
import { html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Dialog } from '../dialog';
import './demo-dialog';
import { DemoDialog } from './demo-dialog';

@customElement('call-dialog')
export class CallDialog extends Dialog {
  @query('demo-dialog')
  private demoDialog!: DemoDialog;

  dialogTemplate() {
    return html`call dialog
      <vaadin-button theme="primary" @click="${this.openDialog}">Open Dialog</vaadin-button>

      <demo-dialog></demo-dialog> `;
  }

  private openDialog() {
    this.demoDialog.open();
  }
}
