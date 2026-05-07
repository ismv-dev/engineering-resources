"use client";

export default function GamesMenu({ selectedGame, onSelectGame }) {
    return (
      <>
        <h1 className="page-title">Juegos</h1>
        <div className="game-grid">
            <button
            type="button"
            className="game-card"
            onClick={() => onSelectGame("minesweeper")}
            >
            <img src="/img/minesweeper.png" alt="Minesweeper" />
            <p>Minesweeper</p>
            </button>
            <button
            type="button"
            className="game-card"
            onClick={() => onSelectGame("sudoku")}
            >
            <img src="/img/sudoku.png" alt="Sudoku" />
            <p>Sudoku</p>
            </button>
        </div>
      </>
    );
}