let chat = document.getElementById("chat");
let text = document.getElementById("text");
let name = document.getElementById("name");
let button = document.getElementById("button");

function show_text() {
   var line = text.value + "\n";
   if (text.value !== "") {
      chat.innerText = line + chat.innerText;
   }
}