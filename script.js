import generatePortfolioHTML from './portfolioTemplate.js';
import generatePortfolioPreviewHTML from './portfolioPreviewTemplate.js';

const form = document.getElementById("portfolioForm");
const preview = document.getElementById("portfolioPreview");
const downloadBtn = document.getElementById("downloadBtn");

let portfolioHTML = '';

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const profession = document.getElementById("profession").value;
  const bio = document.getElementById("bio").value;
  const skills = document.getElementById("skills").value.split(",");
  const projects = document.getElementById("projects").value.split(",");
  portfolioHTML = generatePortfolioHTML({ name, profession, bio, skills, projects });
  preview.innerHTML = generatePortfolioPreviewHTML({ name, profession, bio, skills, projects });
});

downloadBtn.addEventListener("click", () => {
  if (!portfolioHTML) {
    alert("Please generate your portfolio first.");
    return;
  }

  const blob = new Blob([portfolioHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "my-portfolio.html";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});