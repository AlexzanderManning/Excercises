//IIFE module pattern. creates private vars and returns what we want to be public as an object.
const budgetController = (function () { 

  let Expense = function(id, description, value){ // object constructor function
    this.id = id;
    this. description = description;
    this.value = value;
  }

  let Income = function(id, description, value){ 
    this.id = id;
    this. description = description;
    this.value = value;
  }


  let data = {
    allItems:{
      exp : [],
      inc : [],
    },
    totals :{
      exp: 0,
      inc: 0,
    }
  }



  return {
    addItem: function(type, des, val){
      var newItem, ID;

      //create new ID
      ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

     //create new item based on income or expesne type
      if ( type === 'exp'){
        newItem = new Expense(ID, des, val);
      }else if(type === 'inc'){
        newItem = new Income(ID, des, val);
      }

      // push it into data structure
      data.allItems[type].push(newItem);
      return newItem;
    }//end of addItem()
  }//end of return
})();





const UIController = (function () {

  const DOMstrings ={ //object containing all the html strings for dom selction. Easy to change
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn',
  }
  //Some code

  return {
    //Gets Inputs From Fields
    getInput: function(){ //instead of returning 3 separate values return an object of values
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      }
    },
    ///Making DOMStrings public
    getDOMstrings: function(){
      return DOMstrings;
    }
  }//end of UIcontoller Return statement
})();






const appController = (function (budgetCtrl, UICtrl){

  function setupEventListeners(){
    const DOM = UICtrl.getDOMstrings();
    //Adds item to list when button pressed or enter key pressed
    const addButton = document.querySelector(DOM.inputButton).addEventListener('click',ctrlAddItem);
    document.addEventListener('keypress', function (event){
      if ( event.keyCode == 13 || event.which === 13){
      ctrlAddItem();
      }
    });
  }

  
  const ctrlAddItem = function (){
    var input, newItem;
    //1. get field input data
    input = UICtrl.getInput();
    console.log(input);
    //2. add item to budget controller
    newItem =  budgetCtrl.addItem(input.type, input.description, input.value);
    //3. add new item to ui

    //4. calculate the budget

    //5. display the budget.
  };

///App controller return
  return {
    init: function (){
      console.log("appilcation started");
      setupEventListeners();
    }
  };
})(budgetController, UIController); // passing in parameters into IIFE




appController.init();

