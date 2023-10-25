export class Dictionary {
  async getDefinitions(word) {
    // Fetch word
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    
    const wordObject = await response.json();

    // Check for special cases
    if (wordObject.title) {
      if (wordObject.title === 'No Definitions Found') {
        return ['No definition found'];
      }

      return ['Error searching word'];
    }

    // Reduce the JSON object into a list of definitions
    return wordObject[0].meanings.reduce((meaningAccum, meaning) => {
      return meaningAccum.concat(meaning.definitions.reduce((definitionAccum, definition) => {
        definitionAccum.push(definition.definition);
        return definitionAccum;
      }, []));
    }, []);
  }
}