import React from 'react';

export interface AnalysisCardProps {
  title: string;
  result: string;
  subtitle?: string;
  icon: React.ReactNode;
  warning?: 'low' | 'medium' | 'high';
  progress?: number; // 0–100, para barra de progreso opcional
}

const warningColors = {
  low:  'text-green-600 dark:text-green-400',
  medium: 'text-yellow-600 dark:text-yellow-400',
  high: 'text-red-600 dark:text-red-400',
};

const AnalysisCard: React.FC<AnalysisCardProps> = ({
  title,
  result,
  subtitle = '',
  icon,
  warning = 'low',
  progress,
}) => {
  const colorClass = warningColors[warning];
  return (
    <div className="rounded-2xl shadow-lg bg-white dark:bg-zinc-800 p-6 flex flex-col justify-between
                    hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {title}
        </h3>
        <div className={colorClass}>{icon}</div>
      </div>

      <div className="flex flex-col items-start gap-2">
        <span className={`text-3xl font-bold ${colorClass}`}>{result}</span>
        {subtitle && (
          <span className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</span>
        )}
        {typeof progress === 'number' && (
          <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2 mt-2">
            <div
              className={`h-2 rounded-full ${colorClass.replace('text-', 'bg-')}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalysisCard;
