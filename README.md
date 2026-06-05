# Ayswariya Mahal - Royal Union Web Application 🏰✨

Welcome to the **Ayswariya Mahal** frontend repository. This project is a premium, ultra-luxury web application built to showcase the heritage, facilities, and booking experience for Ayswariya Mahal's royal celebrations. 

The application focuses heavily on high-end editorial aesthetics, seamless micro-interactions, and a cinematic user experience.

---

## 🚀 Tech Stack

This project leverages a modern, highly-performant frontend stack designed to deliver butter-smooth animations and a robust developer experience.

### Core Architecture
- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/) - For ultra-fast hot module replacement (HMR) and optimized production builds.
- **Routing:** [React Router DOM](https://reactrouter.com/) - For seamless Single Page Application (SPA) navigation.

### Styling & UI
- **CSS Framework:** [Tailwind CSS v4](https://tailwindcss.com/) - Using native CSS variables and `@theme` configurations for our custom royal color palette (`deep-maroon`, `gold-leaf`, `antique-gold`).
- **Icons:** [Lucide React](https://lucide.dev/) - For crisp, consistent SVG iconography.

### Animation Engines
To achieve the luxurious, cinematic feel of the palace, we utilize two powerful animation libraries:
- **Framer Motion:** Used for page transitions, Bento grid scroll reveals, and elegant micro-interactions (e.g., hover states, text fade-ins).
- **GSAP (GreenSock) & ScrollTrigger:** Specifically utilized for complex, timeline-based 3D animations (such as the immersive Royal Gate opening sequence on the Home page).

---

## 📂 Branching Strategy

This repository follows a standard Git Flow to ensure code stability and team collaboration:

### `main` Branch 🟢
- **Purpose:** Production-ready code.
- **Rule:** Do NOT commit directly to `main`. All code merged here must be fully tested, reviewed, and approved via Pull Requests. 

### `develop` Branch 🟡
- **Purpose:** The active integration branch for ongoing development.
- **Rule:** Feature branches are merged here first. Once the `develop` branch reaches a stable milestone, it is merged into `main`.

### Feature Branches 🔵
- **Naming Convention:** `feature/[feature-name]` (e.g., `feature/contact-page`, `feature/gallery-animations`).
- **Workflow:** Developers create these branches off of `develop`. Once the feature is complete, open a Pull Request against the `develop` branch for peer review.

---

## 🛠️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   ```
2. Navigate into the directory:
   ```bash
   cd Client-Ayswariya-Mahal
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
To start the local Vite server:
```bash
npm run dev
```
Navigate to `http://localhost:5173` in your browser to view the application.

---

## 🎨 Design Guidelines
- **Typography:** We use `Playfair Display` (`font-cinzel`) for majestic, editorial headers and `Lora` (`font-body`) for highly readable, elegant body text.
- **Color Palette:** Stick strictly to the defined Tailwind theme colors to maintain the royal aesthetic. Avoid pure blacks and generic blues/reds. Use `#fcf9f4` (surface cream) and `#4A0A12` (deep maroon) as your primary structural anchors.
- **Spacing:** Maintain generous padding and margins. High-end design thrives on "white space" (or in our case, cream space).

---
*Crafted for Royal Unions.*
