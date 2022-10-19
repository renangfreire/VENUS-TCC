const AddressRepository = require('../repositories/AddressRepositories')

class NewAddressService{
    async execute({cep, rua, identificacao, cidade, estado, complemento, userId}){
        const addressRepository = new AddressRepository()

        if(!cep){
            throw new Error('Por favor insira um CEP')
        }
        if(!rua){
            throw new Error('Por favor insira uma rua')
        }
        if(!identificacao){
            throw new Error('Por favor insira uma Identificação')
        }
        if(!cidade){
            throw new Error('Por favor insira uma Cidade')
        }
        if(!estado){
            throw new Error('Por favor insira uma Estado')
        }
        
        await addressRepository.create({cep, rua, identificacao, cidade, estado, complemento, userId})

        return
        
    }
}

module.exports = NewAddressService;