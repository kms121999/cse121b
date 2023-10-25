import { Account } from "./modules/account.js";
import { Dictionary } from "./modules/dictionary.js";

const dictionary = new Dictionary();

// Set up account and display basic info
const activeAccount = new Account("Keaton Smith");
const usernameElement = document.querySelector('#username');
usernameElement.textContent = `${activeAccount.name}'s Notes`;

// Support adding notes
const buttonAddNote = document.querySelector('#b-add-note');
const notesDiv = document.querySelector('#notes');

buttonAddNote.addEventListener('click', (e) => {
  const noteDOMObject = activeAccount.createNote();
  notesDiv.insertBefore(noteDOMObject, notesDiv.firstChild);
});

// Support searching words
const dictionaryInput = document.querySelector('#i-dictionary');
const dictionaryOutput = document.querySelector('#ta-dictionary');
const dictionaryButton = document.querySelector('#b-dictionary');

function submitSearch() {
  // Get word input and clear the boxes
  const word = encodeURIComponent(dictionaryInput.value);
  dictionaryInput.value = '';
  dictionaryOutput.innerHTML = '';

  // Get the definitions and display
  dictionary.getDefinitions(word).then((definitions) => {
    definitions.forEach((definition) => {
      const definitionElement = document.createElement('li');
      definitionElement.textContent = definition;

      dictionaryOutput.appendChild(definitionElement);
    });
  });
}

dictionaryButton.addEventListener('click', (e) => submitSearch());

dictionaryInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    submitSearch()
  }
});