/* eslint-disable linebreak-style */
class GridNote extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.notes = [];
  }

  renderNotes(notes) {
    this.notes = notes;
    this.shadowRoot.innerHTML = '';
    notes.forEach((note) => {
      const elementNote = document.createElement('card-note');
      elementNote.setAttribute('title', note.title);
      elementNote.setAttribute('body', note.body);
      elementNote.setAttribute('createdAt', note.createdAt);
      elementNote.setAttribute('archive', note.archived);
      elementNote.setAttribute('id', note.id);
      this.shadowRoot.appendChild(elementNote);
    });
  }
}
customElements.define('grid-container', GridNote);
