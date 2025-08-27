import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + bad + neutral

  const average = total > 0 ? (good*1 + neutral*0 + bad*-1)/total : 0

  const positive = total>0 ? (good/total)*100 : 0

    return (
    <div>
      <h1>give feedback</h1>
      <button onClick={()=>{setGood(good+1)}}>good</button>
      <button onClick={()=>{setNeutral(neutral+1)}}>neutral</button>
      <button onClick={()=>{setBad(bad+1)}}>bad</button>
      <h1>statistics</h1>
      <p>good {good}
        <br></br>
        neutral {neutral}
        <br></br>
        bad {bad}
        <br></br>
        all {total}
        <br></br>
        average {average}
        <br></br>
        positive {positive} %</p>

    </div>
  )
}

export default App