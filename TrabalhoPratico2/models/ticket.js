import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  eventId: { type: String, required: true },
  createAt: { type: Date, required: true },
})

export const Ticket = mongoose.model(
  'Tickets',
  ticketSchema,
)
