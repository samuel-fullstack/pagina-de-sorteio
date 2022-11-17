

const sortear = (event) => {
   
    

    let ns = Math.floor(Math.random() * 100) ;

    event.innerHTML = ns ;
   

}

const abrirConfig = () => {
    let config = document.querySelector('#config'); 

    config.style.display = 'block'
}

const fechaConfig = () =>{
    let config = document.querySelector('#config'); 

    config.style.display = 'none'
}


