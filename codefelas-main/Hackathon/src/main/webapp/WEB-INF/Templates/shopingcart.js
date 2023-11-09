document.addEventListener("DOMContentLoaded", function() {
    const cartItems = getCartItemsFromCookies();

    const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
    const cartItemsList = document.getElementById("cart-items");
    const checkoutButton = document.getElementById("checkout-button");
    const addressFormContainer = document.getElementById("address-form-container");
    const messageContainer = document.getElementById("message-container");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productName = button.getAttribute("data-name");
            const productPrice = parseFloat(button.getAttribute("data-price"));
            addItemToCart(productName, productPrice);
            displayCartItems();
        });
    });

    checkoutButton.addEventListener("click", function() {
        checkoutButton.classList.add("hidden");
        
        addressFormContainer.innerHTML = `
            <form id="address-form">
                <h3>Trade Point</h3>
                <label for="address">Choose a secret network location:</label>
                <textarea id="address" name="address" required></textarea>
                <button id="confirm-order-button" class="btn btn-success">Confirm Order</button>
            </form>`;

        const confirmOrderButton = document.getElementById("confirm-order-button");
        confirmOrderButton.addEventListener("click", function() {
            cartItems.length = 0; // Clear the cart
            saveCartItemsToCookies();
            
            addressFormContainer.innerHTML = "";
            messageContainer.innerHTML = `
                <p>Make your transfer to this ₮ USDT ₮ wallet: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
                <p>When your payment is processed we will send the products</p>
            `;
            messageContainer.classList.remove("hidden");
        });
    });

    function addItemToCart(name, price) {
        const existingItem = cartItems.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({ name: name, price: price, quantity: 1 });
        }

        saveCartItemsToCookies();
    }

    function displayCartItems() {
        cartItemsList.innerHTML = ""; 

    let totalCost = 0; 

    cartItems.forEach(item => {
        const li = document.createElement("li");
        const itemTotal = (item.price * item.quantity).toFixed(2);
        li.textContent = `Product ${item.name} - ₮${itemTotal} - ${item.quantity} uni`;
        cartItemsList.appendChild(li);

        totalCost += parseFloat(itemTotal); 
    });


    const totalLi = document.createElement("li");
    totalLi.textContent = `Total: ₮${totalCost.toFixed(2)}`;
    cartItemsList.appendChild(totalLi);
    }

    function saveCartItemsToCookies() {
        document.cookie = `cartItems=${JSON.stringify(cartItems)}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
    }

    function getCartItemsFromCookies() {
        const cookies = document.cookie.split("; ");
        const cartCookie = cookies.find(cookie => cookie.startsWith("cartItems="));

        if (cartCookie) {
            return JSON.parse(cartCookie.split("=")[1]);
        }

        return [];
    }

    // Initial display of cart items
    displayCartItems();

    var button1 = document.getElementById('drug_button');
    var button2 = document.getElementById('weapon_button');
    var button3 = document.getElementById('hitman_button');
    var button4 = document.getElementById('cleaner_button');

    var targetSection1 = document.getElementById('drug');
    var targetSection2 = document.getElementById('weapon');
    var targetSection3 = document.getElementById('hitman');
    var targetSection4 = document.getElementById('cleaner');

    function scrollToSection(section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }

    button1.addEventListener('click', function() {
        scrollToSection(targetSection1);
        console.log("Button 1 clicked");
    });

    button2.addEventListener('click', function() {
        scrollToSection(targetSection2);
        console.log("Button 2 clicked");
    });

    button3.addEventListener('click', function() {
        scrollToSection(targetSection3);
        console.log("Button 3 clicked");
    });

    button4.addEventListener('click', function() {
        scrollToSection(targetSection4);
        console.log("Button 4 clicked");
    });
});