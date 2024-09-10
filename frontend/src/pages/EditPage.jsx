import React from 'react'
import DasboardLayout from '../layout/DasboardLayout'
import EditContent from '../component/EditContent'
import TaskProvider from '../context/taskContent'

const EditPage = () => {
  return (
    <DasboardLayout>
        <TaskProvider>
             <EditContent/>
        </TaskProvider>
    </DasboardLayout>
  )
}

export default EditPage
