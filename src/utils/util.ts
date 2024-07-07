import React, { Dispatch, SetStateAction } from "react";
import { TodoItemProps } from "../components/molecule/TodoItem";
import { APIKEY } from "../constants/API_Keys";
import { ERROR } from "../constants/errorMessage";

export const alarm = () => alert(ERROR.NOFUNCTION);

export const userInput = (msg: string) => prompt(msg) || ERROR.NOCONTENT;
export const localSet = (value: any) =>
  localStorage.setItem(APIKEY.LOCAL, JSON.stringify(value));
export const localGet = () => localStorage.getItem(APIKEY.LOCAL) || "[]";

type InitTodoListParams = {
  setTodoItems: Dispatch<SetStateAction<TodoItemProps[]>>;
  setId: Dispatch<SetStateAction<number>>;
};

export const initTodoList = ({ setTodoItems, setId }: InitTodoListParams) => {
  // const todolist = localStorage.getItem(APIKEY.LOCAL) || "[]";
  const todolist = localGet();
  // console.log(JSON.parse(todolist));
  const newArray = JSON.parse(todolist);
  const mappedArray = newArray.map((v: any, i: number) => ({
    id: i,
    contents: v.contents,
  }));
  setTodoItems(mappedArray);
  setId(mappedArray.length);
};
