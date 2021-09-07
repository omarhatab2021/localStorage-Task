let allSpan = document.querySelectorAll('.buttons span');
let results = document.querySelector('.results > span');
let theInput = document.getElementById('inputStorage');

allSpan.forEach((span) => {
     span.addEventListener('click' , (e) => {

          //if e target has class check
          if(e.target.classList.contains('Check')) {
               checkItem();
          }

          //if e target has class Add 
          if(e.target.classList.contains('Add')) {
               addItem();
          }

          //if e target has class Delete 
          if(e.target.classList.contains('Delete')) {
               DeleteItem();
          }

          //if e target has class Show 
          if(e.target.classList.contains('Show')) {
               showItem();
          }
     })
});


//create functions 

//create function check input 
function showMessage() {
          results.innerHTML = "Cant be Empty"
     }

//create function check item
function checkItem() {
     if(theInput.value === '') {

          //show message Cant be Empty
          showMessage();
     }
     else {
          if(localStorage.getItem(theInput.value)) {
               results.innerHTML = `Local Storage Found <span style = "color : #009688">${theInput.value}</span> `;
          }
          else {
               results.innerHTML = `Local Storage Not Found <span style = "color : #009688">${theInput.value}</span> `;
          }
     }
}

//create function Add item
function addItem() {
     if(theInput.value === '') {

          //show message Cant be Empty
          showMessage();
     }
     else {
          //if local storage has been already this item
          if(localStorage.getItem(theInput.value)) {
               results.innerHTML = `Local Storage has been Already 
          <span style = "color : #009688">" ${theInput.value} "</span>`;
          
          } 
          else {
          //add item to local storage
               localStorage.setItem(theInput.value , 'name');

          //show to results
               results.innerHTML = `Local Storage Added 
               <span style = "color : #009688">" ${theInput.value} "</span> is 
               <span style = "color : #080">Successful</span>`;

          //empty theInput
               theInput.value = "";
               
               }

     }
}

//create function Delete item
function DeleteItem() {
     if(theInput.value === '') {

          //show message Cant be Empty
          showMessage();
     }
     else {
          if(localStorage.getItem(theInput.value)) {
               //delete item from local storage
               localStorage.removeItem(theInput.value);
               //show message delete
               results.innerHTML = `Local Storage Removed 
               <span style = "color : #009688">" ${theInput.value} ".</span>`;

               theInput.value = "";
          }
          else {

               //if local storage not have this key
               results.innerHTML = `Local Storage Not Found 
               <span style = "color : #009688">" ${theInput.value} "</span> to
               <span style = "color : #F00"> Remove. </span>`;

               theInput.value = "";
          }
          }
     }

//create function Show item
function showItem() {
     if(localStorage.length) {

          //empty result firstly
          results.innerHTML = "" ;

          //make loop for localStorage
          for(let [key , value] of Object.entries(localStorage)) {
               results.innerHTML += `<span>${key}</span> -- `;
          }

     }
     else {
          results.innerHTML = `Local Storage is Empty.`;
     }
}
