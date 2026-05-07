"use client";

import MinesweeperGame from "./games/MinesweeperGame";
import SudokuGame from "./games/SudokuGame";
import GamesMenu from "./games/GamesMenu"
export default function GamesSection({ selectedGame, onSelectGame }) {
  return (
    <div id="juegos-screen">
      {selectedGame && <button className="btn-game-return" onClick={() => onSelectGame(null)} style={{ position: 'absolute', top: '10px', left: '10px' }}>{"<"}</button>}
      {!selectedGame && <GamesMenu selectedGame={selectedGame} onSelectGame={onSelectGame} />}
      <div id="game-wrapper" style={{ display: selectedGame ? "block" : "none" }}>
        {selectedGame === "minesweeper" && <MinesweeperGame />}
        {selectedGame === "sudoku" && <SudokuGame />}
      </div>
    </div>
  );
}