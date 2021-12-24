import { FunctionComponent } from "react";

interface Props {
  score: number;
  maxScore: number;
}

const ScoreBar: FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="h-16 w-full rounded-full bg-neutral-900">
      <div
        className="h-12 ml-2 mt-2 rounded-full bg-red-600 bg-opacity-70 flex items-center justify-end transition-width duration-2000"
        style={{
          minWidth: "3rem",
          width:
            props.maxScore === 0
              ? "3rem"
              : `calc(calc(100% - 1rem) * ${props.score / props.maxScore})`,
        }}
      >
        <p
          className="text-white font-round font-semibold text-4xl"
          style={{ paddingRight: "0.8rem", paddingBottom: "0.1rem" }}
        >
          {props.score}
        </p>
      </div>
    </div>
  );
};

export default ScoreBar;
