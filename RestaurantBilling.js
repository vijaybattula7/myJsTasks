let itemBar = document.querySelector('.items--bar');
let itemBox = document.querySelector('.item--details');
let foodItem = document.querySelector('.food--item');
let foodPrice = document.querySelector('.food--price');
let i;
let priceCart = [];
let foodCartPrice = document.querySelector('.items--price');
let totalPrice = document.querySelector('total--price');
let personName =document.querySelector('#name').value;
let ammount;
let tax ;
let data;
/*  */
/* itemsApiCal();
function itemsApiCal(){
/* itemBar.addEventListener('load',function(){ */
  /*   alert("");
 fetch('http://localhost:3000/items')
 .then(val => { return val.json()})
 .then(itemsList =>{console.log(itemsList);})
 .catch(err =>{console.log("this is an error");}) */
/* }); */
// 
/* for(i=0;i<itemsList.length;i++){
    itemBar.innerHTML +=` <div class="item--details">
                    <p class="food--item">${itemsList[i].name}</p>
                    <P class="food--cost">₹ ${itemsList[i].price}</P>
                </div>`

}
}  */getDataApi();
async function getDataApi(){
    // alert();
    let getData=await fetch('http://localhost:3000/items');
    let itemsList=await getData.json();
    console.log(itemsList);
    for (let i=0;i<itemsList.length;i++){ 
        itemBar.innerHTML +=` <div class="item--details" onclick="CartItems(${itemsList[i].id})">
                    <p class="food--item">${itemsList[i].name}</p>
                    <P class="food--cost">₹ ${itemsList[i].price}</P>
                </div>`
                
}
}

 function CartItems(itemId){
    fetch('http://localhost:3000/items')
      .then(val => {return  val.json()})
      .then(itemsDisplay =>{
      foodCartPrice.innerHTML+=`<tr><td>${itemsDisplay[itemId-1].name}</td>
      <td><input type="text" id="quantity" value="${1}"/></td>
      <td class="selected--food">₹${itemsDisplay[itemId-1].price}</td></tr>
      `
      /* data={
        "itemName":`${itemsDisplay[itemId-1].name}`,
        "quantity":foodQuantity
    } */
      var selectedFood = document.querySelector('.selected--food').value;
      priceCart.push(parseInt(`${itemsDisplay[itemId-1].price}`));
      let output=priceCart.reduce(function(a,b){
        a+=b;
        return a;
    },0);
    console.log(output);
    //totalPrice.textContent=output; 
    
   })
   console.log(priceCart);
 /*   function sum (z){
    return z*0.04;
   }
   ammount=priceCart.map(sum); */
   tax += Number((4/priceCart)*100);
   console.log(tax);
 }
function toGet(){
/*     let foodQuantity= document.querySelector('#quantity').value;
 
 let data={
    "itemName":`${itemsDisplay[itemId-1].name}`,
    "quantity":foodQuantity
} */
fetch('http://localhost:3000/orderitems',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(data)
})
}