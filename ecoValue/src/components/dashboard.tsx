import { useState } from "react";
import ButtonsHeaders from "./ButtonsHeaders";
import CardMenu, { type CardItem } from "./CardMenu";
import CalculatorDashboard from "./calculator/CalculatorDashboard";
import Analyisis from "./analysis/Analyisis";
import { Calculator, TrendingDown, Leaf, Factory } from "lucide-react";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Value of each input in the calculator
  // These values will be updated by the CalculatorDashboard component
  const [electricidad, setElectricidad] = useState(0); // kWh
  const [hornoGasNatural, setHornoGasNatural] = useState(0); // m3
  const [calderaGLP, setCalderaGLP] = useState(0); // litros
  const [vehiculosGasolina, setVehiculosGasolina] = useState(0); // litros
  const [camionesDiesel, setCamionesDiesel] = useState(0); // litros
  const [montacargasGLP, setMontacargasGLP] = useState(0); // litros

  // Emission results from the calculator
  // These will be calculated based on the inputs

  const [resultadoElectricidad, setResultadoElectricidad] = useState(0); // tCO2e
  const [resultadoHornoGasNatural, setResultadoHornoGasNatural] = useState(0); // tCO2e
  const [resultadoCalderaGLP, setResultadoCalderaGLP] = useState(0); // tCO2e
  const [resultadoVehiculosGasolina, setResultadoVehiculosGasolina] = useState(0); // tCO2e
  const [resultadoCamionesDiesel, setResultadoCamionesDiesel] = useState(0); // tCO2e
  const [resultadoMontacargasGLP, setResultadoMontacargasGLP] = useState(0); // tCO2e
  const [resultadoTotal, setResultadoTotal] = useState(0); // tCO2e

  function calcularCategoriaMayor(): string {
    const categorias = [
      { nombre: "Electricidad", valor: resultadoElectricidad },
      { nombre: "Gas Natural", valor: resultadoHornoGasNatural },
      { nombre: "Caldera GLP", valor: resultadoCalderaGLP },
      { nombre: "Vehículos", valor: resultadoVehiculosGasolina },
      { nombre: "Camiones", valor: resultadoCamionesDiesel },
      { nombre: "Montacargas", valor: resultadoMontacargasGLP },
    ];

    return categorias.sort((a, b) => b.valor - a.valor)[0].nombre;
  }

  function calcularArbolesEquivalentes(co2: number): number {
    const CO2_POR_ARBOL = 22;
    return Math.ceil(co2 / CO2_POR_ARBOL);
  }

  const cardData: CardItem[] = [
    {
      title: "Total CO2",
      result: resultadoTotal.toFixed(2),
      subtitle: "kg CO₂/mes",
      icon: <Calculator size={48} />,
      warning: resultadoTotal > 1000 ? "high" : resultadoTotal > 500 ? "medium" : "low",
    },
    {
      title: "Categoría Mayor",
      result: calcularCategoriaMayor(),
      subtitle: "",
      icon: <TrendingDown size={48} />,
      warning: "medium",
    },
    {
      title: "Árboles Equivalentes",
      result: calcularArbolesEquivalentes(resultadoTotal).toString(),
      subtitle: "para compensar",
      icon: <Leaf size={48} />,
      warning: "low",
    },
    {
      title: "Nivel de Impacto",
      result: resultadoTotal > 1000 ? "Alto" : resultadoTotal > 500 ? "Moderado" : "Bajo",
      subtitle: "",
      icon: <Factory size={48} />,
      warning: resultadoTotal > 1000 ? "high" : resultadoTotal > 500 ? "medium" : "low",
    },
  ];

  return (
    <div className="Dashboard-content">
      <div className="Dashboard-title">
        <div className="Dashboard-icon">
          <Leaf size={48} />
        </div>
        Calculadora de Huella de Carbono
      </div>
      <div className="Dashboard-subtitle">Monitorea y reduce las emisiones de CO2 de tu empresa</div>

      <CardMenu cards={cardData} />

      <ButtonsHeaders
        headers={["Calculadora", "Análisis", "Recomendaciones"]}
        onHeaderClick={(index) => setActiveTab(index)}
        activeTab={activeTab} // 👈 Esto es lo importante
      />


      {activeTab === 0 && <CalculatorDashboard
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
        resultadoElectricidad={resultadoElectricidad}
        setResultadoElectricidad={setResultadoElectricidad}
        resultadoHornoGasNatural={resultadoHornoGasNatural}
        setResultadoHornoGasNatural={setResultadoHornoGasNatural}
        resultadoCalderaGLP={resultadoCalderaGLP}
        setResultadoCalderaGLP={setResultadoCalderaGLP}
        resultadoVehiculosGasolina={resultadoVehiculosGasolina}
        setResultadoVehiculosGasolina={setResultadoVehiculosGasolina}
        resultadoCamionesDiesel={resultadoCamionesDiesel}
        setResultadoCamionesDiesel={setResultadoCamionesDiesel}
        resultadoMontacargasGLP={resultadoMontacargasGLP}
        setResultadoMontacargasGLP={setResultadoMontacargasGLP}
        resultadoTotal={resultadoTotal}
        setResultadoTotal={setResultadoTotal}

      />}
      {activeTab === 1 && <Analyisis />}
      {activeTab === 2 && <div>Recomendaciones componente aquí</div>}
    </div>
  );
};

export default Dashboard;
