import Lista from '../components/lista';
import pages from './pages.module.scss'
import Cronometro from '../components/cronometro';
import { useState } from 'react';
import { Itarefa } from '../types/tarefas';
import Form from "../components/formulario/index"

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([])
  const [selecionado, setSelecionado] = useState<Itarefa>()

  function selecionaTarefa(tarefaSelecionada: Itarefa){
    setSelecionado(tarefaSelecionada)

    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>{
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado:false,
            completado:true
          }
        }
      return tarefa
    }))
  }
  }

  return(
    <div className={pages.AppStyle}>
      <Form setTarefas={setTarefas} />
      <Lista tarefas = {tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  )
}

export default App;
