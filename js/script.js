let allPrroducts = document.getElementById("products");

let products = [
  {
    id: 1,
    title: "Suede Boots",
    color: "Black",
    imageUrl: "img/prod-1.jpg",
    price: 79.99,
  },
  {
    id: 2,
    title: "Running Shoes",
    color: "White",
    imageUrl: "img/prod-2.jpg",
    price: 90.0,
  },
  {
    id: 3,
    title: "Classic Sneakers",
    color: "Gray",
    imageUrl: "img/prod-3.jpg",
    price: 69.5,
  },
  {
    id: 4,
    title: "Casual Loafers",
    color: "Brown",
    imageUrl: "img/prod-4.jpg",
    price: 85.0,
  },
  {
    id: 5,
    title: "Leather Sandals",
    color: "Tan",
    imageUrl: "img/prod-5.jpg",
    price: 60.0,
  },
  {
    id: 6,
    title: "Slip-on Trainers",
    color: "Blue",
    imageUrl: "img/prod-6.jpg",
    price: 72.0,
  },
  {
    id: 7,
    title: "Walking Shoes",
    color: "Olive",
    imageUrl: "img/prod-7.jpg",
    price: 78.0,
  },
  {
    id: 8,
    title: "Chelsea Boots",
    color: "Beige",
    imageUrl: "img/prod-8.jpg",
    price: 88.0,
  },
  {
    id: 9,
    title: "Hiking Boots",
    color: "Green",
    imageUrl: "img/prod-9.jpg",
    price: 99.0,
  },
  {
    id: 10,
    title: "Sports Shoes",
    color: "Red",
    imageUrl: "img/prod-10.jpg",
    price: 76.0,
  },
  {
    id: 11,
    title: "Casual Trainers",
    color: "White",
    imageUrl: "img/prod-11.jpg",
    price: 65.0,
  },
  {
    id: 12,
    title: "Slip-On Canvas",
    color: "Navy",
    imageUrl: "img/prod-12.jpg",
    price: 58.0,
  },
  {
    id: 13,
    title: "Trail Shoes",
    color: "Brown",
    imageUrl: "img/prod-13.jpg",
    price: 83.0,
  },
  {
    id: 14,
    title: "Classic Leather",
    color: "Dark Brown",
    imageUrl: "img/prod-14.jpg",
    price: 92.0,
  },
  {
    id: 15,
    title: "High Top Sneakers",
    color: "Black/White",
    imageUrl: "img/prod-15.jpg",
    price: 89.0,
  },
  {
    id: 16,
    title: "Winter Boots",
    color: "Gray",
    imageUrl: "img/prod-16.jpg",
    price: 95.0,
  },
  {
    id: 17,
    title: "Mesh Running",
    color: "Lime",
    imageUrl: "img/prod-17.jpg",
    price: 70.0,
  },
  {
    id: 18,
    title: "Trail Runner",
    color: "Orange",
    imageUrl: "img/prod-18.jpg",
    price: 79.99,
  },
  {
    id: 19,
    title: "Leather Oxfords",
    color: "Dark Gray",
    imageUrl: "img/prod-19.jpg",
    price: 91.0,
  },
  {
    id: 20,
    title: "Casual Derby",
    color: "Cream",
    imageUrl: "img/prod-20.jpg",
    price: 85.0,
  },
  {
    id: 21,
    title: "Lace-Up Casual",
    color: "Maroon",
    imageUrl: "img/prod-21.jpg",
    price: 74.0,
  },
  {
    id: 22,
    title: "Formal Leather",
    color: "Brown",
    imageUrl: "img/prod-22.jpg",
    price: 93.0,
  },
  {
    id: 23,
    title: "Air Mesh Trainers",
    color: "White/Blue",
    imageUrl: "img/prod-23.jpg",
    price: 80.0,
  },
  {
    id: 24,
    title: "Gym Sneakers",
    color: "Gray/Black",
    imageUrl: "img/prod-24.jpg",
    price: 82.0,
  },
  {
    id: 25,
    title: "Classic Suede",
    color: "Burgundy",
    imageUrl: "img/prod-25.jpg",
    price: 86.0,
  },
  {
    id: 26,
    title: "Slip-Resistant",
    color: "Black",
    imageUrl: "img/prod-26.jpg",
    price: 77.0,
  },
  {
    id: 27,
    title: "Canvas Plimsolls",
    color: "Sky Blue",
    imageUrl: "img/prod-27.jpg",
    price: 66.0,
  },
  {
    id: 28,
    title: "Athletic Trainers",
    color: "Navy/White",
    imageUrl: "img/prod-28.jpg",
    price: 73.0,
  },
  {
    id: 29,
    title: "Low Top Sneakers",
    color: "Light Gray",
    imageUrl: "img/prod-29.jpg",
    price: 69.0,
  },
  {
    id: 30,
    title: "Basic Trainers",
    color: "Black/Red",
    imageUrl: "img/prod-30.jpg",
    price: 62.0,
  },
  {
    id: 31,
    title: "Urban Sneakers",
    color: "Dark Blue",
    imageUrl: "img/prod-31.jpg",
    price: 87.0,
  },
  {
    id: 32,
    title: "Flexible Walkers",
    color: "Mint",
    imageUrl: "img/prod-32.jpg",
    price: 68.0,
  },
  {
    id: 33,
    title: "Smart Loafers",
    color: "Tan",
    imageUrl: "img/prod-33.jpg",
    price: 90.0,
  },
  {
    id: 34,
    title: "Cool Trainers",
    color: "Black/Gray",
    imageUrl: "img/prod-34.jpg",
    price: 75.0,
  },
  {
    id: 35,
    title: "Grip Sandals",
    color: "Khaki",
    imageUrl: "img/prod-35.jpg",
    price: 64.0,
  },
  {
    id: 36,
    title: "Performance Shoes",
    color: "White/Red",
    imageUrl: "img/prod-36.jpg",
    price: 95.0,
  },
  {
    id: 37,
    title: "Smooth Leather",
    color: "Brown",
    imageUrl: "img/prod-37.jpg",
    price: 88.0,
  },
  {
    id: 38,
    title: "All-Terrain Boots",
    color: "Black",
    imageUrl: "img/prod-38.jpg",
    price: 99.0,
  },
  {
    id: 39,
    title: "Light Trainers",
    color: "Silver",
    imageUrl: "img/prod-39.jpg",
    price: 71.0,
  },
  {
    id: 40,
    title: "Stylish Sneakers",
    color: "Red/White",
    imageUrl: "img/prod-40.jpg",
    price: 80.0,
  },
];

function drowProduct() {
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
        <button class="favorite"><i class="fas fa-heart"></i></button>
      </div>
    </div>

    <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
  </div>
</div>





  `;
  });

  allPrroducts.innerHTML = y.join("");
}

drowProduct();

// ////////////////////////

let badge = document.querySelector(".badge");
let viewProductsdiv = document.getElementById("cart_in");
let addeItem = localStorage.getItem("productInCard")
  ? JSON.parse(localStorage.getItem("productInCard"))
  : [];

if (addeItem) {
  addeItem.map((item) => {
    viewProductsdiv.innerHTML += `<p>${item.title}</p>`;
  });
  badge.style.display = "block";
  badge.innerHTML = addeItem.length;
}

function addToCart(id) {
  let choosItem = products.find((item) => item.id === id);
  viewProductsdiv.innerHTML += `<p>${choosItem.title}</p>`;

  addeItem = [...addeItem, choosItem];
  localStorage.setItem("productInCard", JSON.stringify(addeItem));

  let viewProductsdivP = document.querySelectorAll("#cart_in p");
  badge.innerHTML = viewProductsdivP.length;

  veiwProduct.style.display = "block";
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