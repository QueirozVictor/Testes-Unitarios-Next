import { Tarefa } from "@/app/types/Tarefa";

export const tarefas: Tarefa[] = [
    {
        id: 1,
        categoria: "Estudos",
        descricao: "Estudar Next.js"
    },
    {
        id: 2,
        categoria: "Trabalho",
        descricao: "Fazer um projeto funcional com Next.Js"
    }
];

export async function buscarTarefas() {
    return Promise.resolve(tarefas);
}