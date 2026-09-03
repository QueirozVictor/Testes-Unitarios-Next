import { Tarefas } from "./components/Tarefa/Tarefa";
import { buscarTarefas } from "./data/Tarefas";

export default async function Home() {
  const tarefas = await buscarTarefas();

  return (
    <div>
      <Tarefas tarefasIniciais={tarefas} />
    </div>
  );
}
