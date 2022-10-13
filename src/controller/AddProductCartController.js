module.exports = {
    async handle(req, res){
        const { id ,color, size } = req.body


        console.log(color, size, id)

        res.json({"message": "sucessfully"})
    }
}