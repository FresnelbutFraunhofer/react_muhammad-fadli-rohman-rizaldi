//
//Declaration of form element
const productName = document.getElementById("pname");
const productValue = productName.value.trim();
const productCategory = document.getElementById("goods");
const fileInput = document.getElementById("myfile");
const descriptionInput = document.getElementById("descrip");
const priceInput = document.getElementById("price");

document.getElementById("button-submit").addEventListener("click", (e) => {
  e.preventDefault();

  validateForm();
});

//Setting when form is not valid
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

//Setting when form is valid
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

//Function of validation form
function validateForm() {
  const productValue = productName.value.trim();
  const descriptionValue = descriptionInput.value.trim();
  const stringProduct = /^[^@#\/{}]*$/;

  //For Product Name Input
  if (productValue == "") {
    setError(productName, "Please enter a valid Product name");
  } else {
    setSuccess(productName);
  }

  if (productValue.length > 25) {
    setError(productName, "Last Name must not exceed 25 characters");
  }

  if (stringProduct.test(productValue) !== true) {
    setError(productName, "Name must not contain symbols");
  }

  //For Description Input
  if (descriptionValue === "") {
    setError(descriptionInput, "Please enter a valid description Product name");
  } else {
    setSuccess(descriptionInput);
  }

  //For Select Input
  if (productCategory.value == "") {
    setError(productCategory, "The product category field must be filled in");
  } else {
    setSuccess(productCategory);
  }

  //For Price Input
  if (priceInput.value == "") {
    setError(priceInput, "The product price field must be filled in");
  } else {
    setSuccess(priceInput);
  }

  // For File Input
  const filePath = fileInput.value;
  const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
  if (!allowedExtensions.exec(filePath)) {
    setError(fileInput, "Your file is not in the correct format");
  } else {
    setSuccess(fileInput);
  }

  if (filePath == "") {
    setError(fileInput, "The image of product field must be filled in");
  } else {
    setSuccess(fileInput);
  }

  const radioInput = document.querySelector(
    'input[name="radio-stacked"]:checked'
  );
  const errorMsg = document.getElementById("error-msg");
  if (!radioInput) {
    errorMsg.innerHTML = "The image of product field must be filled in";
  } else {
    errorMsg.style.display = "none";
  }

  const checkInput = document.querySelector('input[name="validCheck"]:checked');
  const errorMessage = document.getElementById("feedback");
  if (!checkInput) {
    errorMessage.innerHTML = "You must agree before submitting";
  } else {
    errorMessage.style.display = "none";
  }

  if (
    productValue !== "" &&
    descriptionValue !== "" &&
    allowedExtensions.exec(filePath) &&
    priceInput.value !== "" &&
    radioInput &&
    checkInput
  ) {
    alertSuccess(
      productValue,
      productCategory.value,
      filePath,
      radioInput.value,
      descriptionValue,
      priceInput.value
    );
  }
}

const alertSuccess = (name, category, image, freshness, desc, price) => {
  var modal = document.getElementById("alert-success");
  var dataName = document.getElementById("data-name");
  var dataCategory = document.getElementById("data-category");
  var dataImage = document.getElementById("data-image");
  var dataFreshness = document.getElementById("data-freshness");
  var dataDesc = document.getElementById("data-description");
  var dataPrice = document.getElementById("data-price");

  modal.style.display = "block";
  dataName.textContent = name;
  dataCategory.textContent = category;
  dataImage.textContent = image;
  dataFreshness.textContent = freshness;
  dataDesc.textContent = desc;
  dataPrice.textContent = price;
};
