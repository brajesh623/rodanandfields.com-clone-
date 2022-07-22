import {mainnavbar,footer,lastbar} from "./navbar.js"
document.getElementById("mainnav").innerHTML=mainnavbar();
document.getElementById("footer").innerHTML=footer();
document.getElementById("lastbar").innerHTML=lastbar();
let arraydata =[
    {
       
        image:"https://www.rodanandfields.com/en-us/medias/ENFM030-Thumbnail-458x458.jpg?context=bWFzdGVyfGltYWdlc3wyNTQ2MHxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaGQ2LzE0ODgyMTk1ODk4Mzk4LmpwZ3wyYThhMjQ0NTc4YjI1ZmQ1ODY3MDE5NGMyYjk3MjA2MTRmNDQ2MzdmOGVhYzMxYTFmMDk1YmIyY2Q5NDhjMzIw",
        type:"Best Seller",
        title:"Total RF Serum",
        desc:"Energizes millions of surface skin cells by 200% to address all key signs of skin aging",
        retail_price:175,
        value_price:"Retail Price",
        rating:4.5,
        people_rated:7311,


    },
    {
       
        image:"https://www.rodanandfields.com/en-us/medias/ENHLSH01-458x458.jpg?context=bWFzdGVyfGltYWdlc3w0MDkxfGltYWdlL2pwZWd8aW1hZ2VzL2gzNS9oODgvMTM5Nzc1NDQ2ODc2NDYuanBnfDlmYTEwMTFkMjFiNzMwYjlhNjU0NTNiYjU5ZDBmMGY3ZWIzNmNiZmYwMTJhMGYzMTFkMzA1ODhkOGI1MjdlMmE",
        type:"Best Seller",
        title:"R + F Lash Boost",
        desc:"Nightly conditioning serum gives the appearance of longer, darker-looking lashes",
        retail_price:155,
        value_price:"Retail Price",
        rating:4.6,
        people_rated:(7996),


    },
    
    {
       
        image:"https://www.rodanandfields.com/en-us/medias/AAEY015-458x458.jpg?context=bWFzdGVyfGltYWdlc3wxMDQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oMDYvaDljLzEzOTc3NTQ0NDI1NTAyLmpwZ3xiNzQ3NjJkOWU1Y2QxOWM5ZDQ4ZGQzZDA1ZjdkNzBhZmRhMjdkYzE5MTU0MWZiZjY5MDc3NzEyMjBkM2E1YThj",
        type:"Best Seller",
        title:"ESSENTIALS Face + Body Sunscreen Broad Spectrum SPF 50",
        desc:"Provides broad spectrum protection to help defend agains UV rays",
        retail_price:34,
        value_price:"Retail Price",
        rating:4.9,
        people_rated:(7311),


    },
    
    {
       
        image:"https://www.rodanandfields.com/en-us/medias/ESFB150-208x208-mobile-1.jpg?context=bWFzdGVyfGltYWdlc3w0NDM3fGltYWdlL2pwZWd8aW1hZ2VzL2g0MC9oY2MvMTAyOTE4Mjk0NDA1NDIuanBnfDFhM2EwMGZhYWIwMTBkZWE4OTljMDcyMzYyNDNkMDUzNWMzZGU1OGE0ZDVlNTRjZGMyMWY0MmFlZjE3NzE0OGQ",
        type:" Best Seller",
        title:"REDEFINE Multi-Function Eye Cream",
        desc:"Visibly firms + improves all eye-area wrinkles to restore youthful,natural contours",
        retail_price:70,
        value_price:"Retail Price",
        rating:4.6,
        people_rated:(9461),


    },
    {
       
        image:"https://www.rodanandfields.com/en-us/medias/HAAGR-458x458.jpg?context=bWFzdGVyfGltYWdlc3w5MjA3fGltYWdlL2pwZWd8aW1hZ2VzL2gzZC9oMzMvMTM5Nzc1NDM5MDEyMTQuanBnfDU5YTY2OWVkYTZjODM5NzY4YTVhZmJlMGNjZDQzNDU1MzUzMWY2MmUzMzY4ZTkxMTgyMWIwYThkNjYxZGRjMzc",
        type:" Best Seller",
        title:"REDEFINE Regimen",
        desc:"Award-winning anti-aging routine visibly lifts + firms for younger-looking skin",
        retail_price:220,
        value_price:"Retail Price",
        rating:4.7,
        people_rated:(7311),


    },
    {
       
        image:"https://www.rodanandfields.com/en-us/medias/HUNRJ001-458x458.jpg?context=bWFzdGVyfGltYWdlc3w5ODg3fGltYWdlL2pwZWd8aW1hZ2VzL2g1ZC9oNGUvMTM5Nzc1NDM2MzkwNzAuanBnfDU5ZTJkYmVkZTg2MTRlOGU1NTg3NjkxYjVjZGYwZjBjZjY4ZTk4YTBiZTYzN2UxZmJjZTE5ZmJhM2I0ZGVhNGM",
        type:" Best Seller",
        title:"UNBLEMISH Regimen",
        desc:"Fight adult acne, uneven skin tone + signs of aging with this potent 4-step routine",
        retail_price:190,
        value_price:"Retail Price",
        rating:4.6,
        people_rated:(461),


    },

    {
       
        image:"https://www.rodanandfields.com/en-us/medias/ENHEFG1-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wyMjI3N3xpbWFnZS9wbmd8aW1hZ2VzL2g2NS9oYjUvMTQ1MzIxNjY4MTE2NzgucG5nfGNhNTQzZTUyNmU3NTMxZjAxZTc5NThjMmQ3MzU0YzVkNTY1OTExMThjNWEyMDBiYTIwMTFhNWM1Yzk4YTk3ODI",
        type:" Best Seller",
        title:"R + F Active Hydratio Serum",
        desc:"Instantly boosts hydration levels by 200% + locks in moisture for bouncy",
        retail_price:112,
        value_price:"Retail Price",
        rating:4.8,
        people_rated:(8798),


    },

    {
       
        image:"https://www.rodanandfields.com/en-us/medias/ENBR001-458x458.jpg?context=bWFzdGVyfGltYWdlc3w3Nzc0fGltYWdlL2pwZWd8aW1hZ2VzL2g3MS9oMmQvMTM5Nzc1NDMzNzY5MjYuanBnfDMxMTEyY2E3ZDMzNTVjZDA0OGRmODE4NTk4NmNkZjcyMTQwNGM3NDMxNTRkNGEyNTI5MDI2ZTM4OWRkZmEzMzc",
        type:" Best Seller",
        title:"Rodan + fields Active Hydration Body Replenish",
        desc:"Breakthrough body moisturizer instantly + continuosly hydrates skin",
        retail_price:66,
        value_price:"Retail Price",
        rating:4.9,
        people_rated:(7129),


    },
    
]

console.log(arraydata)
dispalyproduct(arraydata)

function dispalyproduct(arraydata){
    arraydata.forEach(el =>{

  let div=document.createElement("div")
  let label=document.createElement("p")
  label.innerText=el.type
  let image=document.createElement("img")
  image.src=el.image
  let caption=document.createElement("h4")
  caption.innerText=el.title
  let description=document.createElement("p")
  description.innerText=el.desc
  let price=document.createElement("p")
  price.innerText= "$"+el.retail_price
  let retail_value=document.createElement("h5")
  retail_value.innerText= el.value_price
  let addtobag=document.createElement("button")

  addtobag.innerText="ADD TO BAG"
  addtobag.addEventListener("click", function (e) {
      
    let addtobagstorage = JSON.parse(localStorage.getItem("Userbag")) || []      
        addtobagstorage.push(el)
        localStorage.setItem("Userbag", JSON.stringify(addtobagstorage))
      })
  div.append( label,image, caption, description, price,retail_value,addtobag)
  document.getElementById("shopbestsellr").append(div)

  })
}
