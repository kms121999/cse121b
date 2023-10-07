/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
  name: 'Keaton Smith',
  photo: 'images/profile-pic.jpg',
  favoriteFoods: [
    'Biscuits and Gravy',
    'Spinach Cheese Tortellini',
    'Cinnamon Rolls'
  ],
  hobbies: [
    'Piano',
    'Reading',
    'Hiking',
  ],
  placesLived: [], 
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: 'Rexburg, ID',
    length: '2 years'
  }
);

myProfile.placesLived.push(
  {
    place: 'Provo, UT',
    length: '1 year'
  }
);

myProfile.placesLived.push(
  {
    place: 'Oswego, IL',
    length: '21 years'
  }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').innerText = myProfile.name;

/* Photo with attributes */
const photoElement = document.querySelector('#photo');
photoElement.setAttribute('src', myProfile.photo);
photoElement.setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
const foodsElement = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach((food) => {
  const newFoodElement = document.createElement('li');
  newFoodElement.textContent = food;
  foodsElement.appendChild(newFoodElement);
});

/* Hobbies List */
const hobbiesElement = document.querySelector('#hobbies');
myProfile.hobbies.forEach((hobby) => {
  const newHobbyElement = document.createElement('li');
  newHobbyElement.textContent = hobby;
  hobbiesElement.appendChild(newHobbyElement);
});

/* Places Lived DataList */
const descriptionListElement = document.querySelector('#places-lived');
myProfile.placesLived.forEach((placeObject) => {
  const placeElement = document.createElement('dt');
  const lengthElement = document.createElement('dd');

  placeElement.textContent = placeObject.place;
  lengthElement.textContent = placeObject.length;

  descriptionListElement.appendChild(placeElement);
  descriptionListElement.appendChild(lengthElement);
});

