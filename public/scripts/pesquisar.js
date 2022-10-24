const nextPage = document.querySelector('.nextPage')

const page = new URLSearchParams(location.search).get('page')
const searchParam = new URLSearchParams(location.search).get('search')

console.log(searchParam)

if(!page){
    if(typeof searchParam == 'object' || searchParam == ''){
        nextPage.href = `/pesquisa/?search=&page=2`
    } else{
        nextPage.href = `/pesquisa/?search=${searchParam}&page=2`
    }
} else{
    if(typeof searchParam == 'object'){
        nextPage.href = `/pesquisa/?search=&page=${Number(page) + 1}`
    }
    nextPage.href =  `/pesquisa/?search=${searchParam}&page=${Number(page) + 1}`
}