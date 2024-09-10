import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Task from './pages/Task';
import AddTask from './pages/AddTask';
import EditPage from './pages/EditPage';
import Cookies from 'js-cookie';
import LandingPage from './pages/LandingPage';




const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
  },
  {
    path: "/dashboard",
    element: <Task/>,
  },
  {
    path: "/dashboard/add-task",
    element: <AddTask/>,
  },
  {
    path: "/dashboard/edit-task",
    element: <EditPage/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
