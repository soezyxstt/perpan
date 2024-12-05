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
        <h3 className="text-xl font-semibold text-blue-600">1. Heat Exchanger Types</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Classified by flow arrangement and construction type</li>
          <li>Parallel-flow: Fluids enter at same end, flow in same direction</li>
          <li>Counterflow: Fluids enter at opposite ends, flow in opposite directions</li>
          <li>Cross-flow: Fluids flow perpendicular to each other</li>
          <li>Shell-and-tube: Most common type with various pass arrangements</li>
          <li>Compact heat exchangers: High surface area density (≥400 m²/m³)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">2. Overall Heat Transfer Coefficient</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Accounts for total thermal resistance between fluids</li>
          <li>Includes convection on both sides and wall conduction</li>
          <li>Fouling factors affect performance over time</li>
          <li>Surface efficiency impacts extended surfaces (fins)</li>
          <li>Values vary widely based on fluid combinations and flow conditions</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">3. Analysis Methods</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Log Mean Temperature Difference (LMTD) method</li>
          <li>Effectiveness-NTU method for design calculations</li>
          <li>Energy balance considerations for both fluids</li>
          <li>Special cases for phase change and extreme capacity ratios</li>
          <li>Correction factors for complex flow arrangements</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">4. Performance Parameters</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Heat exchanger effectiveness (ε)</li>
          <li>Number of transfer units (NTU)</li>
          <li>Heat capacity ratio (C_min/C_max)</li>
          <li>Temperature effectiveness (P)</li>
          <li>Flow arrangement factor (F)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">5. Design Considerations</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Selection of flow arrangement based on performance requirements</li>
          <li>Economic trade-offs between size and effectiveness</li>
          <li>Pressure drop and pumping power considerations</li>
          <li>Maintenance and cleaning accessibility</li>
          <li>Material selection for corrosion resistance</li>
        </ul>
      </section>
    </div>
  );

  const FormulasContent = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Formulas</h2>

      <div className="space-y-6">
        <LatexTemplate title="1. Overall Heat Transfer Coefficient (11.1a):">
          {`$$ \\frac{1}{UA} = \\frac{1}{U_cA_c} = \\frac{1}{U_hA_h} = \\frac{1}{(hA)_c} + R_w + \\frac{1}{(hA)_h} $$`}
        </LatexTemplate>

        <LatexTemplate title="2. Overall Heat Transfer with Fouling (11.1b):">
          {`\\[\\frac{1}{UA} = \\frac{1}{(\\eta_ohA)_c} + \\frac{R_{f,c}^{\\prime\\prime}}{(\\eta_oA)_c} + R_w + \\frac{R_{f,h}^{\\prime\\prime}}{(\\eta_oA)_h} + \\frac{1}{(\\eta_ohA)_h}\\]`}
        </LatexTemplate>

        <LatexTemplate title="3. Heat Transfer Rate with Surface Efficiency (11.2):">
          {`$$ q = \\eta_o h A(T_b - T_\\infty) $$`}
        </LatexTemplate>

        <LatexTemplate title="4. Overall Surface Efficiency (11.3):">
          {`$$ \\eta_o = 1 - \\frac{A_f}{A}(1 - \\eta_f) $$`}
        </LatexTemplate>

        <LatexTemplate title="5. Single Fin Efficiency (11.4):">
          {`$$ \\eta_f = \\frac{\\tanh(mL)}{mL} $$`}
        </LatexTemplate>

        <LatexTemplate title="6. Heat Transfer Rate - Hot Fluid (11.6a):">
          {`$$ q = \\dot{m}_h(i_{h,i} - i_{h,o}) $$`}
        </LatexTemplate>

        <LatexTemplate title="7. Heat Transfer Rate - Cold Fluid (11.7a):">
          {`$$ q = \\dot{m}_c(i_{c,o} - i_{c,i}) $$`}
        </LatexTemplate>

        <LatexTemplate title="8. Temperature Difference (11.8):">
          {`$$ \\Delta T = T_h - T_c $$`}
        </LatexTemplate>

        <LatexTemplate title="9. Overall Heat Transfer Rate (11.9):">
          {`$$ q = UA\\Delta T_m $$`}
        </LatexTemplate>

        <LatexTemplate title="10. Hot Fluid Energy Balance (11.10):">
          {`$$ dq = -\\dot{m}_hc_{p,h}dT_h = -C_hdT_h $$`}
        </LatexTemplate>

        <LatexTemplate title="11. Cold Fluid Energy Balance (11.11):">
          {`$$ dq = \\dot{m}_cc_{p,c}dT_c = C_cdT_c $$`}
        </LatexTemplate>

        <LatexTemplate title="12. Local Heat Transfer (11.12):">
          {`$$ dq = U\\Delta T dA $$`}
        </LatexTemplate>

        <LatexTemplate title="13. LMTD Relation (11.13):">
          {`$$ \\ln\\left(\\frac{\\Delta T_2}{\\Delta T_1}\\right) = -UA\\left(\\frac{1}{C_h} + \\frac{1}{C_c}\\right) $$`}
        </LatexTemplate>

        <LatexTemplate title="14. Heat Transfer with LMTD (11.14):">
          {`$$ q = UA\\Delta T_{lm} $$`}
        </LatexTemplate>

        <LatexTemplate title="15. Log Mean Temperature Difference (11.15):">
          {`$$ \\Delta T_{lm} = \\frac{\\Delta T_2 - \\Delta T_1}{\\ln(\\Delta T_2/\\Delta T_1)} = \\frac{\\Delta T_1 - \\Delta T_2}{\\ln(\\Delta T_1/\\Delta T_2)} $$`}
        </LatexTemplate>

        <LatexTemplate title="16. Maximum Possible Heat Transfer (11.18):">
          {`$$ q_{max} = C_{min}(T_{h,i} - T_{c,i}) $$`}
        </LatexTemplate>

        <LatexTemplate title="17. Heat Exchanger Effectiveness (11.19):">
          {`$$ \\varepsilon = \\frac{q}{q_{max}} $$`}
        </LatexTemplate>

        <LatexTemplate title="18. Effectiveness Definition (11.20):">
          {`$$ \\varepsilon = \\frac{C_h(T_{h,i} - T_{h,o})}{C_{min}(T_{h,i} - T_{c,i})} $$`}
        </LatexTemplate>

        <LatexTemplate title="19. Alternative Effectiveness (11.21):">
          {`$$ \\varepsilon = \\frac{C_c(T_{c,o} - T_{c,i})}{C_{min}(T_{h,i} - T_{c,i})} $$`}
        </LatexTemplate>

        <LatexTemplate title="20. Heat Transfer with Effectiveness (11.22):">
          {`$$ q = \\varepsilon C_{min}(T_{h,i} - T_{c,i}) $$`}
        </LatexTemplate>

        <LatexTemplate title="21. Number of Transfer Units (11.24):">
          {`$$ NTU = \\frac{UA}{C_{min}} $$`}
        </LatexTemplate>

        <LatexTemplate title="22. Parallel Flow Effectiveness (11.28a):">
          {`$$ \\varepsilon = \\frac{1 - \\exp[-NTU(1 + C_r)]}{1 + C_r} $$`}
        </LatexTemplate>

        <LatexTemplate title="23. Counterflow Effectiveness (11.29a):">
          {`$$ \\varepsilon = \\frac{1 - \\exp[-NTU(1 - C_r)]}{1 - C_r\\exp[-NTU(1 - C_r)]} \\quad (C_r < 1) $$`}
        </LatexTemplate>

        <LatexTemplate title="24. Cross-Flow Effectiveness (11.32):">
          {`$$ \\varepsilon = 1 - \\exp\\left[\\left(\\frac{1}{C_r}\\right)(NTU)^{0.22}(\\exp[-C_r(NTU)^{0.78}] - 1)\\right] $$`}
        </LatexTemplate>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Chapter 11: Heat Exchangers
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