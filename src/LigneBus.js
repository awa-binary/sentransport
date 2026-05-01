import "./LigneBus.css";

function LigneBus({ numero, depart, arrivee }) {
  return (
    <div className="ligne-bus">
      <span className="ligne-numero">{numero}</span>
      <span className="ligne-trajet">
        {depart} &rarr; {arrivee}
      </span>
    </div>
  );
}

export default LigneBus;
