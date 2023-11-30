    const displayCartItems = () => {
      // Retrieve cart items from localStorage
      const cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Get the cart items element
      const cartItemsElement = document.getElementById('cart-items');

      // Clear previous cart items
      cartItemsElement.innerHTML = '';

      // Display each cart item
      cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `Product ID: ${item.productId}, Quantity: ${item.quantity}`;
        cartItemsElement.appendChild(listItem);
      });
    };

    // Display cart items when the cart page loads
    displayCartItems();
    const addProductToCart = (productId, quantity) => {
      // Retrieve existing cart items from localStorage
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Check if the product is already in the cart
      const existingProduct = cart.find(item => item.productId === productId);

      if (existingProduct) {
        // If the product is already in the cart, update the quantity
        existingProduct.quantity += quantity;
      } else {
        // If the product is not in the cart, add it
        cart.push({ productId, quantity });
      }

      // Save the updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      // Display a message informing the user that the product was added to the cart
      alert('Product added to cart!');
    };

    const addToCartButton = document.getElementById('add-to-cart-button');
    addToCartButton.addEventListener('click', () => {
      // Get the product ID from the URL
      const productId = window.location.pathname.split('/')[3];

      // Get the quantity from the product page
      const quantity = 1;

      // Add the product to the cart
      addProductToCart(productId, quantity);
    });
