import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({text}) =>  <h1>{text}</h1>

const Button = ({handleClick, text}) => {
  return (
    <button onClick= {handleClick}>{text}</button>
  )
}

const Display = ({value, text}) => <div><table><tr><td>{text}</td><td>{value}</td></tr></table></div>

const Stadistic = ({good, neutral, bad}) =>{
  if (good===0 && neutral===0 && bad===0) {
    return (
      <p>No feedback given</p>
    )
    
  }
    return (
    <div>
      <table>
        <tr><Display value={good} text='good: '/></tr>
        <tr><Display value={neutral} text='neutral: '/></tr>
        <tr><Display value={bad} text='bad: '/></tr>
        <tr><td>All:</td> <td>{good + neutral + bad}</td></tr>
        <tr><td>Media:</td> <td>{(good - bad)/3}</td></tr>
        <tr><td>Porcent:</td><td>{(good*100)/(good + neutral + bad)}</td></tr>
      </table>
    </div>
    )
} 



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  
  
  return (
    <div>
      <Title text = 'Give feedback'/>
      <div>
        <Button handleClick={() => setGood(good +1)} text ='good'/>
        <Button handleClick={() => setNeutral(neutral + 1)} text ='neutral'/>
        <Button handleClick={() => setBad(bad + 1)} text ='bad'/>
      </div>
      <Title text = 'Statistics'/>

      <Stadistic good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
