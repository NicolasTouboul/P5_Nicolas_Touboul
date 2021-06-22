main()

async function main(){
    const articles = await getArticles()
    loopArticle(articles)
}

function getArticles(){
   return fetch("http://localhost:3000/api/cameras")
    .then(function(httpBodyResponse){
        return httpBodyResponse.json()
    })
.then(function(articles){
    return articles
})
.catch(function(error){
    alert(error)
})
}

function loopArticle(articles){

    articles.forEach((article) =>{
        displayArticles(article)
    })
}

function displayArticles(article){
    const templateElt = document.getElementById('articleTemplate')
    const cloneElt = document.importNode(templateElt.content, true)
    
    cloneElt.getElementById('articleImg').src = article.imageUrl
    cloneElt.getElementById('articleName').textContent = article.name
    cloneElt.getElementById('articlePrice').textContent = `${article.price / 100}.00 €`
    cloneElt.getElementById('articleDescription').textContent = article.description
    cloneElt.getElementById('articleLink').href = `/article.html?id=${article._id}`

  
  document.getElementById('articlesList').appendChild(cloneElt)
}