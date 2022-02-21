import React, {useState} from 'react' //useState is a function 
                                      //from react that uses initialState

const Counter = () => {
  //const [state, setState] = useState(initialState) 
 //returns an array whose first vlaue is a state. 
 //2nd things is a function to change the state
const [count, setCount] = useState(0)                            
  const add = ()=> {
    console.log('add clicked')
    setCount(count + 1) //take the current value of count and add 1 to it
  }
  const minus = () => {
    console.log('minus clicked')
  }
      return (
          <div>
            <h1>Counter Here</h1>
            <p>Count: {count}</p>
            <button>onClick={add}>add</button>
            <button>onClick={minus}>minus</button>
          </div>
      )

}

export default Counter
//in js you can have one default export; we are defaulting export the counter variable
//exporrt default Counter
