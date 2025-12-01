const request = require('supertest');
const app = require('./api');

describe('API Integration Tests', () => {
    test('POST /transfer - Deve realizar transferência com sucesso (200)', async () => {
        const response = await request(app)
            .post('/transfer')
            .send({
                senderId: 1,
                receiverId: 2,
                amount: 100
            });

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("Transferência realizada");
    });

    test('POST /transfer - Deve retornar erro 400 se faltar campo', async () => {
        const response = await request(app)
            .post('/transfer')
            .send({
                senderId: 1,
                amount: 100
            });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe("Dados incompletos");
    });

    test('POST /transfer - Deve retornar erro genérico se usuário não existir', async () => {
        const response = await request(app)
            .post('/transfer')
            .send({
                senderId: 99,
                receiverId: 2,
                amount: 100
            });

        expect(response.status).toBe(500);
        expect(response.body.error).toBe("Usuário não encontrado");
    });
});
