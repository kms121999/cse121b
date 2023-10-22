/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');

var templeList = [];

const TEMPLE_DATA_URL = 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json';

/* async displayTemples Function */

const displayTemples = (temples) => {
  temples.forEach((temple) => {
    // Create article element
    const article = document.createElement('article');
    
    // Create header element
    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    
    // Create image element
    const img = document.createElement('img');
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', temple.location);
    img.setAttribute('width', 400);
    img.setAttribute('height', 250);
    
    // Append elements appropriately
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
  const response = await fetch(TEMPLE_DATA_URL).then(
    (response) => response.json()
  );

  templeList = response;

  displayTemples(templeList);
};

/* reset Function */

const reset = () => {
  const articleElements = Array.from(document.getElementsByTagName('article'));
  articleElements.forEach((element) => {
    element.remove();
  });
};


/* sortBy Function */

const sortBy = (temples) => {
  reset();

  const filter = document.querySelector('#sortBy').value;

  switch (filter) {
    case 'utah':
      displayTemples(templeList.filter((temple) => {
        return temple.location.includes('Utah');
      }));
      break;
    case 'notutah':
      displayTemples(templeList.filter((temple) => {
        return !temple.location.includes('Utah');
      }));
      break;
    case 'older':
      displayTemples(templeList.filter((temple) => {
        return new Date(temple.dedicated) < new Date(1950, 0, 1);
      }));
      break;
    case 'all':
      displayTemples(templeList);
      break;
  }
};

document.querySelector('#sortBy').addEventListener('change', (event) => {
  sortBy(event.target.value);
});


getTemples();

/* Event Listener */
