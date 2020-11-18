# Mini Navegador para Desenvolvimento(Mayk Brito)
## **Atenção esse troço não é meu**
#### Quero dizer é de total propriedade do 
#### Mayk Brito que decidiu compartilhar
#### esse incrivel Mini_Web_View pelo Youtube
#### no canal da RocketSeat

## **Como Rodar ??**

#### Primeiro instale o **NodeJS** em https://nodejs.org/pt-br/
#### - Depois instale o **Electron**
```
    npm install electron
```
#### - Inicie a aplicação
```
    npm start
```
## Alterando **site** visto na aplicação

#### Vá para o arquivo config.js
#### E altere a Url do module.exports assim:
```js
    module.exports = {
        width: "Largura da aplicação",
        height: "Altura da aplicação",
        url: "Site que deve ser visto na aplicação"
    }
```

## **Obs**: O app não é sobreposto por nenhum outro app incluse o Visual Studio Code