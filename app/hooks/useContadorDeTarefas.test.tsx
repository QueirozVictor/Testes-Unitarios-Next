import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "./useContadorDeTarefas";

test("Retorna a quantidade correta de tarefas", () => {
    const tarefas = [
        {
            id: 1,
            categoria: "Estudos",
            descricao: "Estudar React"
        },
        {
            id: 2,
            categoria: "Trabalho",
            descricao: "Fazer projeto"
        }
    ];

    const { result } = renderHook(() => useContadorDeTarefas(tarefas));

    expect(result.current).toBe(2);
});