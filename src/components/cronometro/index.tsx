import Botao from "../botao";
import Relogio from "./relogio";
import style from './cronometro.module.scss'
import { Itarefa } from "../../types/tarefas";
import {useEffect, useState} from 'react'
import { tempoParaSegundos } from "../../common/utils/time";

interface Props{
    selecionado:Itarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa} : Props){

    const [tempo, setTempo] = useState<number>()

    useEffect(()=>{
        if(selecionado?.Tempo){
            setTempo(tempoParaSegundos((selecionado.Tempo)))
        }
    }, [selecionado])

    function regressiva(contador:number = 0){
        setTimeout(()=>{
            if(contador >= 0){
                setTempo(contador--)
                return regressiva(contador--)
            }
            finalizarTarefa()
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => regressiva(tempo)}> Começar </Botao>

        </div>
    )
}