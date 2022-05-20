function botao() {
  var caixa = document.getElementById("caixa");
  var resultado = document.getElementById("resultado");
  var cx = Number(caixa.value);

  if (caixa.value.length == 0) {
    alert("Insira um número para gerar a tabuada");
  } else {
    resultado.innerText = "";
    /*  Esse -For- cria cada linha da tabuada adicionando um número novo a cada repetição  */
    for (var limite = 1; limite <= 10; limite++) {
      var novoNumero = document.createElement("option");
      novoNumero.text = `${cx} x ${limite} = ${cx * limite}`;
      resultado.appendChild(novoNumero);
    }
  }
}
