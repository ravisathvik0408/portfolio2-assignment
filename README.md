# Interactive Multi-Page Portfolio Website using React

## Project Overview

A responsive multi-page portfolio website built using **React, React Router, JavaScript, and CSS**. The project extends a static portfolio into a Single Page Application (SPA) with reusable components, routing, state management, form validation, and dark/light theme support.

## Features

* Responsive portfolio design
* Dark/Light theme toggle
* React Router navigation
* Dynamic project detail pages
* Reusable React components
* Contact form with validation
* Loading state
* 404 Not Found page
* Responsive design for mobile, tablet, and desktop
* Accessible semantic HTML

## Technologies Used

* React
* JavaScript
* React Router DOM
* HTML5
* CSS3
* Vite
* Node.js & npm

---

## Setup & Run Instructions

### Prerequisites

* Node.js v16 or higher
* npm v7 or higher

### Installation

Clone the repository and navigate to the project folder:

```bash
git clone <your-repository-url>
cd portfolio2-assignment
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

### Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## Component Tree

The application is organized into reusable components and pages:

```text
App
├── Navbar
├── main
│   └── Routes
│       ├── Home
│       ├── About
│       ├── Projects
│       │   └── ProjectCard
│       │       └── TechBadge
│       ├── ProjectDetail
│       ├── Contact
│       └── NotFound
└── Footer
```

### Component Responsibilities

* **App** – Main application component and theme state management.
* **Navbar** – Navigation bar and theme toggle.
* **Home** – Landing page with loading state.
* **About** – Displays profile and skills.
* **Projects** – Displays project cards.
* **ProjectCard** – Reusable component for individual projects.
* **ProjectDetail** – Displays details of a selected project.
* **Contact** – Contact form with validation.
* **NotFound** – Displays a 404 page.
* **Footer** – Common footer across pages.

---

## State Management & State Lifting

### Theme State

The dark/light theme state is **lifted to `App.jsx`** because the theme needs to be shared across multiple components, especially the `Navbar`, while also affecting the entire application.

The selected theme is stored in **localStorage**, so the user's preference remains after refreshing the page.

### Component-Local State

Some states remain inside their respective components because they are not required elsewhere:

* **Home** – Loading state
* **Contact** – Form data and validation errors
* **ProjectCard** – Quick View toggle
* **Navbar** – Window width for responsive behavior

### Prop Drilling

Prop drilling is demonstrated through:

```text
Projects → ProjectCard → TechBadge
```

Project information is passed from the Projects component to ProjectCard and then to TechBadge.

---

## useEffect Hooks Implemented

### 1. Home Page Loading

**File:** `src/pages/Home.jsx`

```javascript
useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 1000);
  return () => clearTimeout(timer);
}, []);
```

**Purpose:** Simulates a loading sequence when the Home page is opened.

**Why necessary:** It demonstrates a side effect that runs when the component is mounted. The cleanup function clears the timer if the component is removed.

---

### 2. Theme Persistence

**File:** `src/App.jsx`

```javascript
useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('app-theme', theme);
}, [theme]);
```

**Purpose:** Applies the selected theme to the application and saves it to localStorage.

**Why necessary:** The effect must run whenever the theme changes so that the UI updates and the user's preference is persisted.

---

### 3. Window Resize Listener

**File:** `src/components/Navbar.jsx`

```javascript
useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);

  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
}, []);
```

**Purpose:** Tracks the browser window width for responsive navigation behavior.

**Why necessary:** The event listener allows the Navbar to respond to changes in screen size. The cleanup function removes the listener when the component unmounts and prevents duplicate listeners or memory leaks.

---

## Routing

The application uses React Router with the following routes:

| Route                  | Component     |
| ---------------------- | ------------- |
| `/`                    | Home          |
| `/about`               | About         |
| `/projects`            | Projects      |
| `/projects/:projectId` | ProjectDetail |
| `/contact`             | Contact       |
| `*`                    | NotFound      |

Navigation is handled using `NavLink` components without full-page reloads.

---

## Accessibility & Responsive Design

* Semantic HTML elements are used.
* Images include alternative text.
* Form labels are associated with their inputs.
* Logical heading hierarchy is maintained.
* Responsive layouts support mobile, tablet, and desktop screens.
* Dark and light themes maintain readable color contrast.

---

## Author

**Ravisathvik**
B.Tech Computer Science and Engineering
National Institute of Technology, Warangal

**Course:** CS1303 - Full Stack Development
