const inputItem = document.getElementById("inputItem");
const btIncluir = document.getElementById("btIncluir");
const listaCompras = document.getElementById("listaCompras");

btIncluir.onclick = () => {
  const item = inputItem.value;
  if (item) {
    const li = document.createElement("li");
    const text = document.createTextNode(item);
    li.appendChild(text);
    listaCompras.appendChild(li);
    inputItem.value = "";
    inputItem.focus();
  }
};

// btIncluir.onclick = () => {
//   const item = inputItem.value;
//   if (item) {
//     listaCompras.innerHTML += `<li>${item}</li>`;
//     inputItem.value = "";
//     inputItem.focus();
//   }
// };
