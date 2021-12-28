import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('text-element')
export class TextElement extends LitElement {
  static override styles = css`
    p {
      color: blue;
    }
  `;

  @property()
  value = '';

  override render() {
    return html`<p>${this.value}</p>`;
  }
}
