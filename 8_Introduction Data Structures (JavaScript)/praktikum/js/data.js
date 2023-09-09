var rwIndex,
  table = document.getElementById("table");
// click event of submit button
document.getElementById("button-submit").addEventListener("click", (e) => {
  e.preventDefault();
  addTableRow();
});
// click event of edit button
document.getElementById("edit").addEventListener("click", (e) => {
  e.preventDefault();
  editTableSelectedRow();
});
document.getElementById("remove").addEventListener("click", (e) => {
  e.preventDefault();
  removeSelectedRow();
});


//For add row
const addTableRow = () => {
  //get table by using id
  //create new row and cells
  //get value from input text
  //get value into row cell's
  var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    cell5 = newRow.insertCell(4),
    cell6 = newRow.insertCell(5),
    productName = document.getElementById("pname").value.trim(),
    productCategory = document.getElementById("goods").value,
    produtFile = document.getElementById("myfile").value,
    productRadio = document.querySelector(
      'input[name="radio-stacked"]:checked'
    ).value,
    productDesc = document.getElementById("descrip").value,
    productPrice = document.getElementById("price").value;

  cell1.innerHTML = productName;
  cell2.innerHTML = productCategory;
  cell3.innerHTML = produtFile;
  cell4.innerHTML = productRadio;
  cell5.innerHTML = productDesc;
  cell6.innerHTML = productPrice;

  selectedRowToInput();
};

const selectedRowToInput = () => {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      rwIndex = this.rowIndex;
      document.getElementById("pname").value = this.cells[0].innerHTML;
      document.getElementById("goods").value = this.cells[1].innerHTML;
      document.getElementById("myfile").value = this.cells[2].innerHTML;
      document.querySelector('input[name="radio-stacked"]:checked').value =
        this.cells[3].innerHTML;
      document.getElementById("descrip").value = this.cells[4].innerHTML;
      document.getElementById("price").value = this.cells[5].innerHTML;
    };
  }
};
selectedRowToInput();

const editTableSelectedRow = () => {
  var productName = document.getElementById("pname").value.trim(),
    productCategory = document.getElementById("goods").value,
    produtFile = document.getElementById("myfile").value,
    productRadio = document.querySelector(
      'input[name="radio-stacked"]:checked'
    ).value,
    productDesc = document.getElementById("descrip").value,
    productPrice = document.getElementById("price").value;
  table.rows[rwIndex].cells[0].innerHTML = productName;
  table.rows[rwIndex].cells[1].innerHTML = productCategory;
  table.rows[rwIndex].cells[2].innerHTML = produtFile;
  table.rows[rwIndex].cells[3].innerHTML = productRadio;
  table.rows[rwIndex].cells[4].innerHTML = productDesc;
  table.rows[rwIndex].cells[5].innerHTML = productPrice;
};

const removeSelectedRow = () => {
  table.deleteRow(rwIndex);
  //clear input text
  document.getElementById("pname").value = "";
  document.getElementById("goods").value = "";
  document.getElementById("myfile").value = "";
  document.querySelector('input[name="radio-stacked"]:checked').value = "";
  document.getElementById("descrip").value = "";
  document.getElementById("price").value = "";
};
