(function() {
    'use strict';

    var books = document.querySelector('#books');

    books.addEventListener('click', function(e) {
        if (e.target) {
            if (e.target.matches('a#book4')) {
                console.log(e.target.innerText, 'was clicked - Buy it: http://www.amazon.com/The-Alchemist-Paulo-Coelho/dp/0061122416');
            } else {
                console.log(e.target.innerText, 'was clicked (with event delegation)');
            }
        }
    }, false);

    /*var book1 = document.querySelector('#book1');   
    var book2 = document.querySelector('#book2');   
    var book3 = document.querySelector('#book3');   
    var book4 = document.querySelector('#book4');   
    var book5 = document.querySelector('#book5');

    book1.addEventListener('click', function() {
        console.log(book1.innerText, 'was clicked');
    }, false);

    book2.addEventListener('click', function() {
        console.log(book2.innerText, 'was clicked');
    }, false);

    book3.addEventListener('click', function() {
        console.log(book3.innerText, 'was clicked');
    }, false);

    book4.addEventListener('click', function() {
        console.log(book4.innerText, 'was clicked');
    }, false);

    book5.addEventListener('click', function() {
        console.log(book5.innerText, 'was clicked');
    }, false);*/
})();