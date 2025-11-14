
var inputCep = document.getElementById('cep');
inputCep.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
});

function buscarCep(){
    var cep = document.getElementById('cep').value;
    var resultadoDiv = document.getElementById('resultado'); // Referência à div de resultado.


    resultadoDiv.innerHTML = ''; 

 
    cep = cep.replace(/\D/g, ''); 

    if (cep.length !== 8) {
        resultadoDiv.innerHTML = "<p class='error-message'>CEP inválido! Digite exatamente 8 números.</p>";
        return; 
    }

    var url = "https://viacep.com.br/ws/"+cep+"/json/"; 

    fetch(url) 
    .then(response => {
      
        if (!response.ok) {
            throw new Error('Erro de rede: ' + response.statusText);
        }
        return response.json(); 
    })
    .then(data => {                    
       if (data.erro){
         
           resultadoDiv.innerHTML = "<p class='error-message'>CEP não encontrado.</p>"; 
       }else{
     
            resultadoDiv.innerHTML = 
            "<b>Logradouro:</b>" + data.logradouro + "<br>" 
            +"<b>Bairro:</b>" + data.bairro + "<br>"
            +"<b>Cidade:</b>" + data.localidade + "<br>"
            +"<b>Estado:</b>" + data.uf+ "<br>";  
        }  
    })
    .catch(error => {
        resultadoDiv.innerHTML = "<p class='error-message'>Ocorreu um erro ao buscar o CEP. Tente novamente mais tarde.</p>";
        console.error("Erro na requisição:", error); // Exibe o erro.
    });

}
