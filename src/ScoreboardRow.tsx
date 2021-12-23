import { FunctionComponent } from "react";
import ScoreBar from "./ScoreBar";

interface Props {
  playerName: string;
  score: number;
  maxScore: number;
  highlight?: number;
}

export const highlights = [
  "bg-transparent",
  "bg-red-300",
  "bg-orange-300",
  "bg-lime-300",
  "bg-blue-300",
];

const ScoreboardRow: FunctionComponent<Props> = ({
  playerName,
  score,
  maxScore,
  highlight = 0,
}: Props) => {
  return (
    <>
      <div
        className={`flex-1 flex justify-center align-center ${highlights[highlight]}`}
      >
        <div className="w-1/5 flex flex-col justify-center">
          <h1 className="font-heading font-bold text-7xl text-right pb-2">
            {playerName}
          </h1>
        </div>
        <div className="h-full w-3/5 ml-8 flex flex-col justify-center">
          <ScoreBar score={score} maxScore={maxScore} />
        </div>
      </div>
    </>
  );
};

export default ScoreboardRow;
