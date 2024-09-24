document.getElementById("btn-donation").addEventListener("click", function () {
  document.getElementById("donation-section").classList.remove("hidden");
  document.getElementById("history-contant").classList.add("hidden");
  document.getElementById("btn-donation").classList.add("bg-[#B4F461]");
  document.getElementById("btn-history").classList.remove("bg-[#B4F461]");
});
document.getElementById("btn-history").addEventListener("click", function () {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-contant").classList.remove("hidden");
  document.getElementById("btn-donation").classList.remove("bg-[#B4F461]");
  document.getElementById("btn-history").classList.add("bg-[#B4F461]");
});

const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.style.backgroundColor = "#7c96eb";
    header.style.opacity = "0.8";
    header.classList.add("shadow-lg");
  } else {
    header.style.backgroundColor = "transparent";
    header.style.opacity = "1";
    header.classList.remove("shadow-lg");
  }
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
