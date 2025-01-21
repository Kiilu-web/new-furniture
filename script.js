

 let cart = [];

      function addToCart(productName, productPrice, productImage) {
          const product = { name: productName, price: productPrice, image: productImage };
          cart.push(product);
          updateCartCount();
      }

      function updateCartCount() {
          document.getElementById('cart-count').innerText = cart.length;
      }

      function viewCart() {
          let cartItems = '';
          let total = 0;
          cart.forEach(item => {
              cartItems += `<li class="py-2 border-b border-gray-200 flex items-center">
                              <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-lg mr-4">
                              <span>${item.name} - $${item.price.toFixed(2)}</span>
                            </li>`;
              total += item.price;
          });
          cartItems += `<li class="py-2 font-bold">Total: $${total.toFixed(2)}</li>`;
          document.getElementById('cart-items').innerHTML = cartItems;
          document.getElementById('cart-modal').classList.remove('hidden');
      }

      function closeCart() {
          document.getElementById('cart-modal').classList.add('hidden');
      }

