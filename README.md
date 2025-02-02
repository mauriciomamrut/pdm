# Patient Data Management

This project was created as part of a technical test in the Light It recruitment process.

## Local Development Setup

1. Clone the repository

2. Install dependencies

bash
yarn install

3. Start the development server

bash
yarn dev

4. Open the application in your browser

The app will open at [http://localhost:3000](http://localhost:3000) in your browser.

## Technologies Used

- **React** - required by the challenge
- **TypeScript** - required by the challenge
- **@mui/icons-material** - used for adding icons throughout the app
- **@tanstack/react-query** - used for handling API data fetching with improved caching and state management
- **react-hook-form** - utilized for form handling, allowing for easy validation and submission
- **zod** - used to ensure data entered by users is correct and complete
- **react-hot-toast** - used for showing notifications to the user, indicating success or failure of actions

## Design Decisions

### Folder Structure

To maintain a clean, scalable, and easily maintainable project, I adopted a modular folder structure. Here's a brief overview of the organization:

- **views** - Contains the main view component separated from its building blocks. This separation ensures that the view focuses on composition and layout while delegating specific functionality to individual components.

- **components** - Reusable UI elements are placed in this folder. This promotes reusability, reduces duplication of code, and ensures that any common UI changes are easier to manage.

- **services** - Contains all the API-related logic for handling external data requests.

- **hooks** - Custom React hooks allows the application to maintain logic consistency, avoid redundancy, and simplify code readability.

- **assets** - All static assets such as images, fonts, and styles are organized in this folder.

By following this structure, the project is easier to navigate and maintain as it grows. The goal is to follow best practices for code separation and reuse, enhancing collaboration and scalability for future development.
