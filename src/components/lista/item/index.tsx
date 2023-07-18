import { Itarefa } from "../../../types/tarefas"
import style from "./item.module.scss"

interface Props extends Itarefa{
    selecionaTarefa: (selecionaTarefa:Itarefa) => void
}

export default function Item(
    {   tarefa, 
        Tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa
    }: Props){

    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : " "} ${completado? style.itemCompletado:" "}`} 
        onClick={() => !completado && selecionaTarefa(
        {
            tarefa, 
            Tempo, 
            selecionado, 
            completado, 
            id
        })}>
            <h3>{tarefa}</h3>
            <span>{Tempo}</span>
            {completado && <span className={style.concluido} aria-label="Tarefa concluída"></span>}
        </li>
    )
}