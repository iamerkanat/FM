function sayHello(n){
    for(let i=0; i<n; i++){
    console.log("Hello, world!");};
};

sayHello(5);

const redSquare = document.querySelector(".red-square");
redSquare.style.backgroundColor="limegreen";
redSquare.style.width = "200px";

const blackC = document.getElementsByClassName("black-circle")[0];
blackC.style.backgroundColor = "blue";

const button = document.querySelector(".event-button");
button.addEventListener("click", function(){
    console.log("Hey there!");
});


const input = document.querySelector(".input-to-copy");
const paragraph = document.querySelector(".p-to-copy-to");

input.addEventListener("keyup", function(){
    paragraph.innerText = input.value;
});



const input1 = document.querySelector(".color-input");
const paragraph1 = document.querySelector(".color-box");

input1.addEventListener("change", function(){
    paragraph1.style.backgroundColor = input1.value;
});

document.querySelector(".button-cont").addEventListener("click", function(event){
    alert(`You clicked on button ${event.target.innerText}`);
})