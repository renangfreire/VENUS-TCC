

class RemoveProductCartService{
    async execute({res, index, cookie}){
        // console.log(cookie)
        const cookieIndex = cookie
        if(cookie){
            cookieIndex.splice(index, 1)
            return res.status(201).cookie('cart', JSON.stringify({products: cookieIndex}) , {expires: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), httpOnly: true})
        }
    }
}


module.exports = RemoveProductCartService;