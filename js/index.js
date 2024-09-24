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
  if (window.scrollY > 70) {
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
    if (userInputValue.value.trim() === "") {
      alert("you can not keep input field empty");
      return;
    }

    const donation = userInputValue.value;
    if (isNaN(donation)) {
      alert("please Provide a valid amount");

      return;
    }
    const makeNumber = parseFloat(donation);
    if (makeNumber <= 0) {
      alert("You can not donate this amount money!");

      return;
    }
    const mainBalance = balance();
    updateEventDonationAmount(mainBalance, makeNumber, eventCurrentAmount);
    userInputValue.value = "";
  });
});

document.getElementById("modal-close").addEventListener("click", function () {
  document.getElementById("modal").classList.add("hidden");
});
