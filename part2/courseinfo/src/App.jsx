const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4         
      }
    ]
  }

  const part = course.parts.map((part)=> <p key={part.id}>{part.name} {part.exercises}</p>)
  const total = course.parts.reduce((sum, part)=> {
    return sum + part.exercises  
  },0)

  const Course = ({course}) => {
    return (
      <>
       <h1>
        {course.name}
      </h1>
      <>{part}</>
      <b>total of {total} exercises</b>
      </>
     
      
    )
  }

  return <Course course={course} />
}

export default App