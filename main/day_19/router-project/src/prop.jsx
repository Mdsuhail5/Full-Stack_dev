import { useContext, useState } from "react"
import { countContext } from "./Context";

function App2() {
    const [count, setCount] = useState(0);

    //wrap anyone that wants to use the teleported value inside a provider 
    return (
        <div>
            <countContext.Provider value={count}>
                <Count count={count} />
            </countContext.Provider>
        </div>
    )
}

function Count({ setCount }) {
    return <div>
        <CountRender />
        <Button count={count} setCount={setCount} />

    </div>;
}


function CountRender() {
    const count = useContext(countContext);
    return <div>
        {count}
    </div>
}
function Button({ count, setCount }) {
    const count = useContext(countContext)
    return <div>
        <button onClick={() => {
            setCount(count + 1)
        }}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
}

export default App2