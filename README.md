# Lista-de-contatos-node-js

Passo a passo para criaçao do projeto:

1. npm init para iniciar o node na pasta do projeto;
2. npm install express para instalar as dependências do express;
3. npm install helmet para instalar as dependências do helmet;
4. npm install -D @types/express @types/node tsx typescript para instalar os types e o typescript;
5. Criei o diretório scr, dentro dele o arquivo server.ts, onde configurarei o servidor;
6. Configurei o Typescript, usando o comando npx tsc --init;
7. Dentro do package.json, removi o script "teste", e adicionei um "dev": "node --import=tsx;--watch ./src/server.ts", para inicializar o servidor;
8. Mudei a configuracao do type, no arquivo package.json para module;
9. Importo o express e o helmet, e incializo o servidor no arquivo server.ts;
10. Importo o express e crio uma instacia do Router no meu arquivo index.ts para criar as rotas no servidor.
11. Criei a primeira rota POST para criar os contatos