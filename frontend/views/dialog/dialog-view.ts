import '@vaadin/icon';
import '@vaadin/icons';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-text-field';
import { html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { View } from '../view';
import './example/demo-dialog';
import { DemoDialog } from './example/demo-dialog';

@customElement('dialog-view')
export class DialogView extends View {
  @query('demo-dialog')
  private dialog!: DemoDialog;

  render() {
    return html`
      <vaadin-button @click="${this.openDialog}">Open Dialog</vaadin-button>
      <demo-dialog></demo-dialog>
    `;
  }

  private openDialog() {
    this.dialog.open();
  }
}
