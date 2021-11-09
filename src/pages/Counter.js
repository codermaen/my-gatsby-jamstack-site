import { Link } from "gatsby";
import React, { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return < div style={{ color: 'blue' }}>
        <h1>Counter</h1>
        <p>current counter: {counter}</p>
        {/* //plus button */}
        <button onClick={() => setCounter(prevCounter => prevCounter + 1)} style={{ color: 'tomato' }}>PLUS</button>
        {/* //minus button */}
        <button onClick={() => setCounter(prevCounter => prevCounter - 1)} style={{ color: 'tomato' }}>MINUS</button>
        <br></br>
        <br></br>
        <br></br>
        {/* // To go back to the homepage */}
        <Link to="/">Back</Link>
    </div >
}



export default Counter;