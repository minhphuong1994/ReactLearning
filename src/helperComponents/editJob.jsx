
const editJob= async(editedJob) =>{
    const res = await fetch(`/api/jobs/${editedJob.id}`,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(editedJob)
    })

    console.log("Edited job: "+res.ok)
    return
}

export default editJob