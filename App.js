import React,{useState} from 'react';
import './App.css';
import Card from './components/Card'

function App() {

    const [name,setName] = useState("Mark Suckerberg");
    const [job,setJob]=useState("CEO META");
    const [about,setAbout]=useState("working in a MNC ..Trying for better career.hbfhirb hiejoej khorhfir");

  return (
    <div className="App">
      <Card name={'Mark Zukerberg'} job={'Facebook'} about={about} />
    </div>
  );
}

export default App;
