import { Square } from "../../entities/square";
import "./styles.scss";

type Props = {
  square: Square;
  onClick: (square: Square) => void;
  disabled?: boolean;
};

export function Position({ square, onClick, disabled }: Props) {

  return (
    <div
      className={`square square-${square.id} ${square?.team && "img-" + square.team} ${disabled && "disabled"}`}
      onClick={() => !disabled && onClick(square)}
    >
    </div>
  );
}
