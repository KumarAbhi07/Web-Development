let button =document.getElementById("btn")
button.addEventListener("click",()=>{
    // alert("i was clicked")
    document.querySelector(".box").innerHTML="<b> yayy you were clicked<b> enjoy your click"
})
button.addEventListener("contextmenu",()=>{
    // alert("i was clicked")
    alert("Don't hack us by right click us")
})
document.addEventListener("keydown",(e)=>{
    // alert("i was clicked")
    console.log(e.key,e.code)
})
