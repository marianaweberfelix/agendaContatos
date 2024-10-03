const form = document.getElementById('agendaTelefonica');
const contatos = [];
const numeroContatos = [];

let linhas = '';

form.addEventListener('submit', function(e){ 
    e.preventDefault();

    adicionaLinha();
    atualizaAgenda();


})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nomeContato');
    const inputNumeroContato = document.getElementById('numeroContato');

    if (contatos.includes(inputNomeContato.value)) {
        alert (`O nome: ${inputNomeContato.value} já foi inserido.`);
    } else {
        contatos.push(inputNomeContato.value);
        numeroContatos.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        inputNomeContato.value = '';
        inputNumeroContato.value = '';
    }
}

function atualizaAgenda() {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}

