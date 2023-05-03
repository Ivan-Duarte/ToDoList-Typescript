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
const tasks: Task[] = loadTasks()
tasks.forEach(addListItem)

form?.addEventListener("submit", e => {
    e.preventDefault()

    if (input?.value == "" || input?.value == null) return

    const newTask: Task = {   //Crio um objeto do tipo "Task" definido no inicio do código
        id: uuidV4(),
        title: input.value,
        completed: false,
        createdAt: new Date()
    }
    tasks.push(newTask)
    addListItem(newTask)
    input.value = ""
})

//Chamo o tipo "Task" que criei para a função de adicionar um item na lista
function addListItem(task: Task) {
    const item = document.createElement("li")
    const label = document.createElement("label")
    const checkbox = document.createElement("input")
    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked
        saveTasks()
    })
    checkbox.type = "checkbox"
    checkbox.checked = task.completed
    label.append(checkbox, task.title)  //Adiciono minha caixa de checagem e o titulo da tarefa ao meu Label
    item.append(label)                  //Adiciono meu Label ao meu Item
    list?.append(item)                  //Adiciono meu Item a minha Lista
}

function saveTasks() {
    localStorage.setItem("TASKS", JSON.stringify(tasks))
}

function loadTasks(): Task[] {
    const taskJSON = localStorage.getItem("TASKS")
    if (taskJSON == null) return []
    return JSON.parse(taskJSON)
}