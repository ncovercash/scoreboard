import ScoreboardRow from "./ScoreboardRow";

export default function Scoreboard() {
  return (
    <div className="flex flex-col h-full">
      <ScoreboardRow playerName="Mark" score={0} maxScore={8} />
      <ScoreboardRow playerName="Crystal" score={1} maxScore={8} />
      <ScoreboardRow playerName="Ben" score={2} maxScore={8} />
      <ScoreboardRow playerName="Rebecca" score={3} maxScore={8} />
      <ScoreboardRow playerName="Janet" score={4} maxScore={8} />
      <ScoreboardRow playerName="Greg" score={5} maxScore={8} />
      <ScoreboardRow playerName="Reese" score={6} maxScore={8} />
      <ScoreboardRow playerName="Sharon" score={7} maxScore={8} />
      <ScoreboardRow playerName="Elliadas" score={8} maxScore={8} />
    </div>
  );
}
