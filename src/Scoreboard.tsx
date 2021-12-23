import ScoreboardRow from "./ScoreboardRow";
import config from "./config";

export default function Scoreboard() {
  const maxScore = Math.max(...config.map((player) => player.score));
  return (
    <div className="flex flex-col h-full">
      {config.map((player) => (
        <ScoreboardRow
          playerName={player.name}
          score={player.score}
          maxScore={maxScore}
          highlight={player.highlight}
        />
      ))}
    </div>
  );
}
