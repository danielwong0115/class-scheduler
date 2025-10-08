import Modal from "./Modal";

interface Course {
  term: string;
  number: string;
  title: string;
  meets: string;
}

interface CoursePlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourses: string[];
  courses: { [id: string]: Course };
}

const CourseModal = ({ isOpen, onClose, selectedCourses, courses }: CoursePlanModalProps) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div>
            <h2 className="text-xl font-semibold mb-4">Your Course Plan</h2>
            {selectedCourses.length === 0 ? (
                <p>You have not selected any courses yet. Click on the course cards to add them to your plan.</p>
            ) : (
                <ul className="list-disc list-inside">
                    {selectedCourses.map(id => {
                        const course = courses[id];
                        return (<li key={id}>
                            {`CS ${course.number} (${course.term}): ${course.title} - ${course.meets}`}
                        </li>
                        );
                    })}
                </ul>
            )}
        </div>
    </Modal>
);
export default CourseModal;