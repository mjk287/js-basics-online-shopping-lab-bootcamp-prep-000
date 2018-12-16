var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var cartItem = Object.assign({}, {'itemName' : [item]}, {'itemPrice': Math.random() * Math.floor(100)})
 cart.push(cartItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  var cartMessage = "In your cart, you have"
  
  if (cart.length === 1){
    cartMessage = cartMessage + `${cart[0].} at 
  }
  elif (cart.length > 0){
    for (var i = 0; i < cart.length; i++){
      if (i === cart.length - 1)
    }
  }else{
    return 'Your shopping cart is empty'
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
