const STORAGE_KEYS = {
  theme: "productivity-dashboard-theme",
  todos: "productivity-dashboard-todos",
  planner: "productivity-dashboard-planner",
  goals: "productivity-dashboard-goals",
};

const DEFAULT_POMODORO_SECONDS = 25 * 60;
const DEFAULT_BREAK_SECONDS = 5 * 60;
const PLANNER_HOURS = Array.from({ length: 24 }, (_, index) => index);

const appState = {
  activeView: null,
  todos: loadJSON(STORAGE_KEYS.todos, []),
  planner: loadJSON(STORAGE_KEYS.planner, {}),
  goals: loadJSON(STORAGE_KEYS.goals, []),
  timerSeconds: DEFAULT_POMODORO_SECONDS,
  timerPhase: "work",
  timerId: null,
  quoteController: null,
};

const dashboard = document.getElementById("dashboardHome");
const themeToggle = document.getElementById("themeToggle");
const dateDisplay = document.getElementById("dateDisplay");
const timeDisplay = document.getElementById("timeDisplay");
const weatherLocation = document.getElementById("weatherLocation");
const weatherIcon = document.getElementById("weatherIcon");
const weatherSummary = document.getElementById("weatherSummary");
const weatherDetails = document.getElementById("weatherDetails");
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const plannerGrid = document.getElementById("plannerGrid");
const goalForm = document.getElementById("goalForm");
const goalInput = document.getElementById("goalInput");
const goalList = document.getElementById("goalList");
const goalsProgress = document.getElementById("goalsProgress");
const timerDisplay = document.getElementById("timerDisplay");
const timerLabel = document.getElementById("timerLabel");
const timerStatus = document.getElementById("timerStatus");
const timerStart = document.getElementById("timerStart");
const timerPause = document.getElementById("timerPause");
const timerReset = document.getElementById("timerReset");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const quoteButton = document.getElementById("quoteButton");

const featureViews = document.querySelectorAll(".feature-view");
const featureCards = document.querySelectorAll(".feature-card");
const backButtons = document.querySelectorAll("[data-back-button]");

applySavedTheme();
renderTodos();
renderPlanner();
renderGoals();
updateTimerDisplay();
updateDateTime();
updateWeatherFromLocation();
setInterval(updateDateTime, 1000);
setInterval(updateDynamicBackground, 60 * 1000);
updateDynamicBackground();

featureCards.forEach((card) => {
  card.addEventListener("click", () => openFeature(card.dataset.featureTarget));
});

backButtons.forEach((button) => {
  button.addEventListener("click", closeFeature);
});

themeToggle.addEventListener("click", toggleTheme);

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = todoInput.value.trim();

  if (!text) {
    todoInput.focus();
    return;
  }

  appState.todos.unshift({
    id: crypto.randomUUID(),
    text,
    important: false,
    completed: false,
  });

  todoInput.value = "";
  saveJSON(STORAGE_KEYS.todos, appState.todos);
  renderTodos();
});

todoList.addEventListener("click", handleTodoAction);

goalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = goalInput.value.trim();

  if (!text) {
    goalInput.focus();
    return;
  }

  appState.goals.unshift({
    id: crypto.randomUUID(),
    text,
    completed: false,
  });

  goalInput.value = "";
  saveJSON(STORAGE_KEYS.goals, appState.goals);
  renderGoals();
});

goalList.addEventListener("click", handleGoalAction);

plannerGrid.addEventListener("click", (event) => {
  const target = event.target.closest("button[data-action='clear-planner']");
  if (!target) {
    return;
  }

  const hour = target.dataset.hour;
  delete appState.planner[hour];
  saveJSON(STORAGE_KEYS.planner, appState.planner);
  renderPlanner();
});

plannerGrid.addEventListener("input", (event) => {
  const input = event.target.closest("input[data-hour]");
  if (!input) {
    return;
  }

  const hour = input.dataset.hour;
  const value = input.value.trim();

  if (value) {
    appState.planner[hour] = value;
  } else {
    delete appState.planner[hour];
  }

  saveJSON(STORAGE_KEYS.planner, appState.planner);
});

timerStart.addEventListener("click", startTimer);
timerPause.addEventListener("click", pauseTimer);
timerReset.addEventListener("click", resetTimer);
quoteButton.addEventListener("click", fetchQuote);

window.addEventListener("storage", (event) => {
  if (event.key === STORAGE_KEYS.theme) {
    applySavedTheme();
  }
});

function openFeature(viewId) {
  if (appState.activeView === viewId) {
    return;
  }

  dashboard.classList.add("hidden");
  featureViews.forEach((view) => {
    view.hidden = view.id !== viewId;
  });
  appState.activeView = viewId;
}

function closeFeature() {
  featureViews.forEach((view) => {
    view.hidden = true;
  });
  dashboard.classList.remove("hidden");
  appState.activeView = null;
}

function handleTodoAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }

  const id = button.dataset.id;
  const todo = appState.todos.find((item) => item.id === id);
  if (!todo) {
    return;
  }

  switch (button.dataset.action) {
    case "toggle-important":
      todo.important = !todo.important;
      break;
    case "toggle-complete":
      todo.completed = !todo.completed;
      break;
    case "edit": {
      const nextText = window.prompt("Edit task", todo.text);
      if (nextText === null) {
        return;
      }

      const trimmedText = nextText.trim();
      if (!trimmedText) {
        return;
      }

      todo.text = trimmedText;
      break;
    }
    case "delete":
      appState.todos = appState.todos.filter((item) => item.id !== id);
      break;
    default:
      break;
  }

  saveJSON(STORAGE_KEYS.todos, appState.todos);
  renderTodos();
}

function handleGoalAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }

  const id = button.dataset.id;

  if (button.dataset.action === "delete") {
    appState.goals = appState.goals.filter((goal) => goal.id !== id);
  } else if (button.dataset.action === "toggle-complete") {
    const goal = appState.goals.find((item) => item.id === id);
    if (goal) {
      goal.completed = !goal.completed;
    }
  }

  saveJSON(STORAGE_KEYS.goals, appState.goals);
  renderGoals();
}

function renderTodos() {
  if (!appState.todos.length) {
    todoList.innerHTML = `<li class="task-item"><p class="task-item__text">No tasks yet. Add the first one above.</p></li>`;
    return;
  }

  todoList.innerHTML = appState.todos
    .map(
      (todo) => `
        <li class="task-item" data-id="${todo.id}">
          <div>
            <p class="task-item__text ${todo.completed ? "is-complete" : ""} ${todo.important ? "is-important" : ""}">${escapeHTML(todo.text)}</p>
          </div>
          <div class="task-actions">
            <button type="button" data-action="toggle-important" data-id="${todo.id}">${todo.important ? "Unmark important" : "Important"}</button>
            <button type="button" data-action="toggle-complete" data-id="${todo.id}">${todo.completed ? "Undo" : "Complete"}</button>
            <button type="button" data-action="edit" data-id="${todo.id}">Edit</button>
            <button type="button" data-action="delete" data-id="${todo.id}">Delete</button>
          </div>
        </li>
      `
    )
    .join("");
}

function renderPlanner() {
  const currentHour = new Date().getHours();

  plannerGrid.innerHTML = PLANNER_HOURS.map((hour) => {
    const label = formatHour(hour);
    const savedValue = appState.planner[String(hour)] ?? "";

    return `
      <div class="planner-row ${hour === currentHour ? "is-current" : ""}">
        <div class="planner-time">${label}</div>
        <input
          class="planner-entry"
          data-hour="${hour}"
          type="text"
          placeholder="Plan for ${label}"
          value="${escapeAttribute(savedValue)}"
        />
        <button type="button" data-action="clear-planner" data-hour="${hour}">Clear</button>
      </div>
    `;
  }).join("");
}

function renderGoals() {
  const completed = appState.goals.filter((goal) => goal.completed).length;
  goalsProgress.textContent = `${completed} of ${appState.goals.length} completed`;

  if (!appState.goals.length) {
    goalList.innerHTML = `<li class="task-item"><p class="task-item__text">No goals yet. Add one to start tracking progress.</p></li>`;
    return;
  }

  goalList.innerHTML = appState.goals
    .map(
      (goal) => `
        <li class="task-item" data-id="${goal.id}">
          <p class="task-item__text ${goal.completed ? "is-complete" : ""}">${escapeHTML(goal.text)}</p>
          <div class="task-actions">
            <button type="button" data-action="toggle-complete" data-id="${goal.id}">${goal.completed ? "Undo" : "Done"}</button>
            <button type="button" data-action="delete" data-id="${goal.id}">Delete</button>
          </div>
        </li>
      `
    )
    .join("");
}

function updateDateTime() {
  const now = new Date();

  dateDisplay.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  timeDisplay.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function updateDynamicBackground() {
  const hour = new Date().getHours();
  document.body.classList.remove("theme-morning", "theme-afternoon", "theme-evening", "theme-night");

  if (hour >= 5 && hour < 12) {
    document.body.classList.add("theme-morning");
  } else if (hour >= 12 && hour < 17) {
    document.body.classList.add("theme-afternoon");
  } else if (hour >= 17 && hour < 21) {
    document.body.classList.add("theme-evening");
  } else {
    document.body.classList.add("theme-night");
  }
}

function applySavedTheme() {
  const savedTheme = window.localStorage.getItem(STORAGE_KEYS.theme) || document.documentElement.dataset.theme || "dark";
  const resolvedTheme = savedTheme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.style.colorScheme = resolvedTheme;
  themeToggle.setAttribute("aria-pressed", String(resolvedTheme === "dark"));
  themeToggle.querySelector(".theme-toggle__label").textContent = resolvedTheme === "dark" ? "Dark" : "Light";
}

function toggleTheme() {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.style.colorScheme = nextTheme;
  window.localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
  themeToggle.setAttribute("aria-pressed", String(nextTheme === "dark"));
  themeToggle.querySelector(".theme-toggle__label").textContent = nextTheme === "dark" ? "Dark" : "Light";
}

function startTimer() {
  if (appState.timerId) {
    return;
  }

  timerStatus.textContent = appState.timerPhase === "work" ? "Focus time is running." : "Take your break.";
  appState.timerId = window.setInterval(() => {
    if (appState.timerSeconds <= 0) {
      switchTimerPhase();
      return;
    }

    appState.timerSeconds -= 1;
    updateTimerDisplay();

    if (appState.timerSeconds === 0) {
      switchTimerPhase();
    }
  }, 1000);
}

function pauseTimer() {
  if (appState.timerId) {
    window.clearInterval(appState.timerId);
    appState.timerId = null;
  }
}

function resetTimer() {
  pauseTimer();
  appState.timerSeconds = DEFAULT_POMODORO_SECONDS;
  appState.timerPhase = "work";
  timerLabel.textContent = "Work Session";
  timerStatus.textContent = "25 minutes of focus, then a 5 minute break.";
  updateTimerDisplay();
}

function switchTimerPhase() {
  appState.timerPhase = appState.timerPhase === "work" ? "break" : "work";
  appState.timerSeconds = appState.timerPhase === "work" ? DEFAULT_POMODORO_SECONDS : DEFAULT_BREAK_SECONDS;
  timerLabel.textContent = appState.timerPhase === "work" ? "Work Session" : "Break Session";
  timerStatus.textContent = appState.timerPhase === "work" ? "Break complete. Back to focus." : "Work session complete. Take a short break.";
  updateTimerDisplay();
}

function updateTimerDisplay() {
  timerDisplay.textContent = formatDuration(appState.timerSeconds);
}

async function fetchQuote() {
  if (appState.quoteController) {
    appState.quoteController.abort();
  }

  appState.quoteController = new AbortController();
  quoteText.textContent = "Loading a fresh quote...";
  quoteAuthor.textContent = "";

  try {
    const response = await fetch("https://api.quotable.io/random", {
      signal: appState.quoteController.signal,
    });

    if (!response.ok) {
      throw new Error("Quote request failed");
    }

    const data = await response.json();
    quoteText.textContent = `“${data.content}”`;
    quoteAuthor.textContent = `- ${data.author}`;
  } catch (error) {
    if (error.name === "AbortError") {
      return;
    }

    quoteText.textContent = "A fresh quote could not be loaded right now. Try again in a moment.";
    quoteAuthor.textContent = "- Quote unavailable";
  }
}

async function updateWeatherFromLocation() {
  if (!navigator.geolocation) {
    await fetchWeather(40.7128, -74.006, "New York");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      await fetchWeather(latitude, longitude, "Your location");
    },
    async () => {
      await fetchWeather(40.7128, -74.006, "New York");
    },
    { timeout: 5000 }
  );
}

async function fetchWeather(latitude, longitude, locationName) {
  weatherLocation.textContent = "Loading weather...";
  weatherSummary.textContent = "Checking conditions...";
  weatherDetails.textContent = "";
  weatherIcon.textContent = "☁";

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code,is_day&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`
    );

    if (!response.ok) {
      throw new Error("Weather request failed");
    }

    const data = await response.json();
    const current = data.current;
    const weatherInfo = weatherCodeToPresentation(current.weather_code, current.is_day);

    weatherLocation.textContent = locationName;
    weatherIcon.textContent = weatherInfo.icon;
    weatherSummary.textContent = `${Math.round(current.temperature_2m)}°F · ${weatherInfo.description}`;
    weatherDetails.textContent = `Feels like ${Math.round(current.apparent_temperature)}°F · Humidity ${current.relative_humidity_2m}% · Wind ${Math.round(current.wind_speed_10m)} mph · Precip ${Number(current.precipitation).toFixed(2)} in`;
  } catch (error) {
    weatherLocation.textContent = locationName;
    weatherIcon.textContent = "—";
    weatherSummary.textContent = "Weather temporarily unavailable";
    weatherDetails.textContent = "Please try again later.";
  }
}

function weatherCodeToPresentation(code, isDay) {
  if (code === 0) return { description: "Clear sky", icon: isDay ? "☀" : "☾" };
  if ([1, 2].includes(code)) return { description: "Partly cloudy", icon: isDay ? "⛅" : "☁" };
  if (code === 3) return { description: "Overcast", icon: "☁" };
  if ([45, 48].includes(code)) return { description: "Fog", icon: "〰" };
  if ([51, 53, 55, 56, 57].includes(code)) return { description: "Drizzle", icon: "☂" };
  if ([61, 63, 65, 66, 67].includes(code)) return { description: "Rain", icon: "🌧" };
  if ([71, 73, 75, 77].includes(code)) return { description: "Snow", icon: "❄" };
  if ([80, 81, 82].includes(code)) return { description: "Showers", icon: "🌦" };
  if ([95, 96, 99].includes(code)) return { description: "Thunderstorm", icon: "⛈" };
  return { description: "Mixed conditions", icon: "◌" };
}

function formatHour(hour) {
  const period = hour >= 12 ? "PM" : "AM";
  const twelveHour = hour % 12 || 12;
  return `${twelveHour.toString().padStart(2, "0")}:00 ${period}`;
}

function formatDuration(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function loadJSON(storageKey, fallbackValue) {
  try {
    const rawValue = window.localStorage.getItem(storageKey);
    return rawValue ? JSON.parse(rawValue) : fallbackValue;
  } catch {
    return fallbackValue;
  }
}

function saveJSON(storageKey, value) {
  window.localStorage.setItem(storageKey, JSON.stringify(value));
}

function escapeHTML(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHTML(value).replaceAll("\n", " ");
}
