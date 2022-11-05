function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    console.log(modal);
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) =>{
        if (e.target.id == modalID || e.target.className == 'fechar'){
            modal.classList.remove('mostrar');
        }
    });
}

const ativa = document.querySelector('.botao1');
ativa.addEventListener('click', () => iniciaModal('modal-player'));

function iniciaModal(modalID){
    const modal2 = document.getElementById(modalID);
    console.log(modal2);
    modal2.classList.add('mostrar');
    modal2.addEventListener('click', (e) =>{
        if (e.target.id == modalID || e.target.className == 'fechar'){
            modal2.classList.remove('mostrar');
        }
    });
}

const ativa2 = document.querySelector('.botao2');
ativa2.addEventListener('click', () => iniciaModal('modal-player2'));

