import BarIcon from "../atom/BarIcon";
import PureLabel from "../atom/PureLabel";

const Head = () => {
  return (
    <div className="p-5 bg-purple-500 flex justify-center items-center relative max-w-lg">
      <div className="absolute left-6">
        <BarIcon />
      </div>
      <PureLabel contents="websiteTodo" />
    </div>
  );
};
export default Head;
