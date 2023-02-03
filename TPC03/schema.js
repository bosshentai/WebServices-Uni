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
import { Docente } from './models/docente.js'
import { Disciplina } from './models/disciplina.js'
import { CursoDisciplina } from './models/cursoDisciplina.js'

// Tipo Docente  ??? input type
const TypeDocente = new GraphQLObjectType({
  name: 'Docente',
  fields: () => ({
    id: { type: GraphQLID },
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
    // id: {type: GraphQLID},
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

const TypeCursoDisciplina = new GraphQLObjectType({
  name: 'CursoDisciplina',
  fields: () => ({
    curso: {
      type: TypeCurso,
      async resolve(parent, args) {
        return await Curso.findById(parent.cursoId)
      },
    },
    disciplina: {
      type: TypeDisciplina,
      async resolve(parent, args) {
        return await Disciplina.findById(
          parent.disciplinaId
        )
      },
    },
  }),

  // curso:{type: TypeCurso },
  // resolve(parent,args){
  //   return
  // }
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
        const cursos = await Curso.find()

        return cursos
      },
    },
    curso: {
      type: TypeCurso,
      args: { codigo: { type: GraphQLID } },
      async resolve(parent, args) {
        // return await Curso.findById(args.codigo)
        return await Curso.findOne({ codigo: args.codigo })
      },
    },
    docentes: {
      type: new GraphQLList(TypeDocente),
      resolve(parent, args) {
        return Docente.find()
      },
    },
    docente: {
      type: TypeDocente,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Docente.findById(args.id)
      },
    },

    disciplina: {
      type: TypeDisciplina,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return await Disciplina.findById(args.id )
      },
    },

    disciplinas: {
      type: new GraphQLList(TypeDisciplina),
      async resolve(parent, args) {
        return await Disciplina.find()
      },
    },
    // disciplinasById:{
    //   type: new GraphQLList(TypeDisciplina),
    //   args: {},

    // }
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
        const curso = new Curso({
          codigo: args.codigo,
          nome: args.nome,
          grau: args.grau,
          ano: args.ano,
          createAt: new Date(),
          updateAt: new Date(),
        })
        return curso.save()
      },
    },

    updateCurso: {
      type: TypeCurso,
      args: {
        codigo: { type: new GraphQLNonNull(GraphQLID) },
        nome: { type: GraphQLString },
        grau: { type: TypeGrau },
        ano: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        const updateCurso = await Curso.findOneAndUpdate(
          { codigo: args.codigo },
          {
            nome: args.nome,
            grau: args.grau,
            ano: args.ano,
            updateAt: new Date(),
          },
          { new: true },
        )
        return updateCurso
      },
    },

    removeCurso: {
      type: TypeCurso,
      args: { codigo: { type: GraphQLID } },
      async resolve(parent, args) {
        const curso = await Curso.findOneAndDelete({
          codigo: args.codigo,
        })
        return curso
      },
    },

    addDocente: {
      type: TypeDocente,
      args: {
        sigla: { type: new GraphQLNonNull(GraphQLString) },
        nome: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const docente = new Docente({
          sigla: args.sigla,
          nome: args.nome,
          email: args.email,
          createAt: new Date(),
          updateAt: new Date(),
        })
        return docente.save()
      },
    },

    updateDocente: {
      type: TypeDocente,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        sigla: { type: GraphQLString },
        nome: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const update = await Docente.findByIdAndUpdate(
          { id: args.id },
          {
            sigla: args.sigla,
            nome: args.nome,
            ano: args.email,
            updateAt: new Date(),
          },
          { new: true },
        )

        return updateDocente
      },
    },

    removeDocente: {
      type: TypeDocente,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        const deleteDocente =
          await Docente.findByIdAndDelete({
            id: args.id,
          })
        return deleteDocente
      },
    },

    addDisciplina: {
      type: TypeDisciplina,
      args: {
        sigla: { type: new GraphQLNonNull(GraphQLString) },
        nome: { type: new GraphQLNonNull(GraphQLString) },
        horas: { type: new GraphQLNonNull(GraphQLInt) },
        sinopse: {
          type: new GraphQLNonNull(GraphQLString),
        },
        docenteId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const newDisciplina = new Disciplina({
          sigla: args.sigla,
          nome: args.nome,
          horas: args.horas,
          sinopse: args.sinopse,
          docenteId: args.docenteId,
          createAt: new Date(),
          updateAt: new Date(),
        })

        return newDisciplina.save()
      },
    },
    addCursoDisciplina: {
      type: TypeCursoDisciplina,
      args: {
        cursoId: { type: new GraphQLNonNull(GraphQLID) },
        disciplinaId: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
       resolve(parent, args) {
        const newCursoDisciplina = new CursoDisciplina({
          cursoId: args.cursoId,
          disciplinaId: args.disciplinaId,
          createAt: new Date(),
        })
        return newCursoDisciplina.save()
      },
    },
  },
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: TypeMutation,
})
