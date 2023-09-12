// alert("Olá!");
console.log("Olá!");

const titulo = document.getElementById("titulo");
const btConfirmar = document.getElementById("btConfirmar");

// setTimeout(() => {
//     titulo.innerHTML = "Novo título";
// }, 3000);

const handleTitleMouseOver = () => {
    titulo.innerHTML += "<br />Novo título";
}

titulo.onmouseover = handleTitleMouseOver;

btConfirmar.onclick = () => {
    const confirmacao = confirm("Confirmado com sucesso!");
    titulo.innerHTML += `<br />Confirmação: ${confirmacao}`;
}
