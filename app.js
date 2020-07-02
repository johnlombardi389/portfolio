// About Page
const texts = ['Hello','Ciao', '안녕하세요', 'Hola', '你好'];
let count = 0;
let index = 0;
let current = '';
let letter= '';

(function type(){

    if(count === texts.length){
        count = 0;
    }
currentText = texts[count];
letter = currentText.slice(0, ++index);

document.querySelector('.typing').textContent = letter;
if(letter.length === currentText.length){
    count++;
    index = 0;
}
setTimeout(type, 600); //Speed

}());