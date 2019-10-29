//==========How to create and add a new element to the dom===========

// 1. select the parent element
const parentEl = document.querySelector('.listUL');

//2.create a new element to be added.
const newEl = document.createElement('li');

//3. fill that elements textContent or innerHTML with the content you desire
newEl.innerHTML = `This is the new item`;

// 4. attach that new element to the parent element.
parentEl.appendChild(newEl);

