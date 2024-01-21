import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        menu: {
            type: Array,
            required: true,
            trim: true,
        },
        creation: {
            type: Date,
            required: true,
            trim: true,
        },
    
    },
    { collection: 'restaurant_list' },
    { bufferTimeoutMS: 1000 }
    )

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export default Restaurant;