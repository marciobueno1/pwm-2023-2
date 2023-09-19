const inputItem = document.getElementById("inputItem");
const btIncluir = document.getElementById("btIncluir");
const listaCompras = document.getElementById("listaCompras");

let lista = [];

btIncluir.onclick = () => {
  const item = inputItem.value;
  if (item) {
    lista.push(item);
    exibirLista(lista);
    inputItem.value = "";
    inputItem.focus();
  }
};

const exibirLista = (lista) => {
  listaCompras.innerHTML = "";
  for (let i = 0; i < lista.length; ++i) {
    const li = document.createElement("li");
    const text = document.createTextNode(lista[i]);
    li.appendChild(text);
    listaCompras.appendChild(li);
  }
};
