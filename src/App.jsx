import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import JobPage, {jobLoader} from './pages/JobPage'
import NotFoundPage from './pages/NotFoundPAge'
import addJob from './helperComponents/addJob'
import deleteJob from './helperComponents/deleteJob'
import AddJobPage from './pages/AddJobPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
      <Route path='/add-job' element={<AddJobPage addJob={addJob}/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route>
  )
)

const App = () =>{
  return <RouterProvider router={router}/>
}
export default App;