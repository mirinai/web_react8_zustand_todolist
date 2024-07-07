import { useStore } from "./zustand/Store";
import First from "./zustand/First";
import TodoItem from "./components/molecule/TodoItem";
import AddButton from "./components/atom/AddButton";
import Body from "./components/organism/Body";
import { useMediaQuery } from "react-responsive";
import SecondTablet from "./responsive/SecondTablet";
import SecondPC from "./responsive/SecondPC";
import Head from "./components/organism/Head";
function App() {
  const { inc } = useStore();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className="App">
      <div className="flex flex-col items-center">
        <div className="w-screen mx-auto max-w-lg">
          <Head />
          <Body />
        </div>

        <div>{/* <AddButton /> */}</div>
        <div>------------------------------------------------</div>
        <div>
          {isDesktopOrLaptop && <SecondPC />}
          {isTablet && <SecondTablet />}
        </div>
        <div>------------------------------------------------</div>
        <div>
          <h1 className="text-red-300">hello</h1>
        </div>
        <button onClick={inc}>버튼</button>
        <First />
      </div>
    </div>
  );
}

export default App;
