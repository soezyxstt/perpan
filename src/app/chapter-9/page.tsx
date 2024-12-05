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
          <li>Free convection occurs without external forcing conditions (no fans, pumps, or propulsion)</li>
          <li>Driven by buoyancy forces due to density gradients and body forces (usually gravity)</li>
          <li>Though velocities are smaller than forced convection, it&apos;s often preferred for:
            <ul className="list-circle pl-6 mt-1">
              <li>Lower operating costs</li>
              <li>Reduced noise</li>
              <li>Minimal maintenance</li>
            </ul>
          </li>
          <li>Important in many applications including:
            <ul className="list-circle pl-6 mt-1">
              <li>Electronic device cooling</li>
              <li>HVAC systems</li>
              <li>Solar collectors</li>
              <li>Fire safety systems</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">2. Physical Mechanisms</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Temperature gradients create density differences in fluid</li>
          <li>Buoyancy forces arise from interaction of density differences with gravitational field</li>
          <li>Two main types of boundary flows:
            <ul className="list-circle pl-6 mt-1">
              <li>Free boundary flows (plumes and buoyant jets)</li>
              <li>External boundary layer flows</li>
            </ul>
          </li>
          <li>Flow stability depends on temperature gradient direction:
            <ul className="list-circle pl-6 mt-1">
              <li>Unstable when hotter fluid is below cooler fluid</li>
              <li>Stable when cooler fluid is below hotter fluid</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">3. Governing Equations</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Based on conservation principles for:
            <ul className="list-circle pl-6 mt-1">
              <li>Mass (continuity equation)</li>
              <li>Momentum (with buoyancy term)</li>
              <li>Energy</li>
            </ul>
          </li>
          <li>Boussinesq approximation relates density changes to temperature differences</li>
          <li>Key dimensionless parameters:
            <ul className="list-circle pl-6 mt-1">
              <li>Grashof number (Gr<sub>L</sub>): Ratio of buoyancy to viscous forces</li>
              <li>Rayleigh number (Ra<sub>L</sub>): Product of Gr and Pr</li>
              <li>Nusselt number (Nu<sub>L</sub>): Dimensionless heat transfer</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">4. External Free Convection</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Vertical plates and cylinders:
            <ul className="list-circle pl-6 mt-1">
              <li>Laminar flow correlations for Ra<sub>L</sub> ≤ 10<sup>9</sup></li>
              <li>Turbulent flow correlations for Ra<sub>L</sub> {'>'} 10<sup>9</sup></li>
            </ul>
          </li>
          <li>Horizontal plates:
            <ul className="list-circle pl-6 mt-1">
              <li>Different correlations for upper and lower surfaces</li>
              <li>Heat transfer effectiveness depends on orientation</li>
            </ul>
          </li>
          <li>Inclined surfaces: Modified by factor of cos θ for certain orientations</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">5. Enclosed Spaces</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Rectangular cavities:
            <ul className="list-circle pl-6 mt-1">
              <li>Critical Rayleigh number for onset of convection</li>
              <li>Different flow patterns based on orientation</li>
            </ul>
          </li>
          <li>Concentric cylinders and spheres:
            <ul className="list-circle pl-6 mt-1">
              <li>Use effective thermal conductivity approach</li>
              <li>Correlations based on modified Rayleigh number</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">6. Boundary Layer Development</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Velocity boundary layer characteristics:
            <ul className="list-circle pl-6 mt-1">
              <li>Zero velocity at infinity (quiescent fluid)</li>
              <li>Maximum velocity within boundary layer</li>
              <li>Velocity approaches zero at large distances</li>
            </ul>
          </li>
          <li>Thermal boundary layer features:
            <ul className="list-circle pl-6 mt-1">
              <li>Temperature varies from T<sub>s</sub> to T<sub>∞</sub></li>
              <li>Thickness depends on Prandtl number</li>
              <li>Coupled with velocity boundary layer</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">7. Transition and Turbulence</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Transition criteria:
            <ul className="list-circle pl-6 mt-1">
              <li>Critical Rayleigh number ≈ 10<sup>9</sup></li>
              <li>Depends on geometry and orientation</li>
              <li>Affected by surface roughness</li>
            </ul>
          </li>
          <li>Turbulent flow characteristics:
            <ul className="list-circle pl-6 mt-1">
              <li>Enhanced mixing and heat transfer</li>
              <li>Different correlations required</li>
              <li>More complex flow patterns</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">8. Special Configurations</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Parallel plate channels:
            <ul className="list-circle pl-6 mt-1">
              <li>Optimal spacing exists</li>
              <li>Chimney effect enhancement</li>
              <li>Application in solar collectors</li>
            </ul>
          </li>
          <li>Finned surfaces:
            <ul className="list-circle pl-6 mt-1">
              <li>Enhanced heat transfer area</li>
              <li>Spacing considerations critical</li>
              <li>Used in electronic cooling</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">9. Combined Convection</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Interaction with forced convection:
            <ul className="list-circle pl-6 mt-1">
              <li>Assisting flows: Enhanced heat transfer</li>
              <li>Opposing flows: Reduced heat transfer</li>
              <li>Transverse flows: Complex patterns</li>
            </ul>
          </li>
          <li>Importance ratio Gr<sub>L</sub>/Re<sub>L</sub><sup>2</sup>:
            <ul className="list-circle pl-6 mt-1">
              <li>{"<"} 0.1: Forced convection dominates</li>
              <li>{">"} 10: Natural convection dominates</li>
              <li>Between 0.1 and 10: Mixed convection</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">10. Practical Design Considerations</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Surface orientation effects:
            <ul className="list-circle pl-6 mt-1">
              <li>Vertical: Most effective for natural convection</li>
              <li>Horizontal: Depends on heating direction</li>
              <li>Inclined: Modified by cosine factor</li>
            </ul>
          </li>
          <li>Enhancement techniques:
            <ul className="list-circle pl-6 mt-1">
              <li>Surface roughness modification</li>
              <li>Extended surfaces (fins)</li>
              <li>Optimal spacing determination</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );

  const FormulasContent = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Formulas</h2>

      <div className="space-y-6">
        <LatexTemplate 
          title="1. X-Momentum Equation (9.1):"
          formula={`$$ u\\frac{\\partial u}{\\partial x} + v\\frac{\\partial u}{\\partial y} = -\\frac{1}{\\rho}\\frac{dp_\\infty}{dx} - g + \\nu\\frac{\\partial^2 u}{\\partial y^2} $$`}
        >
          <p>Use Case: Describes fluid motion in free convection boundary layers</p>
          <ul className="list-disc pl-6">
            <li>Practical Applications:</li>
            <ul className="list-circle pl-6">
              <li>Cooling of vertical electronic circuit boards</li>
              <li>Natural ventilation in buildings</li>
              <li>Solar chimney design</li>
            </ul>
            <li>Solution Process:</li>
            <ul className="list-circle pl-6">
              <li>1. Identify boundary conditions (T<sub>s</sub>, T<sub>∞</sub>)</li>
              <li>2. Calculate fluid properties at film temperature</li>
              <li>3. Solve coupled with continuity and energy equations</li>
            </ul>
            <li>Limitations:</li>
            <ul className="list-circle pl-6">
              <li>Valid only for laminar flow regime</li>
              <li>Assumes steady-state conditions</li>
              <li>Requires numerical methods for solution</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="2. Free Stream Pressure Gradient (9.2):"
          formula={`$$ \\frac{dp_\\infty}{dx} = -\\rho_\\infty g $$`}
        >
          <p>Use Case: Determines pressure variation in quiescent region outside boundary layer</p>
          <ul className="list-disc pl-6">
            <li>Used when u = 0 in free stream</li>
            <li>Helps simplify momentum equation</li>
            <li>Valid for hydrostatic conditions</li>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="3. Momentum Equation with Density Difference (9.3):"
          formula={`$$ u\\frac{\\partial u}{\\partial x} + v\\frac{\\partial u}{\\partial y} = g\\frac{\\Delta \\rho}{\\rho} + \\nu\\frac{\\partial^2 u}{\\partial y^2} $$`}
        >
          <p>Use Case: Models buoyancy-driven flow with density variations</p>
          <ul className="list-disc pl-6">
            <li>Incorporates density differences directly</li>
            <li>Precursor to Boussinesq approximation</li>
            <li>Used in detailed analysis of buoyancy effects</li>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="4. Volumetric Thermal Expansion Coefficient (9.4):"
          formula={`$$ \\beta = -\\frac{1}{\\rho}\\left(\\frac{\\partial \\rho}{\\partial T}\\right)_p $$`}
        >
          <p>Use Case: Relates density changes to temperature variations</p>
          <ul className="list-disc pl-6">
            <li>Key parameter in Boussinesq approximation</li>
            <li>For ideal gas: β = 1/T</li>
            <li>For liquids: Found in property tables</li>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="5. Boussinesq Approximation (9.5):"
          formula={`$$ u\\frac{\\partial u}{\\partial x} + v\\frac{\\partial u}{\\partial y} = g\\beta(T - T_\\infty) + \\nu\\frac{\\partial^2 u}{\\partial y^2} $$`}
        >
          <p>Use Case: Simplifies buoyancy-driven flow analysis</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Natural ventilation systems</li>
              <li>Atmospheric flow modeling</li>
              <li>Oceanographic studies</li>
            </ul>
            <li>Key Assumptions:</li>
            <ul className="list-circle pl-6">
              <li>Density variations only affect buoyancy term</li>
              <li>Properties otherwise constant</li>
              <li>Valid for (T - T<sub>∞</sub>) ≪ T<sub>∞</sub></li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="6. Continuity Equation (9.6):"
          formula={`$$ \\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial y} = 0 $$`}
        >
          <p>Use Case: Mass conservation in boundary layer</p>
          <ul className="list-disc pl-6">
            <li>Fundamental conservation principle</li>
            <li>Valid for incompressible flow</li>
            <li>Used with momentum and energy equations</li>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="7. Momentum Equation (9.7):"
          formula={`$$ u\\frac{\\partial u}{\\partial x} + v\\frac{\\partial u}{\\partial y} = g\\beta(T - T_\\infty) + \\nu\\frac{\\partial^2 u}{\\partial y^2} $$`}
        >
          <p>Use Case: Describes fluid motion with buoyancy effects</p>
          <ul className="list-disc pl-6">
            <li>Coupled with energy equation</li>
            <li>Includes viscous and buoyancy terms</li>
            <li>Key equation for natural convection analysis</li>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="8. Energy Equation (9.8):"
          formula={`$$ u\\frac{\\partial T}{\\partial x} + v\\frac{\\partial T}{\\partial y} = \\alpha\\frac{\\partial^2 T}{\\partial y^2} $$`}
        >
          <p>Use Case: Temperature distribution in boundary layer</p>
          <ul className="list-disc pl-6">
            <li>Neglects viscous dissipation</li>
            <li>Valid for small velocities</li>
            <li>Coupled with momentum equation</li>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="9. Grashof Number (9.12):"
          formula={`$$ Gr_L \\equiv \\frac{g\\beta(T_s - T_\\infty)L^3}{\\nu^2} $$`}
        >
          <p>Use Case: Key dimensionless parameter for free convection</p>
          <ul className="list-disc pl-6">
            <li>Flow Regime Determination:</li>
            <ul className="list-circle pl-6">
              <li>Gr<sub>L</sub> {'<'} 10⁸: Laminar flow</li>
              <li>10⁸ {'<'} Gr<sub>L</sub> {'<'} 10¹⁰: Transition</li>
              <li>Gr<sub>L</sub> {'>'} 10¹⁰: Turbulent flow</li>
            </ul>
            <li>Common Values:</li>
            <ul className="list-circle pl-6">
              <li>Air (ΔT = 30°C): Gr ≈ 10⁹</li>
              <li>Water (ΔT = 10°C): Gr ≈ 10⁷</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="10. Similarity Variable (9.13):"
          formula={`$$ \\eta = y\\left(\\frac{Gr_L}{4}\\right)^{1/4}/x $$`}
        >
          <p>Use Case: Transforms PDEs to ODEs for vertical plate analysis</p>
          <ul className="list-disc pl-6">
            <li>Simplifies mathematical analysis</li>
            <li>Enables similarity solutions</li>
            <li>Used in theoretical developments</li>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="11. Local Nusselt Number (9.19):"
          formula={`$$ Nu_x = \\frac{hx}{k} = \\left(\\frac{Gr_L}{4}\\right)^{1/4} g(Pr) $$`}
        >
          <p>Use Case: Local heat transfer coefficient calculation</p>
          <ul className="list-disc pl-6">
            <li>Vertical plate applications</li>
            <li>Point-by-point analysis</li>
            <li>Design calculations</li>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="12. Average Nusselt Number (9.21):"
          formula={`$$ \\overline{Nu}_L = \\frac{\\bar{h}L}{k} = \\frac{4}{3}\\left(\\frac{Gr_L}{4}\\right)^{1/4} g(Pr) $$`}
        >
          <p>Use Case: Overall heat transfer coefficient</p>
          <ul className="list-disc pl-6">
            <li>Practical Design Applications:</li>
            <ul className="list-circle pl-6">
              <li>Solar collectors</li>
              <li>Building walls</li>
              <li>Industrial equipment</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="13. Churchill-Chu Correlation (9.26):"
          formula={`$$ \\overline{Nu}_L = \\left\\{0.825 + \\frac{0.387Ra_L^{1/6}}{[1 + (0.492/Pr)^{9/16}]^{8/27}}\\right\\}^2 $$`}
        >
          <p>Use Case: Vertical plate correlation for all Ra<sub>L</sub></p>
          <ul className="list-disc pl-6">
            <li>Most widely used correlation</li>
            <li>Valid for all Ra<sub>L</sub> ranges</li>
            <li>Accuracy within ±5%</li>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="14. Horizontal Plate (Upper Surface) (9.30):"
          formula={`$$ \\overline{Nu}_L = 0.54Ra_L^{1/4} \\quad (10^4 \\leq Ra_L \\leq 10^7, Pr \\geq 0.7) $$`}
        >
          <p>Use Case: Hot plate facing up or cold plate facing down</p>
          <ul className="list-disc pl-6">
            <li>Common Applications:</li>
            <ul className="list-circle pl-6">
              <li>Cooling fins</li>
              <li>Heat sinks</li>
              <li>Solar panels</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="15. Horizontal Plate (Lower Surface) (9.32):"
          formula={`$$ \\overline{Nu}_L = 0.27Ra_L^{1/4} \\quad (10^5 \\leq Ra_L \\leq 10^{10}, Pr \\geq 0.7) $$`}
        >
          <p>Use Case: Hot plate facing down or cold plate facing up</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Ceiling cooling</li>
              <li>Floor heating</li>
              <li>Storage tank bottoms</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="16. Horizontal Cylinder Correlation (9.33):"
          formula={`$$ \\overline{Nu}_D = \\left\\{0.60 + \\frac{0.387Ra_D^{1/6}}{[1 + (0.559/Pr)^{9/16}]^{8/27}}\\right\\}^2 $$`}
        >
          <p>Use Case: Natural convection around horizontal cylinders</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Power transmission lines</li>
              <li>Pipe heat loss</li>
              <li>Heat exchanger tubes</li>
            </ul>
            <li>Valid for:</li>
            <ul className="list-circle pl-6">
              <li>Ra<sub>D</sub> ≤ 10¹²</li>
              <li>All Pr numbers</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="17. Sphere Correlation (9.35):"
          formula={`$$ \\overline{Nu}_D = 2 + \\frac{0.589Ra_D^{1/4}}{[1 + (0.469/Pr)^{9/16}]^{4/9}} $$`}
        >
          <p>Use Case: Heat transfer from spherical objects</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Storage tanks</li>
              <li>Spherical containers</li>
              <li>Droplet evaporation</li>
            </ul>
            <li>Valid for:</li>
            <ul className="list-circle pl-6">
              <li>Ra<sub>D</sub> ≤ 10¹¹</li>
              <li>All Pr numbers</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="18. Vertical Channel Correlation (9.36):"
          formula={`$$ \\overline{Nu}_S = \\frac{1}{24}Ra_S\\left(\\frac{S}{L}\\right)\\left[1 - \\exp\\left(-\\frac{35}{Ra_S(S/L)}\\right)\\right]^{3/4} $$`}
        >
          <p>Use Case: Heat transfer in vertical channels</p>
          <ul className="list-disc pl-6">
            <li>Design Applications:</li>
            <ul className="list-circle pl-6">
              <li>Solar collectors</li>
              <li>Electronic cooling channels</li>
              <li>Building ventilation</li>
            </ul>
            <li>Valid for:</li>
            <ul className="list-circle pl-6">
              <li>10⁻¹ ≤ Ra<sub>S</sub>(S/L) ≤ 10⁵</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="19. Modified Rayleigh Number (9.42):"
          formula={`$$ Ra_S^* = \\frac{g\\beta q_s''S^4}{k\\alpha\\nu} $$`}
        >
          <p>Use Case: Channel flow with constant heat flux</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Solar air heaters</li>
              <li>Electronic cooling fins</li>
              <li>Heat sink design</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="20. Fully Developed Channel Flow (9.43):"
          formula={`$$ \\overline{Nu}_{S,fd} = 0.144[Ra_S^*(S/L)]^{1/2} $$`}
        >
          <p>Use Case: Fully developed flow in vertical channels</p>
          <ul className="list-disc pl-6">
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Channel spacing optimization</li>
              <li>Heat transfer enhancement</li>
              <li>Flow development length</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="21. Enclosed Space Correlation (9.58):"
          formula={`$$ q = \\frac{2\\pi Lk_{eff}(T_i - T_o)}{\\ln(r_o/r_i)} $$`}
        >
          <p>Use Case: Heat transfer between concentric cylinders</p>
          <ul className="list-disc pl-6">
            <li>Industrial Applications:</li>
            <ul className="list-circle pl-6">
              <li>Pipe insulation</li>
              <li>Underground cables</li>
              <li>Storage tanks</li>
            </ul>
            <li>Design Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Optimal gap width</li>
              <li>Critical Ra number</li>
              <li>Effective conductivity</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate 
          title="22. Mixed Convection Parameter (9.64):"
          formula={`$$ Nu^n = Nu_F^n \\pm Nu_N^n $$`}
        >
          <p>Use Case: Combined forced and natural convection</p>
          <ul className="list-disc pl-6">
            <li>Flow Configurations:</li>
            <ul className="list-circle pl-6">
              <li>Assisting flow (+)</li>
              <li>Opposing flow (-)</li>
              <li>Transverse flow (+)</li>
            </ul>
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Industrial cooling systems</li>
              <li>HVAC design</li>
              <li>Process heat transfer</li>
            </ul>
          </ul>
        </LatexTemplate>

        {/* End of FormulasContent */}
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