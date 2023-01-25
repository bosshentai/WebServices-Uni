// import { resolveReadonlyArrayThunk } from 'graphql'
import { nanoid } from 'nanoid'


class Curso {
  constructor(codigo,{nome, grau,ano,disciplinas}){
    this.codigo = codigo
    this.nome = nome
    this.grau = grau
    this.ano = ano
    this.disciplinas = disciplinas
  }
}



let dadosCurso = {}

const resolvers = {
  getCurso: ({ codigo }) => {
    return new Curso(codigo, dadosCurso[codigo])
  },

  criarCurso: ({ input }) => {
    let codigo = nanoid()
    dadosCurso[codigo] = input
    return new Curso(codigo, input)
  },
}

export default resolvers
