const produtoModel = require('../models/produtoModel');

class ProdutoController {

    static async criarProduto(dados) {
        const { nome, preco, estoque } = dados.body;
        if (!nome=="" || !preco=="" || !estoque=="") {
            throw new Error('Todos os campos devem ser preenchidos');
        }
        if (typeof nome !== 'string') {
            throw new Error('Nome inválido');
        }
        if (typeof preco !== 'number' || preco<=0) {
            throw new Error('Preço inválido');
        }
        if (typeof estoque !== 'number' || estoque<=0) {
            throw new Error('Preço inválido');
        }
        return await produtoModel.create({ nome, preco, estoque });
    }
    
    static async listarProdutos(){
        const produtos = await produtoModel.findAll();
        return produtos;
    }

    static async buscarProduto(dados){
        const {id} = dados.params;
        const produto = await produtoModel.findByPk({where:});
    }

}

module.exports = ProdutoController;