import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import countatom from './store/count';

function App() {
  return (
    <>
      <RecoilRoot>
        <Child />
      </RecoilRoot>
    </>
  )
}

function Child() {
  return (
    <>
      <CountValue />
      <Button />
    </>
  )
}

function CountValue() {
  let count = useRecoilValue(countatom);
  return (
    <>
      <h1>{count}</h1>
    </>
  )
}

function Button() {
  let setCount = useSetRecoilState(countatom);
  return (
    <>
      <button onClick={() => setCount((prevcount) => prevcount + 1)}> Inc</button>
      <button onClick={() => setCount((prevcount) => prevcount - 1)}> Dec</button>
    </>
  )
}

export default App
