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

import { Organization } from './models/organization.js'
import { Event } from './models/event.js'
import { Ticket } from './models/ticket.js'
import mongoose from 'mongoose'

const TypeOrganization = new GraphQLObjectType({
  name: 'Organization',
  fields: {
    // id: {type: GraphQLID},
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  },
})

const TypeEvent = new GraphQLObjectType({
  name: 'Event',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    location: { type: GraphQLString },
    startTime: { type: GraphQLString },
    endTime: { type: GraphQLString },
    organization: {
      type: TypeOrganization,
      resolve(parent, args) {
        return Organization.findById(parent.organizationId)
      },
    },
  },
})

const TypeTicket = new GraphQLObjectType({
  name: 'ticket',
  fields: {
    id: { type: GraphQLID },
  },
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    organizations: {
      type: new GraphQLList(TypeOrganization),
      async resolve(parent, args) {
        return await Organization.find()
      },
    },
    organization: {
      type: TypeOrganization,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return await Organization.findById(args.id)
      },
    },
    organizationEvents: {
      type: new GraphQLList(TypeEvent),
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        // return await Event.find({ organizationId:  args.id })
        return await Event.find({ organizationId: mongoose.Types.ObjectId(args.id) })
      },
    },

    events: {
      type: new GraphQLList(TypeEvent),
      async resolve() {
        return await Event.find()
      },
    },
    event: {
      type: TypeEvent,
      args: {
        id: { type: GraphQLID },
      },
      async resolve(parent, args) {
        return await Event.findById(args.id)
      },
    },
    tickets: {
      type: TypeTicket,
      async resolve() {
        return await Ticket.find()
      },
    },
    ticket: {
      type: TypeTicket,
      args: {
        id: { type: GraphQLID },
      },
      async resolve(parent, args) {
        return await Ticket.findById(args.id)
      },
    },
  },
})

const TypeMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createOrganization: {
      type: TypeOrganization,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        const newOrganization = new Organization({
          name: args.name,
          description: args.description,
          createAt: new Date(),
        })
        return newOrganization.save()
      },
    },

    createEvent: {
      type: TypeEvent,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: {
          type: new GraphQLNonNull(GraphQLString),
        },
        startDate: { type: GraphQLString },
        endDate: { type: GraphQLString },
        location: { type: GraphQLString },
        startTime: { type: GraphQLString },
        endTime: { type: GraphQLString },
        organizationId: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        const newEvent = new Event({
          name: args.name,
          description: args.description,
          startDate: args.startDate,
          endDate: args.endDate,
          location: args.location,
          startTime: args.startTime,
          endTime: args.endTime,
          organizationId: args.organizationId,
          createAt: new Date(),
          updateAt: new Date(),
        })

        return newEvent.save()
      },
    },

    updateEvent: {
      type: TypeEvent,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        date: { type: GraphQLString },
        location: { type: GraphQLString },
        startTime: { type: GraphQLString },
        endTime: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const update = await Event.findByIdAndUpdate(
          {
            id: args.id,
          },
          {
            name: args.name,
            date: args.date,
            location: args.location,
            startTime: args.startTime,
            endTime: args.endTime,
          },
          { new: true },
        )

        return update
      },
    },

    createTicket: {
      type: TypeTicket,
      resolve(parent, args) {
        const newTicket = new Ticket({
          createAt: new Date(),
        })
        return newTicket
      },
    },
  },
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: TypeMutation,
})
