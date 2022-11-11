const form = document.querySelector("form");
const button = form.querySelector(`[type="submit"]`);
const error= document.createElement('p');
const msg="Please provide a valid email address";

error.classList.add('error-text');
error.textContent=msg;

function checkEmail(e){
    
    const email = e.target.querySelector(`[type="email"]`).value;
    
    if(!validateEmail(email)){
        form.classList.add('error');
        form.insertBefore(error, button);
        e.preventDefault();
    }
    else{
        form.classList.remove('error');
        form.removeChild(error);
        
    }
}
function validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
form.addEventListener("submit", checkEmail);