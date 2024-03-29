import { useState } from 'react'
import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const client = new SSMClient({
  region: 'ap-northeast-1',
});
const input = { // GetParameterRequest
  Name: "/amplify/d3fmr6cq1yww4f/master/VITE_HIMITU", // required
  WithDecryption: true,
};
const command = new GetParameterCommand(input);
const response = await client.send(command);
console.log(response)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>値は：{import.meta.env.VITE_HOGE}</p>
      <p>秘密の値は：{import.meta.env.secrets.VITE_HIMITU}</p>
    </>
  )
}

export default App
