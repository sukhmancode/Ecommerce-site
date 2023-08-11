const Sneakerimage=document.getElementById('sneaker');
const image11=document.getElementById('image11')
const increment=document.getElementById('increment');
const decrement=document.getElementById('decrement')
const value=document.getElementById('value');
const cartShow=document.getElementById('cart');
const cartbtn=document.getElementById('cart-photo');
const quantity=document.getElementById('quantity')
const total=document.getElementById('total')
const addtocart=document.getElementById('addcart')
const Option=document.querySelectorAll('.option-image')
const sneakprice=document.getElementById('sneakprice')
const removebtn=document.getElementById('removebtn');
const cartitems=document.querySelector('.cart-item')
const bars=document.querySelector('.logo')
const nav=document.querySelector('.nav-items')


bars.addEventListener('click',()=>{
    nav.classList.toggle('active')
    
})

Option.forEach((img,index) => {
    img.addEventListener('click',(e)=>{
        img.classList.add('active');
Option.forEach((img2,index2)=>{
    index!==index2 && img2.classList.remove('active')
   })
   let imgsrc=e.target.src;
   Sneakerimage.src=imgsrc
  })  
});

addtocart.addEventListener('click',function(){
    if(value.textContent<=0){
       

    
        document.querySelector('.add-text').textContent="Enter a Valid Quantity"
        setTimeout(() => {
            document.querySelector('.add-text').textContent=""
        }, 2000);
       
    }
    else{
    document.querySelector('.add-text').textContent="Please Check your cart!"
    setTimeout(() => {
        document.querySelector('.add-text').textContent=""
    }, 2000);
    cartitems.classList.add('active')
    document.querySelector('.cart-txt').textContent=""
    document.querySelector('#check').classList.remove('hidden')
    quantity.innerHTML=value.innerText;
    total.innerHTML="$"+125*value.innerText;
}
})

removebtn.addEventListener('click',function(){
    value.textContent="0"
total.textContent="$0"
quantity.textContent="0";
document.querySelector('.add-text').textContent="Items Removed!"
setTimeout(() => {
    document.querySelector('.add-text').textContent=""
}, 2000);
cartitems.classList.remove('active')

document.querySelector('#check').classList.add('hidden')
document.querySelector('.cart-txt').textContent="Your Cart is empty."

})

cartbtn.addEventListener('click',function(){
if(quantity.textContent <=0){
    document.querySelector('.cart-txt').textContent="Your Cart is empty."
 
}


    cartbtn.style.cursor="pointer"
    cartShow.classList.toggle('hidden')
})

/* Increment and Decrement listeners*/
increment.addEventListener('click',()=>{
    value.innerHTML++;
})

decrement.addEventListener('click',function(){
    if(value.innerHTML<=0){
        value.innerHTML=0;

    }else{
    value.innerHTML--;
    }
})

