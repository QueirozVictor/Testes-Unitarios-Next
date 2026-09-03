'use client'

import { Tarefa } from "@/app/types/Tarefa"
import { useState } from "react";
import { NovaTarefa } from "../NovaTarefa/NovaTarefa";
import { ListaTarefa } from "../ListaTarefa/ListaTarefa";
import { useContadorDeTarefas } from "@/app/hooks/useContadorDeTarfeas";

type Props = {
    tarefasIniciais: Tarefa[];
}

export const Tarefas = ({ tarefasIniciais }: Props) => {
    const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);

    const quantidade = useContadorDeTarefas(tarefas);

    function handleAdicionaNovaTarefa(novaTarefa: Tarefa) {
        setTarefas(tarefasSalvas => [...tarefasSalvas, novaTarefa])
    }

    return (
        <main className="flex flex-col justify-center min-h-screen bg-gray-100 px-4 py-10">
            <div className="w-full text-center">

                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Lista de Tarefas
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Organize suas tarefas de forma simples.
                    </p>
                </div>

                <section className="rounded-xl bg-white p-6 shadow-sm">

                    <NovaTarefa tarefa={handleAdicionaNovaTarefa} />

                    <div className="flex flex-col gap-3 mt-6">
                        <ListaTarefa tarefa={tarefas} />
                    </div>

                    <div className="mt-6 border-t border-gray-200 pt-4">
                        <span className="text-sm font-medium text-gray-600">
                            Quantidade de tarefas:{" "}
                            <span className="text-gray-900 font-bold text-lg">
                                {quantidade}
                            </span>
                        </span>
                    </div>

                </section>
            </div>
        </main>
    )
}
