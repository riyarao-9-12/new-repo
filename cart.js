document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price * item.quantity;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <p class="cart-item-name">${item.name}</p>
                <p class="cart-item-price">Rs ${item.price}</p>
                <p class="cart-item-quantity">Quantity: ${item.quantity}</p>
                <p class="cart-item-total">Total: Rs ${item.price * item.quantity}</p>
            </div>
            <button class="delete-button" data-index="${index}">Delete</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    totalPriceElement.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`;

    // Add delete functionality
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            deleteFromCart(index);
        });
    });
});

function deleteFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload(); // Reload the page to reflect changes
}
