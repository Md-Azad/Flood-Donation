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
