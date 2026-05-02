
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { countAtom } from './store/atoms/count'

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRender />
    <Buttons />
  </div>
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return <div>
    <button onClick={() => { setCount(count + 1) }}>increment</button>
    <button onClick={() => { setCount(count - 1) }}>decrement</button>
  </div>
}

export default App
