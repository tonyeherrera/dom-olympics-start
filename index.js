var header = document.getElementById("header")
header.innerHTML = "JavaScript Made This!!<br><br><div id='headerLineTwo'><span id='myName'>Tony Herrera</span> wrote the JavaScript</div>";
var myName = document.getElementById("myName")
var whoDoneIt = document.getElementById("whoDoneIt")
var headerTwo = document.getElementById("headerLineTwo")
header.style.textAlign = "center";
header.style.fontFamily = "sans-serif";
header.style.fontSize = "40px";
myName.style.color = "peachpuff";
headerLineTwo.style.fontSize = "27px";

document.getElementById("leftOne").textContent = "Hey buddy, Hows it going?";
document.getElementById("rightOne").textContent = "Hey man, not much. Just watching the game. What are you upto?";
document.getElementById("leftTwo").textContent = "Just checking out this new messenger app! Pretty sweet right?";
document.getElementById("rightTwo").textContent = "It's sick! Way better than AOL instant message!";

var clear = document.getElementById("clear-button")
clear.addEventListener("click", function clearMessages(){
    document.getElementById("messages").textContent = "";
})




var left = document.querySelectorAll(".left")
var right = document.getElementsByClassName("right")

document.getElementById("theme-drop-down").addEventListener("change", function theme(){
    var dropDown = document.getElementById("theme-drop-down").value
    var leftStyle = document.styleSheets[0].cssRules[6].style;
    var rightStyle = document.styleSheets[0].cssRules[5].style;
    
if ( dropDown === "theme-one"){
    leftStyle.backgroundColor = "burlywood";
    leftStyle.color = "black";
    rightStyle.backgroundColor = "lightblue";
    rightStyle.color = "black";
    // for (var i = 0; i < left.length; i++){
    // left[i].style.backgroundColor = "burlywood";
    // left[i].style.color = "black";
    // right[i].style.backgroundColor = "lightblue";
    // right[i].style.color = "black";}
}if ( dropDown === "theme-two"){
    leftStyle.backgroundColor = "black";
    leftStyle.color = "white";
    rightStyle.backgroundColor = "maroon";
    rightStyle.color = "white";
    // for (var i=0; i< left.length; i++){
    // left[i].style.backgroundColor = "black";
    // left[i].style.color = "white";
    // right[i].style.backgroundColor = "maroon";
    // right[i].style.color = "white";}
    
}if ( dropDown === "theme-three"){
    leftStyle.backgroundColor = "forestgreen";
    leftStyle.color = "silver";
    rightStyle.backgroundColor = "goldenrod";
    rightStyle.color = "gainsboro";
    // for (var i=0; i< left.length; i++){
    // left[i].style.backgroundColor = "forestgreen";
    // left[i].style.color = "silver";
    // right[i].style.backgroundColor = "goldenrod";
    // right[i].style.color = "gainsboro";}
}    
if ( dropDown === "theme-four"){
    console.log(leftStyle);
    leftStyle.backgroundColor = "pink";
    leftStyle.color = "darkblue";
    rightStyle.backgroundColor = "purple";
    rightStyle.color = "lightblue";
        // for (var i=0; i< left.length; i++){
    // left[i].style.backgroundColor = "pink";
    // left[i].style.color = "darkblue";
    // right[i].style.backgroundColor = "purple";
    // right[i].style.color = "lightblue";}
}  
if ( dropDown === "theme-five"){
    leftStyle.backgroundColor = "black";
    leftStyle.color = "white";
    rightStyle.backgroundColor = "white";
    rightStyle.color = "black";
        // for (var i=0; i< left.length; i++){
        // left[i].style.backgroundColor = "black";
        // left[i].style.color = "white";
        // right[i].style.backgroundColor = "white";
        // right[i].style.color = "black";}
            
}});

var whoSaidIt = "left";
document.getElementById("send").addEventListener("click",function conversation(){
     var message = document.getElementById("input").value
    var newMessage = document.createElement("div")
    newMessage.textContent = message;
   
        if ( whoSaidIt === "left"){
        newMessage.className = 'left';
        whoSaidIt = "right";
        console.log(whoSaidIt);
    }else{
        newMessage.className = "right";
        whoSaidIt = "left";
        console.log(whoSaidIt);
        
    }
    document.getElementById("messages").appendChild(newMessage);
   document.getElementById("input").value = "";
   
    
});


