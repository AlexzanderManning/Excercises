var lis = document.querySelectorAll('li');
var ul = document.querySelector('ul');
var button = document.querySelector('.add');
var input = document.querySelector('input');

button.addEventListener('click', () =>{
  ul.innerHTML  = ul.innerHTML + "<li>" + input.value + "</li>"; 
  console.log(lis.length);

  for(let i =0; i < lis.length; i++){
    lis[i].addEventListener('mouseover', function() {
      console.log('mouse over!');
      this.classList.add('selected');
    });
  
    lis[i].addEventListener('mouseout',function(){
      this.classList.remove('selected');
    });
  
    lis[i].addEventListener('click', function(){
      this.classList.toggle('done');
    });
  }
});

for(let i =0; i < lis.length; i++){
  lis[i].addEventListener('mouseover', function() {
    console.log('mouse over!');
    this.classList.add('selected');
  });

  lis[i].addEventListener('mouseout',function(){
    this.classList.remove('selected');
  });

  lis[i].addEventListener('click', function(){
    this.classList.toggle('done');
  });
}






