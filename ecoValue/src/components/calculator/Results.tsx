import React from "react";

type ResultsProps = {
  total: number;
  electricidad: number;
  gasNatural: number;
  combustible: number;
  vuelos: number;
  residuos: number;
  agua: number;
};

const Results: React.FC<ResultsProps> = ({
  total,
  electricidad,
  gasNatural,
  combustible,
  vuelos,
  residuos,
  agua,
}) => {
  return (
    <div className="results">
      <h2>Resultados de Emisiones</h2>
      <p>Electricidad (kWh): {electricidad}</p>
      <p>Gas Natural (m³): {gasNatural}</p>
      <p>Combustible (litros): {combustible}</p>
      <p>Vuelos (km): {vuelos}</p>
      <p>Residuos (kg): {residuos}</p>
      <p>Agua (m³): {agua}</p>
      <hr />
      <p><strong>Total CO₂ estimado: {total.toFixed(2)} kg</strong></p>
    </div>
  );
};

export default Results;
