import JobOpening from '../../../models/JobOpening'
import Company from '../../../models/Company'

export default {
    JobOpening: {
        company: (jobOpening) => Company.findById(jobOpening.company)
    }, 
    Query: {
        jobOpenings: ()=> JobOpening.find(),
        jobOpening: (_, {id})=> JobOpening.findById(id)
    },
    Mutation: {
        createJobOpening: (_, {data}) => JobOpening.create(data),
        updateJobOpening: (_, {id, data}) => JobOpening.findOneAndUpdate(id, data, {new: true}),
        deleteJobOpening: async (_, {id}) => !!(await JobOpening.findByIdAndDelete(id))
    },
}