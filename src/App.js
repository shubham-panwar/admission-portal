import './App.css';
import AppCard from './components/AppCard';
import CourseCard from './components/CourseCard';

//Add value and data here to pass to props


const applicationDetails =  {
  Title:"B.Tech",
  Duration: '3 yrs | MIT Pune',
  Deadline: 'Last date:  20 April 2022',
  CTA: 'Complete Application',
  Id: 'AP 20987',
  }

const courseDetails =  {
Title:"B.Tech",
Duration: '4 yrs | Manipal, Udipi',
Deadline: 'Last date:  20 April 2022',
CTA: 'Apply',
}

  


function App() {
  return (
    <div className="container">
      <AppCard {...applicationDetails}/>
      <CourseCard  {...courseDetails}/>
    </div>
  );
}

export default App;
