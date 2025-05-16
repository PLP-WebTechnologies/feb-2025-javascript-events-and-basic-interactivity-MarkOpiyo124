// Event Handling 🎈
document.getElementById("magic-btn").addEventListener("click", () => {
  document.body.style.backgroundColor = "#fef3c7";
  document.getElementById("magic-btn").textContent = "You clicked me! 🎉";
});

document.getElementById("hover-text").addEventListener("mouseover", () => {
  document.getElementById("hover-text").textContent = "Nice hover! 🪄";
});

document.getElementById("keypress-box").addEventListener("keypress", (e) => {
  console.log("Key pressed:", e.key);
});

document.getElementById("secret-btn").addEventListener("dblclick", () => {
  alert("Secret unlocked! 🕵️‍♂️");
});

// Tabs 🎮
const tabs = document.querySelectorAll(".tab-link");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(tc => tc.style.display = "none");
    document.getElementById(tab.dataset.tab).style.display = "block";
  });
});

// Image Slider 🎮
const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3"
];
let currentImg = 0;
function nextImage() {
  currentImg = (currentImg + 1) % images.length;
  document.getElementById("slider").src = images[currentImg];
}

// Form Validation 📋✅
const form = document.getElementById("register-form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page refresh

  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  let isValid = true;

  if (!email.includes("@")) {
    document.getElementById("email-feedback").textContent = "❌ Invalid email format.";
    isValid = false;
  } else {
    document.getElementById("email-feedback").textContent = "";
  }

  if (pass.length < 8) {
    document.getElementById("pass-feedback").textContent = "❌ Password must be at least 8 characters.";
    isValid = false;
  } else {
    document.getElementById("pass-feedback").textContent = "";
  }

  if (isValid) {
    alert("✅ Form submitted successfully!");
  }
});

// Real-time Feedback 📢
document.getElementById("password").addEventListener("input", () => {
  const pass = document.getElementById("password").value;
  const feedback = document.getElementById("pass-feedback");
  if (pass.length >= 8) {
    feedback.textContent = "✅ Good password!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Too short";
    feedback.style.color = "red";
  }
});
