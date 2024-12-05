// app/page.tsx
'use client';

import { useState } from 'react';
import 'katex/dist/katex.min.css';
import LatexTemplate from '../latex-template';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'summary' | 'formulas'>('summary');

  const TabButton = ({
    tab,
    label
  }: {
    tab: 'summary' | 'formulas';
    label: string
  }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-6 py-2 rounded-lg font-semibold transition-colors ${activeTab === tab
        ? 'bg-blue-600 text-white'
        : 'bg-white text-gray-600 hover:bg-gray-100'
        }`}
    >
      {label}
    </button>
  );

  const SummaryContent = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Chapter Summary</h2>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">1. Introduction and Basic Concepts</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Free (natural) convection occurs without external forcing conditions</li>
          <li>Driven by buoyancy forces due to density gradients in a fluid</li>
          <li>Though velocities are smaller than forced convection, it&apos;s often preferred for its simplicity and lower operating costs</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">2. Physical Mechanisms</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Buoyancy forces arise from density differences caused by temperature gradients</li>
          <li>The Boussinesq approximation is used to relate density changes to temperature differences</li>
          <li>Flow can be stable or unstable depending on temperature gradient direction</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">3. Key Applications</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Power generating and electronic devices cooling</li>
          <li>Building HVAC systems</li>
          <li>Environmental processes (oceanic and atmospheric motions)</li>
          <li>Fire safety (distribution of combustion products)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">4. Important Parameters</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Grashof number (GrL): Ratio of buoyancy to viscous forces</li>
          <li>Rayleigh number (RaL): Product of Grashof and Prandtl numbers</li>
          <li>Nusselt number (NuL): Dimensionless heat transfer coefficient</li>
        </ul>
      </section>
    </div>
  );

  const FormulasContent = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Formulas</h2>

      <div className="space-y-6">
        <LatexTemplate title="1. X-Momentum Equation (9.1):">
          {`$$ u\\frac{\\partial u}{\\partial x} + v\\frac{\\partial u}{\\partial y} = -\\frac{1}{\\rho}\\frac{dp_\\infty}{dx} - g + \\nu\\frac{\\partial^2 u}{\\partial y^2} $$`}
        </LatexTemplate>

        <LatexTemplate title="2. Free Stream Pressure Gradient (9.2):">
          {`$$ \\frac{dp_\\infty}{dx} = -\\rho_\\infty g $$`}
        </LatexTemplate>

        <LatexTemplate title="3. Momentum Equation with Density Difference (9.3):">
          {`$$ u\\frac{\\partial u}{\\partial x} + v\\frac{\\partial u}{\\partial y} = g\\frac{\\Delta \\rho}{\\rho} + \\nu\\frac{\\partial^2 u}{\\partial y^2} $$`}
        </LatexTemplate>

        <LatexTemplate title="4. Volumetric Thermal Expansion Coefficient (9.4):">
          {`$$ \\beta = -\\frac{1}{\\rho}\\left(\\frac{\\partial \\rho}{\\partial T}\\right)_p $$`}
        </LatexTemplate>

        <LatexTemplate title="5. Boussinesq Approximation Momentum Equation (9.5):">
          {`$$ u\\frac{\\partial u}{\\partial x} + v\\frac{\\partial u}{\\partial y} = g\\beta(T - T_\\infty) + \\nu\\frac{\\partial^2 u}{\\partial y^2} $$`}
        </LatexTemplate>

        <LatexTemplate title="6. Continuity Equation (9.6):">
          {`$$ \\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial y} = 0 $$`}
        </LatexTemplate>

        <LatexTemplate title="7. Momentum Equation (9.7):">
          {`$$ u\\frac{\\partial u}{\\partial x} + v\\frac{\\partial u}{\\partial y} = g\\beta(T - T_\\infty) + \\nu\\frac{\\partial^2 u}{\\partial y^2} $$`}
        </LatexTemplate>

        <LatexTemplate title="8. Energy Equation (9.8):">
          {`$$ u\\frac{\\partial T}{\\partial x} + v\\frac{\\partial T}{\\partial y} = \\alpha\\frac{\\partial^2 T}{\\partial y^2} $$`}
        </LatexTemplate>

        <LatexTemplate title="9. Grashof Number (9.12):">
          {`$$ Gr_L \\equiv \\frac{g\\beta(T_s - T_\\infty)L^3}{\\nu^2} $$`}
        </LatexTemplate>

        <LatexTemplate title="10. Similarity Variable (9.13):">
          {`$$ \\eta = y\\left(\\frac{Gr_L}{4}\\right)^{1/4}/x $$`}
        </LatexTemplate>

        <LatexTemplate title="11. Stream Function (9.14):">
          {`$$ \\psi(x,y) = f(\\eta)\\left[4\\nu\\left(\\frac{Gr_L}{4}\\right)^{1/4}\\right] $$`}
        </LatexTemplate>

        <LatexTemplate title="12. Local Nusselt Number (9.19):">
          {`$$ Nu_x = \\frac{hx}{k} = -\\left(\\frac{Gr_L}{4}\\right)^{1/4} \\frac{dT^*}{d\\eta}\\bigg|_{\\eta=0} = \\left(\\frac{Gr_L}{4}\\right)^{1/4} g(Pr) $$`}
        </LatexTemplate>

        <LatexTemplate title="13. Average Nusselt Number (9.21):">
          {`$$ Nu_L = \\frac{hL}{k} = \\frac{4}{3}\\left(\\frac{Gr_L}{4}\\right)^{1/4} g(Pr) $$`}
        </LatexTemplate>

        <LatexTemplate title="14. Critical Rayleigh Number (9.23):">
          {`$$ Ra_{c,r} = Gr_{L,r} Pr = \\frac{g\\beta(T_s - T_\\infty)x^3}{\\nu\\alpha} \\approx 10^9 $$`}
        </LatexTemplate>

        <LatexTemplate title="15. General Form for External Free Convection (9.24):">
          {`$$ Nu_L = \\frac{hL}{k} = C Ra_L^n $$`}
        </LatexTemplate>

        <LatexTemplate title="16. Rayleigh Number (9.25):">
          {`$$ Ra_L = Gr_L Pr = \\frac{g\\beta(T_s - T_\\infty)L^3}{\\nu\\alpha} $$`}
        </LatexTemplate>

        <LatexTemplate title="17. Churchill-Chu Correlation (9.26):">
          {`$$ Nu_L = \\left\\{0.825 + \\frac{0.387Ra_L^{1/6}}{[1 + (0.492/Pr)^{9/16}]^{8/27}}\\right\\}^2 $$`}
        </LatexTemplate>

        <LatexTemplate title="18. For Vertical Channels (9.36):">
          {`$$ Nu_S = \\frac{1}{24}Ra_S\\left(\\frac{S}{L}\\right)\\left[1 - \\exp\\left(-\\frac{35}{Ra_S(S/L)}\\right)\\right]^{3/4} $$`}
        </LatexTemplate>

        <LatexTemplate title="19. For Concentric Cylinders (9.58):">
          {`$$ q = \\frac{2\\pi L k_{eff}(T_i - T_o)}{\\ln(r_o/r_i)} $$`}
        </LatexTemplate>

        <LatexTemplate title="20. For Concentric Spheres (9.61):">
          {`$$ q = \\frac{4\\pi k_{eff}(T_i - T_o)}{\\left(\\frac{1}{r_i}\\right) - \\left(\\frac{1}{r_o}\\right)} $$`}
        </LatexTemplate>

        <LatexTemplate title="21. Mixed Convection Correlation (9.64):">
          {`$$ Nu^n = Nu_F^n \\pm Nu_N^n $$`}
        </LatexTemplate>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Chapter 9: Free Convection
        </h1>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8 justify-center">
          <TabButton tab="summary" label="Summary" />
          <TabButton tab="formulas" label="Key Formulas" />
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {activeTab === 'summary' ? <SummaryContent /> : <FormulasContent />}
        </div>
      </main>
    </div>
  );
}