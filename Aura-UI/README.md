# ✨ Aura UI — Cinematic React Component Library

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Utility--First-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-Testing-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-UI%20Workshop-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![InternPe](https://img.shields.io/badge/InternPe-Project-FF9800?style=for-the-badge)
![Netlify](https://img.shields.io/badge/Netlify-Live%20Demo-8E44AD?style=for-the-badge&logo=netlify&logoColor=white)

A high-performance React component library designed for immersive, video-background applications. Built with **React 18**, **Vite**, **Tailwind CSS**, **Vitest**, and **Storybook**.

---

## ✨ Features

- **Glassmorphism Design** — Frosted glass panels with `backdrop-blur-md` and `bg-slate-900/40`
- **Video Background** — Cinematic looping video with A11yToggle to pause/resume for vestibular accessibility
- **5 Reusable Components** — GlassCard, CinematicButton, A11yToggle, FloatingInput, DataWidget
- **100% WCAG 2.1 AA** — Full keyboard navigation, `aria-label`, `aria-pressed`, visible focus rings
- **13 Unit Tests** — Written with Vitest + Testing Library, all passing
- **Storybook Documentation** — Interactive controls, a11y addon, auto-generated docs
- **Lighthouse 98/100** — Zero CLS, lazy-loaded video, optimized bundle

---

## 🧩 Components

| Component | Description |
|---|---|
| **GlassCard** | Frosted glass panel with backdrop blur and subtle border glow |
| **CinematicButton** | 3 variants (primary / secondary / ghost) with `aria-disabled` |
| **A11yToggle** | Fixed position toggle to pause/resume background video |
| **FloatingInput** | Floating label input with controlled state |
| **DataWidget** | KPI card with trend indicator (up / down / neutral) |

---

## 🚀 Live Demo

- 🔗 **Aura UI App**: [https://aura-ui-client.netlify.app/](https://aura-ui-client.netlify.app/)
- 🔗 **Aura UI Storybook**: [https://aura-ui-client.netlify.app/storybook/](https://aura-ui-client.netlify.app/storybook/)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI framework |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first styling with custom `aura-*` colors |
| **Vitest** | Unit testing with jsdom environment |
| **Storybook 8** | Isolated component development and documentation |

---

## 📂 Project Structure

```
Aura-UI/
├── public/
│   └── mp4asset.mp4           # Cinematic video background
├── src/
│   ├── components/
│   │   ├── GlassCard.jsx       # Frosted glass card
│   │   ├── CinematicButton.jsx # 3-variant button
│   │   ├── A11yToggle.jsx      # Video pause/resume toggle
│   │   ├── FloatingInput.jsx   # Floating label input
│   │   └── DataWidget.jsx      # KPI trend widget
│   ├── __tests__/
│   │   ├── CinematicButton.test.jsx  # 8 tests
│   │   └── A11yToggle.test.jsx       # 5 tests
│   ├── stories/
│   │   ├── CinematicButton.stories.jsx
│   │   └── GlassCard.stories.jsx
│   ├── App.jsx                 # Dashboard layout
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind + glass utilities
├── .storybook/
│   ├── main.js                 # Storybook config
│   └── preview.jsx             # Tailwind import + dark bg
├── .env                        # Environment variables
├── vite.config.js              # Port 5555, Vitest config
├── tailwind.config.js          # Custom aura colors
└── package.json
```

---

## 💻 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/chauhandigvijay1/internpe.git

# Navigate to Aura-UI
cd internpe/Aura-UI

# Install dependencies
npm install

# Start dev server (port 5555)
npm run dev

# Run tests (13 passing)
npm test

# Start Storybook (port 6006)
npm run storybook

# Build for production
npm run build:all
```

---

## 🧪 Testing

- **Framework**: Vitest + @testing-library/react + @testing-library/jest-dom
- **Environment**: jsdom
- **Total tests**: 13 (CinematicButton: 8, A11yToggle: 5)
- **Coverage**: Render, click events, disabled state, ARIA attributes, variant classes, keyboard accessibility

```bash
npm test
```

---

## ♿ Accessibility

- All components are keyboard navigable with visible focus rings
- `A11yToggle` uses `aria-label` and `aria-pressed` for screen readers
- Video background uses `aria-hidden` when paused
- Custom `.focus-ring` utility class with `ring-2 ring-aura-accent`
- Storybook a11y addon shows 0 violations

---

## 📊 Lighthouse Score

| Metric | Score |
|---|---|
| Performance | 98 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
| CLS | 0.00 |

---

## 🚀 Deployment

This project is deployed on **Netlify** with Storybook hosted under the same domain.

### Netlify Settings

| Setting | Value |
|---|---|
| **Build command** | `npm run build:all` |
| **Publish directory** | `dist` |
| **Environment variables** | `VITE_API_URL`, `VITE_APP_NAME`, `VITE_ENV` |

---

## 📬 Connect with Me

🧑‍💻 **Digvijay Singh**  
🔗 [LinkedIn](https://www.linkedin.com/in/digvijaykumarsingh)  
💻 [GitHub](https://github.com/chauhandigvijay1)  
📧 chauhandigvijay669@gmail.com

---

Made with ❤️ by **Digvijay Singh**  
*InternPe Internship Project — September 2025*
