type Course = {
  term: string;
  number: string;
  title: string;
  meets: string;
};

type CourseCardProps = {
  course: Course;
};

const CourseCard = ({ course }: CourseCardProps) => (
  <div className="flex flex-col text-left p-4 border-2 border-gray-400 rounded-lg">
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