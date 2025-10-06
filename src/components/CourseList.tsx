import CourseCard from "./CourseCard";

type Course = {
  term: string;
  number: string;
  title: string;
  meets: string;
};

interface CourseListProps {
  courses: { [id: string]: Course };
  selectedCourses: string[];
  toggleSelected: (id: string) => void;
}

const CourseList = ({ courses, selectedCourses, toggleSelected }: CourseListProps) => (
  <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4 px-4">
    {Object.entries(courses).map(([id, course]) => {
      const isSelected = selectedCourses.includes(id);
      return (
        <div key={id} onClick={() => toggleSelected(id)}>
          <CourseCard course={course} selected={isSelected} />
        </div>
      );
    })}
  </div>
);

export default CourseList;