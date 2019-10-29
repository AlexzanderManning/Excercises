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

//================NOTES===============
//When creating new elements multiple elements with a for loop the createElement() must go inside the for loop to create a new element for each time of the looop
