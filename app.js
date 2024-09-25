var swBtn = document.querySelector('label');
var body = document.querySelector('body')

function init(){
    let mode = localStorage.getItem('mode')
    body.setAttribute('class',mode)?"dark":""
}
init()
swBtn.addEventListener('click',function(e){
    body.classList.toggle('dark')
    let mode = body.getAttribute('class') ?"dark":""
    localStorage.setItem('mode',mode)
})
