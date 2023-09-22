const images = ["./img/bali.jpg", "./img/banyuwangi.jpg", "./img/malang.jpg"]; // Daftar gambar slideshow
let index = 0;

function changeBackground() {
  index = (index + 1) % images.length;
  const imageUrl = images[index];
  document.getElementById("hero").style.backgroundImage = `url('${imageUrl}')`;
}

// Mengganti gambar latar belakang setiap 5 detik
setInterval(changeBackground, 5000);

document.getElementById("button-submit").addEventListener("click", (e) => {
  e.preventDefault();

  validationForm();
});

//Setting when form is not valid
const setError = (element, pesan) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-form");

  errorDisplay.innerText = pesan;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

//Setting when form is valid
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-form");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

function validationForm() {
  const userName = document.getElementById("nama-user");
  const nameValue = userName.value.trim();
  console.log(nameValue);
  const userEmail = document.getElementById("email-user");
  console.log(userEmail.value);
  const destinationCategory = document.getElementById("destination-user");
  const stringName = /^[^@#\/{}]*$/;
  const stringEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //For Product Name Input
  if (nameValue == "") {
    setError(userName, "Please enter a valid Name");
  } else {
    setSuccess(userName);
  }

  if (nameValue.length > 20) {
    setError(userName, "Name must not exceed 20 characters");
  }

  if (stringName.test(nameValue) !== true) {
    setError(userName, "Name must not contain symbols");
  }

  if (stringEmail.test(userEmail.value) !== true) {
    setError(userEmail, "Please enter a valid Email");
  } else {
    setSuccess(userEmail);
  }

  //For Select Input
  if (destinationCategory.value == "") {
    setError(destinationCategory, "The destination field must be filled in");
  } else {
    setSuccess(destinationCategory);
  }
}
