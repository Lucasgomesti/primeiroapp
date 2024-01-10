import React from "react";
import './styles.css'

function Contats (){
    return(
        <div className="container">
            <div className="be-comment-block">
                <h1 className="comments-title">Comentários 3</h1>
                <div className="be-comment">
                    <div class="be-img-comment">	
                        <a href="blog-detail-2.html">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="be-ava-comment"/>
                        </a>
                    </div>
                    <div className="be-comment-content">
                        
                            <span className="be-comment-name">
                                <a href="blog-detail-2.html">Robson S</a>
                                </span>
                            <span class="be-comment-time">
                                <i class="fa fa-clock-o"></i>
                                17 de Julho, 2022 at 22:14am
                            </span>
            
                        <p className="be-comment-text">
                            Não valeu a pena o ingresso, muita piada em momentos sérios e enredo fraco
                        </p>
                    </div>
                </div>
                <div className="be-comment">
                    <div className="be-img-comment">	
                        <a href="blog-detail-2.html">
                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" class="be-ava-comment"/>
                        </a>
                    </div>
                    <div className="be-comment-content">
                        <span className="be-comment-name">
                            <a href="blog-detail-2.html">Phoenix</a>
                        </span>
                        <span className="be-comment-time">
                            <i className="fa fa-clock-o"></i>
                            18 de Julho, 2022 at 7:46am
                        </span>
                        <p className="be-comment-text">
                            Muito bom, amei.
                        </p>
                    </div>
                </div>
                <div className="be-comment">
                    <div className="be-img-comment">	
                        <a href="blog-detail-2.html">
                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" class="be-ava-comment"/>
                        </a>
                    </div>
                    <div className="be-comment-content">
                        <span className="be-comment-name">
                            <a href="blog-detail-2.html">Caroline B</a>
                        </span>
                        <span className="be-comment-time">
                            <i className="fa fa-clock-o"></i>
                            18 de Julho, 2022 at 8:55am
                        </span>
                        <p className="be-comment-text">
                            Faltou o Henri Cavill.
                        </p>
                    </div>
                </div>
                
                <form className="form-block">
                    <div className="row">
                    
                    </div>
                    <div className="col-xs-12">									
                        <div className="form-group">
                            <textarea className="form-input" required="" placeholder="Seu Comentário"></textarea>
                        </div>
                    </div>
                        <a className="btn btn-primary pull-right"></a>
                </form>
            </div>
        </div>
    )
}

export default Contats;