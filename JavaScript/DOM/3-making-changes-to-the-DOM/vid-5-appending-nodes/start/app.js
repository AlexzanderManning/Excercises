const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const todo = document.querySelectorAll('.todo');


toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';// clears out the text field.
});

addItemButton.addEventListener('click', () => {////adding elements to the dom
  let ul = document.getElementsByTagName('ul')[0];//1. select parent element
  let li = document.createElement('li'); //2. create element.
  li.textContent = addItemInput.value; // records what is typed in input field
  ul.appendChild(li); //append the created element to parent.
  addItemInput.value = '';
});

removeItemButton.addEventListener('click',() =>{
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
})



  
  
  
  
  
  