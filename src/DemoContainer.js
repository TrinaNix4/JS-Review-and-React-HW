/* import { useState } from "react"


const DemoContainer = (props)=>{
    const [showContent, setShowContent] = useState(true) //state gives me a way to show/hide content of card
    return (
        <div className='demo-container'>
           
           <div>
            h1>{props.header}</h1>
            <button> onClick={() => setShowContent(!showContent)}>
                {showContent && props.children}  //
            <button></button>
           </div>
           
           
        </div>
    )
}
export default DemoContainer */