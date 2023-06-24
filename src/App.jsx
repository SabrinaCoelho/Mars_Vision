import React from 'react'
import axios from 'axios';
import camerasData from './cameras'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  const key = "PPmxgFa09jTlS90916LFYy5hM7hHLY7WcBTkXga1"
  let buscaPerSol = true;
  const [formData, setFormData] = React.useState({
    rover: "perseverance",
    camera: "EDL_RUCAM",
    perSol: "",
    earthDate: "",
    latest: "",
  });
  const [camerasRover, setCamerasRover] = React.useState(camerasData.perseverance);
  const [imagem, setImagem] = React.useState("");
  const [indexImage, setIndexImage] = React.useState(0)
  //console.log(camerasRover)
  const [manifest, setManifest] = React.useState(() => {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${formData.rover}?api_key=PPmxgFa09jTlS90916LFYy5hM7hHLY7WcBTkXga1`)
      .then(res => {
        console.log(res.data.photo_manifest)
        console.log(res.data.photo_manifest.max_sol)
        return {
          max_sol: res.data.photo_manifest.max_sol, 
          max_date: res.data.photo_manifest.max_date,
          landing_date: res.data.photo_manifest.landing_date
        }
      })
      .catch(err => {
        return {}
      })
  });
  console.log(manifest)
  React.useEffect(() => {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${formData.rover}?api_key=PPmxgFa09jTlS90916LFYy5hM7hHLY7WcBTkXga1`)
    .then(res => {
      console.log(res.data.photo_manifest)
      console.log(res.data.photo_manifest.max_sol)
      setManifest({
        max_sol: res.data.photo_manifest.max_sol, 
        max_date: res.data.photo_manifest.max_date,
        landing_date: res.data.photo_manifest.landing_date
      })
    })
    .catch(err => {
      return setManifest({})
    })
  }, [formData.rover])
  

  function handleChange({target}){//event
    
    setFormData(prevFormData => {
        const {name, value, type, checked} = target
        console.log(name, value, type, checked)
        const a = {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value
        }
        if(name === "earthDate"){
          buscaPerSol = false
        }else{
          buscaPerSol = true
        }
        console.log(a)
        return a
    });
    target.name === "rover" ? updateCameras(target.value) : null 
    //console.log(camerasData[formData.rover]);
  }
  function updateCameras(rover){
    setCamerasRover(prev => {
      return camerasData[rover]
    });
  }
  function updateImage(){
    setIndexImage(prev => prev + 1)
    handleAplicar()
  }
  function handleAplicar(){
    if(buscaPerSol){
      axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${formData.rover}/photos?api_key=${key}&sol=${formData.perSol}&camera=${formData.camera}`)
      .then(res => {
        console.log(res.data.photos)
        setImagem(res.data.photos.length ? res.data.photos[indexImage].img_src : "")
      })
      .catch(err => console.error(err));
    }else{
      axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${formData.rover}/photos?api_key=${key}&earth_date=${formData.earthDate}&camera=${formData.camera}`)
      .then(res => {
        console.log(res.data.photos)
        setImagem(res.data.photos.length ? res.data.photos[indexImage].img_src : "")
      })
      .catch(err => console.error(err));
    }
    
  }
  
  return (
    <div className="app-wrapper">
      <Sidebar 
        formDataObj={formData}
        handleChange={handleChange}
        handleAplicar={handleAplicar}
        camerasRover={camerasRover}
        manifest={manifest}
        imagem={imagem}
        updateImage={updateImage}
      />
    </div>
  )
}

export default App
