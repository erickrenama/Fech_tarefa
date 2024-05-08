const url = "https://663038e2c92f351c03d94b55.mockapi.io/animal";

fetch(url)
    .then(response => response.json())
    .then(animal => {
        mostrarDados(animal);
    })
    .catch(error => console.log('Erro:', error));

function mostrarDados(data) {
    const lista = document.getElementById("lista");
    lista.innerHTML = '';

    data.forEach(animal => {
        const item = document.createElement('li');
        item.innerHTML = `Id: ${animal.id} - Nome: ${animal.nome} (${animal.idade}) - Raça: ${animal.raca}`;
        lista.appendChild(item);
    });
}


function adicionarToto() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: 'Totó',
            idade: 12,
            raca: "cachorro"
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        fetch(url)
            .then(response => response.json())
            .then(animal => {
                mostrarDados(animal);
            })
            .catch(error => console.log('Erro:', error));
    })
    .catch(error => console.error('Erro customizado:', error));
}

document.querySelector('.btnCadastrarAnimal').addEventListener('click', adicionarToto);