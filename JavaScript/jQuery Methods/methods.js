// $('h1').text('New Text'); // changing the textContent of h1
// $('li').text('Deonte is Great');  ///  Changing all the li's text content

// $('ul').html('<li> I hacked your ul</li><li>Deonte is still Great</li>') // changing li html

$('img').css('width', '200px');
$('img:first-of-type').attr('src', 'https://live.staticflickr.com/2418/2243463214_f32ab004af_b.jpg') // changing attribute of an img with attr()
$('img').last().attr('src', 'https://live.staticflickr.com/2418/2243463214_f32ab004af_b.jpg') // changing attribute of last img with attr() and .last()

// $('input').attr('type', 'color'); changing input type

console.log($('input').val());


