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
  <main className="bg-offblack flex flex-col items-center justify-center min-h-screen p-4">
    <h1 className="text-teal text-6xl md:text-7xl font-extrabold tracking-tight p-10 font-heading">
      KSBattleships
    </h1>
    <div className="text-teal font-heading">
      <h2 className="text-2xl font-bold">Instructions</h2>
      <p className="text-center">...</p>
    </div>
    <button className="text-3xl font-bold text-slate-700 bg-offwhite hover:bg-slate-300 p-4 rounded-lg font-heading border-teal border-2">
      Start Game
    </button>
  </main>
)};