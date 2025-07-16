# AquaeImpact Resource Web App

This project is a React + Vite web application for AquaeImpact, featuring a modern Resources page with a custom layout, navigation, and styled components.

## Features
- **Resources Page**: Displays a visually appealing section with a heading and a grid of 6 green blog cards.
- **Navigation Bar**: Includes links to Home, Who We Are, What We Do, Resources, and Green Credits.
- **Custom Components**: Uses reusable Button and Card components styled with Tailwind CSS.
- **Responsive Layout**: The layout is designed to be visually attractive and easy to modify.

## How to Run the Project

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure
- `src/App.jsx`: Main component rendering the Resources page and layout.
- `src/components/ui/button.jsx`: Custom Button component.
- `src/components/ui/card.jsx`: Custom Card and CardContent components.
- `src/index.css`, `tailwind.config.js`: Styling and Tailwind CSS configuration.

## Customization
- To change the blog cards, edit the `blogCards` array in `src/App.jsx`.
- To update navigation or footer links, modify the respective arrays in `src/App.jsx`.

---

This project was bootstrapped with [Vite](https://vitejs.dev/) and uses [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/).
