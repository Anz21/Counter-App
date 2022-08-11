const inc = document.getElementById("inc-btn");
const res = document.getElementById("res-btn");
const dec = document.getElementById("dec-btn");
let counter = document.getElementById("counter");
let count = 0;

inc.addEventListener("click" ,function(){
    
    count++;
    counter.textContent = count;
    if(count > 0 ){
        counter.style.color = "#00B8A9";
    }
    console.log(count)
})

res.addEventListener("click" , function(){
    count = 0;
    counter.textContent = count;
    
    if(count === 0 ){
        counter.style.color = "#323232";
    }
})


dec.addEventListener("click" , function(){
    count--;
    counter.textContent = count;
    if(count < 0 ){
        counter.style.color = "#EA5455";
    }
})