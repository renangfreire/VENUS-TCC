const frete = require('correios-brasil')

module.exports = {
    async calcFrete(req, res){
        const cepUser = req.params.cepUser
    
            const cepExists = await frete.consultarCep(cepUser).catch(err => {
               return "CEP INVÁLIDO"
            })
        
            if(typeof cepExists == "string"){
                return res.json({"message": cepExists})
            }
    
           if(typeof cepExists != "string"){
                const args = {
                // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
                sCepOrigem: '06422140',
                sCepDestino: cepUser,
                nVlPeso: '1',
                nCdFormato: '1',
                nVlComprimento: '20',
                nVlAltura: '20', 
                nVlLargura: '20',
                nCdServico: ['04014'], //Array com os códigos de serviço
                nVlDiametro: '0',
            }
                await frete.calcularPrecoPrazo(args).then(response => {
                    return res.json({"valor": response[0].Valor, "prazo": response[0].PrazoEntrega})
                })
                }
        
    },
    async searchCep(req, res){
        const cepUser = req.params.cepUser

        await frete.consultarCep(cepUser).then(response => {
            if(response.data.erro){
                return res.json({'message': 'CEP INVÁLIDO'})
            }

            const data = {
                cep: response.data.cep, 
                rua: response.data.logradouro, 
                bairro: response.data.bairro, 
                cidade: response.data.localidade,
                estado: response.data.uf
                }


            return res.json({"address": data })
        }).catch(err => {
            // console.log(err)
            return res.json({'message': 'CEP INVÁLIDO'})
        })
    }
}
