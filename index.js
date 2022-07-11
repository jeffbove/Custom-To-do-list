let container = document.getElementById('container');
let ul = document.getElementById('myul');
let btn = document.getElementById('my_btn');
let input = document.getElementById('input')

btn.addEventListener("click", function(){
   var items = document.createElement('li');
   items.innerHTML = input.value ;
   ul.append(items);
   container.append(ul);
   input.value = ""
   items.addEventListener("click", function(){
        items.style.textDecoration = "line-through";
   })
   items.addEventListener("dblclick", function(){
        items.remove();
   })
})