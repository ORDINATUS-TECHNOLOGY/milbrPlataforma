document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('#faq-questao-titulo').forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            const isOpen = parent.classList.toggle('open');
            const resposta = parent.querySelector('#faq-questao-resposta');
    
            if (isOpen) {
                resposta.style.height = resposta.scrollHeight + 'px'; // Define a altura
                item.setAttribute('aria-expanded', true);
            } else {
                resposta.style.height = 0; // Define a altura para 0 ao fechar
                item.setAttribute('aria-expanded', false);
            }
        });
    
        item.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.click();
            }
        });
    });
    
});
