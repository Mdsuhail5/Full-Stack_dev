import { useState, memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    return <div>

        {/* can write like this by creating a text component and rendring the content into the CardWrapper, not widely used
    <CardWrapper innerComponent={<TextComponent></TextComponent>}></CardWrapper>
    <CardWrapper innerComponent={<TextComponent />} /> 

    real way to write the CardWrapper*/}
        <CardWrapper>hi there, how are you?</CardWrapper>
        <CardWrapper>hi there, how are you?</CardWrapper>
    </div>
}

function CardWrapper({ children }) {
    return <div style={{ border: '2px solid black', padding: 20 }}>
        {children}
    </div>
}
// function TextComponent() {
//   return <div>
//     hi there
//   </div>
// }
// function CardWrapper({ innerComponent }) {
//   return <div style={{ border: '2px solid black', padding: 20 }}>
//     {innerComponent}
//   </div>
// }
export default App
