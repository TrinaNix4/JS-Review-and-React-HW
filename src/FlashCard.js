import {useState} from 'react'

const FlashCard = (props) => { // want to have state so need to import useState
 const [showQuestion, setShowQuestion] = useState(true)
 const renderCard = () => {
   if(showQuestion){
     return <p>{props.question}</p>
   } else {
     return <p>{props.answer}</p>
   }
 }
 
 return(

  <div style={{border: '1px solid red'}}>
    <button onClick={()=> setShowQuestion(!showQuestion)}>toggle</button>
  </div>
 )
 
 
  return(
    <div>
      <p>front side</p>   
      <p>back side</p>
    </div>
  )
}

export default FlashCard 