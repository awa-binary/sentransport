import "./Statistique.css";

function Statistique() {
  return (
    <div className="statistique">
      <span className="stat-chiffre">10</span>
      <span className="stat-libelle"> lignes</span>
    </div>
  );
}

function Statistique2() {
  return (
    <div className="statistique">
      <span className="stat-chiffre">150</span>
      <span className="stat-libelle"> arrêts</span>
    </div>
  );
}

function Statistique3() {
  return (
    <div className="statistique">
      <span className="stat-chiffre">40</span>
      <span className="stat-libelle"> bus en service</span>
    </div>
  );
}

export { Statistique, Statistique2, Statistique3 };
