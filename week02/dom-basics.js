const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement('img');
newImage.setAttribute('src', 'https://picsum.photos/200');
newImage.setAttribute('alt', 'A random image');
document.body.appendChild(newImage);

const newDiv = document.createElement('div');
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement('section');
const newH2 = document.createElement('h2');
newSection.appendChild(newH2);
newH2.textContent = "CSE 121b";
const newP = document.createElement('p');
newP.innerText = "Welcome to Javascript Language";
newSection.appendChild(newP);
document.body.appendChild(newSection);