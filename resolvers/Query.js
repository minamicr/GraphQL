const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return 'Bom dia'
    },
    horaCerta() {
        return new Date()
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Ana da Web',
            email: 'ana@web.com',
            idade: 23,
            salario_real: 1323.42,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Notebook Dell',
            preco: 2340.49,
            desconto: 0.10,
            precoComDesconto: 0
        }
    },
    numerosMegaSena(){
        const crescente = (a, b) => a-b
        return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, {id}) {
        const sels = usuarios
            .filter(u => u.id === id)
        return sels ? sels[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, {id}) {
        const sel = perfis.filter(p => p.id === id)
        return sel ? sel[0] : null
    }

}