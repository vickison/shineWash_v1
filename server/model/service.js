const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    car_type: {
        type: String,
        required: true
    },
    car_brand: {
        type: String,
        required: true
    },
    car_model: {
        type: String,
        required: true
    },
    car_color:{
        type: String,
        required: true
    },
    plan:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    },
    cash:{
        type: String,
        required: true
    },
    client: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const Service = mongoose.model('service', ServiceSchema)

module.exports = Service;