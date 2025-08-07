let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let registerBtn = document.getElementById("sign_up")
 const toggleBtn = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");



      toggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });


registerBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (username.value === "" || email.value === "" || password.value === "") {
    Swal.fire({
      icon: 'warning',
      title: 'Error',
      text: ' Please enter all data!',
      confirmButtonText: 'Good'
    });
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    Swal.fire({
      icon: 'success',
      title: 'Registration successful',
      showConfirmButton: false,
      timer: 1000
    });

    setTimeout(() => {
      window.location = "login.html";
    }, 1000);
  }
});


let show = document.getElementById('show')


show.addEventListener('click' , () =>{
  password.type = show.checked ? "text"  : "password"
})
