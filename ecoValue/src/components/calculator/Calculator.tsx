import React from "react";
import InputMenu from "./InputMenu";

type CalculatorProps = {
  electricidad: number;
  setElectricidad: (value: number) => void;
  hornoGasNatural: number;
  setHornoGasNatural: (value: number) => void;
  calderaGLP: number;
  setCalderaGLP: (value: number) => void;
  vehiculosGasolina: number;
  setVehiculosGasolina: (value: number) => void;
  camionesDiesel: number;
  setCamionesDiesel: (value: number) => void;
  montacargasGLP: number;
  setMontacargasGLP: (value: number) => void;
};

const Calculator: React.FC<CalculatorProps> = ({
  electricidad, setElectricidad,
  hornoGasNatural, setHornoGasNatural,
  calderaGLP, setCalderaGLP,
  vehiculosGasolina, setVehiculosGasolina,
  camionesDiesel, setCamionesDiesel,
  montacargasGLP, setMontacargasGLP
}) => {
  const inputs = [
    { label: "Energía eléctrica (kWh)", value: electricidad, onChange: setElectricidad, placeholder: "0", type: "number" },
    { label: "Horno Gas Natural (m³)", value: hornoGasNatural, onChange: setHornoGasNatural, placeholder: "0", type: "number" },
    { label: "Caldera GLP (litros)", value: calderaGLP, onChange: setCalderaGLP, placeholder: "0", type: "number" },
    { label: "Vehículos Gasolina (litros)", value: vehiculosGasolina, onChange: setVehiculosGasolina, placeholder: "0", type: "number" },
    { label: "Camiones Diesel (litros)", value: camionesDiesel, onChange: setCamionesDiesel, placeholder: "0", type: "number" },
    { label: "Montacargas GLP (litros)", value: montacargasGLP, onChange: setMontacargasGLP, placeholder: "0", type: "number" },
  ];

  return (
    <div className="Calculator-content">
      <div className="Calculator-title">Datos de Consumo Mensual</div>
      <InputMenu inputs={inputs} />
    </div>
  );
};

export default Calculator;
