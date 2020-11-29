import JobOpening from '../../../models/JobOpening'
import Company from '../../../models/Company'
import { JOB_OPENING_CREATED, JOB_OPENING_DELETED, JOB_OPENING_UPDATED } from './channels'

export default {
    JobOpening: {
        company: (jobOpening) => Company.findById(jobOpening.company)
    }, 
    Query: {
        jobOpenings: ()=> JobOpening.find(),
        jobOpening: (_, {id})=> JobOpening.findById(id)
    },
    Mutation: {
        createJobOpening: async (_, {data}, {pubSub}) => {
            const jobOpening = await JobOpening.create(data)
        
            pubSub.publish(JOB_OPENING_CREATED, {
                jobOpeningCreated: jobOpening
            })

            return jobOpening
        },
        updateJobOpening: async (_, {id, data}, {pubSub}) => {
            const jobOpening = await JobOpening.findOneAndUpdate({ _id: id }, data, {new: true})

            pubSub.publish(JOB_OPENING_UPDATED, {
                jobOpeningUpdated: jobOpening
            })

            return jobOpening
        },
        deleteJobOpening: async (_, {id}, {pubSub}) => {
            const deleted = !!(await JobOpening.findByIdAndDelete({ _id: id }))

            pubSub.publish(JOB_OPENING_DELETED, {
                jobOpeningDeleted: id
            })

            return deleted
        }
    },
    Subscription: {
        jobOpeningCreated: {
            subscribe: (_, data, {pubSub}) => pubSub.asyncIterator(JOB_OPENING_CREATED)
        },
        jobOpeningUpdated: {
            subscribe: (_, data, {pubSub}) => pubSub.asyncIterator(JOB_OPENING_UPDATED)
        },
        jobOpeningDeleted: {
            subscribe: (_, data, {pubSub}) => pubSub.asyncIterator(JOB_OPENING_DELETED)
        }
    }
}