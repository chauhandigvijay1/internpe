# 🌐 InternPe Internship Projects – Personal & Interactive Portfolio

![React](https://img.shields.io/badge/React-Component%20Library-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Utility--First-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-Testing-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-UI%20Workshop-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-Markup-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Interactivity-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![InternPe](https://img.shields.io/badge/InternPe-5%20Projects-FF9800?style=for-the-badge)
![Netlify](https://img.shields.io/badge/Netlify-Live%20Demos-8E44AD?style=for-the-badge&logo=netlify&logoColor=white)

This repository contains **5 projects** developed during my internship at **InternPe** — 4 built with **HTML, CSS, and JavaScript** and 1 advanced **React component library** built with **Vite, Tailwind CSS, Vitest, and Storybook**.  
Each project reflects my **personal style, creativity, and interactive design approach**.

---

## 🧾 Projects Overview

| Project | Description | Folder Link | 
|---------|-------------|--------|
| **SinghMart** | Modern E-Commerce website with unique personal UI, product listing, categories, cart, and theme toggle. | [SinghMart](https://github.com/chauhandigvijay1/internpe/tree/main/E-Commerce-website) | 
| **TaskVibe** | Custom To-Do List app with personal flavor. Features: add, delete, clear tasks. | [TaskVibe](https://github.com/chauhandigvijay1/internpe/tree/main/To-Do-List) |
| **DigFour** | Connect Four game with dual mode: 2-player local & player vs computer. Features: hover effects, colored discs, win detection. | [Digfour](https://github.com/chauhandigvijay1/internpe/tree/main/Connect-4-game) |
| **Calculator** | Simple calculator with modern UI and smooth interactivity. | [Calculator](https://github.com/chauhandigvijay1/internpe/tree/main/Calculator) | 
| **Aura UI** | Cinematic React component library with glassmorphism, video backgrounds, Storybook docs, and Vitest tests. | [Aura UI](https://github.com/chauhandigvijay1/internpe/tree/main/Aura-UI) | 

---

## 🎯 Features

- Interactive, **fully functional projects**  
- Unique **personal branding** through names and design  
- Modern **UI/UX** with responsive layout  
- Clean and semantic **HTML5 structure**  
- Smooth interactivity using **CSS3 & JavaScript**  
- **Dual-mode gameplay** in DigFour (2-player & vs computer)  
- Cart & theme toggling in SinghCart  
- Task management in TaskVibe  
- Calculation features in Calculator  
- **Glassmorphism design** in Aura UI with `backdrop-blur-md` and custom HSL accents
- **Accessible components** — full keyboard nav, `aria-label`, `aria-pressed`, `focus-ring`
- **Video background** with A11yToggle to pause/resume for vestibular accessibility
- **13 unit tests** passing (Vitest + Testing Library)
- **Storybook** with interactive controls, a11y addon, and auto-generated docs  

---

## 🚀 Live Demos

- 🔗 **SinghMart**: [Live Demo](https://singhmart-internpe.netlify.app/)  
- 🔗 **TaskVibe**: [Live Demo](https://todo-list-internpe.netlify.app/)  
- 🔗 **DigFour**: [Live Demo](https://connect-4-game-internpe.netlify.app/)  
- 🔗 **Calculator**: [Live Demo](https://calculator-internpe.netlify.app/)  
- 🔗 **Aura UI**: [Live Demo](https://aura-ui-client.netlify.app/)  
- 🔗 **Aura UI** (Storybook): [Storybook Demo](https://aura-ui-storybook.netlify.app/)  

💻 **GitHub Repo**: [InternPe Projects](https://github.com/chauhandigvijay1/internpe)

---

## 📂 Folder & Files

- `SinghMart/` → index.html, style.css, script.js  
- `TaskVibe/` → index.html, style.css, script.js  
- `DigFour/` → index.html, style.css, script.js  
- `Calculator/` → index.html, style.css, script.js  
- `Aura-UI/` → Vite + React component library  


| File | Purpose |
|---|---|
| `Aura-UI/src/components/GlassCard.jsx` | Frosted glass card with backdrop blur |
| `Aura-UI/src/components/CinematicButton.jsx` | 3 variants (primary/secondary/ghost) |
| `Aura-UI/src/components/A11yToggle.jsx` | Pause/resume video toggle |
| `Aura-UI/src/components/FloatingInput.jsx` | Floating label input |
| `Aura-UI/src/components/DataWidget.jsx` | KPI card with trend indicator |
| `Aura-UI/src/__tests__/` | Vitest unit tests (13 passing) |
| `Aura-UI/src/stories/` | Storybook stories |
| `Aura-UI/.storybook/` | Storybook config with a11y addon |


![SinghMart Screenshot](https://github.com/chauhandigvijay1/internpe/blob/main/assets/Screenshot1.png)
![TaskVibe Screenshot](https://github.com/chauhandigvijay1/internpe/blob/main/assets/Screenshot2.png)
![DigFour Screenshot](https://github.com/chauhandigvijay1/internpe/blob/main/assets/Screenshot3.png)
![Calculator Screenshot](https://github.com/chauhandigvijay1/internpe/blob/main/assets/Screenshot4.png)

---


## 💻 How to Run Locally


1. Clone the repository:


```bash
git clone https://github.com/YourUsername/InternPe-Projects.git
```


2. Navigate to the project folder you want:


```bash
cd ProjectFolderName
```


3. Open `index.html` in your browser

   For **Aura-UI** (requires Node.js):

   ```bash
   cd Aura-UI
   npm install
   npm run dev        # Dev server at http://localhost:5555
   npm run storybook  # Storybook at http://localhost:6006
   npm test           # Run 13 Vitest unit tests
   ```


---

## 🎨 Personal Touch & Branding


- **Unique project names**: SinghMart, TaskVibe, DigFour, Aura UI
- **Modern UI & interactivity**
- Projects demonstrate **problem-solving, creativity, and learning** during internship
- Clean folder structure and readable code
- Ready to showcase in **portfolio / GitHub profile**


---


## 🔗 Connect with Me


🧑‍💻 [LinkedIn](https://www.linkedin.com/in/digvijaykumarsingh)

💻 [GitHub](https://github.com/chauhandigvijay1)

📧 chauhandigvijay669@gmail.com


---


Made with ❤️ by **Digvijay Singh**  
*Last updated: September 2025*
