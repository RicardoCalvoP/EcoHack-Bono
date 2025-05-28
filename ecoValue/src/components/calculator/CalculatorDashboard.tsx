import React, { useState } from "react";
import Calculator from "./Calculator";
import Results from "./Results";

const CalculatorDashboard: React.FC = () => {
  const [electricidad, setElectricidad] = useState(0);
  const [gasNatural, setGasNatural] = useState(0);
  const [combustible, setCombustible] = useState(0);
  const [vuelos, setVuelos] = useState(0);
  const [residuos, setResiduos] = useState(0);
  const [agua, setAgua] = useState(0);

  // Ejemplo simple de cálculo de emisiones (puedes usar factores reales)
  const total =
    electricidad * 0.0005 +
    gasNatural * 0.002 +
    combustible * 0.0024 +
    vuelos * 0.0001 +
    residuos * 0.001 +
    agua * 0.0002;

  return (
    <div className="calculator-dashboard">
      <h1>Calculator Dashboard</h1>
      <div className="Calculator">
        <Calculator
          electricidad={electricidad}
          setElectricidad={setElectricidad}
          gasNatural={gasNatural}
          setGasNatural={setGasNatural}
          combustible={combustible}
          setCombustible={setCombustible}
          vuelos={vuelos}
          setVuelos={setVuelos}
          residuos={residuos}
          setResiduos={setResiduos}
          agua={agua}
          setAgua={setAgua}
        />
        <Results
          total={total}
          electricidad={electricidad}
          gasNatural={gasNatural}
          combustible={combustible}
          vuelos={vuelos}
          residuos={residuos}
          agua={agua}
        />

      </div>
    </div>
  );
};

export default CalculatorDashboard;
