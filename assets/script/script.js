

const sortear = () => {
   
    let telaSorteio = document.getElementById('sortear')
    let np = document.getElementById('valor-max').value ;

    let ns = Math.ceil(Math.random() * np) ;

    telaSorteio.innerHTML = ns ;
   

}

const abrirConfig = () => {
    let config = document.querySelector('#config-container'); 

    config.style.display = 'block'
}

const fechaConfig = () =>{
    let config = document.querySelector('#config-container'); 

    config.style.display = 'none'
}


