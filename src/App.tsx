import { Board } from "./components/Board";
import './App.scss'
import { useState } from "react";
import { Footer } from "./components/Footer";
import { Team } from "./entities/team";
import { Header } from "./components/Header";

export function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [restartGame, setRestartGame] = useState(false);
  const [gameCount, setGameCount] = useState(1);
  const [winCount, setwinCount] = useState({
    [Team.X]: 0,
    [Team.O]: 0,
    ties: 0
  });

  function newGame(){
    setIsGameOver(false)
    setRestartGame(!restartGame)
  }

  function onGameOver(team?: Team){
    console.log('team', team)
    setIsGameOver(true)
    setGameCount((prev) => prev + 1)
    if(team){
      setwinCount({ ...winCount, [team]: winCount[team] + 1 })
    }
  }

  return (
    <>
      <Header winCount={winCount} gameCount={gameCount} />
      <Board isGameOver={isGameOver} onGameOver={onGameOver} restartGame={restartGame} />
      <Footer visible={isGameOver} OnClick={newGame} />
    </>
  )
}
