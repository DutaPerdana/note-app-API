/* eslint-disable linebreak-style */
function main() {
  const baseUrl = 'https://notes-api.dicoding.dev/v2';
  const gridContainer = document.querySelector('grid-container');
  const loadingIndicator = document.querySelector('loading-indicator');

  const showLoading = () => (loadingIndicator.style.display = 'flex');
  const hideLoading = () => (loadingIndicator.style.display = 'none');

  const getBook = () => {
    showLoading();
    fetch(`${baseUrl}/notes`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          gridContainer.renderNotes(responseJson.data);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      })
      .finally(() => {
        setTimeout(() => {
          hideLoading();
        }, 1000);
      });
  };

  const getBookArchive = () => {
    showLoading();

    fetch(`${baseUrl}/notes/archived`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          gridContainer.renderNotes(responseJson.data);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      })
      .finally(() => {
        setTimeout(() => {
          hideLoading();
        }, 1000);
      });
  };

  const insertBook = (book) => {
    showLoading();

    fetch(`${baseUrl}/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        getBook();
      })
      .catch((error) => {
        showResponseMessage(error);
      })
      .finally(() => {
        setTimeout(() => {
          hideLoading();
        }, 1000);
      });
  };

  const removeBook = (bookId) => {
    showLoading();

    fetch(`${baseUrl}/notes/${bookId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        getBook();
      })
      .catch((error) => {
        showResponseMessage(error);
      })
      .finally(() => {
        hideLoading();
      });
  };

  const archiveBook = (bookId) => {
    showLoading();

    fetch(`${baseUrl}/notes/${bookId}/archive`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        getBook();
      })
      .catch((error) => {
        showResponseMessage(error);
      })
      .finally(() => {
        hideLoading();
      });
  };

  const unArchiveBook = (bookId) => {
    showLoading();

    fetch(`${baseUrl}/notes/${bookId}/unarchive`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        getBook();
      })
      .catch((error) => {
        showResponseMessage(error);
      })
      .finally(() => {
        hideLoading();
      });
  };

  window.removeBook = removeBook;
  window.archiveBook = archiveBook;
  window.unArchiveBook = unArchiveBook;

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const inputBookTitle = document.querySelector('#titleNote');
    const inputBookBody = document.querySelector('#contentNote');
    const archiveButton = document.querySelector('#archiveBook');
    const nonarchiveButton = document.querySelector('#unarchiveBook');
    const formNote = document.querySelector('#form-note');

    nonarchiveButton.addEventListener('click', () => {
      getBook();
    });

    archiveButton.addEventListener('click', () => {
      getBookArchive();
    });

    formNote.addEventListener('submit', (e) => {
      e.preventDefault();
      const book = {
        title: inputBookTitle.value,
        body: inputBookBody.value,
      };

      insertBook(book);
      formNote.reset();
    });

    getBook();
  });
}

export default main;
