/* eslint-disable linebreak-style */
class CardNote extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    const body = this.getAttribute('body');
    const createdAt = this.getAttribute('createdAt');
    const archived = this.getAttribute('archive');
    const id = this.id;

    this.shadowRoot.innerHTML = `
         <style>
           * {
          box-sizing: border-box; 
          }
          .card-note {
            background-color: #33486b; 
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%; 
            min-height: 150px; 
          }
  
          .card-note:hover {
            transform: scale(1.05);
          }
  
          h3 {
            font-size: 1.25rem;
            color: #f1b847; 
            margin-bottom: 10px;
            word-wrap: break-word; 
          }
  
          p {
             font-size: 1rem;
              color: #ddd;
              flex-grow: 1; 
              word-wrap: break-word; 
              margin: 0;
           }

  
          small {
            font-size: 0.85rem;
            color: #aaa;
            margin-top: 10px;
          }
            .button {
            background-color: #f1b847;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 12px;
            transition: background-color 0.3s;
        }

        .button:hover {
            background-color:rgb(249, 170, 14);
        }
        </style>
  
        <div class="card-note">
          <h3>${title}</h3>
          <p>${body}</p>
          <small>Created on: ${new Date(createdAt).toLocaleDateString()}</small>
          <div class="button" id="${id}" onclick="window.removeBook('${id}')">Hapus</div>
          <div class="button" id="${id}" 
             onclick="window.${archived == 'true' ? 'unArchiveBook' : 'archiveBook'}('${id}')">
          ${archived == 'true' ? 'Unarchive' : 'Archive'}
        </div>
    `;
  }

}
customElements.define('card-note', CardNote);
