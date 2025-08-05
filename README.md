# 📚 Library Management API

A RESTful API for managing a library system, built using **Express**, **TypeScript**, and **MongoDB** (via Mongoose). This backend supports creating, retrieving, updating, deleting books, and borrowing functionality with validations and business rules.

---

## ⚙️ Tech Stack

- **Node.js** + **Express.js**
- **TypeScript**
- **MongoDB** with **Mongoose**
- **Zod** (for schema validation)
- **ESLint + Prettier** (for linting and formatting)
- **dotenv** (for environment variables)
- **CORS**, **Helmet** (for enhanced API security)

---

 

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/library-management-api.git
cd library-management-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root and add:

```env
PORT=5000
DB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/libraryDB
```

---

## 🚀 Run the Server

### Development mode (with hot reload):

```bash
npm run dev
```

### Production build:

```bash
npm run build
npm start
```

---

## 🧪 API Endpoints

### 📘 Books

| Method | Endpoint           | Description           |
|--------|--------------------|-----------------------|
| GET    | `/api/books`       | Get all books         |
| GET    | `/api/book/:id`    | Get single book       |
| POST   | `/api/book`        | Create new book       |
| PUT    | `/api/book/:id`    | Update a book         |
| DELETE | `/api/book/:id`    | Delete a book         |

### 🔄 Borrow

| Method | Endpoint        | Description            |
|--------|-----------------|------------------------|
| POST   | `/api/borrow`   | Borrow a book          |
| GET    | `/api/borrow`   | Get all borrow records |

---

## 🧠 Features

- ✅ Create, read, update, and delete books
- ✅ Borrowing functionality with availability check
- ✅ Zod validation for request data
- ✅ Mongoose middleware and instance/static methods
- ✅ Aggregation pipeline for borrow history

---

## ✅ Scripts

| Script             | Purpose                  |
|--------------------|--------------------------|
| `npm run dev`      | Start dev server         |
| `npm run build`    | Compile TypeScript       |
| `npm start`        | Run compiled JS          |
| `npm run lint`     | Run ESLint check         |
| `npm run lint:fix` | Auto-fix lint issues     |

---

## 🧑‍💻 Author
 Eliash