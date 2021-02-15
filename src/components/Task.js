import { Card, Row, Col } from 'react-bootstrap'
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState, useEffect } from 'react'

const Task = ({ task, onDelete, setReminder }) => {

    console.log(task)
    return (
        <>
            <Card onDoubleClick={() => setReminder(task.id)} className='mb-2' style={{ margin: "0 auto", backgroundColor: task.reminder ? 'rgba(114, 245, 66,0.8)' : ' ' }}>
                <Card.Body >
                    <Row >
                        <Col>
                            <Card.Title>{task.text}</Card.Title>
                            <Card.Text>{task.day}</Card.Text>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <AiFillCloseCircle onClick={() => onDelete(task.id)} style={{ fontSize: '3rem', cursor: 'pointer' }} />
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </>
    )
}
// const Task = () => {
//     const [width, setWidth] = useState(window.innerWidth)
//     useEffect(()=>{},[])
//     return <div>
//         <p>{width}</p>
//     </div>
// }

export default Task
