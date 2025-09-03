 const Course = ({course}) => {
  const part = course.parts.map((part)=> <p key={part.id}>{part.name} {part.exercises}</p>)

  const total = course.parts.reduce((sum, part)=> {
    return sum + part.exercises  
  },0)

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

export default Course