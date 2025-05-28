import ButtonsHeaders from "./ButtonsHeaders";
import CardMenu from "./CardMenu";
import { cardData } from "../data/cardInfo";
import { Leaf } from "lucide-react";

const Dashboard: React.FC = () => {
  return (
    <div className="Dashboard-content">
      <h1 className="Dashboard-title">
        <Leaf className="w-10 h-10 text-green-600" />
        Calculadora de Huella de Carbono
      </h1>
      <h2 className="Dashboard-subtitle">Monitorea y reduce las emisiones de CO2 de tu empresa</h2>
      <CardMenu cards={cardData} />
      <ButtonsHeaders headers={["Calculadora", "Análisis", "Recomendaciones"]} />
    </div>
  );
};

export default Dashboard;
