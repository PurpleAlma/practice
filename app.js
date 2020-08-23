const tododiv=document.getElementById('todo')
const todoul=document.getElementById('todoul')
const adder=document.getElementById('add')
const inputter=document.getElementById('inputter')

const creator=function(todo){
  let  lis=document.createElement('li')
  lis.innerHTML=inputter.value
  

  let lab=document.createElement('label')
 

  let del=document.createElement('button')
  del.innerHTML=('delete')
  del.className=('delete')
  del.onclick=deleteTodo
  

  let check=document.createElement('input')
  check.type='checkbox'

  lis.appendChild(del)
  lis.appendChild(check)
  todoul.appendChild(lis)

  inputter.value = "";
}


adder.onclick = function() {
    creator(inputter.value); 
  }

function deleteTodo(){
    let todoLi = this.parentElement;
    todoLi.remove();
}

/*transform sentence first letters to uppercase*/
/*
String.prototype.toJadenCase = function (){
  return this.split(" ").map(el=>{
    return el.replace(el[0],el[0].toUpperCase());
}).join(' ')};
*/

/*array to set back to array
function arrayToSetBacktoArray(arr){
  seti=new Set(arr)
    return Array.from(seti)
}
*/

function aa(arr){
  iter=0
  for (let i=0; i<=arr.length; i++){
    for(let j=0; j<=arr.length;j++){
      arr[i]==arr[j]?console.log(i):console.log(j)
    }
  }
}