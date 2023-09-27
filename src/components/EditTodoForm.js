import React,{useState} from 'react';

export const EditTodoForm = ({editTodo,task}) => {
    //passing the state from todoform to the towrapper
    const[value,setValue]=useState(task.task);
    const handleSubmit=e=>{
        e.preventDefault();
        editTodo(value,task.id);
        setValue("");
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text"className='todo-input' 
        value={value} placeholder='Update Task' onChange={(e)=>setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>
            Update Task
        </button>
    </form>
  )
}
