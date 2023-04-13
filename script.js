function sortear() {
  var pessoas = document.getElementById("pessoas").value;
  var lista = pessoas.split('\n');
  var indice = Math.floor(Math.random() * lista.length);
  document.getElementById("resultado").innerHTML = "A pessoa sorteada é: " + lista[indice];
  document.getElementById("resultado").style.display = "block";
}
