import {removeTask} from './appTasks.js'
export default class TaskClass{
    constructor(_task, _hour, _parent, _id ) {
        this.id = _id
        this.task = _task
        this.hour = _hour
        this.parent = _parent
    }

    render(){
        let tr = document.createElement("tr");
        // div.className = "row";
        tr.innerHTML = `
    
        <th id="rowH">${this.id}</th>
        <td>${this.displayHour(this.hour)}</td>
        <td>${this.task}</td>
        <i id="cancelBtn"></i>`;
        document.querySelector(this.parent).append(tr);
        tr.querySelector("#rowH").setAttribute("scope", "row")
        let cancelBtn = tr.querySelector("#cancelBtn")
        cancelBtn.className = "bi bi-x-circle-fill fs-4"
        cancelBtn.addEventListener("click",function() {
            removeTask(this.id);
            console.log("lll");
        }.bind(this));
      }

       displayHour(hour) {
        return String(hour) + ":00"
      }
}