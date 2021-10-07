let text = document.querySelector('#main');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    for(let i = 0; i <= 100;i++){
        if( i % 3 == 0 ){
            text.innerHTML += '<p>fizz</p>';
        }
        else if ( i % 5 == 0){
            text.innerHTML+= '<p>buzz</p>';
        }
        else if( i % 3 == 0 && i % 5 == 0){
            text.innerHTML+= '<p>fizzbuzz</p>';
        }
        else{
            text.innerHTML+= `<p>${i}</p>`;
        }
    }
})