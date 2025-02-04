AOS.init({ offset: 0 });

function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}
function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-400px)";
}
function downloadResume() {
  const fileUrl = "files/Escanlar_Chelsey_Resume.pdf";
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "Escanlar_Chelsey_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  doc;
  ument.body.removeChild(link);
}

function loadContent(page) {
  fetch(page)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Page not found");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("section").innerHTML = data;
    })
    .catch((error) => {
      document.getElementById("section").innerHTML =
        "<h2>Error: Page Not Found</h2>";
    });
}

// Get all navbar links
const navLinks = document.querySelectorAll(".link");

// Add event listener for each link
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // Load the corresponding HTML file
    const page = event.target.dataset.content;
    loadContent(page);

    // Update active link styling
    navLinks.forEach((nav) => nav.classList.remove("active"));
    event.target.classList.add("active");
  });
});

// Load home page content by default
loadContent("home.html");
