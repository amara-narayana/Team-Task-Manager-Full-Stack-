import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          <span>Created by: {project.createdBy?.name || 'Unknown'}</span>
        </div>
        <Link
          to={`/projects/${project._id}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          View Details →
        </Link>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Members: {project.members?.length || 0}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
