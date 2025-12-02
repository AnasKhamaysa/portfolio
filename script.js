document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("themeToggle");
  btn.textContent = document.body.classList.contains("dark") ? "🌙" : "🌞";
});

document.querySelectorAll("nav button").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const skills = ["Object oriented programming in JAVA", "HTML", "CSS", "JavaScript", "PHP", "C/C++", "Problem solving", "MySQL"];
const skillsContainer = document.getElementById("skillsContainer");

skills.forEach(skill => {
  const span = document.createElement("span");
  span.textContent = skill;
  skillsContainer.appendChild(span);
});

window.onload = function() {
  document.getElementById("downcv").onclick = downcv;
  document.getElementById("myfacebook").onclick = gofacebook;
  document.getElementById("database").onclick = downdatabase;
  document.getElementById("htmlweb").onclick = downhtml;
  document.getElementById("cssweb").onclick = downcss;
  document.getElementById("phppro").onclick = downphp;
  document.getElementById("jsweb").onclick = downjs;
  document.getElementById("contactForm").onsubmit = submitContactForm;
}

function downcv() {
  window.open("ANAS A A KHAMAYSA.pdf");
}

function gofacebook() {
  window.open("https://www.facebook.com/profile.php?id=100022263947828&mibextid=wwXIfr&rdid=JMktNa5zLsa2phql&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AX5PzZNDa%2F%3Fmibextid%3DwwXIfr#");
}

function downdatabase() {
  window.open("Project.pdf");
}

function downhtml() {
  window.open("htmlWeb.pdf");
}

function downcss() {
  window.open("cssWeb.pdf");
}

function downphp() {
    window.open("2210213581php.pdf");
}

function downjs() {
  window.open("2210213581.pdf");
}

function submitContactForm(event) {
  event.preventDefault();

  const form = document.getElementById("contactForm");
  const formData = new FormData(form);
  const formStatus = document.getElementById("formStatus");

  formStatus.textContent = "Sending your message...";

  fetch("https://2210213581.free.nf/contact.php", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    formStatus.textContent = "Message sent successfully!";
    form.reset();
  })
  .catch(error => {
    formStatus.textContent = "Error sending message.";
    console.error("Error:", error);
  });
}