import React from "react";
import { type ComboItems } from "../dashboard";

type RecommendationDashboardProps = {
  category: string;
  combos: ComboItems[];
  combo: 0 | 1;
  setCombo: React.Dispatch<React.SetStateAction<0 | 1>>;
};

const RecommendationDashboard: React.FC<RecommendationDashboardProps> = ({ category, combos, combo, setCombo }) => {

  const filetedCombos = combos.filter(combo => combo.mainCategory === category);
  const actualCombo = filetedCombos[combo];


  const actualComboTotalCost = actualCombo.mainCategoryCost * actualCombo.mainCategoryEmission;


  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Recomendaciones para: <span className="text-blue-600">{category}</span>
      </h1>

      {/* Button Menu styled like .ButtonMenu CSS */}
      <div className="flex justify-between flex-wrap w-full box-border mb-8">
        {['Básico', 'Óptimo'].map((label, idx) => {
          const isClicked = combo === idx;
          return (
            <button
              key={label}
              onClick={() => setCombo(idx as 0 | 1)}
              className={`flex-1 min-w-[120px] text-center px-4 py-3 font-bold cursor-pointer transition-all duration-200 ease-in-out
                ${isClicked
                  ? 'bg-white border border-slate-100 text-black'
                  : 'bg-slate-100 border border-slate-100 text-slate-400 hover:bg-slate-200'}
              `}
            >
              Opción {label}
            </button>
          );
        })}
      </div>

      {/* Card de recomendaciones */}
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          {combo === 0 ? 'Opción Básica' : 'Opción Óptima'}
        </h2>
        <ul className="space-y-2">
          <li><span className="font-semibold">Tecnología eléctrica:</span> {actualCombo.mainCategoryTechnology}</li>

        </ul>
        <div className="pt-4 border-t border-gray-200">
          <p className="text-lg">
            <span className="font-semibold">Costo estimado:</span>{' '}
            <span className="text-blue-600 font-bold">${actualComboTotalCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD</span>
            <span ><br />Nota: {actualCombo.note}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecommendationDashboard;
