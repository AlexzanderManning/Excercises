// var paris = {
//   population : 2.211e6,
//   latitude: '48.8567 N',
//   longitude: '2.3508 E',
// };

// for ( var key in paris){
//   document.write(key, ": " , paris[key], '<br>'); // paris[key]access all the properties in paris
// }

var shape = {
  length: 10,
  width: 20,
  getWidth: function () {
    return this.length * this.width;
  }
}

document.write(shape.length, '<br>');
document.write(shape.width, '<br>');
var area = shape.getWidth();
document.write(area);

