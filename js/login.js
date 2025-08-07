let username = document.getElementById("username")
let password = document.getElementById("password")
let loginBtn = document.getElementById("sign_in")

let getUserName = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

   const menuBtn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");




       menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });


loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (username.value === "" || password.value === "") {
    Swal.fire({
      icon: 'warning',
      title: 'Missing Information',
      text: 'Please fill in all fields!',
      confirmButtonText: 'OK'
    });
  } else {
    if (getUserName.trim() === username.value.trim() && getPassword === password.value) {
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        showConfirmButton: false,
        timer: 1000
      });

      setTimeout(() => {
        window.location = "index.html";
      }, 1000);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Username or password is incorrect!',
        confirmButtonText: 'Try Again'
      });
    }
  }
});

let show = document.getElementById('show')


show.addEventListener('click' , () =>{
  password.type = show.checked ? "text"  : "password"
})
