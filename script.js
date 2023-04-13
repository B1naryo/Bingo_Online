function sortear() {
        var pessoas = document.getElementById("pessoas").value;
        var lista = pessoas.split('\n');
        var indice = Math.floor(Math.random() * lista.length);
        document.getElementById("resultado").innerHTML = "A pessoa sorteada é: " + lista[indice];
        document.getElementById("resultado").style.display = "block";
        document.getElementById("rojao").style.display = "block";
        var rojao = document.getElementById("rojao");
        for (var i = 0; i < 50; i++) {
          var pontilhado = document.createElement("div");
          pontilhado.className = "pontilhado";
          var top = Math.floor(Math.random() * rojao.offsetHeight);
          var left = Math.floor(Math.random() * rojao.offsetWidth);
          pontilhado.style.top = top + "px";
          pontilhado.style.left = left + "px";
          rojao.appendChild(pontilhado);
        }
      }
