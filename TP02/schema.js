import { buildSchema } from 'graphql'

const schema = buildSchema(`
type Curso {
    codigo: ID
    nome: String
    grau: Grau
    ano: Int
    disciplinas: [Disciplina]
}

type Disciplina{
  sigla: String
  nome: String
  horas: Int
  sinopse: String
  docente: Docente
}

type Docente{
  id: ID
  nome: String
  apelido: String
  email:String
}

  enum Grau{
    licenciatura
    Mestrado
    Doutoramento
  }


  type Query {
    getCurso(codigo: ID) : Curso

  }



`)
