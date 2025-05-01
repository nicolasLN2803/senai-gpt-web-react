import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Chat from "./pages/chat";
import NewUser from "./pages/novo usuario";


function App() {
  
  const isAuthenticated = () => {

    let token = localStorage.getItem("meuToken");

    if (token == null) {

      return false;

    } else {

      return true;

    }

  }

  return (
  <>
    <BrowserRouter>
     
      <Routes> 

        <Route path="/" element= {<Login/>}></Route>
        <Route path="/login" element= {<Login/>}></Route>
        <Route path="/chat" element= {isAuthenticated() == true? <Chat/> : <Login/>}></Route> 
        <Route path="*" element= {<h1>NOT FOUND</h1>}></Route>
        <Route path="/new-user" element= {<NewUser/>}></Route>

      </Routes>

    </BrowserRouter>
  </>
  )
}

export default App;