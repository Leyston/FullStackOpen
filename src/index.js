import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleCLick, text}) => {
  return (
    <button onClick={handleCLick}>
      {text}
    </button>
  )
}
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)  
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleCLick={increaseByOne}
        text= 'plus'
      />
      <Button
        handleCLick={setToZero}
        text='zero'
      />
      <Button
        handleCLick={decreaseByOne}
        text='minus'
      />    
    </div>
  )
}


ReactDOM.render(<App />, 
document.getElementById('root'))


