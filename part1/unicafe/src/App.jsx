import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <>
    {props.text} {props.value} <br></br>
    </>
  )
}

const Statistics = (props) => {
  return(
    <div>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="average" value ={props.average} />
      <StatisticLine text="positive" value ={props.positive + " %"} />
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

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
      <Button onClick={()=>{setGood(good+1)}} text='good'/>
      <Button onClick={()=>{setNeutral(neutral+1)}} text='neutral'/>
      <Button onClick={()=>{setBad(bad+1)}} text='bad'/>
      <h1>statistics</h1>
      {total===0 ? <>No feedback given</> : 
      ( 
      <>
      <Statistics good={good} neutral={neutral} bad={bad} average={average} positive={positive}/>
      </>
     )}
    </div>
  )
}

export default App