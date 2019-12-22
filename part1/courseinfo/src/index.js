import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part=
        {
          props.parts[0].name} exercises={props.parts[0].exercises
        }
        ></Part>
        
      <Part part=
        {
          props.parts[1].name} exercises={props.parts[1].exercises
        }
        ></Part>

      <Part part=
        {
          props.parts[2].name} exercises={props.parts[2].exercises
        }
        ></Part>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {
        props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
      }</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 4
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
