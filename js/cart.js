let getCart = localStorage.getItem("productInCard");
let allPrroducts = document.getElementById("products");

if (getCart) {
  let item = JSON.parse(getCart);
  drowProduct(item);
}

function drowProduct(products) {
  if (products.length === 0) {
    allPrroducts.innerHTML = `<p class="text-center text-gray-500 col-span-full">Your cart is empty.</p>`;
    return;
  }

  let y = products.map((item) => {
    return `
<div class="flex flex-wrap justify-center gap-6 p-6" data-aos="fade-up">
  <div class="product-card w-full sm:w-[280px] md:w-[260px] transition-transform duration-300 hover:scale-[1.02]">
    
    <div class="product-image">
      <img src="${item.imageUrl}" alt="" />
    </div>

    <div class="product-info">
      <h3>${item.title}</h3>
      <p>Color: <span>${item.color}</span></p>
      <div class="price-fav">
<span class="price">${item.price}</span>
      </div>
    </div>

    <button class="add-to-cart-2" onclick="Remove(${item.id})">Remove Frome Cart</button>
  </div>
</div>





  `;
  });

  allPrroducts.innerHTML = y.join("");
}

function Remove(id) {
  let cartItems = JSON.parse(localStorage.getItem("productInCard")) || [];
  let updatedCart = cartItems.filter((item) => item.id !== id);

  localStorage.setItem("productInCard", JSON.stringify(updatedCart));
  drowProduct(updatedCart);

  Swal.fire({
    icon: "success",
    title: "Product Removed!",
    showConfirmButton: false,
    timer: 1200,
    toast: true,
    position: "top-end",
  });
}



  window.onscroll = function () {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.classList.remove("hidden");
    } else {
      btn.classList.add("hidden");
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }