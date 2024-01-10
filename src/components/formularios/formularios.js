import React from "react";
import './styles.css'

function Form (){
    return(
        <div id="input-date">
            <form action="./comentarios.html">
                <div id="inputs">

                    <div class="left">
                        <label for="text">Nome</label>
                        <input style={{display: "block"}} id="name" class="blocos" type="text" name="Nome"/>
                        
                        
                        <label for="email">E-mail</label>
                        <input style={{display: "block"}} id="email" class="blocos" name="email" placeholder="Insira um endereço de email válido"/>
                        
                        <label for="text">Assunto</label>
                        <input style={{display: "block"}} id="assunto" class="blocos" type="text" name="assunto"/>
                    </div>
                    <div class="right" >
                        
                        <label for="text">mensagem</label>
                        <input style={{display: "block"}} id="mensagem" type="text" name="mensagem"/>
                    </div>    
                    
                </div>
            </form>

            <button class="button">Enviar</button>
        </div>
    )
}

export default Form;