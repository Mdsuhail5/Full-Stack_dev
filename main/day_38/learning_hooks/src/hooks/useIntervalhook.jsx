const { useState } = require("react");

const useIntervalhook = () => {
    const [count, setcount] = useState()

    useInterval(() => {
        setcount(c => count + 1)
    }, 1000)

    return count;
}


function App() {
    const number = useIntervalhook()
    return <div>

    </div>
}