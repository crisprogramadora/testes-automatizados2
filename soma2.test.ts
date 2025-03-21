import soma from './soma2'

describe('Testes de soma', () => {
    test('deve verificar o resultado de uma soma', () => {
        expect(soma(6.2, 2.5)).toBeCloseTo(8.7)
    })
    test('deve verificar o resultado incorreto de uma soma', () => {
        expect(soma(3, 8)).not.toBeCloseTo(12)
    })
})

describe('Testes de soma', () => {
    test('deve verificar o resultado de uma soma', () => {
        expect(soma(3, 8)).toBe(11)
    })
    test('deve verificar o resultado incorreto de uma soma', () => {
        expect(soma(3, 8)).not.toBe(20)
    })
})