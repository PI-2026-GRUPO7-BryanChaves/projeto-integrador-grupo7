  function moverCarrossel(id, direcao) {
        const galeria = document.getElementById(id);
        galeria.scrollBy({ left: direcao * galeria.clientWidth, behavior: 'smooth' });
    }
(function () {
    var raiz = document.documentElement;
    var botao = document.getElementById('botao-tema');

    // Restore the saved theme
    try {
        if (localStorage.getItem('tema') === 'escuro') {
            raiz.setAttribute('data-tema', 'escuro');
        }
    } catch (erro) {}

    if (!botao) return;

    function atualizar() {
        var escuro = raiz.getAttribute('data-tema') === 'escuro';
        botao.textContent = escuro ? '☀️ Light Theme' : '🌙 Dark Theme';
        botao.setAttribute('aria-pressed', escuro);
    }

    botao.addEventListener('click', function () {
        var escuro = raiz.getAttribute('data-tema') === 'escuro';

        if (escuro) {
            raiz.removeAttribute('data-tema');
        } else {
            raiz.setAttribute('data-tema', 'escuro');
        }

        try {
            localStorage.setItem('tema', escuro ? 'claro' : 'escuro');
        } catch (erro) {}

        atualizar();
    });

    atualizar();
})();
