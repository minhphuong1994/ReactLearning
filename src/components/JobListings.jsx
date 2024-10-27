
import {useState, useEffect} from "react"
import JobListing from './JobListing'
import Spinner from "./Spinner"


const JobListings = ({isHome = false}) =>{
    
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    const apiURL = isHome ? "/api/jobs?_limit=3" : "/api/jobs"

    useEffect(()=>{
        const fetchJobs = async ()=>{
            try{
                const res = await fetch(apiURL)
                const data = await res.json()
                setJobs(data)
            }
            catch(err){
                console.log("Error occured while loading", err)
            }
            finally{
                setLoading(false)
            }
        }

        fetchJobs() //calling the function
    },[]) //dependency list empty meaning run the fetchJobs() on every single change of the browser

    
    return (
        <>
            {loading ? (<Spinner loading={loading}/>):(
                
                <>{
                    jobs.map((job,index)=>(
                        <div key={index} className='pb-5'>
                            <div>Title: {job.title}</div>
                            <JobListing description={job.description}/>
                        </div>
                    ))
                }</>
            )}
        </>
    )
    
}

export default JobListings