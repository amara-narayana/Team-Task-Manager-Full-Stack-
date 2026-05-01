# Team Task Manager

A production-ready full-stack web application for managing team projects and tasks. Built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring role-based access control, real-time task tracking, and a responsive UI.

## 🚀 Features

### User Management
- **Authentication**: Secure registration and login with JWT tokens
- **Role-Based Access Control**: 
  - **Admins**: Create projects, add members, assign tasks, view all tasks
  - **Members**: View assigned tasks, update task status

### Project Management
- Create and manage projects
- Add team members to projects
- View project details and associated tasks

### Task Management
- Create tasks with title, description, deadline, and assignee
- Update task status (Todo → In Progress → Done)
- Track overdue tasks automatically
- Filter tasks by status and project

### Dashboard
- Overview of total, completed, pending, and overdue tasks
- Visual status indicators
- Quick access to recent tasks

## 🛠️ Tech Stack

### Frontend
- **React** (Vite) - Fast, modern React setup
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **Context API** - State management

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing

## 📁 Project Structure

```
team-task-manager/
├── server/                 # Backend
│   ├── config/            # Database configuration
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Auth & validation middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── utils/             # Helper functions
│   └── server.js          # Entry point
├── client/                # Frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context providers
│   │   ├── services/      # API service functions
│   │   ├── hooks/         # Custom hooks
│   │   └── App.jsx        # Main app component
│   └── package.json
├── README.md
└── .env.example
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/team-task-manager.git
cd team-task-manager
```

#### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key_here
PORT=5000
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```

#### 3. Frontend Setup

Open a new terminal and navigate to the client directory:
```bash
cd client
npm install
```

Create a `.env` file in the `client` directory:
```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend development server:
```bash
npm run dev
```

#### 4. Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |

### Projects
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/projects` | Create a project (Admin) |
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get project by ID |
| POST | `/api/projects/:id/add-member` | Add member to project (Admin) |

### Tasks
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/tasks` | Create a task (Admin) |
| GET | `/api/tasks` | Get tasks (filtered by user role) |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task (Admin) |

## 🔐 User Roles

### Admin
- Can create and manage projects
- Can add members to projects
- Can create and assign tasks
- Can view all tasks in the system
- Can delete tasks

### Member
- Can view assigned tasks
- Can update task status
- Can view projects they're part of
- Cannot create projects or tasks

## 🎨 UI Components

- **Navbar**: Top navigation with user info and logout
- **Sidebar**: Navigation menu (dashboard, projects, tasks)
- **TaskCard**: Display individual task with status badge
- **ProjectCard**: Display project information
- **StatusBadge**: Visual indicator for task status
- **Modal**: Reusable modal for forms

## 🚀 Deployment

### Backend (Railway)

1. Create a new project on [Railway](https://railway.app)
2. Connect your GitHub repository
3. Set the root directory to `server`
4. Add environment variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your secret key
   - `PORT`: 5000 (or let Railway auto-assign)
5. Deploy

### Frontend (Vercel)

1. Create a new project on [Vercel](https://vercel.com)
2. Connect your GitHub repository
3. Set the root directory to `client`
4. Add environment variable:
   - `VITE_API_URL`: Your Railway backend URL
5. Deploy

### Environment Variables Summary

**Backend (.env)**
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager
JWT_SECRET=super-secret-jwt-key-change-in-production
PORT=5000
NODE_ENV=production
```

**Frontend (.env)**
```env
VITE_API_URL=https://your-railway-app.railway.app/api
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] User registration works with validation
- [ ] Login returns JWT token
- [ ] Protected routes require authentication
- [ ] Admin can create projects
- [ ] Admin can add members to projects
- [ ] Admin can create and assign tasks
- [ ] Members can view assigned tasks
- [ ] Members can update task status
- [ ] Dashboard shows correct statistics
- [ ] Overdue tasks are identified correctly
- [ ] Logout clears authentication

### API Testing with cURL

Register a new user:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123","role":"admin"}'
```

Login:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

Get current user (replace TOKEN with your JWT):
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer TOKEN"
```

## 📝 Validation Rules

- **Email**: Must be valid email format
- **Password**: Minimum 6 characters
- **Task Deadline**: Must be a future date
- **Required Fields**: Name, email, password for auth; title for projects/tasks

## ⚠️ Error Handling

The application includes comprehensive error handling:
- Centralized error middleware on the backend
- Proper HTTP status codes (400, 401, 403, 404, 500)
- User-friendly error messages on the frontend
- Input validation on both client and server

## 🎥 Demo Video

A demo video showcasing the application features is available at:
[Link to Demo Video]

Features demonstrated:
1. User registration and login
2. Project creation by admin
3. Adding members to projects
4. Task creation and assignment
5. Updating task status
6. Dashboard overview with statistics

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- MongoDB for the database
- Vercel and Railway for hosting
- Tailwind CSS for the styling framework
- The open-source community

---

**Built with ❤️ using the MERN Stack**