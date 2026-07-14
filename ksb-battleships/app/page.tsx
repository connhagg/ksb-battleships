"use client"

import { useState } from "react";
//import Board from "@/components/Board";

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);

if (gameStarted) {
  return (
    <main >
      {/* <Board title="KSBattleships" /> */}
    </main>
  );
}

return (
  <main className="flex flex-col items-center justify-center min-h-screen p-4">
    <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 p-10">KSBattleships</h1>
    <div>
      <h2 className="text-2xl font-bold text-slate-700"> Instructions </h2>
      <p className="text-slate-600 text-center">...</p>
    </div>
    <button className="text-3xl font-bold text-slate-700 bg-slate-200 hover:bg-slate-300 p-4 rounded-lg">
      Start Game
    </button>
  </main>
)};