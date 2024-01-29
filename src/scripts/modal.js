/* Desenvolva seu código aqui... */

function handleModal(){
    const register = document.querySelector("#form__register-link");
    const modalContainer = document.querySelector("#modalContainer");

    register.addEventListener("click" , () =>{
        modalContainer.showModal();
    })
}

handleModal();