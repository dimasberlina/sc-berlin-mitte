import { Schema, model } from "mongoose"

const schema = new Schema({
  name: { type: String }
  // { timestamps: true, strict: true, strictQuery: true }
})

export const Appointment = model('Appointment', schema)

export default defineEventHandler(async (event) => {
  console.log('GET /api/appointments')
  try {
    const appointments = await Appointment.find()
    return {
      appointments
    }
  } catch (err) {
    console.error(err)
    return {
      code: "ERROR",
      message: "Something went wrong."
    }
  }
})