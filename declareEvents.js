import TaskClass from "./taskClass.js";
import {addToList, clearTasks} from './appTasks.js'
const declareEvents = () =>{
    document.querySelector("#buttonOK").addEventListener("click", () =>{
         let item = {}
        item.task = document.querySelector("#input_task").value
        item.hour = document.querySelector("#input_hour").value
        
        addToList(item)
    })

    document.querySelector("#reset_btn").addEventListener("click",clearTasks)
}
export {declareEvents}