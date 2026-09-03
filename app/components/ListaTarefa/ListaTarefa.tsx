import { Tarefa } from "@/app/types/Tarefa"

type Props = {
    tarefa: Tarefa[]
}

export const ListaTarefa = ({tarefa} : Props)=>{
    return(
        <>
        {tarefa.map(t => 
        <div key={t.id} className="flex flex-col">
            <h2>{t.categoria}</h2>
            <p>{t.descricao}</p>
        </div>)}
        </>
    )
    
}

