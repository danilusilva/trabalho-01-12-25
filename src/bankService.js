// Simulação de Banco de Dados em Memória
const users = [
    { id: 1, name: 'Alice', balance: 1000 },
    { id: 2, name: 'Bob', balance: 500 }
];

const bankService = {
    getBalance: (userId) => {
        try {
            const user = users.find(u => u.id === userId);
            return user ? user.balance : null;
        } catch (error) {
            throw error;
        }
    },

    transfer: (senderId, receiverId, amount) => {
        try {
            const sender = users.find(u => u.id === senderId);
            const receiver = users.find(u => u.id === receiverId);

            if (!sender || !receiver) {
                throw new Error("Usuário não encontrado");
            }

            if (amount <= 0) {
                throw new Error("Valor inválido");
            }

            if (sender.balance < amount) {
                throw new Error("Saldo insuficiente");
            }

            sender.balance -= amount;
            receiver.balance += amount;

            return {
                success: true,
                newSenderBalance: sender.balance,
                message: "Transferência realizada"
            };
        } catch (error) {
            throw error;
        }
    }
};

module.exports = bankService;