# About This Project 🎮

This web app was created as a personal practice project, inspired by a close friend
who would always drag me along to try out every hyped free-to-play game he could find.

Whether they were hidden gems or complete flops, the thrill of discovering new games
together was always fun. This site is a tribute to that experience—a way to explore
and find free games worth playing.

## Features

- Dynamically fetches and displays an ever-growing collection of free-to-play PC and browser games.
- Powered by the **[FreeToGame API](https://www.freetogame.com/api-doc)**.
- Built with **Vite, React, React Router, Tailwind CSS, and Material Icons** for a clean, fast, and intuitive experience.
- Search for games by name or genre.
- Random game feature—spin the slot machine to discover a new game!

Whether you're looking for a new **MMO**, an **action-packed shooter**, or a **casual game** to kill time, feel free to explore—who knows what you'll find? 🚀

Enjoy the hunt for the next great free-to-play game! 🎮🔥

---

## Featured Game 🖼️

If a game is featured, an image from the API will be displayed dynamically.

**Game in image:**  
🎮 **[${randomGame?.title}](https://www.freetogame.com/game/${randomGame?.id})**  
🖊️ Published by: **${randomGame?.publisher}**

![${randomGame?.title}](randomGame?.thumbnail)

---

## 🛠 Tech Stack

This project is built using:

- ⚡ **Vite**
- ⚛️ **React**
- 🌐 **React Router**
- 🎨 **Tailwind CSS**
- 🔤 **Material Icons**

_Powered by the [FreeToGame API](https://www.freetogame.com/api-doc)_

---

## Installation & Setup

1. Clone the repo:
   ```sh
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
   cd YOUR_REPO
   Install dependencies:
   ```

```
npm install
```

```
npm run dev
```

Open localhost:5173 in your browser.
