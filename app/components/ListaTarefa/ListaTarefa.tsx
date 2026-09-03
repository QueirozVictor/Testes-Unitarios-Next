import { Tarefa } from "@/app/types/Tarefa"

type Props = {
    tarefa: Tarefa[]
}

export const ListaTarefa = ({ tarefa }: Props) => {
    return (
        <>
            {tarefa.map(t =>
                <div
                    key={t.id}
                    className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-gray-50 p-4 transition hover:border-gray-300 hover:shadow-sm"
                >
                    <h2 className="text-sm font-semibold text-gray-800">
                        {t.categoria}
                    </h2>

                    <p className="text-sm text-gray-500">
                        {t.descricao}
                    </p>
                </div>
            )}
        </>
    )
}
