// let inputs = document.getElementById("inp");
// let text = document.querySelector(".text");
// function add (){
//     if(inputs.value ==""){
//         alert("Please enter a value");
//     } else{
//         let newLi = document.createElement("ul");
//         newLi.innerHTML=`${inputs.value}`
//         text.appendChild(newLi)
//         inputs.value=="";
         
//     }

// }
   
function add() {
    if (inputs.value == "") {
        alert("Please Enter Task")
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click", remove);
        function remove() {
            newEle.remove()
        }
    }
}