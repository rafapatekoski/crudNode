// Importar o módulo Express
const express = require('express');

// Criar uma instância do aplicativo Express
const app = express();

// Configurar uma rota básica
app.get('/', (req, res) => {
    res.send('Olá, Mundo!');
});

// Definir a porta em que o servidor irá escutar
const port = 3000;

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor Express rodando em http://localhost:${port}`);
});
