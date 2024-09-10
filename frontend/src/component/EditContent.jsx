import React, { useContext } from 'react'
import { TaskContex } from '../context/taskContent'
import { Link } from 'react-router-dom'

const EditContent = () => {
    const {getEditValues, editValues, editSubmit, editMessage,  taskError} = useContext(TaskContex)
  return (
    <section className="bg-white p-10 rounded-lg w-full">  
         {
            editMessage ? (
                <div class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">Success alert!</span> Task edited.
                    </div>
                </div>
            ) : null
          }
          
          {
              taskError ? (
                 <div class="flex items-center p-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert">
                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">Warning alert!</span> {taskError}
                    </div>
                </div>
              ) : null
          }
            <h2 className="text-lg font-semibold mb-4">Edit Task</h2>  
            <section>  
                <div className="mb-4">  
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>  
                  <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      onChange={getEditValues}
                      value={editValues?.title}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full" />  
                </div>  
                <div className="mb-4">  
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>  
                  <textarea
                      id="description"
                      name="description"
                      rows="3"
                      required
                      onChange={getEditValues}
                      value={editValues?.description}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>  
                </div>  
                <div className="mb-4">  
                    <label htmlFor="start-datetime" className="block text-sm font-medium text-gray-700">Start Date and Time</label>  
                  <input
                      type="datetime-local"
                      id="startDate"
                      name="startDate"
                      required
                      onChange={getEditValues}
                      value={editValues?.startDate}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full" />  
                </div>  
                <div className="mb-4">  
                    <label htmlFor="due-datetime" className="block text-sm font-medium text-gray-700">Due Date and Time</label>  
                  <input
                      type="datetime-local"
                      id="due-datetime"
                      name="dueDate"
                      required
                      onChange={getEditValues}
                      value={editValues?.dueDate}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full" />  
                </div>  
                <div className='w-full flex space-x-5'>
                    <button
                        onClick={()=>editSubmit()}
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600">
                        Edit task
                    </button>  
                    <Link
                        to="/dashboard"
                        onClick={()=>editSubmit()}
                        className="w-full text-center bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600">
                        Cancel
                    </Link>  
                </div>
            </section>  
        </section>  
  )
}

export default EditContent
