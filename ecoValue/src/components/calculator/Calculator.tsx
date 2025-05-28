import React from "react";
import InputMenu from "./InputMenu";

type CalculatorProps = {
  electricidad: number;
  setElectricidad: (value: number) => void;
  gasNatural: number;
  setGasNatural: (value: number) => void;
  combustible: number;
  setCombustible: (value: number) => void;
  vuelos: number;
  setVuelos: (value: number) => void;
  residuos: number;
  setResiduos: (value: number) => void;
  agua: number;
  setAgua: (value: number) => void;
};

const Calculator: React.FC<CalculatorProps> = ({
  electricidad, setElectricidad,
  gasNatural, setGasNatural,
  combustible, setCombustible,
  vuelos, setVuelos,
  residuos, setResiduos,
  agua, setAgua
}) => {
  const inputs = [
    { value: electricidad, onChange: setElectricidad, placeholder: "0", type: "number" },
    { value: gasNatural, onChange: setGasNatural, placeholder: "0", type: "number" },
    { value: combustible, onChange: setCombustible, placeholder: "0", type: "number" },
    { value: vuelos, onChange: setVuelos, placeholder: "0", type: "number" },
    { value: residuos, onChange: setResiduos, placeholder: "0", type: "number" },
    { value: agua, onChange: setAgua, placeholder: "0", type: "number" },
  ];

  return (
    <div className="Calculator-content">
      <div className="Calculadora-title">Datos de Consumo Mensual</div>
      <InputMenu inputs={inputs} />
    </div>
  );
};

export default Calculator;
