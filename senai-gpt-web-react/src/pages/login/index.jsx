import "./login.css"
import logo from "../../assets/imgs/Chat.png"
import { useState } from "react";

function Login() {

const [ email, setEmail] = useState("");
const [ senha, setSenha] = useState("");





const onLoginCLick = async () => {

let response = await fetch ("https://senai-gpt-api.azurewebsites.net/login", {
  
  headers:{
    "Content-Type": "application/json"
  },
  method: "POST",
  body: JSON.stringify({

    
    email: email,
    senha: senha

  })
});

console.log(response);

}

  return (
    <>
      <header></header>

      <main className="page-container">

        <div className="robo-image"> </div>

        <div className="login-container">
          <img className="logo" src={logo} alt="" />
          <h1
            id="meutitulo"
            className="titulo"> Login </h1>

          <input className="inpt" value={email} onChange={event => setEmail(event.target.value)}type="email" placeholder=" Insira o email" />
          <input className="inpt" value={senha} onChange={event => setSenha(event.target.value)}type="senha" placeholder=" Insira a senha" />

          <button className="btm" onClick={onLoginCLick}> Entrar </button>
        </div>
      </main>

      <footer></footer>
    </>
  )
}

export default Login