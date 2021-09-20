let messages = document.getElementById("messages");
let textbox = document.getElementById("textbox");
let button = document.getElementById("button");


button.addEventListener("click", function(){
var newMessages =document.createElement("li");
newMessages.innerHTML = textbox.value
messages.appendChild(newMessages);
textbox.value = "";


})


