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
