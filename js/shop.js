// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

var cart = [];
var total = 0;

const cartList = document.getElementById('cart_list');
const totalPriceElement = document.getElementById('total_price');

// Exercise 1
function buy(id) {

    const productToAdd = products.find(product => product.id === id);

    if (productToAdd) {
        const productIndex = cart.findIndex(productToAdd => productToAdd.id == id);
        productIndex == -1 ? cart.push({ ...productToAdd, quantity: 1}) : cart[productIndex].quantity += 1;
    } else {
        console.error('No se encuentra el producto');
    }

    cartList.innerHTML = '';

    cart.forEach(product => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <th scope="row">${product.name}</th>
            <td>$${product.price}</td>
            <td>${product.quantity}</td>
            <td>$${applyPromotionsCart(product).toFixed(2)}</td>
            `;

        cartList.appendChild(newRow);
    });
    calculateTotal();
}

// Exercise 2
function cleanCart() {
    cartList.innerHTML ='';
    cart = [];
    total = 0;
    totalPriceElement.textContent = total;
}

// Exercise 3
function calculateTotal() {
    total = cart.reduce((accumulator, product) => accumulator + (applyPromotionsCart(product)), 0);;
    totalPriceElement.textContent = total.toFixed(2);
}

// Exercise 4
// Apply promotions to each item in the array "cart"
function applyPromotionsCart(product) {
    switch (product.id){
        case 1: 
            return (product.quantity >= 3) ? product.price * product.quantity * 0.8 : product.price * product.quantity;
        case 3: 
            return (product.quantity >= 10) ? product.price * product.quantity * 0.7 : product.price * product.quantity;
        default:
            return product.price * product.quantity;
    }
}
   
// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}