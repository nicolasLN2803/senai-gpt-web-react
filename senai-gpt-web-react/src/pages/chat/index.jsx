import "./chat.css";
import Trash from "../../assets/imgs/Trash.svg"
import light from "../../assets/imgs/light.svg"
import user from "../../assets/imgs/User.svg"
import updates from "../../assets/imgs/updates.svg"
import logout from "../../assets/imgs/logout.svg"
import blackIcon from "../../assets/imgs/chat.svg"
import ballon from "../../assets/imgs/balão.svg"
import star from "../../assets/imgs/estrela.svg"
import warning from "../../assets/imgs/warning.svg"
import microphone from "../../assets/imgs/Button.svg"
import photo from "../../assets/imgs/imagem.svg"
import send from "../../assets/imgs/enviar.svg"
import whiteIcon from "../../assets/imgs/ICONEBRANCO.svg"
import whiteTrash from "../../assets/imgs/LIXOBRANCO.svg"
import whiteLight from "../../assets/imgs/LUZBRANCA.svg"
import senaiFoto from "../../assets/imgs/Chat.png"
import whiteUser from "../../assets/imgs/PESSOABRANCA.svg"
import whiteUpdates from "../../assets/imgs/UPDATEBRANCO.svg"
import whiteLogout from "../../assets/imgs/LOGOUTBRANCO.svg"

import { useEffect, useState } from "react";





function Chat() {

    const [chats, setChats] = useState([]);
    const [chatSelecionado, setChatSelecionado] = useState(null);
    const [userMessage, setUserMessage] = useState("")

    const [IsLeftPanelOpen, setIsLeftPanelOpen] = useState(false);

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {

        // executada toda a vez que a tela inicia  
        getChats();

        let modoEscuro = localStorage.getItem("darkMode");
        if(modoEscuro === "true") {

            setDarkMode(true);
            document.body.classList.add("dark-mode")
        }


    }, []);



    const getChats = async () => {
        //arrow function(funcao arco e flecha ou seta)
        let response = await fetch("https://senai-gpt-api.up.railway.app/chats", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken")
            }
        });

        console.log(response)

        if (response.ok) {


            let json = await response.json();

            let userId = localStorage.getItem("meuId");

            json = json.filter(chat => chat.userId == userId);

            setChats(json);

        } else if (response.stetus == 401) {

            alert("Token inválido. Faça o login novamente. ");
            localStorage.clear();
            window.location.href = "/login";

        }


    }

    const onLogOutClick = () => {

        localStorage.clear();
        window.location.href = "/login";

    }

    const clickChat = (chat) => {

        setChatSelecionado(chat);
        setIsLeftPanelOpen(false);
        console.log(chat);

    }

    const chatGPT = async (message) => {

        return "[Mensagemfixa]";

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

        let response = await chatGPT(message)

        console.log("Resposta: ", response)

        const novaMensagemUsuario = {

            userId: "userId",
            text: message,
            id: crypto.randomUUID

        }

        let novaRespostaChatGPT = {

            userId: "chatbot",
            text: response,
            id: crypto.randomUUID

        }
        let novoChatSelecionado = { ...chatSelecionado }; //Copia do chatSelecionado

        novoChatSelecionado.messages.push(novaMensagemUsuario) // Add uma mensagem.
        novoChatSelecionado.messages.push(novaRespostaChatGPT)// Add uma mensagem.

        setChatSelecionado(novoChatSelecionado);

        console.log("resposta ", novaRespostaChatGPT)

        let res = await fetch("https://senai-gpt-api.up.railway.app/chats" + chatSelecionado.id, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                novoChatSelecionado
            )
        });

        if (res.ok == false) {

            console.log("Salvar o chat deu errado.");

        }

    }



    const novoChat = async () => {


        let novoTitulo = prompt("Insira o título para seu chat: ");



        if (novoTitulo == null) {

            alert("Insira um título.");
            return; // faz o código parar de ser executado.

        }

        let userId = localStorage.getItem("meuId");

        let nChat = {

            chatTitle: novoTitulo,
            id: crypto.randomUUID,
            userId: userId,
            messages: []

        }

        const response = await fetch("https://senai-gpt-api.up.railway.app/chats", {

            method: "POST",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                nChat
            )

        });

        if (response.ok) {

            //Atualiza os chats da tela
            await getChats();
            setChatSelecionado(nChat)

        }

    };

    const toggleDarkMode = () => {

        setDarkMode(!darkMode);

        if (darkMode == true) {

            document.body.classList.remove("dark-mode");

        } else {

            document.body.classList.add("dark-mode");

        }

        localStorage.setItem("darkMode", darkMode)

    }



    return (
        <>
            <div className="container">
                <button className="btn-toggle-panel"
                    onClick={() => setIsLeftPanelOpen(!IsLeftPanelOpen)} //Inverte o valor da variavel
                >

                    ☰

                </button>
                <header className={`painel-lateral ${IsLeftPanelOpen == true ? "open" : ""}`}>
                    <div className="top">
                        <button className="btm-chat" onClick={() => novoChat()}> + New Chat </button>

                        {chats.map(chat => (
                            <button className="btm-q" onClick={() => clickChat(chat)}>
                                <img src={darkMode == true? whiteIcon : blackIcon} alt="imagem-do-chat" />
                                {chat.chatTitle}
                            </button>

                        ))}

                    </div>
                    <div className="bottom">
                        <button className="btm-clear-conversation">

                            <img src={darkMode == true? whiteTrash : Trash} alt="limpar-conversa" />
                            Clear Conversation</button>
                        <button className="btm-clear-conversation" onClick={() => toggleDarkMode()}>

                            <img src={darkMode == true? whiteLight : light} alt="modo-claro" />
                            Light mode </button>
                        <button className="btm-clear-conversation">

                            <img src={darkMode == true? whiteUser : user} alt="minha-conta" />
                            My account </button>
                        <button className="btm-clear-conversation">

                            <img src={darkMode == true? whiteUpdates : updates} alt="update-image" />
                            Updates & FAQ </button>
                        <button className="btm-clear-conversation" onClick={() => onLogOutClick()}>

                            <img src={darkMode == true? whiteLogout : logout} alt="log-out" />
                            Log out </button>

                    </div>

                </header>

                <main className="painel-central">

                    {chatSelecionado == null && (
                        <>

                            <div className="senai-image">

                                <img src={senaiFoto} alt="Foto-do-senai" />
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