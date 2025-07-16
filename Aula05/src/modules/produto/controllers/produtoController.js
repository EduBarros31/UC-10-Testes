const ProdutoModel = require('../models/produtoModel');

class produtoController {
   
    static async criar(req,res) {
        const {nome, preco, estoque} = req.body;
        const produto = ProdutoModel.create({nome, preco, estoque})
    }









}


module.exports = produtoController