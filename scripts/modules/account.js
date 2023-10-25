import { Note } from "./note.js";

export class Account {
  constructor(name) {
    this.name = name;
    this.notes = [];
  }

  deleteNote(note) {
    const removeIndex = this.notes.indexOf(note);

    if (removeIndex >= 0) {
      this.notes.splice(removeIndex, 1);
    }
  }

  createNote() {
    const newNote = new Note(this.deleteNote.bind(this));
    this.notes.push(newNote);
    return newNote.createDomObject(true);
  }
}