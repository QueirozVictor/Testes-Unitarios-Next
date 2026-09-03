'use client'
import { useState } from "react";
import { Tarefa } from "@/app/types/Tarefa";

type Props = {
    tarefa: (novaTarefa: Tarefa) => void
}

export const NovaTarefa = ({ tarefa }: Props) => {

    const [adiciona, setAdiciona] = useState({ categoria: '', descricao: '' })

    const handleAdicionaTarefa = (e: React.SubmitEvent) => {
        e.preventDefault()

        if (!adiciona.categoria.trim() || !adiciona.descricao.trim()) {
            alert("Preencha todos os campos")
            return
        }

        const novaTarefa: Tarefa = {
            id: Date.now(),
            categoria: adiciona.categoria,
            descricao: adiciona.descricao
        }

        tarefa(novaTarefa);

        setAdiciona({ categoria: '', descricao: '' })
    }

    return (
        <form
            onSubmit={handleAdicionaTarefa}
            className="flex w-full  flex-col gap-2 "
        >
            <label
                htmlFor="categoria"
                className="text-sm font-medium text-gray-700"
            >
                Categoria
            </label>

            <input
                id="categoria"
                type="text"
                placeholder="Digite..."
                value={adiciona.categoria}
                onChange={(e) => setAdiciona({ ...adiciona, categoria: e.target.value })}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <label
                htmlFor="descricao"
                className="mt-2 text-sm font-medium text-gray-700"
            >
                Descrição
            </label>

            <input
                id="descricao"
                type="text"
                placeholder="Digite..."
                value={adiciona.descricao}
                onChange={(e) => setAdiciona({ ...adiciona, descricao: e.target.value })}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <button
                type="submit"
                className="mt-3 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-[0.98]"
            >
                Adicionar tarefa
            </button>
        </form>
    )
}
