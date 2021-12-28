import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('button-element')
export class ButtonElement extends LitElement {
  static override styles = css`
    button {
      appearance: none;
      margin: 1em 0;
      padding: 0.6em 1em;
      font-size: 1em;
      background-color: #1aa1ff;
      color: #fff;
      cursor: pointer;
      border-radius: 2px;
      border: 0;
      transition: 0.3s;
    }
    button:hover {
      background-color: #064fd9;
    }
  `;

  @property()
  name = '';

  override render() {
    return html`<button @click=${this._clickButton}>${this.name}</button>`;
  }

  private _clickButton() {
    console.log('ボタンがクリックされました');
  }
}
