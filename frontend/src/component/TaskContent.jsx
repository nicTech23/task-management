import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TaskContex } from '../context/taskContent'
import Modal from './Modal' 
import Cookies from 'js-cookie';

          
const TaskContent = () => {
    const { getAllTask, allTask, editButton, modal, showModal, deleteMessage} = useContext(TaskContex)
    
    useEffect(()=>{
        getAllTask()
    }, [])
    const navigate = useNavigate()

    // const checkCookies = (name)=>{
    //     return Cookies?.get(name) !== undefined
    // }

    // useEffect(()=>{
    //     if (!checkCookies("token")) {
    //     navigate("/login")
    // }
    // }, [])
    
  return (
      <section className='w-full p-10 relative'>
        {
            deleteMessage ? (
                <div class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">Danger alert!</span> Task deleted
                    </div>
                </div>
            ): null
        }
        {modal ? <Modal/> : null}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    My Schedule Task {allTask?.length}
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Start Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Due Date
                        </th>
                        <th scope="col" className="px-6 py-3 flex space-x-3">
                            <span className="sr-only">Edit</span>
                            <span className="sr-only">Delete</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                   {
                    allTask?.map((data, index)=>{
                        const startDate = new Date(data.startDate); 
                        const dueDate = new Date(data.dueDate); 
                        const formattedStartDate = startDate.toISOString().replace('T', ' ').substring(0, 19);  
                        const formattedDueDate = dueDate.toISOString().replace('T', ' ').substring(0, 19);  
                        return (
                             <tr key={index+data._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {data.title}
                                </th>
                                <td className="px-6 py-4">
                                    {data.description}
                                </td>
                                <td className="px-6 py-4">
                                    {formattedStartDate}
                                </td>
                                <td className="px-6 py-4">
                                    {formattedDueDate }
                                </td>
                                <td className="px-6 py-4 text-right flex space-x-3">
                                    <Link
                                        to="/dashboard/edit-task"
                                        onClick={()=>editButton(data._id)}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    <button
                                        onClick={()=>showModal(data._id)}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                        )
                    })
                   }
                </tbody>
            </table>
        </div>
    </section>
  )
}

export default TaskContent
