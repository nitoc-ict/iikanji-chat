let send_text = document.getElementById("send_text");
let reaction = document.getElementById("reaction")
let chat_text = document.getElementById("chat-text")
let form_text = document.getElementById("form-text")

let i = 1;
let j = 0;
let id_dic = {}

function show_reaction() {
  form_text.innerHTML = '😀' + '[' + i + ']:';
  i++;
}

function show_text() {
  chat_text.innerHTML = send_text.value;
}

function add_msg(){
  j++;
  id_dic[j] = 0;
  
  //挿入するdivの作成
  var new_div = document.createElement("div");
  new_div.setAttribute("id", j)
  
  //div内のメッセージspanの作成
  var new_msg_span = document.createElement("span");
  var new_msg_content = document.createTextNode(send_text.value)
  new_msg_span.appendChild(new_msg_content)
  new_msg_span.setAttribute("class", "msg")

  //div内のリアクションspanの作成
  var new_reaction_span = document.createElement("span");
  var new_reaction_content = document.createTextNode("😀[0]:");
  new_reaction_span.appendChild(new_reaction_content);
  new_reaction_span.setAttribute("class", "reaction");
  new_reaction_span.setAttribute("id", j)

  //挿入
  form_text.insertBefore(new_div, form_text.firstChild);
  target_div = document.getElementById(j)
  target_div.insertBefore(new_msg_span, target_div.firstChild);
  target_div.insertBefore(new_reaction_span ,target_div.firstChild)
}
 
//以下未実装
function chat_msg (text, id){
  text: '';
  reaction = 0;
  function add_reaction(){
    this.reaction++;
  }
}
