import { v4 as uuidV4 } from "uuid"

type Task = {                //Crio tipo com o nome de "Task" e atribuo os parametros que são atribuidos a cont task
    id: string, 
    title: string, 
    completed: boolean, 
    createdAt: Date
}

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")

form?.addEventListener("submit", e => {
    e.preventDefault()

    if (input?.value == "" || input?.value == null) return

    const newTask: Task = {   //Crio um objeto do tipo "Task" definido no inicio do código
        id: uuidV4(),
        title: input.value,
        completed: false,
        createdAt: new Date()
    }
    input.value

    addListItem(newTask)
})
//Chamo o tipo "Task" que criei para a função de adicionar um item na lista
function addListItem(task: Task) {} 