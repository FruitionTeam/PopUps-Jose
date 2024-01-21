import mongoose from 'mongoose'


const customerSchema = new mongoose.Schema(
  {
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    birthday: {
        type: Date,
        required: true,
        trim: true,
    },
    passsword: {
        type: String,
        required: true,
        trim: true,
    },
    creation: {
        type: Date,
        required: true,
        trim: true,
    },

  },
  { collection: 'customer_list' },
  { bufferTimeoutMS: 1000 }
)

const Customer = mongoose.model('Customer', customerSchema)

export default Customer
