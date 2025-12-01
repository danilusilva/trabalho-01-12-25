const bankService = require('./bankService');

describe('BankService', () => {
    test('Deve transferir valor corretamente (Caminho Feliz)', () => {
        const result = bankService.transfer(1, 2, 500);
        expect(result.success).toBe(true);
        expect(result.newSenderBalance).toBe(500);
        expect(bankService.getBalance(2)).toBe(1000);
    });

    test('Não deve transferir se saldo for insuficiente', () => {
        expect(() => {
            bankService.transfer(1, 2, 2000);
        }).toThrow("Saldo insuficiente");
    });

    test('Não deve transferir valor negativo ou zero', () => {
        expect(() => {
            bankService.transfer(1, 2, -100);
        }).toThrow("Valor inválido");

        expect(() => {
            bankService.transfer(1, 2, 0);
        }).toThrow("Valor inválido");
    });

    test('Não deve transferir se usuário não existir', () => {
        expect(() => {
            bankService.transfer(99, 2, 100);
        }).toThrow("Usuário não encontrado");
    });
});
