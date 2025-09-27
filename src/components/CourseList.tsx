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

const CourseList = ({courses}: CourseListType) => (
  <div>
    { Object.entries(courses).map(([id, course]) => <div key={id}>{course.term} CS {course.number}: {course.title}</div>) }
  </div>
);

export default CourseList;