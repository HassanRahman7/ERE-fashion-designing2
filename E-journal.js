  document.addEventListener('DOMContentLoaded', function () {
    // Toggle dropdown
    // const toggleButtons = document.querySelectorAll('.toggleButton');

    // toggleButtons.forEach(button => {
    //   button.addEventListener('click', function () {
    //     const entry = this.closest('.entry');
    //     const modules = entry.querySelector('.modules');

    //     modules.classList.toggle('show');
    //     this.classList.toggle('rotated');
    //   });
    // });

    // Open viewButton link in new tab
    const viewButtons = document.querySelectorAll('.viewButton');

    viewButtons.forEach(button => {
      button.addEventListener('click', function () {
        const url = this.getAttribute('data-url');
        if (url) {
          window.open(url, '_blank');
        }
      });
    });
  });
//   document.querySelectorAll('.entry').forEach(function(subject){
//     var toggleButton=subject.querySelector('.toggleButton');
//     var modules=subject.querySelector('.modules');
//     toggleButton.addEventListener('click',function(){
//         if(modules.classList.contains('show'))
//             modules.style.maxHeight='0';
//         else
//         modules.style.maxHeight=`${modules.scrollHeight}px`;
//     modules.classList.toggle('show');
//     toggleButton.classList.toggle('rotated') 
//     });
//     modules.addEventListener('transitionend', function() {
//         if (!modules.classList.contains('show')) {
//             modules.style.maxHeight = '';
//         }
//     });
//   });
//   document.querySelectorAll('.entry').forEach(function(subject) {
//   let toggleButton = subject.querySelector('.toggleButton');
//   let modules = subject.querySelector('.modules');
//   toggleButton.addEventListener('click', function () {
//     if (modules.classList.contains('show')) {
//       // Collapse
//       modules.style.display = 'hidden';
//     } else {
//       // Expand
//       modules.style.display = 'block';
//     }
//     modules.classList.toggle('show');
//     toggleButton.classList.toggle('rotated');
//   });

//   modules.addEventListener('transitionend', function () {
//     if (!modules.classList.contains('show')) {
//       modules.style.display ='hidden';
//     }
//   });
// });
let TargetButtons=document.querySelectorAll('.toggleButton1');

TargetButtons.forEach(function(button){
  button.addEventListener('click',function(){
    let dropdown=document.querySelector('.dropdown1');
    if(dropdown){
      dropdown.classList.toggle('clicked');
    }
  });
});

let TargetButtons2=document.querySelectorAll('.toggleButton2');

TargetButtons2.forEach(function(button){
  button.addEventListener('click',function(){
    let dropdown=document.querySelector('.dropdown2');
    if(dropdown){
      dropdown.classList.toggle('clicked');
    }
  });
});
  
let TargetButtons3=document.querySelectorAll('.toggleButton3');

TargetButtons3.forEach(function(button){
  button.addEventListener('click',function(){
    let dropdown=document.querySelector('.dropdown3');
    if(dropdown){
      dropdown.classList.toggle('clicked');
    }
  });
});

let TargetButtons4=document.querySelectorAll('.toggleButton4');

TargetButtons4.forEach(function(button){
  button.addEventListener('click',function(){
    let dropdown=document.querySelector('.dropdown4');
    if(dropdown){
      dropdown.classList.toggle('clicked');
    }
  });
});

let TargetButtons5=document.querySelectorAll('.toggleButton5');

TargetButtons5.forEach(function(button){
  button.addEventListener('click',function(){
    let dropdown=document.querySelector('.dropdown5');
    if(dropdown){
      dropdown.classList.toggle('clicked');
    }
  });
});

let TargetButtons6=document.querySelectorAll('.toggleButton6');

TargetButtons6.forEach(function(button){
  button.addEventListener('click',function(){
    let dropdown=document.querySelector('.dropdown6');
    if(dropdown){
      dropdown.classList.toggle('clicked');
    }
  });
});