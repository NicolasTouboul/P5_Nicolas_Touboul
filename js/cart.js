;(() => {
    console.log('Javascript is loaded')
    const articlesInCart = Cart.articlesInCart
    if (articlesInCart === null) return
    displayPage(articlesInCart)
})()

function displayPage(articlesInCart) {

    document.getElementById('totalPrice').textContent = Cart.getTotalPrice() + '.00€'

    const articleList = Object.values(articlesInCart)
    articleList.forEach((article) => {
        displayArticle(article)
    })

    addEventListener()

}

function displayArticle(article) {

    const templateElt = document.getElementById('articleTemplate')
    const cloneElt = document.importNode(templateElt.content, true)

    cloneElt.getElementById('articleName').textContent = article.name
    cloneElt.getElementById('articleQuantity').selectedIndex = article.quantity - 1
    cloneElt.getElementById('articlePrice').textContent = article.price / 100 + '.00€'
    cloneElt.getElementById('articleTotalPrice').textContent =
    (article.price * article.quantity) / 100 + '.00€'

    cloneElt.getElementById('articleQuantity').onchange = (e) => {
        e.preventDefault()

        Cart.updateArticleQuantity(article._id, e.target.selectedIndex + 1)
    }
}