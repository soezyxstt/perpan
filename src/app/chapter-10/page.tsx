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
        <h3 className="text-xl font-semibold text-blue-600">1. Introduction to Boiling and Condensation</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Phase change processes occurring at solid-liquid or solid-vapor interfaces</li>
          <li>Involves significant latent heat effects during phase transitions</li>
          <li>Characterized by high heat transfer rates with small temperature differences</li>
          <li>Key factors: latent heat (hfg), surface tension (σ), and density difference between phases</li>
          <li>Buoyancy forces proportional to g(ρl - ρv) play a crucial role</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">2. Pool Boiling Characteristics</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Free convection boiling (ΔTe ≤ 5°C): Natural convection with minimal bubble formation</li>
          <li>Nucleate boiling (5°C ≤ ΔTe ≤ 30°C): Most practical regime with high heat transfer rates</li>
          <li>Transition boiling (30°C ≤ ΔTe ≤ 120°C): Unstable vapor film formation</li>
          <li>Film boiling (ΔTe ≥ 120°C): Complete vapor blanket coverage</li>
          <li>Critical heat flux (CHF) marks maximum nucleate boiling heat transfer</li>
          <li>Leidenfrost point represents minimum heat flux in film boiling</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">3. Boiling Heat Transfer Mechanisms</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Nucleate boiling: Enhanced by surface roughness and nucleation site density</li>
          <li>Bubble dynamics influence heat transfer coefficients</li>
          <li>Surface-fluid combination affects nucleation characteristics</li>
          <li>Heat transfer coefficient can exceed 10⁴ W/m²·K in nucleate boiling</li>
          <li>Critical heat flux depends strongly on pressure and fluid properties</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">4. Condensation Processes</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Film condensation: Continuous liquid film covering the surface</li>
          <li>Dropwise condensation: Discrete droplets form and coalesce</li>
          <li>Film thickness increases with distance in vertical surfaces</li>
          <li>Surface tension effects important in horizontal tubes</li>
          <li>Heat transfer coefficients typically higher in dropwise condensation</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">5. Applications and Practical Considerations</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Power generation cycles use boilers and condensers</li>
          <li>Electronics cooling applications prefer nucleate boiling</li>
          <li>Surface enhancement techniques can improve heat transfer</li>
          <li>Noncondensable gases significantly reduce condensation rates</li>
          <li>Finned tubes can enhance or inhibit condensation depending on geometry</li>
        </ul>
      </section>
    </div>
  );

  const FormulasContent = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Formulas</h2>

      <div className="space-y-6">
        <LatexTemplate
          title="1. Convection Coefficient Function (10.1):"
          formula={`$$ h = h[\\Delta T, g(\\rho_l - \\rho_v), h_{fg}, \\sigma, L, \\rho, c_p, k, \\mu] $$`}
        >
          <p>Use Case: Functional relationship for boiling heat transfer coefficient</p>
          <ul className="list-disc pl-6">
            <li>Key Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Temperature difference (ΔT)</li>
              <li>Latent heat (h<sub>fg</sub>)</li>
              <li>Surface tension (σ)</li>
              <li>Buoyancy term g(ρ<sub>l</sub> - ρ<sub>v</sub>)</li>
            </ul>
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Design of boiling equipment</li>
              <li>Heat exchanger sizing</li>
              <li>Process optimization</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="2. Dimensionless Groups (10.2a):"
          formula={`$$ \\frac{hL}{k} = f\\left[\\frac{\\rho g(\\rho_l - \\rho_v)L^3}{\\mu^2}, \\frac{c_p \\Delta T}{h_{fg}}, \\frac{\\mu c_p}{k}, \\frac{g(\\rho_l - \\rho_v)L^2}{\\sigma}\\right] $$`}
        >
          <p>Use Case: Dimensionless analysis of boiling phenomena</p>
          <ul className="list-disc pl-6">
            <li>Key Dimensionless Groups:</li>
            <ul className="list-circle pl-6">
              <li>Nusselt Number (hL/k)</li>
              <li>Grashof Number (ρ²gβΔTL³/μ²)</li>
              <li>Jakob Number (c<sub>p</sub>ΔT/h<sub>fg</sub>)</li>
              <li>Prandtl Number (μc<sub>p</sub>/k)</li>
              <li>Bond Number (g(ρ<sub>l</sub> - ρ<sub>v</sub>)L²/σ)</li>
            </ul>
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Scaling analysis</li>
              <li>Experimental design</li>
              <li>Correlation development</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="3. Nusselt Number Relation (10.2b):"
          formula={`$$ Nu_L = f\\left[\\frac{\\rho g(\\rho_l - \\rho_v)L^3}{\\mu^2}, Ja, Pr, Bo\\right] $$`}
        >
          <p>Use Case: Simplified dimensionless correlation</p>
          <ul className="list-disc pl-6">
            <li>Practical Significance:</li>
            <ul className="list-circle pl-6">
              <li>Heat transfer prediction</li>
              <li>Equipment design</li>
              <li>Performance evaluation</li>
            </ul>
            <li>Common Ranges:</li>
            <ul className="list-circle pl-6">
              <li>Ja: 0.1 - 1.0</li>
              <li>Pr: 1.0 - 10.0</li>
              <li>Bo: {'>'} 1 for macro-scale</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="4. Newton's Law for Boiling (10.3):"
          formula={`$$ q_s'' = h(T_s - T_{sat}) = h\\Delta T_e $$`}
        >
          <p>Use Case: Basic heat transfer rate calculation</p>
          <ul className="list-disc pl-6">
            <li>Design Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Surface temperature (T<sub>s</sub>)</li>
              <li>Saturation temperature (T<sub>sat</sub>)</li>
              <li>Excess temperature (ΔT<sub>e</sub>)</li>
            </ul>
            <li>Typical Values:</li>
            <ul className="list-circle pl-6">
              <li>Nucleate boiling: 5°C ≤ ΔT<sub>e</sub> ≤ 30°C</li>
              <li>Film boiling: ΔT<sub>e</sub> ≥ 120°C</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="5. Bubble Departure Diameter (10.4a):"
          formula={`$$ D_b \\propto \\sqrt{\\frac{\\sigma}{g(\\rho_l - \\rho_v)}} $$`}
        >
          <p>Use Case: Predicts bubble size at departure</p>
          <ul className="list-disc pl-6">
            <li>Physical Significance:</li>
            <ul className="list-circle pl-6">
              <li>Balance of buoyancy and surface tension</li>
              <li>Critical for nucleate boiling</li>
              <li>Affects heat transfer coefficient</li>
            </ul>
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Surface design optimization</li>
              <li>Enhancement techniques</li>
              <li>Nucleation site density prediction</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="6. Characteristic Velocity (10.4b):"
          formula={`$$ V \\propto \\frac{D_b}{t_b} \\propto \\frac{D_b}{\\left(\\frac{\\rho h_{fg}D_b^3}{q_s''D_b^2}\\right)} \\propto \\frac{q_s''}{\\rho h_{fg}} $$`}
        >
          <p>Use Case: Bubble rise velocity estimation</p>
          <ul className="list-disc pl-6">
            <li>Design Implications:</li>
            <ul className="list-circle pl-6">
              <li>Bubble frequency prediction</li>
              <li>Heat transfer enhancement</li>
              <li>Flow pattern analysis</li>
            </ul>
            <li>Important Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Heat flux (q<sub>s</sub>&apos;&apos;)</li>
              <li>Fluid density (ρ)</li>
              <li>Latent heat (h<sub>fg</sub>)</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="7. Rohsenow Correlation (10.5):"
          formula={`$$ q_s'' = \\mu_l h_{fg}\\left[\\frac{g(\\rho_l - \\rho_v)}{\\sigma}\\right]^{1/2}\\left(\\frac{c_{p,l}\\Delta T_e}{C_{s,f}h_{fg}Pr_l^n}\\right)^3 $$`}
        >
          <p>Use Case: Nucleate pool boiling heat transfer</p>
          <ul className="list-disc pl-6">
            <li>Key Features:</li>
            <ul className="list-circle pl-6">
              <li>Surface-fluid combination (C<sub>s,f</sub>)</li>
              <li>Typical n = 1.0 for water</li>
              <li>n = 1.7 for other fluids</li>
            </ul>
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Boiler design</li>
              <li>Process equipment</li>
              <li>Heat exchanger optimization</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="8. Critical Heat Flux (10.6):"
          formula={`$$ q_{max}'' = Ch_{fg}\\rho_v\\left[\\frac{\\sigma g(\\rho_l - \\rho_v)}{\\rho_v^2}\\right]^{1/4} $$`}
        >
          <p>Use Case: Maximum heat flux prediction in nucleate boiling</p>
          <ul className="list-disc pl-6">
            <li>Safety Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Burnout prevention</li>
              <li>Equipment protection</li>
              <li>Safety margin determination</li>
            </ul>
            <li>Typical Values:</li>
            <ul className="list-circle pl-6">
              <li>Water at 1 atm: ≈ 1 MW/m²</li>
              <li>C ≈ 0.131 for most fluids</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="9. Minimum Heat Flux (10.7):"
          formula={`$$ q_{min}'' = C\\rho_vh_{fg}\\left[\\frac{g\\sigma(\\rho_l - \\rho_v)}{(\\rho_l + \\rho_v)^2}\\right]^{1/4} $$`}
        >
          <p>Use Case: Leidenfrost point determination</p>
          <ul className="list-disc pl-6">
            <li>Practical Applications:</li>
            <ul className="list-circle pl-6">
              <li>Quenching processes</li>
              <li>Emergency cooling systems</li>
              <li>Spray cooling design</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Transition boiling regime</li>
              <li>Cooling rate control</li>
              <li>Surface temperature effects</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="10. Film Condensation Nusselt Number (10.8):"
          formula={`$$ \\overline{Nu}_D = \\frac{\\bar{h}_{conv}D}{k_v} = C\\left[\\frac{g(\\rho_l - \\rho_v)h_{fg}'D^3}{\\mu_vk_v(T_i - T_{sat})}\\right]^{1/4} $$`}
        >
          <p>Use Case: External condensation on tubes</p>
          <ul className="list-disc pl-6">
            <li>Configuration Constants:</li>
            <ul className="list-circle pl-6">
              <li>Single horizontal tube: C = 0.729</li>
              <li>Vertical tube: C = 0.943</li>
              <li>N-tube array: C = f(N)</li>
            </ul>
            <li>Industrial Applications:</li>
            <ul className="list-circle pl-6">
              <li>Shell-and-tube condensers</li>
              <li>Air conditioning systems</li>
              <li>Power plant condensers</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="11. Combined Heat Transfer Coefficient (10.9):"
          formula={`$$ \\bar{h}^{4/3} = \\bar{h}_{conv}^{4/3} + \\bar{h}_{rad}\\bar{h}^{1/3} $$`}
        >
          <p>Use Case: High-temperature film boiling</p>
          <ul className="list-disc pl-6">
            <li>Important for:</li>
            <ul className="list-circle pl-6">
              <li>Metal quenching</li>
              <li>Nuclear safety systems</li>
              <li>High-temperature processes</li>
            </ul>
            <li>Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Radiation effects significant above 300°C</li>
              <li>Surface emissivity effects</li>
              <li>View factor corrections</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="12. Simplified Heat Transfer Coefficient (10.10):"
          formula={`$$ \\bar{h} = \\bar{h}_{conv} + \\frac{3}{4}\\bar{h}_{rad} $$`}
        >
          <p>Use Case: Approximate combined heat transfer</p>
          <ul className="list-disc pl-6">
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Preliminary design calculations</li>
              <li>Quick estimates</li>
              <li>Safety analysis</li>
            </ul>
            <li>Accuracy:</li>
            <ul className="list-circle pl-6">
              <li>Within 5% of exact solution</li>
              <li>Valid for most industrial conditions</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="13. Radiation Heat Transfer Coefficient (10.11):"
          formula={`$$ \\bar{h}_{rad} = \\frac{\\varepsilon\\sigma(T_s^4 - T_{sat}^4)}{T_s - T_{sat}} $$`}
        >
          <p>Use Case: Radiation contribution in film boiling</p>
          <ul className="list-disc pl-6">
            <li>Critical Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Surface emissivity (ε)</li>
              <li>Stefan-Boltzmann constant (σ)</li>
              <li>Temperature difference</li>
            </ul>
            <li>Typical Values:</li>
            <ul className="list-circle pl-6">
              <li>ε: 0.1 - 0.9</li>
              <li>h<sub>rad</sub>: 100 - 1000 W/m²·K</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="14. Low Velocity Critical Heat Flux (10.12):"
          formula={`$$ \\frac{q_{max}''}{\\rho_vh_{fg}V} = \\frac{1}{\\pi}\\left[1 + \\left(\\frac{4}{We_D}\\right)^{1/3}\\right] $$`}
        >
          <p>Use Case: Flow boiling CHF at low velocities</p>
          <ul className="list-disc pl-6">
            <li>Applicable Range:</li>
            <ul className="list-circle pl-6">
              <li>We<sub>D</sub> {'<'} 100</li>
              <li>Low flow rates</li>
              <li>Vertical tubes</li>
            </ul>
            <li>Design Implications:</li>
            <ul className="list-circle pl-6">
              <li>Safety margins</li>
              <li>Flow rate selection</li>
              <li>Tube diameter sizing</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="15. High Velocity Critical Heat Flux (10.13):"
          formula={`$$ \\frac{q_{max}''}{\\rho_vh_{fg}V} = \\frac{(\\rho_l/\\rho_v)^{3/4}}{169\\pi} + \\frac{(\\rho_l/\\rho_v)^{1/2}}{19.2\\pi We_D^{1/3}} $$`}
        >
          <p>Use Case: Flow boiling CHF at high velocities</p>
          <ul className="list-disc pl-6">
            <li>Application Range:</li>
            <ul className="list-circle pl-6">
              <li>We<sub>D</sub> {'>'} 100</li>
              <li>High flow rates</li>
              <li>Forced convection dominant</li>
            </ul>
            <li>Industrial Uses:</li>
            <ul className="list-circle pl-6">
              <li>Nuclear reactors</li>
              <li>High-performance heat exchangers</li>
              <li>Power generation systems</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="16. Weber Number (10.14):"
          formula={`$$ We_D \\equiv \\frac{\\rho_vV^2D}{\\sigma} $$`}
        >
          <p>Use Case: Characterizes flow boiling regimes</p>
          <ul className="list-disc pl-6">
            <li>Physical Meaning:</li>
            <ul className="list-circle pl-6">
              <li>Inertia vs surface tension</li>
              <li>Flow pattern transitions</li>
              <li>Bubble dynamics</li>
            </ul>
            <li>Critical Values:</li>
            <ul className="list-circle pl-6">
              <li>We<sub>D</sub> = 100: Flow regime transition</li>
              <li>We<sub>D</sub> {'<'} 4: Surface tension dominant</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="17. Two-Phase Flow Heat Transfer (10.15a):"
          formula={`$$ \\frac{h}{h_{sp}} = 0.6683\\left(\\frac{\\rho_l}{\\rho_v}\\right)^{0.1} \\bar{X}^{0.16}(1 - \\bar{X})^{0.64}f(Fr) + 1058\\left(\\frac{q''}{\\dot{m}''h_{fg}}\\right)^{0.7}(1 - \\bar{X})^{0.8}G_{s,f} $$`}
        >
          <p>Use Case: Flow boiling heat transfer coefficient</p>
          <ul className="list-disc pl-6">
            <li>Correlation Components:</li>
            <ul className="list-circle pl-6">
              <li>Convective boiling term</li>
              <li>Nucleate boiling term</li>
              <li>Quality effects</li>
            </ul>
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Evaporators</li>
              <li>Steam generators</li>
              <li>Refrigeration systems</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="18. Vapor Mass Fraction (10.16):"
          formula={`$$ \\bar{X}(x) = \\frac{q_s''\\pi Dx}{\\dot{m}h_{fg}} $$`}
        >
          <p>Use Case: Quality variation in flow boiling</p>
          <ul className="list-disc pl-6">
            <li>Design Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Heat flux distribution</li>
              <li>Mass flow rate</li>
              <li>Tube geometry</li>
            </ul>
            <li>Practical Range:</li>
            <ul className="list-circle pl-6">
              <li>0 ≤ X̄ ≤ 1</li>
              <li>Optimal range: 0.2-0.7</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="19. Film Momentum Equation (10.17):"
          formula={`$$ \\frac{\\partial^2 u}{\\partial y^2} = -\\frac{g}{\\mu_l}(\\rho_l - \\rho_v) $$`}
        >
          <p>Use Case: Condensate film velocity profile</p>
          <ul className="list-disc pl-6">
            <li>Analysis Applications:</li>
            <ul className="list-circle pl-6">
              <li>Film thickness prediction</li>
              <li>Heat transfer modeling</li>
              <li>Condensation rate calculation</li>
            </ul>
            <li>Key Assumptions:</li>
            <ul className="list-circle pl-6">
              <li>Laminar flow</li>
              <li>Constant properties</li>
              <li>Negligible inertia effects</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="20. Velocity Profile (10.18):"
          formula={`$$ u(y) = \\frac{g(\\rho_l - \\rho_v)\\delta^2}{\\mu_l}\\left[\\frac{y}{\\delta} - \\frac{1}{2}\\left(\\frac{y}{\\delta}\\right)^2\\right] $$`}
        >
          <p>Use Case: Film condensation flow analysis</p>
          <ul className="list-disc pl-6">
            <li>Profile Characteristics:</li>
            <ul className="list-circle pl-6">
              <li>Parabolic distribution</li>
              <li>Maximum at y/δ = 0.5</li>
              <li>Zero at wall and interface</li>
            </ul>
            <li>Engineering Uses:</li>
            <ul className="list-circle pl-6">
              <li>Shear stress calculation</li>
              <li>Mass transfer analysis</li>
              <li>Film stability assessment</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="21. Mass Flow Rate (10.19):"
          formula={`$$ \\frac{\\dot{m}(x)}{b} = \\int_0^{\\delta(x)} \\rho u(y) dy \\equiv \\Gamma(x) $$`}
        >
          <p>Use Case: Condensate flow rate determination</p>
          <ul className="list-disc pl-6">
            <li>Integration Results:</li>
            <ul className="list-circle pl-6">
              <li>Local mass flux</li>
              <li>Film thickness variation</li>
              <li>Heat transfer correlation</li>
            </ul>
            <li>Design Applications:</li>
            <ul className="list-circle pl-6">
              <li>Condenser sizing</li>
              <li>Drainage system design</li>
              <li>Performance prediction</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="22. Condensate Flow Rate (10.20):"
          formula={`$$ \\Gamma(x) = \\frac{g\\rho_l(\\rho_l - \\rho_v)\\delta^3}{3\\mu_l} $$`}
        >
          <p>Use Case: Film thickness and flow rate relationship</p>
          <ul className="list-disc pl-6">
            <li>Important Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Film thickness (δ)</li>
              <li>Fluid properties</li>
              <li>Gravitational effects</li>
            </ul>
            <li>Practical Implications:</li>
            <ul className="list-circle pl-6">
              <li>Flooding prediction</li>
              <li>Heat transfer limits</li>
              <li>Surface coverage</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="23. Heat Transfer Balance (10.21):"
          formula={`$$ dq = h_{fg}d\\dot{m} $$`}
        >
          <p>Use Case: Energy conservation in condensation</p>
          <ul className="list-disc pl-6">
            <li>Balance Components:</li>
            <ul className="list-circle pl-6">
              <li>Latent heat release</li>
              <li>Mass transfer rate</li>
              <li>Energy transfer rate</li>
            </ul>
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Process design</li>
              <li>Energy recovery</li>
              <li>System optimization</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="24. Surface Heat Flux (10.22):"
          formula={`$$ dq = q_s''(b \\cdot dx) $$`}
        >
          <p>Use Case: Local heat transfer analysis</p>
          <ul className="list-disc pl-6">
            <li>Geometric Factors:</li>
            <ul className="list-circle pl-6">
              <li>Surface width (b)</li>
              <li>Length increment (dx)</li>
              <li>Area consideration</li>
            </ul>
            <li>Design Uses:</li>
            <ul className="list-circle pl-6">
              <li>Local cooling rates</li>
              <li>Surface temperature control</li>
              <li>Equipment sizing</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="25. Fourier's Law for Surface Heat Flux (10.23):"
          formula={`$$ q_s'' = \\frac{k_l(T_{sat} - T_s)}{\\delta} $$`}
        >
          <p>Use Case: Conduction through condensate film</p>
          <ul className="list-disc pl-6">
            <li>Key Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Thermal conductivity (k<sub>l</sub>)</li>
              <li>Temperature difference</li>
              <li>Film thickness (δ)</li>
            </ul>
            <li>Practical Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Film resistance</li>
              <li>Heat transfer limitation</li>
              <li>Surface subcooling</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="26. Flow Rate Derivative (10.24):"
          formula={`$$ \\frac{d\\Gamma}{dx} = \\frac{k_l(T_{sat} - T_s)}{\\delta h_{fg}} $$`}
        >
          <p>Use Case: Condensation rate along surface</p>
          <ul className="list-disc pl-6">
            <li>Process Analysis:</li>
            <ul className="list-circle pl-6">
              <li>Local condensation rates</li>
              <li>Film thickness growth</li>
              <li>Heat transfer variation</li>
            </ul>
            <li>Design Implications:</li>
            <ul className="list-circle pl-6">
              <li>Surface length requirements</li>
              <li>Condensate removal</li>
              <li>Heat transfer efficiency</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="27. Alternative Flow Rate Expression (10.25):"
          formula={`$$ \\frac{d\\Gamma}{dx} = \\frac{g\\rho_l(\\rho_l - \\rho_v)\\delta^2}{\\mu_l}\\frac{d\\delta}{dx} $$`}
        >
          <p>Use Case: Film thickness variation analysis</p>
          <ul className="list-disc pl-6">
            <li>Analysis Features:</li>
            <ul className="list-circle pl-6">
              <li>Film growth rate</li>
              <li>Flow development</li>
              <li>Boundary layer effects</li>
            </ul>
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Vertical condensers</li>
              <li>Film stability analysis</li>
              <li>Flow pattern prediction</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="28. Film Thickness (10.26):"
          formula={`$$ \\delta(x) = \\left[\\frac{4k_l\\mu_l(T_{sat} - T_s)x}{g\\rho_l(\\rho_l - \\rho_v)h_{fg}}\\right]^{1/4} $$`}
        >
          <p>Use Case: Local film thickness prediction</p>
          <ul className="list-disc pl-6">
            <li>Design Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Distance from leading edge (x)</li>
              <li>Temperature difference</li>
              <li>Fluid properties</li>
            </ul>
            <li>Practical Uses:</li>
            <ul className="list-circle pl-6">
              <li>Heat transfer coefficient</li>
              <li>Drainage design</li>
              <li>Surface coverage</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="29. Modified Latent Heat (10.27):"
          formula={`$$ h_{fg}' = h_{fg}(1 + 0.68Ja) $$`}
        >
          <p>Use Case: Subcooling effects in condensation</p>
          <ul className="list-disc pl-6">
            <li>Correction Factors:</li>
            <ul className="list-circle pl-6">
              <li>Jakob number (Ja)</li>
              <li>Sensible heat effects</li>
              <li>Temperature dependence</li>
            </ul>
            <li>Typical Values:</li>
            <ul className="list-circle pl-6">
              <li>Water: 5-15% increase</li>
              <li>Refrigerants: 2-8% increase</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="30. Surface Heat Flux with Convection (10.28):"
          formula={`$$ q_s'' = h_x(T_{sat} - T_s) $$`}
        >
          <p>Use Case: Local heat transfer in condensation</p>
          <ul className="list-disc pl-6">
            <li>Heat Transfer Modes:</li>
            <ul className="list-circle pl-6">
              <li>Convection through film</li>
              <li>Phase change at interface</li>
              <li>Wall conduction</li>
            </ul>
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Condenser design</li>
              <li>Performance analysis</li>
              <li>Surface temperature control</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="31. Local Heat Transfer Coefficient (10.29):"
          formula={`$$ h_x = \\frac{k_l}{\\delta} $$`}
        >
          <p>Use Case: Film conduction heat transfer</p>
          <ul className="list-disc pl-6">
            <li>Key Features:</li>
            <ul className="list-circle pl-6">
              <li>Thermal resistance model</li>
              <li>Position-dependent</li>
              <li>Film thickness effect</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Surface orientation</li>
              <li>Flow regime</li>
              <li>Property variations</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="32. Alternative Heat Transfer Coefficient (10.30):"
          formula={`$$ h_x = \\left[\\frac{g\\rho_l(\\rho_l - \\rho_v)k_lh_{fg}'}{4\\mu_l(T_{sat} - T_s)x}\\right]^{1/4} $$`}
        >
          <p>Use Case: Position-dependent heat transfer</p>
          <ul className="list-disc pl-6">
            <li>Application Range:</li>
            <ul className="list-circle pl-6">
              <li>Laminar film flow</li>
              <li>Vertical surfaces</li>
              <li>Pure vapor condensation</li>
            </ul>
            <li>Limitations:</li>
            <ul className="list-circle pl-6">
              <li>Neglects waviness</li>
              <li>Assumes constant properties</li>
              <li>Pure vapor only</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="33. Average Nusselt Number (10.31):"
          formula={`$$ \\overline{Nu}_L = 0.943\\left[\\frac{g\\rho_l(\\rho_l - \\rho_v)k_lh_{fg}'}{\\mu_l(T_{sat} - T_s)L}\\right]^{1/4} $$`}
        >
          <p>Use Case: Overall heat transfer on vertical plates</p>
          <ul className="list-disc pl-6">
            <li>Key Applications:</li>
            <ul className="list-circle pl-6">
              <li>Industrial condensers</li>
              <li>Building windows</li>
              <li>Process equipment</li>
            </ul>
            <li>Design Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Surface height (L)</li>
              <li>Temperature difference</li>
              <li>Fluid properties</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="34. Horizontal Tube Array (10.35):"
          formula={`$$ \\overline{Nu}_D = 0.729\\left[\\frac{g\\rho_l(\\rho_l - \\rho_v)k_lh_{fg}'D^3}{\\mu_lk_l(T_{sat} - T_s)}\\right]^{1/4}N^{-1/4} $$`}
        >
          <p>Use Case: Condensation on tube banks</p>
          <ul className="list-disc pl-6">
            <li>Industrial Applications:</li>
            <ul className="list-circle pl-6">
              <li>Power plant condensers</li>
              <li>HVAC systems</li>
              <li>Chemical processing</li>
            </ul>
            <li>N = tube row number</li>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="35. Dropwise Condensation (10.52):"
          formula={`$$ \\bar{h}_{dc} = 51,104 + 2044T_{sat}(°C) \\quad 22°C ≤ T_{sat} ≤ 100°C $$`}
        >
          <p>Use Case: Enhanced condensation heat transfer</p>
          <ul className="list-disc pl-6">
            <li>Advantages:</li>
            <ul className="list-circle pl-6">
              <li>5-20 times higher than film condensation</li>
              <li>More efficient heat transfer</li>
              <li>Lower thermal resistance</li>
            </ul>
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Steam condensers</li>
              <li>High-performance heat exchangers</li>
              <li>Surface-treated condensers</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="36. Turbulent Film Condensation (10.32):"
          formula={`$$ \\overline{Nu}_L = 0.0077Re_L^{0.4}Pr_l^{0.5} $$`}
        >
          <p>Use Case: Turbulent film condensation on vertical surfaces</p>
          <ul className="list-disc pl-6">
            <li>Application Range:</li>
            <ul className="list-circle pl-6">
              <li>Re<sub>L</sub> {'>'} 1800</li>
              <li>High condensation rates</li>
              <li>Long vertical surfaces</li>
            </ul>
            <li>Industrial Uses:</li>
            <ul className="list-circle pl-6">
              <li>Large-scale condensers</li>
              <li>Industrial distillation</li>
              <li>Process cooling towers</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="37. Film Reynolds Number (10.33):"
          formula={`$$ Re_L = \\frac{4\\Gamma}{\\mu_l} = \\frac{4\\dot{m}}{\\mu_lb} $$`}
        >
          <p>Use Case: Flow regime characterization in condensation</p>
          <ul className="list-disc pl-6">
            <li>Critical Values:</li>
            <ul className="list-circle pl-6">
              <li>Re<sub>L</sub> {'<'} 30: Smooth laminar</li>
              <li>30 {'<'} Re<sub>L</sub> {'<'} 1800: Wavy laminar</li>
              <li>Re<sub>L</sub> {'>'} 1800: Turbulent</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="38. Inclined Surface Correlation (10.34):"
          formula={`$$ \\overline{Nu}_L = 0.943\\left[\\frac{g\\rho_l(\\rho_l - \\rho_v)k_lh_{fg}'\\cos\\theta}{\\mu_l(T_{sat} - T_s)L}\\right]^{1/4} $$`}
        >
          <p>Use Case: Condensation on tilted surfaces</p>
          <ul className="list-disc pl-6">
            <li>Angle Effects:</li>
            <ul className="list-circle pl-6">
              <li>θ = 0° for vertical</li>
              <li>Valid up to 60° from vertical</li>
              <li>Cosine modification</li>
            </ul>
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Sloped condensers</li>
              <li>Architectural elements</li>
              <li>Solar systems</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="39. Non-Condensable Gas Effect (10.36):"
          formula={`$$ \\frac{h}{h_0} = \\left[1 + \\frac{W_a}{W_v}\\left(\\frac{Le^{2/3}c_{p,a}}{h_{fg}}\\right)(T_{sat} - T_s)\\right]^{-1} $$`}
        >
          <p>Use Case: Impact of non-condensable gases</p>
          <ul className="list-disc pl-6">
            <li>Key Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Mass fractions (W<sub>a</sub>, W<sub>v</sub>)</li>
              <li>Lewis number (Le)</li>
              <li>Heat capacity ratio</li>
            </ul>
            <li>Practical Implications:</li>
            <ul className="list-circle pl-6">
              <li>Significant performance reduction</li>
              <li>Increased thermal resistance</li>
              <li>Design safety factors</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="40. Vapor-Gas Mixture Interface (10.37):"
          formula={`$$ \\frac{dW_v}{dy} = -\\frac{h}{\\rho D_{va}c_{p,m}}(W_{v,i} - W_{v,∞}) $$`}
        >
          <p>Use Case: Mass transfer in vapor-gas mixtures</p>
          <ul className="list-disc pl-6">
            <li>Transport Processes:</li>
            <ul className="list-circle pl-6">
              <li>Diffusion effects</li>
              <li>Concentration gradients</li>
              <li>Interface conditions</li>
            </ul>
            <li>Design Considerations:</li>
            <ul className="list-circle pl-6">
              <li>Vent system requirements</li>
              <li>Purge gas flow rates</li>
              <li>System performance</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="41. Mass Transfer Coefficient (10.38):"
          formula={`$$ h_m = \\frac{h}{\\rho c_{p,m}Le^{2/3}} $$`}
        >
          <p>Use Case: Vapor-gas mixture mass transfer</p>
          <ul className="list-disc pl-6">
            <li>Transport Properties:</li>
            <ul className="list-circle pl-6">
              <li>Lewis number effects</li>
              <li>Heat-mass transfer analogy</li>
              <li>Mixture properties</li>
            </ul>
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Dehumidification</li>
              <li>Gas purification</li>
              <li>Condensation with inerts</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="42. Condensation Enhancement Factor (10.39):"
          formula={`$$ F = \\frac{\\bar{h}}{\\bar{h}_s} = \\left[1 + \\frac{0.68Ja}{1 + 0.95Ja^{0.8}Pr_l^{0.3}}\\right] $$`}
        >
          <p>Use Case: Subcooling effects on heat transfer</p>
          <ul className="list-disc pl-6">
            <li>Enhancement Factors:</li>
            <ul className="list-circle pl-6">
              <li>Jakob number influence</li>
              <li>Prandtl number effects</li>
              <li>Typical range: 1.1-1.3</li>
            </ul>
            <li>Design Impact:</li>
            <ul className="list-circle pl-6">
              <li>Condenser sizing</li>
              <li>Performance prediction</li>
              <li>Efficiency improvement</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="43. Interfacial Shear Enhancement (10.40):"
          formula={`$$ \\bar{h} = \\bar{h}_L\\left[1 + \\left(\\frac{\\tau_i}{\\tau_{i,L}}\\right)^{1/3}\\right] $$`}
        >
          <p>Use Case: Vapor shear effects on condensation</p>
          <ul className="list-disc pl-6">
            <li>Physical Mechanisms:</li>
            <ul className="list-circle pl-6">
              <li>Interface waviness</li>
              <li>Vapor velocity effects</li>
              <li>Film turbulence</li>
            </ul>
            <li>Enhancement Range:</li>
            <ul className="list-circle pl-6">
              <li>Up to 20% increase</li>
              <li>High vapor velocities</li>
              <li>Turbulent conditions</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="44. Condensation Froude Number (10.41):"
          formula={`$$ Fr_c = \\frac{\\rho_v V_v^2}{g(\\rho_l - \\rho_v)D} $$`}
        >
          <p>Use Case: Flow regime characterization</p>
          <ul className="list-disc pl-6">
            <li>Critical Values:</li>
            <ul className="list-circle pl-6">
              <li>Fr<sub>c</sub> {'<'} 1: Gravity dominant</li>
              <li>Fr<sub>c</sub> {'>'} 1: Inertia dominant</li>
              <li>Transition regions</li>
            </ul>
            <li>Design Applications:</li>
            <ul className="list-circle pl-6">
              <li>Condenser orientation</li>
              <li>Flow pattern prediction</li>
              <li>Heat transfer modeling</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="45. Flooding Condition (10.42):"
          formula={`$$ \\left(\\frac{\\rho_v^{1/2}j_v^*}{g D}\\right)^{1/2} + m\\left(\\frac{\\rho_l^{1/2}j_l^*}{g D}\\right)^{1/2} = C $$`}
        >
          <p>Use Case: Counter-current flow limits</p>
          <ul className="list-disc pl-6">
            <li>Critical Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Dimensionless velocities (j*)</li>
              <li>Geometric effects (C)</li>
              <li>Flow reversal conditions</li>
            </ul>
            <li>Safety Implications:</li>
            <ul className="list-circle pl-6">
              <li>Maximum throughput</li>
              <li>Emergency cooling</li>
              <li>System stability</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="46. Condensation Pressure Drop (10.43):"
          formula={`$$ \\left(\\frac{dp}{dz}\\right)_{tp} = \\phi_l^2\\left(\\frac{dp}{dz}\\right)_l $$`}
        >
          <p>Use Case: Two-phase flow pressure loss</p>
          <ul className="list-disc pl-6">
            <li>Design Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Two-phase multiplier (φ<sub>l</sub>)</li>
              <li>Liquid-only pressure drop</li>
              <li>Flow quality effects</li>
            </ul>
            <li>Applications:</li>
            <ul className="list-circle pl-6">
              <li>Condenser sizing</li>
              <li>Pump requirements</li>
              <li>System optimization</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="47. Two-Phase Multiplier (10.44):"
          formula={`$$ \\phi_l^2 = 1 + \\frac{C}{X_{tt}} + \\frac{1}{X_{tt}^2} $$`}
        >
          <p>Use Case: Pressure drop correlation</p>
          <ul className="list-disc pl-6">
            <li>Key Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Martinelli parameter (X<sub>tt</sub>)</li>
              <li>Empirical constant C</li>
              <li>Flow pattern effects</li>
            </ul>
            <li>Typical Values:</li>
            <ul className="list-circle pl-6">
              <li>C = 20 for turbulent-turbulent</li>
              <li>C = 12 for laminar-turbulent</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="48. Martinelli Parameter (10.45):"
          formula={`$$ X_{tt} = \\left(\\frac{1-x}{x}\\right)^{0.9}\\left(\\frac{\\rho_v}{\\rho_l}\\right)^{0.5}\\left(\\frac{\\mu_l}{\\mu_v}\\right)^{0.1} $$`}
        >
          <p>Use Case: Two-phase flow characterization</p>
          <ul className="list-disc pl-6">
            <li>Flow Properties:</li>
            <ul className="list-circle pl-6">
              <li>Quality (x)</li>
              <li>Phase density ratio</li>
              <li>Viscosity effects</li>
            </ul>
            <li>Range of Application:</li>
            <ul className="list-circle pl-6">
              <li>0.01 ≤ X<sub>tt</sub> ≤ 100</li>
              <li>All flow regimes</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="49. Heat Transfer Enhancement (10.46):"
          formula={`$$ \\frac{h_{tp}}{h_l} = 1 + \\frac{2.4\\times 10^4Bo^{1.16}}{X_{tt}} $$`}
        >
          <p>Use Case: Two-phase convection enhancement</p>
          <ul className="list-disc pl-6">
            <li>Influencing Factors:</li>
            <ul className="list-circle pl-6">
              <li>Boiling number (Bo)</li>
              <li>Flow patterns</li>
              <li>Heat flux effects</li>
            </ul>
            <li>Enhancement Range:</li>
            <ul className="list-circle pl-6">
              <li>2-10 times single phase</li>
              <li>Quality dependent</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="50. Surface Enhancement Factor (10.47):"
          formula={`$$ \\epsilon_f = \\frac{A_f}{A_p} = 1 + \\frac{2h_f}{t_f}\\eta_f $$`}
        >
          <p>Use Case: Finned surface performance</p>
          <ul className="list-disc pl-6">
            <li>Design Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Fin height (h<sub>f</sub>)</li>
              <li>Fin thickness (t<sub>f</sub>)</li>
              <li>Fin efficiency (η<sub>f</sub>)</li>
            </ul>
            <li>Optimization Factors:</li>
            <ul className="list-circle pl-6">
              <li>Material selection</li>
              <li>Geometry constraints</li>
              <li>Cost considerations</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="51. Fin Enhancement Ratio (10.48):"
          formula={`$$ \\frac{\\bar{h}_f}{\\bar{h}} = \\left[1 + \\frac{A_f\\eta_f}{A_p}\\right] $$`}
        >
          <p>Use Case: Finned surface heat transfer enhancement</p>
          <ul className="list-disc pl-6">
            <li>Performance Metrics:</li>
            <ul className="list-circle pl-6">
              <li>Area ratio effects</li>
              <li>Fin efficiency impact</li>
              <li>Overall enhancement</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="52. Condensate Retention Angle (10.49):"
          formula={`$$ \\phi_r = \\cos^{-1}\\left[\\frac{\\sigma}{\\rho_lg(R_o + R_r)R_r}\\right]^{1/2} $$`}
        >
          <p>Use Case: Finned tube condensation</p>
          <ul className="list-disc pl-6">
            <li>Design Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Fin root radius (R<sub>r</sub>)</li>
              <li>Surface tension effects</li>
              <li>Drainage characteristics</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="53. Effective Surface Area (10.50):"
          formula={`$$ A_{eff} = A_p + \\eta_fA_f\\left(1 - \\frac{\\phi_r}{\\pi}\\right) $$`}
        >
          <p>Use Case: Active heat transfer area calculation</p>
          <ul className="list-disc pl-6">
            <li>Area Components:</li>
            <ul className="list-circle pl-6">
              <li>Primary surface</li>
              <li>Fin contribution</li>
              <li>Flooding effects</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="54. Unflooded Fin Efficiency (10.51):"
          formula={`$$ \\eta_f = \\frac{\\tanh(mL_f)}{mL_f}, \\quad m = \\sqrt{\\frac{2\\bar{h}}{kt_f}} $$`}
        >
          <p>Use Case: Fin performance with condensation</p>
          <ul className="list-disc pl-6">
            <li>Key Parameters:</li>
            <ul className="list-circle pl-6">
              <li>Fin length (L<sub>f</sub>)</li>
              <li>Thermal conductivity</li>
              <li>Heat transfer coefficient</li>
            </ul>
          </ul>
        </LatexTemplate>

        <LatexTemplate
          title="55. Dropwise Heat Transfer (10.52):"
          formula={`$$ \\bar{h}_{dw} = 51,104 + 2044T_{sat} $$`}
        >
          <p>Use Case: Enhanced condensation mode</p>
          <ul className="list-disc pl-6">
            <li>Valid Range:</li>
            <ul className="list-circle pl-6">
              <li>22°C ≤ T<sub>sat</sub> ≤ 100°C</li>
              <li>Steam condensation</li>
              <li>Treated surfaces</li>
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
          Chapter 10: Boiling and Condensation
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