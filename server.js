const app = require('./src/api');

const PORT = 3000;

try {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
} catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
}