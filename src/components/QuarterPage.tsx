import { useState } from 'react';


import QuarterSelector from './QuarterSelector';
import CourseList from './CourseList';


import CourseModal from "./CourseModal";


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
  const [modalOpen, setModalOpen] = useState(false);

  const toggleSelected = (id: string) => {
    setSelectedCourses((prev) => toggleList(id, prev));
  };

  const quarterCourses = Object.fromEntries(
    Object.entries(courses).filter(([_, course]) => course.term === selection)
  );

  return (
    <div>
      <div className="flex justify-between mb-4">
        <QuarterSelector selection={selection} setSelection={setSelection} />
        <button
          onClick={() => setModalOpen(true)}
          className="bg-purple-400 hover:bg-purple-700 text-white font-semibold px-2 py-1"
        >
          View Course Plan
        </button>
      </div>
      <br />

      <div className="mb-4">
      </div>

      <CourseList courses={quarterCourses} selectedCourses={selectedCourses} toggleSelected={toggleSelected}/>
            
      <CourseModal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedCourses={selectedCourses} courses={courses}/>
    </div>
  );
};

export default QuarterPage;
