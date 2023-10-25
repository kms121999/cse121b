export class Note {
  constructor(deleteCallback) {
    const dateCreated = new Date();
    this.created = dateCreated;
    this.updated = dateCreated;
    this.title = '';
    this.content = '';

    this.deleteCallback = deleteCallback;
  }

  createDomObject(editMode=false) {
    // Create the div container
    const container = document.createElement('div');
    container.classList.add('note-container');

    // Delete button
    const deleteButton = document.createElement('button');
    container.appendChild(deleteButton);
    deleteButton.textContent = 'Delete';

    // Edit button
    const editButton = document.createElement('button');
    container.appendChild(editButton);

    // Title display/input
    const titleDisplay = document.createElement('h3');
    titleDisplay.classList.add('note-title');
    container.appendChild(titleDisplay);

    const titleInput = document.createElement('input');
    titleInput.classList.add('note-title-input');
    container.appendChild(titleInput);

    // Content display/input
    const contentDisplay = document.createElement('p');
    contentDisplay.classList.add('note-content');
    container.appendChild(contentDisplay);

    const contentInput = document.createElement('textarea');
    contentInput.classList.add('note-content-input');
    container.appendChild(contentInput);

    // Helper funciton
    const setEditMode = (isEdit) => {
      if (isEdit) {
        // Hide display
        titleDisplay.style.display = 'none';
        contentDisplay.style.display = 'none';

        // Show edit
        titleInput.value = this.title;
        contentInput.value = this.content;

        titleInput.style.display = 'block';
        contentInput.style.display = 'block';

        editButton.textContent = 'Save';

      } else {
        // Hide edit
        titleInput.style.display = 'none';
        contentInput.style.display = 'none';

        editButton.textContent = 'Edit';

        // Show display
        titleDisplay.textContent = `Title: ${this.title ? this.title : '<NO TITLE>'}`;
        contentDisplay.textContent = this.content ? this.content : '<NO CONTENT>';

        titleDisplay.style.display = 'block';
        contentDisplay.style.display = 'block';
      }
    }

    // Set listeners
    deleteButton.addEventListener('click', (e) => {
      container.remove();
      this.deleteCallback(this);
    });

    editButton.addEventListener('click', (e) => {
      if (editMode) {
        this.title = titleInput.value;
        this.content = contentInput.value;
        this.updated = new Date();
      }

      editMode = !editMode;
      setEditMode(editMode);
    });

    // Set the initial mode
    setEditMode(editMode);

    return container;
  }
}

