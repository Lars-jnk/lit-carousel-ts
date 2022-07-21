import '@vaadin/vaadin-button';
import { html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { DialogComp } from '../dialog';
import './demo-dialog';
import { DemoDialog } from './demo-dialog';

@customElement('call-dialog')
export class CallDialog extends DialogComp {
  @query('demo-dialog')
  private demoDialog!: DemoDialog;

  subTemplate() {
    return html`call dialog
      <vaadin-button theme="primary" @click="${this.openDialog}">Open Dialog</vaadin-button>

      <demo-dialog></demo-dialog> `;
  }

  private openDialog() {
    this.demoDialog.open();
  }
}
