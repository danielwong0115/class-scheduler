import Banner from './components/Banner';
import QuarterPage from './components/QuarterPage';
import { useJsonQuery } from './utilities/fetch';
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

  const [json, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <p>Error loading course data: {`${error}`}</p>;
  if (isLoading) return <p>Loading courses...</p>;
  if (!json) return <p>No courses found</p>;

  const schedule = json as Schedule;

  return (
    <div className='pl-2'>

      <Banner title={schedule.title} />                                                                                                                                                                                                                                                                                                
      <br></br>                                                                                               
      <QuarterPage courses={schedule.courses} />
    </div>
  )
}

export default App