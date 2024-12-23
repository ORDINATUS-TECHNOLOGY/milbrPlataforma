// ---------------------------------------- + CONHEÇA NOSSOS PLANOS + --------------------------------------

// -- BUTTON --
const buttonResidencial = document.getElementById("index-area-cliente-conteudo-conhecer-planos-tipos-planos-residencial");
const buttonComercial   = document.getElementById("index-area-cliente-conteudo-conhecer-planos-tipos-planos-comercial");
const buttonCorporativo = document.getElementById("index-area-cliente-conteudo-conhecer-planos-tipos-planos-corporativo");
const buttonRural       = document.getElementById('index-area-cliente-conteudo-conhecer-planos-tipos-planos-rural'); 

document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove a classe 'open' de todos os conteúdos e adiciona 'close'
        document.querySelectorAll('.conteudo').forEach(content => {
            content.classList.remove('open');
            content.classList.add('close');
        });

        // Mostra o conteúdo alvo
        const targetContent = document.getElementById(this.getAttribute('data-target'));
        targetContent.classList.add('open');
        targetContent.classList.remove('close');  // Remove 'close' para garantir que o conteúdo seja exibido
    });
});




// ---------------------------------------- + SIGA NOSSAS REDES + --------------------------------------


// ---------------------------------------- + PERGUNTAS FREQUENTES + --------------------------------------