const produtoModel = require('../models/produtoModel');
const produtoController = require('../controllers/produtoController');
const {sequelize} = require('../../../config/configDB');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
})

describe('Testes do Produto Controller', () => {
     
    test('Deve criar um produto no banco de Dados', async () => {
    const produto = await produtoController.criar({nome: 'Feijao', preco: 4.90, estoque:500});
    // Analisamos a const produto para verificar os dad
    expect(produto).toHaveProperty('cod_prod');
    expect(produto.nome).toBe('Feijao');
    expect(produto.preco).toBe(4.90);
})

});


