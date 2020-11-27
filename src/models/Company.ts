import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    logo: {type: String, required: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    description: {type: String, required: true},  
    whatWeOffer: {type: String, required: true},
})

export default mongoose.model('Company', Schema)