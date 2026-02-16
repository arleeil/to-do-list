const add = document.getElementById('add')
const input = document.getElementById('input')
const output = document.getElementById('output')
let toDoList  = []



add.addEventListener('click',()=>{
  
    let task = input.value
    toDoList.push(task)
    console.log(toDoList)
    output.innerHTML+= `<ul><li class = 'decorated_task'>${task}</li></ul><span>Yea</span>`
    output.style = 'text-align:left'
})

input.addEventListener('keydown', (event)=>{
    if(event.key ==='Enter'){
        let task = input.value
    toDoList.push(task)
    console.log(toDoList)
    output.innerHTML+= `<ul><li class = 'decorated_task'>${task}</li></ul>`
    output.style = 'text-align:left'
    }
})