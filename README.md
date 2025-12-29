

<div align="center">

#  ViaCep - Consulta de CEP em Tempo Real

![Status](https://img.shields.io/badge/Status-Completo-success?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)
![API](https://img.shields.io/badge/API-ViaCEP-yellow?style=for-the-badge)

<img src="https://img.icons8.com/?size=100&id=Nkym0Ujb8VGI&format=png&color=000000" alt="ViaCep Logo" width="120"/>

**Sistema inteligente de busca de endereços através do CEP, integrado à API ViaCEP**

</div>

---

## Sobre

**ViaCep** é uma aplicação web desenvolvida para facilitar a busca de informações de endereço através do CEP (Código de Endereçamento Postal). Com uma interface intuitiva e responsiva, o sistema valida automaticamente a entrada do usuário, consulta a API ViaCEP e retorna dados completos do endereço em tempo real.

### Objetivo

Proporcionar uma ferramenta rápida e eficiente para consulta de CEPs, eliminando a necessidade de preencher manualmente campos de endereço em formulários, economizando tempo e reduzindo erros de digitação.

---

## Tecnologias Utilizadas

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![API](https://img.shields.io/badge/API-ViaCEP-FFA500?style=for-the-badge&logo=api&logoColor=white)

</div>

### Recursos Técnicos

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design moderno e responsivo
- **JavaScript ES6+**: Lógica de validação e consumo de API
- **Fetch API**: Requisições assíncronas para ViaCEP
- **Regex**: Validação de entrada numérica
- **API REST**: Integração com ViaCEP (viacep.com.br)

---

##  Funcionalidades

###  Validação Inteligente de Entrada
-  Aceita **apenas números** no campo de CEP
-  Validação de **8 dígitos** obrigatórios
-  Previne entrada de caracteres especiais e letras
-  Validação em tempo real

### Busca de CEP
-  **Requisição à API ViaCEP** em tempo real
-  Conexão assíncrona usando **Fetch API**
-  Resposta rápida e eficiente
-  Tratamento de erros de rede

### Exibição de Resultados

Quando o CEP é encontrado, o sistema exibe:

| Campo | Descrição |
|-------|-----------|
| **Logradouro** | Nome da rua/avenida |
| **Bairro** | Nome do bairro |
| **Cidade** | Município |
| **Estado** | Unidade Federativa (UF) |

### Tratamento de Erros

O sistema identifica e trata três tipos principais de erros:

1. **CEP Inválido** - Quando não possui 8 dígitos
2. **CEP Não Encontrado** - Quando não existe na base de dados
3. **Erro de Rede** - Problemas de conexão com a API

---

##  Demonstração

### Interface Principal

<div align="center">

<img src="https://i.postimg.cc/x1YBVSYv/interface-do-site.jpg" alt="Interface do Site" width="400"/>

*Interface limpa e intuitiva para busca de CEP*

</div>

A interface conta com:
- Campo de entrada otimizado para CEP
- Botão de busca destacado
- Design minimalista e profissional
- Layout responsivo

---

### Busca Bem-Sucedida

<div align="center">

<img src="https://i.postimg.cc/fypX75b5/funcionando.jpg" alt="Busca Funcionando" width="500"/>

*Exemplo de busca bem-sucedida com dados completos do endereço*

</div>

**Fluxo de Sucesso:**
1.  Usuário digita o CEP (8 dígitos)
2.  Clica no botão de busca
3.  Sistema faz requisição à API
4.  Dados do endereço são exibidos na tela

---

## Possíveis Erros e Validações

### Erro 1: CEP Não Encontrado

<div align="center">

<img src="https://i.postimg.cc/vHb7pDyX/cep-n-o-encontrado.jpg" alt="CEP não encontrado" width="400"/>

*Mensagem exibida quando o CEP não existe na base de dados*

</div>

**Causa:** CEP digitado não está cadastrado na base de dados dos Correios.

**Solução:** Verifique se o CEP está correto ou tente um CEP próximo.

---

### Erro 2: CEP Inválido (Formato)

<div align="center">

<img src="https://i.postimg.cc/KYw2pRK8/cep-inv-lido-digite-8-digitos.jpg" alt="CEP inválido" width="400"/>

*Validação quando o CEP não possui 8 dígitos*

</div>

**Causa:** CEP digitado possui menos ou mais de 8 dígitos.

**Solução:** Digite exatamente 8 números. Exemplo: `01310100`

---

##  Como Funciona

### Fluxograma de Funcionamento

```mermaid
graph TD
    A[Usuário digita CEP] --> B{Validação}
    B -->|8 dígitos OK| C[Faz requisição à API]
    B -->|Inválido| D[Exibe: Digite 8 dígitos]
    C --> E{CEP existe?}
    E -->|Sim| F[Exibe dados do endereço]
    E -->|Não| G[Exibe: CEP não encontrado]
    C -->|Erro de rede| H[Exibe: Erro de conexão]
```


## Casos de Uso

### E-commerce
Preenchimento automático de endereço em checkout

### Formulários
Cadastro de clientes com validação de endereço

###  Logística
Validação de endereços para entregas

### Sistemas Corporativos
Cadastro de filiais e fornecedores

---

##  Diferenciais

-  **Interface Intuitiva**: Design simples e fácil de usar
- **Rápido**: Busca em tempo real
- **Validação Robusta**: Múltiplas camadas de validação
-  **Responsivo**: Funciona em qualquer dispositivo
-  **Seguro**: Validação client-side antes de requisições
-  **Gratuito**: Usa API pública do ViaCEP

---

##  API Utilizada

### ViaCEP

**Endpoint:** `https://viacep.com.br/ws/{CEP}/json/`

**Exemplo de Resposta:**

 [Documentação Oficial da ViaCEP](https://viacep.com.br/)

---

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

##  Contato

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nicolas-oliveira-8b12a02b5/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nicoladeveloper)
[![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ffnicolaf13@gmail.com)

</div>

---

##  Aprendizados

Este projeto foi fundamental para desenvolver:

- **Consumo de APIs REST** com JavaScript
-  **Programação Assíncrona** com async/await
-  **Validação de dados** com Regex
-  **Design responsivo** com CSS3
-  **Tratamento de erros** em requisições HTTP
-  **UX/UI Design** focado no usuário

---

<div align="center">

### ⭐ Se este projeto foi útil, considere dar uma estrela!

**Desenvolvido com 💙 por Nicolas Oliveira**

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=nicoladeveloper.viacep)

</div>
