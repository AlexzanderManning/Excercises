// var foo = 'bar'; // var intialized to bar. Its 1st declared and 2nd intialized to bar. Not a Single statement. Its 2 statements.

// function bar(){
//   var foo = 'baz'; // LHS reference for a var called foo.
// } // scope manager says it has it and allows execution.

// function baz(foo){ // yes i have param named foo
//   foo = 'bam';//scope of baz do you have a LHS Ref for foo
//   bam = 'yay';//scope of baz do you have a LHS Ref for bam
// }// answer no. Never heard of bam go fish. Goes to global scope.

// Scope and Execution Example

// var foo = 'bar';
// function bar(){
//   var foo = 'baz';

//   function baz(foo){
//     foo = 'bam';
//     bam = 'yay';
//   }
//   baz();
// }


// bar(); // undefined
// foo; //bar
// bam; // yay
// // baz(); ref error.

//Function Expressions

var foo = function bar(){
  var foo = 'baz';

  function baz(foo){
    foo = bar;
    foo; //function...
  }
  baz();
}


