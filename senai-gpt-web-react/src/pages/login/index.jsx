import "./login.css"


function Login() {




  return (
    <>
      <header></header>

      <main className="page-container">

        <div className="robo-image"> </div>

        <div className="login-container">
          <img className="logo" src="../assets/imgs/Chat.png" alt="" />
          <h1
            id="meutitulo"
            className="titulo"> Login </h1>

          <input className="inpt" type="email" placeholder=" Insira o email" />
          <input className="inpt" type="email" placeholder=" Insira a senha" />

          <button className="btm"> Entrar </button>
        </div>
      </main>

      <footer></footer>
    </>
  )
}

export default Login