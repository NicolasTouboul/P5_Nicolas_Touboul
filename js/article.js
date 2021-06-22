;(async() =>{
    const articleId = getArticleId()
    const articleData = await getArticleData(articleId)
    displayPage(articleData)
})()

function getArticleId(){
    return new URL(window.location.href).searchParams.get('id)')
}

function getArticleData(articleId){
    return fetch(`http://localhost:3000/api/cameras/${articleId}`)
    .catch((error)=>{
        console.log(error)
    })
    .then((httpBodyResponse) => httpBodyResponse.json())
    .then((articleData) => articleData)
}

function displayPage(article) {

    document.getElementById('articleImage').src = article.imageUrl
    document.getElementById('articleName').textContent=article.name
    document.getElementById('articlePrice').textContent =`${article.price/100}.00€`
    document.getElementById('articleDescription').textContent=article.description
    
    document.getElementById('article').appendChild(article)
    }
    


function redirectToCart(articleName) {
    window.location.href = `${window.location.origin}/cart.html?lastAddedArticleName=${articleName}`
}