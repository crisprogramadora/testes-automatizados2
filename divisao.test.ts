import divisao from './divisao'

describe('Testes de divisao', () => {
    test('deve verificar o resultado de uma divisao', () => {
        expect(divisao(6.1, 2.5)).toBeCloseTo(2.44)
        expect(divisao(6, 8)).toBeCloseTo(0.75)
        expect(divisao(60, 2)).toBeCloseTo(30)
    })
    test('deve verificar o resultado incorreto de uma divisao', () => {
        expect(divisao(6, 2)).not.toBeCloseTo(10)
    })
})