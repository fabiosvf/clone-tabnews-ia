const names = ["Fabio", "Regina", "Karina", "Sara"];

export default function Home() {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        textAlign: "center",
        fontSize: "4rem",
        textTransform: "uppercase",
      }}
    >
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}
