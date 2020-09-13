//select
let todoinput = document.querySelector('.todo-input');
let todobut = document.querySelector(".todo-but");
let todocon =  document.querySelector(".todo-con");
 
getTodos()



// DELETE CHECK
console.log('check')
let trashbtn = document.querySelectorAll('.trash');
trashbtn.forEach((e)=>{
e.addEventListener('click', trash);

function trash(e){
  let parent = this.parentElement;
parent.classList.add('fade');
removeTodos(parent.children[0])
console.log('ansh24')
setTimeout(() => {
  
parent.remove();
}, 800);

}}
)



















todobut.addEventListener("click", addTodo);

function addTodo(e) {   e.preventDefault();

  if(!todoinput.value == ""){

//the value
  //div
  let div = document.createElement("div");
  div.classList.add('todo-item');

  

  const  theValue = todoinput.value;

  

  let li = document.createElement('li');
  li.classList.add('todo-item')
  li.innerHTML = `${todoinput.value}`;
  div.appendChild(li);
  todocon.appendChild(div)

saveTodos(todoinput.value);
 

  //trash button
  let trash = document.createElement("button");
  trash.classList.add('trash');
 
  trash.innerHTML = `<i class="fas trash fa-trash"></i>`;
  div.appendChild(trash);


  todoinput.value = ""




// DELETE CHECK
console.log('check')
let trashbtn = document.querySelectorAll('.trash');
trashbtn.forEach((e)=>{
e.addEventListener('click', trash);

function trash(e){
  let parent = this.parentElement;
parent.classList.add('fade');
removeTodos(parent.children[0])
console.log('ansh24')
setTimeout(() => {
  
parent.remove();
}, 800);

}}
)




}
}









// TO LOCAL STORAGE
function saveTodos(todo){
  let todos;
if(localStorage.getItem('todos') === null){
  todos= [];
}
else{
 todos =  JSON.parse(localStorage.getItem('todos'));

}
todos.push(todo)
localStorage.setItem('todos',JSON.stringify(todos));

}



function getTodos(){
  let todos = [];
if(localStorage.getItem('todos') === null){
  todos= [];
}
else{
 todos =  JSON.parse(localStorage.getItem('todos'));


}todos.forEach(function (e){ 

 let vgh;

//the value
  //div
  let div = document.createElement("div");
  div.classList.add('todo-item');

  if(typeof(e) == "string"){
vgh = e;

  
  }
  else{
    vgh= e[0];
  }
  let li = document.createElement('li');
  li.classList.add('todo-item')
  li.innerHTML = `${vgh}`;
  div.appendChild(li);
  todocon.appendChild(div)


  //trash button
  let trash = document.createElement("button");
  trash.classList.add('trash');
 
  trash.innerHTML = `<i class="fas trash fa-trash"></i>`;
  div.appendChild(trash);


  todoinput.value = ""
  
})

}
  
  


function removeTodos(todo ){
  let todos;
if(localStorage.getItem('todos') === null){
  todos= [];
}
else{
 todos =  JSON.parse(localStorage.getItem('todos'));

}
let todoindex = todos.indexOf(todo.innerHTML);
console.log(todoindex)
if (todoindex > -1){
todos.splice(todoindex,1)

localStorage.setItem('todos',JSON.stringify(todos));

}}




