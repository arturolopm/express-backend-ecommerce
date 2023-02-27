# E-commerce Back-end using Express and MongoDB
This is the back-end repository for an e-commerce project built with Express and MongoDB. The project uses the MERN (MongoDB, Express, React, Node.js) stack and communicates with the front-end through REST APIs. It also uses JWT for authentication.

## Prerequisites
Before running this project, make sure you have the following installed:

Node.js
npm or yarn
MongoDB
Installation

Clone the repository: git clone https://github.com/arturolopm/express-backend-ecommerce.git
Navigate to the project directory:


cd express-backend-ecommerce
Install the dependencies:


npm install # or yarn install


Note: for testing purposes, I have provided testing keys in the .env file on purpose so if you don't want or don´t need to understand Paypal and MongoDB you can run the project. However, I strongly recommend that you replace them with your own keys if you want to use this project in production.

## Run the development server:


npm run dev # or yarn dev
Open your browser and navigate to http://localhost:5000 to see the application.

## Features
This e-commerce project has the following features:

User authentication (login and registration) using JWT.
Product listing, creation, deletion and updating.
Shopping cart functionality using sessions.
Checkout process with payment integration (e.g., Paypal).
Order history and order details.
User profile management (e.g., address, payment methods).
Technologies used
Express
MongoDB
JWT
Mongoose
Paypal
Front-end repository
The front-end repository for this project is available at https://github.com/arturolopm/ReactEcommerce.

## License
This project is licensed under the MIT License.
