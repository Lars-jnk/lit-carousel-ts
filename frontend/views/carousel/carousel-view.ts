import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { View } from '../view';

@customElement('carousel-view')
export class CarouselView extends View {
  render() {
    return html`<div>
      <h2>Carousel</h2>
      <p>It’s a place where you can grow your own UI 🤗</p>
    </div>`;
  }
}
