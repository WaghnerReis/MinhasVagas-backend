import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    name: {type: String, required: true},
    nivel: {type: String, required: true},
    contract: {type: String, required: true},
    activitiesAndResponsibilities: {type: String, required: true},
    requirements: {type: String, required: true},
    remuneration: {type: String, required: true},  
    company: {type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true},    
})

export default mongoose.model('JobOpening', Schema)