// import DummyComponent from "./DummyComponent";
// useState hook
// if not exported as default, u can use {useState} with brackets
import {useState} from 'react'

function Counter(){
    // 2. Internal State
        const [counter, setCounter] = useState(0);
        const [dummyState, setDummyState] = useState({})

    // 3. Business Logic
        function increment(){
            setCounter(counter + 1)
        }

        function decrement(){
            setCounter(counter - 1)
        }
    
    // 4. Fetchers
    async function getStaffs(){
        let response = await fetch(
            'https://school-api-2wqk.onrender.com/api/staffs/',
            {
                'headers': {'Accept': 'application/json'}
            }
            )
        let staffs = await response.json();
        console.log(staffs);
    }
    getStaffs();

    // 1. Content to be rendered
        return (
            // JSX = JS + HTML + XML
            <div>
                {/* {} shows a switch to JS */}
                <h1>Counter: {counter} </h1>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        )
}

export default Counter;
