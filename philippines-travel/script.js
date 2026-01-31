const tourSelect = document.getElementById("tourSelect");
const guestsInput = document.getElementById("guests");
const totalPriceInput = document.getElementById("totalPrice");
const bookingMessage = document.getElementById("bookingMessage");

function calculateTotal() {
  if (!tourSelect.value) {
    totalPriceInput.value = "";
    return;
  }

  const price = parseInt(tourSelect.value.split("|")[1]);
  const guests = parseInt(guestsInput.value);
  const total = price * guests;

  totalPriceInput.value = "₱" + total.toLocaleString();
}

tourSelect.addEventListener("change", calculateTotal);
guestsInput.addEventListener("input", calculateTotal);

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullName").value;
  const tourName = tourSelect.value.split("|")[0];

  bookingMessage.innerText =
    `Thank you, ${name}! Your booking for ${tourName} has been successfully submitted. We will contact you soon.`;

  this.reset();
  totalPriceInput.value = "";
});
