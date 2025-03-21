import multiplicacao from './multiplicacao'

describe('Testes de multiplicacao', () => {
    test('deve verificar o resultado de uma multiplicacao', () => {
        expect(multiplicacao(6.1, 2.5)).toBeCloseTo(15.25)
        expect(multiplicacao(6, 8)).toBeCloseTo(48)
        expect(multiplicacao(60, 2)).toBeCloseTo(120)
    })
    test('deve verificar o resultado incorreto de uma multiplicacao', () => {
        expect(multiplicacao(6, 2)).not.toBeCloseTo(10)
    })
})