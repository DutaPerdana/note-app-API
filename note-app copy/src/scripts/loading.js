/* eslint-disable linebreak-style */
class LoadingIndicator extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = `
      .spinner {
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    shadow.appendChild(style);
    shadow.appendChild(spinner);
  }
}

customElements.define('loading-indicator', LoadingIndicator);
