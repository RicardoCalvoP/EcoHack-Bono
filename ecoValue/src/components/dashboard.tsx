import { useState } from "react";
import ButtonsHeaders from "./ButtonsHeaders";
import CardMenu, { type CardItem } from "./CardMenu";
import CalculatorDashboard from "./calculator/CalculatorDashboard";
import RecommendationDashboard from "./recomendation/RecomendationDashboard";
import { Calculator, TrendingDown, Leaf, Factory } from "lucide-react";
import Analysis from "./analysis/Analysis";

export type ComboItems = {
  mainCategory: string; // Main category for the combo
  mainCategoryTechnology: string; // Technology used in the main category
  mainCategoryCost: number; // Cost of the main category technology
  mainCategoryEmission: number;
  note: string;
}

export type AnalysisItems = {
  mainCategory: string,
  CO2Reduction: number;
  eclecticReduction: number;
  gasReduction?: number;
  energeticSaving: number;
  initialInversion: number;
  economicSaving: number;
  ROI: number;
  payback: number;
  utilLife: number;
}


const Dashboard: React.FC = () => {


  // =======================
  // State Variables
  // =======================

  const [activeTab, setActiveTab] = useState<number>(0);

  // Value of each input in the calculator
  // These values will be updated by the CalculatorDashboard component
  const [electricity, setElectricidad] = useState(0); // kWh
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

  const [combo, setCombo] = useState<0 | 1>(0);

  // =======================
  // Functions
  // =======================

  // Calculate what is the most significant category
  // by comparing the results of each category
  // based on the highest value of CO2 emissions
  // and return the name of that category

  function calcularCategoriaMayor(): string {
    const categories = [
      { name: "Electricidad", valor: resultadoElectricidad },
      { name: "Gas Natural", valor: resultadoHornoGasNatural },
      { name: "Caldera GLP", valor: resultadoCalderaGLP },
      { name: "Vehículos", valor: resultadoVehiculosGasolina },
      { name: "Camiones", valor: resultadoCamionesDiesel },
      { name: "Montacargas", valor: resultadoMontacargasGLP },
    ];

    return categories.sort((a, b) => b.valor - a.valor)[0].name;
  }

  // Calculate the equivalent number of trees that would need to be planted
  // to offset the total CO2 emissions

  function calcularArbolesEquivalentes(co2: number): number {
    const CO2_POR_ARBOL = 22;
    return Math.ceil(co2 / CO2_POR_ARBOL);
  }

  function calculateKWpH(kWh: number): number {
    // Assuming 1 kWh of electricity is equivalent to 0.0005 tons of CO2
    return kWh / 152;
  }

  const electricityKWpH = calculateKWpH(electricity);

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
    // Electricity Combo (el PPA es un pago constante mientras que el panel solar es un pago de contado grande)
    {
      mainCategory: "Electricidad",
      mainCategoryTechnology: "PPA",
      mainCategoryCost: 0.07, // USD por kWh*mes
      mainCategoryEmission: electricity,
      note: "Costo Mensual",

    },
    {
      mainCategory: "Electricidad",
      mainCategoryTechnology: "Panel Solar",
      mainCategoryCost: 1240, // USD
      mainCategoryEmission: electricityKWpH,
      note: "Costo de contado",
    },
    // Furnace Combo ()
    {
      mainCategory: "Gas Natural",
      mainCategoryTechnology: "Horno Automático",
      mainCategoryCost: 25000, // USD por horno
      mainCategoryEmission: 1,
      note: "Costo de contado",
    },
    {
      mainCategory: "Gas Natural",
      mainCategoryTechnology: "Horno Eléctrico",
      mainCategoryCost: 100000, // USD por horno
      mainCategoryEmission: 1,
      note: "Costo de contado",
    },
    // Boiler Combo
    {
      mainCategory: "Caldera GLP",
      mainCategoryTechnology: "Boiler Automático",
      mainCategoryCost: 25000, // USD por horno
      mainCategoryEmission: 1,
      note: "Costo de contado",
    },
    {
      mainCategory: "Caldera GLP",
      mainCategoryTechnology: "Boiler Eléctrico",
      mainCategoryCost: 50000, // USD por horno
      mainCategoryEmission: 1,
      note: "Costo de contado",
    },
    // Gas Vehicles Combo
    {
      mainCategory: "Vehículos",
      mainCategoryTechnology: "Vehículo Híbrido",
      mainCategoryCost: 25000, // USD
      mainCategoryEmission: 1,
      note: "Costo de contado",
    },
    {
      mainCategory: "Vehículos",
      mainCategoryTechnology: "Vehículo Eléctrico",
      mainCategoryCost: 40000, // USD
      mainCategoryEmission: 1,
      note: "Costo de contado",
    },
    // Deisel Vehicles Combo
    {
      mainCategory: "Camiones",
      mainCategoryTechnology: "Camión Híbrido",
      mainCategoryCost: 80000, // USD
      mainCategoryEmission: 1,
      note: "Costo de contado",
    },
    {
      mainCategory: "Camiones",
      mainCategoryTechnology: "Camión Eléctrico",
      mainCategoryCost: 200000, // USD
      mainCategoryEmission: 1,
      note: "Costo de contado",
    },
    // Forklift Vehicles Combo
    {
      mainCategory: "Montacargas",
      mainCategoryTechnology: "Montacargas Híbrido",
      mainCategoryCost: 30000, // USD
      mainCategoryEmission: 1,
      note: "Costo de contado",
    },
    {
      mainCategory: "Montacargas",
      mainCategoryTechnology: "Montacargas Eléctrico",
      mainCategoryCost: 45000, // USD
      mainCategoryEmission: 1,
      note: "Costo de contado",
    }
  ];

  // Analyisis Calculations

  const analysisSets: AnalysisItems[] = [
    // Electricidad
    {
      mainCategory: "Electricidad",
      CO2Reduction: electricity * 0.455, // ?
      eclecticReduction: NaN,
      energeticSaving: NaN,
      initialInversion: NaN,
      economicSaving: (electricity * 0.15) - (electricity * 0.07),
      ROI: NaN,
      payback: NaN,
      utilLife: 15,
    },
    {
      mainCategory: "Electricidad",
      CO2Reduction: resultadoElectricidad,
      eclecticReduction: electricity,
      energeticSaving: electricity / electricity * 100,
      initialInversion: 1240 * electricityKWpH,
      economicSaving: (((((electricity * 0.15) * 12) * 25) - (1240 * electricityKWpH)) / 25) / 12,
      ROI: (((((electricity * 0.15) * 12) * 25) - (1240 * electricityKWpH)) / 25) / (1240 * electricityKWpH) * 100,
      payback: (Combos[1].mainCategoryCost * Combos[1].mainCategoryEmission) / (((((electricity * 0.15) * 12) * 25) - (1240 * electricityKWpH)) / 25),
      utilLife: 25,
    },

    // Gas Natural
    {
      mainCategory: "Gas Natural",
      CO2Reduction: 1.9 * hornoGasNatural,
      eclecticReduction: NaN,
      gasReduction: 0.2 * hornoGasNatural,
      energeticSaving: 20,
      initialInversion: 25000,
      economicSaving: (0.2 * hornoGasNatural * 0.37 * 0.37),
      ROI: ((0.2 * hornoGasNatural * 0.37 * 0.37 * 12) / 25000) * 100,
      payback: 25000 / (0.2 * hornoGasNatural * 0.37 * 0.37 * 12),
      utilLife: 2,
    },
    {
      mainCategory: "Gas Natural",
      CO2Reduction: resultadoHornoGasNatural,
      eclecticReduction: NaN,
      energeticSaving: 100,
      gasReduction: hornoGasNatural,
      initialInversion: 100000,
      economicSaving: (hornoGasNatural * 0.12),
      ROI: ((hornoGasNatural * 0.12 * 12) / 100000) * 100,
      payback: 100000 / (hornoGasNatural * 0.12 * 12),
      utilLife: 25,
    },

    // Caldera GLP
    {
      mainCategory: "Caldera GLP",
      CO2Reduction: 99,
      eclecticReduction: 99,
      energeticSaving: 99,
      initialInversion: 99,
      economicSaving: 99,
      ROI: 99,
      payback: 99,
      utilLife: 99,
    },
    {
      mainCategory: "Caldera GLP",
      CO2Reduction: 88,
      eclecticReduction: 88,
      energeticSaving: 88,
      initialInversion: 88,
      economicSaving: 88,
      ROI: 88,
      payback: 88,
      utilLife: 88,
    },

    // Vehículos
    {
      mainCategory: "Vehículos",
      CO2Reduction: 99,
      eclecticReduction: 99,
      energeticSaving: 99,
      initialInversion: 99,
      economicSaving: 99,
      ROI: 99,
      payback: 99,
      utilLife: 99,
    },
    {
      mainCategory: "Vehículos",
      CO2Reduction: 88,
      eclecticReduction: 88,
      energeticSaving: 88,
      initialInversion: 88,
      economicSaving: 88,
      ROI: 88,
      payback: 88,
      utilLife: 88,
    },

    // Camiones
    {
      mainCategory: "Camiones",
      CO2Reduction: 99,
      eclecticReduction: 99,
      energeticSaving: 99,
      initialInversion: 99,
      economicSaving: 99,
      ROI: 99,
      payback: 99,
      utilLife: 99,
    },
    {
      mainCategory: "Camiones",
      CO2Reduction: 88,
      eclecticReduction: 88,
      energeticSaving: 88,
      initialInversion: 88,
      economicSaving: 88,
      ROI: 88,
      payback: 88,
      utilLife: 88,
    },

    // Montacargas
    {
      mainCategory: "Montacargas",
      CO2Reduction: 99,
      eclecticReduction: 99,
      energeticSaving: 99,
      initialInversion: 99,
      economicSaving: 99,
      ROI: 99,
      payback: 99,
      utilLife: 99,
    },
    {
      mainCategory: "Montacargas",
      CO2Reduction: 88,
      eclecticReduction: 88,
      energeticSaving: 88,
      initialInversion: 88,
      economicSaving: 88,
      ROI: 88,
      payback: 88,
      utilLife: 88,
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
        headers={["Calculadora", "Recomendaciones", "Análisis"]}
        onHeaderClick={(index) => setActiveTab(index)}
        activeTab={activeTab} // 👈 Esto es lo importante
      />


      {activeTab === 0 && <CalculatorDashboard
        electricidad={electricity}
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
          combo={combo}
          setCombo={setCombo}
        />}
      {activeTab === 2 && <Analysis
        category={calcularCategoriaMayor()}
        analysisSets={analysisSets}
        combos={Combos}
        combo={combo}
      />}
    </div>
  );
};

export default Dashboard;
