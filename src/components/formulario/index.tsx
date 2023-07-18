import React, { useState } from "react";
import Botao from "../botao";
import form from './form.module.scss'
import { Itarefa } from "../../types/tarefas";
import {v4 as uuidv4} from 'uuid'

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}

export default function Form({setTarefas}:Props){
    const [tarefa, setTarefa] = useState("")
    const [Tempo, setTempo] = useState("00:00")
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault()

        setTarefas(tarefasAntigas => 
            [
              ...tarefasAntigas,
              {
                tarefa,
                Tempo,
                selecionado: false,
                completado: false,
                id: uuidv4()
              }
            ]
          )
          setTarefa("");
          setTempo("00:00");
    }
    return(
        <form className= {form.novaTarefa} onSubmit={adicionarTarefa}>
                <div className= {form.inputContainer}>
                    <label htmlFor="tarefa">Tarefa</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O Que você deseja estudar?" 
                    value={tarefa} 
                    onChange={evento => setTarefa(evento.target.value)}
                    required/>
                </div>
                <div className= {form.inputContainer}>

                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" 
                    value={Tempo} 
                    onChange={evento => setTempo(evento.target.value)} required/>

                </div>
                <Botao type="submit"> Adicionar </Botao>
        </form>
    )
}
