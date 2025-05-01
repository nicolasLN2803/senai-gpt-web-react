import { useState } from "react";
import logo from "../../assets/imgs/Chat.png"
import "./newUser.css"

function NewUser() { //sempre inicie a function com letra maiuscula

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("")
  const [userName, setuserName] = useState("")





  const onUserCLick = async () => {
    
    if (email == "") {

      alert("Preencha o espaço do email.");
      return;

    }

    if (password == "") {

      alert("Preencha o espaço da senha.")
      return;

    }

    if (confirmPassword == "") {

      alert("Confirme sua senha.")
      return;

    }

    if (userName == "") {

      alert("Preencha o espaço do nome do usuário.")
      return;

    }

    if (password != confirmPassword) {

      alert("As senhas não são correspondentes.")
      return;

    }

    let response = await fetch("https://senai-gpt-api.up.railway.app/users", {

      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({


        email: email,
        password: password,
        confirmPassword: confirmPassword,
        userName: userName

      })
    });

    console.log(response);

    if (response.ok == true) {

      alert("Cadastro realizado com sucesso!");
      console.log(response)

      let json = await response.json();

      let token = json.accessToken;

      console.log("Token: " + token);

      // LOCAL STORAGE
      localStorage.setItem("meuToken", token);

      // // COOKIES

      // function setCookie(name, value, days) {
      //   const date = new Date();
      //   date.setTime(date.getTime() + (days*24*60*60*1000)); // dias para milissegundos
      //   const expires = "expires=" + date.toUTCString();
      //   document.cookie = `${name}= ${value}; ${expires}; path=/`;
      // }

      // setCookie("meuToken", token,7);

      window.location.href = "/login"

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

        <div className="nUser-image"> </div>

        <div className="login-container">
          <img className="logo" src={logo} alt="" />
          <h1
            id="meutitulo"
            className="titulo"> Novo Usuário </h1>

          <input className="inpt" value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder=" Insira o email" />
          <input className="inpt" value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder=" Insira a senha" />
          <input className="inpt" value={confirmPassword} onChange={event => setconfirmPassword(event.target.value)} type="confirmPassword" placeholder="Confirme sua senha" />
          <input className="inpt" value={userName} onChange={event => setuserName(event.target.value)} type= "userName" placeholder="Insira um nome do usuário" />

          <button className="btm" onClick={onUserCLick}> Entrar </button>
          <a className="form-hint" href="/login"> Clique aqui para fazer o Login. </a>

          
        </div>
      </main>

      <footer></footer>
    </>
  )
}

export default NewUser;  