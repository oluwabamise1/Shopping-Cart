let Cart= JSON.parse(localStorage.getItem("Cart"))
let table= document.querySelector("table")

Cart.forEach((product,index)=>{
    let tr= document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    td1.innerText = `${item.title}`
    td2.innerText = `${item.quantity}`
    td3.innerText = `${item.price}`
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    table.appendChild(tr)
    
    })
// let headings = document.querySelector("thead")
    // let th1 = document.querySelector("#th1")
    // th1.innerText = `${product.title}`
    // let th2 = document.querySelector("#th2")
    // th2.innerText = `${product.quantity}`
    // let th3 = document.querySelector("#th3")
    // td3.innerText = `${product.price}`
    // // let tr= document.createElement("tr")
    // // let td1 = document.createElement("td")
    // // td1.innerText = `${item.title}`
    // // let td2 = document.createElement("td")
    // // td2.innerText = `${item.quantity}`
    // // let td3 = document.createElement("td")
    // // td3.innerText = `${item.price}`
    // thead.appendChild(th1)
    // thead.appendChild(th2)
    // thead.appendChild(th3)
    // table.appendChild(thead)