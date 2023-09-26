const listaPessoas = document.getElementById("listaPessoas");
const btAnterior = document.getElementById("btAnterior");
const btProxima = document.getElementById("btProxima");

const exibirLista = (lista, start) => {
  listaPessoas.innerHTML = "";
  listaPessoas.start = start;
  for (let i = 0; i < lista.length; ++i) {
    const li = document.createElement("li");
    const text = document.createTextNode(
      `${lista[i].name} (${lista[i].birth_year}) (${lista[i].height} cm)`
    );
    li.appendChild(text);
    listaPessoas.appendChild(li);
  }
};

const configurarBotoes = (data) => {
  const { previous, next } = data;

  btAnterior.disabled = previous === null;
  btAnterior.onclick = () => {
    fetchAPI2(previous);
    btAnterior.disabled = true;
  };

  btProxima.disabled = next === null;
  btProxima.onclick = () => {
    fetchAPI2(next);
    btProxima.disabled = true;
  };
};

const fetchAPI = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      exibirLista(data.results);
      configurarBotoes(data);
    });
};

const fetchAPI2 = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const start = Number(url.split("=")[1]) * 10 - 9;
    console.log("start = ", start);
    exibirLista(data.results, start);
    configurarBotoes(data);
  } catch (error) {
    console.log("error = ", error);
    alert("erro ao se conectar a API");
  }
};

fetchAPI2("https://swapi.dev/api/people/?page=1");
