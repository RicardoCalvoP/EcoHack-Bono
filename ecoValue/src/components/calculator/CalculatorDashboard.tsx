import React, { useEffect } from "react";
import Calculator from "./Calculator";
import Results from "./Results";

type CalculatorDashboardProps = {
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

  resultadoElectricidad: number;
  setResultadoElectricidad: (value: number) => void;
  resultadoHornoGasNatural: number;
  setResultadoHornoGasNatural: (value: number) => void;
  resultadoCalderaGLP: number;
  setResultadoCalderaGLP: (value: number) => void;
  resultadoVehiculosGasolina: number;
  setResultadoVehiculosGasolina: (value: number) => void;
  resultadoCamionesDiesel: number;
  setResultadoCamionesDiesel: (value: number) => void;
  resultadoMontacargasGLP: number;
  setResultadoMontacargasGLP: (value: number) => void;
  resultadoTotal: number;
  setResultadoTotal: (value: number) => void;
};

const CalculatorDashboard: React.FC<CalculatorDashboardProps> = ({
  electricidad, setElectricidad,
  hornoGasNatural, setHornoGasNatural,
  calderaGLP, setCalderaGLP,
  vehiculosGasolina, setVehiculosGasolina,
  camionesDiesel, setCamionesDiesel,
  montacargasGLP, setMontacargasGLP,
  resultadoElectricidad, setResultadoElectricidad,
  resultadoHornoGasNatural, setResultadoHornoGasNatural,
  resultadoCalderaGLP, setResultadoCalderaGLP,
  resultadoVehiculosGasolina, setResultadoVehiculosGasolina,
  resultadoCamionesDiesel, setResultadoCamionesDiesel,
  resultadoMontacargasGLP, setResultadoMontacargasGLP,
  resultadoTotal, setResultadoTotal
}) => {
  useEffect(() => {
    const rElectricidad = electricidad * 0.000425;
    const rHorno = hornoGasNatural * 0.0022;
    const rCaldera = calderaGLP * 0.0022;
    const rGasolina = vehiculosGasolina * 0.0032;
    const rDiesel = camionesDiesel * 0.0038;
    const rMontacargas = montacargasGLP * 0.0022;

    const total = rElectricidad + rHorno + rCaldera + rGasolina + rDiesel + rMontacargas;

    setResultadoElectricidad(rElectricidad);
    setResultadoHornoGasNatural(rHorno);
    setResultadoCalderaGLP(rCaldera);
    setResultadoVehiculosGasolina(rGasolina);
    setResultadoCamionesDiesel(rDiesel);
    setResultadoMontacargasGLP(rMontacargas);
    setResultadoTotal(total);
  }, [
    electricidad, hornoGasNatural, calderaGLP,
    vehiculosGasolina, camionesDiesel, montacargasGLP
  ]);

  return (
    <div className="calculator-dashboard">
      <div className="Calculator">
        <Calculator
          electricidad={electricidad}
          setElectricidad={setElectricidad}
          hornoGasNatural={hornoGasNatural}
          setHornoGasNatural={setHornoGasNatural}
          calderaGLP={calderaGLP}
          setCalderaGLP={setCalderaGLP}
          vehiculosGasolina={vehiculosGasolina}
          setVehiculosGasolina={setVehiculosGasolina}
          camionesDiesel={camionesDiesel}
          setCamionesDiesel={setCamionesDiesel}
          montacargasGLP={montacargasGLP}
          setMontacargasGLP={setMontacargasGLP}
        />
        <Results
          total={resultadoTotal}
          electricidad={resultadoElectricidad}
          hornoGasNatural={resultadoHornoGasNatural}
          calderaGLP={resultadoCalderaGLP}
          vehiculosGasolina={resultadoVehiculosGasolina}
          camionesDiesel={resultadoCamionesDiesel}
          montacargasGLP={resultadoMontacargasGLP}
        />
      </div>
    </div>
  );
};

export default CalculatorDashboard;
