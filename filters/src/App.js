import  DegreeFilterCard  from "./components/DegreeFilterCard";
import  CoursesFilterCard  from "./components/CoursesFilterCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

function App() {
  const data = [
    {
      name: 'Computer Science',
      id: '1',
      isPicked: false,
      courses:['Intro To CS', 'Data Structures', 'Design Of Algorithms']
    },
    {
      name: 'Psychology',
      id: '2',
      isPicked: false,
      courses:['Statistics', 'Behavioral Psychology', 'Regression']
    },
    {
      name: 'Physics',
      id: '3',
      isPicked: false,
      courses:['Quantum Mechanics', 'Electricity', 'General Relativity']
    },
    {
      name: 'Biology',
      id: '4',
      isPicked: false,
      courses:['The Cell', 'Biochemistry', 'Organic Chemistry']
    },
  ]

  let courseList = [];

  const [coursesToShow, setCoursesToShow] = useState([])

  return (
    <div>
      <DegreeFilterCard 
      data={data} 
      handlePick={(courses) => setCoursesToShow(courses)}
      />
      <CoursesFilterCard courses={coursesToShow} />
    </div>
  );
}

export default App;
