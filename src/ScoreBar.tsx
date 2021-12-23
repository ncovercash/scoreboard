import { FunctionComponent } from "react";

interface Props {
  score: number;
  maxScore: number;
}

const ScoreBar: FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="h-12 w-full rounded-full bg-neutral-900">
      <div
        className="h-9 ml-1.5 mt-1.5 rounded-full bg-red-600 flex items-center justify-end"
        style={{
          minWidth: "2rem",
          width: `calc(calc(100% - 0.75rem) * ${props.score / props.maxScore})`,
        }}
      >
        <p
          className="text-white font-round font-medium text-3xl"
          style={{ paddingRight: "0.45rem" }}
        >
          {props.score}
        </p>
      </div>
    </div>
  );
};

export default ScoreBar;
