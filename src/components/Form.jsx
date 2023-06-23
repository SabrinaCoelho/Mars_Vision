export default function Form({formDataObj, handleChange, handleAplicar, camerasRover}){
    console.log(camerasRover)
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
                            return(
                                <div className="px-2 py-1" key={i}>
                                    <input
                                        type="radio"
                                        id={`${camera.nome}`}
                                        name="camera"
                                        value={`${camera.abbreviation}`}
                                        onChange={handleChange}
                                        checked={formDataObj.camera === camera.nome}
                                    />
                                    <label htmlFor={`${camera.nome}`} className="mx-2">{camera.nome}</label>
                                </div>
                            )
                        }
                    )
                    
                }
            </div>
            
            <button className="btn btn-success" onClick={handleAplicar}>Aplicar</button>
            
        </div>
    )
}