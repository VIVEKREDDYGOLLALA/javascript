let countEl=document.getElementById("count-el")
let saaveEl=document.getElementById("save-el")
let count=0;
function increment() {
    count=count+1;  
    console.log(countEl)
    countEl.innerText=count; 
}
function save(){    
    let countstr=count+" - ";
    saaveEl.textContent+=countstr
    console.log(count);
    countEl.innerText=0; 
    count=0
}
