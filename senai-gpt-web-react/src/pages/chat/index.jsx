import "./chat.css";
import chatt from "../../assets/imgs/chat.svg"
import Trash from "../../assets/imgs/Trash.svg"
import light from "../../assets/imgs/light.svg"
import user from "../../assets/imgs/User.svg"
import updates from "../../assets/imgs/updates.svg"
import logout from "../../assets/imgs/logout.svg"
import Chatpng from "../../assets/imgs/Chat.png"
import ballon from "../../assets/imgs/balão.svg"
import star from "../../assets/imgs/estrela.svg"
import warning from "../../assets/imgs/warning.svg"
import microphone from "../../assets/imgs/Button.svg"
import photo from "../../assets/imgs/imagem.svg"
import send from "../../assets/imgs/enviar.svg"
import { useEffect, useState } from "react";




function Chat() {

    const [chats, setChats] = useState([]);

    useEffect(() => {

        // executada toda a vez que a tela inicia  
        getChats();

    },[]);

    const getChats = async () => {
        //arrow function(funcao arco e flecha ou seta)
            let response = await fetch("https://senai-gpt-api.azurewebsites.net/chats", {
                headers: { 
                    "Authorization" : "Bearer " + localStorage.getItem("meuToken")
                }
            });

            console.log(response)

            if (response.ok == true) {

                let json = await response.json();

                setChats (json);

            } else {

                if (response == 401) {

                    alert("Token invalido. Execute o login novamente.")
                    window.location.href = "/login"

                }
            }
   

        }


    return (
        <>
            <div className="container">
                <header className="painel-lateral">
                    <div className="top">
                        <button className="btm-chat"> + New Chat </button>

                       {chats.map(chat => (
                             <button className="btm-q">
                             <img src={chatt} alt="imagem-do-chat" />
                             {chat.chatTitle}
                         </button>
                        
                       ))}
                       
                    </div>
                    <div className="bottom">
                        <button className="btm-clear-conversation">

                            <img src={Trash} alt="limpar-conversa" />
                            Clear Conversation</button>
                        <button className="btm-clear-conversation">

                            <img src={light} alt="modo-claro" />
                            Light mode </button>
                        <button className="btm-clear-conversation">

                            <img src={user} alt="minha-conta" />
                            My account </button>
                        <button className="btm-clear-conversation">

                            <img src={updates} alt="update-image" />
                            Updates & FAQ </button>
                        <button className="btm-clear-conversation">

                            <img src={logout} alt="log-out" />
                            Log out </button>

                    </div>

                </header>

                <main className="painel-central">
                    <div className="senai-image">

                        <img src={Chatpng} alt="Foto-do-senai" />
                    </div>
                    <div className="container-example">
                        <div className="example-left">
                            <p>

                                <img src={ballon} alt="balão-example" />
                                Example </p>
                            <button className=" explique-como-um-computador-quântico-funciona ">
                                explique como um computador quântico funciona </button>
                            <button className=" explique-como-um-computador-quântico-funciona ">
                                explique como um-computador quântico funciona </button>
                            <button className=" explique-como-um-computador-quântico-funciona ">
                                explique como um computador quântico funciona </button>
                        </div>

                        <div className="example-left">
                            <p>

                                <img src={star} alt="balão-example" />
                                Capacibilities </p>
                            <button className=" explique-como-um-computador-quântico-funciona ">
                                explique como um computador quântico funciona </button>
                            <button className=" explique-como-um-computador-quântico-funciona ">
                                explique como um-computador quântico funciona </button>
                            <button className=" explique-como-um-computador-quântico-funciona ">
                                explique como um computador quântico funciona </button>
                        </div>

                        <div className="example-left">
                            <p>
                                <img src={warning} alt="balão-example" />
                                Limitations </p>
                            <button className=" explique-como-um-computador-quântico-funciona ">
                                explique como um computador quântico funciona </button>
                            <button className=" explique-como-um-computador-quântico-funciona ">
                                explique como um-computador quântico funciona </button>
                            <button className=" explique-como-um-computador-quântico-funciona ">
                                explique como um computador quântico funciona </button>
                        </div>
                    </div>

                    <div className="input-container">

                        <img src={microphone} alt="microfone" />
                        <img src={photo} alt="foto" />


                        <input className="chat" type="text" placeholder="Type Message" />

                        <img src={send} alt="enviar" />

                    </div>
                </main>


            </div>

        </>

    )




};

export default Chat;