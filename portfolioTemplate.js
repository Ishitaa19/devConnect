function generatePortfolioHTML({ name, profession, bio, skills, projects }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset='UTF-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <title>${name}'s Portfolio</title>
      <style>
        body { font-family: Arial; padding: 2rem; background: #f4f4f4; color: #333; }
        h1 { color: #1e1e2f; }
        ul { padding-left: 1.5rem; }
      </style>
    </head>
    <body>
      <h1>${name}</h1>
      <h3>${profession}</h3>
      <p>${bio}</p>
      <h4>Skills:</h4>
      <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
      <h4>Projects:</h4>
      <ul>${projects.map(project => `<li>${project.trim()}</li>`).join('')}</ul>
    </body>
    </html>
  `;
}

export default generatePortfolioHTML;