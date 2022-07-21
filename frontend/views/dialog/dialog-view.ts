import '@vaadin/icon';
import '@vaadin/icons';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-text-field';
import { html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { View } from '../view';
import './example/call-dialog';
import { CallDialog } from './example/call-dialog';
import './example/demo-dialog';
import { DemoDialog } from './example/demo-dialog';

@customElement('dialog-view')
export class DialogView extends View {
  @query('demo-dialog')
  private demoDialog!: DemoDialog;
  @query('call-dialog')
  private callDialog!: CallDialog;

  render() {
    return html`
      <vaadin-button @click="${this.openDialog}">Open Dialog</vaadin-button>
      <vaadin-button @click="${this.openCallDialog}">Open Call Dialog</vaadin-button>

      <demo-dialog></demo-dialog>
      <call-dialog></call-dialog>
    `;
  }

  private openDialog() {
    this.demoDialog.open();
  }

  private openCallDialog() {
    this.callDialog.open();
  }
}
