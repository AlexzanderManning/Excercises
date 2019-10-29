const body = document.getElementsByTagName('body')[0];
var colorChange = document.querySelector('.colorChange');
var colors = [ 'blue' , 'green', 'orange', 'red'];

body.addEventListener('click', () => {
  let i = Math.floor(Math.random() * Math.floor(4)); 
  body.style.backgroundColor = colors[i];
});
