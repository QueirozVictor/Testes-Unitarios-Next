import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./page";

test("Renderiza as tarefas corretamente", async () => {
    render(await Home());

    expect(screen.getByText("Estudos")).toBeInTheDocument();
    expect(screen.getByText("Estudar Next.js")).toBeInTheDocument();

    expect(screen.getByText("Trabalho")).toBeInTheDocument();
    expect(
        screen.getByText("Fazer um projeto funcional com Next.Js")
    ).toBeInTheDocument();
});