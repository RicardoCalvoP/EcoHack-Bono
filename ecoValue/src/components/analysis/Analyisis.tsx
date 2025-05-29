import React from 'react';
import AnalysisCard, { type AnalysisCardProps } from './AnalysisCard';
import { CloudOff, Zap, Percent, DollarSign, TrendingUp, Clock, RefreshCw } from 'lucide-react';

interface AnalysisProps {
  // Para agregar parametros futuros y sea dinamico
}

const Analysis: React.FC<AnalysisProps> = () => {
  const cards: AnalysisCardProps[] = [
    {
      title: 'CO₂ Reducido',
      result: '0 kg',
      subtitle: 'anual',
      icon: <CloudOff size={28} />,
      warning: 'low',
    },
    {
      title: 'Reducción Eléctrica',
      result: '0 kWh',
      subtitle: 'al mes',
      icon: <Zap size={28} />,
      warning: 'low',
    },
    {
      title: '% Energético Ahorrado',
      result: '0%',
      icon: <Percent size={28} />,
      warning: 'low',
      progress: 0,
    },
    {
      title: 'Inversión Inicial',
      result: '$0',
      icon: <DollarSign size={28} />,
      warning: 'medium',
    },
    {
      title: 'Ahorro Económico',
      result: '$0',
      subtitle: 'por año',
      icon: <TrendingUp size={28} />,
      warning: 'low',
    },
    {
      title: 'ROI',
      result: '0%',
      icon: <Percent size={28} />,
      warning: 'medium',
      progress: 0,
    },
    {
      title: 'Payback',
      result: '0 años',
      icon: <Clock size={28} />,
      warning: 'medium',
    },
    {
      title: 'Vida Útil',
      result: '0 años',
      icon: <RefreshCw size={28} />,
      warning: 'low',
    },
  ];

  return (
<div className="container mx-auto px-4 md:px-8 lg:px-16">
      <h2 className="mt-8 text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center">
        Resumen de Impacto y Retorno
      </h2>
      <div
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 pb-8">
        {cards.map((c, i) => (
          <AnalysisCard key={i} {...c} />
        ))}
      </div>
    </div>
  );
};

export default Analysis;
