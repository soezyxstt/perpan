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
        <LatexTemplate title="1. Overall Heat Transfer Coefficient (11.1a):"
          formula={`$$ \\frac{1}{UA} = \\frac{1}{U_cA_c} = \\frac{1}{U_hA_h} = \\frac{1}{(hA)_c} + R_w + \\frac{1}{(hA)_h} $$`}
        >
          <p>Use Case: Total thermal resistance calculation in heat exchangers</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Shell-and-tube design</li>
              <li>Plate heat exchangers</li>
              <li>Automotive radiators</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Material selection</li>
              <li>Surface area optimization</li>
              <li>Flow arrangement effects</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="2. Overall Heat Transfer with Fouling (11.1b):"
          formula={`\\[\\frac{1}{UA} = \\frac{1}{(\\eta_ohA)_c} + \\frac{R_{f,c}^{\\prime\\prime}}{(\\eta_oA)_c} + R_w + \\frac{R_{f,h}^{\\prime\\prime}}{(\\eta_oA)_h} + \\frac{1}{(\\eta_ohA)_h}\\]`}
        >
          <p>Use Case: Long-term performance prediction with fouling effects</p>
          <ul className="list-disc pl-6">
            <li>Industrial Applications:</li>
            <ul className="list-circle pl-6">
              <li>Process heat exchangers</li>
              <li>Marine condensers</li>
              <li>Cooling towers</li>
            </ul>
            <li>Maintenance Planning:</li>
            <ul className="list-circle pl-6">
              <li>Cleaning schedules</li>
              <li>Performance monitoring</li>
              <li>Efficiency degradation</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="3. Heat Transfer Rate with Surface Efficiency (11.2):"
          formula={`$$ q = \\eta_o h A(T_b - T_\\infty) $$`}
        >
          <p>Use Case: Extended surface (fin) performance evaluation</p>
          <ul className="list-disc pl-6">
            <li>Design Applications:</li>
            <ul className="list-circle pl-6">
              <li>Heat sink optimization</li>
              <li>Fin array design</li>
              <li>Compact heat exchangers</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="4. Overall Surface Efficiency (11.3):"
          formula={`$$ \\eta_o = 1 - \\frac{A_f}{A}(1 - \\eta_f) $$`}
        >
          <p>Use Case: Extended surface performance analysis</p>
          <ul className="list-disc pl-6">
            <li>Design Applications:</li>
            <ul className="list-circle pl-6">
              <li>Finned tube heat exchangers</li>
              <li>Air-cooled condensers</li>
              <li>Electronics cooling systems</li>
            </ul>
            <li>Performance Factors:</li>
            <ul className="list-circle pl-6">
              <li>Fin geometry optimization</li>
              <li>Material conductivity effects</li>
              <li>Surface area enhancement</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="5. Single Fin Efficiency (11.4):"
          formula={`$$ \\eta_f = \\frac{\\tanh(mL)}{mL} $$`}
        >
          <p>Use Case: Individual fin performance evaluation</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>CPU heat sinks</li>
              <li>Radiator design</li>
              <li>HVAC equipment</li>
            </ul>
            <li>Design Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Fin length optimization</li>
              <li>Material selection</li>
              <li>Cross-sectional profile</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="6. Heat Transfer Rate - Hot Fluid (11.6a):"
          formula={`$$ q = \\dot{m}_h(i_{h,i} - i_{h,o}) $$`}
        >
          <p>Use Case: Hot fluid energy analysis</p>
          <ul className="list-disc pl-6">
            <li>Process Applications:</li>
            <ul className="list-circle pl-6">
              <li>Steam condensers</li>
              <li>Oil coolers</li>
              <li>Process heaters</li>
            </ul>
            <li>Monitoring Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Flow rate control</li>
              <li>Energy balance</li>
              <li>Performance tracking</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="7. Heat Transfer Rate - Cold Fluid (11.7a):"
          formula={`$$ q = \\dot{m}_c(i_{c,o} - i_{c,i}) $$`}
        >
          <p>Use Case: Cold fluid energy analysis</p>
          <ul className="list-disc pl-6">
            <li>Common Applications:</li>
            <ul className="list-circle pl-6">
              <li>Water chillers</li>
              <li>Air conditioning</li>
              <li>Refrigeration systems</li>
            </ul>
            <li>Control Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Temperature rise monitoring</li>
              <li>Flow rate adjustment</li>
              <li>Capacity control</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="8. Temperature Difference (11.8):"
          formula={`$$ \\Delta T = T_h - T_c $$`}
        >
          <p>Use Case: Local temperature difference calculation</p>
          <ul className="list-disc pl-6">
            <li>Design Applications:</li>
            <ul className="list-circle pl-6">
              <li>Heat exchanger sizing</li>
              <li>Performance monitoring</li>
              <li>Control system design</li>
            </ul>
            <li>Operating Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Pinch point analysis</li>
              <li>Temperature approach</li>
              <li>Thermal stress management</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="9. Overall Heat Transfer Rate (11.9):"
          formula={`$$ q = UA\\Delta T_m $$`}
        >
          <p>Use Case: Heat exchanger performance prediction</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Equipment sizing</li>
              <li>Performance rating</li>
              <li>Cost estimation</li>
            </ul>
            <li>Design Factors:</li>
            <ul className="list-circle pl-6">
              <li>Surface area requirements</li>
              <li>Material selection</li>
              <li>Flow arrangement</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="10. Hot Fluid Energy Balance (11.10):"
          formula={`$$ dq = -\\dot{m}_hc_{p,h}dT_h = -C_hdT_h $$`}
        >
          <p>Use Case: Energy balance for hot fluid streams</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Boiler systems</li>
              <li>Heat recovery units</li>
              <li>Thermal power plants</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Temperature control</li>
              <li>Flow rate optimization</li>
              <li>Energy efficiency</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="11. Cold Fluid Energy Balance (11.11):"
          formula={`$$ dq = \\dot{m}_cc_{p,c}dT_c = C_cdT_c $$`}
        >
          <p>Use Case: Energy balance for cold fluid streams</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Chiller systems</li>
              <li>Cooling loops</li>
              <li>Refrigeration cycles</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Temperature stability</li>
              <li>Flow rate management</li>
              <li>System efficiency</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="12. Local Heat Transfer (11.12):"
          formula={`$$ dq = U\\Delta T dA $$`}
        >
          <p>Use Case: Localized heat transfer analysis</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Micro-channel heat exchangers</li>
              <li>Localized cooling solutions</li>
              <li>Thermal management in electronics</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Surface area distribution</li>
              <li>Temperature gradients</li>
              <li>Material properties</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="13. LMTD Relation (11.13):"
          formula={`$$ \\ln\\left(\\frac{\\Delta T_2}{\\Delta T_1}\\right) = -UA\\left(\\frac{1}{C_h} + \\frac{1}{C_c}\\right) $$`}
        >
          <p>Use Case: Log Mean Temperature Difference calculation</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Heat exchanger design</li>
              <li>Thermal performance evaluation</li>
              <li>Process optimization</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Temperature profiles</li>
              <li>Flow arrangement</li>
              <li>Heat capacity rates</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="14. Heat Transfer with LMTD (11.14):"
          formula={`$$ q = UA\\Delta T_{lm} $$`}
        >
          <p>Use Case: Heat transfer rate calculation using LMTD</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Shell-and-tube exchangers</li>
              <li>Plate heat exchangers</li>
              <li>Industrial heat recovery</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Effective temperature difference</li>
              <li>Surface area requirements</li>
              <li>Material selection</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="15. Log Mean Temperature Difference (11.15):"
          formula={`$$ \\Delta T_{lm} = \\frac{\\Delta T_2 - \\Delta T_1}{\\ln(\\Delta T_2/\\Delta T_1)} = \\frac{\\Delta T_1 - \\Delta T_2}{\\ln(\\Delta T_1/\\Delta T_2)} $$`}
        >
          <p>Use Case: Calculation of effective temperature difference</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Heat exchanger analysis</li>
              <li>Thermal system design</li>
              <li>Performance assessment</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Temperature measurement accuracy</li>
              <li>Flow configuration</li>
              <li>Heat transfer efficiency</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="16. Maximum Possible Heat Transfer (11.18):"
          formula={`$$ q_{max} = C_{min}(T_{h,i} - T_{c,i}) $$`}
        >
          <p>Use Case: Determining maximum heat transfer potential</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>System capacity evaluation</li>
              <li>Design optimization</li>
              <li>Performance benchmarking</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Heat capacity rates</li>
              <li>Inlet temperature conditions</li>
              <li>System constraints</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="17. Heat Exchanger Effectiveness (11.19):"
          formula={`$$ \\varepsilon = \\frac{q}{q_{max}} $$`}
        >
          <p>Use Case: Evaluating heat exchanger performance</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Performance monitoring</li>
              <li>Design validation</li>
              <li>Efficiency improvement</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Actual vs. maximum heat transfer</li>
              <li>System efficiency</li>
              <li>Operational conditions</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="18. Effectiveness Definition (11.20):"
          formula={`$$ \\varepsilon = \\frac{C_h(T_{h,i} - T_{h,o})}{C_{min}(T_{h,i} - T_{c,i})} $$`}
        >
          <p>Use Case: Effectiveness calculation for hot fluid</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Thermal system analysis</li>
              <li>Design optimization</li>
              <li>Performance evaluation</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Temperature drop in hot fluid</li>
              <li>Heat capacity rates</li>
              <li>System constraints</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="19. Alternative Effectiveness (11.21):"
          formula={`$$ \\varepsilon = \\frac{C_c(T_{c,o} - T_{c,i})}{C_{min}(T_{h,i} - T_{c,i})} $$`}
        >
          <p>Use Case: Effectiveness calculation for cold fluid</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Cooling system analysis</li>
              <li>Design validation</li>
              <li>Performance benchmarking</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Temperature rise in cold fluid</li>
              <li>Heat capacity rates</li>
              <li>System constraints</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="20. Heat Transfer with Effectiveness (11.22):"
          formula={`$$ q = \\varepsilon C_{min}(T_{h,i} - T_{c,i}) $$`}
        >
          <p>Use Case: Calculating heat transfer using effectiveness</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>System design and analysis</li>
              <li>Performance prediction</li>
              <li>Efficiency assessment</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Effectiveness value</li>
              <li>Heat capacity rates</li>
              <li>Temperature conditions</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="21. Number of Transfer Units (11.24):"
          formula={`$$ NTU = \\frac{UA}{C_{min}} $$`}
        >
          <p>Use Case: Determining the number of transfer units</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Heat exchanger sizing</li>
              <li>Performance evaluation</li>
              <li>Design optimization</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Heat transfer area</li>
              <li>Heat capacity rates</li>
              <li>System constraints</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="22. Parallel Flow Effectiveness (11.28a):"
          formula={`$$ \\varepsilon = \\frac{1 - \\exp[-NTU(1 + C_r)]}{1 + C_r} $$`}
        >
          <p>Use Case: Effectiveness for parallel flow heat exchangers</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Parallel flow systems</li>
              <li>Design validation</li>
              <li>Performance assessment</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Flow arrangement</li>
              <li>Heat capacity ratio</li>
              <li>System constraints</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="23. Counterflow Effectiveness (11.29a):"
          formula={`$$ \\varepsilon = \\frac{1 - \\exp[-NTU(1 - C_r)]}{1 - C_r\\exp[-NTU(1 - C_r)]} \\quad (C_r < 1) $$`}
        >
          <p>Use Case: Effectiveness for counterflow heat exchangers</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Counterflow systems</li>
              <li>Design optimization</li>
              <li>Performance evaluation</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Flow arrangement</li>
              <li>Heat capacity ratio</li>
              <li>System constraints</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="24. Cross-Flow Effectiveness (11.32):"
          formula={`$$ \\varepsilon = 1 - \\exp\\left[\\left(\\frac{1}{C_r}\\right)(NTU)^{0.22}(\\exp[-C_r(NTU)^{0.78}] - 1)\\right] $$`}
        >
          <p>Use Case: Cross-flow heat exchanger performance prediction</p>
          <ul className="list-disc pl-6">
            <li>Common Applications:</li>
            <ul className="list-circle pl-6">
              <li>Automobile radiators</li>
              <li>Air conditioning units</li>
              <li>Gas turbine intercoolers</li>
            </ul>
            <li>Design Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Flow arrangement optimization</li>
              <li>Size constraints</li>
              <li>Performance requirements</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="25. Shell-and-Tube LMTD Correction (11.33):"
          formula={`$$ q = UA F \\Delta T_{lm,cf} $$`}
        >
          <p>Use Case: Multi-pass shell-and-tube heat exchangers</p>
          <ul className="list-disc pl-6">
            <li>Industrial Applications:</li>
            <ul className="list-circle pl-6">
              <li>Chemical processing</li>
              <li>Power plants</li>
              <li>Oil refineries</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Pass arrangement selection</li>
              <li>Temperature cross effects</li>
              <li>Flow distribution</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="26. Temperature Effectiveness (11.34):"
          formula={`$$ P = \\frac{T_{c,o} - T_{c,i}}{T_{h,i} - T_{c,i}} $$`}
        >
          <p>Use Case: Performance evaluation parameter</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Design optimization</li>
              <li>Operating point analysis</li>
              <li>Performance monitoring</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="27. Pressure Drop Correlation (11.35):"
          formula={`$$ \\Delta p = f\\frac{L}{D_h}\\frac{\\rho V^2}{2} $$`}
        >
          <p>Use Case: Flow resistance calculation</p>
          <ul className="list-disc pl-6">
            <li>Design Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Friction factor effects</li>
              <li>Channel geometry</li>
              <li>Flow conditions</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="28. Heat Exchanger Compactness (11.36):"
          formula={`$$ \\beta = \\frac{A_o}{V} $$`}
        >
          <p>Use Case: Compact heat exchanger design</p>
          <ul className="list-disc pl-6">
            <li>Performance Metrics:</li>
            <ul className="list-circle pl-6">
              <li>Surface area density</li>
              <li>Volume optimization</li>
              <li>Cost effectiveness</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate title="29. Regenerator Effectiveness (11.37):"
          formula={`$$ \\varepsilon = \\frac{1 - \\exp[-NTU(1 - C_r^*)]}{1 - C_r^*\\exp[-NTU(1 - C_r^*)]} $$`}
        >
          <p>Use Case: Periodic flow heat exchangers</p>
          <ul className="list-disc pl-6">
            <li>Operating Conditions:</li>
            <ul className="list-circle pl-6">
              <li>Matrix heat capacity effects</li>
              <li>Switching frequency</li>
              <li>Flow period ratio</li>
            </ul>
          </ul>
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