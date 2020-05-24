const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback(); //limpa primeiro o banco de dados
        await connection.migrate.latest(); //realiza as migrations no database de cada test.
    });

    afterAll(async () => {
        await connection.destroy(); //finaliza a conexão com o banco de dados.
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD2",
            email: "contato@APAD.com.br",
            whatsapp: "22000000000",
            city: "Rio de Janeiro",
            uf: "RJ"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});