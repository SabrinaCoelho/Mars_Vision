export default function ImageContainer({imgSrc}){
    console.log(imgSrc)
    return (
        <div className="imagem-wrapper col-sm-8">
            {
                imgSrc? 
                (<img src={imgSrc} alt="logo" />):
                (<p className="text-white">Não há imagens.</p>)
            }
        </div>
    )
}