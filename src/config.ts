interface Player {
  name: string;
  score: number;
  highlight?: number;
}

const config: Player[] = [
  { name: "Player1", score: 3 },
  { name: "Player2", score: 5 },
  { name: "Player3", score: 0, highlight: 2 },
];

export default config;
