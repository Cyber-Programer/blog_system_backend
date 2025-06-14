# 📝 Blog API Documentation

---

## 🚀 Features

- User registration and login with JWT authentication
- CRUD operations on blogs (Create, Read, Update, Delete)
- Authorization: only blog owners can update/delete their blogs
- MongoDB database with Mongoose ODM
- Express.js backend REST API
- Password hashing with bcryptjs
- Environment variables via dotenv

---

## 📁 Folder Structure
```bash
blog_api/
├── config/ # Configuration (e.g., DB connection)
├── controllers/ # Request handlers for auth and blog
├── middlewares/ # Middleware (e.g., authentication)
├── models/ # Mongoose models (User, Blog)
├── routes/ # Express routes for auth and blogs
├── utils/ # Utility functions (e.g., JWT token generator)
├── .env # Environment variables (not committed)
├── .gitignore # Files to ignore in git
├── package.json # Project dependencies and scripts
├── README.md # Project documentation
└── server.js # Entry point for the Express server
```


---

## ⚙️ Setup and Installation

1. Clone the repository:

```bash
git clone https://github.com/Cyber-Programer/blog_system_backend.git
cd blog_system_backend
```

2. Install dependenice
   ```bash
    npm install
   ```
3. Run the server
   ```bash
   npm run dev
   ```
# 📚 API Documentation
Base URL: `http://localhost:5000/api`

## Auth Routes

| Method | Endpoint         | Description         | Body                            | Response               |
| ------ | ---------------- | ------------------- | ------------------------------- | ---------------------- |
| POST   | `/auth/register` | Register a new user | `{ username, email, password }` | `{ token: JWT_TOKEN }` |
| POST   | `/auth/login`    | Login user          | `{ email, password }`           | `{ token: JWT_TOKEN }` |



# 📝 Blog Routes
Note: All blog routes (except GET) require Authorization header with a valid JWT.
| Method | Endpoint     | Description           | Body                   | Response                      |
| ------ | ------------ | --------------------- | ---------------------- | ----------------------------- |
| GET    | `/blogs`     | Get all blogs         | None                   | Array of blogs                |
| POST   | `/blogs`     | Create a new blog     | `{ title, content }`   | Created blog object           |
| PUT    | `/blogs/:id` | Update a blog (by ID) | `{ title?, content? }` | Updated blog object           |
| DELETE | `/blogs/:id` | Delete a blog (by ID) | None                   | `{ message: "Blog deleted" }` |


