import {createContext} from "react";
import TodoListStore, { TodoList } from "./stores/TodoListStore";

export interface RootStore {
    todoListStore: TodoList
}

export const store: RootStore = {
    todoListStore: TodoListStore
}

export const RootContext = createContext<RootStore>({} as RootStore)
