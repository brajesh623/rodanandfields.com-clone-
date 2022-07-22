// import {mainnavbar,footer,lastbar} from './dashboard.js';
// document.getElementById('nav').innerHTML=mainnavbar();
// document.getElementById('footer').innerHTML=footer();
// document.getElementById('lastbar').innerHTML=lastbar();

let Regimen_products=document.getElementById('Regimen_products');

let Regimen=[
    {
        image:"https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        type:"Best Seller",
        title:"REDEFINE Regimen",
        desc:"Visibly lifts, sculpts + firms while minimizing the appearance of lines + deep wrinkles.",
        retail_price:220,
        value_price:275,
        rating:4.7,
        people_rated:7311,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/RVWA125-RVTG125-RVSS050-RVTTG50-REVERSE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MTY5NHxpbWFnZS9wbmd8aW1hZ2VzL2gyNy9oZWIvMTM3NTgzODQzNDEwMjIucG5nfGI3NmIzMjI0NTc2Y2RiZjZlNTdhYjg0ZDM4ZjM0MmM2M2U5Yjg5Y2RiNTM1NTM1NGFlOWNiY2E5ZTVkYTM5NWY",
        type:"Best Seller ",
        title:"REVERSE Regimen",
        desc:"Brightens + refines skin’s surface while tackling the look of fine lines + dark spots.",
        retail_price:195,
        value_price:245,
        rating:4,
        people_rated:1792
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/UNWA125-UNTJ125-UNTT030-UNSS030-UNBLEMISH-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w1NDk5N3xpbWFnZS9wbmd8aW1hZ2VzL2g2YS9oOTYvMTM3NTgzODQ4NjUzMTAucG5nfDNhOWMxMGU5MjIzMGEyZjNhNTZjNWVkMjUxYmJjODI5YmNlODhjODBkNzJjZTA4ZDk1YTk0Yzk0ZjkyNzdhZmU",
        type:"Best Seller",
        title:"UNBLEMISH Regimen",
        desc:"Helps clear and prevent adult acne while visibly minimizing pores + fine lines.",
        retail_price:190,
        value_price:240,
        rating:4.4,
        people_rated:463
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/SOWA125-SOTT050-SOMO050-SOSS050-SOOTHE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MDc1MHxpbWFnZS9wbmd8aW1hZ2VzL2g5Zi9oYWMvMTM3NTgzODUxMjc0NTQucG5nfGFmOTE5ZGY1MjdhZmFkNDhhNzNiOTkyYTYzODAxNzI4OTE3ZGQ5Zjk3YzRlOGRlNTIzYzU3MzZlMTQzNGEzNTI",
        type:"Best Seller ",
        title:"SOOTHE Regimen",
        desc:"Protects sensitive skin, reduces visible redness + fortifies skin’s moisture barrier. ",
        retail_price:185,
        value_price:235,
        rating:4.3,
        people_rated:672
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/spotless-regimen-UNRS001.jpg?context=bWFzdGVyfGltYWdlc3wxOTY4NHxpbWFnZS9qcGVnfGltYWdlcy9oM2QvaGU3LzEzODE0NjU0MzA0Mjg2LmpwZ3xjNGJiOWMyMDczMDlmMzU4OWRjM2FiNjhkNjgxY2QyYzY1ZjI1NzNlY2NlNWZmMGE1NWZjNTUxMjNkOGIzY2Q3",
        type:"Award Winner",
        title:"SPOTLESS Regimen",
        desc:"For teens + young adults: Clears existing blemishes + prevents new ones from forming.",
        retail_price:89,
        value_price:135,
        rating:4.6,
        people_rated:1578
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/RCWA125-RCTTO50-RCSP040-REGHARGE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9wbmd8aW1hZ2VzL2hkNi9oNDMvMTM3NTgzODQ2MDMxNjYucG5nfGQ4MzYxODU0ZDcxOTZiOTdlODg3NmZmZTAzZGQ1MGQ5Yjg0YzBhODk3NzJhYzM5NzZlNjQ1NjQzNGQ3NTY0ZmE",
        type:"Best Seller",
        title:"RECHARGE Regimen",
        desc:"Defends against lifestyle stressors that leave skin looking dull, blotchy + dehydrated.",
        retail_price:134,
        value_price:201,
        rating:4.6,
        people_rated:723
    }
];

Regimen.forEach((el)=>{
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.image;
    let p1=document.createElement("p");
    p1.innerText=el.type;
    let h=document.createElement("h5");
    h.innerText=el.title;
    let p2=document.createElement("p");
    p2.innerText=el.desc;
    let p3=document.createElement("p");
    p3.innerText=`$${el.retail_price} ($${el.value_price})`;
    let p4=document.createElement("p");
    p4.innerText=`Rating: ${el.rating} (${el.people_rated})`;
    let button=document.createElement("button");
    button.innerText="ADD TO BAG"
    button.addEventListener("click",()=>{
        let addtobagstorage = JSON.parse(localStorage.getItem("Userbag")) || [];    
        addtobagstorage.push(el);
        localStorage.setItem("Userbag", JSON.stringify(addtobagstorage));
    })
    div.append(img,p1,h,p2,p3,p4,button);
    Regimen_products.append(div);
    
})

let Regimen_bundle_products= document.getElementById("Regimen_bundle_products");

let Regimen_Bundle=[
    {
        image:"https://www.rodanandfields.com/en-us/medias/HAAGRTRF-AAWA125-AATN125-AATL030-AAPL030-ENFM030-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w4NDEwM3xpbWFnZS9qcGVnfGltYWdlcy9oZGMvaGRkLzEzOTc3NjUzNTQyOTQyLmpwZ3xhN2M4ZTcyYjQxNzhjMjcyNDZiNzk5OTEzOWZhZDA2NzIyNzkyODhiYzY0NjY2ZTk1ZGY4OWQ0NTJjNjc3Njk0",
        title:"REDEFINE + Total RF Serum Special ",
        desc:"Save on our best selling Regimen + most comprehensive anti-aging serum.",
        retail_price:358,
        value_price:450,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/HRVRGTRF-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w5NDMwOHxpbWFnZS9qcGVnfGltYWdlcy9oYzIvaGMzLzEzOTc3NjU2NTI0ODMwLmpwZ3wzZDI3Mzk1ZTZhMjVjMTMwMWZhMTYzNTNmZjVlYTAxM2YwMzYwYTg5OWU1NTNlYjY3MTYwNDQzNGY3ZTA4ZGY3",
        title:"REVERSE + Total RF Serum Special ",
        desc:"Save on our brightening skincare Regimen and our most comprehensive anti-aging serum.",
        retail_price:334,
        value_price:420,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/HUNRGTRF-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w5NTM5MnxpbWFnZS9qcGVnfGltYWdlcy9oY2YvaDhjLzEzOTc3NjU3OTY2NjIyLmpwZ3xkYzVkYmZhM2IyYmU1ZmFiZWI5NTMxYjQxYzhkZDNlNDMxMDYzNmFiZDg5NzUzNTc5NDI4NDllYWY0YzEzNmIz",
        title:"UNBLEMISH + Total RF Serum Special",
        desc:"Save on our acne-fighting Regimen + most comprehensive anti-aging serum.",
        retail_price:328,
        value_price:415,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/HSORGTRF-SOWA125-SOTT050-SOMO050-SOSS050-ENFM030-900x900-tablet-1.jpg?context=bWFzdGVyfGltYWdlc3wxMTAzNjF8aW1hZ2UvanBlZ3xpbWFnZXMvaGY3L2g5MS8xMzk3NzY1Nzc3MDAxNC5qcGd8ZDhkOGZhNDhhNjAwMTdjN2YxNmRhMjlkYjkzZmVjYzgyMTcwY2VhMmNlMjhlZDQ5NGJhMzExNWQxNjljYjM0Mg",
        title:"SOOTHE + Total RF Serum Special ",
        desc:"Save on our sensitive skin Regimen + our most comprehensive anti-aging serum.",
        retail_price:323,
        value_price:410,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/HRCRGTRF-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w3ODAwMXxpbWFnZS9qcGVnfGltYWdlcy9oNmYvaGE3LzEzOTc3NjU1NTc0NTU4LmpwZ3w3MjA1Y2RhNjE1N2VhNWFkN2U3ZDUyNmVkY2NkZWI5MWNhNzQ0N2QxN2U4ZjE1ODYxZDIxMmI1MzA1Y2UyZmEy",
        title:"RECHARGE + Total RF Serum Special ",
        desc:"Boost + lift, balance + tighten, defend + brighten! Recharge your complexion every day.",
        retail_price:272,
        value_price:309,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/HAAGRLP1-AAWA125-AATN125-AATT030-AAPM030-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0OTY1NnxpbWFnZS9qcGVnfGltYWdlcy9oY2IvaDg4LzEyNzgwOTE0NTA3ODA2LmpwZ3xlOGNmOTZiYjIyZGIxOTk4NGFhMDJiNDY1YzM0NzNjZjg2NDZiZTBkZTkwN2ZiOGIxZTBhNDQ0OWI5NzQ2ODMw",
        title:"REDEFINE + Lash Boost Special",
        desc:"Ditch wrinkles + mascara. Visibly lifts, sculpts + firms skin, plus conditions lashes.",
        retail_price:343,
        value_price:430,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/HRVRBLP1-RVWA125-RVTG125-RVTTG50-RVSS050-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0ODU4NnxpbWFnZS9qcGVnfGltYWdlcy9oYmQvaDYzLzEyNzcxNTgxNzIyNjU0LmpwZ3wzZGRiMDk0ZDAzZjgzOTk1MThkZWEzNGRkOTVjNTk2NTc2MTJiYWY1ODk0Y2YwMmI2NTU2YzVkODgzYTA0YTFk",
        title:"REVERSE + Lash Boost Special ",
        desc:"Visibly revitalize skin + condition lashes for a younger-looking appearance.",
        retail_price:318,
        value_price:400,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/HUNRJLP1-UNWA125-UNTJ125-UNTT030-UNSS030-XTPCS01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0ODE5MHxpbWFnZS9qcGVnfGltYWdlcy9oZTQvaDk1LzEyNzcxNTkwODk3Njk0LmpwZ3w3ZDQ4ZDYzNjI0ZjI3YmU1MjhmOTI0N2QyYzYwNmVkZjY3YTc5MzdlNDBhMGJhN2I5NTRmNDZhYWE2M2NmNDY0",
        title:"UNBLEMISH + Lash Boost Special ",
        desc:"Get fewer pimples + the appearance of longer lashes.",
        retail_price:312,
        value_price:395,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/HSORGLP1-SOWA125-SOTT050-SOMO050-SOSS050-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0MTg3OHxpbWFnZS9qcGVnfGltYWdlcy9oOTUvaGQ1LzEyNzcxNTg3MTk0OTEwLmpwZ3w2Y2Q0ZmI5MDMwYzdmYTEwMGUzYzU4M2NiZGRkMWYxOTQ2MWIwMDAwMDIyYTEzYzI4YzUzNTZmMjZhZjNkMTRi",
        title:"SOOTHE + Lash Boost Special",
        desc:"Visibly reduce redness + condition lashes for a younger-looking appearance.",
        retail_price:307,
        value_price:390,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/RCLBES1-720x600-desktop.jpg?context=bWFzdGVyfGltYWdlc3wxOTIwM3xpbWFnZS9qcGVnfGltYWdlcy9oYWYvaDY2LzkxNzEyMzg3NDgxOTAuanBnfDIzM2NlODM0ODNjNTgxYThiMDAyMGJlYWEwMzRiZmU4ZDJiNThkODM3OTFmMmJhZjNmMzFmNDE3ODk5OWVhMzg",
        title:"RECHARGE + Lash Boost Special",
        desc:"Get a glowing, luminous look + the appearance of lush, fuller-looking lashes.",
        retail_price:256,
        value_price:305,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-AAAPS01-1168x1168-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDg1Nzd8aW1hZ2UvanBlZ3xpbWFnZXMvaDMyL2g0OC8xMjM5NjczMTQzMjk5MC5qcGd8YjM5NjlhNjM0MjM3ZDA0M2UwMGVmOTk5YmI0OWFhMjIyODlhN2YxOTFiYjAxYWFlOGQ5NjYyN2NkYjllYTQ3Mg",
        title:"REDEFINE AMP It Up Special",
        desc:"Fight wrinkles with micro-exfoliation technology + skin-fortifying serum.",
        retail_price:400,
        value_price:502,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/HRVAPS01-RVWA125-RVSS050-RVTTG50-AAAPS01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w1NzcwMXxpbWFnZS9qcGVnfGltYWdlcy9oMDgvaDhhLzEyNzcxNTc5ODg3NjQ2LmpwZ3wzOWNmZWJjNjlhMzY1NjkxM2JiOThlMGUwNzJhYjk1NDQzY2E5NGQwNmNhMzIxZThkOTlhODI1YmZhNmUzYWIz",
        title:"REVERSE AMP It Up Special",
        desc:"Fight age spots with micro-exfoliation technology + skin-fortifying serum.",
        retail_price:376,
        value_price:472,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-XTPCS01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wzOTY1NHxpbWFnZS9qcGVnfGltYWdlcy9oNWMvaDlmLzExODU0MDU2MzkwNjg2LmpwZ3xhOGI1MDZkNjc5NzQ0NDg4Y2NmZDRkZjBkYWZmYzg5MGQ5MzM4NjdkYzAyZGVmODU5NDNkMTJhMmZjMGZiODE3",
        title:"REDEFINE Power Up Special",
        desc:"Fight wrinkles + clogged pores with a special that visibly lifts, firms + deep cleans.",
        retail_price:428,
        value_price:535,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/HRBXPSEG-RVWA125-RVTG125-RVTTG50-RVSS050-XTPCS01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0NDA3OHxpbWFnZS9qcGVnfGltYWdlcy9oMDMvaGJkLzEyNzcxNTc4MjQ5MjQ2LmpwZ3w0YjY5Yjg0YWI3ODFjNGZiZDgyYTA2M2YzYTFiYmNjNzcwNjU3NWQwOGQyOGY0MDhjZTgwM2RjMWZlMjUzMjU0",
        title:"REVERSE Power Up Special",
        desc:"Reveal your brightest complexion with a deep pore clean for more luminous skin.",
        retail_price:403,
        value_price:505,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/HUNXPSEG-UNWA125-UNTJ125-UNTT030-UNSS030-XTPCS01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0MjkxNHxpbWFnZS9qcGVnfGltYWdlcy9oYjgvaGYyLzEyNzcxNTkzMTI1OTE4LmpwZ3wxNzY4MjI4ZjYwNWJjNWE1ZTc4MjIyNzRkNTJjYjM0NGUxNTNmNDg3YWY2NzU3YTU1MDg4ODE2ODQ5NjU4MTRm",
        title:"UNBLEMISH Power Up Special",
        desc:"This power pair fights pimples + clogged pores for a more youthful-looking complexion.",
        retail_price:398,
        value_price:500,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/TAXPSEG-720x600-desktop.jpg?context=bWFzdGVyfGltYWdlc3wyMDEyOHxpbWFnZS9qcGVnfGltYWdlcy9oNDYvaDkwLzkxNzEyNDU5ODk5MTguanBnfGQ0N2UwNGZhOGUzNjAyYzM1Y2I2NjI4ZGY2NjczYzZkYWQ2OTVhY2Q3YmIwMWI1NjFkNjQ3ZmJmZWJkMWY0MmY",
        title:"SPOTLESS Power Up Special",
        desc:"This special clears existing acne + deep cleans to prevent future breakouts.",
        retail_price:297,
        value_price:351,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/RCXPSEG-720x600-desktop.jpg?context=bWFzdGVyfGltYWdlc3wxNzc1M3xpbWFnZS9qcGVnfGltYWdlcy9oMDUvaGIyLzkxNzEyNDQwODkzNzQuanBnfGU4YTdjMzZjMWY0MGE5MGJlODI5YTI5ZmM1YmI2MDE0MGU1YjI5YjIzZDE3Zjg4MTMzM2VmZGMyOTI3ZTJmNTQ",
        title:"RECHARGE Power Up Special",
        desc:"This power pair visibly improves stressed skin while cleaning deep into pores.",
        retail_price:342,
        value_price:402,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-AAEY015-AASRI60-AALS060-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wzNjMxOXxpbWFnZS9qcGVnfGltYWdlcy9oMDcvaGQ2LzExODU2MTM2NTM2MDk0LmpwZ3xiNjcxNDJiMmNkNTAyNTE0OWU2NGE3MzA1MWEzZmViMDk3MjA4YTQ5YjZlMzY4N2Q0NDRjNTEwZTU1ODExMGMw",
        title:"REDEFINE Age Assault Special",
        desc:"This comprehensive anti-aging set visibly firms skin + eye contours and plumps lips.",
        retail_price:400,
        value_price:505,
    }
];

Regimen_Bundle.forEach((el)=>{
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.image;
    let h=document.createElement("h5");
    h.innerText=el.title;
    let p2=document.createElement("p");
    p2.innerText=el.desc;
    let p3=document.createElement("p");
    p3.innerText=`$${el.retail_price} ($${el.value_price})`;
    let button=document.createElement("button");
    button.innerText="ADD TO BAG"
    button.addEventListener("click",()=>{
        let addtobagstorage = JSON.parse(localStorage.getItem("Userbag")) || [];    
        addtobagstorage.push(el);
        localStorage.setItem("Userbag", JSON.stringify(addtobagstorage));
    })
    div.append(img,h,p2,p3,button);
    Regimen_bundle_products.append(div);
    
})
