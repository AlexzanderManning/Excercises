$('h1').css('color', 'yellow'); // basic selection and styling with jquery

// Setting Multple styles with one line using an object
var styles = {
  color: 'red',
  background: 'pink',
  border : '2px solid purple'
}

$('h1').css(styles); // object accepte3d as a parameter.

$('li').css('color', 'blue ');  // Styling all li's blue with one line.  No need to loop.

$('a').css('font-size', '40px'); // styling all a's

$('li').css({     // Typing an object as  parameter without  variable.
  fontSize: '10px',
  border: ' 3px dashed purple',
  background: 'rgba(89, 45, 20, 0.5)'
});