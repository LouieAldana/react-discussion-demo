import Task from './Task'

const Tasks = ({ tasks, onDelete, onUpdate }) => {
    return (
        <div>
            {
                tasks.map((task) => (<Task key={Task.id} task={task} onDelete={onDelete}
                    onUpdate={onUpdate}
                />
                ))}
        </div >
    )
}
// @23:41
export default Tasks;