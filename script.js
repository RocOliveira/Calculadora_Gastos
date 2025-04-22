const form = document.getElementById("formulario-gasto");
const tabela = document.querySelector("#tabela-gastos tbody");
const totalDisplay = document.getElementById("total");

let gastos = [];

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