import React from "react";
import {
  Zap,
  Flame,
  Thermometer,
  Car,
  Truck,
  Package
} from "lucide-react";


type ResultsProps = {
  total: number;
  electricidad: number;
  hornoGasNatural: number;
  calderaGLP: number;
  vehiculosGasolina: number;
  camionesDiesel: number;
  montacargasGLP: number;
};

const Results: React.FC<ResultsProps> = ({
  total,
  electricidad,
  hornoGasNatural,
  calderaGLP,
  vehiculosGasolina,
  camionesDiesel,
  montacargasGLP,
}) => {
  const resultsData = [
    { label: "Energía eléctrica", value: electricidad, icon: <Zap size={18} /> },
    { label: "Gas Natural", value: hornoGasNatural, icon: <Flame size={18} /> },
    { label: "Caldera GLP", value: calderaGLP, icon: <Thermometer size={18} /> },
    { label: "Vehículos Gasolina", value: vehiculosGasolina, icon: <Car size={18} /> },
    { label: "Camiones Diesel", value: camionesDiesel, icon: <Truck size={18} /> },
    { label: "Montacargas GLP", value: montacargasGLP, icon: <Package size={18} /> },
  ];

  return (
    <div className="Calculator-content">
      <div className="Calculator-title">Resultados de Emisiones de CO₂</div>
      <div className="Calculator-results">
        {resultsData.map((item, index) => (
          <div className="Calculator-results-row" key={index}>
            <div className="Calculator-results-subtitle">
              {item.icon} <span style={{ marginLeft: "0.5rem" }}>{item.label}:</span>
            </div>
            <div className="Calculator-results-result">
              {parseFloat(item.value.toFixed(4))}
              <span className="units">kg CO<sub>2</sub></span>
            </div>
          </div>
        ))}
        <hr />
        <p><strong>Total estimado: {total.toFixed(2)} kg CO₂</strong></p>
      </div>
    </div>
  );
};

export default Results;
