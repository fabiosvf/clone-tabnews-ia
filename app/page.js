import Confetti from "./confetti";

// A página é gerada estaticamente e regenerada em segundo plano a cada 60s
// (ISR), para o visitante não esperar a API do TabNews a cada acesso.
export const revalidate = 60;

const TABNEWS_URL = "https://www.tabnews.com.br";

async function getTotalContents() {
  try {
    const response = await fetch(
      `${TABNEWS_URL}/api/v1/contents?per_page=1&strategy=new`,
      { next: { revalidate } },
    );

    if (!response.ok) return null;

    const total = Number(response.headers.get("x-pagination-total-rows"));
    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const totalContents = await getTotalContents();

  return (
    <main
      style={{
        maxWidth: "48rem",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <Confetti />

      <h1 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
        🚧 Em Construção 🚧
      </h1>

      <p style={{ fontSize: "1.5rem", lineHeight: 1.5 }}>
        Estamos neste exato momento reconstruindo o TabNews, um lugar na
        internet para quem trabalha com tecnologia e precisa consumir conteúdos
        com valor concreto.
      </p>

      <p style={{ fontSize: "1.25rem", marginTop: "2rem" }}>
        {totalContents === null ? (
          "Não foi possível obter o total de conteúdos publicados no TabNews."
        ) : (
          <>
            Total de conteúdos publicados no TabNews:{" "}
            <strong>{totalContents.toLocaleString("pt-BR")}</strong>
          </>
        )}
      </p>

      <p style={{ fontSize: "1.25rem", marginTop: "1.5rem" }}>
        <a href={TABNEWS_URL} target="_blank" rel="noopener noreferrer">
          Acesse o TabNews oficial
        </a>
      </p>
    </main>
  );
}
