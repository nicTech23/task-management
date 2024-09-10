import React from 'react'
import { FaTasks } from "react-icons/fa";
import { MdOutlineAddTask } from "react-icons/md";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='w-full h-full bg-gray-800  p-5 text-white'>
      <div className='w-full flex flex-col space-y-3'>
       {
        data?.map((data, index)=>{
            return (
                 <Link to={data.to} key={data.id} className='w-full flex justify-start items-center space-x-2 p-2 px-5 cursor-pointer rounded-md hover:bg-blue-600'>
                    <div className='text-xl'>
                        {data.icon}
                    </div>
                    <h3 className=' font-normal'>{ data.name}</h3>
                </Link>
            )
        })
       }
      </div>
    </div>
  )
}

const data = [
    {
        name: "Task",
        id: 0,
        icon: <FaTasks />,
        to:"/dashboard"
    },
    {
        name: "Add task",
        id: 0,
        icon: <MdOutlineAddTask />,
        to:"/dashboard/add-task"
    },
    
]


export default Sidebar
