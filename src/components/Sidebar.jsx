
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import Form from "./Form"
import ImageContainer from './ImageContainer';

export default function Sidebar({formDataObj, handleChange, handleAplicar, camerasRover, manifest, imagem, proxImagem, antImagem}){
    return (
        <div className="container-fluid">
            <div className='row'>
                <div id="sidebar" className='col-auto col-sm-4 bg-dark d-flex flex-column justify-content-between min-vh-100'>
                    <div className="mt-3">
                        <a className='text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline' role="button">
                            <span className="fs-4">Mars Vision</span>
                        </a>
                        <hr className="text-white d-none d-sm-block"></hr>
                        <Form 
                            formDataObj={formDataObj}
                            handleChange={handleChange}
                            handleAplicar={handleAplicar}
                            camerasRover={camerasRover}
                            manifest={manifest}
                        />
                    </div>
                </div>
                <ImageContainer 
                    imgSrc={imagem}
                    proxImagem={proxImagem}
                    antImagem={antImagem}
                />
            </div>
            
        </div>
    )
}