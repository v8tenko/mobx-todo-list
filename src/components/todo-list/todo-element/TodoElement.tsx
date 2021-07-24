import React, {FC} from "react";
import "./TodoElement.sass"
import {Todo} from "../../../store/stores/TodoListStore";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";

const TodoElement: FC<Todo> = ({title, finished}) => {

    const store = useStore(root => root.todoListStore)
    const update = () => {
        store.update(title)
    }
    const remove = () => {
        store.removeTodo(title)
    }

    return (
        <div className="todo-element">
            <div className="todo-element-left">
                <input
                    type="checkbox"
                    checked={finished}
                    onClick={update}
                    readOnly
                />
                <p> {title} </p>
            </div>
            <p
                style={{color: "red"}}
                onClick={remove}
                className="close"
            > ✖ </p>
        </div>
    )
}

export default observer(TodoElement)
