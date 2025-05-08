const hamburger = document.getElementById('hamburgur');
const navlinks = document.getElementById('nav-links');

hamburger.addEventListener('click' , () => {
    navlinks.classList.toggle('active');
}
);



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


//project
const project = [
    {
 image: "images/natu.jpg",
 tittle: "Animated navbar",
 description:"A responsive navigation bar with animation an "
},
{
    image:"na.jpg",
    tittle:"landing page",
    description:"A responsive landing page with animation and hover effects ",
},
];

const  container = document.getElementById('project-container');

project.forEach(project =>
{
    const card = document.createElement('div');
    card.className = "project-card";
    card.innerHTML=`
    
    <img src="${project.image}" alt=${project.tittle}" />
    <h3>${project.tittle}</h3>
    <p>${project.description}</p>
    `;
    container.appendChild(card);
}
);