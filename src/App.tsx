import React, { useState } from 'react'
import ClassContextComponent from './ClassContextComponent'
import FunctionContextComponent from './FunctionContextComponent'

export const ThemeContext = React.createContext<any>(null)
const myObject = {
  name: 'asdf',
  myMethod() {
    const callback = () => {
      console.log(this) // logs myObject
    }
    callback()
  },
}
function outerFunc() {
  const test = () => {}
  test()
}
myObject.myMethod()

function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme)
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ClassContextComponent />
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </>
  )
}

export default App
