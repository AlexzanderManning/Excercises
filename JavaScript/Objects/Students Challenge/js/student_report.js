// for (var i = 0; i < students.length; i++){
  // document.write('<h2> Student: ' + students[i].name + '</h2>');
  // document.write('<p> Track: ' + students[i].track + '</p>');
  // document.write('<p> Achievements: ' + students[i].achievments + '</p>');
  // document.write('<p> Points: ' + students[i].points + '</p>');
// }

function studentSearch(query){
  var match = false;

  for(var i = 0; i < students.length; i++){
    var name = students[i].name.toLowerCase(); 
    if(query === name){
      document.write('<h2> Student: ' + students[i].name + '</h2>');
      document.write('<p> Track: ' + students[i].track + '</p>');
      document.write('<p> Achievements: ' + students[i].achievments + '</p>');
      document.write('<p> Points: ' + students[i].points + '</p>');
      match = true;
    }
  }
  

  if(match == false){
    document.write('Match not found');
  }
}


// Ask What Student To Retrieve


while (true){
  var search = prompt('What student to search?');
  if (search === 'quit'){
    break;
  }else{
    studentSearch(search);
  }
}

  








//Search for that Student




//Display Data for that student
