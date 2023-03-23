
function menu () {   
let item = `<h1 class="t1">LOGO</h1>
<div class="container">
    
    <div class="box" id="menu">
        <a href="./home.html"><button class="btn bt1">Home</button></a>
        <a href="./about.html"><button class="btn bt2">About</button></a>
        <a href="./concact.html"><button class="btn bt3">Contact</button></a>
        <a><button class="btn bt4">LOGIN</button></a>
        <a><button class="btn bt5">SIGN UP</button></a>
    </div>
    
</div>
`;
let menuDelDom = document.querySelector(".menu")
menuDelDom.innerHTML = item;
};

menu();

function mostrar (){
    let btnMenu = document.querySelector(".btn2")
    let men = document.querySelector(".menu")
    btnMenu.addEventListener("click", function (){
        men.classList.add("mostrar");
    })
}

mostrar();