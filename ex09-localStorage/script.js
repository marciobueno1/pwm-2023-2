const h2Contador = document.getElementById("h2Contador");
const btIncrementar = document.getElementById("btIncrementar");
const btDecrementar = document.getElementById("btDecrementar");

let contador = Number(localStorage.getItem("contador") || "0");

btIncrementar.onclick = () => {
  ++contador;
  atualizarContador();
};

btDecrementar.onclick = () => {
  --contador;
  atualizarContador();
};

const atualizarContador = () => {
  localStorage.setItem("contador", contador);
  h2Contador.innerHTML = `<em>${contador}</em>`;
  btDecrementar.disabled = contador === 0;
};

// function atualizarContador() {
//   h2Contador.innerHTML = `<em>${contador}</em>`;
//   btDecrementar.disabled = contador === 0;
// };

atualizarContador();
