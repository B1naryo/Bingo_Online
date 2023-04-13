    function sortear() {
      var pessoas = document.getElementById("pessoas").value;
      var lista = pessoas.split('\n');
      var indice = Math.floor(Math.random() * lista.length);
      document.getElementById("resultado").innerHTML = "A pessoa sorteada é: " + lista[indice];
      document.getElementById("resultado").style.display = "block";
      document.getElementById("rojao").style.display = "block";

      for (var i = 0; i < 100; i++) {
        var ponto = document.createElement("div");
        ponto.className = "ponto";
        ponto.style.top = Math.floor(Math.random() * 100) + "%";
        ponto.style.left = Math.floor(Math.random() * 100) + "%";
        var tamanho = Math.floor(Math.random() * 30) + 10;
        var cor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
        ponto.style.width = tamanho + "px";
        ponto.style.height = tamanho + "px";
        ponto.style.backgroundColor = cor;
        document.getElementById("rojao").appendChild(ponto);
      }
    }
