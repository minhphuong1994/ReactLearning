
import { useParams, useLoaderData, useNavigate } from 'react-router-dom'
// import {useState, useEffect} from 'react'
// import Spinner from '../components/Spinner'
import JobListing from '../components/JobListing'
import deleteJob from '../helperComponents/deleteJob'
import { toast } from 'react-toastify'

const JobPage = ()=>{

    const {id} = useParams()
    const job = useLoaderData()
    const navigate = useNavigate()
    // const [job, setJob] = useState(null)
    // const [loading, setLoading] = useState(true)

    // useEffect(()=>{
    //     const fetchJob = async ()=>{
    //         try{
    //             const res = await fetch(`/api/jobs/${id}`)
    //             const data = await res.json()
    //             setJob(data)
    //         }
    //         catch(err){
    //             console.log("Failed to fetch the job",err)
    //         }
    //         finally{
    //             setLoading(false)
    //         }
    //     }

    //     fetchJob()
    // }
    // ,[])

    const onClickDelete = (jobId) =>{
        const confirm = window.confirm("Are you sure you want to delete jobId: "+jobId)
        
        if(!confirm) return;
        // console.log(job.id)
        // console.log(jobId)
        deleteJob(jobId)

        toast.success("Deleted jobwith Id: "+jobId+" successfully")
        navigate("/jobs")
    }

    return (
    <>
        <JobListing description={job.description}/>
        <button onClick={()=>onClickDelete(job.id)}
                className="text-indigo-500 mb-2"
        >Delete</button>
    </>
    )
}

// it must be 'params' but not any other keyword
const jobLoader = async ({params})=>{
    const res = await fetch(`/api/jobs/${params.id}`)
    const data = await res.json()
    return data
}

export {JobPage as default, jobLoader}