import { useEffect, useState } from "react"

function useDebounce(value, time) {
    const [value, setvalue] = useState()
    useEffect(() => {
        const n = setTimeout(() => {
            setvalue(value)
        }, time)

        return () => { clearTimeout(n) }
    }, [value])

    return value
}


function App() {

    const [inputValue, setInputValue] = useState()
    const debounced = useDebounce(setInputValue, 500)

    useEffect(() => {
        axios.fetch('http://100xdev.com')
            .then()
    }, [debounced])

    return <div>
        Debounced value is {debounced}
        <input type="text" value={inputValue} onChange={(e) => {
            setInputValue(e.target.value)
        }} placeholder="Search..." />
    </div>
}