document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('#faq-questao-titulo').forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            const isOpen = parent.classList.toggle('open');
            const resposta = parent.querySelector('#faq-questao-resposta');
            const icons = parent.querySelectorAll('#faq-questao-titulo i');

            // Alternar entre ícones
            if (isOpen) {
                resposta.style.height = resposta.scrollHeight + 'px';
                icons[0].style.display = 'none';
                icons[1].style.display = 'block';
                item.setAttribute('aria-expanded', true);
                resposta.style.display = 'block';
            } else {
                resposta.style.height = 0;
                icons[0].style.display = 'block';
                icons[1].style.display = 'none';
                item.setAttribute('aria-expanded', false);
                resposta.style.display = 'none';
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