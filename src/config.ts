interface Player {
  name: string;
  score: number;
  highlight?: number;
}

const config: Player[] = [
  { name: "Player1", score: 0 },
  { name: "Player2", score: 0 },
  { name: "Player3", score: 0, highlight: 1 },
];

export default config;
