import { GiHamburgerMenu } from "react-icons/gi";
import { alarm } from "../../utils/util";

type BarIconType = {
  onClick?: () => void;
};

const BarIcon = ({ onClick = alarm }: BarIconType) => {
  return <GiHamburgerMenu onClick={onClick} />;
};
export default BarIcon;
