import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const GiveFeedback = ({
  good, neutral, bad, setToBad, setToGood, setToNeutral
}) => {
  return (
    <section id="give-feedback">
      <h1>give feedback</h1>
      <Button
        onClick={() => setToGood(good + 1)}
        text="good"
      />
      <Button
        onClick={() => setToNeutral(neutral + 1)}
        text="neutral"
      />
      <Button
        onClick={() => setToBad(bad + 1)}
        text="bad"
      />
    </section>
  )
}

const Statistic = ({
  text, value
}) => {
  return (
    <tr class="statistic">
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({
  good, bad, neutral, goodVal, neutralVal, badVal
}) => {
  const all = good + neutral + bad
  const average = ((good * goodVal) + (neutral * neutralVal) +
    (bad * badVal)) / (good + neutral + bad)
  const positivePercentage = `${(good / (good + neutral + bad)) * 100} %`

  if (good + bad + neutral !== 0) {
    return (
      <section id="statistics">
        <h1>statistics</h1>
        <Statistic
          text="good" value={good}
        />
        <Statistic
          text="neutral" value={neutral}
        />
        <Statistic
          text="bad" value={bad}
        />
        <Statistic
          text="all" value={all}
        />
        <Statistic
          text="average" value={average}
        />
        <Statistic
          text="positive" value={positivePercentage}
        />
      </section>
    )
  }

  return (
    <section id="statistics">
      <h1>statistics</h1>
      <p>No feedback given</p>
    </section>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newVal => setGood(newVal)
  const setToNeutral = newVal => setNeutral(newVal)
  const setToBad = newVal => setBad(newVal)

  const goodVal = 1
  const neutralVal = 0
  const badVal = -1

  return (
    <div>
      <GiveFeedback
        good={good} bad={bad} neutral={neutral}
        setToGood={setToGood} setToNeutral={setToNeutral}
        setToBad={setToBad}
      />
      <Statistics
        good={good} bad={bad} neutral={neutral}
        goodVal={goodVal} neutralVal={neutralVal}
        badVal={badVal}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))