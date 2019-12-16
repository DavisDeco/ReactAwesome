import React,{useState} from 'react'

function HookCounterThree() {
    // we use an empty array as a variable value
    const [items,setItems] = useState([])
    const addItem = () => {
        // use spread operator and append more items 
        setItems([...items,{
            id:items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item =>(
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounterThree
