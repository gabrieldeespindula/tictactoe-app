import { Square } from "../../entities/square";
import { Team } from "../../entities/team";
import "./styles.scss";

type Props = {
  gameCount: number;
  winCount: {
    [key: string]: number;
  }
};

export function Header({ gameCount, winCount }: Props) {
  console.log('winCount', winCount)
  return (
    <div id='header'>
      <div className='game-count'>
        <span>Game {gameCount}</span>
      </div>
      <div className="score-count">
        <div className="score-box">
          <div className="title">
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
        <div className="score-box">
          <div className="title">
            <div className={`img-${Team.X}`}></div>
          </div>
          <div className="value">{winCount[Team.X]}</div>
        </div>
      </div>
    </div>
  );
}
