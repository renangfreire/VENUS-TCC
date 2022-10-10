

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
            alreadyExistsId = cookie.map((element) => {
                if(element.id == id){
                    
                }
            })
        }
       
        console.log(alreadyExistsId);
        

        if(alreadyExistsId){
            return console.log("poora")
        }

        cartCookie.push(newDate)

        return res.status(201).cookie('cart', JSON.stringify({products: cartCookie}) , {expires: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), httpOnly: true})
    }
}

module.exports = AddProductCartService