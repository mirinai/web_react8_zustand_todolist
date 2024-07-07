import { useEffect, useState } from "react";
import AddButton from "../atom/AddButton";
import TodoItem, { TodoItemProps } from "../molecule/TodoItem";
import { initTodoList, localSet, userInput } from "../../utils/util";
import { INFO } from "../../constants/infoMessage";
import { APIKEY } from "../../constants/API_Keys";

const Body = () => {
  const [id, setId] = useState<number>(0);
  const [todoItems, setTodoItems] = useState<TodoItemProps[]>([]);
  //1. Key값 -> 상수로 빼기
  //2. localStorage 함수를 util함수로
  const addItem = () => {
    // const todo = prompt("오늘 할일 쓰기") || "입력오류";
    const newData = { id, contents: userInput(INFO.TODO) };
    setTodoItems((prev) => {
      const updateData = [...prev, newData];
      // localStorage.setItem(APIKEY.LOCAL, JSON.stringify(updateData));
      localSet(updateData);
      return [...prev, newData];
    });
    setId((prev) => prev + 1);

    //JSON.stringify(): obj -> string
    // localStorage.setItem(String(id), JSON.stringify(newData));
  };
  const deleteItem = (id: number) => {
    setTodoItems((prev) => {
      const updateData = prev.filter((value) => value.id != id);
      // const mappedData = updateData.map((v, i) => ({
      //   id: i,
      //   contents: v.contents,
      // }));
      // localStorage.setItem(APIKEY.LOCAL, JSON.stringify(updateData));
      localSet(updateData);

      return updateData;
    });
  };

  useEffect(() => {
    initTodoList({ setTodoItems, setId });
  }, []);
  return (
    <div className="flex flex-col items-center max-w-lg">
      <div className="bg-white p-16 shadow-lg w-full">
        {/* <TodoItem /> */}
        {todoItems.map((v, i) => (
          <TodoItem key={v.id} {...v} onDelete={() => deleteItem(v.id)} />
        ))}
      </div>
      <div className="relative bottom-8">
        <AddButton handleClick={addItem} />
      </div>
    </div>
  );
};
export default Body;
