import { useState } from "react";
import ButtonsHeaders from "./ButtonsHeaders";
import CardMenu from "./CardMenu";
import CalculatorDashboard from "./calculator/CalculatorDashboard";
import RecommendationDashboard from "./recomendation/RecomendationDashboard";
import { Calculator, TrendingDown, Leaf, Factory } from "lucide-react";

type CardItem = {
  title: string;
  result: string;
  subtitle: string;
  icon: React.ReactNode;
  warning: string;
};

export type ComboItems = {
  mainCategory: string; // Main category for the combo
  electricityTechnology: string;
  electricityCost: number;
  furnaceNaturalGasTechnology: string;
  furnaceNaturalGasCost: number;
  boilerLPGTechnology: string;
  boilerLPGCost: number;
  gasolineVehiclesTechnology: string;
  gasolineVehiclesCost: number;
  dieselTrucksTechnology: string;
  dieselTrucksCost: number;
  forkliftLPGTechnology: string;
  forkliftLPGCost: number;
  totalCost: number;
}

const Dashboard: React.FC = () => {


  // =======================
  // State Variables
  // =======================

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




  // =======================
  // Functions
  // =======================

  // Calculate what is the most significant category
  // by comparing the results of each category
  // based on the highest value of CO2 emissions
  // and return the name of that category

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

  // Calculate the equivalent number of trees that would need to be planted
  // to offset the total CO2 emissions

  function calcularArbolesEquivalentes(co2: number): number {
    const CO2_POR_ARBOL = 22;
    return Math.ceil(co2 / CO2_POR_ARBOL);
  }

  // =======================
  // Items
  // =======================

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

  const Combos: ComboItems[] = [
    // Electricity Combo
    {
      mainCategory: "Electricidad",
      electricityTechnology: "PPA",
      electricityCost: 0.12, // $/kWh
      furnaceNaturalGasTechnology: "",
      furnaceNaturalGasCost: 0.05, // $/m3
      boilerLPGTechnology: "",
      boilerLPGCost: 0.08, // $/litro
      gasolineVehiclesTechnology: "",
      gasolineVehiclesCost: 1.2, // $/litro
      dieselTrucksTechnology: "",
      dieselTrucksCost: 1.5, // $/litro
      forkliftLPGTechnology: "",
      forkliftLPGCost: 0.07, // $/litro
      totalCost: 0 // This will be calculated based on the inputs
    },
    {
      mainCategory: "Electricidad",
      electricityTechnology: "Paneles Solares",
      electricityCost: 0.15, // $/kWh
      furnaceNaturalGasTechnology: "",
      furnaceNaturalGasCost: 0.04, // $/m3
      boilerLPGTechnology: "",
      boilerLPGCost: 0.09, // $/litro
      gasolineVehiclesTechnology: "",
      gasolineVehiclesCost: 1.5, // $/litro
      dieselTrucksTechnology: "",
      dieselTrucksCost: 1.2, // $/litro
      forkliftLPGTechnology: "",
      forkliftLPGCost: 0.06, // $/litro
      totalCost: 0 // This will be calculated based on the inputs
    },
    // Furnace Combo
    {
      mainCategory: "Gas Natural",
      electricityTechnology: "",
      electricityCost: 0.12, // $/kWh
      furnaceNaturalGasTechnology: "Recuperación de Calor",
      furnaceNaturalGasCost: 0.05, // $/m3
      boilerLPGTechnology: "",
      boilerLPGCost: 0.08, // $/litro
      gasolineVehiclesTechnology: "",
      gasolineVehiclesCost: 1.2, // $/litro
      dieselTrucksTechnology: "",
      dieselTrucksCost: 1.5, // $/litro
      forkliftLPGTechnology: "",
      forkliftLPGCost: 0.07, // $/litro
      totalCost: 0 // This will be calculated based on the inputs
    },
    {
      mainCategory: "Gas Natural",
      electricityTechnology: "",
      electricityCost: 0.15, // $/kWh
      furnaceNaturalGasTechnology: "Horno Electrico",
      furnaceNaturalGasCost: 0.04, // $/m3
      boilerLPGTechnology: "",
      boilerLPGCost: 0.09, // $/litro
      gasolineVehiclesTechnology: "",
      gasolineVehiclesCost: 1.5, // $/litro
      dieselTrucksTechnology: "",
      dieselTrucksCost: 1.2, // $/litro
      forkliftLPGTechnology: "",
      forkliftLPGCost: 0.06, // $/litro
      totalCost: 0 // This will be calculated based on the inputs
    },
    // Furnace Combo
    {
      mainCategory: "Caldera GLP",
      electricityTechnology: "",
      electricityCost: 0.12, // $/kWh
      furnaceNaturalGasTechnology: "",
      furnaceNaturalGasCost: 0.05, // $/m3
      boilerLPGTechnology: "Recuperación de Calor",
      boilerLPGCost: 0.08, // $/litro
      gasolineVehiclesTechnology: "",
      gasolineVehiclesCost: 1.2, // $/litro
      dieselTrucksTechnology: "",
      dieselTrucksCost: 1.5, // $/litro
      forkliftLPGTechnology: "",
      forkliftLPGCost: 0.07, // $/litro
      totalCost: 0 // This will be calculated based on the inputs
    },
    {
      mainCategory: "Caldera GLP",
      electricityTechnology: "",
      electricityCost: 0.15, // $/kWh
      furnaceNaturalGasTechnology: "",
      furnaceNaturalGasCost: 0.04, // $/m3
      boilerLPGTechnology: "Electrico",
      boilerLPGCost: 0.09, // $/litro
      gasolineVehiclesTechnology: "",
      gasolineVehiclesCost: 1.5, // $/litro
      dieselTrucksTechnology: "",
      dieselTrucksCost: 1.2, // $/litro
      forkliftLPGTechnology: "",
      forkliftLPGCost: 0.06, // $/litro
      totalCost: 0 // This will be calculated based on the inputs
    },

    // Gas Vehicles Combo
    {
      mainCategory: "Vehículos",
      electricityTechnology: "",
      electricityCost: 0.10, // $/kWh
      furnaceNaturalGasTechnology: "",
      furnaceNaturalGasCost: 0.04, // $/m3
      boilerLPGTechnology: "",
      boilerLPGCost: 0.07, // $/litro
      gasolineVehiclesTechnology: "Hybrido",
      gasolineVehiclesCost: 1.4, // $/litro
      dieselTrucksTechnology: "",
      dieselTrucksCost: 1.6, // $/litro
      forkliftLPGTechnology: "",
      forkliftLPGCost: 0.05, // $/litro
      totalCost: 0 // This will be calculated based on the inputs
    },
    {
      mainCategory: "Vehículos",
      electricityTechnology: "",
      electricityCost: 0.11, // $/kWh
      furnaceNaturalGasTechnology: "",
      furnaceNaturalGasCost: 0.06, // $/m3
      boilerLPGTechnology: "",
      boilerLPGCost: 0.08, // $/litro
      gasolineVehiclesTechnology: "Electrico",
      gasolineVehiclesCost: 1.3, // $/litro
      dieselTrucksTechnology: "",
      dieselTrucksCost: 1.4, // $/litro
      forkliftLPGTechnology: "",
      forkliftLPGCost: 0.04, // $/litro
      totalCost: 0 // This will be calculated based on the inputs
    },
    // Deisel Vehicles Combo
    {
      mainCategory: "Camiones",
      electricityTechnology: "",
      electricityCost: 0.10, // $/kWh
      furnaceNaturalGasTechnology: "",
      furnaceNaturalGasCost: 0.04, // $/m3
      boilerLPGTechnology: "",
      boilerLPGCost: 0.07, // $/litro
      gasolineVehiclesTechnology: "Hybrido",
      gasolineVehiclesCost: 1.4, // $/litro
      dieselTrucksTechnology: "",
      dieselTrucksCost: 1.6, // $/litro
      forkliftLPGTechnology: "",
      forkliftLPGCost: 0.05, // $/litro
      totalCost: 0 // This will be calculated based on the inputs
    },
    {
      mainCategory: "Camiones",
      electricityTechnology: "",
      electricityCost: 0.11, // $/kWh
      furnaceNaturalGasTechnology: "",
      furnaceNaturalGasCost: 0.06, // $/m3
      boilerLPGTechnology: "",
      boilerLPGCost: 0.08, // $/litro
      gasolineVehiclesTechnology: "Electrico",
      gasolineVehiclesCost: 1.3, // $/litro
      dieselTrucksTechnology: "",
      dieselTrucksCost: 1.4, // $/litro
      forkliftLPGTechnology: "",
      forkliftLPGCost: 0.04, // $/litro
      totalCost: 0 // This will be calculated based on the inputs
    },
    // Forklift Vehicles Combo
    {
      mainCategory: "Montacargas",
      electricityTechnology: "",
      electricityCost: 0.10, // $/kWh
      furnaceNaturalGasTechnology: "",
      furnaceNaturalGasCost: 0.04, // $/m3
      boilerLPGTechnology: "",
      boilerLPGCost: 0.07, // $/litro
      gasolineVehiclesTechnology: "",
      gasolineVehiclesCost: 1.4, // $/litro
      dieselTrucksTechnology: "",
      dieselTrucksCost: 1.6, // $/litro
      forkliftLPGTechnology: "Hybrido",
      forkliftLPGCost: 0.05, // $/litro
      totalCost: 0 // This will be calculated based on the inputs
    },
    {
      mainCategory: "Montacargas",
      electricityTechnology: "",
      electricityCost: 0.11, // $/kWh
      furnaceNaturalGasTechnology: "",
      furnaceNaturalGasCost: 0.06, // $/m3
      boilerLPGTechnology: "",
      boilerLPGCost: 0.08, // $/litro
      gasolineVehiclesTechnology: "",
      gasolineVehiclesCost: 1.3, // $/litro
      dieselTrucksTechnology: "",
      dieselTrucksCost: 1.4, // $/litro
      forkliftLPGTechnology: "Electrico",
      forkliftLPGCost: 0.04, // $/litro
      totalCost: 0 // This will be calculated based on the inputs
    }
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
        headers={["Calculadora", "Recomendaciones", "Análisis"]}
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
      {activeTab === 1 &&
        <RecommendationDashboard
          category={calcularCategoriaMayor()}
          combos={Combos}
        />}
      {activeTab === 2 && <div>Análisis componente aquí</div>}
    </div>
  );
};

export default Dashboard;
