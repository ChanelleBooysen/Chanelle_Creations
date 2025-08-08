// modal.js

// Open image modal
function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

// Close image modal
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Optional: Close modal on outside click
window.onclick = function(event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
