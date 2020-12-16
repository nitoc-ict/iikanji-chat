let send_text = document.getElementById("send_text");
let chat_text = document.getElementById("chat-text")
let form_text = document.getElementById("form-text")

let i = 1;
let j = 0;
let reaction_dic = {}

function show_reaction() {
  form_text.innerHTML = '😀' + '[' + i + ']:';
  i++;
}

function show_text() {
  chat_text.innerHTML = send_text.value;
}

//チャットの追加
function add_msg(){
  j++;
  reaction_dic[j] = 0;
  
  //挿入するdivの作成
  var new_div = document.createElement("div");
  new_div.setAttribute("id", j)
  
  //div内のメッセージspanの作成
  var new_msg_span = document.createElement("span");
  var new_msg_content = document.createTextNode(send_text.value)
  new_msg_span.appendChild(new_msg_content)
  new_msg_span.setAttribute("class", "msg")

  //div内のリアクションinputの作成
  var new_reaction_input = document.createElement("input");
  new_reaction_input.setAttribute("value", "😀");
  new_reaction_input.setAttribute("type", "button")
  new_reaction_input.setAttribute("id", j)
  new_reaction_input.setAttribute("onclick", "disabled = true; push_button(this.id)")

  //挿入
  form_text.insertBefore(new_div, form_text.firstChild);
  target_div = document.getElementById(j)
  target_div.insertBefore(new_msg_span, target_div.firstChild);
  target_div.insertBefore(new_reaction_input ,target_div.firstChild)
}

function push_button(id){
  reaction_dic[id]++
  
}
