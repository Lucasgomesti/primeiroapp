import React from "react";
import './styles.css'
import video from '../../assets/video.mp4'


function Trailer(){

    return(
        <div id="trailer-container">
            <div className="content">
                <video controls className="trailer">
                    <source src={video} />
                    seu navegador não possui suporte para este video
                </video>    
                <div id="sinopse">
                    <p className="description">
                        Os mundos colidem quando Flash viaja no tempo para mudar os eventos do passado. No entanto, quando sua tentativa de salvar sua família altera o futuro, ele fica preso em uma realidade na qual o General Zod voltou, ameaçando a aniquilação.
                    </p>
                    <button className="comprar">Comprar ingresso</button>
                </div>
            </div>
        </div>        
    )
}

export default Trailer;