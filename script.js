function sortear() {
  var pessoas = document.getElementById("pessoas").value;
  var lista = pessoas.split('\n');
  var gif = "bexigas2.gif";
  var indice = Math.floor(Math.random() * lista.length);
  document.getElementById("resultado").innerHTML = "A pessoa sorteada é: " + lista[indice] + "<img src='" + gif + "'/>";
  document.getElementById("resultado").style.display = "block";
}
