const Task = ({ task, onDelete, onUpdate }) => {
    return (
        <div onDoubleClick={() => onUpdate(task.id)}>
            <h3> {task.title}
                <div style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}>
                    Delete
                </div>
            </h3 >
            <p> {task.day} </p>
            { task.important && <p> important </p>}
        </div >
    )
}
// @38:00, 23:20
export default Task;