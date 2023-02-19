import { Square } from "../../entities/square";
import "./styles.scss";

type Props = {
  visible: boolean;
  OnClick: () => void;
};

export function Footer({ visible, OnClick }: Props) {

  if(!visible) return null

  return (
    <div id='footer'>
      <button onClick={OnClick}>New Game</button>
    </div>
  );
}
