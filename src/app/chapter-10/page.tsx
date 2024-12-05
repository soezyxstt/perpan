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
        <LatexTemplate title="1. Convection Coefficient Function (10.1):">
          {`$$ h = h[\\Delta T, g(\\rho_l - \\rho_v), h_{fg}, \\sigma, L, \\rho, c_p, k, \\mu] $$`}
        </LatexTemplate>

        <LatexTemplate title="2. Dimensionless Groups (10.2a):">
          {`$$ \\frac{hL}{k} = f\\left[\\frac{\\rho g(\\rho_l - \\rho_v)L^3}{\\mu^2}, \\frac{c_p \\Delta T}{h_{fg}}, \\frac{\\mu c_p}{k}, \\frac{g(\\rho_l - \\rho_v)L^2}{\\sigma}\\right] $$`}
        </LatexTemplate>

        <LatexTemplate title="3. Nusselt Number Relation (10.2b):">
          {`$$ Nu_L = f\\left[\\frac{\\rho g(\\rho_l - \\rho_v)L^3}{\\mu^2}, Ja, Pr, Bo\\right] $$`}
        </LatexTemplate>

        <LatexTemplate title="4. Newton's Law for Boiling (10.3):">
          {`$$ q_s'' = h(T_s - T_{sat}) = h\\Delta T_e $$`}
        </LatexTemplate>

        <LatexTemplate title="5. Bubble Departure Diameter (10.4a):">
          {`$$ D_b \\propto \\sqrt{\\frac{\\sigma}{g(\\rho_l - \\rho_v)}} $$`}
        </LatexTemplate>

        <LatexTemplate title="6. Characteristic Velocity (10.4b):">
          {`$$ V \\propto \\frac{D_b}{t_b} \\propto \\frac{D_b}{\\left(\\frac{\\rho h_{fg}D_b^3}{q_s''D_b^2}\\right)} \\propto \\frac{q_s''}{\\rho h_{fg}} $$`}
        </LatexTemplate>

        <LatexTemplate title="7. Rohsenow Correlation (10.5):">
          {`$$ q_s'' = \\mu_l h_{fg}\\left[\\frac{g(\\rho_l - \\rho_v)}{\\sigma}\\right]^{1/2}\\left(\\frac{c_{p,l}\\Delta T_e}{C_{s,f}h_{fg}Pr_l^n}\\right)^3 $$`}
        </LatexTemplate>

        <LatexTemplate title="8. Critical Heat Flux (10.6):">
          {`$$ q_{max}'' = Ch_{fg}\\rho_v\\left[\\frac{\\sigma g(\\rho_l - \\rho_v)}{\\rho_v^2}\\right]^{1/4} $$`}
        </LatexTemplate>

        <LatexTemplate title="9. Minimum Heat Flux (10.7):">
          {`$$ q_{min}'' = C\\rho_vh_{fg}\\left[\\frac{g\\sigma(\\rho_l - \\rho_v)}{(\\rho_l + \\rho_v)^2}\\right]^{1/4} $$`}
        </LatexTemplate>

        <LatexTemplate title="10. Film Condensation Nusselt Number (10.8):">
          {`$$ \\overline{Nu}_D = \\frac{\\bar{h}_{conv}D}{k_v} = C\\left[\\frac{g(\\rho_l - \\rho_v)h_{fg}'D^3}{\\mu_vk_v(T_i - T_{sat})}\\right]^{1/4} $$`}
        </LatexTemplate>

        <LatexTemplate title="11. Combined Heat Transfer Coefficient (10.9):">
          {`$$ \\bar{h}^{4/3} = \\bar{h}_{conv}^{4/3} + \\bar{h}_{rad}\\bar{h}^{1/3} $$`}
        </LatexTemplate>

        <LatexTemplate title="12. Simplified Heat Transfer Coefficient (10.10):">
          {`$$ \\bar{h} = \\bar{h}_{conv} + \\frac{3}{4}\\bar{h}_{rad} $$`}
        </LatexTemplate>

        <LatexTemplate title="13. Radiation Heat Transfer Coefficient (10.11):">
          {`$$ \\bar{h}_{rad} = \\frac{\\varepsilon\\sigma(T_s^4 - T_{sat}^4)}{T_s - T_{sat}} $$`}
        </LatexTemplate>

        <LatexTemplate title="14. Low Velocity Critical Heat Flux (10.12):">
          {`$$ \\frac{q_{max}''}{\\rho_vh_{fg}V} = \\frac{1}{\\pi}\\left[1 + \\left(\\frac{4}{We_D}\\right)^{1/3}\\right] $$`}
        </LatexTemplate>

        <LatexTemplate title="15. High Velocity Critical Heat Flux (10.13):">
          {`$$ \\frac{q_{max}''}{\\rho_vh_{fg}V} = \\frac{(\\rho_l/\\rho_v)^{3/4}}{169\\pi} + \\frac{(\\rho_l/\\rho_v)^{1/2}}{19.2\\pi We_D^{1/3}} $$`}
        </LatexTemplate>

        <LatexTemplate title="16. Weber Number (10.14):">
          {`$$ We_D \\equiv \\frac{\\rho_vV^2D}{\\sigma} $$`}
        </LatexTemplate>

        <LatexTemplate title="17. Two-Phase Flow Heat Transfer (10.15a):">
          {`$$ \\frac{h}{h_{sp}} = 0.6683\\left(\\frac{\\rho_l}{\\rho_v}\\right)^{0.1} \\bar{X}^{0.16}(1 - \\bar{X})^{0.64}f(Fr) + 1058\\left(\\frac{q''}{\\dot{m}''h_{fg}}\\right)^{0.7}(1 - \\bar{X})^{0.8}G_{s,f} $$`}
        </LatexTemplate>

        <LatexTemplate title="18. Alternative Two-Phase Flow (10.15b):">
          {`$$ \\frac{h}{h_{sp}} = 1.136\\left(\\frac{\\rho_l}{\\rho_v}\\right)^{0.45} \\bar{X}^{0.72}(1 - \\bar{X})^{0.08}f(Fr) + 667.2\\left(\\frac{q''}{\\dot{m}''h_{fg}}\\right)^{0.7}(1 - \\bar{X})^{0.8}G_{s,f} $$`}
        </LatexTemplate>

        <LatexTemplate title="19. Vapor Mass Fraction (10.16):">
          {`$$ \\bar{X}(x) = \\frac{q_s''\\pi Dx}{\\dot{m}h_{fg}} $$`}
        </LatexTemplate>

        <LatexTemplate title="20. Film Momentum Equation (10.17):">
          {`$$ \\frac{\\partial^2 u}{\\partial y^2} = -\\frac{g}{\\mu_l}(\\rho_l - \\rho_v) $$`}
        </LatexTemplate>

        <LatexTemplate title="21. Velocity Profile (10.18):">
          {`$$ u(y) = \\frac{g(\\rho_l - \\rho_v)\\delta^2}{\\mu_l}\\left[\\frac{y}{\\delta} - \\frac{1}{2}\\left(\\frac{y}{\\delta}\\right)^2\\right] $$`}
        </LatexTemplate>

        <LatexTemplate title="22. Mass Flow Rate (10.19):">
          {`$$ \\frac{\\dot{m}(x)}{b} = \\int_0^{\\delta(x)} \\rho u(y) dy \\equiv \\Gamma(x) $$`}
        </LatexTemplate>

        <LatexTemplate title="23. Condensate Flow Rate (10.20):">
          {`$$ \\Gamma(x) = \\frac{g\\rho_l(\\rho_l - \\rho_v)\\delta^3}{3\\mu_l} $$`}
        </LatexTemplate>

        <LatexTemplate title="24. Heat Transfer Balance (10.21):">
          {`$$ dq = h_{fg}d\\dot{m} $$`}
        </LatexTemplate>

        <LatexTemplate title="25. Surface Heat Flux (10.22):">
          {`$$ dq = q_s''(b \\cdot dx) $$`}
        </LatexTemplate>

        <LatexTemplate title="26. Fourier's Law for Surface Heat Flux (10.23):">
          {`$$ q_s'' = \\frac{k_l(T_{sat} - T_s)}{\\delta} $$`}
        </LatexTemplate>

        <LatexTemplate title="27. Flow Rate Derivative (10.24):">
          {`$$ \\frac{d\\Gamma}{dx} = \\frac{k_l(T_{sat} - T_s)}{\\delta h_{fg}} $$`}
        </LatexTemplate>

        <LatexTemplate title="28. Alternative Flow Rate Expression (10.25):">
          {`$$ \\frac{d\\Gamma}{dx} = \\frac{g\\rho_l(\\rho_l - \\rho_v)\\delta^2}{\\mu_l}\\frac{d\\delta}{dx} $$`}
        </LatexTemplate>

        <LatexTemplate title="29. Film Thickness (10.26):">
          {`$$ \\delta(x) = \\left[\\frac{4k_l\\mu_l(T_{sat} - T_s)x}{g\\rho_l(\\rho_l - \\rho_v)h_{fg}}\\right]^{1/4} $$`}
        </LatexTemplate>

        <LatexTemplate title="30. Modified Latent Heat (10.27):">
          {`$$ h_{fg}' = h_{fg}(1 + 0.68Ja) $$`}
        </LatexTemplate>

        <LatexTemplate title="31. Surface Heat Flux with Convection (10.28):">
          {`$$ q_s'' = h_x(T_{sat} - T_s) $$`}
        </LatexTemplate>

        <LatexTemplate title="32. Local Heat Transfer Coefficient (10.29):">
          {`$$ h_x = \\frac{k_l}{\\delta} $$`}
        </LatexTemplate>

        <LatexTemplate title="33. Alternative Heat Transfer Coefficient (10.30):">
          {`$$ h_x = \\left[\\frac{g\\rho_l(\\rho_l - \\rho_v)k_lh_{fg}'}{4\\mu_l(T_{sat} - T_s)x}\\right]^{1/4} $$`}
        </LatexTemplate>

        <LatexTemplate title="34. Average Heat Transfer Coefficient (10.31):">
          {`$$ \\bar{h}_L = 0.943\\left[\\frac{g\\rho_l(\\rho_l - \\rho_v)k_lh_{fg}'}{\\mu_l(T_{sat} - T_s)L}\\right]^{1/4} $$`}
        </LatexTemplate>

        <LatexTemplate title="35. Average Nusselt Number (10.32):">
          {`$$ \\overline{Nu}_L = \\frac{\\bar{h}_LL}{k_l} = 0.943\\left[\\frac{\\rho g(\\rho_l - \\rho_v)h_{fg}'L^3}{\\mu_lk_l(T_{sat} - T_s)}\\right]^{1/4} $$`}
        </LatexTemplate>

        <LatexTemplate title="36. Total Heat Transfer (10.33):">
          {`$$ q = \\bar{h}_LA(T_{sat} - T_s) $$`}
        </LatexTemplate>

        <LatexTemplate title="37. Condensation Rate (10.34):">
          {`$$ \\dot{m} = \\frac{q}{h_{fg}'} = \\frac{\\bar{h}_LA(T_{sat} - T_s)}{h_{fg}'} $$`}
        </LatexTemplate>

        <LatexTemplate title="38. Reynolds Number for Condensation (10.35):">
          {`$$ Re_\\delta \\equiv \\frac{4\\Gamma}{\\mu_l} $$`}
        </LatexTemplate>

        <LatexTemplate title="39. Alternative Reynolds Number (10.36):">
          {`$$ Re_\\delta = \\frac{4\\dot{m}}{\\mu_lb} = \\frac{4\\rho_lu_m\\delta}{\\mu_l} $$`}
        </LatexTemplate>

        <LatexTemplate title="40. Wave-Free Laminar Reynolds Number (10.37):">
          {`$$ Re_\\delta = \\frac{4g\\rho_l(\\rho_l - \\rho_v)\\delta^3}{3\\mu_l^2} $$`}
        </LatexTemplate>

        <LatexTemplate title="41. Wave-Free Nusselt Number (10.38):">
          {`$$ \\overline{Nu}_L = \\frac{\\bar{h}_L(\\nu_l^2/g)^{1/3}}{k_l} = 1.47Re_\\delta^{1/3} $$`}
        </LatexTemplate>

        <LatexTemplate title="42. Wavy-Laminar Nusselt Number (10.39):">
          {`$$ \\overline{Nu}_L = \\frac{\\bar{h}_L(\\nu_l^2/g)^{1/3}}{k_l} = \\frac{Re_\\delta}{1.08Re_\\delta^{1.22} - 5.2} $$`}
        </LatexTemplate>

        <LatexTemplate title="43. Turbulent Flow Nusselt Number (10.40):">
          {`$$ \\overline{Nu}_L = \\frac{\\bar{h}_L(\\nu_l^2/g)^{1/3}}{k_l} = \\frac{Re_\\delta}{8750 + 58Pr_l^{-0.5}(Re_\\delta^{0.75} - 253)} $$`}
        </LatexTemplate>

        <LatexTemplate title="44. Reynolds-Nusselt Relation (10.41):">
          {`$$ Re_\\delta = 4P\\frac{\\bar{h}_L(\\nu_l^2/g)^{1/3}}{k_l} = 4P\\overline{Nu}_L $$`}
        </LatexTemplate>

        <LatexTemplate title="45. Dimensionless Parameter P (10.42):">
          {`$$ P = \\frac{k_lL(T_{sat} - T_s)}{\\mu_lh_{fg}'(\\nu_l^2/g)^{1/3}} $$`}
        </LatexTemplate>

        <LatexTemplate title="46. Nusselt Number for Radial Systems (10.46):">
          {`$$ \\overline{Nu}_D = \\frac{\\bar{h}_nD}{k_l} = C\\left[\\frac{\\rho g(\\rho_l - \\rho_v)h_{fg}'D^3}{\\mu_lk_l(T_{sat} - T_s)}\\right]^{1/4} $$`}
        </LatexTemplate>

        <LatexTemplate title="47. Young-Laplace Equation (10.47):">
          {`$$ \\Delta p = p_v - p_l = \\frac{\\sigma}{r_c} $$`}
        </LatexTemplate>

        <LatexTemplate title="48. Enhancement Ratio for Finned Tubes (10.48):">
          {`$$ \\varepsilon_{n,min} = \\frac{q_{n,min}}{q_{un}} = \\frac{tr_2}{Sr_1}\\left[\\frac{r_1}{r_2} + 1.02\\frac{\\sigma r_1}{(\\rho_l - \\rho_v)gr^3}\\right]^{1/4} $$`}
        </LatexTemplate>

        <LatexTemplate title="49. Tube Bank Heat Transfer (10.49):">
          {`$$ \\bar{h}_{D,N} = \\bar{h}_DN^n $$`}
        </LatexTemplate>

        <LatexTemplate title="50. Vapor Reynolds Number (10.50):">
          {`$$ Re_{v,i} = \\left(\\frac{\\rho_vu_{m,v}D}{\\mu_v}\\right)_i < 35,000 $$`}
        </LatexTemplate>

        <LatexTemplate title="51. Turbulent Flow Heat Transfer (10.51a):">
          {`$$ Nu_D = \\frac{hD}{k_l} = 0.023Re_{D,l}^{0.8}Pr_l^{0.4}\\left[1 + \\frac{2.22}{X_{tt}^{0.89}}\\right] $$`}
        </LatexTemplate>

        <LatexTemplate title="52. Dropwise Condensation Coefficient (10.52):">
          {`$$ \\bar{h}_{dc} = 51,104 + 2044T_{sat}(°C) \\quad 22°C ≤ T_{sat} ≤ 100°C $$`}
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