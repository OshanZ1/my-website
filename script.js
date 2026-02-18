const form = document.querySelector("form");
const emailField = document.querySelector("input[name='email']");

form.addEventListener("submit", function (e) {
  if (!emailField.value.includes("@")) {
    alert("Enter a valid email");
    e.preventDefault();
    return;
  }
});
let submitTimes = [];

function isRateLimited() {
  const now = Date.now();
  submitTimes = submitTimes.filter(time => now - time < 60000);
  if (submitTimes.length >= 3) return true;
  submitTimes.push(now);
  return false;
}
form.addEventListener("submit", (e) => {
  if (isRateLimited()) {
    e.preventDefault();
    alert("Too many submissions. Please wait a minute.");
  }
});

