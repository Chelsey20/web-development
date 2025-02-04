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

// Function to update active link styling
function setActiveLink(clickedLink) {
  // Remove active class from all links
  navLinks.forEach((nav) => nav.classList.remove("active"));

  // Add active class to the clicked link
  clickedLink.classList.add("active");
}

// Add event listener for each link
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // Find the nearest `.link` div
    const clickedLink = event.target.closest(".link");

    if (!clickedLink) return; // Prevent errors if clicked outside a link

    // Get the page from the `<a>` inside `.link`
    const page = clickedLink.querySelector("a").dataset.content;

    // Load the content and update active state
    loadContent(page);
    setActiveLink(clickedLink);
  });
});

// Load home page content by default and set Home as active
const defaultPage = "about.html"; // Change this to your home page
loadContent(defaultPage);
setActiveLink(
  document
    .querySelector('.link a[data-content="' + defaultPage + '"]')
    .closest(".link")
);
