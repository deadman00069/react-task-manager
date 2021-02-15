import { Button, Container, Jumbotron, Card, Row, Col } from 'react-bootstrap'
import AddTaskkk from '../components/AddTask'
import { useState } from 'react'

const Header = ({ onAddTask }) => {
    const [isPressed, setIspressed] = useState(false)
    return (
        <>
            <Jumbotron>
                <h1>Task Manager</h1>
                <p>This is simple task manager app on react</p>
                <Button onClick={() => setIspressed(!isPressed)} variant='primary'>{!isPressed ? 'Add Task' : 'Close'}</Button>
                {isPressed && <AddTaskkk onAddTask={onAddTask} />}
            </Jumbotron>
        </>
    )
}

export default Header
