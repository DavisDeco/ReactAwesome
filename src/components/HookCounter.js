import React,{useState, useEffect} from 'react'

function HookCounter() {
    const initialCount = 0
    const [count,setCount] = useState(initialCount)

    // this is an example of useEffect that always be rendered after every single render or change of a specific variable or component event, in our case, when count variable changes, specified in 2nd param
    useEffect(() => {
        document.title = `you clicked ${count} times`
    }, [count])


    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
            
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=> setCount(prevCount => prevCount + 1)} >Increment</button>
            <button onClick={()=> setCount(prevCount => prevCount - 1)} >Decrement</button>
            <button onClick={incrementFive}>Increment by 5</button>
        </div>
    )
}

export default HookCounter
