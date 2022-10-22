const PrismaUserRepository = require('../repositories/UserRepositories')
const CreateUserService = require('../service/CreateUserService')

module.exports = {
    async handle(req, res){
        const { email, password, cpf, name, sexo, tel } = req.body
    
        const cpfNumeric = cpf.replace(/[^0-9]+/g, '');

        const userRepository = new PrismaUserRepository()
        const createUserService = new CreateUserService(userRepository)

        try{
            await createUserService.execute({email, password, cpf: cpfNumeric, name, sexo, tel})
        }catch(err){
            if(err){
                return res.render("index", {page: "cadastro", styles: ["login", "modalError"], libs: ["modalError", "cadastro"], username: req.user_name, err: err.message});
            }
        }
        
        res.redirect('/')
    }
}