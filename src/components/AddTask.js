import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [important, setImportant] = useState(false)

    //add HW ErrorHandeling here (discussion @ 30:30)
    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({ title, day, important })
        setTitle('')
        setDay('')
        setImportant(false)
    }

    return (
        <div className="border">
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Meeting</label>
                    <input type='text' placeholder='Add Task'
                        value={title} onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>Date</label>
                    <input type='text'
                        value={day} onChange={(e) => setDay(e.target.value)}
                    />
                </div>
                <div className='form-control form-control-check'>
                    <label>important</label>
                    <input type='checkbox' checked={important}
                        value={important} onChange={(e) => setImportant(e.currentTarget.checked)}
                    />
                </div>
                <input type='submit' value="Save" className="btn btn-block" />
            </form>
        </div>
    )
}
// @30:25
export default AddTask