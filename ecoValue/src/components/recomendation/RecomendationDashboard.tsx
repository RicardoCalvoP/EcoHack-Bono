import React, { useState } from "react";
import { type ComboItems } from "../dashboard"

type RecommendationDashboardProps = {
  category: string;
  combos: ComboItems[];
};

const RecommendationDashboard: React.FC<RecommendationDashboardProps> = ({ category, combos }) => {
  const [comboNivel, setComboNivel] = useState<0 | 1>(0); // 0 = básico, 1 = óptimo

  const combosFiltrados = combos.filter(combo => combo.mainCategory === category);
  const comboActual = combosFiltrados[comboNivel];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Recomendaciones para: {category}</h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setComboNivel(0)}
          className={`px-4 py-2 rounded ${comboNivel === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Opción Básica
        </button>
        <button
          onClick={() => setComboNivel(1)}
          className={`px-4 py-2 rounded ${comboNivel === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Opción Óptima
        </button>
      </div>

      <div className="bg-white shadow p-6 rounded w-full max-w-md mb-4">
        <h2 className="text-lg font-semibold mb-2">
          {comboNivel === 0 ? "Opción básica" : "Opción óptima"}
        </h2>
        <p><strong>Tecnología eléctrica:</strong> {comboActual.electricityTechnology}</p>
        <p><strong>Gas Natural:</strong> {comboActual.furnaceNaturalGasTechnology}</p>
        <p><strong>Caldera GLP:</strong> {comboActual.boilerLPGTechnology}</p>
        <p><strong>Vehículos gasolina:</strong> {comboActual.gasolineVehiclesTechnology}</p>
        <p><strong>Camiones diesel:</strong> {comboActual.dieselTrucksTechnology}</p>
        <p><strong>Montacargas GLP:</strong> {comboActual.forkliftLPGTechnology}</p>
        <p className="mt-4"><strong>Costo estimado:</strong> ${comboActual.totalCost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default RecommendationDashboard;
