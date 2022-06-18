// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal')
//     closeModal(modal)
//   })
// })

// function openModal(modal) {
//   if (modal == null) return
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }

// function closeModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }

// // validering för forms //
//  var myForm = document.forms.myForm;
//  var message = document.getElementById('message');

//  myForm.onsubmit = function(){

//      if(myForm.name.value == ""){
//          message.innerHTML = "Var god och fyll i ett namn";
//          return false;
//      } else{
//          message.innerHTML = "";
//          return true;
//      }

//  };
// var myForm = document.forms.myForm;
// var message = document.getElementById('message');

// myForm.onsubmit = function(){

//     if(myForm.email.value == ""){
//         message.innerText = "Var god och fyll i ett mejl adress";
//          return false;
//     } else{
//          message.innerText = "";
//          return true;
//      }

//  };
// var myForm = document.forms.myForm;
// var message = document.getElementById('message');

// myForm.onsubmit = function(){

//     if(myForm.telefon.value == ""){
//         message.innerText = "Var god och fyll i ett telefonnummer";
//         return false;
//     } else{
//         message.innerText = "";
//         return true;
//     }

// };
// var myForm = document.forms.myForm;
// var message = document.getElementById('message');

// myForm.onsubmit = function(){

//     if(myForm.meddelande.value == ""){
//         message.innerText = "Var god och fyll i fältet";
//         return false;
//     } else{
//         message.innerText = "";
//         return true;
//     }

// };

// function checkforblank() {

//     if (document.getElementById('name').value == "") {
//         alert('vänligen fyll i ditt namn');
//         return false;
//     }
// }
// function checkforblank() {

//     if (document.getElementById('email').value == "") {
//         alert('vänligen fyll i ditt mejladress');
//         return false;
//     }
// }

// const name = document.getElementById('name')
// const email = document.getElementById('email')
// const tel = document.getElementById('tel')
// const medd = document.getElementById('medd')
// const form = document.getElementById('form')
// const errorElement = document.getElementById('error')


// form.addEventListener('submit', (e) => {
//     let messages = []
//     if (name.value === '' || name.value == null){
//         messages.push('Namn behövs')
//     }

//     if (messages.lenght > 0){
//         e.preventDefault()
//         errorElement.innerText = messages.join(', ')
//     }
    
// })

const toggleButton = document.getElementsByClassName('toggle-button') [0];
const navbarLinks = document.getElementsByClassName('navbar-links') [0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
