import CourseCard from "./CourseCard";

type Course = {
  term: string;
  number: string;
  meets: string;
  title: string;
};

type Courses = {
  [id: string]: Course;
}


type CourseListType = {
  courses: Courses;
};

const CourseList = ({ courses }: CourseListType) => (
  <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4 px-4">
    {Object.entries(courses).map(([id, course]) => (
      <CourseCard key={id} course={course} />
    ))}
  </div>
);

export default CourseList;