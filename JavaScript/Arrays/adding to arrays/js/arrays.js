var myArray = [ ];

function fillArray (x){
  for(var i = 0; i <=x ; i++){
    myArray[i] = i;
  }
}

fillArray(10);

document.write(myArray + "<br>");

myArray.push(11, 12, 13, 14, 15);

document.write(myArray + "<br>");

myArray.unshift(-1,-2,-3);

document.write(myArray + "<br>");




