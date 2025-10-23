import Banner from './components/Banner';
import QuarterPage from './components/QuarterPage';
import { useDbData } from './utilities/firebase';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

interface Course {
  term: string;
  number: string;
  title: string;
  meets: string;
}

interface Schedule {
  title: string;
  courses: {[id: string]: Course};
}


const App = () => {

  const [data, isLoading, error] = useDbData('/');

  if (error) return <p>Error loading course data: {error.message}</p>;
  if (isLoading) return <p>Loading courses...</p>;
  if (!data) return <p>No courses found</p>;

  const schedule = data as Schedule;

  return (
    <div className='pl-2'>

      <Banner title={schedule.title} />                                                                                                                                                                                                                                                                                                
      <QuarterPage courses={schedule.courses} />
    </div>
  )
}

export default App