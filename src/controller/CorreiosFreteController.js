const CorreiosFreteService = require('../service/CorreiosFreteService')

module.exports = {
    async handle(req, res){
        const cepUser = req.params.cepUser

        let [,url] = (req.url).split('/');

        const correiosFreteService = new CorreiosFreteService()

        if(url.toLowerCase() == 'searchcep'){
            const response = await correiosFreteService.searchFrete(cepUser)
            return res.json(response)
        }
        else if(url.toLowerCase() == 'calcfrete'){
            const response = await correiosFreteService.calcFrete(cepUser)
            return res.json(response)
        }
    }
}