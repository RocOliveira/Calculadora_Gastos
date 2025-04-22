const form = document.getElementById("form-gasto");
const tabela = document.querySelector("#tabela-gastos tbody");
const totalDisplay = document.getElementById("total");

let gastos = [];
let indiceEdicao= -1;

//adicionando a lista dos gastos

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const descricao = document.getElementById("descricao").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const categoria = document.getElementById("categoria").value;

  const gasto = { descricao, valor, categoria };
  if (indiceEdicao === -1) {
    // Adiciona novo gasto
    gastos.push(gasto);
  } else {
    // Edita gasto existente
    gastos[indiceEdicao] = gasto;
    indiceEdicao = -1;
    form.querySelector("button[type='submit']").textContent = "Adicionar Gasto";
  }
  atualizarTabela();
  form.reset();
});

function atualizarTabela() {
    tabela.innerHTML = "";
    let total = 0;
  
    gastos.forEach((gasto, index) => {
      const tr = document.createElement("tr");
  
      const tdDescricao = document.createElement("td");
      tdDescricao.textContent = gasto.descricao;
  
      const tdValor = document.createElement("td");
      tdValor.textContent = gasto.valor.toFixed(2);
      if (gasto.valor > 100) tdValor.classList.add("valor-alto");
  
      const tdCategoria = document.createElement("td");
      tdCategoria.textContent = gasto.categoria;

      const tdAcoes = document.createElement("td");

      const btnEditar = document.createElement("button");
      btnEditar.textContent = "Editar";
      btnEditar.classList.add("editar");
      btnEditar.onclick = () => editarGasto(index);
  
      const btnRemover = document.createElement("button");
      btnRemover.textContent = "Remover";
      btnRemover.classList.add("remover");
      btnRemover.onclick = () => removerGasto(index);

      tdAcoes.appendChild(btnEditar);
      tdAcoes.appendChild(btnRemover);
  
      tr.appendChild(tdDescricao);
      tr.appendChild(tdValor);
      tr.appendChild(tdCategoria);
      tr.appendChild(tdAcoes);
  
      tabela.appendChild(tr);
  
      total += gasto.valor;
    });
    totalDisplay.textContent = total.toFixed(2);
}

function removerGasto(index) {
  gastos.splice(index, 1);
  atualizarTabela();
}

function editarGasto(index) {
    const gasto = gastos[index];
    document.getElementById("descricao").value = gasto.descricao;
    document.getElementById("valor").value = gasto.valor;
    document.getElementById("categoria").value = gasto.categoria;
  
    indiceEdicao = index;
    form.querySelector("button[type='submit']").textContent = "Salvar Alteração";
  }
