import { ClipLoader } from "react-spinners"

const overrideCSS = {
    display: 'block',
    margin: '100px auto'
}


const Spinner = ({loading})=>{
    return (
        <ClipLoader 
            color="red"
            loading={loading}
            cssOverride={overrideCSS}
            size={150}
        />
    )
}

export default Spinner