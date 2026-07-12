# Vestil_internRepo3

Internship Section

## Practice Section

This line was added to test branching and pull requests.

## README.md (On the practice react folder/repo)

# React + Tailwind CSS Setup (v3)

## Setup Steps

1. Create a new React project:
   ```bash
   npx create-react-app my-app-v4
   cd my-app-v4
   ```

## Install Tailwind CSS v3 and dependencies:

npm install -D tailwindcss@3 postcss autoprefixer

## Initialize Tailwind config:

npx tailwindcss init -p
This creates tailwind.config.js and postcss.config.js.

## Configure tailwind.config.js:

module.exports = {
content: ["./src/**/*.{js,jsx,ts,tsx}"],
theme: { extend: {} },
plugins: [],
};

## Add Tailwind directives to src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

## Run the project:

npm start

## Verification test:

  <h1 className="text-4xl font-bold text-blue-500">
  Tailwind v3 is working!
</h1>
