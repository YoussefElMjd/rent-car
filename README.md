# Rental Car Application

Welcome to the Rental Car Application! This web application allows users to browse and rent cars for various durations. Whether you're planning a trip or just need a temporary ride, our platform has you covered.

## Accessing the Web Application

### Online Demo

You can access the online demo of the application at the following URL:

[http://18.130.236.198:90](http://18.130.236.198:90/)

### Local Development

#### Without Docker

If you prefer to run the application locally without Docker, follow the steps below:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/YoussefElMjd/rent-car.git
   cd rent-car
   ```

2. **Backend Setup:**
   - Navigate to the backend directory:
     ```bash
     cd backend/src/main/java/com/rentalcaremirats/app
     ```
   - Run the Spring Boot application using your preferred IDE.

3. **Frontend Setup:**
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Build the frontend:
     ```bash
     npm run build
     ```
   - Start the frontend server:
     ```bash
     npm run start
     ```

4. **Access the Application:**
   Open your browser and navigate to [http://localhost:9000](http://localhost:9000) to access the locally running instance of the application.

#### With Docker

If you prefer to run the application locally using Docker, follow the steps below:

1. **Pull Backend Docker Image:**
   - Pull the backend Docker image from Docker Hub:
     ```bash
     docker pull youssefelmajdoul/rentcaremirats-backend
     ```
   - Run the backend Docker container:
     ```bash
     docker run -p 8080:8080 youssefelmajdoul/rentcaremirats-backend
     ```

2. **Pull Frontend Docker Image:**
   - Pull the frontend Docker image from Docker Hub:
     ```bash
     docker pull youssefelmajdoul/rentcaremirats-frontend
     ```
   - Run the frontend Docker container:
     ```bash
     docker run -p 9000:9000 youssefelmajdoul/rentcaremirats-frontend
     ```
3. **Access the Application:**
   Open your browser and navigate to [http://localhost:9000](http://localhost:9000) to access the locally running instance of the application.

## Features

- Browse a catalog of available cars.
- View details and specifications for each car.
- Rent a car for a specified duration.

## Technologies Used

- Frontend: React, Next.js, Chakra UI
- Backend: Spring Boot (Java)
- Database: MySQL
- State Management: Redux
- Styling: CSS, styled-components
- Deployment: AWS
- Language: TypeScript
- ORM: Hibernate

## Contributing

If you'd like to contribute to the development of this application, please follow our [contribution guidelines](CONTRIBUTING.md).

## Issues and Feedback

If you encounter any issues or have feedback, please [open an issue](https://github.com/YoussefElMjd/rent-car/issues) on our GitHub repository.

Happy renting!

