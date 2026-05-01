import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            TaskManager
          </Link>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-300">
                  {user.name} ({user.role})
                </span>
                <Link to="/dashboard" className="hover:text-blue-400">
                  Dashboard
                </Link>
                {isAdmin && (
                  <>
                    <Link to="/projects" className="hover:text-blue-400">
                      Projects
                    </Link>
                    <Link to="/tasks" className="hover:text-blue-400">
                      Tasks
                    </Link>
                  </>
                )}
                {!isAdmin && (
                  <Link to="/my-tasks" className="hover:text-blue-400">
                    My Tasks
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-blue-400">
                  Login
                </Link>
                <Link to="/register" className="hover:text-blue-400">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
