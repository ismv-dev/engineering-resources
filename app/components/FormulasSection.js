"use client";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function FormulasSection() {
  return (
    <div className="space-y-12 py-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">1. Fundamentos Matemáticos Universales</h2>
        <p className="mb-6 text-gray-600">Estas herramientas del cálculo y el álgebra lineal son el lenguaje en el que se escriben las leyes de la física y la ingeniería.</p>
        
        <h3 className="text-xl font-semibold mb-3">Cálculo Vectorial y Diferencial</h3>
        <ul className="space-y-6">
          <li>
            <p className="mb-2"><strong>Teorema Fundamental del Cálculo:</strong> Conecta la derivación con la integración.</p>
            <BlockMath math="\int_{a}^{b} f(x) \, dx = F(b) - F(a)" />
          </li>
          <li>
            <p className="mb-2"><strong>Series de Taylor:</strong> Permiten aproximar funciones complejas mediante polinomios, algo vital para las simulaciones numéricas y algoritmos de software.</p>
            <BlockMath math="f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n" />
          </li>
          <li>
            <p className="mb-2"><strong>Teorema de la Divergencia (Gauss):</strong> Fundamental en mecánica de fluidos y electromagnetismo para evaluar flujos a través de superficies.</p>
            <BlockMath math="\iiint_{V} (\nabla \cdot \mathbf{F}) \, dV = \iint_{\partial V} \mathbf{F} \cdot d\mathbf{S}" />
          </li>
        </ul>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3">Identidad de Euler</h3>
          <p className="mb-2 text-gray-600">Considerada la ecuación más hermosa de las matemáticas, es la base del análisis de señales, corriente alterna y oscilaciones.</p>
          <BlockMath math="e^{i\theta} = \cos\theta + i\sin\theta" />
        </div>
      </section>

      <hr className="border-gray-200" />

      <section>
        <h2 className="text-2xl font-bold mb-4">2. Mecánica y Ciencia de Materiales</h2>
        <p className="mb-6 text-gray-600">Esencial para ingenieros mecánicos, civiles, aeronáuticos y estructurales.</p>
        
        <h3 className="text-xl font-semibold mb-3">Leyes de Movimiento y Elasticidad</h3>
        <ul className="space-y-6">
          <li>
            <p className="mb-2"><strong>Segunda Ley de Newton (Forma general):</strong> La base de la dinámica.</p>
            <BlockMath math="\mathbf{F} = \frac{d\mathbf{p}}{dt} = m\mathbf{a}" />
          </li>
          <li>
            <p className="mb-2"><strong>Ley de Hooke (Esfuerzo y Deformación):</strong> Define cómo se comportan los materiales elásticos (como el acero o el concreto) bajo carga antes de deformarse permanentemente. Donde <InlineMath math="\sigma" /> es el esfuerzo, <InlineMath math="E" /> el módulo de Young y <InlineMath math="\epsilon" /> la deformación unitaria.</p>
            <BlockMath math="\sigma = E\epsilon" />
          </li>
          <li>
            <p className="mb-2"><strong>Ecuación de Flexión de Vigas (Euler-Bernoulli):</strong> Para calcular la deformación y momentos en estructuras.</p>
            <BlockMath math="\frac{d^2}{dx^2} \left( EI \frac{d^2w}{dx^2} \right) = q(x)" />
          </li>
        </ul>
      </section>

      <hr className="border-gray-200" />

      <section>
        <h2 className="text-2xl font-bold mb-4">3. Termodinámica y Fluidos</h2>
        <p className="mb-6 text-gray-600">Vital para procesos químicos, diseño de motores, sistemas de refrigeración y aerodinámica.</p>
        
        <h3 className="text-xl font-semibold mb-3">Energía y Fluidos</h3>
        <ul className="space-y-6">
          <li>
            <p className="mb-2"><strong>Primera Ley de la Termodinámica:</strong> Conservación de la energía. El cambio en la energía interna (<InlineMath math="\Delta U" />) es igual al calor añadido (<InlineMath math="Q" />) menos el trabajo realizado (<InlineMath math="W" />).</p>
            <BlockMath math="\Delta U = Q - W" />
          </li>
          <li>
            <p className="mb-2"><strong>Ecuación de Bernoulli:</strong> Conservación de la energía en fluidos ideales (sin viscosidad). Conecta presión (<InlineMath math="P" />), velocidad (<InlineMath math="v" />) y altura (<InlineMath math="z" />).</p>
            <BlockMath math="P + \frac{1}{2}\rho v^2 + \rho gz = \text{Constante}" />
          </li>
          <li>
            <p className="mb-2"><strong>Ecuaciones de Navier-Stokes:</strong> Las ecuaciones diferenciales que gobiernan el movimiento de los fluidos reales (viscosos). Son tan complejas que resolverlas exactamente es uno de los problemas del milenio.</p>
            <BlockMath math="\rho \left( \frac{\partial \mathbf{v}}{\partial t} + \mathbf{v} \cdot \nabla \mathbf{v} \right) = -\nabla p + \mu \nabla^2 \mathbf{v} + \mathbf{f}" />
          </li>
        </ul>
      </section>

      <hr className="border-gray-200" />

      <section>
        <h2 className="text-2xl font-bold mb-4">4. Formulas, Magnetismo y Señales</h2>
        <p className="mb-6 text-gray-600">El núcleo de la ingeniería eléctrica, electrónica, telecomunicaciones y automatización.</p>
        
        <h3 className="text-xl font-semibold mb-3">Ecuaciones de Maxwell</h3>
        <p className="mb-4 text-gray-600">Las cuatro ecuaciones que unifican la luz, la Formulas y el magnetismo. Son la base de toda la tecnología inalámbrica actual.</p>
        <div className="space-y-4">
          <BlockMath math="\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0} \quad (\text{Ley de Gauss})" />
          <BlockMath math="\nabla \cdot \mathbf{B} = 0 \quad (\text{Ley de Gauss del magnetismo})" />
          <BlockMath math="\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} \quad (\text{Ley de Faraday})" />
          <BlockMath math="\nabla \times \mathbf{B} = \mu_0 \left( \mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} \right) \quad (\text{Ley de Ampère-Maxwell})" />
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3">Análisis de Circuitos y Sistemas</h3>
          <ul className="space-y-6">
            <li>
              <p className="mb-2"><strong>Ley de Ohm Generalizada (Impedancia):</strong> Para circuitos de corriente alterna (CA), donde <InlineMath math="Z" /> es la impedancia compleja.</p>
              <BlockMath math="V = I \cdot Z" />
            </li>
            <li>
              <p className="mb-2"><strong>Transformada de Fourier:</strong> Transforma señales del dominio del tiempo al dominio de la frecuencia. Crucial para el procesamiento de audio, imágenes, telecomunicaciones y análisis de vibraciones.</p>
              <BlockMath math="\hat{f}(\xi) = \int_{-\infty}^{\infty} f(t) e^{-2\pi i t \xi} \, dt" />
            </li>
          </ul>
        </div>
      </section>

      <hr className="border-gray-200" />

      <section>
        <h2 className="text-2xl font-bold mb-4">5. Computación, Optimización y Datos</h2>
        <p className="mb-6 text-gray-600">Cada vez más relevante para todas las ingenierías debido a la digitalización, la robótica y la inteligencia artificial.</p>
        
        <h3 className="text-xl font-semibold mb-3">Información y Algoritmos</h3>
        <ul className="space-y-6">
          <li>
            <p className="mb-2"><strong>Entropía de Shannon:</strong> Mide la cantidad de información en una fuente de datos. Base de la compresión de archivos y la criptografía.</p>
            <BlockMath math="H(X) = -\sum_{i=1}^{n} P(x_i) \log_2 P(x_i)" />
          </li>
          <li>
            <p className="mb-2"><strong>Teorema de Bayes:</strong> La base del aprendizaje automático (Machine Learning) y el análisis de riesgo.</p>
            <BlockMath math="P(A|B) = \frac{P(B|A)P(A)}{P(B)}" />
          </li>
          <li>
            <p className="mb-2"><strong>Función de Costo de Regresión Lineal (Mínimos Cuadrados):</strong> Utilizada para optimizar algoritmos y ajustar curvas de datos experimentales.</p>
            <BlockMath math="J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} \left( h_\theta(x^{(i)}) - y^{(i)} \right)^2" />
          </li>
        </ul>
      </section>

      <hr className="border-gray-200" />

      <section>
        <h2 className="text-2xl font-bold mb-4">6. Economía de la Ingeniería</h2>
        <p className="mb-6 text-gray-600">Un ingeniero no solo diseña soluciones técnicas, sino que debe asegurar que sean económicamente viables.</p>
        
        <ul className="space-y-6">
          <li>
            <p className="mb-2"><strong>Valor Presente Neto (VPN / NPV):</strong> Para evaluar la rentabilidad de un proyecto a lo largo del tiempo, donde <InlineMath math="R_t" /> son los flujos de caja, <InlineMath math="i" /> la tasa de descuento y <InlineMath math="t" /> el tiempo.</p>
            <BlockMath math="VPN = \sum_{t=1}^{n} \frac{R_t}{(1+i)^t} - \text{Inversión Inicial}" />
          </li>
        </ul>
      </section>
    </div>
  );
}
