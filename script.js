let btn=document.querySelector("button")
let text=document.getElementById("text")
btn.addEventListener("click",()=>{
    let a=new SpeechSynthesisUtterance(text.value)
    speechSynthesis.speak(a)
})