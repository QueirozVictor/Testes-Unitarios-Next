'use client'
import { useState } from "react";
import { Tarefa } from "@/app/types/Tarefa";

type Props ={
    tarefa: (novaTarefa: Tarefa) => void
}

export const NovaTarefa = ({tarefa} : Props) => {

    const [adiciona, setAdiciona] = useState({categoria: '', descricao: ''})

    const handleAdicionaTarefa =(e: React.SubmitEvent) => {
        e.preventDefault()

        if(!adiciona.categoria.trim() || !adiciona.descricao.trim()){
            alert("Preencha todos os campos")    
            return
        }


        const novaTarefa: Tarefa = {
            id: Date.now(),
            categoria: adiciona.categoria,
            descricao: adiciona.descricao
        } 
        tarefa(novaTarefa);


        setAdiciona({categoria: '', descricao: ''})
    }
    return(
       <form onSubmit={handleAdicionaTarefa}> 
            <label htmlFor="categoria">Categoria</label>
            <input 
                id="categoria"
                type="text"
                placeholder="Digite..."
                value={adiciona.categoria}
                onChange={(e) => setAdiciona({...adiciona, categoria: e.target.value})}
            />

            <label htmlFor="descricao">Descrição</label>
            <input 
                id="descricao"
                type="text"
                placeholder="Digite..."
                value={adiciona.descricao}
                onChange={(e) => setAdiciona({...adiciona, descricao: e.target.value})}
            />

            <button type="submit">
                Adicionar tarefa
            </button>
        </form>
    )
}