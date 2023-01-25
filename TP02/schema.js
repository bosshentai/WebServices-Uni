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
  docente: String
}

type Docente{
  id: ID
  nome: String
  apelido: String
  email:String
}

  enum Grau{
    Licenciatura
    Mestrado
    Doutoramento
  }


  type Query {
    getCurso(codigo: ID) : Curso
  }

  input CursoInput {
    codigo: ID
    nome: String!
    grau: Grau!
    ano: Int
    disciplinas: [DisciplinaInput]

  }

  input DisciplinaInput {
    sigla: String!
    nome: String!
    horas: Int
    sinopse: String
    docente: String!
  }

  type Mutation {
    criarCurso(input: CursoInput): Curso
  }


`)

export default schema