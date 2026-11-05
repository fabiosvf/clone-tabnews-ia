export const metadata = { title: "Nomes" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
