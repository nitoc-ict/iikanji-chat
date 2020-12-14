let reaction_button = document.getElementById("reaction-button");
let form_text = document.getElementById("form-text");
let send_text = document.getElementById("send_text");
let i = 1;

function show_reaction() {
  form_text.innerHTML = '😀' + i;
  i++;
}

function show_text() {
  form_text.innerHTML = send_text.value
}
 
//以下未実装
let chat_msg = {
  text: '',
  reaction: 0,
  add_reaction: function(){
    this.reaction++;
  },
  write_text: function(send_text){
    this.text = send_text
  }
}
