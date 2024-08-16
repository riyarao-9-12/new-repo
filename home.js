document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const name = event.target.getAttribute('data-name');
            const price = parseFloat(event.target.getAttribute('data-price'));
            const image = event.target.getAttribute('data-image');

            // Get cart items from localStorage
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if the item is already in the cart
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, image, quantity: 1 });
            }

            // Save the updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${name} has been added to your cart!`);
        });
    });
});

