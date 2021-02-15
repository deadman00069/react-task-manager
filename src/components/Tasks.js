import Task from '../components/Task'
const Tasks = ({ tasks, onDelete, setReminder }) => {
    console.log(tasks)
    return (
        <div>
            {
                tasks.length < 1 ? <p style={{ textAlign: 'center' }}>No Task Found</p> :
                    tasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            onDelete={onDelete}
                            setReminder={setReminder}
                        />
                    ))
            }
        </div>
    )
}

export default Tasks
