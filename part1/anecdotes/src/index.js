import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const AnecdoteOfTheDay = ({
  anecdotes, points, selected,
  setToPoints, setToSelected, getRandomSelected 
}) => {
  return (
    <section id="anecdote-of-the-day">
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={() => setToPoints(points[selected] += 1)}
        >vote</button>
      <button onClick={() => setToSelected(getRandomSelected())}
        >next anecdote</button>
    </section>
  )
}

const AnecdoteWithMostVotes = ({
  mostVotedAnecdote, numberOfVotes
}) => {
  return (
    <section id="most-voted-anecdote">
      <h1>Anecdote with most votes</h1>
      <p>{mostVotedAnecdote}</p>
      <p>has {numberOfVotes} votes</p>
    </section>
  )
}

const App = ({
  anecdotes
}) => {
  const [selected, setSelected] = useState(0)

  const setToSelected = newVal => setSelected(newVal)
  const getRandomSelected = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const initPoints = new Uint8Array(anecdotes.length)
  const [points, setPoints] = useState(initPoints)

  const setToPoints = newVal => {
    const copy = [...points]
    copy[selected] = newVal
    setPoints(copy)
  }

  const getMostVotedIndex = () => {
    let index = -1
    let currentPoint = -1
    points.forEach((point, i) => {
      if (point > currentPoint) {
        currentPoint = point
        index = i
      }
    })
    return index
  }
  
  return (
    <div>
      <AnecdoteOfTheDay
        anecdotes={anecdotes}
        points={points} setToPoints={setToPoints}
        selected={selected} setToSelected={setToSelected}
        getRandomSelected={getRandomSelected}
      />
      <AnecdoteWithMostVotes
        mostVotedAnecdote={anecdotes[getMostVotedIndex()]}
        numberOfVotes={points[getMostVotedIndex()]}
      />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />, document.getElementById('root')
)