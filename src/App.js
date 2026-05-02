import "./App.css";
import Header from "./Header";
import ListeLignes from "./ListeLignes";
import Footer from "./Footer";
import StatReseau from "./StatReseau";

function App() {
  const lignes = [
    {
      id: 1,
      numero: "1",
      depart: "Parcelles Assainies",
      arrivee: "Plateau",
      arrets: 14,
      couleur: "#c0392b",
    },
    {
      id: 2,
      numero: "7",
      depart: "Guediawaye",
      arrivee: "Place Obelisque",
      arrets: 18,
      couleur: "#3498db",
    },
    {
      id: 3,
      numero: "15",
      depart: "Pikine",
      arrivee: "Medina",
      arrets: 12,
      couleur: "#6c3483",
    },
    {
      id: 4,
      numero: "23",
      depart: "Ouakam",
      arrivee: "Grand Dakar",
      arrets: 10,
      couleur: "#2471a3",
    },
    {
      id: 5,
      numero: "8",
      depart: "Almadies",
      arrivee: "Colobane",
      arrets: 16,
      couleur: "#b7950b",
    },
    {
      id: 6,
      numero: "12",
      depart: "Yoff",
      arrivee: "Sandaga",
      arrets: 11,
    },
    {
      id: 7,
      numero: "3",
      depart: "Fann",
      arrivee: "HLM",
      arrets: 9,
      couleur: "#117a65",
    },
    {
      id: 8,
      numero: "9",
      depart: "Liberte",
      arrivee: "Medina",
      arrets: 13,
      couleur: "#784212",
    },
    {
      id: 9,
      numero: "17",
      depart: "Sicap",
      arrivee: "Dieuppeul",
      arrets: 8,
      couleur: "#1f618d",
    },
    {
      id: 10,
      numero: "21",
      depart: "HLM",
      arrivee: "Sandaga",
      arrets: 11,
      couleur: "#6c3483",
    },
  ];

  return (
    <div className="App">
      <Header />

      <main className="contenu">
        <StatReseau lignes={lignes} />
        <ListeLignes lignes={lignes} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
