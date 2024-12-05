import Latex from 'react-latex-next';

export default function LatexTemplate({ children, title }: { children: string | string[]; title: string }) {
  return <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
    <p className="font-semibold text-gray-800 mb-3">{title}</p>
      <div className="mt-2 flex justify-center bg-gray-50 py-4 text-black rounded-lg">
        <div className="overflow-x-auto max-w-full">
          <Latex>
            {children}
          </Latex>
        </div>
    </div>
  </div>
}