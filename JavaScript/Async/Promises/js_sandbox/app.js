// const posts = [
//   {title: 'Post One', body:'This is post one'},
//   {title: 'Post Two', body: 'This is post two'}
// ];

// function createPost(post) {
//   //resolve is what we do when the operation is succesful
//   //reject is the error we throw if it fails.
//   return new Promise(function(resolve, reject){ // to create new promise you have to return new promise.
//     setTimeout(function() {
//       posts.push(post);
//       const error = false;

//       if(!error) {
//         resolve();
//       } else {
//         reject('Error: Something went wrong');
//       }
//     }, 2000);
//   });
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'})
// .then(getPosts)
// .catch(function(err) {
//   console.log(err);
// });

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => console.log(result));
  makeServerRequest.then(data => console.log(data + '!'));
  



