import jobs from '../jobs.json'
import JobListing from './JobListing'

const JobListings = ({isHome = false}) =>{
    console.log(jobs)

    const jobToShow = isHome ? jobs.splice(0,3) : jobs
    return (
        <>
            {
                jobToShow.map((job,index)=>(
                    <div key={index} className='pb-5'>
                        <div>Title: {job.title}</div>
                        <JobListing description={job.description}/>
                    </div>
                ))
            }
        </>
    )
}

export default JobListings