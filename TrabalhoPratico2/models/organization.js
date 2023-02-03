import mongoose from 'mongoose'

const Schema = mongoose.Schema

const organizationSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createAt: { type: Date, required: true },
})

export const Organization = mongoose.model(
  'Organizations',
  organizationSchema,
)
