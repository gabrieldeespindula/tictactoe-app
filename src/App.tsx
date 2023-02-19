import { Board } from "./components/Board";
import './App.scss'
import { useState } from "react";
import { Footer } from "./components/Footer";
import { Team } from "./entities/team";
import { Header } from "./components/Header";

export function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [restartGame, setRestartGame] = useState(false);
  const [gameCount, setGameCount] = useState(0);
  const [winCount, setwinCount] = useState({
    [Team.X]: 0,
    [Team.O]: 0,
    tie: 0
  });
  const [currentTeam, setCurrentTeam] = useState(Team.X);

  function newGame(){
    setIsGameOver(false)
    setRestartGame(!restartGame)
  }

  function onGameOver(team: Team | 'tie'){
    setIsGameOver(true)
    setGameCount((prev) => prev + 1)
    setwinCount({ ...winCount, [team]: winCount[team] + 1 })
    changeShift()
  }

  function changeShift(){
    setCurrentTeam(currentTeam === Team.X ? Team.O : Team.X)
  }

  return (
    <>
      <Header winCount={winCount} gameCount={gameCount} currentTeam={currentTeam} />
      <Board isGameOver={isGameOver} onGameOver={onGameOver} restartGame={restartGame} currentTeam={currentTeam} changeShift={changeShift}/>
      <Footer visible={isGameOver} OnClick={newGame} />
    </>
  )
}
