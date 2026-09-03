import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { NovaTarefa } from "./NovaTarefa";
import { traceGlobals } from "next/dist/trace/shared";

test("Renderiza os campos e o botão corretamente", () => {
    render(<NovaTarefa tarefa={() => {}} />);

    const campos = screen.getAllByPlaceholderText("Digite...");

    expect(campos).toHaveLength(2);
    expect(screen.getByRole("button", { name: "Adicionar tarefa" })).toBeInTheDocument();
});

test("Adiciona uma nova tarefa corretamente", () => {
    const tarefaMock = jest.fn();

    render(<NovaTarefa tarefa={tarefaMock}/>);

    const categoria = screen.getByLabelText("Categoria");
    const descricao = screen.getByLabelText("Descrição");

    fireEvent.change(categoria, {
        target: { value: "Estudos" }
    });

    fireEvent.change(descricao, {
        target: { value: "Estudar React" }
    });

    expect(categoria).toHaveValue("Estudos");
    expect(descricao).toHaveValue("Estudar React");

    fireEvent.click(
        screen.getByRole("button", { name: "Adicionar tarefa" })
    );

    expect(tarefaMock).toHaveBeenCalled();
});

test("Não adiciona tarefa com campos vazios", () => {
    window.alert = jest.fn();

    const tarefaMock = jest.fn();

    render(<NovaTarefa tarefa={tarefaMock} />);

    fireEvent.click(
        screen.getByRole("button", { name: "Adicionar tarefa" })
    );

    expect(window.alert).toHaveBeenCalledWith("Preencha todos os campos");
    expect(tarefaMock).not.toHaveBeenCalled();
});

