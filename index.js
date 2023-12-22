

let countEl=document.getElementById("count-el")
let count=0;
function increment() {
    count=count+1;  
    console.log(countEl)
    countEl.innerText=count
}