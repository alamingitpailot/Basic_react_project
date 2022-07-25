import React,{useState} from 'react'

export default function UseState() {
    const [countdown, setCountAl] = useState(0);
    const CountHandle = () => {
        setCountAl(countdown + 1);
    }

  return (
      <div>
          <h1>Count : { countdown  }</h1>
      <button onClick={CountHandle}>Increment</button>    
    </div>
  )
}
