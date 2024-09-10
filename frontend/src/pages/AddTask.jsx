import React from 'react'
import DasboardLayout from '../layout/DasboardLayout'
import AddTaskContent from '../component/AddTaskContent'
import TaskProvider from '../context/taskContent'

const AddTask = () => {
  return (
    <DasboardLayout>
        <TaskProvider>
            <AddTaskContent/>
        </TaskProvider>
    </DasboardLayout>
  )
}

export default AddTask
