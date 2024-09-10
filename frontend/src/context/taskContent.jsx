import axios from 'axios'
import React, { createContext, useCallback, useState } from 'react'
import Cookies from 'js-cookie'; 
import decodeToken from '../helper/decode';



export const TaskContex = createContext(null)
const TaskProvider = ({children}) =>{
    const [ taskValues, setTaskValues ] = useState({
        title: "",
        description: "",
        dueDate: "",
        startDate:""
    })

    const [ editValues, setEditValues ] = useState({
        title: "",
        description: "",
        dueDate: "",
        startDate:""
    })

    const [ taskError, setTaskError ] = useState(null)
    
    const [ allTask, setAllTask ] = useState([])

    const [ modal, setModal ] = useState(false)

    const [deleteMessage, seteDeletMessage] = useState(null)
    const [addMessage, setAddMessage] = useState(null)
    const [editMessage, setEditMessage] = useState(null)
    
    const showModal = (id)=>{
        setModal(!modal)
        localStorage.setItem("deleteId", JSON.stringify(id))
    }

    const getTaskValues = (e)=>{
        setTaskValues((prev)=> {
            return ({...prev, [e.target.name]: e.target.value})
        })
    }

    const getEditValues = (e)=>{
        setEditValues((prev)=> {
            return ({...prev, [e.target.name]: e.target.value})
        })
        console.log(editValues)
    }

    const taskSubmit = async()=>{
        try {
            // const token = Cookies.get("token")
            // const userId = await decodeToken(token)
            const response = await axios.post(`http://localhost:3054/api/v1/task/create-task/`, taskValues, { withCredentials: true })
            const data = await response.data.message
            setAddMessage(data)
            console.log(data)

             const interval = setInterval(() => {
                setAddMessage(null)

                // Clear the interval once the message is deleted
                clearInterval(interval);
            }, 10000);

        } catch (error) {
            console.log(error)
             setTaskError(error?.response?.data?.errors?.msg || error?.response?.data?.error || error.message)
             const interval = setInterval(() => {
                    setTaskError(null)

                    // Clear the interval once the message is deleted
                    clearInterval(interval);
            }, 10000);
        }
    }

    const editSubmit = async()=>{
        try {
            // const token = Cookies.get("token")
            // const userId = await decodeToken(token)
            const retrievedtaskID = JSON.parse(localStorage.getItem('id'));  
            const retrievedtask = JSON.parse(localStorage.getItem('filterTask'));  

            const sendData = {
                title: editValues.title || retrievedtask.title,
                description: editValues.description || retrievedtask.description,
                dueDate: editValues.dueDate || retrievedtask.dueDate,
                startDate:editValues.startDate || retrievedtask.startDate,
            }

            const response = await axios.put(`http://localhost:3054/api/v1/task/update-task/${retrievedtaskID}`, sendData, { withCredentials: true })
            const data = await response.data.message
            console.log(data)
            setEditMessage(data)
            setEditValues({
                title: "",
                description: "",
                dueDate: "",
                startDate:""
            })

             const interval = setInterval(() => {
                setEditMessage(null)
                console.log("Message deleted:", deleteMessage);

                // Clear the interval once the message is deleted
                clearInterval(interval);
            }, 10000);

        } catch (error) {
            console.log(error)
             setTaskError(error?.response?.data?.errors?.msg || error?.response?.data?.error || error.message)
             const interval = setInterval(() => {
                    setTaskError(null)

                    // Clear the interval once the message is deleted
                    clearInterval(interval);
            }, 10000);
        }
    }

    const deleteButton = async ()=>{
        try {
            const retrievedDeletID = JSON.parse(localStorage.getItem('deleteId'));  
            const response = await axios.delete(`http://localhost:3054/api/v1/task/delete-task/${retrievedDeletID}`, { withCredentials: true });  
            const data = await response?.data?.message
            seteDeletMessage(data)
            showModal(!modal)

            window.location.href = "/dashboard"

            const interval = setInterval(() => {
                seteDeletMessage(null)

                // Clear the interval once the message is deleted
                clearInterval(interval);
            }, 10000);

        } catch (error) {
            console.log(error)
             setTaskError(error?.response?.data?.errors?.msg || error?.response?.data?.message || error.message)
             const interval = setInterval(() => {
                    setTaskError(null)

                    // Clear the interval once the message is deleted
                    clearInterval(interval);
            }, 10000);
        }
    }
  const getAllTask = useCallback(async () => {  
    try {  
        const response = await axios.get(`http://localhost:3054/api/v1/task/all-task`, { withCredentials: true });  
        const data = response?.data?.message; // Confirm data is fetched correctly  
        console.log("taskkkk", data)
        if (data && Array.isArray(data)) { // Ensure data is an array  
            setAllTask(prevTasks => {  
                const newTasks = data.filter(task => !prevTasks.some(prevTask => prevTask.id === task.id)); // Prevent duplicates  
                return [...prevTasks, ...newTasks]; // Merge with previous tasks  
            });  
        }  
    } catch (error) {  
        console.log(error.message);  
    }  
}, []);


    const editButton = async(id)=>{
        const task = allTask.filter(task => task._id === id)[ 0 ]
        localStorage.setItem("filterTask", JSON.stringify(task))
        localStorage.setItem("id", JSON.stringify(id))
    }
    
  return (
      <TaskContex.Provider value={{
          getTaskValues,
          taskValues,
          taskSubmit,
          getEditValues,
          editValues,
          editSubmit,
          getAllTask,
          allTask,
          editButton,
          showModal,
          modal,
          deleteButton,
          deleteMessage,
          addMessage,
          editMessage,
          taskError,
      }}>
      {children}
    </TaskContex.Provider>
  )
}

export default TaskProvider
