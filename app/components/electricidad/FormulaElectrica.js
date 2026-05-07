import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function FormulaElectrica() {
    return  (
        <div className="formula-electrica">
            <h1>La fórmula es <InlineMath math="e^{i\pi} + 1 = 0" /></h1>
        </div>
    )
}