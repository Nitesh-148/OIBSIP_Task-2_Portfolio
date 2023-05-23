const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const success = document.querySelector("#message");
const errorNodes = document.querySelector("#success");

// validate data
function validateForm()
{
    if(nameInput.ariaValueMax.length <1)
    {
        errorNodes[0].innerText= "Name cannot be blank";
        nameInput.classList.add("error-border");
    }
}