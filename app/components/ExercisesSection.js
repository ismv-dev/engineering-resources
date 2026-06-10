"use client";

export default function ExercisesSection({
  exerciseDisplay,
  exerciseAnswer,
  exerciseMode,
  exerciseFeedback,
  onAnswerChange,
  onModeChange,
  onRefresh,
  onVerify,
}) {
  return (
    <div className="exercises-card">
      <h1 className="page-title">Aritmética y conversión</h1>
      <div className="question-panel">
        <div className="question-row">
          <h2 id="h1Operaciones">{exerciseDisplay}</h2>
          <button className="btn" type="button" onClick={onRefresh}>
            ↻
          </button>
        </div>
        <div className="question-row">
          <input
            id="inputOperaciones"
            type="text"
            className="input"
            value={exerciseAnswer}
            onChange={(event) => onAnswerChange(event.target.value)}
            placeholder={exerciseMode === 0 ? "Resultado" : "Decimal"}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                onVerify();
              }
            }}
          />
        </div>
        <div className="question-row">
          <select
            value={exerciseMode}
            onChange={(event) => onModeChange(Number(event.target.value))}
            className="input"
          >
            <option value={0}>Aritmética</option>
            <option value={1}>Conversión</option>
          </select>
          <button className="btn" type="button" onClick={onVerify}>
            Verificar
          </button>
        </div>
        {exerciseFeedback && <p className="feedback-text">{exerciseFeedback}</p>}
      </div>
    </div>
  );
}
