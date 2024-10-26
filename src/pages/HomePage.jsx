import SmallTest from "../components/smallTest"
import SmallTest2 from "../components/SmallTest2"
import SimpleWrapper from "../components/SimpleWrapper"
import JobListings from "../components/JobListings"

const HomePage = ()=>{
    const abc= 'TEST'
    const names = ['Tim','Nue','Joe']
    const loggedIn = false
    const loggedOut = !loggedIn
    const reuseStyles = {
        color:'green',
        fontSize:'39px'
    }
    return (
        <>
            <div className="text-5xl">hello {abc}</div> 
            <div style={{color:'red', fontSize:'24px'}}>testing</div>
            <SmallTest title="AAA" subtitle="aaa"/>
            <SmallTest2 title="AAA2"/>
            <ul>
            {names.map((name,index)=>(
                <SimpleWrapper key={index}>
                <li>BBB</li>
                </SimpleWrapper>
            ))}
            </ul>
            {/* if loggedOut is true -> show the h1, else do nothing */}
            {loggedOut && <h1 style={reuseStyles}>Bye bye!</h1>} 
            {loggedIn ? <h1>Hello logged in</h1> : <h1>not logged in</h1>}

            <JobListings isHome={true}/>
        </>
    )
}

export default HomePage