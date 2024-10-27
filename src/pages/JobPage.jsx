
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Spinner from '../components/Spinner'
import JobListing from '../components/JobListing'

const JobPage = ()=>{

    const {id} = useParams()
    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchJob = async ()=>{
            try{
                const res = await fetch(`/api/jobs/${id}`)
                const data = await res.json()
                setJob(data)
            }
            catch(err){
                console.log("Failed to fetch the job",err)
            }
            finally{
                setLoading(false)
            }
        }

        fetchJob()
    }
    ,[])

    return loading ? <Spinner/> : <JobListing description={job.description}/>
    
}

export default JobPage