const projects = [
  {
    title: "Car Insurance MVC Application",
    description: "An ASP.NET MVC application that calculates insurance quotes using Entity Framework and SQL Server.",
    image: "images/carinsurance.png"
  },
  {
    title: "Code‑First Student Database",
    description: "A C# console application using Entity Framework Code‑First to create a SQL database and insert a student.",
    image: "images/project1.png"
  },
  {
    title: "C# Console Practice Projects",
    description: "A collection of console apps built to practice loops, conditionals, classes, and algorithms.",
    image: "images/project2.png"
  }
];

let currentProject = 0;

function showProject() {
  document.getElementById("projectTitle").textContent =
    projects[currentProject].title;

  document.getElementById("projectDescription").textContent =
    projects[currentProject].description;

  document.getElementById("projectImage").src =
    projects[currentProject].image;
}

function nextProject() {
  currentProject++;
  if (currentProject >= projects.length) {
    currentProject = 0;
  }
  showProject();
}

function prevProject() {
  currentProject--;
  if (currentProject < 0) {
    currentProject = projects.length - 1;
  }
  showProject();
}

/* Automatic slideshow every 5 seconds */
setInterval(nextProject, 5000);

/* Contact Form */
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent =
    'Thank you! Your message has been sent.';
});
