import { Link } from '@tanstack/react-router';

type Course = {
  term: string;
  number: string;
  title: string;
  meets: string;
};

interface CourseCardProps {
  id: string;
  course: Course;
  selected?: boolean;
  disabled?: boolean;
}

const CourseCard = ({ id, course, selected = false, disabled = false }: CourseCardProps) => (
  <div className={`flex flex-col text-left p-4 border-2 rounded-lg h-full
      ${selected ? 'bg-green-200 border-green-400' : disabled ? 'bg-gray-100 border-gray-400 opacity-30 cursor-not-allowed': 'bg-white border-gray-400'}
    `}>
    <div className="flex items-center justify-between">
      <h2 className="font-bold">{course.term} CS {course.number}</h2>
      <Link 
        to="/edit/$meeting/$number/$title/$term" 
        params={{ meeting: course.meets, number: course.number, title: course.title, term: course.term }}
        search={{ id }}
        className="px-2 py-1 text-sm bg-purple-500 text-white rounded"
      >
        Edit
      </Link>
    </div>
    <div className="font-medium">{course.title}</div>

    <br></br>
    <br></br>
    <div className="flex-grow" />
    
    <hr></hr>
    <div className="pb-2">{course.meets}</div>
  </div>
);

export default CourseCard;