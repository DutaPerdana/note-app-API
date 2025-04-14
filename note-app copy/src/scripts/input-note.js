/* eslint-disable linebreak-style */
class InputNote extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <form id="form-note">
          <input type="text" id="titleNote" placeholder="Note Title" required/>
          <span id="titleError" style="color: red; font-size: 12px;"></span>
          <textarea id="contentNote" placeholder="Masukan Note" required></textarea>
          <span id="contentError" style="color: red; font-size: 12px;"></span>
          <button type="submit" id="buttonSave">Add Note</button>
        </form>
        <div class="button-container">
            <button class="buttonn" id="archiveBook">Archive Book</button>
            <button class="buttonn" id="unarchiveBook">Unarchive Book</button>
        </div>
      `;

    const titleInput = this.querySelector('#titleNote');
    const contentInput = this.querySelector('#contentNote');

    titleInput.addEventListener('input', this.validateForm.bind(this));
    contentInput.addEventListener('input', this.validateForm.bind(this));
  }

  validateForm() {
    const title = this.querySelector('#titleNote').value;
    const content = this.querySelector('#contentNote').value;
    const contentError = this.querySelector('#contentError');
    const titleError = this.querySelector('#titleError');
    if (title.length == 0) {
      titleError.textContent = 'Judul Tidak Boleh Kosong.';
    } else if (title.length < 3) {
      titleError.textContent = 'Judul Harus Minimal 3 Karakter.';
    } else {
      titleError.textContent = '';
    }
    if (content.length == 0) {
      contentError.textContent = 'Konten Tidak Boleh Kosong.';
    } else if (content.length < 3) {
      contentError.textContent = 'Konten Harus Minimal 3 Karakter';
    } else {
      contentError.textContent = '';
    }
  }
}

customElements.define('input-note', InputNote);
