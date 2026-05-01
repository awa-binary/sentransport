import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Statistique, Statistique2, Statistique3 } from "./Statistique";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <p>
          Bienvenue ! Cette application vous aide à trouver votre ligne de bus à
          Dakar
        </p>
        <Statistique />
        <Statistique2 />
        <Statistique3 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
