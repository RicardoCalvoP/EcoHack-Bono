import React from 'react';
import AnalysisCard, { type AnalysisCardProps } from './AnalysisCard';
import { CloudOff, Zap, Percent, DollarSign, TrendingUp, Clock, RefreshCw, Droplet} from 'lucide-react';
import { type AnalysisItems, type ComboItems } from '../dashboard';

type AnalysisProps = {
  category: string;
  analysisSets: AnalysisItems[];
  combos: ComboItems[];
  combo: 0 | 1;
}

const Analysis: React.FC<AnalysisProps> = ({ category, analysisSets, combos, combo }) => {
  const filetedCombos = combos.filter(combo => combo.mainCategory === category);
  const actualCombo = filetedCombos[combo];

  const filetedAnalysis = analysisSets.filter(analysis => analysis.mainCategory === category);
  const actualAnalysis = filetedAnalysis[combo];

  const energyCard: AnalysisCardProps = actualCombo.mainCategoryTechnology === 'Panel Solar' || actualCombo.mainCategoryTechnology == 'PPA'
    ? {
        title: 'Reducción Eléctrica',
        result: actualAnalysis.eclecticReduction.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        subtitle: 'Mensual',
        icon: <Zap size={28} />,
        warning: 'low',
      }
    : {
        title: 'Ahorro de combustible',
        result: (actualAnalysis.gasReduction ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        subtitle: 'kWh Mensual',
        icon: <Droplet size={28} />,
        warning: 'low',
      };

  const cards: AnalysisCardProps[] = [
    {
      title: 'CO₂ Reducido',
      result: actualAnalysis.CO2Reduction.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      subtitle: 'kg Mensual',
      icon: <CloudOff size={28} />,
      warning: 'low',
    },
    energyCard,
    {
      title: '% Energético Ahorrado',
      result: actualAnalysis.energeticSaving,
      icon: <Percent size={28} />,
      warning: 'low',
    },
    {
      title: 'Inversión Inicial',
      subtitle: 'USD una vez',
      result: actualAnalysis.initialInversion.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      icon: <DollarSign size={28} />,
      warning: 'medium',
    },
    {
      title: 'Ahorro Económico',
      result: actualAnalysis.economicSaving.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      subtitle: 'USD mensuales',
      icon: <TrendingUp size={28} />,
      warning: 'low',
    },
    {
      title: 'ROI',
      result: Number(actualAnalysis.ROI.toFixed(0)),
      icon: <Percent size={28} />,
      warning: 'medium',
    },
    {
      title: 'Payback',
      result: actualAnalysis.payback.toFixed(1),
      icon: <Clock size={28} />,
      warning: 'medium',
    },
    {
      title: 'Vida Útil',
      subtitle: 'años',
      result: actualAnalysis.utilLife,
      icon: <RefreshCw size={28} />,
      warning: 'low',
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16">
      <h2 className="mt-8 text-3xl md:text-4xl font-bold text-gray-800 text-center">
        Resumen de Impacto y Retorno Sobre {actualCombo.mainCategoryTechnology}
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 pb-8">
        {cards.map((c, i) => (
          <AnalysisCard key={i} {...c} />
        ))}
      </div>
    </div>
  );
};

export default Analysis;
