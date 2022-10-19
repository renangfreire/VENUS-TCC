const AddressRepository = require('../repositories/AddressRepositories')
const prisma = require('../prisma')

class NewAddressService{
    async execute({
        cep,
        rua,
        bairro,
        cidade,
        estado,
        numeroAddress,
        complementoAddress,
        identificationAddress,
        destinatarioAddress,
        userId}){
        const addressRepository = new AddressRepository()

        if(!userId){
            throw new Error('Você precisa estar logado para adicionar um endereço')
        }

        if(!cep){
            throw new Error('Por favor insira um CEP')
        }
        if(!numeroAddress){
            throw new Error('Por favor insira o N° da residencia')
        }

        if(!destinatarioAddress){
            throw new Error('Por favor insira um destinatario')
        }
        if(!identificationAddress){
            throw new Error('Por favor insira a identificação da residencia')
        }
        
        const alreadyExistsAddressPadrao = await prisma.userAddresses.findMany({where: {userId, padrao: true}}) ? true : false

        if(alreadyExistsAddressPadrao){
            await prisma.userAddresses.updateMany({where: {userId}, data: {padrao: false}})
        }

        const response = await addressRepository.create({
        cep,
        rua,
        bairro,
        cidade,
        estado,
        identificacao: numeroAddress,
        complemento: complementoAddress,
        idenEndereco: identificationAddress,
        destinatario: destinatarioAddress,
        userId,
        padrao: true
        })

        delete response.id
        delete response.userId

        return response
    }
}

module.exports = NewAddressService;