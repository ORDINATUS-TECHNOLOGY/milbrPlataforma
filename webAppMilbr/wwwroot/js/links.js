// TROCA DE CONTEUDO COM BASE NOS PLANOS

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        const targetId = this.getAttribute('href').slice(1); // Obtém o ID sem o '#'
        const targetElement = document.getElementById(targetId); // Seleciona o elemento alvo

        if (targetElement) {
            // Rola suavemente até o elemento alvo
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


//  TROCA DE MAPAS COM BASE NA CIDADE