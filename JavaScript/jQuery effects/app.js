// $('button').click(function (){
//   $('div').fadeOut(1500, function () {  // fade can accept a time and a callback function
//     console.log('Fade Completed');
//     $(this).remove();
//   });
// });

// $('button').click(function (){
//   $('div').fadeToggle(1000, function () {  // automatically fades in or out based on event.
//     console.log('Fade Completed');
//   });
// });

$('button').click(function (){
  $('div').slideToggle(function () {  // automatically fades in or out based on event.
    // $(this).toggleClass();
    console.log('Slide Completed');
  });
});
