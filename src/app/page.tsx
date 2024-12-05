'use client';

import Link from 'next/link';

export default function Home() {
  const chapters = [
    {
      number: 9,
      title: 'Free Convection',
      description: 'Covers natural convection phenomena, buoyancy-driven flows, and related heat transfer correlations.'
    },
    {
      number: 10,
      title: 'Boiling and Condensation',
      description: 'Explores phase change heat transfer processes including pool boiling, flow boiling, and various condensation mechanisms.'
    },
    {
      number: 11,
      title: 'Heat Exchangers',
      description: 'Discusses different types of heat exchangers, analysis methods, and performance parameters.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Heat Transfer Summary
        </h1>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-600 text-center text-lg">
            Welcome to the heat transfer summary portal. This resource provides comprehensive summaries and key formulas for 
            Chapters 9, 10, and 11, covering essential topics in heat transfer including free convection, 
            boiling and condensation, and heat exchangers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {chapters.map((chapter) => (
            <Link 
              href={`/chapter-${chapter.number}`} 
              key={chapter.number}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  Chapter {chapter.number}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {chapter.title}
                </h2>
                <p className="text-gray-600">
                  {chapter.description}
                </p>
                <div className="mt-4 text-blue-600 font-semibold hover:text-blue-700">
                  View Chapter →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>
            Each chapter includes a detailed summary and a comprehensive collection of key formulas.
            Use the cards above to navigate to your desired chapter.
          </p>
        </div>
      </main>
    </div>
  );
}