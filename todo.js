async function addTask() {
    let title = document.querySelector("#task").value;
    let time = document.querySelector("#time").value;
    console.log(typeof title);
    if (title.length !== 0) {
      let response = inserttofirebase({
        title: title,
        datetime: time,
        status: "Not Completed",
      });
  
      let result = await response;
      let name = result.name;
      
      document.querySelector("#v-pills-home").innerHTML += `<div id='${name}'>
    <div class="task" >${title}</div>
    <div class="time">${time}</div>
    <input type="checkbox" onclick="completedlist(this)">
  </div>`;
      document.querySelector("#add").setAttribute("data-bs-dismiss", "modal");
    } else {
      alert("Title is requered");
    }
    document.querySelector("#time").value = "";
    document.querySelector("#task").value = "";
  }