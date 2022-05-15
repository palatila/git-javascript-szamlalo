let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
/*const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");*/


btns.forEach((btn)=>{

    btn.addEventListener("click", (e)=>{
        const style = e.currentTarget.classList;

        console.log(style);

        if(style.contains("decrease")){
            count--;

        }
        else if(style.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }

        if(count > 0){
            value.style.color="green";
        }
        else if(count < 0){
            value.style.color = "red";
        }
        else{
            value.style.color = "black";
        }

        value.textContent = count;
    })

})



/*
increase.addEventListener("click", ()=>{

    count++;

    if(count > 0){
        value.style.color = "green";
    }
    value.textContent = count;

})
decrease.addEventListener("click", ()=>{

    count--;

    if(count < 0){
        value.style.color = "red";
    }
    value.textContent = count;

})
reset.addEventListener("click", ()=>{

    count=0;

    
    value.style.color = "black";
    
    value.textContent = count;

})
*/