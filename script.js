// Bloqueia caracteres não numéricos na digitação do CEP
var inputCep = document.getElementById('cep');
inputCep.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
});

function buscarCep(){ // function button
    var cep = document.getElementById('cep').value;
    var resultadoDiv = document.getElementById('resultado'); // Referência à div de resultado.

    // Limpa a área de resultado antes de uma nova busca.
    resultadoDiv.innerHTML = ''; 

    // Limpa o CEP de caracteres não numéricos.
    cep = cep.replace(/\D/g, ''); 

    // Validação do formato do CEP (8 dígitos)
    if (cep.length !== 8) {
        resultadoDiv.innerHTML = "<p class='error-message'>CEP inválido! Digite exatamente 8 números.</p>";
        return; // Interrompe a função se o CEP não for válido.
    }

    var url = "https://viacep.com.br/ws/"+cep+"/json/"; //para endereço do site.

    fetch(url) // fazer buscar url.
    .then(response => {
        // Verifica se a resposta da rede foi OK.
        if (!response.ok) {
            throw new Error('Erro de rede: ' + response.statusText);
        }
        return response.json(); // esperando arquivo json.
    })
    .then(data => {                    // caso responda tudo ok, msg na tela.
       if (data.erro){
           // -Usa innerHTML e a classe 'error-message' para a mensagem de CEP não encontrado.
           resultadoDiv.innerHTML = "<p class='error-message'>CEP não encontrado.</p>"; 
       }else{
           // Usa a variável resultadoDiv.
            resultadoDiv.innerHTML = //dados viacep // caso url for encontrado, mostrará essas informações
            "<b>Logradouro:</b>" + data.logradouro + "<br>"  //Logradouro rua
            +"<b>Bairro:</b>" + data.bairro + "<br>"
            +"<b>Cidade:</b>" + data.localidade + "<br>"
            +"<b>Estado:</b>" + data.uf+ "<br>";  // estado = uf
        }  
    })
    .catch(error => {
        resultadoDiv.innerHTML = "<p class='error-message'>Ocorreu um erro ao buscar o CEP. Tente novamente mais tarde.</p>";
        console.error("Erro na requisição:", error); // Exibe o erro.
    });
}