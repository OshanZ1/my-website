

function getGreetingByHour(hour) {
  if (hour >= 5 && hour < 12) return "Good Morning!";
  if (hour >= 12 && hour < 17) return "Good Afternoon!";
  if (hour >= 17 && hour < 21) return "Good Evening!";
  return "Good Night!";
}

function showGreetingOncePerSession() {
  // Prevent annoying popups on every page click
  if (sessionStorage.getItem("lab6_greeted") === "yes") return;

  const now = new Date();
  const greeting = getGreetingByHour(now.getHours());
  alert(greeting);

  sessionStorage.setItem("lab6_greeted", "yes");
}

function startLiveClock() {
  const clockEl = document.getElementById("liveClock");
  if (!clockEl) return; // only runs on pages that have the clock element

  const tick = () => {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");
    clockEl.textContent = `${h}:${m}:${s}`;
  };

  tick();
  setInterval(tick, 1000);
}

function wireContactFormConsoleOutput() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName")?.value ?? "";
    const email = document.getElementById("email")?.value ?? "";
    const reason = document.getElementById("reason")?.value ?? "";
    const message = document.getElementById("message")?.value ?? "";
    const confirm = document.getElementById("confirmInfo")?.checked ?? false;

    console.log("=== LAB 6: CONTACT FORM VALUES ===");
    console.log("Name:", fullName);
    console.log("Email:", email);
    console.log("Reason:", reason);
    console.log("Message:", message);
    console.log("Confirmed:", confirm);
  });
}

function applyOneProfessionalAnimation() {
  // Add .show to elements that should fade in
  document.querySelectorAll(".fade-in").forEach((el) => el.classList.add("show"));
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully.");

  // Lab 6 requirements
  showGreetingOncePerSession();
  startLiveClock();
  wireContactFormConsoleOutput();
  applyOneProfessionalAnimation();
});
