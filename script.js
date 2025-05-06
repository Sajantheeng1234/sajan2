// const hamburger = document.getElementById('hamburgur');
// const navLinks = document.getElementById('nav-Links');

// hamburger.addEventListener('click' , () => {
//     navLinks.classList.toggle('active');
// });



const text = "Hi , i'm Er.Sajan";
const typedText = document.getElementById('typed-text');
let index = 0;


function type(){
    if ( index < text.length){
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type,150);
        }
}
type();