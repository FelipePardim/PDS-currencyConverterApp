<h1 align="center">
    Exercicio de Programação de dispositivos móveis.
</h1>

## Repositório do exercício de programação de dispositivos móveis.

<p align="center">
	<img src="https://img.shields.io/github/stars/FelipePardim/currencyConverterApp" />
    <img src="https://img.shields.io/github/forks/FelipePardim/currencyConverterApp" />
    <img src="https://img.shields.io/github/issues/FelipePardim/currencyConverterApp" />
    <img src="https://img.shields.io/github/license/FelipePardim/currencyConverterApp" />
    <br>
    <img src="https://img.shields.io/badge/React%20Native-blue?logo=react" />
    <img src="https://img.shields.io/badge/Expo-grey?logo=expo" />
</p>

---
 
## Indíce
- [Indíce](#Indíce).
- [Sobre](#Sobre).
- [Requisitos](#Requisitos).
- [Instalação](#Instalação).
- [Como usar](#como-usar).
    - [Iniciando o app ](#iniciando-mobile).
        - [Adicionar moedas ](#adicionar-moedas).
- [Tecnologias utilizadas](#tecnologias).
- [Licença](#licenca).
- [Autores](#autores).

---

## Sobre:
### Exercício de conversão de moedas.

---

## Requisitos

Para testar ou utilizar esse projeto, por favor instale esses itens:

- [Git](https://git-scm.com).
- [Node.js](https://nodejs.org/en/).
- [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/).
- [Expo](https://expo.io/).

Use seu editor de texto preferido ou IDE para estudar, ler ou modificar o projeto
Esses foram os editores utilizados.
- [VSCode](https://code.visualstudio.com/).
- [Nano](https://www.nano-editor.org/).

---

## Instalação
> ### Clone o repositório.
>>   ```bash
>>  # Clone o repositório
>>  $ git clone https://github.com/FelipePardim/currencyConverterApp
>>   ```
> ### Siga cada um dos passos abaixo para utilizar o projeto.

---

## Como usar
>
><h3 id="iniciando-mobile">
>    📱 Iniciando o app ( Android & IOS ).
></h3>
>
>>```bash
>># Acesse a pasta mobile
>>$ cd currencyConverterApp
>>
>># Duplique o arquivo .env.example
>># Renomeie a cópia para .env
>># Insira a sua chave da API Free Currency Converter no campo API_KEY no arquivo .env
>>
>>$ yarn install
>># Instale as dependências.
>>$ yarn install
>>#ou
>>$ npm install 
>>
>># Inicie o servidor do Expo.
>>$ expo start
>>
>> # Conecte seu smartphone Android ou iPhone no servidor do Expo, ou use seu emulador preferido.
>>```
>
><h3 id="adicionar-moedas">
>    💵 Adicionar mais moedas para conversão.
></h3>
>
>>```bash
>># Adicione o código e nome da moeda no arquivo Currencies.json
>># utilizando o padrão JSON.
>>$ nano src/Services/Currencies.json
>>
>># Para adicionar a bandeira do país que utiliza a moeda:
>># Adicione uma imagem png quadrada da bandeira do país na pasta assets com o nome do país
>>$ assets/newCountry.png
>># importe a imagem escolhida e adicione o nome do país no operador ternário em:
>>$ nano src/Components/MoneyPicker.js
>>
---

<h2 id="tecnologias">
    🛠 Tecnologias
</h2>

Essas foram as tecnologias e ferramentas utilizadas no desenvolvimento do projeto:

- [React Native](https://reactnative.dev/).
- [Expo](https://expo.io/).

---

<h2 id="licenca">
    📝 Licença 
</h2>

Esse projeto está sobre a licença [MIT](https://github.com/FelipePardim/currencyConverterApp/LICENSE.md).

---

<h2 id="autores">
    👨‍💻 Autor:
    <div>
        <a href="https://github.com/FelipePardim" margin="10px">
            <img src="https://img.shields.io/badge/GitHub-FelipePardim-6f42c1?logo=github"/>
        </a>
        <a alt="Felipe Pardim" href="https://www.linkedin.com/in/felipe-pardim">
            <img src="https://img.shields.io/badge/LinkedIn-Felipe%20Pardim-blue?logo=linkedin"/>
        </a>
    </div>
</h2>