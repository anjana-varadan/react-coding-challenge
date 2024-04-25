# react-coding-challenge
# Delivery React Coding Challenge

## Table of Contents
- Goal
- Instructions
- Basic Requirements
- Evaluation Critiera
- Artswork
- Installation
- Technologies Used
- Folder Structure
- Components
- Design Decisions

## 1. Goal

Your goal is to build a react app that displays a list of books. We will provide guidelines and feature requests below, but ultimately the design and functionality of your app is up to you. Keep in mind functionality and code quality is more important than asthetic design.  The code you write should be maintanable and easy to understand.

## 2. Instructions

Please read through the rest of the requirements and additional info before working on your app.

You can use third party libraries, but the more code you write yourself, the better.

You have **1 day** to submit your code, however we want to be respectful of your time and do **not** expect you to work for more than **2 hours** on this challenge.

When you are finished please submit a pull request.

## 3. Basic Requirements

- Create a single page react application using responsive design (the application should render properly on a desktop and mobile device).
- The application should use the [following](https://api.artic.edu/docs/#quick-start) API to retrieve a set of artwork
- The artworks should be listed 10/page with pagination
- Each item title and thumbnail should be clickable to bring up the artwork detail page
- Display details about the item on a separate page and have a back button to return to the list page and display the page the user was on
- List the following items on the detail page: _title,artist_display,date_display,main_reference_number, thubnail, dimensions_
- Implement the ability to search the artwork by title and the ability to filter the results by category
- Document your design decisions
- You can create components from scratch or you can use a component library but the more code you write yourself, the better
- Create a comments form to demonstrate data validation, the form does not need to make an API call to persist the data.
- using TypeScript is a bonus but not required

## Evaluation Criteria

- Understanding of core Javascript concepts
- Optimized and performant code
- Understanding of the React library
- Code and component reuse/extensibility
- Code design
- Ability to write clear documentation


## ARTSWORK

This is a single-page React application built using TypeScript, designed to display artwork retrieved from an API. The application features responsive design, pagination, artwork detail pages, search functionality, filtering by category, and a comments form for feedback.

## Installation
- Prerequisites: Node.js, VS Code
- npm install : To install node modules
- npm start : To start the react application 

## Technologies Used
- React: Used for building the user interface components.
- TypeScript: Provides type safety and enhanced tooling for the application.
- React Bootstrap: Utilized for styling and responsive design.
- React Router DOM: Handles routing between different pages of the application.
- Axios: Used for making HTTP requests to the API.
- useState: Manages state within components.
- useEffect: Handles API calls and other side effects.
- useNavigate: Navigates to different components within the application.

## Folder Structure

### `src/`

This directory contains all the source code for the project.

- `components/`: Contains reusable components used across the application.
- `context/` : contains context to save the page number state 
- `pages/`: Contains the pages of the application.
- `utils/`: Contains utility functions and types used throughout the project.
- `App.tsx`: The main application component that serves as the entry point of the application.

### `public/`

This directory contains public assets used in the project.

- `index.html`: The HTML template file for the application.


## Components
- Header: Navbar component with links to the home page and feedback page.
- Home Page: Displays a list of cards with thumbnails and titles of artworks.
- Artwork Detail Page: Shows detailed information about a selected artwork.
- Comment Form Page: Provides a feedback form for users.
- DisplayCard: Component to display cards with thumbnails and titles.
- Custom Pagination: Component for navigating between pages of artworks.
- Search: Component for searching artworks by title.
- Filter: Component for filtering artworks by category.

## Design Decisions
- Responsive Design: React Bootstrap was chosen for responsive styling to ensure a consistent user experience across different devices.
- Atomic Design Pattern: Components were organized according to the atomic design pattern for better reusability and maintainability.
- Component-Based Architecture: Smaller atomic module components were created to promote reusability and maintainability.
- State Management: useState hook was used for managing component-level state.
- Routing: React Router DOM was employed for handling navigation between different pages of the application.
- API Integration: Axios was chosen for making HTTP requests to retrieve artwork data from the provided API.
