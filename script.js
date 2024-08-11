let userArea = document.querySelector(".user-area");

fetch("dados.json").then((response) => {
  response.json().then((dados) => {
    dados.usuarios.map((usuario) => {
      userArea.innerHTML += `<img src="images/${usuario.imagem}" />
       <li>${usuario.nome} - ${usuario.idade} anos</li>`;
    });
  });
});
