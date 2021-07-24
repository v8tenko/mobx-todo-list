import React, {ChangeEvent, FC, useState} from "react";
import "./TodoList.sass"
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import TodoElement from "./todo-element/TodoElement";

const TodoList: FC = () => {

    const store = useStore(state => state.todoListStore)
    const [input, setInput] = useState("")
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setInput(event.target.value)
    }
    const add = (event: any) => {
        event.preventDefault()
        store.addTodo({title: input, finished: false})
        setInput("")
    }

    return (
        <div className="todo-list-container">
            <div className="todo-list-add-line">
                <form onSubmit={add}>
                    <input
                        type="text"
                        value={input}
                        placeholder="input todo label"
                        onChange={handleInput}
                    />
                </form>
                <button
                    onClick={add}
                    className="btn btn-primary"
                >
                    добавить
                </button>
            </div>
            {
                store.todoList.map(el => <TodoElement
                    key={el.title}
                    title={el.title}
                    finished={el.finished}
                />)
            }

        </div>
    )
}

export default observer(TodoList)
