import { useState } from 'react';


import QuarterSelector from './QuarterSelector';
import CourseList from './CourseList';


type Quarter = 'Fall' | 'Winter' | 'Spring';

type Course = {
  term: string;
  number: string;
  title: string;
  meets: string;
};

interface QuarterPageProps {
  courses: { [id: string]: Course };
}

const QuarterPage = ({ courses }: QuarterPageProps) => {
  const [selection, setSelection] = useState<Quarter>('Fall');

  const quarterCourses = Object.fromEntries(
    Object.entries(courses).filter(([_, course]) => course.term === selection)
  );

  return (
    <div>
      <QuarterSelector selection={selection} setSelection={setSelection} />
      <br />
      <CourseList courses={quarterCourses} />
    </div>
  );
};

export default QuarterPage;
