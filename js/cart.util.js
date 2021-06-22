class CartObject {
    get articles() {
      return JSON.parse(localStorage.getItem('shoppingCart') || '{}')
    }
  
    set articles(articles) {
      localStorage.setItem('shoppingCart', JSON.stringify(articles))
    }
  
    addarticle(articleObject) {
      let articles = this.articles
  
      const articleAlreadyInCarte = !!articles[articleObject._id]
  
      if (articleAlreadyInCarte) {
        // Increase quantity
        articles[articleObject._id].quantity++
      } else {
        // Add article
        articles[articleObject._id] = {
          quantity: 1,
          ...articleObject,
        }
      }
  
      this.articles = articles
    }
  
    getarticleQuantity(articleId) {
      const articles = this.articles
      return articles[articleId].quantity
    }
  
    updatearticleQuantity(articleId, quantity) {
      const articles = this.articles
      articles[articleId].quantity = quantity
      console.log(articles)
      this.articles = articles
    }
  
    getTotalPrice() {
      const articles = this.articles
      const totalPrice = Object.values(articles).reduce((acc, curr) => {
        return acc + (curr.price * curr.quantity) / 100
      }, 0)
      return totalPrice
    }
  }
  
  const Cart = new CartObject()