const Header = () => {
 return (
   <h1>Half Stack application development</h1>
 )
}

const Part = (props) => {
  return (
    <>
    <p>
      {props.title} {props.exercises}
    </p>
    </>
  )
}

const Content = () => {

  return(
    <div>
    <Part title='Fundamentals of React' exercises='10' />
    <Part title='Using props to pass data' exercises='7'/>
    <Part title='State of a component' exercises='14'/>
    </div>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
return(
  <p>
    Number of exercises {exercises1 + exercises2 + exercises3}
  </p>
  
)
}

const App = () => {
  
  

  return (

    <div>
      <Header />
      <Content />
      <Total/>
    </div>
  )
}

export default App