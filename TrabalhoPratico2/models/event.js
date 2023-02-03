import mongoose from 'mongoose'

const Schema = mongoose.Schema

const eventSchema = new Schema({
  organizationId: {
    type: Schema.Types.ObjectId,
    ref: 'Organizations',
  },
  name: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: String },
  endDate: { type: String },
  location: { type: String },
  startTime: { type: String },
  endTime: { type: String },
  createAt: { type: String, required: true },
  updateAt: { type: String, required: true },
})

export const Event = mongoose.model('Events', eventSchema)
