import {makeAutoObservable} from "mobx";

export interface Todo {
    title: string,
    finished: boolean
}

export class TodoList {
    constructor() {
        makeAutoObservable(this)
    }

    todoList: Todo[] = [
        { title: "hello, world", finished: false }
    ]

    addTodo(query: Todo) {
        this.todoList.push(query)
    }

    removeTodo(query: string) {
        this.todoList = this.todoList.filter(el => el.title !== query)
    }

    update(title: string) {
        this.todoList = this.todoList.map(el => el.title === title ? {...el, finished: !el.finished} : el);
    }

}

export default new TodoList()
