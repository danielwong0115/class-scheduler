type Course = {
  term: string;
  number: string;
  title: string;
  meets: string;
};

interface CourseCardProps {
  course: Course;
  selected?: boolean;
  disabled?: boolean;
}

const CourseCard = ({ course, selected = false, disabled = false }: CourseCardProps) => (
  <div className={`flex flex-col text-left p-4 border-2 rounded-lg h-full
      ${selected ? 'bg-green-200 border-green-400' : disabled ? 'bg-gray-100 border-gray-400 opacity-30 cursor-not-allowed': 'bg-white border-gray-400'}
    `}>
    <h2 className="font-bold">{course.term} CS {course.number}</h2>
    <div className="font-medium">{course.title}</div>

    <br></br>
    <br></br>
    <div className="flex-grow" />
    
    <hr></hr>
    <div className="pb-2">{course.meets}</div>
  </div>
);

export default CourseCard;