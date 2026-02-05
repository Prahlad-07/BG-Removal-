<div align="center">
  <a href="https://github.com/Prahlad-07/BG-Removal-">
    <img src="https://github.com/Prahlad-07/BG-Removal-/blob/main/BG-Removal-Frontend/src/assets/logo.png?raw=true" alt="Logo" width="100" height="100">
  </a>

  <h1 align="center">BG-Removal</h1>

  <p align="center">
    <strong>AI-Powered Background Removal SaaS Platform</strong>
    <br />
    Remove image backgrounds instantly with enterprise-grade AI technology
    <br />
    <br />
    <a href="https://github.com/Prahlad-07/BG-Removal-/issues">Report Bug</a>
    ·
    <a href="https://github.com/Prahlad-07/BG-Removal-/pulls">Request Feature</a>
  </p>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
</div>

<br />

<div align="center">
  <img src="https://github.com/Prahlad-07/BG-Removal-/blob/main/AboutAppBanner.png?raw=true" alt="Project Banner" width="100%">
</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About

**BG-Removal** is a full-stack SaaS application that removes image backgrounds using AI. Built for scalability and production use, it features secure authentication, payment processing, and a credit-based usage system.

Perfect for e-commerce, content creators, and anyone needing professional image editing at scale.

---

## ✨ Features

- **AI-Powered Removal** - Precision background removal using Clipdrop API
- **Secure Authentication** - User management with Clerk (signup, login, sessions)
- **Payment Integration** - Razorpay gateway for purchasing credits
- **Credit System** - Smart usage tracking and deduction
- **Modern UI** - Responsive design with React and Tailwind CSS
- **Scalable Backend** - Microservice architecture with Spring Boot

---

## 🎨 Demo

See the AI in action with real results from the application:

<table>
  <tr>
    <th>Original Image</th>
    <th>Background Removed</th>
  </tr>
  <tr>
    <td><img src="https://github.com/Prahlad-07/BG-Removal-/blob/main/BG-Removal-Frontend/src/assets/input1.png?raw=true" width="300" /></td>
    <td><img src="https://github.com/Prahlad-07/BG-Removal-/blob/main/BG-Removal-Frontend/src/assets/output1.png?raw=true" width="300" /></td>
  </tr>
  <tr>
    <td><img src="https://github.com/Prahlad-07/BG-Removal-/blob/main/BG-Removal-Frontend/src/assets/input2.png?raw=true" width="300" /></td>
    <td><img src="https://github.com/Prahlad-07/BG-Removal-/blob/main/BG-Removal-Frontend/src/assets/output2.png?raw=true" width="300" /></td>
  </tr>
  <tr>
    <td><img src="https://github.com/Prahlad-07/BG-Removal-/blob/main/BG-Removal-Frontend/src/assets/input3.png?raw=true" width="300" /></td>
    <td><img src="https://github.com/Prahlad-07/BG-Removal-/blob/main/BG-Removal-Frontend/src/assets/output3.png?raw=true" width="300" /></td>
  </tr>
</table>

---

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Clerk React** - Authentication

### Backend
- **Java 17+** - Programming language
- **Spring Boot** - Framework
- **Spring Security** - Security layer
- **Feign Client** - API communication
- **MySQL** - Database

### Third-Party Services
- **Clerk** - Authentication & user management
- **Clipdrop API** - AI background removal
- **Razorpay** - Payment processing

---

## 🏗️ Architecture

The application uses a decoupled client-server architecture with JWT-based authentication and RESTful APIs.

<div align="center">
  <img src="https://github.com/Prahlad-07/BG-Removal-/blob/main/BG-Removal-Frontend/src/assets/Architecture.png?raw=true" alt="Architecture Diagram" width="80%">
</div>

### Project Structure

**Backend**
```
src/main/java/com/bgremoval/
├── client/          # Feign clients for external APIs
├── config/          # Security and CORS configuration
├── controller/      # REST API controllers
├── entity/          # JPA entities
├── security/        # JWT filters & authentication
└── service/         # Business logic
```

**Frontend**
```
src/
├── components/      # Reusable UI components
├── context/         # Global state management
├── pages/           # Application pages
└── assets/          # Images and icons
```

---

## 🚀 Getting Started

### Prerequisites

- Java 17 or higher
- Maven 3.6+
- Node.js 18+
- MySQL 8.0+
- API keys for Clerk, Clipdrop, and Razorpay

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prahlad-07/BG-Removal-.git
   cd BG-Removal-/BG-Removal-Backend
   ```

2. **Configure environment variables**

   Update `src/main/resources/application.properties`:
   ```properties
   # Database
   spring.datasource.url=jdbc:mysql://localhost:3306/bgremoval
   spring.datasource.username=your_username
   spring.datasource.password=your_password

   # Clerk
   clerk.secret.key=your_clerk_secret_key

   # Clipdrop
   clipdrop.api.key=your_clipdrop_api_key

   # Razorpay
   razorpay.key.id=your_razorpay_key_id
   razorpay.key.secret=your_razorpay_secret
   ```

3. **Run the application**
   ```bash
   mvn spring-boot:run
   ```

   Server will start at `http://localhost:8080`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../BG-Removal-Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create `.env` file:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_BACKEND_URL=http://localhost:8080
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   Application will open at `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/image/remove-bg` | Upload image and get result with background removed |
| `GET` | `/api/user/credits` | Get current user's remaining credits |
| `POST` | `/api/order/create` | Create a new Razorpay order for credits |
| `POST` | `/api/webhooks/clerk` | Webhook endpoint for Clerk user sync |

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn and create. All contributions are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Prahlad-07">Prahlad</a>
</p>
