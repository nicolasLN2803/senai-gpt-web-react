import "./chat.css";
import chat from "../../assets/imgs/chat.svg"



function Chat () {

    return (
        <>
    <div className="container">
        <header className="painel-lateral">
            <div className="top">
                <button className="btm-chat"> + New Chat </button>
                <button className="btm-q"> 
                    
                    <img src={chat} alt="imagem-do-chat"/>
                    AI Chat Tool Ethics </button>
                <button className="btm-q"> 
                    
                    <img src="../assets/imgs/chat.svg" alt="imagem-do-chat"/>
                    AI Chat Tool Impact Writting </button>
                <button className="btm-q">
                    
                    <img src="../assets/imgs/chat.svg" alt="imagem-do-chat"/>
                    New Chat </button>

            </div>
            <div className="bottom">
                <button className="btm-clear-conversation"> 
                    
                    <img src="../assets/imgs/Trash.svg" alt="limpar-conversa"/>
                    Clear Conversation</button>
                <button className="btm-clear-conversation"> 

                    <img src="../assets/imgs/light.svg" alt="modo-claro"/>
                    Light mode </button>
                <button className="btm-clear-conversation"> 
                    
                    <img src="../assets/imgs/User.svg" alt="minha-conta"/>
                    My account </button>
                <button className="btm-clear-conversation"> 
                    
                    <img src="../assets/imgs/updates.svg" alt="update-image"/>
                    Updates & FAQ </button>
                <button className="btm-clear-conversation"> 
                    
                    <img src="../assets/imgs/logout.svg" alt="log-out"/>
                    Log out </button>

            </div>

        </header>

        <main className="painel-central">
            <div className="senai-image">

                <img src="../assets/imgs/Chat.png" alt="Foto-do-senai"/>
            </div>
            <div className="container-example">
            <div className="example-left">
                <p> 
                    
                    <img src="../assets/imgs/balão.svg" alt="balão-example"/>
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
                        
                        <img src="../assets/imgs/estrela.svg" alt="balão-example"/>
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
                        <img src="../assets/imgs/warning.svg" alt="balão-example"/>
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
                
                <img src="../assets/imgs/Button.svg" alt="microfone"/>
                <img src="../assets/imgs/imagem.svg" alt="foto"/>


                <input className="chat" type="text" placeholder="Type Message"/>

                <img src="../assets/imgs/enviar.svg" alt="enviar"/>

            </div>
        </main>


    </div>
               
</>

)




};

export default Chat;