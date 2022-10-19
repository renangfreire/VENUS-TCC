const NewAddressService = require('../service/NewUserAddressService')
const AddressRepository = require('../repositories/AddressRepositories')

module.exports = {
    async handle(req, res){
        const { 
            cep,
            rua,
            bairro,
            cidade,
            estado,
            numeroAddress,
            complementoAddress,
            identificationAddress,
            destinatarioAddress } = req.body

        const userId = req.user_id

        const addressRepository = new AddressRepository()
        const newAddressService = new NewAddressService(addressRepository)

            try {
                const response = await newAddressService.execute({
                    cep,
                    rua,
                    bairro,
                    cidade,
                    estado,
                    numeroAddress,
                    complementoAddress,
                    identificationAddress,
                    destinatarioAddress,
                    userId})

                    if(response){
                        return res.status(201).redirect('/pagamento')
                    }

            } catch (error) {
                if(error){
                    return res.redirect(`/`)
                }
            }
        }
    }