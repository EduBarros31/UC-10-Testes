const notaAluno = require('../modules/nota'); // Importa o módulo que contém a função notaAluno

describe('teste a nota do aluno', () => {
    test('verfifica a nota do aluno e menor ou igual a 10', ()=> {
        expect(notaAluno(10, 0).toBe(7))
    } )
    test('verifica a nota do aluno e ')