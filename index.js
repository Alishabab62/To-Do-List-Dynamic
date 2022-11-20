const input = document.getElementById("input");
const btn = document.getElementById("add");
const ul = document.getElementById("item");

btn.addEventListener("click", () => {
  add_item();
  input.value="";
});

function add_item() {
  if(input.value!=""){
    var new_div = document.createElement("div");
    new_div.id = "new-div";
    ul.appendChild(new_div);
    const new_li = document.createElement("li");
    new_div.appendChild(new_li);
    new_li.innerText = input.value;
    const new_btn = document.createElement("button");
    new_btn.innerText = "Delete";
    new_btn.id = "btn";
    new_div.appendChild(new_btn);
  }
}

new_li.addEventListener('click',function(){
  new_li.style.textDecoration="underline";
  console.log(new_div); 
})
