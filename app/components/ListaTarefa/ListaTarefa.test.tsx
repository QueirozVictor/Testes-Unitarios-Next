import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ListaTarefa } from "./ListaTarefa";

test("Renderiza as tarefas corretamente", () => {
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

    render(<ListaTarefa tarefa={tarefas} />);

    expect(screen.getByText("Estudos")).toBeInTheDocument();
    expect(screen.getByText("Estudar React")).toBeInTheDocument();

    expect(screen.getByText("Trabalho")).toBeInTheDocument();
    expect(screen.getByText("Fazer projeto")).toBeInTheDocument();
});