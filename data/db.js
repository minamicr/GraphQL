const usuarios = [{
    id: 1,
    nome: 'João Silva',
    email: 'jsilva@gmail.com',
    idade:29,
    perfil_id: 1,
    status: 'ATIVO'
}, {
    id: 2,
    nome: 'Rafael Angelo',
    email: 'rafa@zoom.com',
    idade: 17,
    perfil_id: 1,
    status: 'INATIVO'
}, {
    id: 3,
    nome: 'Daniela Pessoa',
    email: 'dani@uol.com.br',
    idade: 49,
    perfil_id: 2,
    status: 'BLOQUEADO'
}]

const perfis =[{
    id: 1,
    nome: 'Comum'
}, {
    id: 2,
    nome: 'Administrador'
}]

module.exports = { usuarios, perfis }