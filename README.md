# Desafio Planetfone

## Sobre o projeto

Desafio Técnico para processo seletivo, este projeto consiste em 
estruturar uma aplicação web fullstack,
cujo objetivo foi consumir uma Api já existente e retornar seus dados já filtrados para o front end.

#### :link: [Desafio Repositório](https://github.com/hugoemannuel/Desafio-Processo-Seletivo-Planetfone)

## Tecnologias Utilizadas

#### :link: [Node.js](https://nodejs.org/en/)
#### :link: [Express](https://expressjs.com/pt-br/)
#### :link: [React](https://reactjs.org/docs/getting-started.html)
#### :link: [Axios](https://axios-http.com/docs/intro)
#### :link: [Material-UI](https://mui.com/pt/)

## Instalação

-Clone o repositório através da seguinte chave https: `https://github.com/hugoemannuel/Desafio-Processo-Seletivo-Planetfone.git`

-Para iniciar a aplicação no Back End, acesse o Back End e rode o comando `npm start` em seu terminal.
-Para iniciar a aplicação no Front End, acesse o Front End e rode o comando `npm start` em seu terminal.

## Como utilizar

O projeto começa com o cliente tendo que criar conta no `NG CASH`, onde deve passar  seu nome com no mínimo 4 caracteres e
Senha com no mínimo 8 caracteres.

![DemonstraçaoCriaçãoUser](/images/cadastrar.png)

Após isto o cliente deverá efetuar o login, onde deve passar o nome e senha assim será verificado se o cliente existe no banco de dados e gerado um token JWT para o cliente fazer operações de transferência.

![DemonstraçãoLogin](/images/logar.png)

Para fazer transferência é necessário clicar no botão `Nova transação`

![DemonstraçãoBtn](/images/novatransação.png)

logo após digite o nome da pessoa que ira receber e o valor a ser pago

![DemonstraçãoTranferir](/images/realizartransações.png)
