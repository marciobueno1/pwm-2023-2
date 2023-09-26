const listaTarefas = document.getElementById("listaTarefas");
const btAdicionar = document.getElementById("btAdicionar");
const inputDescricao = document.getElementById("inputDescricao");

const exibirLista = (lista) => {
  listaTarefas.innerHTML = "";
  for (let i = 0; i < lista.length; ++i) {
    const li = document.createElement("li");
    const text = document.createTextNode(
      `${lista[i].descricao} - ${lista[i].feita ? "feita" : "a fazer"}`
    );
    li.appendChild(text);
    listaTarefas.appendChild(li);
  }
};

const getTarefas = async () => {
  try {
    const response = await fetch(
      "https://parseapi.back4app.com/classes/Tarefa",
      {
        headers: {
          "X-Parse-Application-Id": "Y5OuJ55DD5vXJuhIJkcrOZFDgxTjb2cH9Vx5Xh9Y",
          "X-Parse-REST-API-Key": "11TREPTNdh9d5bmHsyp5HEsBOSiLJsdtMWy8yLIW",
        },
      }
    );
    const data = await response.json();
    console.log("data =", data);
    localStorage.qtdTarefas = data.results.length;
    exibirLista(data.results);
  } catch (error) {
    console.log("error = ", error);
  }
};

btAdicionar.onclick = async () => {
  const descricao = inputDescricao.value;
  if (!descricao) {
    alert("Digite uma descrição");
    return;
  }
  console.log("descricao = ", descricao);
  try {
    const response = await fetch(
      "https://parseapi.back4app.com/classes/Tarefa",
      {
        method: "POST",
        headers: {
          "X-Parse-Application-Id": "Y5OuJ55DD5vXJuhIJkcrOZFDgxTjb2cH9Vx5Xh9Y",
          "X-Parse-REST-API-Key": "11TREPTNdh9d5bmHsyp5HEsBOSiLJsdtMWy8yLIW",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ descricao: descricao }),
      }
    );
    console.log("response =", response);
    const data = await response.json();
    console.log("data = ", data);
    getTarefas();
  } catch (error) {
    console.log("error = ", error);
  }
};

getTarefas();
