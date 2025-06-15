// script.js
function openProductModal(productId) {
  document.getElementById(productId).style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.style.display = "none";
  });
  document.body.style.overflow = "auto";
}

window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}