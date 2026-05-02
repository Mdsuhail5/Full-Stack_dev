import React, { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

function useDebounce(value, delay) {
    const [debouncedValue, setDebounceValue] = useState(value || "");

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setDebounceValue(value)
        }, delay);

        return () => clearTimeout(timeoutID)
    }, [value, delay]);

    return debouncedValue;
}

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

    // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect
    useEffect(() => {
        if (debouncedValue) {
            axios.get()
                .then(res)
        }
    }, [debouncedValue])
    return (
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search..."
        />
    );
};

export default SearchBar;