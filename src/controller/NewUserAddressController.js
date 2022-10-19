const NewAddressService = require('../service/NewUserAddressService')
const AddressRepository = require('../repositories/AddressRepositories')

module.exports = {
    async handle(req, res){
        const {cep, rua, identificacao, cidade, estado, complemento } = req.body
        const userId = "d19aaa61-6ff7-4bfc-af7e-6e729b4393dd"

        const addressRepository = new AddressRepository()
        const newAddressService = new NewAddressService(addressRepository)

       try {
        newAddressService.execute({cep, rua, identificacao, cidade, estado, complemento, userId})
       } catch (error) {
            console.log(error.message)
       }
       return res.status(201).json({'message': "successfully"})
    }
}  