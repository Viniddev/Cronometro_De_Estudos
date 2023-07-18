import Item from './item'
import list from './list.module.scss'
import { Itarefa } from '../../types/tarefas'

interface Props{
    tarefas: Itarefa[],
    selecionaTarefa: (selecionaTarefa:Itarefa) => void 
}

function Lista({tarefas, selecionaTarefa}:Props){

    return(
        <aside className={list.listaTarefas}>
            <h2> Estudos do dia: </h2>
            <ul>
                {tarefas.map((item) => (
                    <Item {...item} key={item.id} selecionaTarefa={selecionaTarefa}/>
                ))}
            </ul>
        </aside>
    )
}

export default Lista 