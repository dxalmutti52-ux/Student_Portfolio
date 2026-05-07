const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built using HTML, CSS, and JavaScript.",
    image: "images/project2.png"
  },
  {
    title: "Academic Cinema",
    description: "A simple website built with HTML and CSS ",
    image: "images/project1.png"
  },
  
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




document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent =
    'Thank you! Your message has been sent.';
});
