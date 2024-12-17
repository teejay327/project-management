
import NewTask from './NewTask.jsx';

const Tasks = ({ onAdd, onDelete, tasks }) => {

  return (
    <section>
    <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
    <NewTask onAdd={ onAdd }/>
    {tasks.length === 0 && (
      <p className="text-stone-800 my-4">This project doesn't have any tasks yet.</p>
    )}
    {tasks.length > 0 && (
      <ul className="bg-stone-100 p-4 mt-8 rounded-md">
        { tasks.map((task) => (
        
        <li key={task.id} className="flex justify-between my-4">
          <span>{ task.test }</span>
          <button className="text-stone-700 hover:text-red-500"
            onClick={() => onDelete(task.id)}
          >
            Clear
          </button>
        </li>
        ))}
      </ul>
    )}
  </section>
  );
}

export default Tasks;