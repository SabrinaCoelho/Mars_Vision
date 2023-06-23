import React from 'react'
import axios from 'axios';
import camerasData from './cameras'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  const [formData, setFormData] = React.useState({
    rover: "perseverance",
    camera: "EDL_RUCAM",
    sol: "",
    earthDate: "",
    latest: "",
  });
  const [camerasRover, setCamerasRover] = React.useState(camerasData.perseverance);
  console.log(camerasRover)
  function handleChange({target}){//event
    
    setFormData(prevFormData => {
        const {name, value, type, checked} = target
        console.log(name, value, type, checked)
        const a = {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value
        }
        console.log(a)
        return a
    });
    handleChangeCameras(target.value)
    //console.log(camerasData[formData.rover]);
  }
  function handleChangeCameras(rover){
    setCamerasRover(prev => {
      console.log(prev)
      console.log(camerasData[rover])
      return camerasData[rover]
    });
    console.log(camerasRover)
  }
  function handleAplicar(){
    console.log(formData);
    /* axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${formData.rover}/latest_photos?api_key=DEMO_KEY`)
      .then(res => {console.log(JSON.stringify(res))})
      .catch(err => console.error(err)); */
  }

  return (
    <>
      <Sidebar 
        formDataObj={formData}
        handleChange={handleChange}
        handleAplicar={handleAplicar}
        camerasRover={camerasRover}
      />
    </>
  )
}

export default App
