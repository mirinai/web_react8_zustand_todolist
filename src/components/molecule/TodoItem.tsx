import { useState } from "react";
import CheckedLabel from "../atom/CheckedLabel";
import RoundCheckBox from "../atom/RoundCheckBox";
import TrashIcon from "../atom/TrashIcon";

// const isCheckBox = () => {
//   const result = RoundCheckBox() ? <TrashIcon /> : null;
//   return result;
// };

export type TodoItemProps = {
  id: number;
  contents: string;
  onDelete?: () => void;
};

const TodoItem = ({ contents, onDelete }: TodoItemProps) => {
  //   const isCheckBox = () => {
  //     const result = RoundCheckBox() ? TrashIcon : ;
  //     return result;
  //   };
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheck = () => setIsChecked((prev) => !prev);

  const obj = {
    RoundCheckBox: {
      isChecked,
      handleCheck,
    },
    checkedLabel: {
      isChecked,
      contents,
    },
    TrashIcon: {
      onDelete,
    },
  };
  return (
    <div className="flex items-center gap-5">
      {/* <RoundCheckBox isChecked={isChecked} handleCheck={handleCheck} /> */}
      <RoundCheckBox {...obj.RoundCheckBox} />
      {/* <Label isChecked={isChecked} /> */}
      <CheckedLabel {...obj.checkedLabel} />
      {isChecked && <TrashIcon {...obj.TrashIcon} />}
    </div>
  );
};
export default TodoItem;
