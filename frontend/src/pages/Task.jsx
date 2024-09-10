import React from 'react'
import DasboardLayout from '../layout/DasboardLayout'
import TaskContent from '../component/TaskContent'
import TaskProvider from '../context/taskContent'

const Task = () => {
  return (
    <DasboardLayout>
        <TaskProvider>
            <TaskContent/>
        </TaskProvider>
    </DasboardLayout>
  )
}

export default Task
