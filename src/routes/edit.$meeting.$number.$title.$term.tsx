
import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router';
import { useForm, type SubmitHandler, type SubmitErrorHandler } from 'react-hook-form';
import { courseResolver, type Course } from '../types/course';
import CourseField from '../components/CourseField';

const CourseEditForm = () => {
  const navigate = useNavigate();
  const { meeting, number, title, term } = useParams({ from: '/edit/$meeting/$number/$title/$term' });

  const defaultValues: Course = {
    title: title ?? `CS ${number}`,
    term: term as Course['term'],
    number: number ?? '',
    meeting: meeting ?? '',
  };

  const { register, handleSubmit, formState } = useForm<Course>({
    defaultValues,
    mode: 'all',
    resolver: courseResolver
  });

  const { errors, isSubmitting } = formState;

  const onSubmit: SubmitHandler<Course> = async () => {
    navigate({ to: '/' });
  };

  const onError: SubmitErrorHandler<Course> = () => {
    alert('Submissions prevented due to form errors');
  };

  const handleCancel = () => {
    navigate({ to: '/' });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Course</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
  <CourseField name="title" label="Course Title" errors={errors} register={register} />
  <CourseField name="term" label="Term (Fall, Winter, Spring)" errors={errors} register={register} />
  <CourseField name="number" label="Course Number" errors={errors} register={register} />
  <CourseField name="meeting" label="Meeting Times" errors={errors} register={register} />
  <div className="flex gap-4 mt-6">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-purple-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export const Route = createFileRoute('/edit/$meeting/$number/$title/$term')({
  component: CourseEditForm,
});
