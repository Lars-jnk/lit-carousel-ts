import { dialogRenderer } from '@vaadin/dialog/lit.js';
import '@vaadin/icon';
import '@vaadin/icons';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-text-field';
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { View } from '../view';

@customElement('vaadin-dialog-view')
export class VaadinDialogView extends View {
  @state()
  private dialogOpened = false;
  @state()
  private innerDialogOpened = false;

  render() {
    return html`
      <vaadin-button @click="${() => (this.dialogOpened = true)}">Open Dialog</vaadin-button>
      <vaadin-dialog
        header-title="New employee"
        .opened="${this.dialogOpened}"
        @opened-changed="${(e: CustomEvent) => (this.dialogOpened = e.detail.value)}"
        ${dialogRenderer(this.renderDialog, [])}
      ></vaadin-dialog>

      <vaadin-dialog
        header-title="Inner Dialog"
        .opened="${this.innerDialogOpened}"
        @opened-changed="${(e: CustomEvent) => (this.innerDialogOpened = e.detail.value)}"
        ${dialogRenderer(this.innerRenderDialog, [])}
      ></vaadin-dialog>
    `;
  }

  private renderDialog = () => html`
    <vaadin-text-field label="First name"></vaadin-text-field>

    <vaadin-button @click="${this.close}">Cancel</vaadin-button>
    <vaadin-button theme="primary" @click="${this.openInnerDialog}">open next dialog</vaadin-button>
  `;

  private innerRenderDialog = () => html`
    hallo!
    <vaadin-button @click="${this.closeInnerDialog}">Cancel</vaadin-button>
  `;

  private close() {
    this.dialogOpened = false;
  }

  private openInnerDialog() {
    this.innerDialogOpened = true;
  }

  private closeInnerDialog() {
    this.innerDialogOpened = false;
  }
}
