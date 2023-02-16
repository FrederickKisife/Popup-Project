const button =document.querySelector("button")
const wrapper = document.querySelector(".pop-wrapper")
const popup = document.querySelector(".popup")
const close = document.querySelector(".popup-close")

button.addEventListener("click", e=>{
    wrapper.style.display = "block";
})

close.addEventListener("click",()=>{
    
})

wrapper.addEventListener("click", e=>{
    wrapper.style.display = "none"
})

