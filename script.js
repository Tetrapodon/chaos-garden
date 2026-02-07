const intro = document.getElementById("intro");
const app = document.querySelector(".app");
const startBtn = document.getElementById("startBtn");

const vinyl = document.getElementById("vinyl");


startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  app.classList.remove("hidden");


  vinyl.style.animationPlayState = "running";
});


/* QUOTES */
const quotes = [
  "Tiny progress is real progress.",
  "You’re allowed to go slow.",
  "Nothing needs to be perfect today.",
  "Gentle days count too.",
  "You don’t have to finish everything.",
  "Some things can wait.",
  "Doing a little is still doing something.",
  "You are not behind.",
  "It’s okay to move quietly through the day.",
  "Rest is not a reward.",
  "Your pace is valid.",
  "Today doesn’t need a headline.",
  "Small care is still care.",
  "You’re doing enough for today.",
  "Not everything needs urgency.",
  "You can leave things unfinished.",
  "Breathing counts as progress.",
  "You’re allowed to pause.",
  "There is no correct speed.",
  "Soft effort still matters.",
  "You don’t owe today productivity.",
  "Existing is already effort.",
  "You’re allowed to choose ease.",
  "Some days are meant to be light.",
  "It’s okay to tend, not conquer.",
  "Slow days grow things too.",
  "You don’t need momentum to begin.",
  "Being gentle is not failing.",
  "Today can be simple.",
  "You can take the long way.",
  "Quiet progress is still progress.",
  "There’s no rush to become.",
  "You don’t need to optimize today.",
  "Small steps still move you.",
  "Not all growth is visible.",
  "Today doesn’t need pressure.",
  "You can start again later.",
  "You’re allowed to drift a little.",
  "Care counts even when unseen.",
  "You’re not wasting time by resting.",
  "Some days are for maintenance.",
  "You can stop before tired.",
  "There’s space to breathe here.",
  "You don’t need permission to go slow.",
  "Gentle effort still builds.",
  "Nothing bad happens if you pause.",
  "Today can just exist.",
  "You don’t have to rush the garden.",
  "Soft days grow roots.",
  "This doesn’t need to be used. It just exists."
];



const quoteEl = document.getElementById("topQuote");

let quoteIndex = new Date().getDate() % quotes.length;
quoteEl.textContent = quotes[quoteIndex];

quoteEl.addEventListener("click", () => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  quoteEl.textContent = quotes[quoteIndex];
});

/* peace */
/* PEACE IMAGES */
const peaceImages = [
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
  "images/6.png",
  "images/7.png",
  "images/8.png",
  "images/9.png",
  "images/10.png",
];

const peaceEl = document.getElementById("peaceImage");
let peaceIndex = 0;

/* Ensure first image shows instantly */
peaceEl.src = peaceImages[peaceIndex];
peaceEl.style.opacity = 1;

/* Rotate images gently */
setInterval(() => {
  peaceIndex = (peaceIndex + 1) % peaceImages.length;
  peaceEl.style.opacity = 0;

  setTimeout(() => {
    peaceEl.src = peaceImages[peaceIndex];
    peaceEl.style.opacity = 1;
  }, 700);
}, 15000);


/* TASKS */
let currentTab = "little";
const taskList = document.getElementById("taskList");

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");
    currentTab = tab.dataset.tab;
    renderTasks();
  });
});

let tasks = {
  little: [],
  norush: [],
  whenever: []
};

function renderTasks() {
  taskList.innerHTML = "";
  tasks[currentTab].forEach((task, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <button class="delete">×</button>
    `;
    li.querySelector(".delete").onclick = () => {
      tasks[currentTab].splice(i, 1);
      renderTasks();
    };
    taskList.appendChild(li);
  });
}

/* MODAL */
const modal = document.getElementById("taskModal");
const taskInput = document.getElementById("taskInput");

document.getElementById("addTaskBtn").onclick = () => {
  modal.classList.remove("hidden");
  taskInput.focus();
};

document.getElementById("cancelTask").onclick = () => {
  modal.classList.add("hidden");
};

document.getElementById("confirmTask").onclick = () => {
  if (taskInput.value.trim()) {
    tasks[currentTab].push(taskInput.value);
    taskInput.value = "";
    modal.classList.add("hidden");
    renderTasks();
  }
};











