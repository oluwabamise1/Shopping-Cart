//how to resolve a promise(a placeholder for the eventual outcome of an asynchronous action...)
let cart= JSON.parse(localStorage.getItem("cart"))
const getAllProducts = async() =>{
let response = await fetch('https://fakestoreapi.com/products')
let products = await response.json()
//return products
let insideContainer = document.querySelector(".inside")

products.forEach((product, index) => {
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.setAttribute("src",`${product.image}`)
    let titleHeading = document.createElement('h6')
    titleHeading.innerText = `${product.title}`
    let priceParagraph = document.createElement("p")
    priceParagraph.innerText = `$${product.price}`
    let button = document.createElement('button')
    button.innerHTML = 'Add To Cart'
    button.addEventListener('click', (e)=>{
    e.preventDefault()
    let existing = JSON.parse(localStorage.getItem('cart'))
    console.log(existing)
    if(existing == null){
        cart = []
        product.quantity = 1
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(cart)
        let span = document.querySelector('span')
        span.innerHTML = getCartLength()
    }
    let itemExistInCart = cart.find(item => item.id == product.id)
    console.log(itemExistInCart)
    if(itemExistInCart != undefined){
        itemExistInCart.quantity = itemExistInCart.quantity + 1
        console.log(JSON.stringify(itemExistInCart))
        alert(`Increase to ${itemExistInCart.quantity} items`)
        localStorage.setItem('cart', JSON.stringify(cart))
    }else{
        product.quantity = 1
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(cart)
        let span = document.querySelector('span')
        span.innerHTML = getCartLength()
    }
    })

    div.append(img, titleHeading, priceParagraph, button)
    insideContainer.appendChild(div)
});
} 
 getAllProducts()

 let getCartLength = () => {
    return cart.length
 }

 let span = document.querySelector('span')
 span.innerHTML = getCartLength()
