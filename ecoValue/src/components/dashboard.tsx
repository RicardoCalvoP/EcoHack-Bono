import { useState } from "react";
import ButtonsHeaders from "./ButtonsHeaders";
import CardMenu from "./CardMenu";
import CalculatorDashboard from "./calculator/CalculatorDashboard";
import { cardData } from "../data/cardInfo";
import { Leaf } from "lucide-react";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

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
      />

      {activeTab === 0 && <CalculatorDashboard />}
      {activeTab === 1 && <div>Análisis componente aquí</div>}
      {activeTab === 2 && <div>Recomendaciones componente aquí</div>}
    </div>
  );
};

export default Dashboard;
