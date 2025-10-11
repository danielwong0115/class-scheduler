import CourseCard from "./CourseCard";

import { hasConflict } from "../utilities/timeConflict";

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
      const validSelected = selectedCourses.filter(selId => courses[selId]);
      const isSelected = selectedCourses.includes(id);

      const disabled = !isSelected && hasConflict(course, validSelected, courses);
      return (
        <div 
          key={id} 
          onClick={() => { if (!disabled) toggleSelected(id);}}
        >
          <CourseCard course={course} selected={isSelected} disabled={disabled} />
        </div>
      );
    })}
  </div>
);

export default CourseList;