const stickyNoteWrapper = document.querySelector("#sticky-note-wrapper");
const stickyNote = document.querySelector("#sticky-note");
const stickyNoteText = document.querySelector("#sticky-note-text");
stickyNoteWrapper.addEventListener("click", function(){
    $("#sticky-note").fadeOut();
    $("#sticky-note-text").fadeOut();
});


let password = "";
const checkPassword = (ev)=>{
    ev.preventDefault(); 
    let password = document.getElementById('password').value
    document.forms[0].reset(); 
    console.log('added' , password );
    localStorage.setItem(password);
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('login-eportfolio').addEventListener("submit", checkPassword);
});