function generatePortfolioPreviewHTML({ name, profession, bio, skills, projects }) {
  return `
    <h3>${name}</h3>
    <p><strong>${profession}</strong></p>
    <p>${bio}</p>
    <h4>Skills:</h4>
    <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
    <h4>Projects:</h4>
    <ul>${projects.map(project => `<li>${project.trim()}</li>`).join('')}</ul>
  `;
}

export default generatePortfolioPreviewHTML;