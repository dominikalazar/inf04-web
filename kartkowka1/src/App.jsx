import { useState } from "react";

const sklepy = [
  "Allegro",
  "Amazon",
  "Zalando",
  "Empik",
  "Ceneo",
];

function Sklep({ nazwa }) {
  return <li>{nazwa}</li>;
}

function App() {
  const [imie, setImie] = useState("");
  const [numer, setNumer] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Imię i nazwisko:", imie);
    console.log("Numer:", numer);

    const indeks = Number(numer) - 1;

    if (sklepy[indeks] !== undefined) {
      console.log("Wybrany sklep:", sklepy[indeks]);
    } else {
      console.log("Nieprawidłowy numer sklepu internetowego");
    }
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-3">
        Liczba sklepów internetowych: {sklepy.length}
      </h1>

      <ol className="mb-4">
        {sklepy.map((sklep, index) => (
          <Sklep key={index} nazwa={sklep} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Imię i nazwisko:
          </label>

          <input
            type="text"
            className="form-control"
            value={imie}
            onChange={(event) => setImie(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Numer sklepu internetowego:
          </label>

          <input
            type="number"
            className="form-control"
            value={numer}
            onChange={(event) => setNumer(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Zatwierdź wybór
        </button>
      </form>
    </div>
  );
}

export default App;