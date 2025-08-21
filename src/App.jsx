import Times from "./components/listTimes";
import { useState } from "react";
import Formulario from "./components/formulario";
import Task from "./components/header/header.jsx";



function App() {

const [colaboradores, setColaboradores] = useState([])

    const aoSalvar =(colaborador)=>{
      console.log(colaborador)
      setColaboradores([...colaboradores, colaborador])
    }

  return (
    <>
    <Task/>
    <Formulario listColaboradores={(colaborador) => aoSalvar(colaborador)}/>
    <Times  colaboradores={colaboradores}/>
    </>
  );
}

export default App;
