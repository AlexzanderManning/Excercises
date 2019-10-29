const descriptionInput = document.querySelector('input');
const descriptionP = document.querySelector('p.description');
const decscriptionButton = document.querySelector('button');
const myHeading = document.querySelector('#myHeading');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');



decscriptionButton.addEventListener('click', () => {
 descriptionP.innerHTML = descriptionInput.value + ':'
})

addItemButton.addEventListener('click', () =>{
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
});                              




