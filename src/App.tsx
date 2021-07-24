import React from 'react'
import styled from "styled-components";
import TodoList from "./components/todo-list/TodoList";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    padding: 10vh 32vw;
`

function App() {
    return (
        <Container>
            <TodoList />
        </Container>
    )
}

export default App;
