# Productivity Dashboard

A single-page productivity dashboard built with plain HTML, CSS, and JavaScript. It combines small daily-use tools into one workspace so a user can manage tasks, plan the day, stay motivated, track focused work, and check the weather without leaving the page.

## Live Features

This project includes the following sections:

- Dashboard navigation
- Todo list
- Daily planner with 24-hour slots
- Motivation quote
- Pomodoro timer with work/break cycling
- Weather widget
- Live date and time display
- Dynamic background based on the time of day
- Light and dark theme switch with saved preference
- Daily goals tracker

## What the App Does

The dashboard follows a simple flow:

1. The main dashboard opens first.
2. The user clicks a feature card.
3. That feature opens in a full view.
4. The user interacts with the tool.
5. The app saves the data when needed.
6. The user can return to the dashboard and open another tool.

This structure keeps the interface clean while still letting each feature work as its own mini app.

## How the Project Is Built

### `index.html`

Contains the page structure, dashboard cards, widgets, and full-screen feature sections.

### `style.css`

Controls the layout, colors, spacing, theme styles, card styling, and responsive design.

### `script.js`

Handles all behavior, including navigation, storage, timers, API requests, and live updates.

## Features in Detail

### 1. Dashboard Navigation

The dashboard is the home screen and the traffic controller for the whole app. It shows each feature as a card and opens the selected feature without reloading the page.

### 2. Todo List

Users can add tasks, mark them as important, edit them, complete them, and delete them. The list is saved in Local Storage so tasks remain after refresh.

### 3. Daily Planner

The planner provides a full 24-hour set of time slots. Users can write notes or plans for each slot, and the entries stay saved in Local Storage as they type.

### 4. Motivation Quote

The quote card fetches a fresh quote from a public API. It also shows loading and error states so the interface does not break if the request fails.

### 5. Pomodoro Timer

The timer counts down from a work session length, then automatically switches to a break session. The user can start, pause, or reset the cycle.

### 6. Weather Widget

The weather widget uses the Geolocation API when possible and falls back to a default city if location access is denied. It fetches live weather data from Open-Meteo.

### 7. Date and Time

The dashboard always shows the current date and a live clock. The time updates every second.

### 8. Dynamic Background

The background changes based on the current time of day, which makes the app feel more alive and contextual.

### 9. Theme Switch

Users can toggle between light and dark mode. The selected theme is saved in Local Storage and restored before the page visibly renders, which avoids a flash of the wrong theme.

### 10. Daily Goals

Users can add small goals for the day, mark them as completed, and track progress with a completion counter.

## Browser Features Used

- **Local Storage** for todo tasks, planner entries, goals, and theme preference
- **Fetch API** for the quote and weather data
- **setInterval** for the live clock and Pomodoro countdown
- **Date Object** for date formatting, time display, and background changes
- **Geolocation API** for location-based weather loading

## Project Structure

```text
index.html
style.css
script.js
README.md
```

## How to Run

1. Open the project folder in VS Code.
2. Launch `index.html` in a browser.
3. Use the dashboard cards to open each feature.

Because this is a front-end project, no build step or package install is required.

## Notes on the Implementation

- Feature views are hidden until the user opens them.
- The code uses shared helper functions for storage, formatting, and rendering.
- Todo tasks and daily goals reuse the same local storage pattern.
- The planner and theme are restored automatically from saved data.
- The app is designed to work as a small single-page productivity tool rather than a multi-page site.

## Learning Outcome

This project is useful for practicing:

- DOM manipulation
- Event handling
- Dynamic rendering
- Local Storage
- API integration
- Timer logic
- Theme systems with CSS variables
- Time-based UI behavior

## Suggested Next Improvements

- Add icons or illustrations to the dashboard cards
- Add editing support for todo items and goals
- Add a break session to the Pomodoro timer
- Replace the default weather fallback city with a user setting
- Add animations when feature views open and close

## Current Design Direction

The current visual direction is intentionally darker and more polished:

- Dark mode uses deep backgrounds and white text
- Cards use subtle gradients instead of flat fills
- The interface keeps contrast strong and readable across panels
