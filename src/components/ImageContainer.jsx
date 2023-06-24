export default function ImageContainer({imgSrc, proxImagem, antImagem}){
    return (
        <>
            <div className="imagem-wrapper col-sm-8">
                {
                    imgSrc? 
                    (<img src={imgSrc} alt="logo" />):
                    (<p className="text-white">Não há imagens.</p>)
                }
                <div className="d-flex justify-content-between">
                    <button type='button' className="btn btn-secondary" onClick={proxImagem}>Próximo</button>
                    <button type='button' className="btn btn-secondary" onClick={antImagem}>Anterior</button>
                </div>
            </div>
        </>
    )
}