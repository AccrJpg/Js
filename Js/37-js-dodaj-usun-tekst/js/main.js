
document.getElementById("dodaj").onclick = function() {extra()};

function extra() {
  document.getElementById("tekst").innerHTML = "działa jak powinno";
}


document.getElementById("usun").onclick = function() {erase()};

function erase() {
  document.getElementById("tekst").innerHTML = "";
}