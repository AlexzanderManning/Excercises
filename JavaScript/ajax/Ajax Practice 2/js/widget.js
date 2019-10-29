//step 1 crete new xml object
var xhr = new XMLHttpRequest();

//step 2 create a callback function for the xml object
xhr.onreadystatechange = function(){
  const employeeList = document.getElementById('ulList');
  if(xhr.readyState == 4){ // makes sure that we have recieved all the data from the request
    const employees = JSON.parse(xhr.responseText); // info that the server returns in is stored in xhr.responseText
    for ( let i = 0; i < employees.length; i++){
      let LI = document.createElement('li');
      if (employees[i].inoffice === true){
        LI.classList.add('in');
      }else{
        LI.classList.add('out');
      }
      LI.innerHTML = `${employees[i].name}`;
      employeeList.appendChild(LI);
    }
  }
};

//Step 3 is opening a request
xhr.open('GET', 'data/employees.json'); // in real world app we'd point to server script

//Step 4 send the request
xhr.send();

var xhr2 = new XMLHttpRequest();

xhr2.onreadystatechange = function(){
  const availableRooms = document.getElementById('availableRooms');
  if(xhr2.readyState === 4){
    const rooms = JSON.parse(xhr2.responseText);

    for ( let i = 0; i < rooms.length; i++){
      let LI = document.createElement('li');
      if (rooms[i].available === true){
        LI.classList.add('empty');
      }else{
        LI.classList.add('full');
      }
      LI.innerHTML = `${rooms[i].room}`;
      availableRooms.appendChild(LI);
    }
  }
};

xhr2.open('GET', 'data/rooms.json');

xhr2.send();
