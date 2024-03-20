fetch('js/products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
    })
    .catch(error => console.error('Error al cargar los datos:', error));

var cart = JSON.parse(localStorage.getItem('cart')) || [];
var total = 0;
var products = '';

const cartList = document.getElementById('cart_list');
const totalPriceElement = document.getElementById('total_price');
const countProduct = document.getElementById('count_product');

updateCountProduct();

function updateCountProduct() {
    let count = 0;
    cart.forEach(product => {
        count += product.quantity;
    });
    countProduct.innerHTML = count;
}

function buy(id) {
    const productToAdd = products.find(product => product.id === id);

    if (productToAdd) {
        const productIndex = cart.findIndex(productToAdd => productToAdd.id == id);
        productIndex == -1 ? cart.push({ ...productToAdd, quantity: 1}) : cart[productIndex].quantity += 1;
        updateCountProduct();
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

function cleanCart() {
    cartList.innerHTML ='';
    cart = [];
    total = 0;
    totalPriceElement.textContent = total;
    updateCountProduct();
    localStorage.setItem('cart', JSON.stringify(cart));
}

function calculateTotal() {
    total = cart.reduce((accumulator, product) => accumulator + (applyPromotionsCart(product)), 0);;
    totalPriceElement.textContent = total.toFixed(2);
}

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

function printCart() {
    cartList.innerHTML = '';

    cart.forEach(product => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <th scope="row">${product.name}</th>
            <td>$${product.price}</td>
            <td>${product.quantity}</td>
            <td>$${applyPromotionsCart(product).toFixed(2)}</td>
            <td><button onclick="removeFromCart(${product.id})" class="btn btn-ligth border"><i class="fas fa-minus"></i></button></td>
            `;
        cartList.appendChild(newRow);
    });
    calculateTotal();
}

function removeFromCart(id) {
    const productIndex = cart.findIndex(product => product.id === id);

    if (productIndex !== -1) {
        cart[productIndex].quantity === 1 ? cart.splice(productIndex, 1) : cart[productIndex].quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCountProduct();
        printCart();
    }
}

function open_modal() {
    printCart();
}