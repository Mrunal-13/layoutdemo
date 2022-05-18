const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.container-1');
// const icon = hamburger.querySelector(".fa-bars") 
hamburger.addEventListener('click', () => {
    navLink.classList.toggle('hide');
}); 

const image_input = document.querySelector("#image_input");
var uploaded_image;
var x = document.querySelector('.container_i');
image_input.addEventListener('change', function() {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = 
      `url(${uploaded_image})`;
    });
  reader.readAsDataURL(this.files[0]);
});
  x.onmouseover = function () { mouseOver() }
  x.onmouseout = function () { mouseOut() }
  
  function mouseOver() {
    x.style.opacity="1";
  }
  function mouseOut() {
    x.style.opacity = '0';
}
  

var modal1 = document.getElementById("modal-container");
var btn = document.getElementById("merge-btn");
var span = document.getElementsByClassName("close")[0];
var section = document.getElementById('section')
btn.onclick = function() {
  modal1.style.display = "block";
 section.style.overflow='hidden'
}
span.onclick = function() {
  modal1.style.display = "none";
  section.style.overflow='scroll'
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
    section.style.overflow='scroll'
  }
}

const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
})

function addTodo(todo) {
  let todoText = input.value
  if (todo) {
    todoText = todo.text
  }
  if (todoText) {
    const todoEl = document.createElement("li")
    if (todo && todo.completed) {
      todoEl.classList.add('completed')
    }
    todoEl.innerText = todoText
    todosUL.appendChild(todoEl)
    input.value=""
  }
}

document.getElementById("add-btn").addEventListener('click', function () {
  var text = document.getElementById('id').value
  JsBarcode("#barcode", text ,{
    height: 35,
    width: 1
  }
  )
}
)

function onScanSuccess(qrMessage) {
    var scanResult = document.getElementById("qr-reader-results")
    scanResult.innerHTML = `Scan result ${qrMessage}`
  }

  function onScanFailure(error) {
    console.warn(`QR error = ${error}`);
  }

  let html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 }, false);
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
 

var btn = document.getElementById('scan')
const scn= document.getElementById('reader')

btn.addEventListener('click', function () {
  const reader = document.getElementById('scn_modal')
  if (reader.style.display !== 'flex') {
    reader.style.display = 'flex'
    section.style.overflow = 'hidden'
  }
  else {
    reader.style.display = 'none'
    section.style.overflow='scroll'
}

})

scn_modal.onclick = function (event) {
  if (event.target == scn_modal) {
  scn_modal.style.display = "none";
  section.style.overflow='scroll'
  }
}

var search_btn = document.getElementById('advnc-search')
search_btn.addEventListener('click', function () {
  const modal_srch = document.getElementById('advance-srch')
  if (modal_srch.style.display !== 'flex') {
    modal_srch.style.display = 'flex'
  }
  else {
    modal_srch.style.display = 'none'
  }
})
