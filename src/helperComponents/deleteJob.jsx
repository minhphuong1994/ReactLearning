

const deleteJob = async (jobId) =>{
    console.log(jobId)
    const res = await fetch(`/api/jobs/${jobId}`,{
        method:'DELETE'
    })
    return
}

export default deleteJob