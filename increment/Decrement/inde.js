let a = document.querySelector("h5")

let addfrnd = document.querySelector("#increment")

let removefrnd = document.querySelector("#decrement")
let count =0;
addfrnd.addEventListener("click" , function(){
    count++;
    a.innerHTML = count
    
})
removefrnd.addEventListener("click" , function(){
    count-- ; 

    a.innerHTML = count

})

