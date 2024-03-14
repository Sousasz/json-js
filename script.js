let userArea = document.querySelector(".user-area");

fetch("dados.json").then((response) => {
  response.json().then((dados) => {
    dados.usuarios.map((usuario) => {
      userArea.innerHTML += `<img src="images/${usuario.imagem}" />
       <li>${usuario.nome} - ${usuario.idade} anos</li>`;
    });
  });
});

// Fetch é utilizado para fazer a requisição de informações

/*
O JavaScript utiliza o 'fetch' para fazer a requisição dos
dados do arquivo chamado "dados.json". Em seguida/ou entao
(.then), é gerada uma resposta e deve ser do tipo .json.
Em seguida, pega os valores presentes em usuários
*/

/*
Quando aplicamos o termo 'dados' na requisição, estamos pegando
os dados como um todo, já que o array 'usuários' está dentro de
um objeto
*/

/*
Utilizando a props. map, definimos um nome para cada elemento do nosso
objeto, no caso temos um array usuários, onde cada posição é um usuário
*/

/*
Quando definimos "+=", trazemos a ideia de incremento, ou seja, no HTML será aplicado a informação
que está dentro dele junto com outro elemento 
*/
