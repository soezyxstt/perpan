import React from 'react';
import Latex from 'react-latex-next';

interface LatexTemplateProps {
  title: string;
  formula: string;
  children?: React.ReactNode;
}

const LatexTemplate: React.FC<LatexTemplateProps> = ({ title, formula, children }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="mb-4 overflow-x-auto">
        <Latex>{formula}</Latex>
      </div>
      {children && (
        <div className="text-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};

export default LatexTemplate;