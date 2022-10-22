const frete = require('correios-brasil')

class CorreiosFreteService{
    async calcFrete(cepUser){
        const cepExists = await frete.consultarCep(cepUser).catch(err => {
            return "CEP INVÁLIDO"
         })
     
         if(typeof cepExists == "string"){
             return {"message": cepExists}
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
             const response = await frete.calcularPrecoPrazo(args).then(response => {
                 return {"valor": response[0].Valor, "prazo": response[0].PrazoEntrega}
             })

             return response
             }
    }

    async searchFrete(cepUser){

        const response = await frete.consultarCep(cepUser).then(response => {
            if(response.data.erro){
                return {'message': 'CEP INVÁLIDO'}
            }

            const data = {
                cep: response.data.cep, 
                rua: response.data.logradouro, 
                bairro: response.data.bairro, 
                cidade: response.data.localidade,
                estado: response.data.uf
                }

                return {"address": data }
        }).catch(err => {
            // console.log(err)
            return {'message': 'CEP INVÁLIDO'}
        })
        return response
    }
}

module.exports = CorreiosFreteService