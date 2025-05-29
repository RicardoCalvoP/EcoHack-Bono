import React from "react";

type ButtonsHeadersProps = {
  headers: string[];
  onHeaderClick: (index: number) => void;
  activeTab: number;
};

const ButtonsHeaders: React.FC<ButtonsHeadersProps> = ({ headers, onHeaderClick, activeTab }) => {
  return (
    <div className="flex justify-between flex-wrap w-full box-border mb-6">
      {headers.map((header, index) => {
        const isActive = activeTab === index;
        return (
          <button
            key={index}
            onClick={() => onHeaderClick(index)}
            className={`flex-1 min-w-[120px] text-center px-4 py-3 font-bold cursor-pointer transition-all duration-200 ease-in-out
              ${isActive
                ? 'bg-white border border-slate-100 text-black'
                : 'bg-slate-100 border border-slate-100 text-slate-400 hover:bg-slate-200'}
            `}
          >
            {header}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonsHeaders;
