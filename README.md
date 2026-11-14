Site do grupo

Site do grupo com a página de cada integrante (Sobre Mim, Onde Vivo e TCTs), em português e inglês, com modo noturno.

Estrutura de pastas
/
├── README.md
├── bryan.html          ← páginas em português (uma por integrante, na raiz)
├── css/
│   └── bryan.css       ← um CSS por integrante (variáveis de cor + tema escuro)
├── js/
│   └── tema.js         ← só o botão do modo noturno
├── img/                ← imagens de todos
├── en/
│   └── bryan.html      ← versão em inglês, mesmo nome do arquivo em português
└── esp/                ← versão em espanhol, mesmo nome do arquivo em português
Padrão de nomes
Letras minúsculas, sem acentos e sem espaços (use - ou _ se precisar separar).
Exemplos corretos: bryan.html, foto-biopark.jpg. Incorretos: Bryan.html, Foto Biopark.JPG, trajetória.html.
A página traduzida tem o mesmo nome da página em português, dentro de en/ ou esp/.
Caminhos
Página	CSS	JavaScript	Imagens
Português (raiz)	css/arquivo.css	js/tema.js	img/arquivo.jpg
en/ ou esp/	../css/arquivo.css	../js/tema.js	../img/arquivo.jpg

Em páginas traduzidas: <html lang="en"> (ou "es") e alt das imagens no idioma da página.

Modo noturno
As cores ficam em variáveis CSS no :root do CSS de cada integrante.
O tema escuro só redefine essas variáveis em :root[data-tema="escuro"].
O botão (id="botao-tema", no menu de todas as páginas) apenas troca o atributo data-tema do <html> e salva a escolha. Não existe cor no HTML nem style="".
Ajustes de cada integrante ficam em um bloco próprio do CSS do integrante.
Paleta
Tema claro (padrão): verde escuro 
#14532D, branco 
#FFFFFF e âmbar 
#E0A526.
Tema escuro: definido no bloco :root[data-tema="escuro"] do CSS.
Idioma

Cada página tem um link no menu para a outra versão (English / Português).

Como atualizar a sua branch

Depois que a main for reorganizada: Update branch no GitHub ou git pull origin main.
