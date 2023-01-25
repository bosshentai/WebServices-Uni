import {
  GraphQLInt,
  GraphQLEnumType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql'
// import { Cursor } from 'mongoose'
import { Curso } from './models/curso.js'

// Tipo Docente  ??? input type
const TypeDocente = new GraphQLObjectType({
  name: 'Docente',
  fields: () => ({
    codigo: { type: GraphQLID },
    sigla: { type: GraphQLString },
    nome: { type: GraphQLString },
    // apelido: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
})

// Tipo Curso
const TypeCurso = new GraphQLObjectType({
  name: 'Curso',
  fields: () => ({
    codigo: { type: GraphQLID },
    nome: { type: GraphQLString },
    grau: { type: TypeGrau },
    ano: { type: GraphQLInt },
  }),
})

const TypeDisciplina = new GraphQLObjectType({
  name: 'Disciplina',
  fields: () => ({
    sigla: { type: GraphQLString },
    nome: { type: GraphQLString },
    horas: { type: GraphQLInt },
    sinopse: { type: GraphQLString },
    docente: {
      type: TypeDocente,
      resolve(parent, args) {
        return Docente.findById(parent.docenteId)
      },
    },
  }),
})

const TypeGrau = new GraphQLEnumType({
  name: 'grau',
  values: {
    licenciatura: {
      value: 'Licenciatura',
    },
    mestrado: {
      value: 'Mestrado',
    },
    doutoramento: {
      value: 'Doutoramento',
    },
  },
})

// Query

// const

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    cursos: {
      type: new GraphQLList(TypeCurso),
     async resolve(parent, args) {
      const cursos = await Curso.find();
        // Curso.find()
        // return curso.find()
        return cursos
      },
    },
    curso: {
      type: TypeCurso,
      args: { codigo: { type: GraphQLID } },
      async resolve(parent, args) {
        // return await Curso.findById(args.codigo)
        return await Curso.findOne({codigo: args.codigo})
      },
    },
    docentes: {
      type: new GraphQLList(TypeDocente),
      resolve(parent, args) {
        Docente.find()
      },
    },
    docente: {
      type: TypeDocente,
      args: { codigo: { type: GraphQLID } },
      resolve(parent, args) {
        return Docente.findById(args.codigo)
      },
    },
  },
})

// mutation
const TypeMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCurso: {
      type: TypeCurso,
      args: {
        codigo: { type: new GraphQLNonNull(GraphQLID) },
        nome: { type: new GraphQLNonNull(GraphQLString) },
        grau: { type: new GraphQLNonNull(TypeGrau) },
        ano: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        // let newCurso = {
        //   codigo: args.input.codigo,
        //   nome: args.input.nome,
        //   grau: args.input.grau,
        //   ano: args.input.anos
        // }
        // cursos.push(newCurso)
        // return cursos

        const curso = new Curso({
          codigo: args.codigo,
          nome: args.nome,
          grau: args.grau,
          // grau: args.gra
          ano: args.ano,
        })
        return curso.save()
      },
    },

    updateCurso: {
      type: TypeCurso,
      args: {
        // id:{type: new GraphQLNonNull(GraphQLID)}
        codigo: { type: new GraphQLNonNull(GraphQLID) },
        nome: { type: GraphQLString },
        grau: { type: TypeGrau },
        ano: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Cursos.findByIdAndUpdate(
          args.codigo,
          {
            $set: {
              nome: args.nome,
              grau: args.grau,
              ano: args.ano,
            },
          },
          { new: true },
        )
      },
    },

    removeCurso: {
      type: TypeCurso,
      args: { codigo: { type: GraphQLID } },
      resolve(parent, args) {
        // _.remove(cursos,(b)=>{b.codigo === args.codigo})
        // return cursos
      },
    },
  },
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: TypeMutation,
})

// module.exports = {schema}
// grau

// Licenciatura
// Mestrado
// Doutoramento
