import type { Course } from '../types/course';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

interface CourseFieldProps {
  name: keyof Course;
  label: string;
  errors: FieldErrors<Course>;
  register: UseFormRegister<Course>;
  type?: string;
  options?: string[];
}

const CourseField = ({ name, label, errors, register, type = 'text' }: CourseFieldProps) => (
  <label>
    <p className="text-lg">{label}{errors[name] && (
      <span className="text-sm inline-block pl-2 text-red-400 italic">{errors[name]?.message as string}</span>
    )}</p>
    <input type={type} {...register(name)}
  className={`w-full border ${errors[name] ? 'border-red-500' : 'border-gray-300'} p-2 rounded`} />
  </label>
);

export default CourseField;
