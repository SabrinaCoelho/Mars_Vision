export default function Form({formDataObj, handleChange, handleAplicar, camerasRover, manifest}){
    console.log(manifest)
    return (
        <div className="text-white text-start">
            
            <div id="campo-rover">
                <label htmlFor='rover'>Rover</label>
                <div className="px-2 py-1">
                    <input
                        type="radio"
                        id="perseverance"
                        name="rover"
                        value="perseverance"
                        onChange={handleChange}
                        checked={formDataObj.rover === "perseverance"}
                    />
                    <label htmlFor='perseverance' className="mx-2">Perseverance</label>
                </div>
                <div className="px-2 py-1">
                    <input
                        type="radio"
                        id="curiosity"
                        name="rover"
                        value="curiosity"
                        onChange={handleChange}
                        checked={formDataObj.rover === "curiosity"}
                    />
                    <label htmlFor='curiosity' className="mx-2">Curiosity</label>
                </div>
                <div className="px-2 py-1">
                    <input
                        type="radio"
                        id="opportunity"
                        name="rover"
                        value="opportunity"
                        onChange={handleChange}
                        checked={formDataObj.rover === "opportunity"}
                    />
                    <label htmlFor='opportunity' className="mx-2">Opportunity</label>
                </div>
                <div className="px-2 py-1">
                    <input
                        type="radio"
                        id="spirit"
                        name="rover"
                        value="spirit"
                        onChange={handleChange}
                        checked={formDataObj.rover === "spirit"}
                    />
                    <label htmlFor='spirit' className="mx-2">Spirit</label>
                </div>
            </div>
            {/**/}
            <div id="campo-camera">
                <label htmlFor='camera'>Camera</label>
                {
                    camerasRover.map(
                        (camera, i) => {
                            //console.log(formDataObj.camera, camera.nome)
                            return(
                                <div className="px-2 py-1" key={i}>
                                    <input
                                        type="radio"
                                        id={`${camera.nome}`}
                                        name="camera"
                                        value={`${camera.abbreviation}`}
                                        onChange={handleChange}
                                        checked={formDataObj.camera === camera.abbreviation}
                                    />
                                    <label htmlFor={`${camera.nome}`} className="mx-2">{camera.nome}</label>
                                </div>
                            )
                        }
                    )
                }
            </div>
            <div className="campo-data">
                <div className="my-2">
                    <label htmlFor="perSol" className="form-label">Por sol</label>
                    <br/>
                    <label htmlFor="" className="">0</label>
                    <input 
                        type="range" 
                        className="form-range" 
                        id="perSol"
                        name="perSol"
                        onChange={handleChange}
                        max={manifest && manifest.max_sol ? manifest.max_sol : ""}
                    />
                    <label htmlFor="" className="">{manifest && manifest.max_sol ? manifest.max_sol : ""}</label>
                </div>
                <div className="my-2">
                    <label htmlFor="earthDate" className="form-label">Per data terrestre</label>
                    <input 
                        type="date"
                        className="form-control" 
                        id="earthDate"
                        name="earthDate"
                        min={manifest && manifest.landing_date ? manifest.landing_date : ""} 
                        max={manifest && manifest.max_date ? manifest.max_date : ""}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="my-4">
                <button className="btn btn-secondary" onClick={handleAplicar}>Aplicar</button>
            </div>
        </div>
    )
}
