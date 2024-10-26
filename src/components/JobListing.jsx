import { useState } from "react"
import { FaArrowRight} from 'react-icons/fa'

const JobListing =({description}) =>{
    const [showFullDescription,setShowFullDescription] = useState(false)

    let descriptionX = description

    if(!showFullDescription){
        descriptionX = descriptionX.substring(0,90)+'...'
    }

    return (
        <>
            <div>Description: {descriptionX}</div>
            <FaArrowRight className="inline ml-1"/>
            <button onClick={()=>setShowFullDescription((prevState)=> !prevState)}
                className="text-indigo-500 mb-2"
            >{showFullDescription ? 'More' : 'Less'}</button>
        </>
    )
    
}

export default JobListing