import React from 'react'
import botao from './botao.module.scss'

interface Props{
    children?:React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

export default function Botao({onClick, type, children}:Props){
    return(
        <button onClick={onClick} type={type} className={botao.botao}> {children} </button>
    )  
}