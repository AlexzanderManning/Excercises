//step 1 crete new xml object
var xhr = new XMLHttpRequest();

//step 2 create a callback function for the xml object
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4){ // makes sure that we have recieved all the data from the request
    const employees = JSON.parse(xhr.responseText); // info that the server returns in is stored in xhr.responseText
    var statusHTML = '<ul class = "bulleted">';
    for ( let i = 0; i < employees.length; i++){
      if (employees[i].inoffice === true){
        statusHTML += '<li class ="in">';
      }else{
        statusHTML += '<li class ="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>'; 
    }
    statusHTML +='</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};

//Step 3 is opening a request
xhr.open('GET', 'data/employees.json'); // in real world app we'd point to server script

//Step 4 send the request
xhr.send();

//==================================NOTES=====================================
//xhr.responseText is returned as a string

// We have to transform that string into data that we can use with JSON.parse(xhr.responseText);

//JSON.parse() method takes a string a tries to convert it to a js object. it must be formatted correctly in JSON format;
// JSON.parse() returns an array of objects.


