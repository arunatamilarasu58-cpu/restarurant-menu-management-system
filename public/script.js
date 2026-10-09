/* =========================================================
   SMARTBITE - V3 JAVASCRIPT
   ========================================================= */


/* =========================================================
   FOOD DATA
   ========================================================= */

const foods = [

    {
        id: 1,
        name: "Chicken Biryani",
        restaurant: "South Spice",
        price: 180,
        rating: 4.8,
        category: "Indian",
        type: "nonveg",
        spice: "medium",
        time: 25,
        tag: "Bestseller",
        description: "Aromatic basmati rice cooked with tender chicken and rich spices.",
        image: "https://th.bing.com/th/id/OIP.hEWnvEk0B-FzyoSa0E2C7gHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 2,
        name: "Chicken Pizza",
        restaurant: "Urban Pizza",
        price: 220,
        rating: 4.7,
        category: "Pizza",
        type: "nonveg",
        spice: "mild",
        time: 20,
        tag: "Popular",
        description: "Cheesy pizza topped with juicy chicken and fresh vegetables.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 3,
        name: "Paneer Masala",
        restaurant: "South Spice",
        price: 160,
        rating: 4.6,
        category: "Indian",
        type: "veg",
        spice: "spicy",
        time: 20,
        tag: "Veg",
        description: "Soft paneer cooked in a creamy tomato and Indian spice gravy.",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 4,
        name: "Classic Chicken Burger",
        restaurant: "Burger Hub",
        price: 140,
        rating: 4.5,
        category: "Burger",
        type: "nonveg",
        spice: "mild",
        time: 15,
        tag: "Quick",
        description: "Crispy chicken patty with lettuce, cheese and special sauce.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 5,
        name: "Mutton Biryani",
        restaurant: "Royal Biryani",
        price: 240,
        rating: 4.9,
        category: "Indian",
        type: "nonveg",
        spice: "spicy",
        time: 30,
        tag: "Top Rated",
        description: "Traditional dum biryani made with tender mutton and fragrant rice.",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 6,
        name: "Veg Biryani",
        restaurant: "Green Bowl",
        price: 130,
        rating: 4.5,
        category: "Indian",
        type: "veg",
        spice: "medium",
        time: 20,
        tag: "Veg",
        description: "Flavourful basmati rice cooked with fresh vegetables and herbs.",
        image: "https://th.bing.com/th/id/OIP.qAnLBHSbhb8IZNdYLJLtNAHaJ4?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 7,
        name: "Margherita Pizza",
        restaurant: "Urban Pizza",
        price: 180,
        rating: 4.6,
        category: "Pizza",
        type: "veg",
        spice: "mild",
        time: 20,
        tag: "Veg",
        description: "Classic pizza with mozzarella, tomato sauce and fresh basil.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 8,
        name: "Farmhouse Pizza",
        restaurant: "Pizza Corner",
        price: 250,
        rating: 4.7,
        category: "Pizza",
        type: "veg",
        spice: "medium",
        time: 25,
        tag: "Popular",
        description: "Loaded with mushrooms, capsicum, onions, tomato and cheese.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 9,
        name: "Cheese Burger",
        restaurant: "Burger Hub",
        price: 150,
        rating: 4.6,
        category: "Burger",
        type: "veg",
        spice: "mild",
        time: 15,
        tag: "Veg",
        description: "Crispy veggie patty layered with cheese and creamy sauce.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 10,
        name: "Chicken Noodles",
        restaurant: "Food Street",
        price: 170,
        rating: 4.5,
        category: "Chinese",
        type: "nonveg",
        spice: "medium",
        time: 20,
        tag: "Popular",
        description: "Wok-tossed noodles with chicken, vegetables and Asian sauces.",
        image: "https://th.bing.com/th/id/OIP.uhlZyJHVCiyBBYqAP6IcZQHaJ4?w=205&h=273&c=7&r=0&o=7&pid=1.7&rm=3"
    },

    {
        id: 11,
        name: "Veg Hakka Noodles",
        restaurant: "Food Street",
        price: 140,
        rating: 4.4,
        category: "Chinese",
        type: "veg",
        spice: "medium",
        time: 15,
        tag: "Veg",
        description: "Classic Hakka noodles tossed with colourful fresh vegetables.",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 12,
        name: "Gobi Manchurian",
        restaurant: "Dragon Bowl",
        price: 130,
        rating: 4.5,
        category: "Chinese",
        type: "veg",
        spice: "spicy",
        time: 15,
        tag: "Veg",
        description: "Crispy cauliflower tossed in a spicy Indo-Chinese sauce.",
        image: "https://tse4.mm.bing.net/th/id/OIP.fBYGXozzjaUHBcgC6Js9lwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 13,
        name: "Mango Milkshake",
        restaurant: "Juice Junction",
        price: 110,
        rating: 4.7,
        category: "Drinks",
        type: "veg",
        spice: "mild",
        time: 10,
        tag: "Fresh",
        description: "Thick and creamy mango milkshake made with fresh mangoes.",
        image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 14,
        name: "Cold Coffee",
        restaurant: "Cafe Mocha",
        price: 120,
        rating: 4.6,
        category: "Drinks",
        type: "veg",
        spice: "mild",
        time: 10,
        tag: "Popular",
        description: "Chilled creamy coffee topped with smooth foam.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 15,
        name: "Chocolate Brownie",
        restaurant: "Sweet Treats",
        price: 130,
        rating: 4.8,
        category: "Dessert",
        type: "veg",
        spice: "mild",
        time: 10,
        tag: "Best Seller",
        description: "Rich chocolate brownie with a soft centre and delicious flavour.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 16,
        name: "Gulab Jamun",
        restaurant: "Sweet Treats",
        price: 90,
        rating: 4.7,
        category: "Dessert",
        type: "veg",
        spice: "mild",
        time: 10,
        tag: "Sweet",
        description: "Soft golden dumplings soaked in warm sugar syrup.",
        image: "https://th.bing.com/th/id/OIP.VYxlkZdHajlGemIVuR4PvgHaHa?w=180&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
    },

    {
        id: 17,
        name: "Masala Dosa",
        restaurant: "South Spice",
        price: 100,
        rating: 4.8,
        category: "Indian",
        type: "veg",
        spice: "medium",
        time: 15,
        tag: "South Indian",
        description: "Crispy dosa filled with spicy potato masala, served with chutney.",
        image: "https://tse1.mm.bing.net/th/id/OIP.lJJ6K1H7Jxqn9cDWeF39SAHaFw?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 18,
        name: "Chicken Fried Rice",
        restaurant: "Dragon Bowl",
        price: 180,
        rating: 4.6,
        category: "Chinese",
        type: "nonveg",
        spice: "medium",
        time: 20,
        tag: "Popular",
        description: "Wok-fried rice with chicken, vegetables, egg and Asian sauces.",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=90"
    }

];


/* =========================================================
   CART
   ========================================================= */

let cart = [];

let currentCategory = "All";

let showAll = false;

let currentSearch = "";

let appliedCoupon = null;


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    renderFood();

    updateCart();

});


/* =========================================================
   RENDER FOOD
   ========================================================= */

function renderFood() {

    const grid = document.getElementById("foodGrid");

    const noFood = document.getElementById("noFood");

    if (!grid) return;


    let filteredFoods = [...foods];


    /* SEARCH */

    if (currentSearch !== "") {

        filteredFoods = filteredFoods.filter(food =>

            food.name.toLowerCase().includes(currentSearch) ||

            food.restaurant.toLowerCase().includes(currentSearch) ||

            food.category.toLowerCase().includes(currentSearch)

        );

    }


    /* CATEGORY */

    if (currentCategory !== "All") {

        filteredFoods = filteredFoods.filter(food =>

            food.category === currentCategory

        );

    }


    /* SORT */

    const sortSelect = document.getElementById("sortMenu");

    if (sortSelect) {

        const sortValue = sortSelect.value;

        if (sortValue === "priceLow") {

            filteredFoods.sort((a, b) => a.price - b.price);

        }

        else if (sortValue === "priceHigh") {

            filteredFoods.sort((a, b) => b.price - a.price);

        }

        else if (sortValue === "rating") {

            filteredFoods.sort((a, b) => b.rating - a.rating);

        }

    }


    /* SHOW LIMITED / ALL */

    if (!showAll && currentSearch === "" && currentCategory === "All") {

        filteredFoods = filteredFoods.slice(0, 8);

    }


    grid.innerHTML = "";


    if (filteredFoods.length === 0) {

        grid.style.display = "none";

        if (noFood) {
            noFood.style.display = "block";
        }

    }

    else {

        grid.style.display = "grid";

        if (noFood) {
            noFood.style.display = "none";
        }


        filteredFoods.forEach(food => {

            grid.innerHTML += createFoodCard(food);

        });

    }


    const count = document.getElementById("menuResultCount");

    if (count) {

        count.textContent = filteredFoods.length;

    }


    const toggleButton = document.getElementById("menuToggleBtn");

    if (toggleButton) {

        if (showAll) {

            toggleButton.textContent = "Show Less ↑";

        }

        else {

            toggleButton.textContent = "View Full Menu →";

        }

    }

}


/* =========================================================
   FOOD CARD
   ========================================================= */

function createFoodCard(food) {

    const vegClass = food.type === "veg" ? "veg" : "";

    const tagClass = food.type === "veg" ? "veg" : "";


    return `

        <article class="food-card"
            data-category="${food.category}"
            data-price="${food.price}"
            data-type="${food.type}"
            data-spice="${food.spice}"
            data-time="${food.time}">

            <div class="food-photo">

                <img
                    src="${food.image}"
                    alt="${food.name}"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80'"
                >

                <span class="food-tag ${tagClass}">
                    ${food.tag}
                </span>

                <button
                    class="heart-btn"
                    onclick="toggleFavorite(this)"
                    aria-label="Favourite"
                >
                    ♡
                </button>

            </div>


            <div class="food-details">

                <div class="food-name-row">

                    <div>

                        <h3>
                            ${food.name}
                        </h3>

                        <p class="restaurant-name">
                            ${food.restaurant}
                        </p>

                    </div>

                    <span class="rating">
                        ⭐ ${food.rating}
                    </span>

                </div>


                <p class="food-description">
                    ${food.description}
                </p>


                <div class="food-info">

                    <span>⏱ ${food.time} min</span>

                    <span>
                        🌶 ${capitalize(food.spice)}
                    </span>

                    <span>
                        ${food.type === "veg" ? "🟢 Veg" : "🔴 Non-Veg"}
                    </span>

                </div>


                <div class="food-price-row">

                    <strong>
                        ₹${food.price}
                    </strong>

                    <button
                        class="add-btn"
                        onclick="addToCart(${food.id})"
                    >
                        + Add
                    </button>

                </div>

            </div>

        </article>

    `;

}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(foodId) {

    const food = foods.find(item => item.id === foodId);

    if (!food) return;


    const existingItem = cart.find(item => item.id === foodId);


    if (existingItem) {

        existingItem.quantity++;

    }

    else {

        cart.push({

            id: food.id,

            name: food.name,

            restaurant: food.restaurant,

            price: food.price,

            image: food.image,

            quantity: 1

        });

    }


    updateCart();

    showToast(
        "Added to Cart",
        `${food.name} added successfully 🛒`
    );

}


/* =========================================================
   UPDATE CART
   ========================================================= */

function updateCart() {

    const cartCount = document.querySelector(".cart-count");

    const cartItemCount = document.getElementById("cartItemCount");

    const cartItems = document.getElementById("cartItems");

    const subtotalElement = document.getElementById("cartSubtotal");

    const deliveryElement = document.getElementById("deliveryFee");

    const discountElement = document.getElementById("discountAmount");

    const totalElement = document.getElementById("cartTotal");


    let totalQuantity = 0;

    let subtotal = 0;


    cart.forEach(item => {

        totalQuantity += item.quantity;

        subtotal += item.price * item.quantity;

    });


    if (cartCount) {

        cartCount.textContent = totalQuantity;

    }


    if (cartItemCount) {

        cartItemCount.textContent = totalQuantity;

    }


    let delivery = subtotal === 0 ? 0 : 40;

    if (subtotal >= 299) {

        delivery = 0;

    }


    let discount = 0;


    if (appliedCoupon === "FIRST20") {

        discount = Math.round(subtotal * 0.20);

    }

    else if (appliedCoupon === "WEEKEND100") {

        discount = Math.min(100, subtotal);

    }


    if (appliedCoupon === "FREEDELIVERY") {

        delivery = 0;

    }


    const total = subtotal + delivery - discount;


    if (subtotalElement) {

        subtotalElement.textContent = subtotal;

    }


    if (deliveryElement) {

        deliveryElement.textContent = delivery;

    }


    if (discountElement) {

        discountElement.textContent = discount;

    }


    if (totalElement) {

        totalElement.textContent = Math.max(0, total);

    }


    /* CART ITEMS */

    if (cartItems) {

        if (cart.length === 0) {

            cartItems.innerHTML = `

                <div class="empty-cart">

                    <div class="empty-cart-icon">
                        🛒
                    </div>

                    <h3>
                        Your cart is empty
                    </h3>

                    <p>
                        Add some delicious food to get started.
                    </p>

                    <button onclick="closeCart(); scrollToMenu()">
                        Browse Food
                    </button>

                </div>

            `;

        }

        else {

            cartItems.innerHTML = "";

            cart.forEach(item => {

                cartItems.innerHTML += `

                    <div class="cart-item">

                        <div class="cart-item-image">

                            <img
                                src="${item.image}"
                                alt="${item.name}"
                            >

                        </div>


                        <div class="cart-item-info">

                            <h4>
                                ${item.name}
                            </h4>

                            <p>
                                ${item.restaurant}
                            </p>


                            <div class="cart-item-bottom">

                                <strong>
                                    ₹${item.price * item.quantity}
                                </strong>


                                <div class="quantity-control">

                                    <button
                                        onclick="changeQuantity(${item.id}, -1)"
                                    >
                                        −
                                    </button>

                                    <span>
                                        ${item.quantity}
                                    </span>

                                    <button
                                        onclick="changeQuantity(${item.id}, 1)"
                                    >
                                        +
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                `;

            });

        }

    }

}


/* =========================================================
   CHANGE QUANTITY
   ========================================================= */

function changeQuantity(foodId, change) {

    const item = cart.find(item => item.id === foodId);

    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart = cart.filter(item => item.id !== foodId);

    }


    updateCart();

}


/* =========================================================
   OPEN CART
   ========================================================= */

function openCart() {

    const drawer = document.getElementById("cartDrawer");

    const overlay = document.getElementById("cartOverlay");


    if (drawer) {

        drawer.classList.add("active");

    }


    if (overlay) {

        overlay.classList.add("active");

    }


    document.body.classList.add("no-scroll");

}


/* =========================================================
   CLOSE CART
   ========================================================= */

function closeCart() {

    const drawer = document.getElementById("cartDrawer");

    const overlay = document.getElementById("cartOverlay");


    if (drawer) {

        drawer.classList.remove("active");

    }


    if (overlay) {

        overlay.classList.remove("active");

    }


    document.body.classList.remove("no-scroll");

}


/* =========================================================
   SEARCH
   ========================================================= */

function searchFood() {

    const input = document.getElementById("searchInput");

    if (!input) return;


    currentSearch = input.value.toLowerCase().trim();

    currentCategory = "All";

    showAll = true;


    renderFood();


    document.getElementById("menu").scrollIntoView({

        behavior: "smooth"

    });

}


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

function filterCategory(category) {

    currentCategory = category;

    currentSearch = "";

    showAll = true;


    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.value = "";

    }


    document.querySelectorAll(".category-card").forEach(card => {

        card.classList.remove("active");

    });


    const clickedButton = [...document.querySelectorAll(".category-card")]

        .find(button =>

            button.getAttribute("onclick") ===
            `filterCategory('${category}')`

        );


    if (clickedButton) {

        clickedButton.classList.add("active");

    }


    renderFood();


    document.getElementById("menu").scrollIntoView({

        behavior: "smooth"

    });

}


/* =========================================================
   SHOW ALL MENU
   ========================================================= */

function showAllMenu() {

    currentSearch = "";

    currentCategory = "All";

    showAll = !showAll;


    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.value = "";

    }


    renderFood();


    document.getElementById("menu").scrollIntoView({

        behavior: "smooth"

    });

}


/* =========================================================
   SORT MENU
   ========================================================= */

function sortMenu() {

    renderFood();

}


/* =========================================================
   SMART FINDER
   ========================================================= */

function smartFinder() {

    const budget =
        document.getElementById("budgetFilter").value;

    const type =
        document.getElementById("typeFilter").value;

    const spice =
        document.getElementById("spiceFilter").value;

    const time =
        document.getElementById("timeFilter").value;


    let results = foods.filter(food => {


        /* BUDGET */

        if (
            budget !== "any" &&
            food.price > Number(budget)
        ) {

            return false;

        }


        /* TYPE */

        if (
            type !== "any" &&
            food.type !== type
        ) {

            return false;

        }


        /* SPICE */

        if (
            spice !== "any" &&
            food.spice !== spice
        ) {

            return false;

        }


        /* TIME */

        if (
            time !== "any" &&
            food.time > Number(time)
        ) {

            return false;

        }


        return true;

    });


    const resultBox =
        document.getElementById("finderResult");


    if (!resultBox) return;


    if (results.length === 0) {

        resultBox.innerHTML =
            "😔 No food matches all your preferences. Try changing the filters.";

        return;

    }


    resultBox.innerHTML =
        `✨ We found <strong>${results.length}</strong> food items for you!`;

    
    /* SHOW RESULTS IN MENU */

    currentSearch = "";

    showAll = true;


    const grid = document.getElementById("foodGrid");

    const noFood = document.getElementById("noFood");


    if (grid) {

        grid.style.display = "grid";

        grid.innerHTML = results
            .map(food => createFoodCard(food))
            .join("");

    }


    if (noFood) {

        noFood.style.display = "none";

    }


    const count =
        document.getElementById("menuResultCount");

    if (count) {

        count.textContent = results.length;

    }


    document.getElementById("menu").scrollIntoView({

        behavior: "smooth"

    });

}


/* =========================================================
   OFFER BUTTONS
   ========================================================= */

function applyOffer(code) {

    if (code === "FIRST20") {

        appliedCoupon = "FIRST20";

        showToast(
            "20% OFF Applied",
            "Coupon FIRST20 applied to your cart 🎉"
        );

    }

    else if (code === "FREEDELIVERY") {

        appliedCoupon = "FREEDELIVERY";

        showToast(
            "Free Delivery",
            "Free delivery coupon applied 🚴"
        );

    }

    else if (code === "WEEKEND100") {

        appliedCoupon = "WEEKEND100";

        showToast(
            "₹100 OFF Applied",
            "Weekend discount activated 🎁"
        );

    }


    updateCart();

    openCart();

}


/* =========================================================
   COUPON
   ========================================================= */

function applyCoupon() {

    const input =
        document.getElementById("couponInput");


    if (!input) return;


    const code =
        input.value.trim().toUpperCase();


    if (code === "FIRST20") {

        appliedCoupon = "FIRST20";

        showToast(
            "Coupon Applied",
            "20% discount added 🎉"
        );

    }

    else if (code === "FREEDELIVERY") {

        appliedCoupon = "FREEDELIVERY";

        showToast(
            "Coupon Applied",
            "Free delivery activated 🚴"
        );

    }

    else if (code === "WEEKEND100") {

        appliedCoupon = "WEEKEND100";

        showToast(
            "Coupon Applied",
            "₹100 discount added 🎁"
        );

    }

    else {

        appliedCoupon = null;

        showToast(
            "Invalid Coupon",
            "Please try FIRST20 or FREEDELIVERY."
        );

    }


    updateCart();

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function checkout() {

    if (cart.length === 0) {

        showToast(
            "Cart Empty",
            "Please add food before checkout."
        );

        return;

    }


    closeCart();


    renderCheckout();


    const overlay =
        document.getElementById("checkoutOverlay");


    if (overlay) {

        overlay.classList.add("active");

    }


    document.body.classList.add("no-scroll");

}


/* =========================================================
   RENDER CHECKOUT
   ========================================================= */

function renderCheckout() {

    const checkoutItems =
        document.getElementById("checkoutItems");

    const checkoutTotal =
        document.getElementById("checkoutTotal");


    if (!checkoutItems) return;


    let subtotal = 0;


    checkoutItems.innerHTML = "";


    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;


        subtotal += itemTotal;


        checkoutItems.innerHTML += `

            <div class="checkout-summary-item">

                <span>
                    ${item.name} × ${item.quantity}
                </span>

                <strong>
                    ₹${itemTotal}
                </strong>

            </div>

        `;

    });


    let delivery = subtotal >= 299 ? 0 : 40;

    let discount = 0;


    if (appliedCoupon === "FIRST20") {

        discount = Math.round(subtotal * 0.20);

    }

    else if (appliedCoupon === "WEEKEND100") {

        discount = Math.min(100, subtotal);

    }


    if (appliedCoupon === "FREEDELIVERY") {

        delivery = 0;

    }


    const total =
        subtotal + delivery - discount;


    if (checkoutTotal) {

        checkoutTotal.textContent =
            Math.max(0, total);

    }

}


/* =========================================================
   CLOSE CHECKOUT
   ========================================================= */

function closeCheckout() {

    const overlay =
        document.getElementById("checkoutOverlay");


    if (overlay) {

        overlay.classList.remove("active");

    }


    document.body.classList.remove("no-scroll");

}


/* =========================================================
   PLACE ORDER
   ========================================================= */

function placeOrder() {

    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const address =
        document.getElementById("customerAddress").value.trim();


    if (name === "") {

        showToast(
            "Name Required",
            "Please enter your name."
        );

        return;

    }


    if (phone.length < 10) {

        showToast(
            "Invalid Phone",
            "Please enter a valid phone number."
        );

        return;

    }


    if (address === "") {

        showToast(
            "Address Required",
            "Please enter your delivery address."
        );

        return;

    }


    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        );


    if (!payment) {

        showToast(
            "Payment Required",
            "Please select a payment method."
        );

        return;

    }


    const orderNumber =
        "SB-" +
        Math.floor(
            100000 + Math.random() * 900000
        );


    const orderId =
        document.getElementById("orderId");


    if (orderId) {

        orderId.textContent =
            orderNumber;

    }


    closeCheckout();


    const success =
        document.getElementById("successOverlay");


    if (success) {

        success.classList.add("active");

    }


    document.body.classList.add("no-scroll");


    /* CLEAR CART */

    cart = [];

    appliedCoupon = null;

    updateCart();


    /* RESET FORM */

    document.getElementById("customerName").value = "";

    document.getElementById("customerPhone").value = "";

    document.getElementById("customerAddress").value = "";


    showToast(
        "Order Confirmed",
        `Your order ${orderNumber} has been placed! 🎉`
    );

}


/* =========================================================
   CLOSE SUCCESS
   ========================================================= */

function closeSuccess() {

    const success =
        document.getElementById("successOverlay");


    if (success) {

        success.classList.remove("active");

    }


    document.body.classList.remove("no-scroll");

}


/* =========================================================
   FAVORITE
   ========================================================= */

function toggleFavorite(button) {

    button.classList.toggle("active");


    if (button.classList.contains("active")) {

        button.textContent = "♥";

        showToast(
            "Favourite Added",
            "Food added to your favourites ❤️"
        );

    }

    else {

        button.textContent = "♡";

    }

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(title, message) {

    const toast =
        document.getElementById("toast");

    const toastTitle =
        document.getElementById("toastTitle");

    const toastMessage =
        document.getElementById("toastMessage");


    if (!toast) return;


    if (toastTitle) {

        toastTitle.textContent = title;

    }


    if (toastMessage) {

        toastMessage.textContent = message;

    }


    toast.classList.add("show");


    clearTimeout(window.toastTimer);


    window.toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

}


/* =========================================================
   SCROLL FUNCTIONS
   ========================================================= */

function scrollToMenu() {

    document.getElementById("menu").scrollIntoView({

        behavior: "smooth"

    });

}


function scrollToFinder() {

    document.getElementById("finder").scrollIntoView({

        behavior: "smooth"

    });

}


/* =========================================================
   HELPER
   ========================================================= */

function capitalize(text) {

    if (!text) return "";

    return text.charAt(0).toUpperCase() +
        text.slice(1);

}


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeCart();

        closeCheckout();

        closeSuccess();

    }

});