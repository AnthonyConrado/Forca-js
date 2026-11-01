<h1 align="center">Jogo da Forca · JavaScript</h1>

<p align="center">
  O clássico jogo da forca feito com <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript puro</strong>, direto no navegador.
</p>

<p align="center">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
</p>

---

## Sobre o projeto

Uma palavra é sorteada e o jogador tenta descobri-la letra por letra. A cada erro, o contador sobe; com 6 erros, o jogo termina. Tudo roda no navegador, sem bibliotecas nem servidor.

A interface tem um cartão central com fundo em degradê, efeito de vidro e layout responsivo para celular.

> Também existe uma versão com o processamento no servidor: [Jogo da Forca em PHP](https://github.com/AnthonyConrado/forca_php).

## Como jogar

1. Abra o jogo: uma palavra aparece escondida como `_ _ _ _`.
2. Digite uma letra e clique em **Tentar**.
3. Acertou? A letra aparece no lugar. Errou? O contador de erros sobe.
4. Descubra a palavra antes de chegar a **6 erros**.
5. Clique em **Reiniciar** para sortear uma nova palavra.

## Funcionalidades

- Sorteio aleatório da palavra
- Letras repetidas não contam como novo erro
- Contador de erros (limite de 6)
- Aviso de vitória ou derrota, mostrando a palavra
- Layout responsivo com variáveis CSS

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| HTML | Estrutura da página |
| CSS | Visual, variáveis de tema e responsividade |
| JavaScript | Sorteio, lógica do jogo e atualização da tela |

## Como rodar

Não precisa instalar nada:

```bash
git clone https://github.com/AnthonyConrado/Forca-js.git
cd Forca-js
```

Depois é só abrir o `index.html` no navegador.

## Estrutura

```
Forca-js/
├── index.html   # página e estilos
└── script.js    # lógica do jogo
```

## Próximos passos

- [ ] Enviar a letra com a tecla Enter
- [ ] Desenhar o boneco da forca a cada erro
- [ ] Mostrar as letras já tentadas
- [ ] Trocar os alertas por mensagens na própria página

## Autor

Feito por **Anthony Gonçalves Conrado**, desenvolvedor full stack júnior em Guarulhos, SP.

[![GitHub](https://img.shields.io/badge/GitHub-AnthonyConrado-181717?style=flat-square&logo=github)](https://github.com/AnthonyConrado)
[![E-mail](https://img.shields.io/badge/E--mail-anthonyns973%40icloud.com-b794f6?style=flat-square&logo=maildotru&logoColor=white)](mailto:anthonyns973@icloud.com)
