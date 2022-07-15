import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { View } from '../view';
import './carousel-comp';

@customElement('carousel-view')
export class CarouselView extends View {
  render() {
    return html`
      <div>
        <h2>Carousel</h2>
        <carousel-comp style="width: 400px">
          <div slot="content" style="width: 100%; height: 200px; background-color: grey;">comp 1</div>
          <div slot="content" style="width: 100%; height: 200px; background-color: lightgrey;">comp 2</div>
        </carousel-comp>
      </div>
    `;
  }
}
