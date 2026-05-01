import StatusBadge from './StatusBadge';

const TaskCard = ({ task, onUpdate }) => {
  const isOverdue = new Date(task.deadline) < new Date() && task.status !== 'done';

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition ${isOverdue ? 'border-l-4 border-red-500' : ''}`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
        <StatusBadge status={task.status} />
      </div>
      
      <p className="text-gray-600 mb-4">{task.description}</p>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Project:</span>
          <span className="text-gray-800 font-medium">{task.project?.title || 'Unknown'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Assigned to:</span>
          <span className="text-gray-800 font-medium">{task.assignedTo?.name || 'Unknown'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Deadline:</span>
          <span className={`${isOverdue ? 'text-red-600 font-semibold' : 'text-gray-800'}`}>
            {new Date(task.deadline).toLocaleDateString()}
          </span>
        </div>
      </div>

      {onUpdate && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <label className="text-sm text-gray-600 block mb-2">Update Status:</label>
          <select
            value={task.status}
            onChange={(e) => onUpdate(task._id, { status: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
