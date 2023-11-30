
 let array1 = [];

function crear() {
  let evento = document.getElementById("evento");
  let list = document.createElement("li");

  if (evento.value.trim() !== "") {
    array1.push(evento.value);
    list.appendChild(document.createTextNode(evento.value));
    document.getElementById("content").appendChild(list);
    evento.value = "";
  }
}

function borrar() {
    if (array1.length > 0) {
      array1.pop();
      let lista = document.getElementById("listcontent");
      lista.removeChild(lista.lastElementChild);
    }
}