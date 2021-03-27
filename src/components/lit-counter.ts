import {css, html, LitElement, property} from "lit-element";

export class LitCounter extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  @property() name = "World";
  @property({type: Number}) count = 0;

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      ${this.count}
      <button @click="${this._onClick}">Increment</button>
    `;
  }

  private _onClick() {
    this.count++;
  }
}

customElements.get("lit-counter") ||
  customElements.define("lit-counter", LitCounter);

declare global {
  interface HTMLElementTagNameMap {
    "lit-counter": LitCounter;
  }
}
