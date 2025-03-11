let son = document.querySelector('body');
let nav_bar = document.querySelector('#login');
let logo = document.querySelector('.logo');
nav_bar.addEventListener('click', function() {
    let log = prompt('Enter your username');
    if(log){
        alert('Welcome ' + log);
    }
});
logo.addEventListener('click', function() {
    alert('Welcome to the homepage');
});
