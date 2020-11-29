import Company from '../../../models/Company'

export default {
    Query: {
        companies: () => Company.find(),
        company: (_, {id})=> Company.findById(id)
    },
    Mutation: {
        createCompany: (_, {data}) => Company.create(data),
        updateCompany: (_, {id, data}) => Company.findOneAndUpdate({ _id: id }, data, {new: true}),
        deleteCompany: async (_, {id}) => !!(await Company.findByIdAndDelete({ _id: id }))
    },
}