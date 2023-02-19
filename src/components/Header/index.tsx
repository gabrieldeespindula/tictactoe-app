import { Square } from "../../entities/square";
import { Team } from "../../entities/team";
import "./styles.scss";

type Props = {
  gameCount: number;
  winCount: {
    [key: string]: number;
  }
  currentTeam: Team;
};

export function Header({ gameCount, winCount, currentTeam }: Props) {
  console.log(currentTeam)

  return (
    <div id='header'>
      <div className='game-count'>
        <span>Games {gameCount}</span>
      </div>
      <div className="score-count">
        <div className={`score-box ${currentTeam === Team.O && 'shift'}`}>
          <div className='title'>
            <div className={`img-${Team.O}`}></div>
          </div>
          <div className="value">{winCount[Team.O]}</div>
        </div>
        <div className="score-box">
          <div className="title">
            <div>Ties</div>
          </div>
          <div className="value">{winCount.ties}</div>
        </div>
        <div className={`score-box ${currentTeam === Team.X && 'shift'}`}>
          <div className='title'>
            <div className={`img-${Team.X}`}></div>
          </div>
          <div className="value">{winCount[Team.X]}</div>
        </div>
      </div>
    </div>
  );
}
