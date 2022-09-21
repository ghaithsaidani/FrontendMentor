let button=document.querySelector('button')
var input=document.querySelector('input')
let section=document.querySelector('section.input-section')

function handleError(){
   
    
    
    if (!input.checkValidity()) {
        section.classList.add("invalid-form")
    }
    
    else{
        section.classList.remove('invalid-form')
    }     
}
input.addEventListener('click',()=>{console.log("hey"),section.classList.remove('invalid-form')})


button.addEventListener('click',handleError)