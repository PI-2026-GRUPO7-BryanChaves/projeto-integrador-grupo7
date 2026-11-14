(function () {
    var raiz = document.documentElement;
    try {
        if (localStorage.getItem('tema') === 'escuro') {
            raiz.setAttribute('data-tema', 'escuro');
        }
    } catch (erro) {}

    document.addEventListener('DOMContentLoaded', function () {
        var botao = document.getElementById('botao-tema');
        if (!botao) { return; }

        function atualizar() {
            var escuro = raiz.getAttribute('data-tema') === 'escuro';
            botao.setAttribute('aria-pressed', escuro ? 'true' : 'false');
        }

        botao.addEventListener('click', function () {
            var estavaEscuro = raiz.getAttribute('data-tema') === 'escuro';
            if (estavaEscuro) {
                raiz.removeAttribute('data-tema');
            } else {
                raiz.setAttribute('data-tema', 'escuro');
            }
            try {
                localStorage.setItem('tema', estavaEscuro ? 'claro' : 'escuro');
            } catch (erro) {}
            atualizar();
        });

        atualizar();
    });
})();

