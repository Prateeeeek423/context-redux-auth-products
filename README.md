# Context API & Redux Toolkit – Authentication and Products Application

## Overview
This project is a React application that demonstrates state management using **Context API** and **Redux Toolkit**.  
The authentication logic is handled using Context API, while product and cart state management are implemented using Redux Toolkit.

This project is created as part of a Full Stack Development / React experiment.

---

## Features

### Authentication Module (Context API)
- Login and Logout functionality
- Stores authentication state (`isLoggedIn`)
- Stores current user name, role, and token
- Provides authentication data globally using Context API

### Product Module (Redux Toolkit)
- Add products (Admin only)
- Remove products (Admin only)
- Display product list dynamically

### Cart Module (Redux Toolkit)
- Add products to cart (User only)
- View cart items

### Role-Based Access Control
- **Admin**:
  - Can add products with custom names
  - Can delete products
- **User**:
  - Can view products
  - Can add products to cart
- UI updates dynamically based on the user role stored in AuthContext

---

## Technologies Used
- React
- Vite
- JavaScript
- Context API
- Redux Toolkit
- CSS

---

## Project Structure



src/
├── components/
│ ├── Login.jsx
│ ├── ProductList.jsx
│ └── Cart.jsx
├── context/
│ └── AuthContext.jsx
├── redux/
│ ├── store.js
│ ├── productsSlice.js
│ └── cartSlice.js
├── App.jsx
├── main.jsx
└── index.css





---


---

## How to Run the Project Locally

1. Clone the repository:
```bash
git clone https://github.com/Prateeeeek423/context-redux-auth-products.git
Navigate into the project directory:

cd context-redux-auth-products
Install required dependencies:

npm install
Start the development server:

npm run dev
Open the browser and visit:

http://localhost:5173
