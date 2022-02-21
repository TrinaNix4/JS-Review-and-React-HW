import {useState} from 'react'
//import { getAlphabet } from './helpers'



const MessageBasic = ()=>{
 
    const [message, setMessage] = useState('')
    const handleClicked = (char) => {
        console.log(`${char} clicked`)
        setMessage(message + char)
    }

    const renderAlphabet = () => {
      let alp = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']  //use 'map' here//creating an alphabet variable thats
      let jsx = alp.map(char=>{ //mapping over array and for each element creating a button 
        return <button key={char} onClick={()=> handleClicked(char)}>{char}</button>
      })
//console.log(jsx) //console to view it is there
return jsx 

    }

    return (
       <div>
           <h1>MessageBasic</h1>
           <p>{message}</p>
           {renderAlphabet()}
       </div> 
    )
}

export default MessageBasic