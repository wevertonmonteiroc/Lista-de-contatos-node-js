import express, { Router } from 'express'; // Importa o framework Express, usado para criar o servidor e gerenciar rotas HTTP
import helmet from 'helmet';// Importa o Helmet, um middleware que ajuda a proteger o servidor configurando cabeçalhos HTTP
import router from './routes/index.js';// Importa o roteador principal (onde ficam as rotas da aplicação)

// Cria uma instância do servidor Express
const server = express();

server.use(helmet());// Aplica o middleware Helmet para melhorar a segurança da aplicação
server.use(express.json());// Habilita o recebimento de dados no formato JSON no corpo das requisições
server.use(express.urlencoded({ extended: true}));// Habilita o recebimento de dados de formulários (form-data / x-www-form-urlencoded)

// Define o roteador principal da aplicação (todas as rotas começam com '/')
server.use('/', router);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
server.listen(3000, () => {
    console.log('Servidor rodando: http://localhost:3000/')
});