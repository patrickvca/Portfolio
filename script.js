const tabButtons = document.querySelectorAll(".tab-button");
const certificateCards = document.querySelectorAll(".certificate-card");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal img");
const modalClose = document.querySelector(".modal-close");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    tabButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    certificateCards.forEach((card) => {
      const shouldShow = filter === "todos" || card.dataset.category === filter;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

certificateCards.forEach((card) => {
  card.addEventListener("click", () => {
    const image = card.dataset.full;
    const label = card.querySelector("img").alt;

    modalImage.src = image;
    modalImage.alt = label;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});
