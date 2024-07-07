import { ERROR } from "../../constants/errorMessage";

export type PureLabelProps = {
  contents?: string;
};
const PureLabel = ({ contents = ERROR.NOCONTENT }: PureLabelProps) => {
  return <span className="text-white font-bold text-lg">{contents}</span>;
};
export default PureLabel;
