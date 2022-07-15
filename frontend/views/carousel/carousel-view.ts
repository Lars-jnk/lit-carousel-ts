import '@vaadin/icon';
import '@vaadin/icons';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { View } from '../view';
import './carousel-comp';

@customElement('carousel-view')
export class CarouselView extends View {
  private iconCss = 'color: white; font-size: 24px;';

  render() {
    return html`
      <div>
        <h2>Carousel</h2>
        <carousel-comp style="width: 400px">
          <vaadin-icon slot="back" style=${this.iconCss} icon="vaadin:chevron-left-small"></vaadin-icon>
          <div slot="content" style="width: 100%; height: 200px; background-color: grey;">comp 1</div>
          <div slot="content" style="width: 100%; height: 200px; background-color: lightgrey;">comp 2</div>
          <vaadin-icon slot="forward" style=${this.iconCss} icon="vaadin:chevron-right-small"></vaadin-icon>
        </carousel-comp>
      </div>
    `;
  }
}
