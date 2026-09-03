'use client'
import { Tarefa } from "@/app/types/Tarefa"
import { useState } from "react";
import { NovaTarefa } from "../NovaTarefa/NovaTarefa";
import { ListaTarefa } from "../ListaTarefa/ListaTarefa";
import { useContadorDeTarefas } from "@/app/hooks/useContadorDeTarfeas";


type Props = {
    tarefasIniciais: Tarefa[];
}

export const Tarefas = ({tarefasIniciais} : Props) => {
    const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);

    const quantidade = useContadorDeTarefas(tarefas);

    function handleAdicionaNovaTarefa(novaTarefa: Tarefa) {
        setTarefas(tarefasSalvas => [...tarefasSalvas, novaTarefa])
    }
    return(
        <>
        <NovaTarefa tarefa={handleAdicionaNovaTarefa}/>
        <ListaTarefa tarefa={tarefas}/>
        <span>Quantidade de Tarefas: {quantidade}</span>
        </>
    )
}