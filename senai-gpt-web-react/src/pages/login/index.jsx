import "./login.css"
import logo from "../../assets/imgs/Chat.png"
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");





  const onLoginCLick = async () => {

    let response = await fetch("https://senai-gpt-api.azurewebsites.net/login", {

      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({


        email: email,
        password: password

      })
    });

    console.log(response);

    if (response.ok == true) {

      alert("Login realizado com sucesso!");
        console.log(response) 

          let json = await response.json();

          let token = json.accessToken;

          console.log("Token: " + token);

          // LOCAL STORAGE
          localStorage.setItem("mytoken", token);

          // // COOKIES

          // function setCookie(name, value, days) {
          //   const date = new Date();
          //   date.setTime(date.getTime() + (days*24*60*60*1000)); // dias para milissegundos
          //   const expires = "expires=" + date.toUTCString();
          //   document.cookie = `${name}= ${value}; ${expires}; path=/`;
          // }

          // setCookie("meuToken", token,7);

          window.location.href = "/chat"

    } else {

      if (response.status == 401) {

        alert("Credenciais Incorretas. Tente novamente.");
      } else {

        alert("Erro inesperado. Caso persista, contate os administradores.")
      }

    }

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

          <input className="inpt" value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder=" Insira o email" />
          <input className="inpt" value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder=" Insira a senha" />

          <button className="btm" onClick={onLoginCLick}> Entrar </button>
        </div>
      </main>

      <footer></footer>
    </>
  )
}

export default Login