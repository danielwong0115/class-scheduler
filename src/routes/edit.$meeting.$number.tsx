import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router'

const CourseEditForm = () => {
  const navigate = useNavigate();
  const { meeting, number } = useParams({ from: '/edit/$meeting/$number' });
  

  const courseTitle = `CS ${number}`;
  const courseMeets = meeting;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Do nothing as per requirements
  };

  const handleCancel = () => {
    navigate({ to: '/' });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Course Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={courseTitle}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="meets" className="block text-sm font-medium mb-2">
            Meeting Times
          </label>
          <input
            type="text"
            id="meets"
            name="meets"
            defaultValue={courseMeets}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export const Route = createFileRoute('/edit/$meeting/$number')({
  component: CourseEditForm,
});
