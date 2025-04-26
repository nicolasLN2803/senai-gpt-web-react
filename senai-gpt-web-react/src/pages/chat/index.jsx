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
    const [chatSelecionado, setChatSelecionado] = useState(null);
    const [userMessage, setUserMessage] = useState("")

    useEffect(() => {

        // executada toda a vez que a tela inicia  
        getChats();

    }, []);

    const getChats = async () => {
        //arrow function(funcao arco e flecha ou seta)
        let response = await fetch("https://senai-gpt-api.azurewebsites.net/chats", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken")
            }
        });

        console.log(response)

        if (response.ok == true) {

            let json = await response.json();

            setChats(json);

        } else {

            if (response == 401) {

                alert("Token invalido. Execute o login novamente.")
                window.location.href = "/login"

            }
        }


    }

    const onLogOutClick = () => {

        localStorage.clear();
        window.location.href = "/login";

    }

    const clickChat = (chat) => {

        setChatSelecionado(chat);
        console.log(chat);

    }

    const chatGPT = async (message) => {

            // Configurações do endpoint e chave da API
            const endpoint = "https://ai-testenpl826117277026.openai.azure.com/";
            const apiKey = "DCYQGY3kPmZXr0lh7xeCSEOQ5oiy1aMlN1GeEQd5G5cXjuLWorWOJQQJ99BCACYeBjFXJ3w3AAAAACOGol8N";
            const deploymentId = "gpt-4"; // Nome do deployment no Azure OpenAI
            const apiVersion = "2024-05-01-preview"; // Verifique a versão na documentação
    
            // URL para a chamada da API
            const url = `${endpoint}/openai/deployments/${deploymentId}/chat/completions?api-version=${apiVersion}`;
    
            // Configurações do corpo da requisição
            const data = {
                messages: [{ role: "user", content: message }],
                max_tokens: 50
            };
    
            // Cabeçalhos da requisição
            const headers = {
                "Content-Type": "application/json",
                "api-key": apiKey
            };
    
            // Faz a requisição com fetch
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data)
            });
    
            if (response.ok) {
                const result = await response.json();
                const botMessage = result.choices[0].message.content;
                return botMessage;
            }
    
        }


    const enviarMensagem = async (message) => {

        let response = await chatGPT (message)

         console.log("Resposta: ", response)

        const novaMensagemUsuario = {

            userI: "userId",
            text: message,
            id: 10

        }

        let novaRespostaChatGPT = {

            userId: "chatbot",
            text: resposta,
            id: 10

        }
        let novoChatSelecionado = { ...chatSelecionado}; //Copia do chatSelecionado

        novoChatSelecionado.message.push(novaMessageUsuario) // Add uma mensagem.
        novoRespostaChatGPT.message.push(novoRespostaChatGPT)// Add uma mensagem.
    
        setChatSelecionado(novoChatSelecionado);

    };

   



    return (
        <>
            <div className="container">
                <header className="painel-lateral">
                    <div className="top">
                        <button className="btm-chat"> + New Chat </button>

                        {chats.map(chat => (
                            <button className="btm-q" onClick={() => clickChat(chat)}>
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
                        <button className="btm-clear-conversation" onClick={() => onLogOutClick()}>

                            <img src={logout} alt="log-out" />
                            Log out </button>

                    </div>

                </header>

                <main className="painel-central">

                    {chatSelecionado == null && (
                        <>

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

                        </>
                    )}

                    {chatSelecionado != null && (

                        <>

                            <div className="chat-container">

                                <div className="chat-header">

                                    <h2> {chatSelecionado.chatTitle} </h2>

                                </div>

                                <div className="chat-messages">

                                    {chatSelecionado.messages.map(message => (

                                        <p className={"message-item " + (message.userId == "chatbot" ? "chatbot" : "")}> {message.text}</p>

                                    ))}

                                </div>

                            </div>

                        </>

                    )}

                    <div className="input-container">

                        <img src={microphone} alt="microfone" />
                        <img src={photo} alt="foto" />


                        <input
                            value={userMessage}
                            onChange={event => setUserMessage(event.target.value)}
                            placeholder="Type a message."
                            type="text" />

                        <img onClick={() => enviarMensagem(userMessage)} src={send} alt="enviar" />

                    </div>
                </main>


            </div>

        </>

    )




};

export default Chat;