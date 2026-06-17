const palavras = ["banana", "computador", "internet", "javascript", "programacao"];
const palavra = palavras[Math.floor(Math.random() * palavras.length)];
let letras = [];
let erros = 0;

function atualizar() {
    let texto = "";
    let venceu = true;

    for (let c of palavra) {
        if (letras.includes(c)) {
            texto += c + " ";
        } else {
            texto += "_ ";
            venceu = false;
        }
    }

    document.getElementById("palavra").innerText = texto;
    document.getElementById("erros").innerText = "Erros: " + erros + "/6";

    if (venceu) alert("Você venceu!");
    if (erros >= 6) alert("Você perdeu! Palavra: " + palavra);
}

function jogar() {
    const letra = document.getElementById("letra").value.toLowerCase();
    document.getElementById("letra").value = "";

    if (!letras.includes(letra)) {
        letras.push(letra);
        if (!palavra.includes(letra)) erros++;
    }

    atualizar();
}

atualizar();