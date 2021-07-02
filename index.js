
// Event Listner for Mouse Click

for(var i = 0; i< document.querySelectorAll(".drum").length ; i++){
document.querySelectorAll("button")[i].addEventListener("click", eventHandler);
}

function eventHandler(){
    buttonAnimation(this.innerHTML);
   switch (this.innerHTML) {
        case "w":
            var drumW = new Audio("sounds/tom-1.mp3");
        drumW.play();
            break;
        case "a":
            var drumA = new Audio("sounds/tom-2.mp3");
        drumA.play();
            break;
        case "s":
            var drumS = new Audio("sounds/tom-3.mp3");
        drumS.play();
            break;
        case "d":
            var drumD = new Audio("sounds/tom-4.mp3");
            drumD.play();
            break;
        case "j":
            var drumJ = new Audio("sounds/crash.mp3");
            drumJ.play();
            break;
        case "k":
            var drumK = new Audio("sounds/kick-bass.mp3");
            drumK.play();
            break;
        case "l":
            var drumL = new Audio("sounds/snare.mp3");
        drumL.play();
            break;                        
    
        default:
            break;
    }
}

// Event Listner for Keyboard Press

document.addEventListener("keydown", function (event){
    
    keyHandler(event.key);
    console.log(event.key);
    buttonAnimation(event.key);


    
});


function keyHandler(key){
 
    switch (key) {
         case "w":
             var drumW = new Audio("sounds/tom-1.mp3");
         drumW.play();
             break;
         case "a":
             var drumA = new Audio("sounds/tom-2.mp3");
         drumA.play();
             break;
         case "s":
             var drumS = new Audio("sounds/tom-3.mp3");
         drumS.play();
             break;
         case "d":
             var drumD = new Audio("sounds/tom-4.mp3");
             drumD.play();
             break;
         case "j":
             var drumJ = new Audio("sounds/crash.mp3");
             drumJ.play();
             break;
         case "k":
             var drumK = new Audio("sounds/kick-bass.mp3");
             drumK.play();
             break;
         case "l":
             var drumL = new Audio("sounds/snare.mp3");
         drumL.play();
             break;                        
     
         default:
             break;
     }
 }

 function buttonAnimation (currentKey){
     var activeButton = document.querySelector("."+currentKey);
     activeButton.classList.add("pressed");
     setTimeout(function(){
        activeButton.classList.remove("pressed");  
     },100)

     


 }
