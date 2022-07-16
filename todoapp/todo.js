var apiurl= "https://to-do-app-fa990-default-rtdb.firebaseio.com/user.json";
var apigeturl= "https://to-do-app-fa990-default-rtdb.firebaseio.com/user/data";

//insert into firebase
async function inserttofirebase(tasklist) {
    var raw = JSON.stringify(tasklist);
    var requestOptions = {
      method: "POST",
      body: raw,
    };
  
    let response = await fetch(apiurl, requestOptions);
    let data = await response.json();
    return data;
  }

  async function addTask() {
    let title = document.querySelector("#taskname").value;
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
      //   console.log("this is" + title);
      document.querySelector("#v-pills-home").innerHTML += `<div id='${name}'>
    <div class="task_name" >${title}</div>
    <div class="time">${time}</div>
    <input type="checkbox" onclick="completedlist(this)">
  </div>`;
      document.querySelector("#add").setAttribute("data-bs-dismiss", "modal");
    } else {
      alert("Title is requered");
    }
    document.querySelector("#time").value = "";
    document.querySelector("#taskname").value = "";
  }
  
 // get data form firebase
  function firebasefetch() {
    var requestOptions = {
      method: "GET",
    };
    fetch(apiurl, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      for (let key in result) {
        if (result[key].status === "Not Completed") {
          document.querySelector(
            "#v-pills-home"
          ).innerHTML += `<div id='${key}'>
  <div class="task_name" >${result[key].title}</div>
  <div class="time">${result[key].datetime}</div>
  <input type="checkbox" onclick="completedlist(this)">
</div>`;
        } else {
          document.querySelector(
            "#v-pills-profile"
          ).innerHTML += `<div id='${key}'>
  <div class="task_completed">${result[key].title}</div>
  <div class="time">${result[key].datetime}</div>
  <input type="checkbox" onclick="redolist(this)">
</div>`;
        }
      }
    });
}
function showDiv1() {

    document.getElementById('first').style.display = "block";
    document.getElementById('second').style.display="none";
}
 function showDiv2() {
    document.getElementById('second').style.display = "block";
    document.getElementById('one').style.display="none";
   
 }
 