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

const toggleList = <T,>(x: T, lst: T[]): T[] =>
  lst.includes(x) ? lst.filter((y) => y !== x) : [...lst, x];

const QuarterPage = ({ courses }: QuarterPageProps) => {
  const [selection, setSelection] = useState<Quarter>('Fall');
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const toggleSelected = (id: string) => {
    setSelectedCourses((prev) => toggleList(id, prev));
  };

  const quarterCourses = Object.fromEntries(
    Object.entries(courses).filter(([_, course]) => course.term === selection)
  );

  return (
    <div>
      <QuarterSelector selection={selection} setSelection={setSelection} />
      <br />

      <div className="mb-4">
        <h2 className="text-lg font-semibold">
          Selected Courses:{' '}
          {selectedCourses.length === 0
            ? 'None'
            : selectedCourses.map(id => `CS ${courses[id].number}(${courses[id].term})`).join(', ')}
        </h2>
      </div>

      <CourseList courses={quarterCourses} selectedCourses={selectedCourses} toggleSelected={toggleSelected}/>
    </div>
  );
};

export default QuarterPage;
