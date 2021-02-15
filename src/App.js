import { Container } from 'react-bootstrap'
import Headerr from './components/Header'
import Footerr from './components/Footer'
import Tasks from './components/Tasks'
import { useState } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": false
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ])

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => (task.id != id))
    )
  }

  const setReminder = (id) => {
    setTasks(tasks.map((task) => task.id == id ? { ...task, reminder: !task.reminder } : task))
  }

  const onAddTask = (task) => {
    const id = Math.floor(Math.random() * 1000)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    // setTasks({
    //   ...tasks,
    //   "id": 4,
    //   "text": task,
    //   "day": date,
    //   "reminder": reminder
    // })
  }


  return (
    <div className="App">
      <Container fluid className="justify-content-md-center" style={{ height: '100%' }}>
        <Headerr onAddTask={onAddTask} />
        <h3 className='mb-2'>This is all Tasks</h3>
        <Tasks
          tasks={tasks}
          onDelete={onDelete}
          setReminder={setReminder} />
        <Footerr />
      </Container >
    </div>
  );
}

export default App;
