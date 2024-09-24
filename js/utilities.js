function balance() {
  const currentBalance = document.getElementById("balance").innerText;
  const convertedBalance = parseFloat(currentBalance);
  return convertedBalance;
}

function validateUserInput(amount) {
  //   if (isNaN(amount)) {
  //     alert("please Provide a valid amount");

  //     return;
  //   }
  const convertedAmount = parseFloat(amount);

  //   if (convertedAmount <= 0) {
  //     alert("You can not donate this amount money!");

  //     return 0;
  //   }
  return convertedAmount;
}
function updateMainBalance(remainingBalance) {
  document.getElementById("balance").innerText = remainingBalance;
  document.getElementById("modal").classList.remove("hidden");
}

function updateEventDonationAmount(mainBalance, donation, currentBalance) {
  const findAmount = currentBalance.innerText;
  const convertCurrentValueIntoNumber = parseFloat(findAmount);
  if (donation > mainBalance) {
    alert("You do not have suffecient balance!");
  } else {
    const total = convertCurrentValueIntoNumber + donation;
    currentBalance.innerText = total;
    const remainingBalance = mainBalance - donation;
    updateMainBalance(remainingBalance);
  }
}
