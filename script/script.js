btn.onload = function () {
    console.log('O documento está pronto!');
}

btn.onclick = function () {
    console.log('Você clicou no botão!');
}

let hiperlink = document.querySelector('a');

hiperlink.addEventListener('click', function (event) {
    console.log('Você clicou no link!');
    event.preventDefault();

})

let texto = document.querySelector('h2');
texto.onmouseover = function () {
    console.log('Você passou o mouse por h2!');
};

texto = document.querySelector('p');
texto.onmouseover = function () {
    console.log('Você passou o mouse por "p"!');
};

// texto = document.querySelectorAll('.rating-single')[0];
// texto.onmouseover = function () {
//     console.log('Você passou o mouse por rating-single 1!');
// };

// texto = document.querySelectorAll('.rating-single')[1];
// texto.onmouseover = function () {
//     console.log('Você passou o mouse por rating-single 2!');
// };

texto = document.querySelectorAll('rating-single')
for (let i = 0; i < texto.length; i++) {
    texto[i].onmouseover = function () {
        console.log(`Você passou o mouse por rating-single ${i+1}!`);
     };  
}

texto = document.querySelectorAll('.rating-single');
for (let i = 0; i < texto.length; i++){
    texto[i].addEventListener('mouseover', function () {
        console.log(`Você passou o mouse por rating-single ${i + 1}`);
    });
}

