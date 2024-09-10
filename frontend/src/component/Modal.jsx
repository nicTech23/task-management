import React, { useContext } from 'react'
import { TaskContex } from '../context/taskContent'
import { useNavigate } from 'react-router-dom'

const Modal = () => {
  const { deleteButton, showModal } = useContext(TaskContex)
  return (
    <div class="w-[400px] p-6 h-[250px] absolute top-[50%] left-[30%] z-10   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h3 className='text-center'>Are you sure you want to delete?</h3>
       <div className='flex justify-center items-center py-12 space-x-5'>
         <button onClick={()=>deleteButton()} type="button" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">Yes</button>
        <button onClick={()=>showModal(null)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">No</button>
       </div>
    </div>
  )
}

export default Modal
