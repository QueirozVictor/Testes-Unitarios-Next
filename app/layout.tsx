import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lista de Tarefas",
  description: "Uma aplicação simples para organizar suas tarefas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900 antialiased">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
