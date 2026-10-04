const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");

let count = 0;
const maxCount = 50;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;
  console.log(name, team);

  if (count < maxCount) {
    count++;
    console.log(count);
    const attendeeCounter = document.getElementById("attendeeCount");
    attendeeCounter.textContent = parseInt(attendeeCounter.textContent) + 1;
  } else {
    form.reset();
    return;
  }

  const percentage = Math.round((count / maxCount) * 100) + "%";
  progressBar.style.width = percentage;

  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  const message = `Welcome, ${name} from ${teamName}!`;
  console.log(message);
  
  greeting.textContent = message;
  greeting.style.display = "block";

  form.reset();
});
