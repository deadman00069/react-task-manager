import { Form, Button, } from 'react-bootstrap'
import { useState } from 'react'

const AddTaskkk = ({ onAddTask }) => {

    const [task, setTask] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setChecked] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault()
        onAddTask({ text: task, date, reminder })
    }

    return (
        <div>
            <Form>
                <Form.Group controlId='formBasicTask'>
                    <Form.Label>Task</Form.Label>
                    <Form.Control type='text' placeholder='Enter Task' onChange={(e) => setTask(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='formBasicDate'>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type='date' placeholder='' onChange={(e) => setDate(e.target.value)} ></Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Reminder" defaultChecked={reminder} onChange={() => setChecked(!reminder)} />
                </Form.Group>
                <Button onClick={(e) => onSubmit(e)} style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }} type='submit'>
                    Submit
                </Button>

            </Form>
        </div>
    )
}

export default AddTaskkk
