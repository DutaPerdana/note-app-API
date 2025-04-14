/* eslint-disable linebreak-style */
class HeaderNote extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <h1>Note App</h1>
        </header>
        `;
  }
}
customElements.define('header-note', HeaderNote);
