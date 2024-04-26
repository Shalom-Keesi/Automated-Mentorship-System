function addTask() {
    const input = document.getElementById("tasks");
    const taskName = input.value;
    if (taskName === "") {
    alert("Please enter a task.");
    return;
    }
    // input.value = "";
    // const inputValue = document.getElementById("tasks-list");
    // const li = document.createElement("li");
    // li.textContent = taskName;

    var deleteButton = document.createElement("close");
    deleteButton.textContent = "x";
    deleteButton.onclick = function(){
    inputValue.removeChild(li);
  } ;
  li.appendChild(deleteButton);
  inputValue.appendChild(li);

}

  const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newListItem() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("tasks").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Please add a task!");
    } else {
      document.getElementById("tasks-list").appendChild(li);
    }
    document.getElementById("tasks").value = "";
  
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

    

// const closeButton = document.getElementByTagName("LI");
// let index;
// for (index= 0; index<closeButton.length;index++){
//     var span = document.createElement("SPAN");
//     var newAdddedText = document.createTextNode("/u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     closeButton[index].appendChild(span);

// }

// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
// // 
// var buttonToClose = document.getElementsByClassName("close");
// var i;
// for(i=0; i< buttonToClose.length;i++){
//     buttonToClose[i].addEventListener("click",function(){
//         this.parentElement.style.display='none'
//     });
// }















