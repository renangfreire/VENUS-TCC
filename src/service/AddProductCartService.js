

class AddProductCartService{
    async execute({res, id, color, size, cookie}){
        const newDate = {
            id,
            color,
            size,
        }

        const cartCookie = cookie || []
        let alreadyExistsId

        if(cookie){
            cookie.map((element) => {
                if(element.id == id){
                    if(element.color == color && element.size == size){
                        return alreadyExistsId = true
                    }
                }
            })
        }

        if(alreadyExistsId){
            console.log("teste")
            return
        }

        cartCookie.push(newDate)

        return res.status(201).cookie('cart', JSON.stringify({products: cartCookie}) , {expires: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), httpOnly: true})
    }
}

module.exports = AddProductCartService