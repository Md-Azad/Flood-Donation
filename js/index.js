document.getElementById("btn-donation").addEventListener("click", function () {
  document.getElementById("donation-contant").classList.remove("hidden");
  document.getElementById("history-contant").classList.add("hidden");
  document.getElementById("btn-donation").classList.add("bg-[#B4F461]");
  document.getElementById("btn-history").classList.remove("bg-[#B4F461]");
});
document.getElementById("btn-history").addEventListener("click", function () {
  document.getElementById("donation-contant").classList.add("hidden");
  document.getElementById("history-contant").classList.remove("hidden");
  document.getElementById("btn-donation").classList.remove("bg-[#B4F461]");
  document.getElementById("btn-history").classList.add("bg-[#B4F461]");
});

const cards = document.querySelectorAll(".donation-contant");

cards.forEach((card) => {
  const eventCurrentAmount = card.querySelector(".event-donation");
  const userInputValue = card.querySelector(".input-value");
  const btnDonate = card.querySelector(".btn-donate");

  btnDonate.addEventListener("click", function () {
    const donation = validateUserInput(userInputValue.value);
    const mainBalance = balance();
    updateEventDonationAmount(mainBalance, donation, eventCurrentAmount);
  });
});
