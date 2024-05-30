# Courses Website

**Courses Website** is a React application that allows users to browse various online courses, search for them, view details, and add or remove them from their favorites. The application also features both dark and light themes.

## Table of Contents
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Components](#components)
- [Routing](#routing)
- [Data Management](#data-management)
- [Styling](#styling)

## Demo

Check out the online demo of the website: [Courses Website Demo](https://sd-0224.github.io/Shaheera-Sarama-React/).

## Getting Started

To get started with the Courses Website, follow these steps:

1. Clone the repository on your desktop:

    ```bash
    git clone https://github.com/SD-0224/Shaheera-Sarama-React
    ```

2. Navigate to the project directory:

    ```bash
    cd firstProject
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

## Usage

Once the development server is running, you can access the Courses Website in your browser at `http://localhost:3000`. From there, you can browse courses, view course details, search for courses and add your favorite ones. 

## Components

The Courses Website consists of several components that are used throughout the application. Here are some of the main components:

- **Shared and reusable components throughout the application:**
  - **Header component:** Contains the navigation.
  - **Shapes component:** Contains the shapes used in the website.
  - **Layout container:** Contains the HTML elements.
  - **Stars component:** Responsible for returning the UI rating for courses.
  - **Footer:** Contains the footer content.
  - **Fav components:** Contains the favorite courses section, which is shared throughout the whole application.

- **Pages components which contain the pages in the website:**
  - **Home page component:** Contains the home page content, which includes:
    - **Search component:** Responsible for the search feature.
    - **Select component:** Responsible for the select element.
    - **Course:** Displays a list of available courses.
    - **Card:** Represents a single course card with course details.
  - **Details component:** Contains the details page content.
    - **CourseDetails:** Shows detailed information about a specific course.
   
## Routing

The application uses React Router for client-side routing. Here are the main routes:

- `/`: Home page displaying a list of courses.
- `/details/:id`: Detailed view of a specific course.

## Data Management

The Courses Website manages course data using React State, Context API, and makes API calls to retrieve course information from a backend server.

## Styling

Styling is achieved using CSS modules and styled-components to create a cohesive and visually appealing user interface.

## Additional Resources
*Api Links:*
- https://tap-web-1.herokuapp.com/topics/list
- https://tap-web-1.herokuapp.com/topics/details/1
- https://tap-web-1.herokuapp.com/topics/list?phrase=

## Contact

For any inquiries or feedback, feel free to reach out via email at shaheerasarama@gmail.com.

