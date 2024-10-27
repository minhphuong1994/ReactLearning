

const addJob = async (newJob) =>{
    const res = await fetch('/api/jobs',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newJob)
    })

    console.log("Added job: "+res.ok)
    return
}


export default addJob