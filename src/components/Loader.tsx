import { ProgressBar } from "react-loader-spinner";

type Props = {
  width: string;
  height: string;
  wrapperStyle: {
    [key: string]: string;
  };
  borderColor: string;
  barColor: string;
};

export function Loader({
  width,
  height,
  wrapperStyle,
  borderColor,
  barColor,
}: Partial<Props>) {
  return (
    <>
      <ProgressBar
        height={!height ? "30" : height}
        width={!width ? "80" : width}
        ariaLabel="progress-bar-loading"
        wrapperStyle={!wrapperStyle ? {} : wrapperStyle}
        wrapperClass="progress-bar-wrapper"
        borderColor={!borderColor ? "black" : borderColor }
        barColor={!barColor ? "skyblue" : barColor }
      />
    </>
  );
}
