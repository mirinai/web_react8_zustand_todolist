import { ERROR } from "../../constants/errorMessage";
import { TEXTSTYLE } from "../../styles/textStyle";

export type CheckedLabelProps = {
  contents?: string;
  isChecked?: boolean;
};

const CheckedLabel = ({
  contents = ERROR.NOCONTENT,
  isChecked = false,
}: CheckedLabelProps) => {
  //   const textDone = "line-through text-gray-400";
  //   const textTodo = "font-bold text-gray-900";
  return (
    <span className={isChecked ? TEXTSTYLE.Done : TEXTSTYLE.Todo}>
      {contents}
    </span>
  );
};
export default CheckedLabel;
