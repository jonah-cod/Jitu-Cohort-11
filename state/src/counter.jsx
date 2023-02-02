import React, {useState, useEffect} from 'react'

const Counter = () => {
      const [counter, setCounter] = useState(0)
      const [hover, sethover] = useState(0)


      function handleCounter() {
            setCounter(counter + 1)
      }

      function handleHover() {
            sethover(hover + 1)
      }
      

      useEffect(() => {
        console.log("Counter Mounted")

        return()=>{
            console.log("Unmounted")
        }
      }, [counter, hover])
      
      return (
            <div>
                  {console.log("Counter Updated")}
                  <h4>Counter</h4>
                  <p>You clicked the button {counter}</p>
                  <button onClick={handleCounter}>Click Me</button>
                  <p>You hovered {hover} times</p>
                  <button onMouseOver={handleHover}>hover</button>
            </div>
      )
}

export default Counter