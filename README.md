# Lista-de-contatos-node-js

Passo a passo para criaçao do projeto:

1. npm init para iniciar o node na pasta do projeto;
2. npm install express para instalar as dependências do express;
3. npm install helmet para instalar as dependências do helmet;
4. npm install -D @types/express @types/node tsx typescript para instalar os types e o typescript
5. Criei o diretório scr, dentro dele o arquivo server.ts, onde configurarei o servidor.
6. Configurei o Typescript, usando o comando npx tsc --init
7. Dentro do package.json, removi o script "teste", e adicionei um "dev": "node --import=tsx --watch ./src/server.ts", para inicializar o servidor.