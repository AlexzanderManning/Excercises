//alerts when h1 is clicked
// $('h1').click(() => {
//   alert('h1 clicked');
// });

//alerts when Any button is clicked
// $('button').click(() =>{
//   alert('Button Clicked');
// });

$('button').click( function (){
  $(this).css('backgroundColor', 'pink'); //this refers to the function.
});

$('input').keypress(function (){   // fires the log for every key press.
  console.log('you pressed a key');
});

$('input').keypress(function (event){   // fires the log for an character event. (which)
  if(event.which === 13){
    alert('you hit enter');
  }
  console.log(event.which);
});

$('h1').on('click', function (){
  $(this).css('color', 'green');
});

