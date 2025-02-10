document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('#faq-questao-titulo').forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            const isOpen = parent.classList.toggle('open');
            const resposta = parent.querySelector('#faq-questao-resposta');
            const icons = parent.querySelectorAll('#faq-questao-titulo i');

            // Alternar entre ícones
            if (isOpen) {
                resposta.style.height = resposta.scrollHeight + 'px'; // Define a altura da resposta
                icons[0].style.display = 'none';  // Esconde o ícone "mais"
                icons[1].style.display = 'block'; // Exibe o ícone "menos"
                item.setAttribute('aria-expanded', true);
                resposta.style.display = 'block'; // Exibe a resposta
            } else {
                resposta.style.height = 0; // Define a altura para 0 ao fechar
                icons[0].style.display = 'block'; // Exibe o ícone "mais"
                icons[1].style.display = 'none'; // Esconde o ícone "menos"
                item.setAttribute('aria-expanded', false);
                resposta.style.display = 'none'; // Esconde a resposta
            }
        });
    
        item.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.click(); // Permite alternar com Enter ou Space
            }
        });
    });
});
