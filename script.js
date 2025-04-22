const form = document.getElementById("form-gasto");
const tabela = document.querySelector("#tabela-gastos tbody");
const totalDisplay = document.getElementById("total");

let gastos = [];

//adicionando a lista dos gastos

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const descricao = document.getElementById("descricao").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const categoria = document.getElementById("categoria").value;

  const gasto = { descricao, valor, categoria };
  gastos.push(gasto);

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
      const btnRemover = document.createElement("button");
      btnRemover.textContent = "Remover";
      btnRemover.classList.add("remover");
      btnRemover.onclick = () => removerGasto(index);
      tdAcoes.appendChild(btnRemover);
  
      tr.appendChild(tdDescricao);
      tr.appendChild(tdValor);
      tr.appendChild(tdCategoria);
      tr.appendChild(tdAcoes);
  
      tabela.appendChild(tr);
  
      total += gasto.valor;
    });
  
