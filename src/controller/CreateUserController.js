const PrismaUserRepository = require('../repositories/UserRepositories')
const CreateUserService = require('../service/CreateUserService')

module.exports = {
    async handle(req, res){
        const { email, password, cpf, name, sexo, tel } = req.body
        
        const userRepository = new PrismaUserRepository()
        const createUserService = new CreateUserService(userRepository)

        await createUserService.execute({email, password, cpf, name, sexo, tel})
        
        res.status(201).json({'message': 'Created user successfully'})
    }
}