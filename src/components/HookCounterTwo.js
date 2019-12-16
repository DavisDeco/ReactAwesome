import React ,{useState}from 'react'

function HookCounterTwo() {
    // this usehook variable will use an object as default value 
    // usestate does not merge state of objects, you manage this manually by uaing the spread operator, here we use (...name)
    const [name,setName] = useState({firstname: '', lastname:''})

    return (
        <div>
            <form>
                <input type="text" 
                       value={name.firstname}
                       onChange={e => setName({...name,firstname: e.target.value})}
                />
                <input type="text" 
                       value={name.lastname}
                       onChange={e => setName({...name,lastname: e.target.value})}
                />
                <h2>Your first name is - {name.firstname}</h2>
                <h2>Your last name is - {name.lastname}</h2>
            </form>
            
        </div>
    )
}

export default HookCounterTwo
