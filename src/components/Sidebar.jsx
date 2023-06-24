
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import Form from "./Form"
import ImageContainer from './ImageContainer';

export default function Sidebar({formDataObj, handleChange, handleAplicar, camerasRover, manifest, imagem, updateImage}){
    console.log(imagem)
    return (
        <div className="container-fluid">
            <div className='row'>
                <div id="sidebar" className='col-auto col-sm-4 bg-dark d-flex flex-column justify-content-between min-vh-100'>
                    <div className="mt-3">
                        <a className='text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline' role="button">
                            <span className="fs-4">Mars Vision</span>
                        </a>
                        <hr className="text-white d-none d-sm-block"></hr>
                        <ul className="nav nav-pills flex-column mt-sm-0" id='parentD'>
                            <li className="nav-item my-1 py-2 py-sm-0">
                                <a href="#" className="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className="bi bi-speedometer2"></i>
                                    <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item text-white my-1 py-2 py-sm-0">
                                <a href="#submenu" className="nav-link text-white text-center text-sm-start" data-bs-toggle="collapse" aria-current="page">
                                    <i className="bi bi-grid"></i>
                                    <span className="ms-2 d-none d-sm-inline">Products</span>
                                    <i className="bi bi-arrow-down-short ms-0 ms-sm-2" ></i>
                                </a>
                                <ul className="nav collapse ms-2 flex-column" id="submenu" data-bs-parent="parentD">
                                    {/*
                                    <li className="nav-item">
                                        <a className="nav-link text-white " href="#" aria-current="page">
                                            <span className="d-none d-sm-inline">Item</span>1
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">
                                            <span className="d-none d-sm-inline">Item</span>2
                                        </a>
                                    </li>
                                    */}
                                    {/* */}
                                    <Form 
                                        formDataObj={formDataObj}
                                        handleChange={handleChange}
                                        handleAplicar={handleAplicar}
                                        camerasRover={camerasRover}
                                        manifest={manifest}
                                    />
                                    
                                </ul>
                            </li>
                            {/* 
                            <li className="nav-item my-1 py-2 py-sm-0">
                                <a href="#" className="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className="bi bi-house"></i>
                                    <span className="ms-2 d-none d-sm-inline">House</span>
                                </a>
                            </li>
                            <li className="nav-item my-1 py-2 py-sm-0">
                                <a href="#" className="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className="bi bi-people"></i>
                                    <span className="ms-2 d-none d-sm-inline">Costumers</span>
                                </a>
                            </li>
                            */}
                        </ul>
                    </div>
                </div>
                <ImageContainer imgSrc={imagem}/>
            </div>
            <button type='button' className="btn btn-secondary" onClick={updateImage}>prox</button>
            <button type='button' className="btn btn-secondary" onClick={() => {
                
            }}>anterior</button>
        </div>
    )
}