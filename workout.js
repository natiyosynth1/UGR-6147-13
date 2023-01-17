const checkb = document.getElementById("vid1");
const videos = document.getElementById("video11")
checkb.addEventListener("change" , ()=>{
    videos.style.display = videos.style.display == "block" ? "none"  : "block"
})