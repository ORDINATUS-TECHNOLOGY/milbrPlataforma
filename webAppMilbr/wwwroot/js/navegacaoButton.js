// TIPOS DE PLANOS

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


// LOCALIZAÇÃO GPS

document.querySelectorAll('.nav-loc').forEach(button => {
    button.addEventListener('click', function() {
        // Remove a classe 'open' de todos os conteúdos e adiciona 'close'
        document.querySelectorAll('.mapa-filho').forEach(content => {
            content.classList.remove('open');
            content.classList.add('close');
        });

        // Mostra o conteúdo alvo
        const targetContent = document.getElementById(this.getAttribute('data-target'));
        targetContent.classList.add('open');
        targetContent.classList.remove('close');  // Remove 'close' para garantir que o conteúdo seja exibido
    });
});